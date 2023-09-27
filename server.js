/**
 * This is the main Node.js server script for your project
 * Check out the two endpoints this back-end API provides in fastify.get and fastify.post below
 */

const path = require("path");

// Require the fastify framework and instantiate it
const fastify = require("fastify")({
  // Set this to true for detailed logging:
  logger: false,
});

// ADD FAVORITES ARRAY VARIABLE FROM TODO HERE

// Setup our static files
fastify.register(require("@fastify/static"), {
  root: path.join(__dirname, "public"),
  prefix: "/", // optional: default '/'
});

// Formbody lets us parse incoming forms
fastify.register(require("@fastify/formbody"));

// View is a templating manager for fastify
fastify.register(require("@fastify/view"), {
  engine: {
    handlebars: require("handlebars"),
  },
});  


const seo = require("./src/seo.json");
if (seo.url === "glitch-default") {
  seo.url = `https://${process.env.PROJECT_DOMAIN}.glitch.me`;
}

fastify.get("/home", function (request, reply) {
  let params = { _0x66acf: "https://docs.google.com/spreadsheets/d/e/2PACX-1vT5AeaNQiGQU8WYNKagxCiwFp36LRaX0w06oFleiz14NNb0_YgVxY2VpP8C4PeBi2gu6qwwcC8IlzZA/pub?gid=0&single=true&output=csv", x:"q" };
  return reply.view("/src/pages/index.hbs", params);
});


fastify.get("/", function (request, reply) {
  let params = { _0x66acf: "https://docs.google.com/spreadsheets/d/e/2PACX-1vT5AeaNQiGQU8WYNKagxCiwFp36LRaX0w06oFleiz14NNb0_YgVxY2VpP8C4PeBi2gu6qwwcC8IlzZA/pub?gid=0&single=true&output=csv" };
  return reply.view("/src/pages/index.hbs", params);
});



fastify.get("/csv", function (request, reply) {
 let params = "";
 return reply.view("/src/pages/csv.hbs", params);
});


// Run the server and report out to the logs
fastify.listen(
  { port: process.env.PORT, host: "0.0.0.0" },
  function (err, address) {
    if (err) {
      console.error(err);
      process.exit(1);
    }
    console.log(`Your app is listening on ${address}`);
  }
);
