const share = require('../share');


module.exports = async function (context, req) {

    context.res = {
        headers: {
            'Content-Type': 'text/html'
        },
        body: await share.renderTemplate(
            __dirname + '/' + 'sample.html', 
            { name: 'Juhong' }
        ),
        isRaw: true
    };
};