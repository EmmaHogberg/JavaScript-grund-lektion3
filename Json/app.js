fetch("./persons.json")
  // .then((response) => {
  //   console.log(response);
  //   return response.json();
  // })

  .then((response) => response.json())
  .then((jsondata) => {
    console.log(jsondata);
  });

// Från javascript till sträng
let order = { color: "red", length: "100cm" };
JSON.stringify(order);

// Från sträng till javascript
JSON.parse();
