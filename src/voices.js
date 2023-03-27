//These are the voices as defined here: https://github.com/s-macke/SAM
/*
    DESCRIPTION          SPEED     PITCH     THROAT    MOUTH
    Elf                   72        64        110       160
    Little Robot          92        60        190       190
    Stuffy Guy            82        72        110       105
    Little Old Lady       82        32        145       145
    Extra-Terrestrial    100        64        150       200
    SAM                   72        64        128       128
*/

module.exports = {
    Elf: require('./voices/Elf'),
    ExtraTerrestrial: require('./voices/ExtraTerrestrial'),
    LittleOldLady: require('./voices/LittleOldLady'),
    LittleRobot: require('./voices/LittleRobot'),
    SAM: require('./voices/SAM'),
    StuffyGuy: require('./voices/StuffyGuy')
};