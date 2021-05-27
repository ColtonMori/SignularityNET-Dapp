import React, { Component, Fragment } from "react";
import { withStyles } from "@material-ui/styles";
import PlayIcon from "@material-ui/icons/PlayArrow";
import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";
import Modal from "@material-ui/core/Modal";
import CloseIcon from "@material-ui/icons/Close";
import ArrowForwardIosIcon from "@material-ui/icons/ArrowForwardIos";

import getVideoId from "get-video-id";

import DefaultIconForVideo from "../../../assets/images/Play_1.png";
import { HERO_IMG } from "../";

import { useStyles } from "./styles";

const mediaTypes = { IMAGE: "IMAGE", VIDEO: "VIDEO" };

class MediaGallery extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showIndex: false,
      showBullets: true,
      infinite: true,
      showThumbnails: true,
      showFullscreenButton: true,
      showGalleryFullscreenButton: true,
      showPlayButton: true,
      showGalleryPlayButton: true,
      showNav: true,
      isRTL: false,
      slideDuration: 450,
      slideInterval: 2000,
      slideOnThumbnailOver: false,
      thumbnailPosition: "bottom",
      showVideo: {},
      showLightBox: false,
      mediaType: mediaTypes.IMAGE,
      activeIndex: 0,
    };

    this.filteredData = this.props.data
      ? this.props.data.filter(item => {
          return item.asset_type !== HERO_IMG;
        })
      : [];

    this.images = this.filteredData.map((item, index) => {
      if (item.file_type === "video") {
        return {
          index,
          original: this.getYoutubeVideoThumbnail(item.url),
          thumbnail: this.getYoutubeVideoThumbnail(item.url, "thumbnail"),
          embedUrl: this.enhancedEmbedUrl(item.url),
          renderItem: this._renderVideo.bind(this),
          altText: item.alt_text,
        };
      }
      return {
        index,
        original: item.url,
        thumbnail: item.url,
        altText: item.alt_text,
      };
    });
  }

  enhancedEmbedUrl(link) {
    if (!link.includes("you")) {
      return link;
    }

    const youtubeId = getVideoId(link);
    const embededLink = `https://youtube.com/embed/${youtubeId.id}?autoplay=1&mute=1`;
    return embededLink;
  }

  getYoutubeVideoThumbnail(link, type) {
    if (!link.includes("you")) {
      return DefaultIconForVideo;
    }

    const youtubeId = getVideoId(link);
    const youtubeThumbnail = `https://img.youtube.com/vi/${youtubeId.id}/${type === "thumbnail" ? "1.jpg" : "0.jpg"}`;
    return youtubeThumbnail;
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.state.slideInterval !== prevState.slideInterval || this.state.slideDuration !== prevState.slideDuration) {
      // refresh setInterval
      this._imageGallery.pause();
      this._imageGallery.play();
    }
  }

  _onImageClick(event) {
    const lightBoxMedia = event.target.getAttribute("src");

    const currentVideoObj = this.images.find(value => {
      return value.original === lightBoxMedia;
    });

    this.setState(
      {
        activeIndex: currentVideoObj && currentVideoObj.index ? currentVideoObj.index : 0,
        mediaType: event.target.getAttribute("data-mediaType") ? mediaTypes.VIDEO : mediaTypes.IMAGE,
      },
      () => {
        this.setState({ showLightBox: true });
      }
    );
  }

  onThumbnailClick = (event, index) => {
    let mediaType;

    if (this.images[index].embedUrl) {
      mediaType = mediaTypes.VIDEO;
    } else {
      mediaType = mediaTypes.IMAGE;
    }

    this.setState(
      {
        activeIndex: index,
        mediaType,
      },
      () => {
        this.setState({ showLightBox: true });
      }
    );
  };

  _onImageLoad(event) {
    console.debug("loaded image", event.target.src);
  }

  _onSlide(index) {
    this._resetVideo();
    console.debug("slid to index", index);
  }

  _onPause(index) {
    console.debug("paused on index", index);
  }

  _onScreenChange(fullScreenElement) {
    console.debug("isFullScreen?", !!fullScreenElement);
  }

  _onPlay(index) {
    console.debug("playing from index", index);
  }

  _handleInputChange(state, event) {
    this.setState({ [state]: event.target.value });
  }

  _handleCheckboxChange(state, event) {
    this.setState({ [state]: event.target.checked });
  }

  _handleThumbnailPositionChange(event) {
    this.setState({ thumbnailPosition: event.target.value });
  }

  _resetVideo() {
    this.setState({ showVideo: {} });

    if (this.state.showPlayButton) {
      this.setState({ showGalleryPlayButton: true });
    }

    if (this.state.showFullscreenButton) {
      this.setState({ showGalleryFullscreenButton: true });
    }
  }

  _toggleShowVideo(url) {
    this.state.showVideo[url] = !Boolean(this.state.showVideo[url]);
    this.setState({
      showVideo: this.state.showVideo,
    });

    if (this.state.showVideo[url]) {
      if (this.state.showPlayButton) {
        this.setState({ showGalleryPlayButton: false });
      }

      if (this.state.showFullscreenButton) {
        this.setState({ showGalleryFullscreenButton: false });
      }
    }
  }

  _renderVideo(item) {
    const { classes } = this.props;
    return (
      <div className={classes.videoMainContainer}>
        <img
          className="image-gallery-image"
          src={item.original}
          loading="lazy"
          data-mediaType={item.embedUrl ? mediaTypes.VIDEO : mediaTypes.IMAGE}
          alt={item.altText}
        />
        {item.description && (
          <span className="image-gallery-description" style={{ right: "0", left: "initial" }}>
            {item.description}
          </span>
        )}
        <PlayIcon
          src={item.original}
          data-mediaType={item.embedUrl ? mediaTypes.VIDEO : mediaTypes.IMAGE}
          className={classes.playVideoIcon}
        />
      </div>
    );
  }

  handleClose = () => {
    this.setState({ showLightBox: false });
  };

  showPrev = data => {
    const { activeIndex } = this.state;
    let mediaType;
    const nextIndex = activeIndex === 0 ? data.length - 1 : activeIndex - 1;

    if (data[nextIndex].embedUrl) {
      mediaType = mediaTypes.VIDEO;
    } else {
      mediaType = mediaTypes.IMAGE;
    }

    this.setState(prevState => {
      return {
        activeIndex: prevState.activeIndex === 0 ? data.length - 1 : prevState.activeIndex - 1,
        mediaType,
      };
    });
  };

  showNext = data => {
    const { activeIndex } = this.state;
    let mediaType;
    const nextIndex = activeIndex === data.length - 1 ? 0 : activeIndex + 1;

    if (data[nextIndex].embedUrl) {
      mediaType = mediaTypes.VIDEO;
    } else {
      mediaType = mediaTypes.IMAGE;
    }

    this.setState(prevState => {
      return {
        activeIndex: prevState.activeIndex === data.length - 1 ? 0 : prevState.activeIndex + 1,
        mediaType,
      };
    });
  };

  render() {
    const { classes } = this.props;
    const { showLightBox, mediaType, activeIndex } = this.state;

    return this.images.length !== 0 ? (
      <Fragment>
        <div className={classes.mediaGalleryContainer}>
          <h2>Media Gallery ({this.images.length})</h2>
          <ImageGallery
            ref={i => (this._imageGallery = i)}
            items={this.images}
            lazyLoad={false}
            onClick={this._onImageClick.bind(this)}
            onImageLoad={this._onImageLoad}
            onSlide={this._onSlide.bind(this)}
            onPause={this._onPause.bind(this)}
            onScreenChange={this._onScreenChange.bind(this)}
            onPlay={this._onPlay.bind(this)}
            infinite={this.state.infinite}
            showThumbnails={this.state.showThumbnails}
            showIndex={this.state.showIndex}
            showNav={this.state.showNav}
            isRTL={this.state.isRTL}
            thumbnailPosition={this.state.thumbnailPosition}
            slideDuration={parseInt(this.state.slideDuration)}
            slideInterval={parseInt(this.state.slideInterval)}
            slideOnThumbnailOver={this.state.slideOnThumbnailOver}
            additionalClass={`${classes.marketplace_media_gallery} ${
              this.images.length > 4 ? classes.showViewMore : null
            }`}
            onThumbnailClick={this.onThumbnailClick.bind(this)}
            disableKeyDown={showLightBox}
          />
        </div>
        <Modal open={showLightBox} className={classes.mediaGalleryLightBox} onClose={this.handleClose}>
          <div className={classes.mediaContainer}>
            <h2>Media Gallery</h2>
            <CloseIcon className={classes.closeIcon} onClick={this.handleClose} />
            <div className={classes.mediaWrapper}>
              {this.images.length > 1 ? (
                <div className={classes.arrowIconContainer}>
                  <ArrowForwardIosIcon
                    className={`${classes.leftNavIcon} ${classes.navIcon}`}
                    onClick={() => this.showPrev(this.images)}
                  />
                  <ArrowForwardIosIcon
                    className={`${classes.rigthtNavIcon} ${classes.navIcon}`}
                    onClick={() => this.showNext(this.images)}
                  />
                </div>
              ) : null}
              {mediaType === mediaTypes.IMAGE ? (
                <img src={this.images[activeIndex].original} alt={this.images[activeIndex].alt_text} loading="lazy" />
              ) : (
                <iframe
                  src={this.images[activeIndex].embedUrl}
                  frameborder="0"
                  allowFullScreen
                  className={classes.lightBoxIframe}
                />
              )}
              {this.images[activeIndex].altText ? (
                <span className={classes.lightBoxDescription}>{this.images[activeIndex].altText}</span>
              ) : null}
            </div>
          </div>
        </Modal>
      </Fragment>
    ) : null;
  }
}

export default withStyles(useStyles)(MediaGallery);
