const util = require('util');
const fs = require('fs');
const pug = require('pug');

const asyncReadFile = util.promisify(fs.readFile);


async function renderFile(context, templateFileName, data) {
    const path = __dirname + '//' + templateFileName;
    const fileContent = await asyncReadFile(path);
    const tmpl = pug.compile(fileContent);

    context.res = {
        headers: {
            'Content-Type': 'text/html'
        },
        body: tmpl(data),
        isRaw: true
    };
    context.done();
}

module.exports = async function (context, req) {
    await renderFile(context, 'page.html')
};
