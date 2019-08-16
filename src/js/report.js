import { formatCurrency } from './utils.js';

export default class {
  static generate(result) {
    return `<div class="TC__result row">
              <div class="col">
                 <h5>Statutory Insurance Contribution</h5>
                 <table class="table">
                    <tbody>
                      <tr>
                       <td>
                        Heath Insurance
                       </td>
                       <td>
                        ${formatCurrency(result.statutoryInsuranceContribution.healthInsurance)}
                       </td>
                      </tr>
                      <tr>
                       <td>
                        Social Insurance
                       </td>
                       <td>
                        ${formatCurrency(result.statutoryInsuranceContribution.socialInsurance)}
                       </td>
                      </tr>
                      <tr>
                       <td>
                        Unemployment Insurance
                       </td>
                       <td>
                        ${formatCurrency(result.statutoryInsuranceContribution.unEmploymentInsurance)}
                       </td>
                      </tr>
                      <tr>
                       <td>
                        
                       </td>
                       <td>
                        <bold>${formatCurrency(result.statutoryInsuranceContribution.total)}</bold>
                       </td>
                      </tr>
                    </tbody>
                 </table>
              </div>
              <!--<div class="col">-->
                <!--<h5>Personal Income Tax</h5>-->
                 <!--<table>-->
                    <!--<tbody>-->
                      <!--<tr>-->
                       <!--<td>-->
                        <!--Level 1-->
                       <!--</td>-->
                       <!--<td>-->
                        <!---->
                       <!--</td>-->
                      <!--</tr>-->
                      <!--<tr>-->
                       <!--<td>-->
                        <!--Level 2-->
                       <!--</td>-->
                       <!--<td>-->
                        <!---->
                       <!--</td>-->
                      <!--</tr>-->
                      <!--<tr>-->
                       <!--<td>-->
                        <!--Level 3-->
                       <!--</td>-->
                       <!--<td>-->
                        <!---->
                       <!--</td>-->
                      <!--</tr>-->
                    <!--</tbody>-->
                 <!--</table>-->
              <!--</div>-->
            </div>`
  }
}
