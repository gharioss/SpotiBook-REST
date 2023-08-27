// See https://github.com/typicode/json-server#module
const fs = require('fs');
fs.readFileSync("./db.json", "utf8");
fs.copyFile( "./db.json","/tmp/bdd.json", (err) => {
    if (err) {
      console.log("Error Found:", err);
    }
    else {
   
      // Get the current filenames
      // after the function
    //   getCurrentFilenames();
    //   console.log("\nFile Contents of copied_file:",
    //     fs.readFileSync("copied_file.txt", "utf8"));
    }
  });
// fs.writeFile("/tmp/bdd.json", "../db.json", "utf8");
const jsonServer = require('json-server')
const server = jsonServer.create()
const router = jsonServer.router('/tmp/bdd.json')
const middlewares = jsonServer.defaults({readOnly:false})

server.use(middlewares)
// Add this before server.use(router)
// server.use(jsonServer.rewriter({
//     '/api/*': '/$1',
//     '/blog/:resource/:id/show': '/:resource/:id'
// }))
server.use(router)
server.listen(3000, () => {
    console.log('JSON Server is running')
})

// Export the Server API
module.exports = server
