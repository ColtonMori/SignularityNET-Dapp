import React from "react";
import { Grid } from "@material-ui/core";
import SNETImageUpload from "../../standardComponents/SNETImageUpload";
import { ImageGridViewer } from "../image-viewer-helpers/ImageGridViewer";

import MethodNamesDropDown from "../../common/MethodNamesDropDown";
import {Edgedetect} from "./edgedetect_pb_service"

const initialUserInput = {
  methodName: "Select a method",
  uploadedImage: null,
  uploadedImageType: null,
};

export default class HolisticEdgeDetectionService extends React.Component {
  constructor(props) {
    super(props);
    this.handleImageUpload = this.handleImageUpload.bind(this);
    // TODO: check for the need
    //this.handleServiceName = this.handleServiceName.bind(this);
    this.handleFormUpdate = this.handleFormUpdate.bind(this);
    this.submitAction = this.submitAction.bind(this);

    this.state = {
      ...initialUserInput,
      serviceName: "Edgedetect",
      response: undefined,
    };
  }

  canBeInvoked() {
    // When the image isn't uploaded yet and when function name isn't yet given.
    return this.state.methodName !== "Select a method" && this.state.uploadedImage !== null;
  }

  handleFormUpdate(event) {
    this.setState({
      [event.target.name]: event.target.value,
    });
  }

  handleImageUpload(imageData, mimeType) {
    this.setState({
      uploadedImage: imageData,
      uploadedImageType: mimeType,
    });
  }

  // TODO: Check for the need
  /*
  handleServiceName(event) {
    let strService = event.target.value;
    this.setState({
      serviceName: strService,
    });
  }

  renderServiceMethodNames(serviceMethodNames) {
    const serviceNameOptions = ["Select a method", ...serviceMethodNames];
    return serviceNameOptions.map((serviceMethodName, index) => {
      return <option key={index}>{serviceMethodName}</option>;
    });
  }
*/

  submitAction() {
    const { methodName, uploadedImage, uploadedImageType } = this.state;
    const methodDescriptor = Edgedetect[methodName];
    const request = new methodDescriptor.requestType();

    request.setImage(uploadedImage);
    request.setImageType(uploadedImageType);

    const props = {
      request,
      onEnd: response => {
        const { message, status, statusMessage } = response;
        if (status !== 0) {
          throw new Error(statusMessage);
        }
        this.setState({
          ...initialUserInput,
          response: { status: "success", image: message.getImage(), imageType: message.getImageType() },
        });
      },
    };

    this.props.serviceClient.unary(methodDescriptor, props);
  }

  renderForm() {

    const serviceNameOptions = ["Select a method", ...this.props.serviceClient.getMethodNames(Edgedetect)];

    // TODO: Check for the need
    //const service = this.props.protoSpec.findServiceByName(this.state.serviceName);
    //const serviceMethodNames = service.methodNames;

    return (
      <React.Fragment>
        <div className="row">
          <div className="col-md-3 col-lg-3" style={{ padding: "10px", fontSize: "13px", marginLeft: "10px" }}>
            Method Name:
          </div>
          <div className="col-md-3 col-lg-3">
            <MethodNamesDropDown
                list={serviceNameOptions}
                value={this.state.methodName}
                onChange={this.handleFormUpdate}
              />
          </div>
        </div>
        <div className="row">
          <SNETImageUpload imageName={""} imageDataFunc={this.handleImageUpload} disableUrlTab={true} />
        </div>
        <div className="row" align="center">
          <button type="button" className="btn btn-primary" disabled={!this.canBeInvoked()} onClick={this.submitAction}>
            Call Edge Detection Algorithm
          </button>
        </div>
      </React.Fragment>
    );
  }

  parseResponse() {
    const { response } = this.state;
    if (typeof response !== "undefined") {
      if (typeof response === "string") {
        return response;
      }
      return response.image;
    }
  }

  renderComplete() {
    const response = this.parseResponse();
    return (
      <Grid container>
        <Grid item xs={12}>
          <ImageGridViewer result={[response]} />
        </Grid>
      </Grid>
    );
  }

  render() {
    if (this.props.isComplete) return <div>{this.renderComplete()}</div>;
    else {
      return <div>{this.renderForm()}</div>;
    }
  }
}
