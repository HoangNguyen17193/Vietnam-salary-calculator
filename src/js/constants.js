const TAX_LEVEL = [
  {
    number: 1,
    from: 0,
    to: 5000000,
    percent: 5
  },
  {
    number: 2,
    from: 5000000,
    to: 10000000,
    percent: 10
  },
  {
    number: 3,
    from: 10000000,
    to: 18000000,
    percent: 15
  },
  {
    number: 4,
    from: 18000000,
    to: 32000000,
    percent: 20
  },
  {
    number: 5,
    from: 32000000,
    to: 52000000,
    percent: 25
  },
  {
    number: 6,
    min: 52000000,
    max: 80000000,
    percent: 30
  },
  {
    number: 7,
    min: 80000000,
    percent: 35
  }
];

export {
  TAX_LEVEL
}
