var linebot = require('linebot');
var express = require('express');

var bot = linebot({
  channelId: 1573916138,
  channelSecret: 96e4e31803735981dd202845216df2cb,
  channelAccessToken: 7ay+VqEGPTtmCI5TCBJFxCGCm80frQFIqChtW7gkdb4OkX30a2LF+1GZhpE6UlYhUc3ygeksgGO0cWlr54MrHjAc8Smb+QA2OCccG2OcLaam5VlAkNzfCot8JAZLYQB6m3CKdw6JXL44W+w4EBHV5AdB04t89/1O/w1cDnyilFU=
});

bot.on('message', function(event) {
  console.log(event); //把收到訊息的 event 印出來看看
});

const app = express();
const linebotParser = bot.parser();
app.post('/', linebotParser);

//因為 express 預設走 port 3000，而 heroku 上預設卻不是，要透過下列程式轉換
var server = app.listen(process.env.PORT || 8080, function() {
  var port = server.address().port;
  console.log("App now running on port", port);
});