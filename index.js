var readline     = require('readline');
var getData      = require('./modules/data.js');
var getPixelData = require('./modules/pixels.js');

// Terminal Env
const rl = readline.createInterface({ input: process.stdin, output: process.stdout });

/**
 * Gets data and instantiates run().
 * @param {string} target - User inputted file name.
 */
 this.processEmail = target => {
     getPixelData(target).then(pixelData => {
         getData(pixelData);
     });
 }

var fileName = new String();
if (process.argv.length == 3) {
    fileName = process.argv[2];
    this.processEmail(fileName);
} else {
    rl.question(`Name of your file? `, target => {
        this.processEmail(target);
    });
}
