import React from "react";
import { NavLink, } from "react-router-dom";
import { Menu, } from "semantic-ui-react";

// old way first, without useContext hook
import { UserConsumer } from '../providers/UserProvider'

const Navbar = () => (
    <UserConsumer>
        {(value) => (
            <Menu>
            <NavLink to="/">
            <Menu.Item>
                 Home
            </Menu.Item>
            </NavLink>
            { !value.initialLoadInProgress && <NavLink to="/user/profile">
              <Menu.Item>
               { value.avatar}
              </Menu.Item>
            </NavLink>
                }
            </Menu>
        )}
    </UserConsumer>
)

export default Navbar;