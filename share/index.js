const util = require('util');
const fs = require('fs');
const pug = require('pug');

const asyncReadFile = util.promisify(fs.readFile);


module.exports = {
    renderTemplate: async function(path, data) {
        const fileContent = await asyncReadFile(path);
        const tmpl = pug.compile(fileContent);
        return tmpl(data);
    }
}
