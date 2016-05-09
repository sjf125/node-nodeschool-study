//make-modular.js
var moduleFile = require('./ex4.js');

moduleFile(process.argv[2], process.argv[3], function(err, data){
    data.forEach(function(file){
        console.log(file);
    });
});
