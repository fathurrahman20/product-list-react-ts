import {
  calculateDiscountedPrice,
  calculateUsedStockPercentage,
  formatToIDR,
} from '../../services/productHelpers';
import { products } from './product';

export default function CardProduct() {
  return (
    <div className="mt-6 grid grid-cols-2 gap-x-4 gap-y-10 sm:gap-x-6 md:grid-cols-4 md:gap-y-0 lg:gap-x-8">
      {products.map(product => (
        <div key={product.id} className="group relative text-start">
          <div className="h-56 w-full overflow-hidden rounded-md bg-gray-200 group-hover:opacity-75 lg:h-72 xl:h-80">
            <img
              alt={product.imageAlt}
              src={product.imageSrc}
              className="h-full w-full object-cover object-center"
            />
          </div>
          <h3 className="mt-4 text-md text-gray-700 font-semibold">
            <a href={product.href}>
              <span className="absolute inset-0" />
              {product.name}
            </a>
          </h3>
          <p className="mt-1 text-sm text-gray-900 font-medium">
            {calculateDiscountedPrice(product.price, product.disc)}
          </p>
          <p className="mt-1 text-sm font-normal text-gray-500 line-through">
            {formatToIDR(product.price)}{' '}
            <span className="text-sm font-bold text-red-500">{product.disc}%</span>
          </p>
          <div aria-hidden="true" className="mt-6">
            <div className="overflow-hidden rounded-full bg-gray-200">
              <div
                style={{
                  width: `${calculateUsedStockPercentage(product.initialStock, product.currentStock)}`,
                }}
                className={`h-2 rounded-full  ${calculateUsedStockPercentage(product.initialStock, product.currentStock) > '70' ? 'bg-red-600' : 'bg-green-600'}`}
              />
            </div>
            <div className="text-indigo-600">
              {calculateUsedStockPercentage(product.initialStock, product.currentStock) >= '75' ? (
                <span className="text-red-500 font-medium">Segera habis</span>
              ) : (
                <span className="text-green-500 font-medium">Tersedia</span>
              )}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
