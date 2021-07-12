import React from "react";
import { withStyles } from "@material-ui/styles";
import { useSelector } from "react-redux";
import { useStyles } from "../styles";
import CodeSnippet from "../../../common/CodeSnippet";
import StyledButton from "../../../common/StyledButton";
import DownloadMedia from "../../../../utility/MediaHelper";

const Python = ({ classes, description, orgId, serviceId }) => {
const { media } = useSelector(state => state.serviceDetailsReducer.details);

const downloadIntegrationFiles = () => {
   DownloadMedia(media, "grpc-stub/python", "python.zip");
};

  return (
    <section className={classes.languageTabSection}>
      <div className={classes.descriptionBtnsContainer}>
        <p>{description}</p>
        <div className={classes.btnContainer}>
          <StyledButton type="blue" btnText="Download Integration files" onClick={downloadIntegrationFiles} />
        </div> 
      </div>
      <div className={classes.setingUpFilesContainer}>
        <h3>Setting Up Files</h3>
        <div>
          <span>Install the SDK using PIP</span>
          <CodeSnippet>pip install snet.sdk</CodeSnippet>
        </div>
        <div>
          <span>
            To generate the gRPC client libraries, you need the SingularityNET Command Line Interface, or CLI, which you
            can install using pip
          </span>
          <CodeSnippet>pip install snet-cli</CodeSnippet>
        </div>
        <div>
          <span>Once you have the CLI installed, run the following command to generate gRPC stubs for service </span>
          <CodeSnippet>snet sdk generate-client-library python &lt;org_id&gt; &lt;service_id&gt;</CodeSnippet>
        </div>
        <div>
          <span>Run the code</span>
          <CodeSnippet>
            from snet.sdk import SnetSDK <br />
            import &lt;stub&gt;_pb2 <br />
            import &lt;stub&gt;_pb2_grpc <br />
            from config import config <br /> <br />
            sdk = SnetSDK(config) <br />
            service_client = sdk.create_service_client( <br />
            &lt;org_id&gt;, &lt;service_id&gt;, example_service_pb2_grpc.CalculatorStub) <br />
            request = example_service_pb2.Numbers(a=20, b=3) <br />
          </CodeSnippet>
        </div>
        <div>
          <span>Run the code</span>
          <CodeSnippet>
            from snet.sdk import SnetSDK <br />
            # from the folder downloaded using above button import the below stubs. <br />
            from python import &#60;stub&#62;_pb2 <br />
            from python import &#60;stub&#62;_pb2_grpc <br />
            <br />
            def invoke_service(): <br />
            &nbsp;&nbsp;&nbsp;&nbsp;config =&#123; <br />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"private_key": "&#60;your wallet's private key&#62;", <br />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"eth_rpc_endpoint": "https://ropsten.infura.io/v3/&#60;your infura
            key&#62;", <br />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"org_id": {orgId}, <br />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"service_id": {serviceId}, <br />
            &nbsp;&nbsp;&nbsp;&nbsp;&#125;
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;sdk = SnetSDK(config=config) <br />
            &nbsp;&nbsp;&nbsp;&nbsp;# Initiate service client with your organization and sevice details and the service
            stub you want to invoke <br />
            &nbsp;&nbsp;&nbsp;&nbsp;service_client = sdk.create_service_client( <br />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;org_id=config["org_id"], <br />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;service_id=config["service_id"], <br />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;service_stub=&#60;stub&#62;_pb2_grpc.&#60;service_stub&#62; <br />
            &nbsp;&nbsp;&nbsp;&nbsp;) <br />
            &nbsp;&nbsp;&nbsp;&nbsp;request = &#60;stub&#62;_pb2.&#60;method_name&#62;(&#60;arguments&#62;) <br />
            &nbsp;&nbsp;&nbsp;&nbsp;response = service_client.service.add(request) <br />
            &nbsp;&nbsp;&nbsp;&nbsp;print("service invoked successfully") <br />
          </CodeSnippet>
        </div>
      </div>
    </section>
  );
};

export default withStyles(useStyles)(Python);
