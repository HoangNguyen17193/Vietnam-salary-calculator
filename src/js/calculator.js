import { TAX_LEVELS } from './constants.js';

export default class {
  static calculate(grossSalary, dependents) {
    const statutoryInsuranceContribution = this.calculateStatutoryInsuranceContribution(grossSalary);
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

  static calculateStatutoryInsuranceContribution(grossSalary = 0) {
    const socialInsurance = (grossSalary * 8) / 100;
    const healthInsurance = (grossSalary * 1.5) / 100;
    const unEmploymentInsurance = grossSalary / 100;
    return {
      socialInsurance,
      healthInsurance,
      unEmploymentInsurance,
      total: socialInsurance + healthInsurance + unEmploymentInsurance
    }
  }
}
