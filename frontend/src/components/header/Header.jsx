import * as shad from "@/components/ui/shadBarrel";
import ShoppingCartSheet from "./shoppingCart/ShoppingCartSheet";
import LoginDialog from "../login/LoginDialog";
import { Link } from "react-router-dom";
import { useAuth } from "@/utils/hooks/AuthContext";
import SearchBar from "./searchBar/SearchBar";
const Header = () => {
  const { loggedIn, logout } = useAuth();

  return (
    <>
      <header className="w-full bg-slate-500 p-4 bg-slate-700">
        <div className="grid grid-cols-6 items-center">
          <div className="col-start-2 col-end-3">
            <Link
              to="/"
              className="text-white text-lg font-bold flex justify-end pr-5"
            >
              <img
                style={{ width: "150px" }}
                src="/HakimOnlineLogo.png"
                alt="HakimLogo"
              />
            </Link>
          </div>{" "}
          <div className="col-start-3 col-end-5">
            <SearchBar />
          </div>
          <nav className="col-start-5 col-end-7 flex justify-end items-center space-x-4">
            <ul className="flex space-x-4 items-center pr-5">
              <li>
                <Link to="/products" className="text-white">
                  Erbjudanden
                </Link>
              </li>
              <li>
                {loggedIn?.admin_access ? (
                  <Link to="/admin" className="text-white">
                    Admin Panel
                  </Link>
                ) : (
                  ""
                )}
              </li>
              <li>
                <LoginDialog {...{ loggedIn, logout }} />
              </li>
              <li>
                <ShoppingCartSheet />
              </li>
            </ul>
          </nav>
        </div>
      </header>
    </>
  );
};

export default Header;
