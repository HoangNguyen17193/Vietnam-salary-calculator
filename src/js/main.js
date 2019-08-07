import Calculator from './calculator.js';

Waves.attach('.button');
Waves.init();

$('.TC__form').on('submit', (e) => {
  e.preventDefault();
  const grossSalary = $('.TC__form__gross-salary').val();
  const dependents = $('.TC__form__register-dependents').val();
  Calculator.calculate(grossSalary, dependents);
});
