const FS = require('fs');

const files = FS.readdirSync('./');

for(let i = 0; i < files.length; i++){
    const file = files[i];
    if(file.endsWith('.wav')){
        FS.unlinkSync(file);
    }
}