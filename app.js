const fs = require('fs');
const path = require('path');

var filesFolderPath = path.resolve(__dirname, 'files');

var filesNames = fs.readdirSync(filesFolderPath);
// [ 'f1', 'f2', 'f3', 'f4', ]

var contents = [];
function step(i) {
    if(i < filesNames.length){
        var filePath = path.resolve(filesFolderPath, filesNames)
    }
}