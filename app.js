var express = require('express'),
    app = express();
    app.listen(3001, _ => console.log('3001'));

// **
var aa = require('./test.js');
var aapp = aa();

console.log(aa);
console.log( aapp );
console.log( aapp.res );
console.log( aapp.handle(111,222) );
// **

// -- 
var fs = require('fs');
app.engine('do', function (filePath, option, callback) {
    fs.readFile(filePath, function (err, content) {
        if (err) return callback(err);
        var m = Object.entries(option).map((value, index) => {
            if(value[0] === "_locals" || value[0] === "cache" || value[0] === "settings") return;
            return value;
        }).filter((ele, index) => { if(ele != null) return ele; });
        var result = content.toString();
        m.forEach((ele, index) => result = result.split(`#${ele[0]}#`).join(ele[1]));
        return callback(null, result);
    });
});
// --

app.set('views', './views');
app.set('view engine', 'do');

app.get('/', (req,res) => res.render('render2', { "option":"안녕하세요", "des":"직접만드는 템플릿 엔진입니다" }));
app.get('/a', (req,res) => res.render('a', { "option":"안녕하세요", "des":"직접만드는 템플릿 엔진입니다" }));

