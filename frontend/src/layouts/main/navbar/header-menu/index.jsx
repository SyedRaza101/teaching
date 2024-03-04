import { HeaderMenuWrapper } from "./styles";
import { LinkButton, SearchPatient } from "../../../../components";
import { useLocation } from "react-router-dom";

const HeaderMenu = () => {
  const routes = useLocation();
  return (
    <HeaderMenuWrapper>
      {!["/register/student", "/register/teacher", "/login"].includes(
        routes.pathname
      ) && <SearchPatient />}
      <LinkButton title="Home" link="/" />
      <LinkButton title="About" link="/about" />
      <LinkButton title="Contact" link="/contact" />
    </HeaderMenuWrapper>
  );
};

export default HeaderMenu;
