// Get the form data
/*const form = document.querySelector('form');
const formData = new FormData(form);*/

// Convert the form data to a JSON object
/*const data = {};
formData.forEach((value, key) => {
  data[key] = value;
});
const json = JSON.stringify(data);*/

// Send the request to the API
/*fetch('/api/endpoint', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json'
  },
  body: json
})
  .then(response => response.json())
  .then(data => console.log(data))
  .catch(error => console.error(error));
*/

let mode = 0;
let msg;
let rec;
let loc;

const button = document.querySelector('[data-js="button"]');
const labels = document.querySelector('#labels');
const speech = document.querySelector('#speech');

button.addEventListener('click',changeMode);
initialize();


function initialize(){
  if(mode==1){
    speech.innerHTML = "I got your message! I will deliver “Joy to you, we won!” to @receiver. The journey to Basel will take me about 12h. Looking forward to it!";
  }else{
    speech.innerHTML = "Hey! I am Pheidippides and would love to deliver your message.";
  }
}

function changeMode(){
  msg = document.getElementById("msg").value;
  send = document.getElementById("send").value;
  rec = document.getElementById("rec").value;
  locA = document.getElementById("locA").value;
  locB = document.getElementById("locB").value;
  if(mode==0){
    console.log("changed to 1");
    labels.classList.toggle("hide");
    speech.innerHTML = "I got your message, @"+send+"! I will deliver “"+msg+"” to @"+rec+". My journey will take me from "+locA+" to "+locB+". Looking forward to it!";
    mode = 1;
  }else if(mode==1){
    console.log("changed to 0");
    labels.classList.toggle("hide");
    speech.innerHTML = "Hey! I am Pheidippides and would love to deliver your message.";
    mode = 0;
  }
}