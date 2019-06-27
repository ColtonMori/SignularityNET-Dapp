import React, { Component } from "react";
import Grid from "@material-ui/core/Grid";
import { withStyles } from "@material-ui/styles";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

import StyledButton from "../common/StyledButton";
import MainSection from "./MainSection";
import { useStyles } from "./styles";
import Routes from "../../utility/stringConstants/Routes";
import { serviceActions } from "../../Redux/actionCreators";

class AiMarketplace extends Component {
    componentDidMount = () => {
        this.props.fetchService();
    };

    render() {
        const { classes, servicesList } = this.props;

        return (
            <div className={classes.aiMarketPlaceContainer}>
                <div className={classes.mainWrapper}>
                    <Grid container spacing={24}>
                        <Grid item xs={12} sm={3} md={3} lg={3} className={classes.titleContainer}>
                            <h2 className={classes.title}>AI Marketplace</h2>
                        </Grid>
                        <Grid item xs={12} sm={9} md={9} lg={9}>
                            <p className={classes.description}>
                                Want to find the right AI service for your project? You’ve come to the right place.{" "}
                                <br />
                                We’ve got a growing marketplace with hundreds of AI services for you to utilize. <br />
                                They’re powered by a community of amazing developers from all over the globe.
                            </p>
                            <Link to={Routes.SIGNUP} className={classes.signupLink}>
                                <StyledButton type="blue" btnText="Sign up for free credits" />
                            </Link>
                        </Grid>
                    </Grid>
                    <div>
                        <MainSection servicesList={servicesList} />
                    </div>
                </div>
            </div>
        );
    }
}

const mapStateToProps = state => ({
    servicesList: state.serviceReducer.data,
    isLoggedIn: state.userReducer.isLoggedIn,
});

const mapDispatchToProps = dispatch => ({
    fetchService: () => dispatch(serviceActions.fetchService),
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(withStyles(useStyles)(AiMarketplace));
