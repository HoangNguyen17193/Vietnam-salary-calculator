import Calculator from './calculator.js';

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
    console.log(Calculator.calculate(grossSalary, dependents));
  });
});
