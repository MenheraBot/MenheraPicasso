const { buildAstolfoImage } = require("../renderers/AstolfoRender")
const { buildGadoImage } = require("../renderers/GadoRender")
const { buildPhiloImage } = require("../renderers/PhiloRender")
const { buildProfileImage } = require("../renderers/ProfileRender")
const { buildShipImage } = require("../renderers/ShipRender")
const { buildTrisalImage } = require("../renderers/TrisalRender")
const { buildMacetavaImage } = require('../renderers/MacetavaRender')
const { buildBlackjackImage } = require('../renderers/BlackjackRender')

const WebSocketController = (socket) => {
  socket.on('message', async (rawRequest) => {
    const { type, data } = JSON.parse(rawRequest.toString());

    switch (type) {
      case 'astolfo': {
        const result = await buildAstolfoImage(data.text)
        socket.send(JSON.stringify(result.toJSON()))
        break;
      }
      case 'philo': {
        const result = await buildPhiloImage(data.text)
        socket.send(JSON.stringify(result.toJSON()))
        break;
      }
      case 'trisal': {
        const { userOne, userTwo, userThree } = data
        const result = await buildTrisalImage(userOne, userTwo, userThree)
        socket.send(JSON.stringify(result.toJSON()))
        break;
      }
      case 'ship': {
        const { linkOne, linkTwo, shipValue } = data
        const result = await buildShipImage(linkOne, linkTwo, shipValue)
        socket.send(JSON.stringify(result.toJSON()))
        break;
      }
      case 'profile': {
        const { user, marry, usageCommands, i18n } = data
        const result = await buildProfileImage(user, marry, usageCommands, i18n)
        socket.send(JSON.stringify(result.toJSON()))
        break;
      }
      case 'gado': {
        const { image } = data
        const result = await buildGadoImage(image);
        socket.send(JSON.stringify(result.toJSON()))
        break;
      }
      case 'macetava': {
        const { image, authorName, authorDiscriminator, authorImage } = data
        const result = await buildMacetavaImage(image, authorName, authorDiscriminator, authorImage);
        socket.send(JSON.stringify(result.toJSON()))
        break;
      }
      case 'blackjack': {
        const { userCards, menheraCards, userTotal, menheraTotal, i18n, aposta } = data
        const result = await buildBlackjackImage(userCards, menheraCards, userTotal, menheraTotal, i18n, aposta);
        socket.send(JSON.stringify(result.toJSON()))
        break;
      }
    }
  })
};

module.exports = WebSocketController