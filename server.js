const dotEnv = require("dotenv");
const _ = require("lodash");
const API = require("kucoin-node-sdk");

dotEnv.config();
API.init(require("./config"));

const wsSymbolSnapshot = (ticker) => {
  const datafeed = new API.websocket.Datafeed();
  datafeed.onClose(() => {
    console.log("ws closed, status ", datafeed.trustConnected);
  });
  datafeed.connectSocket();

  // subscribe
  const topic = `/market/snapshot:${ticker}`;
  const callbackId = datafeed.subscribe(topic, (message) => {
    if (message.topic === topic) {
      console.log(message.data);
    }
  });

  setTimeout(() => {
    // unsubscribe
    datafeed.unsubscribe(topic, callbackId);
    console.log(`unsubscribed: ${topic} ${callbackId}`);
  }, 5000);
};

const main = () => {
  wsSymbolSnapshot("BTC");
};
main();
