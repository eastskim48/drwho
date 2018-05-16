const axios = require('axios');


module.exports = async function (context, req) {
    context.res = {
        headers: {
            'Content-Type': 'text/html'
        },
        body: (await axios('https://azure.microsoft.com/en-us/')).data,
        isRaw: true
    };
};
