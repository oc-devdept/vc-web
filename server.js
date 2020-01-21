const cors = require("cors");
const express = require("express");
const next = require("next");
const path = require("path");
const bodyParser = require("body-parser");
const keys = require("./server/config/keys");
const stripe = require("stripe")(keys.stripeSecretKey);

const dev = process.env.NODE_ENV !== "production";

const app = next({ dir: ".", dev });

const handle = app.getRequestHandler();

app.prepare().then(() => {
  const server = express();
  // Static files
  // https://github.com/zeit/next.js/tree/4.2.3#user-content-static-file-serving-eg-images
  server.use(cors());
  server.use(
    "/assets/images",
    express.static(path.join(__dirname, "images"), {
      maxAge: dev ? "0" : "365d"
    })
  );

  server.use(bodyParser.json());

  server.get("/model/:id", (req, res) => {
    const link = req.params.id;
    console.log("link");
    console.log(link);

    return app.render(req, res, `/model/${link}`, { id: link });
  });

  server.get("/product/:id", (req, res) => {
    const link = req.params.id;
    console.log("link");
    console.log(link);

    return app.render(req, res, `/product`, { id: link });
  });

  server.get("*", (req, res) => {
    return handle(req, res);
  });

  const PORT = process.env.PORT || 3000;

  server.listen(PORT, err => {
    if (err) throw err;
    console.log(`> Read on http://localhost:${PORT}`);
  });
});
