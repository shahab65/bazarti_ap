import React from "react";
import { makeStyles } from "@material-ui/styles";

// history
import history from "../../helpers/history";

// components
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";

// styles
const useStyles = makeStyles(() => ({
  root: {
    width: "100%",
    transition: "0.3s ease",
    "&:hover": {
      transform: "scale(1.025)",
      boxShadow: "0 0 1.5rem rgba(0,0,0,0.1)"
    },
  },
  media: {
    height: 256,
  },
}));

const ProductCard = ({ product }) => {
  const classes = useStyles();

  const handleProductClick = () => {
    history.push(`product/${product.slug}`);
  };

  return (
    <Card className={classes.root}>
      <CardActionArea onClick={handleProductClick}>
        <CardMedia className={classes.media} image={product.image} />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {product.name}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            {product.description}
          </Typography>
        </CardContent>
      </CardActionArea>
      {/* <CardActions>
        <Button size="small" color="primary">
          Share
        </Button>
        <Button size="small" color="primary">
          Learn More
        </Button>
      </CardActions> */}
    </Card>
  );
};

export default ProductCard;
