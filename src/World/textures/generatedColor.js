import { Color, DataTexture, RGBFormat, Uint8BufferAttribute, LuminanceFormat, UnsignedByteType, NearestFilter, Uint8Attribute } from "../../../vendor/three/build/three.module.js";

function createTexture() {
    const width = 2056;
    const height = 2056;
    
    const size = width * height;

    var data = [];
    var averagedData = [];

    for ( let i = 0; i < size; i ++ ) {
        for (let i = 0; i < 3; i++) {
            data.push(Math.random() * 255);
        }
    }

    for (let i = 0; i < data.length; i++) {
        const average = Math.floor((data[i] + data[i+1] + data[i+2])/3);
        averagedData.push(average)
    }

    const averagedUint8Arr = Uint8Array.from(averagedData)

    var texture = new DataTexture(averagedUint8Arr, width, height, RGBFormat);

    return texture;

}

export { createTexture }