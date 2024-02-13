var fs = require('fs');

fs.readFile('reciept.json', 'utf-8', function (err, data) {
    if (err) throw err;

    var obj = JSON.parse(data);


    //console.log(obj);

    const doNotInclude = [
        "MRPAPER BG FEE",
        "TAX",
        "BALANCE"
    ]
    const itemsLength = Object.keys(obj.receipts[0].items).length;
    for (let i = 0; i < itemsLength; i++){
        if (!doNotInclude.includes(obj.receipts[0].items[i].description)) {
            console.log(obj.receipts[0].items[i].description);
        }
    }
});