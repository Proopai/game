module.exports = {
  name: "Tutorial 1",
  background: "crusaders-1.png",
  backgroundWidth: 1536,
  backgroundHeight: 1104,
  width: 24,
  height: 17,
  startingStats: {
    gold: 200,
    income: 2,
    health: 20
  },
  buildRestrictions: {
    '0': {
      x: {
        min: 0,
        max: 10
      }
    },
    '1': {
      x: {
        min: 13,
        max: 23
      }
    }
  },
  takenPositions: {
    '0': {
      '0': 2,
      '1': 2,
      '2': 2,
      '3': 2,
      '4': 2,
      '7': 2,
      '15': 2,
      '16': 2,
    },
    '1': {
      '0': 2,
      '1': 2,
      '2': 2,
      '3': 2,
      '4': 2,
      '15': 2,
      '16': 2,
    },
    '2': {
      '0': 2,
      '1': 2,
      '15': 2,
      '16': 2,
    },
    '4': {
      '0': 2,
      '1': 2,
    },
    '5': {
      '0': 2,
      '1': 2,
      '2': 2,
      '3': 2,
      '4': 2,
      '5': 2,
      '6': 2,
      '7': 2,
    },
    '6': {
      '0': 2,
      '1': 2,
      '2': 2,
      '3': 2,
      '4': 2,
      '7': 2,
    },
    '7': {
      '0': 2,
      '1': 2,
      '2': 2,
      '3': 2,
      '4': 2,
    },
    '8': {
      '0': 2,
      '1': 2,
      '2': 2,
      '3': 2,
      '4': 2,
      '16': 2,
    },
    '9': {
      '0': 2,
      '1': 2,
      '2': 2,
      '3': 2,
      '4': 2,
      '16': 2,
    },
    '10': {
      '0': 2,
      '1': 2,
      '2': 2,
      '3': 2,
      '4': 2,
      '5': 2,
      '6': 2,
      '7': 2,
      '8': 2,
      '9': 2,
      '13': 2,
      '14': 2,
      '15': 2,
      '16': 2,
    },
    '13': {
      '0': 2,
      '1': 2,
      '2': 2,
      '3': 2,
      '4': 2,
      '5': 2,
      '6': 2,
      '7': 2,
      '8': 2,
      '9': 2,
      '13': 2,
      '14': 2,
      '15': 2,
      '16': 2,
    },
    '14': {
      '0': 2,
      '1': 2,
      '2': 2,
      '3': 2,
      '4': 2,
      '16': 2,
    },
    '15': {
      '0': 2,
      '1': 2,
      '2': 2,
      '3': 2,
      '4': 2,
      '16': 2,
    },
    '16': {
      '0': 2,
      '1': 2,
      '2': 2,
      '3': 2,
      '4': 2,
    },
    '17': {
      '0': 2,
      '1': 2,
      '2': 2,
      '3': 2,
      '4': 2,
      '7': 2,
    },
    '18': {
      '0': 2,
      '1': 2,
      '2': 2,
      '3': 2,
      '4': 2,
      '5': 2,
      '6': 2,
      '7': 2,
    },
    '19': {
      '0': 2,
      '1': 2,
    },
    '21': {
      '0': 2,
      '1': 2,
    },
    '22': {
      '0': 2,
      '1': 2,
      '2': 2,
      '3': 2,
      '4': 2,
      '15': 2,
      '16': 2,
    },
    '23': {
      '0': 2,
      '1': 2,
      '2': 2,
      '3': 2,
      '7': 2,
    },
  },
  castles: [
    {x: 5, y: 8, team: 0, health: 10, boosts: {speed: 0.1, health: 0.1}, imageName: 'crusaders-red.png' },
    {x: 9, y: 14, team: 0, health: 10, boosts: {speed: 0.1, health: 0.1}, imageName: 'crusaders-red.png' },
    {x: 7, y: 4, team: 0, health: 20, boosts: {speed: 0.1, health: 0.1}, size: {x: 182, y: 150}, offset: {x: 67, y: 120}, visible: false, final: true},
    {x: 18, y: 8, team: 1, health: 10, boosts: {speed: 0.1, health: 0.1}, imageName: 'crusaders-blue.png', final: true},
    {x: 14, y: 14, team: 1, health: 10, boosts: {speed: 0.1, health: 0.1}, imageName: 'crusaders-blue.png' },
    {x: 16, y: 4, team: 0, health: 20, boosts: {speed: 0.1, health: 0.1},  size: {x: 182, y: 150}, offset: {x: 67, y: 120}, visible: false},
  ],
  spawnPoints: [
    {x: 3, y: 0, team: 1, visible: false},
    {x: 20, y: 0, team: 0, visible: false},
  ],
  nodePaths: [
    [
      {x: 3, y: 0},
      {x: 3, y: 5},
      {x: 2, y: 5},
      {x: 2, y: 8},
      {x: 5, y: 8},
      {x: 5, y: 11},
      {x: 2, y: 11},
      {x: 2, y: 14},
      {x: 9, y: 14},
      {x: 9, y: 6},
      {x: 7, y: 6},
      {x: 7, y: 4},
    ],
    [
      {x: 20, y: 0},
      {x: 20, y: 5},
      {x: 21, y: 5},
      {x: 21, y: 8},
      {x: 18, y: 8},
      {x: 18, y: 11},
      {x: 21, y: 11},
      {x: 21, y: 14},
      {x: 14, y: 14},
      {x: 14, y: 6},
      {x: 16, y: 6},
      {x: 16, y: 4},
    ]
  ]
}