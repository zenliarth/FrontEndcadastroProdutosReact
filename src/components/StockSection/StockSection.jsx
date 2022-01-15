import ProductsList from '../ProductsList/ProductsList';

const StockSection = (props) => {
  return (
    <div
      className="w-full h-screen py-20 flex flex-col bg-gray-900"
      name="#products"
    >
      <h1 className="text-5xl font-bold text-center pb-12 text-white">
        Estoque de Produtos
      </h1>
      <div className="w-full flex justify-center itens-center">
        <ProductsList />
      </div>
    </div>
  );
};

export default StockSection;
