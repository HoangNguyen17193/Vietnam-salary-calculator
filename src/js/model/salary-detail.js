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

}
