const dotEnv = require("dotenv");
const _ = require("lodash");
const API = require("kucoin-node-sdk");

dotEnv.config();
API.init(require("./config"));

const datafeed = new API.websocket.Datafeed();

// close callback
datafeed.onClose(() => {
  console.log("ws closed, status ", datafeed.trustConnected);
});

// connect
datafeed.connectSocket();

// subscribe
const topic = `/market/ticker:BTC-USDT`;
const callbackId = datafeed.subscribe(topic, (message) => {
  if (message.topic === topic) {
    console.log(message.data);
  }
});

console.log(`subscribe id: ${callbackId}`);
setTimeout(() => {
  // unsubscribe
  datafeed.unsubscribe(topic, callbackId);
  console.log(`unsubscribed: ${topic} ${callbackId}`);
}, 5000);
