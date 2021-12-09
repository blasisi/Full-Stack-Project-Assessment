const express = require("express");
const app = express();
const cors = require("cors");
const port = process.env.PORT || 5000;
const { Pool } = require("pg");

var bodyParser = require("body-parser");
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use(cors());
app.listen(port, () => 
console.log(`Listening on port ${port}`)
);

// Store and retrieve your videos from here
// If you want, you can copy "exampleresponse.json" into here to have some data to work with
//https://dev.to/prisma/how-to-setup-a-free-postgresql-database-on-heroku-1dc1

//connection to database server
const pool = new Pool({
  connectionString:
    "postgres://lmrcgpxpyqlfsh:308202d17a9736419863ea16d4265ceda44ba92e08bdbea24c99f80247c82f35@ec2-54-229-68-88.eu-west-1.compute.amazonaws.com:5432/d6seo1quc578dv",
  ssl: {
    rejectUnauthorized: false,
  },
  user: "lmrcgpxpyqlfsh",
  host: "ec2-54-229-68-88.eu-west-1.compute.amazonaws.com",
  database: "d6seo1quc578dv",
  password: "308202d17a9736419863ea16d4265ceda44ba92e08bdbea24c99f80247c82f35",
  port: "5432",
});

// GET "/" all videos "
app.get("/", (req, res) => {
  // Delete this line after you've confirmed your server is running 
    pool.query(`SELECT * from videos`)
    .then((result) =>{
          res.send(result.rows);
        })
        .catch((error) =>res.status(500).send(error));
});

// //This endpoint is used to add a video to the API.
// // app.post("/videos", (req, res) => {
//   app.get("/", (req,res) =>{
// const order = req.query.order;
// if(order){
//   pool.query(`SELECT * from videos ORDER by rating ${order}`)
//   .then((result) =>{
//     res.join(result.rows);
//   })
//   .catch((error) =>res.status(500).send(error));
// }else{
//   pool.query(`SELECT * from videos desc`)
//   .then((result) =>{
//     res.send(results.rows);
//   })
//   .catch((error) =>res.status(500).send(error));
// }
// });
// //get video by | return the video with the ID contained within the `{id}` parameter 
// app.get("/:id", (req,res) =>{
// const videoById = req.params.id
// console.log(videoById);
// pool.query(`SELECT * from videos WHERE lower (title) like '%${id}'`, [id,
// ])
// .then((result) =>{
//   res.json(result.rows);
//   console.log(rows);
// })
// .catch((error) => res.send(error));
// });


//Create a new video. This endpoint is use to add a video to the API
app.post("/", (request, response) => {
  const title = request.body.title;
  const url = request.body.url;
  if (
    !title ||
    !url 
  ) {
    return response.status(400).send({
      result: "failure",
      message: "Video could not be saved",
    });
  }
  const newVideo = {
    title: title,
    url: url,
    rating: 0,
  };
  const selectQuery = `INSERT INTO videos (title, url,rating) VALUES ('${newVideo.title}','${newVideo.url}',${newVideo.rating}) RETURNING id;`;
  pool.query(selectQuery, (error, result) => {
    if (error) {
      return response
        .status(500)
        .send({ msg: "Err" });
    }
    if (error) {
      response.send(error);
    }
    response.send("video added to the database");
  });
});


// Update rating put end point
app.put("/:id", (req, res) => {
  const videoById = req.params.id;
  const newRating = req.body.rating;
  pool .query (`update videos set rating=$1 WHERE id=$2`, [newRating, videoById])
.then(res.json({ rating: newRating}))
.catch((error) => res.send(error));
});

// Delete video specific by ID
app.delete("/:id", (req, res) => {
  const videoById = +req.params.id;
  pool .query (`delete from videos WHERE id=$1`, [videoById])
  .then(res.send( "video has been deleted "))
  .catch((error) => res.send(error));
}
);

//   // Delete this line after you've confirmed your server is running
//   res.send({ express: "Your Backend Service is Running" });
// });