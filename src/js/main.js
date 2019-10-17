import Calculator from './service/calculator.js';
import Report from './service/report.js';

$(document).ready(() => {
  Waves.attach('.TC__form__button');
  Waves.init();
  new AutoNumeric('.TC__form__gross-salary', {
    unformatOnSubmit: true,
    minimumValue: 0
  });

  new AutoNumeric('.TC__form__gross-salary-usd', {
    unformatOnSubmit: true,
    minimumValue: 0
  });

  new AutoNumeric('.TC__form__exchange-rate', {
    unformatOnSubmit: true,
    minimumValue: 0
  });

  new AutoNumeric('.TC__form__insurance__pay-for__input', {
    unformatOnSubmit: true,
    minimumValue: 0
  });

  new AutoNumeric('.TC__form__non-taxable-income__input', {
    unformatOnSubmit: true,
    minimumValue: 0
  });

  $('input[name=insurance-pay-for-radio-input]').change(function() {
    $('.TC__form__insurance__pay-for__input').attr('disabled', this.value === "full");
  });

  $('input[name=none-taxable-income-radio-input]').change(function() {
    $('.TC__form__non-taxable-income__input').attr('disabled', this.value === "none");
  });

  $('.TC__form').on('submit', (e) => {
    e.preventDefault();
    const grossSalaryVND = $('.TC__form__gross-salary').val();
    const grossSalaryUSD = $('.TC__form__gross-salary-usd').val();
    const exchangeRate = $('.TC__form__exchange-rate').val();
    const grossSalary = parseFloat(grossSalaryVND) + parseFloat(grossSalaryUSD * exchangeRate);
    const insurancePayFor = $('input[name=insurance-pay-for-radio-input]:checked').val();
    const nontaxableIncomeRadio = $('input[name=none-taxable-income-radio-input]:checked').val();
    const insuranceSalary = insurancePayFor === 'full' ? grossSalary : $('.TC__form__insurance__pay-for__input').val();
    const nonTaxableIncome = nontaxableIncomeRadio === 'other' ? $('.TC__form__non-taxable-income__input').val() : 0;
    const dependents = $('.TC__form__register-dependents').val();
    const region = $('input[name=region-radio-input]:checked').val();
    const salaryDetail = Calculator.calculate(grossSalary, dependents, region, insuranceSalary, nonTaxableIncome);
    $('.TC__result-container').empty();
    $('.TC__result-container').append(Report.generate(salaryDetail));
  });

  $('.TC__form__clear-button').click(() => {
    AutoNumeric.getAutoNumericElement('.TC__form__gross-salary').set(0);
    AutoNumeric.getAutoNumericElement('.TC__form__insurance__pay-for__input').set(0);
    $('.TC__form__register-dependents').val(0);
    resetInsuranceInput();
    resetNontaxableInput();
    removeResult();
    $('#TC_region1').prop("checked", true);
  })
});

function resetInsuranceInput() {
  $('#TC__insurance-pay-for__full').prop("checked", true);
  $('.TC__form__insurance__pay-for__input').attr('disabled', true);
}

function resetNontaxableInput() {
  $('#TC__form__non-taxable-income__radio-group--none').prop("checked", true);
  $('.TC__form__non-taxable-income__input').attr('disabled', true);
}

function removeResult() {
  $('.TC__result-container').empty();
}
