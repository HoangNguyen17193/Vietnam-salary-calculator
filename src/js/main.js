import Calculator from './service/calculator.js';
import Report from './service/report.js';

$(document).ready(() => {
  Waves.attach('.TC__form__button');
  Waves.init();
  new AutoNumeric('.TC__form__gross-salary', {
    unformatOnSubmit: true,
    minimumValue: 0
  });

  new AutoNumeric('.TC__form__insurance__pay-for__input', {
    unformatOnSubmit: true,
    minimumValue: 0
  });

  $('input[name=insurance-pay-for-radio-input]').change(function() {
    $('.TC__form__insurance__pay-for__input').attr('disabled', this.value === "full");
  });

  $('.TC__form').on('submit', (e) => {
    e.preventDefault();
    const grossSalary = $('.TC__form__gross-salary').val();
    const insurancePayFor = $('input[name=insurance-pay-for-radio-input]:checked').val();
    const insuranceSalary = insurancePayFor === 'full' ? grossSalary : $('.TC__form__insurance__pay-for__input').val();
    const dependents = $('.TC__form__register-dependents').val();
    const region = $('input[name=region-radio-input]:checked').val();
    const salaryDetail = Calculator.calculate(grossSalary, dependents, region, insuranceSalary);
    $('.TC__result-container').empty();
    $('.TC__result-container').append(Report.generate(salaryDetail));
  });

  $('.TC__form__clear-button').click(() => {
    AutoNumeric.getAutoNumericElement('.TC__form__gross-salary').set(0);
    AutoNumeric.getAutoNumericElement('.TC__form__insurance__pay-for__input').set(0);
    $('.TC__form__register-dependents').val(0);
    $("#TC__insurance-pay-for__full").prop("checked", true);
    $('.TC__result-container').empty();
    $("#TC_region1").prop("checked", true);
  })
});
