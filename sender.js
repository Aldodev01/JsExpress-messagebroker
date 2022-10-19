// brew services start
// http://localhost:15672/#/queues/%2F/coding%20test
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
    channel.sendToQueue(QUEUE, Buffer.from("hello from coding time"));

    console.log(`Message send ${QUEUE}`);
  });
});
