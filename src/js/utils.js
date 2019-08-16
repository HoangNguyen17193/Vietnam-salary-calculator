function formatCurrency(amount) {
  const validAmount = parseFloat(amount);
  return validAmount.toLocaleString('it-IT', {style : 'currency', currency : 'VND'});
}

export {
  formatCurrency
}
