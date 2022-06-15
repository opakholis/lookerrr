// convert number to price
export const toPrice = (number) => {
  const nf = new Intl.NumberFormat('id-ID', {
    style: 'currency',
    currency: 'IDR',
    maximumFractionDigits: 0
  });

  return nf.format(number);
};
