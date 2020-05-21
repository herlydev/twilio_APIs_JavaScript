const Twilio = require("twilio");

const client = new Twilio(
  "AC085423d131f0c7c76da58a780bbada2f",
  "101f2f704faba9ed70f74160f55066ee"
);

client.messages
  .list()
  .then((messages) =>
    console.log(`The most recent message is ${messages[0].body}`)
  )
  .catch((err) => console.error(err));

console.log("Gathering your message log");
