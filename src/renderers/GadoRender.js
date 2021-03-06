const { getGado } = require("../ImageReader");
const CanvasImport = require('canvas')

const buildGadoImage = async (link) => {
  const canvas = CanvasImport.createCanvas(1200, 526);
  const ctx = canvas.getContext('2d');

  const userImage = await CanvasImport.loadImage(link).catch(er => console.log(er));

  const bufferedGadoImage = getGado()
  const gadoImage = await CanvasImport.loadImage(bufferedGadoImage).catch(er => console.log(er));
  ctx.drawImage(userImage, 695, 0, 455, 500);
  ctx.drawImage(gadoImage, 0, 0, 1200, 526);

  return canvas.toBuffer();
}

module.exports = { buildGadoImage }