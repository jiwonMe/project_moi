var http = require("http")
var sqlite = require("./loadData.js")

http.createServer((req, res) => {

    var questionList = sqlite.questionList();

    res.writeHead(200, { 'Content-Type': 'application/json' })
    res.end(JSON.stringify(questionList))
}).listen(8600)

console.log("moi api server starts at https://localhost:8600")