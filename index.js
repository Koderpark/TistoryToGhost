// node_modules 에 있는 express 관련 파일을 가져온다.
var express = require('express')
const fs = require('fs');

const jsonFile = fs.readFileSync('./match.json', 'utf8');
const jsonData = JSON.parse(jsonFile);

var app = express()

// 3000 포트로 서버 오픈
app.listen(3000, function() {
    console.log("start! express server on port 3000")
})


app.get('/:slug', function(req,res) {
  const slug = req.params.slug;
  console.log(jsonData[slug] == null)
  if(jsonData[slug] == null){
    res.set('location', 'https://koder0205.tistory.com/'+slug);
    res.status(302).send();
  }else{
    res.set('location', jsonData[slug]);
    res.status(301).send();
  }
})

app.get('*',function (req, res) {
  res.set('location', 'https://koder0205.tistory.com/'+req.url);
  res.status(302).send();
});