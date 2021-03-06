/**
 * Fast UUID generator, RFC4122 version 4 compliant.
 * @original author Jeff Ward (jcward.com).
 * Modified to be an esm module
 * @license MIT license
 * @link http://stackoverflow.com/questions/105034/how-to-create-a-guid-uuid-in-javascript/21963136#21963136
 **/

//A lookup table for string representations of all hex values from 0 to 255. 0x00 to 0xFF
const lut = Array.from({ length : 256}, (_,ind) => ind).map((i) => (i<16?'0':'')+(i).toString(16));

function UUID(){
    let d0 = Math.random()*0xffffffff|0;
    let d1 = Math.random()*0xffffffff|0;
    let d2 = Math.random()*0xffffffff|0;
    let d3 = Math.random()*0xffffffff|0;

    return  lut[d0 & 0xff]      + lut[d0>>8 & 0xff] +       lut[d0>>16 & 0xff]      + lut[d0>>24 & 0xff] + '-'+
            lut[d1 & 0xff]      + lut[d1>>8 & 0xff] + '-' + lut[d1>>16 & 0x0f|0x40] + lut[d1>>24 & 0xff] +'-'+
            lut[d2 & 0x3f|0x80] + lut[d2>>8 & 0xff] + '-' + lut[d2>>16 & 0xff]      + lut[d2>>24 & 0xff] +
            lut[d3 & 0xff]      + lut[d3>>8 & 0xff] +       lut[d3>>16 & 0xff]      + lut[d3>>24 & 0xff];
}

export default UUID;
