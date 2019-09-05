import React from "react";
import { hasOwnDefinedProperty } from "../../../../utility/JSHelper";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import Slider from "@material-ui/lab/Slider";

import BarackObama from "../../../images/ThirdPartyServices/snet/text_generation/BarackObama.jpg";
import BarackObamaAvatar from "../../../images/ThirdPartyServices/snet/text_generation/BarackObama_avatar.jpg";
import { GENGPT2 } from "./ntg_pb_service";

const initialUserInput = {
  start_text: "",
  run_name: "trump",
  temperature: 1.2,
  top_k: 20,
  length: 256,
};

const runNames = [
  { key: "badastronomer", value: "Phil Plait" },
  { key: "barackobama", value: "Barack Obama", image: BarackObama, avatar: BarackObamaAvatar },
  { key: "beebrookshire", value: "Bethany Brookshire" },
  { key: "berniesanders", value: "Bernie Sanders" },
  { key: "billgates", value: "Bill Gates" },
  { key: "cmdr_hadfield", value: "Chris Hadfield" },
  { key: "conanobrien", value: "Conan O'Brien" },
  { key: "deborahblum", value: "Deborah Blum" },
  { key: "deepakchopra", value: "Deepak Chopra" },
  { key: "dril", value: "wint" },
  { key: "elonmusk", value: "Elon Musk" },
  { key: "ericrweinstein", value: "Eric Weinstein" },
  { key: "hillaryclinton", value: "Hillary Clinton" },
  { key: "jimmyfallon", value: "jimmyfallon" },
  { key: "joebiden", value: "Joe Biden" },
  { key: "joerogan", value: "Joe Rogan" },
  { key: "jordanbpeterson", value: "Dr Jordan B Peterson" },
  { key: "justinbieber", value: "Justin Bieber" },
  { key: "katyperry", value: "Katy Perry" },
  { key: "kevinhart4real", value: "Kevin Hart" },
  { key: "kimkardashian", value: "Kim Kardashian West" },
  { key: "ladygaga", value: "Lady Gaga" },
  { key: "laelaps", value: "Brian Switek" },
  { key: "neiltyson", value: "Neil deGrasse Tyson" },
  { key: "nietzschequotes", value: "NietzscheQuotes" },
  { key: "officialmcafee", value: "John McAfee" },
  { key: "trump", value: "Donald J. Trump" },
  { key: "rebeccaskloot", value: "Rebecca Skloot" },
  { key: "richarddawkins", value: "Richard Dawkins" },
  { key: "rickygervais", value: "Ricky Gervais" },
  { key: "samharrisorg", value: "Sam Harris" },
  { key: "terencemckenna_", value: "Terence McKenna" },
  { key: "theellenshow", value: "Ellen DeGeneres" },
  { key: "therock", value: "Dwayne Johnson" },
  { key: "thetweetofgod", value: "God" },
  { key: "ticbot", value: "TicBot" },
  { key: "veryshortstory", value: "Very Short Story" },
  { key: "virginiahughes", value: "Virginia Hughes" },
];

export default class TextGenerationService extends React.Component {
  constructor(props) {
    super(props);
    this.submitAction = this.submitAction.bind(this);
    this.handleFormUpdate = this.handleFormUpdate.bind(this);
    this.changeSlider = this.changeSlider.bind(this);

    this.users_guide = "https://github.com/iktina/neural-text-generation";

    this.state = {
      ...initialUserInput,
      serviceName: "GENGPT2",
      methodName: "gen_gpt_2",
      response: undefined,
    };

    this.isComplete = false;
    this.serviceMethods = [];
    this.allServices = [];
    this.methodsForAllServices = [];
  }

  changeSlider(elementName, value) {
    // Event Target Name and Value are getting Blank
    this.setState({
      [elementName]: value,
    });
  }

  handleFormUpdate(event) {
    this.setState({
      [event.target.name]: event.target.value,
    });
  }

  onKeyPressvalidator(event) {
    // console.log(event.target.value);
  }

  submitAction() {
    var btn = document.getElementById("invoke-button");
    btn.disabled = true;
    btn.innerHTML = "Wait...";

    const { methodName, start_text, temperature, top_k, run_name, length } = this.state;
    const methodDescriptor = GENGPT2[methodName];
    const request = new methodDescriptor.requestType();

    request.setStartText(start_text);
    request.setTemperature(temperature);
    request.setTopK(top_k);
    request.setRunName(run_name);
    request.setLength(length);

    const props = {
      request,
      onEnd: response => {
        const { message, status, statusMessage } = response;
        if (status !== 0) {
          throw new Error(statusMessage);
        }
        const selectedRunName = runNames.find(el => el.key === this.state.run_name);
        const image = selectedRunName && selectedRunName.image;
        this.setState({
          ...initialUserInput,
          response: { status: "success", answer: message.getAnswer(), image },
        });
      },
    };

    this.props.serviceClient.unary(methodDescriptor, props);
  }

