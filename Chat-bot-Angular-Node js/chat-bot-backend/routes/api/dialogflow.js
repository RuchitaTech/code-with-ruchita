const dialogflow = require("@google-cloud/dialogflow");
const uuid = require("uuid");

const sessionId = uuid.v4();

async function runIntent( projectId, requestText){
    const sessionClient = new dialogflow.SessionsClient();
    const sessionPath = sessionClient.projectAgentSessionPath(
        projectId,
        sessionId
    );

    const intenRequest = {
        session: sessionPath,
        queryInput: {
            text: {
                text:requestText,
                languageCode:'en-US'
            },
        },
    }

    const response = await sessionClient.detectIntent(intenRequest);
    const result = response[0].queryResult;

    return await {
        "Query":result.queryText,
        "Response": result.fulfillmentText,
        "Intent":result.intent.displayName
    }
};

module.exports.runIntent = runIntent;