const db = require("../models");
const data = require("./data");

// require mongoose connection
require("./index");

(async () => {
  // await db.Card.deleteMany({});

  const cards = await db.Card.insertMany(data);

  console.log(`${cards.length} items inserted into Cards Document`);
  process.exit();
})();
