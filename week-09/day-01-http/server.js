import http from 'http';
// console.log(http);

// Some user dummy data
const userList = [
    { name: "John", age: 27},
    { name: "Joe", age: 53},
    { name: "Adam", age: 34},
]

const server = http.createServer((request, response) => {
    console.log("Server Created!");
    // console.log(request);
    console.log(request.url);

    //Endpoint
    if (request.url === '/') {
        response.write(`<h1>Hello World!</h1>`);
        response.end();
    }

    // Exercise Endpoint 2
      if (request.url === '/api/greet') {
        response.setHeader('content-type', 'text/html; charset=utf-8')
        response.write(`<h1>Hello Rob, thanks for visiting this URL 🙌</h1>`);
        response.end();
    }

    // Endpoint 3
      if (request.url === '/api/userList') {
        response.write(JSON.stringify(userList));
        response.end();
      }
})





server.listen(4000 ,() => {
    console.log("Server listening on port 4000");
});