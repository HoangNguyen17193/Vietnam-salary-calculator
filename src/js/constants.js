const TAX_LEVELS = [
  {
    number: 1,
    from: 0,
    to: 5000000,
    percent: 5,
    title: "To 5m (VND)"
  },
  {
    number: 2,
    from: 5000000,
    to: 10000000,
    percent: 10,
    title: "From 5m to 10m (VND)"
  },
  {
    number: 3,
    from: 10000000,
    to: 18000000,
    percent: 15,
    title: "From 10m to 18m (VND)"
  },
  {
    number: 4,
    from: 18000000,
    to: 32000000,
    percent: 20,
    title: "From 18m to 32m (VND)"
  },
  {
    number: 5,
    from: 32000000,
    to: 52000000,
    percent: 25,
    title: "From 32m to 52m (VND)"
  },
  {
    number: 6,
    min: 52000000,
    max: 80000000,
    percent: 30,
    title: "From 52m to 80m (VND)"
  },
  {
    number: 7,
    min: 80000000,
    percent: 35,
    title: "From 80m (VND)"
  }
];

const MAX_SALARY_FOR_SOCIAL_INSURANCE = 29800000;
const MAX_SALARY_FOR_HEALTH_INSURANCE = 29800000;

export {
  TAX_LEVELS,
  MAX_SALARY_FOR_SOCIAL_INSURANCE,
  MAX_SALARY_FOR_HEALTH_INSURANCE
}
