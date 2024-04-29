const express = require('express');
const router = express.Router();
const pool = require('../modules/pool.js');

// GET /api/bikes
router.get('/', (req, res) => {
  // The SQL query we want to run on our database:
  const sqlQuery = `
    SELECT * FROM "bikes";
  `

  // Run the SQL query on our database:
  pool.query(sqlQuery)

    // When the database result arrives, send the
    // rows of data back to the client:
    .then((dbResult) => {
      console.log('dbResult.rows is:', dbResult.rows)
      res.send(dbResult.rows)
    })

    // If the database interaction errors our for any
    // reason, let the client know there was an error:
    .catch((dbError) => {
      // Definitely don't forget to log the error that
      // the database sent back. (Otherwise, we'll have no
      // clue as to why our SQL query failed!)
      console.log('dbError in GET /api/bikes is:', dbError)
      res.sendStatus(500)
    })
})


module.exports = router;
