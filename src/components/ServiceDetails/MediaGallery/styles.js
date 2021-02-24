export const useStyles = theme => ({
  mediaGalleryContainer: {
    boxShadow: "0 1px 1px 0 rgba(0,0,0,0.07), 0 2px 1px -1px rgba(0,0,0,0.07), 0 1px 3px 0 rgba(0,0,0,0.1)",
    margin: "25px 0 70px",
    borderRadius: 4,
    backgroundColor: theme.palette.text.white,
    "& iframe": { width: "100%" },
  },
  marketplace_media_gallery: {
    padding: "10px 30px 31px",
    "& .image-gallery-thumbnail.active, .image-gallery-thumbnail:hover, .image-gallery-thumbnail:focus": {
      border: "4px solid #4086ff",
    },
    "& .image-gallery-right-nav, .image-gallery-left-nav": {
      padding: 0,
      backgroundColor: "rgba(255,255,255,.9)",
      filter: "none",
      width: 64,
      height: 64,
      "& svg": {
        color: "#000",
        opacity: 0.1,
        height: 64,
        "&:hover": {
          color: "#4086ff",
          opacity: 1,
        },
      },
    },
    "& .image-gallery-content.fullscreen": {
      top: "50%",
      left: "50%",
      transform: "translate(-50%, -50%)",
      "& .image-gallery-slide-wrapper": {
        "& button": { display: "block" },
      },
      "& .image-gallery-play-button": { display: "none !important" },
      "& .image-gallery-slide .image-gallery-description": {
        boxSizing: "border-box",
        bottom: 0,
        backgroundColor: "#000",
        color: "#fff",
        width: "100%",
        display: "block",
        textAlign: "left",
        padding: "12px 15px",
      },
      "& .image-gallery-thumbnails-wrapper": { display: "none" },
    },
    "& .image-gallery-slide-wrapper": {
      "& button": {
        display: "none",
        outline: "none",
      },
      "& .image-gallery-slide .image-gallery-description": { display: "none" },
      "& .image-gallery-thumbnails-wrapper": { display: "block" },
    },
    "& .image-gallery-icon": {
      "&:hover": { color: "#4086ff" },
    },
    "& .image-gallery-thumbnails-container": {
      "& > button": {
        "&:nth-child(n+5)": { display: "none" },
        "@media(max-width: 1500px) and (min-width: 1121px)": { "&:nth-child(n+4)": { display: "none" } },
        "@media(max-width: 1120px) and (min-width: 769px)": { "&:nth-child(n+3)": { display: "none" } },
      },
    },
  },
  showViewMore: {
    "& .image-gallery-thumbnails-container": {
      "& > button": {
        "&:nth-child(4)": {
          "& .image-gallery-thumbnail-inner": {
            "&::after": {
              backgroundColor: "rgba(0, 0, 0, .5)",
              content: '"View More"',
              fontFamily: "Muli, sans-serif",
              color: "#fff",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              height: "100%",
              width: "100%",
              zIndex: 100000,
              position: "absolute",
              left: 0,
              top: 0,
              cursor: "pointer",
            },
          },
        },
        "@media(max-width: 1500px) and (min-width: 1121px)": {
          "&:nth-child(3)": {
            "& .image-gallery-thumbnail-inner": {
              "&::after": {
                backgroundColor: "rgba(0, 0, 0, .5)",
                content: '"View More"',
                fontFamily: "Muli, sans-serif",
                color: "#fff",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                height: "100%",
                width: "100%",
                zIndex: 100000,
                position: "absolute",
                left: 0,
                top: 0,
                cursor: "pointer",
              },
            },
          },
        },
        "@media(max-width: 1120px) and (min-width: 769px)": {
          "&:nth-child(2)": {
            "& .image-gallery-thumbnail-inner": {
              "&::after": {
                backgroundColor: "rgba(0, 0, 0, .5)",
                content: '"View More"',
                fontFamily: "Muli, sans-serif",
                color: "#fff",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                height: "100%",
                width: "100%",
                zIndex: 100000,
                position: "absolute",
                left: 0,
                top: 0,
                cursor: "pointer",
              },
            },
          },
        },
      },
    },
  },
  videoMainContainer: { position: "relative" },
  playVideoIcon: {
    backgroundColor: "#4086FF",
    boxShadow: "0 0 10px 0 rgba(0,0,0,0.4)",
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    color: "#fff",
    padding: 20,
    borderRadius: "50%",
    cursor: "pointer",
    "&:hover": {
      backgroundColor: "#fff",
      color: "#4086ff",
    },
  },
  mediaWrapper: {
    height: 552,
    position: "relative",
  },
  mediaContainer: {
    boxSizing: "border-box",
    width: 1045,
    height: 666,
    padding: "10px 33px 56px",
    borderRadius: 6,
    position: "absolute",
    top: "50%",
    left: "50%",
    backgroundColor: theme.backgroundColor.white,
    boxShadow: "0px 3px 5px -1px rgba(0,0,0,0.2),0px 5px 8px 0px rgba(0,0,0,0.14),0px 1px 14px 0px rgba(0,0,0,0.12)",
    outline: "none",
    transform: "translate(-50%, -50%)",
    "& h2": {
      paddingBottom: 13,
      fontSize: 20,
      fontWeight: 400,
      color: "#212121",
    },
    "& img": {
      width: "100%",
      height: "100%",
    },
    "@media(max-width: 1050px)": {
      width: "90%",
      height: "90%",
    },
  },
  arrowIconContainer: {
    position: "absolute",
    top: "50%",
    right: 0,
    left: 0,
    transform: "translateY(-50%)",
  },
  navIcon: {
    position: "absolute",
    backgroundColor: "rgba(255,255,255,0.9)",
    opacity: 0.1,
    padding: 20,
    cursor: "pointer",
    "&:hover": {
      opacity: 1,
      color: theme.palette.text.primary,
    },
  },
  leftNavIcon: {
    borderTopLeftRadius: 4,
    borderBottomLeftRadius: 4,
    left: 0,
    transform: "rotate(180deg)",
  },
  rigthtNavIcon: {
    borderTopRightRadius: 4,
    borderBottomRightRadius: 4,
    right: 0,
  },
  hideIcon: { display: "none" },
  closeIcon: {
    position: "absolute",
    top: 11,
    right: 27,
    cursor: "pointer",
  },
  lightBoxIframe: {
    width: "100%",
    height: "100%",
    "& img": {
      width: "100%",
      height: "100%",
      objectFit: "fill",
    },
  },
  lightBoxDescription: {
    paddingTop: 15,
    display: "inline-block",
  },
});
