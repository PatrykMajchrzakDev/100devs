const url = require("url");

const myUrl = new URL("https://mywebsite.com/hello.html?id=100&status=active");

//Serialized URL
// console.log(myUrl.href);

//Host (root domain)
// console.log(myUrl.host);

//Host name (doesnt include port)
// console.log(myUrl.hostname);

//Path name
// console.log(myUrl.pathname);

//Serialized query (return ?id=100&status=active)
// console.log(myUrl.search);

//Return Params object
console.log(myUrl.searchParams);

//Add param
myUrl.searchParams.append("abc", 123);
console.log(myUrl.searchParams);

//Loop through params
myUrl.searchParams.forEach((value, name) => {
  console.log(`${name}: ${value}`);
});
