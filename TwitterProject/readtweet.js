
//THIS FILE WAS FOR TESTING DURING DEVELOPMENT, IT IS NO LONGER NEEDED


// REQUIRE FS MODULE
const fs = require('fs');  

// READ FILE TWEETLIST.JSON
fs.readFile('./TwitterProject/tweetList.json', 'utf8', (err, data) => {
  if (err) {
    console.error(err);
    return;
  }

  // PARSE THE DATA AS A JSON ARRAY
  const arrayList = JSON.parse(data);

  // OUTPUT THE ARRAY IN CONSOLE
  console.log(arrayList[0]);
});