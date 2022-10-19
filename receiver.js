const amqp = require("amqplib/callback_api");

// create connection
amqp.connect("amqp://localhost", (connError, connection) => {
  if (connError) {
    throw connError;
  }
  //   create channel
  connection.createChannel((channelError, channel) => {
    if (channelError) {
      throw channelError;
    }

    const QUEUE = "hallo aldo";
    channel.assertQueue(QUEUE);
    channel.consume(
      QUEUE,
      (msg) => {
        console.log(`message received : ${msg.content}`);
      }
      //   { noAck: true }
    );

    console.log(`Message send ${QUEUE}`);
  });
});
