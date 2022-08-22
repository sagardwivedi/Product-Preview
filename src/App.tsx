import ProductImageD from "./assests/images/image-product-desktop.jpg";
import ProductImageM from "./assests/images/image-product-mobile.jpg";
import CartIcon from "./assests/images/icon-cart.svg";

const App = () => {
  return (
    <div className="flex h-screen items-center justify-center bg-cream">
      <div className="grid w-[90%] max-w-2xl grid-cols-1 overflow-hidden rounded-xl sm:grid-cols-2">
        <img
          src={ProductImageM}
          className="h-max w-max bg-contain sm:hidden"
          alt="logo"
        />
        <img
          src={ProductImageD}
          className="hidden h-max w-max bg-contain sm:block"
          alt="logo"
        />
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
            <span className="text-sm text-DarkGrayishBlue">
              <del>$169.99</del>
            </span>
          </p>
          <div className="pt-4">
            <button className="flex w-full items-center justify-center space-x-2 rounded-xl bg-DarkCyan p-4 font-medium text-white ring-VeyDarkBlue ring-offset-1 hover:bg-VeyDarkBlue focus:ring-2">
              <img className="h-min w-min" src={CartIcon} alt="cart" />
              <span>Add to cart</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
