const CanvasImport = require('canvas');
const { getRing, getBirthday, getBoleham, getBot, getVote, getRpg, getHundred, getMenheraDev, getBanido, getDeveloper, getBravery, getBrilliance, getBadgeOne, getBalance, getHalloween, getChristmas2021Badge, getPencil, getBeta } = require("../ImageReader");

const ProfileBadges = {}

const Start = () => {
  ProfileBadges[1] = getBadgeOne()
  ProfileBadges[6] = getBanido()
  ProfileBadges[7] = getMenheraDev()
  ProfileBadges[8] = getBirthday()
  ProfileBadges[10] = getRpg()
  ProfileBadges[11] = getBoleham()
  ProfileBadges[12] = getHalloween()
  ProfileBadges[13] = getChristmas2021Badge()
  ProfileBadges[15] = getPencil()
  ProfileBadges[16] = getBeta()
  ProfileBadges['VERIFIED_BOT'] = getBot()
  ProfileBadges['HOUSE_BRAVERY'] = getBravery()
  ProfileBadges['HOUSE_BRILLIANCE'] = getBrilliance()
  ProfileBadges['HOUSE_BALANCE'] = getBalance()
  ProfileBadges['EARLY_VERIFIED_BOT_DEVELOPER'] = getDeveloper()
  ProfileBadges['ring'] = getRing()
  ProfileBadges['vote'] = getVote()
  ProfileBadges['hundred'] = getHundred()
}

const DiscordFlagsToMenheraBadges = {
  EARLY_VERIFIED_BOT_DEVELOPER: 5,
  HOUSE_BALANCE: 2,
  HOUSE_BRILLIANCE: 3,
  HOUSE_BRAVERY: 4,
};

const getUserBadgesLink = async (user) => {
  const images = [];

  console.log('FLASGARRAY')
  if (user.flagsArray?.length > 0) {
    user.flagsArray.map(async a => {
      if (!user.hiddingBadges.includes(DiscordFlagsToMenheraBadges[a])) {
        const buffer = ProfileBadges[a]
        if (typeof buffer === 'undefined') return
        const img = await CanvasImport.loadImage(buffer).catch(er => console.log(er))
        images.push(img)
      }
    })
  }

  console.log('casado')
  if (user?.casado !== null) {
    const ringEmoji = await CanvasImport.loadImage(ProfileBadges['ring']).catch(er => console.log(er));
    images.push(ringEmoji);
  }

  console.log('vote')
  if (user.voteCooldown && parseInt(user?.voteCooldown) > Date.now()) {
    const voteEmoji = await CanvasImport.loadImage(ProfileBadges['vote']).catch(er => console.log(er));
    images.push(voteEmoji);
  }

  console.log('100')
  if (user.votos > 100) {
    const hundredVoteEmoji = await CanvasImport.loadImage(ProfileBadges['hundred']).catch(er => console.log(er));
    images.push(hundredVoteEmoji);
  }

  console.log('load cada')
  if (user.badges?.length > 0) {
    for (const i in user.badges) {
      const { id } = user.badges[i];
      if (!user.hiddingBadges.includes(id)) {
        const buffer = ProfileBadges[id];

        console.log('load badge' + id)
        const img = await CanvasImport.loadImage(buffer).catch(er => console.log(er));
        console.log('loadDEEEDDDD badge' + id)
        images.push(img);
      }
    }
  }

  console.log(images)

  return images;
}

const drawBadges = (ctx, badges, startX, startY, badgeSize = 64) => {
  badges?.forEach((img, i) => {
    ctx.drawImage(img, startX + (i * badgeSize), startY, badgeSize, badgeSize);
  });
}

const shadeColor = (color, percent) => {
  const num = parseInt(color.slice(1), 16);
  const amt = Math.round(2.55 * percent);
  const R = (num >> 16) + amt;
  const G = (num >> 8 & 0x00FF) + amt;
  const B = (num & 0x0000FF) + amt;

  const shadedColor = `#${(0x1000000 + (R < 255 ? R < 1 ? 0 : R : 255) * 0x10000 + (G < 255 ? G < 1 ? 0 : G : 255) * 0x100 + (B < 255 ? B < 1 ? 0 : B : 255)).toString(16).slice(1)}`;
  return shadedColor;
}

module.exports.GetBadges = getUserBadgesLink;
module.exports.drawBadges = drawBadges;
module.exports.Start = Start;
module.exports.Badges = ProfileBadges;
module.exports.ShadeColor = shadeColor;