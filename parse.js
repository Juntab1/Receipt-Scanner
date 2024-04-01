var fs = require('fs');

fs.readFile('reciept.json', 'utf-8', function (err, data) {
    if (err) throw err;

    var obj = JSON.parse(data);

    const itemsLength = Object.keys(obj.receipts[0].items).length;
    //console.log(obj);

    const doNotInclude = [
        "MRPAPER BG FEE",
        "TAX",
        "BALANCE"
    ]



    runParse(obj, doNotInclude)
});

// this is the main function to run a parse of a json
function runParse(obj, notIncluded, itemsCount) {
    for (let i = 0; i < itemsCount; i++){
        if (!notIncluded.includes(obj.receipts[0].items[i].description)) {
            console.log(obj.receipts[0].items[i].description);
        }
    }
}

// experimental of removing a variable in json, 
// most likely do this at the start after we have variables within a json
// OR before we put values within the json which might be hard
function removeJsonVar(obj, itemsCount) {
    for (let i = 0; i < itemsCount; i++){
        if (notIncluded.includes(obj.receipts[0].items[i].description)) {
            delete (obj.receipts[0].items[i].description)
        }
    }
}

