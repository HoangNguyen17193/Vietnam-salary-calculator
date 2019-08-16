import { formatCurrency } from './utils.js';

export default class {
  static generate(result = {}) {
    const {
      statutoryInsuranceContribution,
      tax,
      totalTax,
      grossSalary,
      netSalary
    } = result;
    const {
      taxes,
      taxableIncome
    } = tax;
    return `<div class="TC__result">
              <div class="row">
                <table class="table TC__result__table">
                 <tbody>
                    <tr>
                      <td class="TC__result__table__header-column TC--no-border">Gross Salary</td>
                      <td class="TC__result__table__result-row TC__result__table__total-row TC--no-border">${formatCurrency(grossSalary)}</td>
                    </tr>
                  </tbody>
                </table>
                 <h5 class="TC__result__table__header">Statutory Insurance Contribution</h5>
                 <table class="table TC__result__table">
                    <tbody>
                      <tr>
                       <td>
                        Heath Insurance
                       </td>
                       <td class="TC__result__table__result-row">
                        ${formatCurrency(statutoryInsuranceContribution.healthInsurance)}
                       </td>
                      </tr>
                      <tr>
                       <td>
                        Social Insurance
                       </td>
                       <td class="TC__result__table__result-row">
                        ${formatCurrency(statutoryInsuranceContribution.socialInsurance)}
                       </td>
                      </tr>
                      <tr>
                       <td>
                        Unemployment Insurance
                       </td>
                       <td class="TC__result__table__result-row">
                        ${formatCurrency(statutoryInsuranceContribution.unEmploymentInsurance)}
                       </td>
                      </tr>
                      <tr>
                       <td>
                        
                       </td>
                       <td class="TC__result__table__result-row TC__result__table__total-row">
                        ${formatCurrency(statutoryInsuranceContribution.total)}
                       </td>
                      </tr>
                    </tbody>
                 </table>
              </div>
              <div class="row">
               <h5 class="TC__result__table__header">Personal income tax withheld</h5>
                 <table class="table TC__result__table">
                    <tbody>
                      ${this._generateTaxRows(taxes)}
                      <tr>
                       <td>
                       </td>
                       <td class="TC__result__table__result-row TC__result__table__total-row">
                        ${formatCurrency(totalTax)}
                       </td>
                      </tr>
                    </tbody>
                 </table>
                 
                 <table class="table TC__result__table">
                 <tbody>
                    <tr>
                      <td class="TC__result__table__header-column TC--no-border">Net Salary</td>
                      <td class="TC__result__table__result-row TC__result__table__total-row TC--no-border">${formatCurrency(netSalary)}</td>
                    </tr>
                  </tbody>
                </table>
              </div>
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
