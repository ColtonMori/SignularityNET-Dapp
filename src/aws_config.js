import { APIEndpoints } from "./utility/stringConstants/APIEndpoints";

let endpoints = [];

Object.values(APIEndpoints).map(value => endpoints.push(value));

export const aws_config = {
    // OPTIONAL - if your API requires authentication
    Auth: {
        // REQUIRED - Amazon Cognito Identity Pool ID
        identityPoolId: "us-east-1:8a98cb16-e64b-4aec-bcbb-30c447aec81a",
        // REQUIRED - Amazon Cognito Region
        region: "us-east-1",
        // REQUIRED - Amazon Cognito User Pool ID
        userPoolId: "us-east-1_65MHedYHj",
        // REQUIRED - Amazon Cognito Web Client ID (26-char alphanumeric string)
        userPoolWebClientId: "49d6u3538qjlet95rs2aoo9usj",
    },

    API: {
        endpoints,
    },
};
