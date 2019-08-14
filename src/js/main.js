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
    console.log('zo zo zo');
    const grossSalary = $('.TC__form__gross-salary').val();
    const dependents = $('.TC__form__register-dependents').val();
    const result = Calculator.calculate(grossSalary, dependents);
    $('html').width("800px");
    $('.TC__result-container').append(Report.generate(result));
  });
});
