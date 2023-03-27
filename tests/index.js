const FS = require('fs');

const SAM = require('../src/index');

SAM.say('Hello, I am sam.', SAM.voices.Elf).then((data) => {
    FS.writeFileSync('Elf.wav', data);
});

SAM.say('Hello, I am sam.', SAM.voices.ExtraTerrestrial).then((data) => {
    FS.writeFileSync('ExtraTerrestrial.wav', data);
});

SAM.say('Hello, I am sam.', SAM.voices.LittleOldLady).then((data) => {
    FS.writeFileSync('LittleOldLady.wav', data);
});

SAM.say('Hello, I am sam.', SAM.voices.LittleRobot).then((data) => {
    FS.writeFileSync('LittleRobot.wav', data);
});

SAM.say('Hello, I am sam.', SAM.voices.SAM).then((data) => {
    FS.writeFileSync('SAM.wav', data);
});

SAM.say('Hello, I am sam.', SAM.voices.StuffyGuy).then((data) => {
    FS.writeFileSync('StuffyGuy.wav', data);
});