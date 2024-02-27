import { CiShop } from 'react-icons/ci';
import { Link } from 'react-router-dom';
import CartStatus from './CartStatus';

const Header = () => {
  return (
    <header className={`bg-none py-6 fixed w-full z-10 lg:px-8 transition-all`}>
      <div className="container mx-auto flex items-center justify-between h-full">
        <Link to={`/`} className="cursor-pointer ml-8">
          <CiShop className="text-3xl " />
        </Link>
        <CartStatus />
      </div>
    </header>
  );
};

export default Header;
