import Calculator from './calculator.js';
import Report from './report.js';

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
    const result = Calculator.calculate(grossSalary, dependents, region);
    console.log(result);
    $('html').width("700px");
    $('.TC__result-container').empty();
    $('.TC__result-container').append(Report.generate(result));
  });

  $('.TC__form__clear-button').click(() => {
    AutoNumeric.getAutoNumericElement('.TC__form__gross-salary').set(0);
    $('.TC__form__register-dependents').val(0);
    $('.TC__result-container').empty();
    $("#TC_region1").prop("checked", true);
    $('html').width("510px");
  })
});
