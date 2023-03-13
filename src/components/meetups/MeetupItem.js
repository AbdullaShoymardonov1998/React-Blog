import { useContext } from "react";
import FavouritesContext from "../../store/favourites-context";
import Card from "../ui/Card";
import classes from "./MeetupItem.module.css";
const MeetupItem = ({ id, image, title, address, description }) => {
  const favouriteContext = useContext(FavouritesContext);

  const itemIsFavourite = favouriteContext.itemFavourite(id);

  function toggleFavouritesHandler() {
    if (itemIsFavourite) {
      favouriteContext.addRemove(id);
    } else {
      favouriteContext.addFavourite({
        id: id,
        description: description,
        title: title,
        address: address,
        image: image,
      });
    }
  }

  return (
    <li className={classes.item}>
      <Card>
        <div>
          <img className={classes.image} src={image} alt={title} />
        </div>
        <div className={classes.content}>
          <h3>{title}</h3>
          <address>{address}</address>
          <p>{description}</p>
        </div>
        <div className={classes.actions}>
          <button onClick = {toggleFavouritesHandler}>{itemIsFavourite ? 'Remove from Favourites' : 'Add to Favourites'}</button>
        </div>
      </Card>
    </li>
  );
};

export default MeetupItem;
