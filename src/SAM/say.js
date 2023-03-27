const CP = require('child_process');
const OS = require('os');
const FS = require('fs');
const Crypto = require('crypto');

function say(text, config = {}){
    const voice = Object.assign({
        speed: 72,
        pitch: 64,
        throat: 128,
        mouth: 128
    }, config);

    const hash = Crypto.createHash('md5');
    hash.update(text);
    hash.update(voice.speed.toString());
    hash.update(voice.pitch.toString());
    hash.update(voice.throat.toString());
    hash.update(voice.mouth.toString());

    const fileName = hash.digest('hex');
    return new Promise((resolve, reject) => {
        let process = null;
        switch(OS.platform()){
            case 'win32':
                process = CP.spawn(`${__dirname}/windows/sam`, [
                    '-wav',
                    `${__dirname}/${fileName}.wav`,
                    '-speed',
                    `${voice.speed}`,
                    '-pitch',
                    `${voice.pitch}`,
                    '-throat',
                    `${voice.throat}`,
                    '-mouth',
                    `${voice.mouth}`,
                    text
                ]);
                break;
            case 'darwin':
                reject({
                    message: 'Mac OS is not currently supported.'
                });
                return;

                break; //Not necessary, but is a good reminder for if/when Mac OS is supported.
            default:
                process = CP.spawn(`${__dirname}/linux/sam`, [
                    '-wav',
                    `${__dirname}/${fileName}.wav`,
                    '-speed',
                    `${voice.speed}`,
                    '-pitch',
                    `${voice.pitch}`,
                    '-throat',
                    `${voice.throat}`,
                    '-mouth',
                    `${voice.mouth}`,
                    text
                ]);
        
        }
        
        process.once('close', () => {
            const data = FS.readFileSync(`${__dirname}/${fileName}.wav`);

            FS.unlinkSync(`${__dirname}/${fileName}.wav`);

            resolve(data);
        });
    });
}

module.exports = say;