import React from "react";
import StarRatingComponent from "react-star-rating-component";
import Grid from "@material-ui/core/Grid";
import Card from "@material-ui/core/Card";
import CardMedia from "@material-ui/core/CardMedia";
import CardHeader from "@material-ui/core/CardHeader";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import Typography from "@material-ui/core/Typography";
import Avatar from '@material-ui/core/Avatar';

import StyledButton from "../../../../../common/StyledButton";
import { useStyles } from "./styles";
import RatingsCount from "../../../../../common/RatingsCount";

const ServiceListItem = props => {
  const classes = useStyles();
  return (
    <Card className={classes.card}>
      <Grid container spacing={24} className={classes.cardItemsContainer}>

        <Grid item xs={12} sm={1} md={1} lg={1} className={classes.mediaContainer}>
          <CardMedia className={classes.CardMedia} image={props.cardMedia} title={props.title} />
        </Grid>

        <Grid item xs={12} sm={10} md={10} lg={10}>

          <CardHeader
            className={classes.cardHeader}
            avatar={
              <Avatar aria-label="recipe" className={classes.avatar}>
                R
              </Avatar>
            }
            classes={{ title: classes.cardTitle, subheader: classes.cardSubheader }}
            title={
              <div className={classes.ratingSection}>
              <h4>{props.cardTitle}</h4>
              <StarRatingComponent
                name="rate1"
                starCount={5}
                value={Number(props.ratingGiven)}
                className={classes.ratingStars}
              />
              <RatingsCount ratingGiven={props.ratingGiven} totalRating={props.totalRating} />
            </div>
            }
            subheader={props.cardSubheader}
            action={
              <StyledButton type="transparent" btnText="demo" />
            }
          />

          <CardContent className={classes.cardContent}>            
            <Typography className={classes.cardTypograpy} component="p">
              {props.cardDescription}
            </Typography>
          </CardContent>

        </Grid>
      </Grid>
    </Card>
  );
};

export default ServiceListItem;
