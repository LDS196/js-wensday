function componentToHex(c) {
    let x= c
    if(x>255)x=255
    if(x<0)x=0
    const hex = x.toString(16).toUpperCase();
    return hex.length === 1 ? "0" + hex : hex;
}

function rgb(r, g, b) {
    return componentToHex(r) + componentToHex(g) + componentToHex(b);
}
// 255, 255, 255 --> "FFFFFF"
// 255, 255, 300 --> "FFFFFF"
// 0, 0, 0       --> "000000"
// 148, 0, 211   --> "9400D3"