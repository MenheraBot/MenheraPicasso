const CanvasImport = require('canvas')
const { getTable } = require('../ImageReader');
const { Cards, Colors, Backgrounds } = require('../utils/CardsStarter');
const Profilebadges = require('../utils/ProfileUtils')

const buildBlackjackImage = async (userCards, menheraCards, userTotal, menheraTotal, i18n, aposta, cardTheme = 'default', tableTheme = 'green', backgroundCardTheme = 'red') => {
  const canvas = CanvasImport.createCanvas(630, 460);
  const ctx = canvas.getContext('2d');

  const talbeImage = await CanvasImport.loadImage(getTable(tableTheme))

  ctx.drawImage(talbeImage, 0, 0, canvas.width, canvas.height);
  ctx.fillStyle = Colors[tableTheme];
  ctx.font = 'bold 36px Impact';

  ctx.textAlign = 'center'
  ctx.fillText(`${i18n.dealerHand}\n                ${menheraTotal}`, 280, 36)
  ctx.strokeText(`${i18n.dealerHand}\n                ${menheraTotal}`, 280, 36)
  ctx.fillText(`${i18n.yourHand}\n       ${userTotal}`, 280, 300)
  ctx.strokeText(`${i18n.yourHand}\n       ${userTotal}`, 280, 300)

  ctx.textAlign = 'start'

  ctx.fillStyle = 'yellow'
  ctx.fillText(`${aposta * 2}`, 240, 240)
  ctx.strokeText(`${aposta * 2}`, 240, 240)

  ctx.fillStyle = Profilebadges.ShadeColor(Colors[tableTheme], -10);

  const userStartW = (295 - 40 * userCards.length)
  const menheraStartW = (295 - 40 * menheraCards.length)
  ctx.roundRect(menheraStartW - 5, 85, menheraCards.length * 80 + 3, 97, 5, true, true);
  ctx.roundRect(userStartW - 5, 353, userCards.length * 80 + 3, 97, 5, true, true);

  userCards.forEach((card, i) => {
    ctx.drawImage(Cards[cardTheme][card.id], userStartW + (80 * i), 360, 72, 84)
  })

  menheraCards.forEach((card, i) => {
    ctx.drawImage((card?.hidden ? Backgrounds[backgroundCardTheme] : Cards[cardTheme][card.id]), menheraStartW + (80 * i), 93, 72, 84)
  })

  return canvas.toBuffer();
}

module.exports = { buildBlackjackImage }