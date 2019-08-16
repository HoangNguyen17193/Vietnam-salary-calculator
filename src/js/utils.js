function formatCurrency(amount) {
  const validAmount = parseFloat(amount);
  return validAmount.toLocaleString(undefined, {
    style : 'currency',
    currency : 'VND',
    minimumFractionDigits: 2
  });
}

export {
  formatCurrency
}
