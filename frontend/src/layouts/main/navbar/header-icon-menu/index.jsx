import { NavLink } from "react-router-dom";
import { HeaderIconMenuWrapper } from "./styles";
import UserPopover from "./user-popover";

const HeaderIconMenu = () => {
  //   const { userName }: IUser = useSelector((state: RootState) => state.auth)
  return (
    <HeaderIconMenuWrapper>
      <li className="iconMenuList accountMenu">
        <NavLink
          to="/login"
          style={{ padding: "0", display: "flex", alignItems: "center" }}
        >
          {/* {userName !== null && userName} */}
          Sign in
        </NavLink>
      </li>
      <UserPopover />
    </HeaderIconMenuWrapper>
  );
};

export default HeaderIconMenu;
