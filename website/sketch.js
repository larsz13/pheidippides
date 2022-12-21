/* ----- SERVER SENDING TRY
// Get the form data
const form = document.querySelector('form');
const formData = new FormData(form);

// Convert the form data to a JSON object
const data = {};
formData.forEach((value, key) => {
  data[key] = value;
});
const json = JSON.stringify(data);

// Send the request to the API
fetch('/api/endpoint', {
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

