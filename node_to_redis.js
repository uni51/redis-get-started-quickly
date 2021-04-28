const Redis = require("ioredis");
// 接続
const redis = new Redis({
  host: "127.0.0.1",
  port: 6379
});

redis.on("error", console.error);
redis.on("connect", () => {
  console.info("Connected");
});
redis.on("close", () => {
  console.info("Disconnected");
});

// データ保存
redis.set("key", "hogehoge");
// データ取得
redis
  .get("key")
  .then(result => {
    console.log(result);
  })
  .catch(err => {
    console.error(err);
  });

// 切断
redis.quit();