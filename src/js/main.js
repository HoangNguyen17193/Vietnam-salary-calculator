import Calculator from './service/calculator.js';
import Report from './service/report.js';

$(document).ready(() => {
  Waves.attach('.TC__form__button');
  Waves.init();
  new AutoNumeric('#gross-salary', {
    unformatOnSubmit: true,
    minimumValue: 0
  });

  $('.TC__form').on('submit', (e) => {
    e.preventDefault();
    const grossSalary = $('.TC__form__gross-salary').val();
    const dependents = $('.TC__form__register-dependents').val();
    const region = $('input[name=region-radio-input]:checked').val();
    const salaryDetail = Calculator.calculate(grossSalary, dependents, region);
    $('html').width("700px");
    $('.TC__result-container').empty();
    $('.TC__result-container').append(Report.generate(salaryDetail));
  });

  $('.TC__form__clear-button').click(() => {
    AutoNumeric.getAutoNumericElement('.TC__form__gross-salary').set(0);
    $('.TC__form__register-dependents').val(0);
    $('.TC__result-container').empty();
    $("#TC_region1").prop("checked", true);
    $('html').width("510px");
  })
});
