
import { Images } from "./assests/images";

const App = () => {
  return (
    <div className="flex h-screen items-center justify-center bg-cream">
      <div className="grid w-[90%] max-w-2xl grid-cols-1 overflow-hidden rounded-xl sm:grid-cols-2">
        <picture className="hidden sm:block">
          <source className="w-full h-full" srcSet={Images.ProductImageWebPD} type="image/webp" />
          <source className="w-full h-full" srcSet={Images.ProductImageD} type="image/jpeg" />
          <img className="w-full h-full" src={Images.ProductImageD} alt="Product" />
        </picture>

        <picture className="sm:hidden">
          <source className="w-full h-full" srcSet={Images.ProductImageWebM} type="image/webp" />
          <source className="w-full h-full" srcSet={Images.ProductImageM} type="image/jpeg" />
          <img className="w-full h-full" src={Images.ProductImageM} alt="Product" />
        </picture>

        <div className="space-y-5 bg-white p-[23px] sm:space-y-6 sm:p-8">
          <p className="font-Mon uppercase tracking-[0.3rem] text-DarkGrayishBlue">
            perfume
          </p>
          <h2 className="font-Fra text-3xl font-bold text-VeyDarkBlue sm:text-4xl">
            Gabrielle Essence Eau De Parfum
          </h2>
          <p className="font-Mon text-sm font-medium text-DarkGrayishBlue">
            A floral, solar and voluptous interpretation composed by Olivier
            Polge, Perfumer-Creator for the House of CHANEL
          </p>
          <p className="flex flex-row items-center space-x-5">
            <span className="font-Fra text-3xl font-bold text-DarkCyan">
              $149.99
            </span>
            <p className="text-sm text-DarkGrayishBlue">
              <del>$169.99</del>
            </p>
          </p>
          <div className="pt-4">
            <button className="flex w-full items-center justify-center space-x-2 rounded-xl bg-DarkCyan p-4 font-medium text-white ring-VeyDarkBlue ring-offset-1 hover:bg-VeyDarkBlue focus:ring-2">
              <img className="h-min w-min" src={Images.CartIcon} alt="cart" />
              <p>Add to cart</p>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
