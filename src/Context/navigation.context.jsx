import { useContext, createContext, useState } from "react";

const navContext = createContext({
  mobileNav: null,
  setMobileNav: () => {},
});

const navProvider = ({ children }) => {
  const [mobileNav, setMobileNav] = useState(false);

  const handleNav = () => {
    setMobileNav((mobileNav = !mobileNav));
  };

  const value = [handleNav];
  return <navContext.Provider value={value}>{children}</navContext.Provider>;
};
