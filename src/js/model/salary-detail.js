import { TAX_PAYER_PERSONAL_RELIEF, DEPENDENTS_RELIEF } from '../constants.js';

export default class  {
  constructor(grossSalary, dependents, taxes, statutoryInsuranceContributions) {
    this.grossSalary = grossSalary;
    this.dependents = dependents;
    this.taxes = taxes;
    this.statutoryInsuranceContributions = statutoryInsuranceContributions;
  }

  getTotalTax() {
    return this.taxes ? this.taxes.reduce((total, tax) => total + tax.total, 0) : 0;
  }

  getTotalInsuranceContribution() {
    const {socialInsurance,healthInsurance, unEmploymentInsurance} = this.statutoryInsuranceContributions;
    return socialInsurance + healthInsurance + unEmploymentInsurance
  }

  getNetSalary() {
    return this.grossSalary - this.getTotalTax() - this.getTotalInsuranceContribution();
  }

  getTaxPayerPersonalRelief() {
    return TAX_PAYER_PERSONAL_RELIEF;
  }

  getDependentsRelief() {
    const dependents = parseInt(this.dependents) || 0;
    return DEPENDENTS_RELIEF * dependents;
  }
}
