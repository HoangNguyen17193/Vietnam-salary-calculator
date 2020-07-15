const TAX_LEVELS = [
  {
    number: 1,
    from: 0,
    to: 5000000,
    percent: 5,
    title: "To 5m (5%)"
  },
  {
    number: 2,
    from: 5000000,
    to: 10000000,
    percent: 10,
    title: "From 5m to 10m (10%)"
  },
  {
    number: 3,
    from: 10000000,
    to: 18000000,
    percent: 15,
    title: "From 10m to 18m (15%)"
  },
  {
    number: 4,
    from: 18000000,
    to: 32000000,
    percent: 20,
    title: "From 18m to 32m (20%)"
  },
  {
    number: 5,
    from: 32000000,
    to: 52000000,
    percent: 25,
    title: "From 32m to 52m (25%)"
  },
  {
    number: 6,
    from: 52000000,
    to: 80000000,
    percent: 30,
    title: "From 52m to 80m (30%)"
  },
  {
    number: 7,
    from: 80000000,
    percent: 35,
    title: "From 80m (35%)"
  }
];

const MAX_SALARY_FOR_SOCIAL_INSURANCE = 29800000;
const MAX_SALARY_FOR_HEALTH_INSURANCE = 29800000;
const REGION_1_MIN_SALARY = 4420000;
const REGION_2_MIN_SALARY = 3920000;
const REGION_3_MIN_SALARY = 3430000;
const REGION_4_MIN_SALARY = 3070000;
const TAX_PAYER_PERSONAL_RELIEF = 11000000;
const DEPENDENTS_RELIEF = 4400000;

export {
  TAX_LEVELS,
  MAX_SALARY_FOR_SOCIAL_INSURANCE,
  MAX_SALARY_FOR_HEALTH_INSURANCE,
  REGION_1_MIN_SALARY,
  REGION_2_MIN_SALARY,
  REGION_3_MIN_SALARY,
  REGION_4_MIN_SALARY,
  TAX_PAYER_PERSONAL_RELIEF,
  DEPENDENTS_RELIEF
}
