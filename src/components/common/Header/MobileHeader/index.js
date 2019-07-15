import React, { Fragment } from "react";
import { withStyles } from "@material-ui/styles";
import Icon from "@material-ui/core/Icon";
import clsx from "clsx";
import { connect } from "react-redux";
import { stylesActions } from "../../../../Redux/actionCreators";

import HeaderActions from "../HeaderActions";
import NavItem from "../NavItem";
import { useStyles } from "./styles";

const MobileHeader = ({ classes, data, isLoggedIn, hamburgerMenu, updateHamburgerState }) => {
  const toggleMobileMenu = () => {
    updateHamburgerState(!hamburgerMenu);
  };

  if (!hamburgerMenu) {
    return (
      <div className={classes.hamburger} onClick={toggleMobileMenu}>
        <span></span>
        <span></span>
        <span></span>
      </div>
    );
  }

  return (
    <Fragment>
      <div className={classes.mobileNavContainer}>
        <div className={classes.closeMenuIcon}>
          <Icon className={clsx(classes.icon, "fas fa-times")} onClick={toggleMobileMenu} />
        </div>
        <nav className={classes.mobileNavigation}>
          <ul>
            {data.tabs.map(tab => (
              <NavItem key={tab.title} title={tab.title} link={tab.link} active={tab.active} />
            ))}
            {data.dropdowns.map(dropdown => (
              <div className={classes.subMenues}>
                <Fragment key={dropdown.label}>
                  <NavItem title={dropdown.label} subHeader />
                  {dropdown.list.map(item => (
                    <NavItem key={item.label} title={item.label} link={dropdown.link} subListItem />
                  ))}
                </Fragment>
              </div>
            ))}
          </ul>
          <div className={classes.mobileActionBtns}>
            <HeaderActions isLoggedIn={isLoggedIn} />
          </div>
        </nav>
      </div>
    </Fragment>
  );
};

const mapStateToProps = state => ({
  hamburgerMenu: state.stylesReducer.hamburgerMenu,
});

const mapDispatchToProps = dispatch => ({
  updateHamburgerState: hamburgerState => dispatch(stylesActions.updateHamburgerState(hamburgerState)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withStyles(useStyles)(MobileHeader));
