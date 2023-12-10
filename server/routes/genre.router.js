const express = require('express');
const router = express.Router();
const pool = require('../modules/pool')

router.get('/', (req, res) => {
  // Add query to get all genres
  res.sendStatus(500)
});


//reducer router for genres
router.get('/:id', (req, res) => {
  console.log(`GET for genre details via id`, req.params.id);

  const queryText = `
    SELECT 
    "genres"."id",
    "genres"."name",
    "movies_genres"."id" AS "id_of_movie_genre"

    FROM "movies"
    JOIN "movies_genres" ON "movies_genres"."movie_id" = "movies"."id"
    JOIN "genres" ON "genres"."id" = "movies_genres"."genre_id"

    WHERE "movies"."id" = $1;`;

    pool.query(queryText, [req.params.id])
  .then((result) => {
    console.log(`success GET`);
    console.log(`results:`, result.rows);
    res.send(result.rows);
  }).catch((error) => {
    console.log(`error in GET details`);
    res.sendStatus(500);
  });
});


module.exports = router;