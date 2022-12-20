const { Configuration, OpenAIApi } = require("openai");

const configuration = new Configuration({
    apiKey: ""
});
const openai = new OpenAIApi(configuration);

openai.createCompletion({
    model: "text-davinci-003",
    prompt: "how are you?",
    max_tokens: 10,
    temperature: 0.9
}).then(response => {
    console.log(response.data.choices[0].text);
}).catch(err => {
    console.log(err);
});

//test();
// let textResult = response.data.choices[0].text;