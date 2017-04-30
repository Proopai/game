module.exports = {
  name: "Sandbox 1",
  description: "A Sandbox world with unlimited money and supply",
  background: "sandbox.png",
  backgroundWidth: 624,
  backgroundHeight: 1104,
  width: 11,
  height: 17,
  canBuildAnything: true,
  canAttackOwnMinions: true,
  startingStats: {
    gold: 10000,
    income: 1000,
    health: 1000,
    souls: 1000,
    maxSouls: 1000,
  },
  buildRestrictions: {},
  takenPositions: {},
  castles: [],
  spawnPoints: [
    {x: 1, y: 3, team: 1, visible: false},
    {x: 2, y: 3, team: 1, visible: false},
  ],
  nodePaths: [
    [
      {x: 1, y: 3},
      {x: 9, y: 3},
      {x: 9, y: 8},
      {x: 6, y: 8},
      {x: 6, y: 6},
      {x: 3, y: 6},
      {x: 3, y: 10},
      {x: 5, y: 10},
      {x: 5, y: 11},
      {x: 8, y: 11},
      {x: 8, y: 16},
      {x: 2, y: 16},
      {x: 2, y: 14},
    ],
    [
      {x: 2, y: 3},
      {x: 9, y: 3},
      {x: 9, y: 8},
      {x: 6, y: 8},
      {x: 6, y: 6},
      {x: 3, y: 6},
      {x: 3, y: 10},
      {x: 5, y: 10},
      {x: 5, y: 11},
      {x: 8, y: 11},
      {x: 8, y: 16},
      {x: 2, y: 16},
      {x: 2, y: 14},
    ]
  ]
}