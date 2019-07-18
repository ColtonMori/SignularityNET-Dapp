import React from "react";
import { Link } from "react-router-dom";

import ServiceListItem from "./ServiceListItem";
import CardImg from "../../../../../assets/images/dummy-card.png";
import { useStyles } from "./styles";
import Routes from "../../../../../utility/constants/Routes";

const CardGroup = ({ cards }) => {
  const classes = useStyles();
  return (
    <div className={classes.cardCollection}>
      {cards.map(card => (
        <Link to={`/${Routes.SERVICE_DETAILS}/${card.service_row_id}`} className={classes.routerLink}>
          <ServiceListItem
            key={card.service_id}
            cardMedia={card.display_image_url ? card.display_image_url : CardImg}
            cardTitle={card.org_id}
            cardSubheader={card.display_name}
            ratingGiven={card.service_rating}
            totalRating={card.total_users_rated}
            cardDescription={card.description}
          />
        </Link>
      ))}
    </div>
  );
};

CardGroup.defaultProps = {
  cards: [],
};

export default CardGroup;
