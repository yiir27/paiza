const lines = [
  '100 150 200',
  '3',
  'paizabird 100 200 130 180 80 120',
  'paizawolf 180 220 100 120 90 140',
  'paizasheep 80 110 150 220 170 250'
]

const MonsterPower = lines[0].split(' ').map(Number);
console.log(MonsterPower);