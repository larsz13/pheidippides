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
let pointA = "Basel";
let pointB = "Zurich";

// INPUT MESSAGE
let message = "I am a machine.";

// INPUT SENDER & RECEIVER
let sender = "@PheidippidesBot";
let receiver = "@ZulyInspires";

// OPENAI INITIAL CONVO PROMPT
const chatLog = `The following is a conversation with an AI assistant.\nThe assistant is a messenger and is called Pheidippides.\nMessenger\'s trait: ${randomTraitA} and ${randomTraitB}\nMessenger\'s mood: ${randomPosMood} and ${randomNegMood} \n`;

// OPENAI QUESTIONS BASED ON STATUS
const inputQuestion = `Write two humorous sentences that you are to deliver a message from ${pointA} to ${pointB}.`;
const inputPrompt = `${chatLog}Human: ${inputQuestion}`;

const journeyQuestion = "Write two humorous sentences about your journey status about delivering the message.";
const journeyPrompt = `${chatLog}Human: ${journeyQuestion}`;

const outputQuestion = "Write two humorous sentences that you have delivered the message succesfully.";
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
    let initialTweet = inputAiResponse.split(":")[1].trim();
    responseList.push(initialTweet);

    // JOURNEY RESPONSE
    let journeyResponse = await openaiJourney.createCompletion({
        model: "text-davinci-003",
        prompt: journeyPrompt,
        max_tokens: 150,
        temperature: 0.9
    })
    let journeyAiResponse = journeyResponse.data.choices[0].text;
    let journeyTweet = journeyAiResponse.split(":")[1].trim();
    responseList.push(journeyTweet);
    
    // OUTPUT RESPONSE
    let outputResponse = await openaiOutput.createCompletion({
        model: "text-davinci-003",
        prompt: outputPrompt,
        max_tokens: 150,
        temperature: 0.9
    })
    let outputAiResponse = outputResponse.data.choices[0].text;
    let outputQuote = outputAiResponse.split(":")[1].trim();
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