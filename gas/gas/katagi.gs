function doPost(e){ 
  if (PropertiesService.getScriptProperties().getProperty("TOKEN_SLACKS") != e.parameter.token) {
    throw new Error("invalid token.");
  }
  var rcvdRaws = e.parameter.text;
  var rcvd = rcvdRaws.split(' ');
  if(rcvd.length < 2 || rcvd[0][1] != '#') {
    var payload = msgErrors(-1);
    var response = makeReturns(payload);
    return response;
  }
  for(let n = 2 ; n < rcvd.length ; n++){
    rcvd[1] += ' ' + rcvd[n];
  }
  var ch = rcvd[0];
  var speak = rcvd[1];
  ch = ch.split('>')[0].split('|')[1];
  var url = 'https://slack.com/api/chat.postMessage'
  var dataPosts = {
    'channel': ch,
    'token': PropertiesService.getScriptProperties().getProperty("TOKEN_SLACK_OAUTHS"),
    'text': speak,
  }
  var payload = {
    "method" : "POST",
    "payload" : dataPosts,
  }
  var codeRs = UrlFetchApp.fetch(url, payload).getResponseCode();
  if(codeRs == 200){
    payload = {text:"成功したよ"};
  }
  else {
    payload = msgErrors(response);
  }
  var response = makeReturns(payload);
  return response;
}

function makeReturns(r) {
  return ContentService.createTextOutput(JSON.stringify(r)).setMimeType(ContentService.MimeType.JSON);
}

function msgErrors(r){
  var payload = {text:"使い方が違うよ → 正しい使い方は「/katagi [#チャンネル]<半角スペース>[発言]」だよ"};
  return payload;
}
