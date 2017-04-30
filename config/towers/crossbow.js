module.exports = {
    id: "crossbow",
    name: "Crossbow",
    description: "A fast firing bow that attacks ground and air.",
    cost: 60,
    attackSpeed: 2,
    imageName: "crossbow.png",
    totalRotationFrames: 36,
    totalFramesPerAttack: 2,
    attackFrames: [2, 1, 0],
    range: 2.5,
    attackMoveTypes: ['ground', 'air'],
    damageType: "physical",
    bullet: "bolt",
    bulletSpawnOffsets: {
      '0': {x: -22, y: -5},
      '10': {x: -20, y: -8},
      '20': {x: -18, y: -12},
      '30': {x: -16, y: -14},
      '40': {x: -14, y: -15},
      '50': {x: -12, y: -18},
      '60': {x: -8, y: -19},
      '70': {x: -5, y: -20},
      '80': {x: -2, y: -21},
      '90': {x: 2, y: -21},
      '100': {x: 5, y: -21},
      '110': {x:  8, y: -19},
      '120': {x: 12, y: -18},
      '130': {x: 14, y: -15},
      '140': {x: 16, y: -14},
      '150': {x: 18, y: -12},
      '160': {x: 20, y: -11},
      '170': {x: 21, y: -7},
      '180': {x: 22, y: -5},
      '190': {x: 22, y: -2},
      '200': {x: 21, y: 1},
      '210': {x: 20, y: 6},
      '220': {x: 18, y: 8},
      '230': {x: 16, y: 10},
      '240': {x: 13, y: 12},
      '250': {x: 9, y: 14},
      '260': {x: 5, y: 15},
      '270': {x: 2, y: 17},
      '280': {x: -3, y: 16},
      '290': {x: -7, y: 14},
      '300': {x: -11, y: 13},
      '310': {x: -13, y: 11},
      '320': {x: -15, y: 9},
      '330': {x: -17, y: 5},
      '340': {x: -18, y: 2},
      '350': {x: -19, y: -2},
    },
    levels: [
      {
        damage: 22
      },
      {
        cost: 60,
        damage: 45
      },
      {
        cost: 120,
        damage: 92
      },
      {
        cost: 240,
        damage: 189
      },
      {
        cost: 480,
        damage: 388
      },
      {
        cost: 960,
        damage: 796
      }
    ]
}
