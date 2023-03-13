import { useContext } from "react"
import MeetupList from "../components/meetups/MeetupList";
import FavouritesContext from "../store/favourites-context"
const Favourites = () => {
  const favouriteContext = useContext(FavouritesContext);
  let content;

  if(favouriteContext.totalFavourites ===0){
    content = <p>No favourites yet</p>
  }else {
  content = <MeetupList meetups = {favouriteContext.favourites}/>
  }
  return (
    <section>
      <h1>My Favourites</h1>
      {content}
    </section>
  )
}

export default Favourites