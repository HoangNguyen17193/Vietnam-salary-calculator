import { formatCurrency } from '../utils.js';

export default class {
  static generate(salaryDetail = {}) {
    const {
      statutoryInsuranceContributions,
      taxes,
      grossSalary,
    } = salaryDetail;
    return `<div class="TC__result">
               <table class="table TC__result__table">
                 <tbody>
                    <tr>
                      <td class="TC__result__table__header-column TC--no-border">Gross Salary</td>
                      <td class="TC__result__table__result-row TC__result__table__total-row TC--no-border">${formatCurrency(grossSalary)}</td>
                    </tr>
                  </tbody>
                </table>
                 <h5 class="TC__result__table__header">Statutory Insurance Contributions</h5>
                 <table class="table TC__result__table">
                    <tbody>
                      <tr>
                       <td>
                        Heath Insurance
                       </td>
                       <td class="TC__result__table__result-row">
                        ${formatCurrency(statutoryInsuranceContributions.healthInsurance)}
                       </td>
                      </tr>
                      <tr>
                       <td>
                        Social Insurance
                       </td>
                       <td class="TC__result__table__result-row">
                        ${formatCurrency(statutoryInsuranceContributions.socialInsurance)}
                       </td>
                      </tr>
                      <tr>
                       <td>
                        Unemployment Insurance
                       </td>
                       <td class="TC__result__table__result-row">
                        ${formatCurrency(statutoryInsuranceContributions.unEmploymentInsurance)}
                       </td>
                      </tr>
                      <tr>
                       <td>
                        
                       </td>
                       <td class="TC__result__table__result-row TC__result__table__total-row">
                        ${formatCurrency(salaryDetail.getTotalInsuranceContribution())}
                       </td>
                      </tr>
                    </tbody>
                 </table>
                 <h5 class="TC__result__table__header">Deduction for tax calculation</h5>
                 <table class="table TC__result__table"">
                  <tbody>
                    <tr>
                       <td>
                        Tax payer personal relief
                       </td>
                       <td>
                        ${formatCurrency(salaryDetail.getTaxPayerPersonalRelief())}
                       </td>
                    </tr>
                    <tr>
                       <td>
                        Dependents relief (${salaryDetail.dependents})
                       </td>
                       <td>
                        ${formatCurrency(salaryDetail.getDependentsRelief())}
                       </td>
                    </tr>
                    <tr>
                       <td>
                       </td>
                       <td class="TC__result__table__result-row TC__result__table__total-row">
                        ${formatCurrency(salaryDetail.getTaxPayerPersonalRelief()+ salaryDetail.getDependentsRelief())}
                       </td>
                    </tr>
                  </tbody>
                 </table>
               <h5 class="TC__result__table__header">Personal income tax withheld</h5>
                 <table class="table TC__result__table">
                    <tbody>
                      ${this._generateTaxRows(taxes)}
                      <tr>
                       <td>
                       </td>
                       <td class="TC__result__table__result-row TC__result__table__total-row">
                        ${formatCurrency(salaryDetail.getTotalTax())}
                       </td>
                      </tr>
                    </tbody>
                 </table>
                 
                 <table class="table TC__result__table">
                 <tbody>
                    <tr>
                      <td class="TC__result__table__header-column TC--no-border">Net Salary</td>
                      <td class="TC__result__table__result-row TC__result__table__total-row TC--no-border">
                        ${formatCurrency(salaryDetail.getNetSalary())}
                      </td>
                    </tr>
                  </tbody>
                </table>
            </div>`
  }

  static _generateTaxRows(taxes) {
    if(taxes && taxes.length > 0) {
      return taxes.map((tax) => this._generateTaxRow(tax)).join(' ');
    }
    return '';
  }

  static _generateTaxRow(tax) {
    return `<tr>
              <td>
                ${tax.title}
              </td>
              <td class="TC__result__table__result-row">
                ${formatCurrency(tax.total)}
              </td>
             </tr>`
  }
}
