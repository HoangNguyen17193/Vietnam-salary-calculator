import {
  TAX_LEVELS,
  MAX_SALARY_FOR_HEALTH_INSURANCE,
  MAX_SALARY_FOR_SOCIAL_INSURANCE,
  REGION_1_MIN_SALARY,
  REGION_2_MIN_SALARY,
  REGION_3_MIN_SALARY,
  REGION_4_MIN_SALARY
} from './constants.js';

export default class {
  static calculate(grossSalary, dependents, region) {
    const statutoryInsuranceContribution = this.calculateStatutoryInsuranceContribution(grossSalary, region);
    const taxes = this.calculateTax((grossSalary - statutoryInsuranceContribution.total), dependents);
    const tax = taxes ? taxes.reduce((total, tax) => total + tax.total, 0) : 0;
    return {
      statutoryInsuranceContribution,
      taxes,
      total: grossSalary - tax - statutoryInsuranceContribution.total
    }
  }

  static calculateTax(income = 0, dependents = 0) {
    const taxableIncome = income - 9000000 - (dependents * 3600000);
    if(taxableIncome <= 0) {
      return 0;
    }
    return TAX_LEVELS.filter(taxLevel => taxableIncome > taxLevel.to || (taxLevel.from < taxableIncome && taxLevel.to))
      .map(taxLevel => {
        if(taxableIncome > taxLevel.to) {
          const total = ((taxLevel.to - taxLevel.from) * taxLevel.percent) / 100;
          return {...taxLevel, total}
        }
        const total = ((taxableIncome - taxLevel.from) * taxLevel.percent) / 100;
        return {...taxLevel, total}
      })
  }

  static calculateStatutoryInsuranceContribution(grossSalary = 0, region) {
    const salaryForSocialInsurance = grossSalary > MAX_SALARY_FOR_SOCIAL_INSURANCE ? MAX_SALARY_FOR_SOCIAL_INSURANCE : grossSalary;
    const salaryForHealthInsurance = grossSalary > MAX_SALARY_FOR_HEALTH_INSURANCE ? MAX_SALARY_FOR_HEALTH_INSURANCE : grossSalary;
    const maxSalaryForUnemploymentInsurance = this.getMaxSalaryForUnemploymentInsurance(region);
    const salaryForEmploymentInsurance = grossSalary > maxSalaryForUnemploymentInsurance ? maxSalaryForUnemploymentInsurance : grossSalary;
    const socialInsurance = (salaryForSocialInsurance * 8) / 100;
    const healthInsurance = (salaryForHealthInsurance * 1.5) / 100;
    const unEmploymentInsurance = salaryForEmploymentInsurance / 100;
    return {
      socialInsurance,
      healthInsurance,
      unEmploymentInsurance,
      total: socialInsurance + healthInsurance + unEmploymentInsurance
    }
  }

  static getMaxSalaryForUnemploymentInsurance(rawRegion = 1) {
    const region = parseInt(rawRegion, 10);
    if(region === 4) {
      return REGION_4_MIN_SALARY * 20;
    }
    if(region === 3) {
      return REGION_3_MIN_SALARY * 20;
    }
    if(region === 2) {
      return REGION_2_MIN_SALARY * 20;
    }
    return REGION_1_MIN_SALARY;
  }
}
