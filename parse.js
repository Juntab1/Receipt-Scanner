var fs = require('fs');

fs.readFile('reciept.json', 'utf-8', function (err, data) {
    if (err) throw err;

    var obj = JSON.parse(data);

    console.log((obj["receipts"]));
});