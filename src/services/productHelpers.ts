const formatToIDR = (idr: number) => {
  const parsed = idr.toString().replace(/\B(?=(\d{3})+(?!\d))/g, '.');

  return `${'Rp '}${parsed}`;
};

const calculateDiscountedPrice = (price: number, discount: number) => {
  return formatToIDR(price - price * (discount / 100));
};

function calculateUsedStockPercentage(initialStock: number, currentStock: number): string {
  if (initialStock <= 0) {
    throw new Error('Initial stock must be greater than 0');
  }

  const percentage = ((initialStock - currentStock) / initialStock) * 100;
  return `${percentage.toFixed(2)}%`;
}

export { formatToIDR, calculateDiscountedPrice, calculateUsedStockPercentage };
