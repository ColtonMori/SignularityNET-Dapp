import React from "react";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
import SvgIcon from "@material-ui/core/SvgIcon";
import InfoIcon from "@material-ui/icons/Info";

import HoverIcon from "../../standardComponents/HoverIcon";
import OutlinedTextArea from "../../common/OutlinedTextArea";

import { VideoCaptioning } from "./video_cap_pb_service";

export default class S2VTVideoCaptioning extends React.Component {
  constructor(props) {
    super(props);
    this.submitAction = this.submitAction.bind(this);
    this.handleFormUpdate = this.handleFormUpdate.bind(this);

    this.textInput = React.createRef();

    this.state = {
      users_guide:
        "https://github.com/singnet/dnn-model-services/blob/master/docs/users_guide/s2vt-video-captioning.md",
      code_repo: "https://github.com/singnet/dnn-model-services/tree/master/services/s2vt-video-captioning",
      reference: "https://vsubhashini.github.io/s2vt.html",

      serviceName: "VideoCaptioning",
      methodName: "video_cap",

      url: "",
      start_time_sec: "0",
      stop_time_sec: "0",

      response: undefined,
      isComplete: false,
    };
    this.isComplete = false;
    this.serviceMethods = [];
    this.allServices = [];
    this.methodsForAllServices = [];
  }

  isValidVideoURL(str) {
    return str.startsWith("http://") || str.startsWith("https://");
  }

  canBeInvoked() {
    return (
      this.isValidVideoURL(this.state.url) &&
      ((parseInt(this.state.start_time_sec) >= 0 &&
        parseInt(this.state.stop_time_sec) > 0 &&
        parseInt(this.state.start_time_sec) < parseInt(this.state.stop_time_sec)) ||
        (parseInt(this.state.start_time_sec) === 0 && parseInt(this.state.stop_time_sec) === 0))
    );
  }

  handleFormUpdate(event) {
    this.setState({ [event.target.name]: event.target.value });
  }

  submitAction() {
    const { methodName, url, start_time_sec, stop_time_sec } = this.state;
    const methodDescriptor = VideoCaptioning[methodName];
    const request = new methodDescriptor.requestType();

    request.setUrl(url);
    request.setStartTimeSec(start_time_sec);
    request.setStopTimeSec(stop_time_sec);

    const props = {
      request,
      onEnd: response => {
        const { message, status, statusMessage } = response;
        if (status !== 0) {
          throw new Error(statusMessage);
        }
        this.setState({
          response: { status: "success", value: message.getValue() },
        });
      },
    };

    this.props.serviceClient.unary(methodDescriptor, props);
  }

  handleFocus = event => event.target.select();

  renderForm() {
    return (
      <React.Fragment>
        <Grid container direction="column" justify="center">
          <Grid item xs={12} style={{ textAlign: "left" }}>
            <OutlinedTextArea
              id="url"
              ref={this.textInput}
              name="url"
              label="Video URL (.avi, .mp4 or YouTube)"
              fullWidth={true}
              value={this.state.url}
              rows={1}
              onChange={this.handleFormUpdate}
              onFocus={this.handleFocus}
            />
          </Grid>

          <Grid item xs={4} style={{ textAlign: "left" }}>
            <OutlinedTextArea
              id="standard-number"
              ref={this.textInput}
              name="start_time_sec"
              label="StartTime (s):"
              type="number"
              fullWidth={false}
              value={this.state.start_time_sec}
              rows={1}
              onChange={this.handleFormUpdate}
              onFocus={this.handleFocus}
            />
          </Grid>

          <Grid item xs={4} style={{ textAlign: "left" }}>
            <OutlinedTextArea
              id="filled-number"
              ref={this.textInput}
              name="stop_time_sec"
              label="EndTime (s):"
              type="number"
              fullWidth={false}
              value={this.state.stop_time_sec}
              rows={1}
              onChange={this.handleFormUpdate}
              onFocus={this.handleFocus}
            />
          </Grid>

          <Grid item xs container justify="flex-end">
            <Grid item>
              <HoverIcon text="View code on Github" href={this.state.code_repo}>
                <SvgIcon>
                  <path // Github Icon
                    d="M12.007 0C6.12 0 1.1 4.27.157 10.08c-.944 5.813 2.468 11.45 8.054 13.312.19.064.397.033.555-.084.16-.117.25-.304.244-.5v-2.042c-3.33.735-4.037-1.56-4.037-1.56-.22-.726-.694-1.35-1.334-1.756-1.096-.75.074-.735.074-.735.773.103 1.454.557 1.846 1.23.694 1.21 2.23 1.638 3.45.96.056-.61.327-1.178.766-1.605-2.67-.3-5.462-1.335-5.462-6.002-.02-1.193.42-2.35 1.23-3.226-.327-1.015-.27-2.116.166-3.09 0 0 1.006-.33 3.3 1.23 1.966-.538 4.04-.538 6.003 0 2.295-1.5 3.3-1.23 3.3-1.23.445 1.006.49 2.144.12 3.18.81.877 1.25 2.033 1.23 3.226 0 4.607-2.805 5.627-5.476 5.927.578.583.88 1.386.825 2.206v3.29c-.005.2.092.393.26.507.164.115.377.14.565.063 5.568-1.88 8.956-7.514 8.007-13.313C22.892 4.267 17.884.007 12.008 0z"
                  />
                </SvgIcon>
              </HoverIcon>
            </Grid>
            <Grid item>
              <HoverIcon text="User's guide" href={this.state.users_guide}>
                <InfoIcon />
              </HoverIcon>
            </Grid>
            <Grid item>
              <HoverIcon text="View original project" href={this.state.reference}>
                <SvgIcon>
                  <path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm0 11.701c0 2.857-1.869 4.779-4.5 5.299l-.498-1.063c1.219-.459 2.001-1.822 2.001-2.929h-2.003v-5.008h5v3.701zm6 0c0 2.857-1.869 4.779-4.5 5.299l-.498-1.063c1.219-.459 2.001-1.822 2.001-2.929h-2.003v-5.008h5v3.701z" />
                </SvgIcon>
              </HoverIcon>
            </Grid>
          </Grid>

          <Grid item xs={12} style={{ textAlign: "center" }}>
            <Button variant="contained" color="primary" onClick={this.submitAction} disabled={!this.canBeInvoked()}>
              Invoke
            </Button>
          </Grid>
        </Grid>
      </React.Fragment>
    );
  }

  renderComplete() {
    let status = "Ok\n";
    let value = "\n";

    if (typeof this.state.response === "object") {
      value = "\n" + this.state.response.value;
    } else {
      status = this.state.response + "\n";
    }

    return (
      <div style={{ background: "#F8F8F8", padding: "24px" }}>
        <h4> Results</h4>
        <div style={{ padding: "10px 10px 0 10px", fontSize: "14px", color: "#9b9b9b" }}>
          <div style={{ padding: "10px 0", borderBottom: "1px solid #eee" }}>
            Status: <span style={{ color: "#212121" }}>{status}</span>
          </div>
          <div style={{ padding: "10px 0" }}>
            Caption:
            <div
              style={{
                color: "#212121",
                marginTop: "5px",
                padding: "10px",
                background: "#f1f1f1",
                borderRadius: "4px",
              }}
            >
              <pre>{value}</pre>
            </div>
          </div>
        </div>
      </div>
    );
  }

  render() {
    if (this.props.isComplete) return <div>{this.renderComplete()}</div>;
    else {
      return <div>{this.renderForm()}</div>;
    }
  }
}
