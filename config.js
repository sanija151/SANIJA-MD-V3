const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });
function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}


module.exports = {

SESSION_ID: process.env.SESSION_ID === undefined ? 'SANIJA-MD=6BsnXLSI#GgYC_iajgQ0cj-KIzf9nwXu5UgPp4fSgutC9SO-LlaE' : process.env.SESSION_ID, 
PORT: process.env.PORT === undefined ? '8000' : process.env.PORT,    
SESSION_NAME: process.env.SESSION_NAME === undefined ? 'sanijamd' : process.env.SESSION_NAME, 

};

