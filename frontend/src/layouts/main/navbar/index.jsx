import {
  NavWrapper,
  LogoWrapper,
  LeftWrapper,
  RightWrapper,
  BrandWrapper,
} from "./styles";
import Logo from "../../../assets/images/favicon.ico";
import { NavLink } from "react-router-dom";
import { Loader } from "../../../components";
import HeaderMenu from "./header-menu";
import HeaderIconMenu from "./header-icon-menu";
// import { useSelector } from "react-redux";
// import { RootState } from '~/store'

const Navbar = () => {
  //   const { globalLoader } = useSelector((state: RootState) => state.globalLoader)
  return (
    <NavWrapper>
      <LeftWrapper>
        <BrandWrapper>
          <LogoWrapper>
            <NavLink to={"/"}>
              <img src={Logo} alt="faact" />
            </NavLink>
            <p>Teach-Me</p>
          </LogoWrapper>
          {/* {!!globalLoader && <Loader />} */}
          <Loader />
        </BrandWrapper>
        <HeaderMenu />
      </LeftWrapper>
      <RightWrapper>
        <HeaderIconMenu />
      </RightWrapper>
    </NavWrapper>
  );
};

export default Navbar;