  parseAvatarSrc = () => {
    const selectedRunName = runNames.find(el => el.key === this.state.run_name);
    return selectedRunName && selectedRunName.avatar;
  };

  renderForm() {
    return (
      <React.Fragment>
        <div className="row">
          <div className="col-md-3 col-lg-3" style={{ fontSize: "13px", marginLeft: "10px" }}>
            Start tweet text
          </div>
          <div className="col-md-3 col-lg-2">
            <textarea
              name="start_text"
              placeholder="Enter a start tweet text."
              className="w3-input w3-border"
              style={{ resize: "none", width: "250px" }}
              rows="4"
              maxLength="5000"
              value={this.state.start_text}
              onChange={this.handleFormUpdate}
              onKeyPress={e => this.onKeyPressvalidator(e)}
            ></textarea>
          </div>
        </div>
        <div className="row">
          <div className="col-md-3 col-lg-3" style={{ fontSize: "13px", marginLeft: "10px" }}>
            Choose Model
          </div>
          <div className="col-md-3 col-lg-2">
            <select value={this.state.run_name} onChange={this.handleFormUpdate} name="run_name">
              {runNames.map(item => {
                return (
                  <option key={item.key} value={item.key}>
                    {item.value}
                  </option>
                );
              })}
            </select>
            <img src={this.parseAvatarSrc()} alt="avatar" height={50} width={50} />
          </div>
        </div>

        <div className="row">
          <div className="col-md-3 col-lg-3" style={{ fontSize: "13px", marginLeft: "10px" }}>
            Max length
          </div>
          <div className="col-md-3 col-lg-2">
            <Slider
              name="length"
              style={{ width: "100px", padding: "0px 50%" }}
              value={this.state.length}
              step={1}
              max={1024}
              min={1}
              defaultValue={256}
              valueLabelDisplay="on"
              onChange={(e, val) => this.changeSlider("length", val)}
            ></Slider>
          </div>
        </div>

        <div className="row">
          <div className="col-md-3 col-lg-3" style={{ fontSize: "13px", marginLeft: "10px" }}>
            Top K
          </div>
          <div className="col-md-3 col-lg-2">
            <Slider
              name="top_k"
              style={{ width: "100px", padding: "0px 50%" }}
              value={this.state.top_k}
              step={10}
              min={0}
              max={100}
              defaultValue={20}
              valueLabelDisplay="on"
              onChange={(e, val) => this.changeSlider("top_k", val)}
            ></Slider>
          </div>
        </div>

        <div className="row">
          <div className="col-md-3 col-lg-3" style={{ fontSize: "13px", marginLeft: "10px" }}>
            Temperature
          </div>
          <div className="col-md-3 col-lg-2">
            <Slider
              name="temperature"
              aria-labelledby="discrete-slider-small-steps"
              style={{ width: "100px", padding: "0px 50%" }}
              value={this.state.temperature}
              step={0.1}
              min={0.2}
              max={1.5}
              defaultValue={1.0}
              valueLabelDisplay="on"
              onChange={(e, val) => this.changeSlider("temperature", val)}
            ></Slider>
          </div>
        </div>

        <div className="row">
          <div className="col-md-6 col-lg-6" style={{ textAlign: "right", marginTop: "5px", width: "245px" }}>
            <button id="invoke-button" type="button" className="btn btn-primary" onClick={this.submitAction}>
              Invoke
            </button>
          </div>
        </div>

        <div className="row">
          <div className="col-md-3 col-lg-3" style={{ fontSize: "13px", marginLeft: "10px", marginTop: "10px" }}>
            About
          </div>
          <div className="col-md-3 col-lg-2">
            <Button target="_blank" href={this.users_guide} style={{ fontSize: "13px", marginTop: "5px" }}>
              Guide
            </Button>
          </div>
        </div>
      </React.Fragment>
    );
  }

  renderComplete() {
    const { response } = this.state;
    return (
      <div>
        <p style={{ fontSize: "13px" }}>
          <div>
            <img src={response.image} height={400} />
          </div>
          Response from service is: <b>{response.answer.replace("[END BY LENGTH]", "")}</b>{" "}
        </p>
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
