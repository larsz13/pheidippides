
// INPUT THE MESSAGE AND PROMPTS INTO THIS FILE. -- STEP ONE.

// REQUIRE OPENAI
const { Configuration, OpenAIApi } = require("openai");
const fs = require("fs").promises;
 
// DEFINE OPENAI API-KEY !Save in nodemon.js please!
const configuration = new Configuration({
    apiKey: ""//process.env.OPENAI_SECRET_KEY
});
const openaiInput = new OpenAIApi(configuration);
const openaiJourney = new OpenAIApi(configuration);
const openaiOutput = new OpenAIApi(configuration);

// PHEIDI TRAITS 
const traitA = ["creative", "committed", "helpful", "clever", "very friendly"];
let randomTraitAIndex = Math.floor(Math.random() * traitA.length);
let randomTraitA = traitA[randomTraitAIndex];

const traitB = ["athletic", "ambitious", "naive", "curious", "arrogant"];
let randomTraitBIndex = Math.floor(Math.random() * traitB.length);
let randomTraitB = traitB[randomTraitBIndex];

// PHEIDI POSITIVE MOODS
const posMood = ["happy", "content", "relaxed", "excited", "peaceful", "cheerful", "optimistic", "energetic", "confident"];
let randomPosMoodIndex = Math.floor(Math.random() * posMood.length);
let randomPosMood = posMood[randomPosMoodIndex];

// PHEIDI NEGATIVE MOODS
const negMood = ["exhausted", "sad", "angry", "disappointed", "hurt", "depressed", "stressed", "frustrated", "irritated"];
let randomNegMoodIndex = Math.floor(Math.random() * negMood.length);
let randomNegMood = negMood[randomNegMoodIndex];

// INPUT LOCATION VARIABLES
let pointA = "Zurich";
let pointB = "Bahamas";

// INPUT MESSAGE
let message = "This is what a cat lady looks like.";

// INPUT SENDER & RECEIVER
let sender = "@synthetic-nor";
let receiver = "@elonmusk";

// OPENAI INITIAL CONVO PROMPT
const chatLog = `The following is a conversation with an AI assistant.\nThe assistant is a messenger and is called Pheidippides.\nMessenger\'s trait: ${randomTraitA} and ${randomTraitB}\nMessenger\'s mood: ${randomPosMood} and ${randomNegMood} \n`;

// OPENAI QUESTIONS BASED ON STATUS
const inputQuestion = `Impersonating the messenger, write about delivering a message from ${pointA} to ${pointB}. Do not use more than two sentences.`;
const inputPrompt = `${chatLog}Human: ${inputQuestion}`;

const journeyQuestion = "Impersonating the messenger, write about your journey status about delivering the message in a humorous way. Do not use more than two sentences.";
const journeyPrompt = `${chatLog}Human: ${journeyQuestion}`;

const journeyQuestionA = `Impersonating the messenger, write about your journey status about delivering the message from ${pointA} to ${pointB} in a humorous way. Do not use more than two sentences.`;
const journeyPromptA = `${chatLog}Human: ${journeyQuestionA}`;

const journeyQuestionB = `Impersonating the messenger, write about your journey status about delivering the message from ${pointA} to ${pointB} in a humorous way. Do not use more than two sentences.`;
const journeyPromptB = `${chatLog}Human: ${journeyQuestionB}`;

const outputQuestion = "Impersonating the messenger, write a humorous sentence that you have delivered the message succesfully.";
const outputPrompt = `${chatLog}Human: ${outputQuestion}`;


// OPENAI SETTINGS & PRINTOUT
/*openaiInput.createCompletion({
    model: "text-davinci-003",
    prompt: inputPrompt,
    max_tokens: 150,
    temperature: 0.9
}).then(inputResponse => {
    let aiResponse = inputResponse.data.choices[0].text;
    let initialTweet = aiResponse.split(":")[1].trim();
    //console.log(initialTweet);
}).catch(err => {
    console.log(err);
});*/

// GENERATE AI REQUEST WITH SETTINGS, AI RESPONSE, & SAVE RESPONSES IN A LIST
async function generateTweetList(){
    // RESPONSE LIST ARRAY
    let responseList = [];

    // INPUT RESPONSE
    let inputResponse = await openaiInput.createCompletion({
        model: "text-davinci-003",
        prompt: inputPrompt,
        max_tokens: 150,
        temperature: 0.9
    });
    let inputAiResponse = inputResponse.data.choices[0].text;
    let initialTweet = inputAiResponse/*.split(":")[1].trim();*/;
    responseList.push(initialTweet);

    // JOURNEY RESPONSE
    let journeyResponse = await openaiJourney.createCompletion({
        model: "text-davinci-003",
        prompt: journeyPrompt,
        max_tokens: 150,
        temperature: 0.9
    })
    let journeyAiResponse = journeyResponse.data.choices[0].text;
    let journeyTweet = journeyAiResponse/*.split(":")[1].trim()*/;
    responseList.push(journeyTweet);

    // ANOTHER JOURNEY RESPONSE
    let journeyResponseA = await openaiJourney.createCompletion({
        model: "text-davinci-003",
        prompt: journeyPromptA,
        max_tokens: 150,
        temperature: 0.9
    })
    let journeyAiResponseA = journeyResponseA.data.choices[0].text;
    let journeyTweetA = journeyAiResponseA/*.split(":")[1].trim()*/;
    responseList.push(journeyTweetA);

    let journeyResponseB = await openaiJourney.createCompletion({
        model: "text-davinci-003",
        prompt: journeyPromptB,
        max_tokens: 150,
        temperature: 0.9
    })
    let journeyAiResponseB = journeyResponseB.data.choices[0].text;
    let journeyTweetB = journeyAiResponseB/*.split(":")[1].trim()*/;
    responseList.push(journeyTweetB);
    
    // OUTPUT RESPONSE
    let outputResponse = await openaiOutput.createCompletion({
        model: "text-davinci-003",
        prompt: outputPrompt,
        max_tokens: 150,
        temperature: 0.9
    })
    let outputAiResponse = outputResponse.data.choices[0].text;
    let outputQuote = outputAiResponse/*.split(":")[1].trim()*/;
    let outputTweet = `Message from ${sender} to ${receiver}: "${message}" ` + outputQuote; 
    responseList.push(outputTweet);

    // WRITES RESPONSES IN A LIST IN FILE TWEETLIST.JSON & STRINGIFIES THE RESPONSES
    await fs.writeFile("./TwitterProject/tweetList.json", JSON.stringify(responseList, null, "\t"));

    // READS ARRAY LIST IN THE FILE TWEETLIST.JSON WITH INDICES - For Janosch
    let arr = JSON.parse(await fs.readFile("./TwitterProject/tweetList.json"));
    console.log(arr);
}

// GENERATES TWEET LIST BASED ON FUNCTION generateTweetLists
module.exports = generateTweetList;