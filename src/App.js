import { Route, Routes } from "react-router-dom";
import Layout from "./components/layout/Layout";
import MainNavigation from "./components/layout/MainNavigation";
import AllMeetups from "./pages/AllMeetups";
import Favourites from "./pages/Favourites";
import NewMeetup from "./pages/NewMeetup";

function App() {
  return (
    <Layout className="App">
      <Routes>
        <Route exact path="/" element={<AllMeetups />}></Route>
        <Route path="/favourites" element={<Favourites />}></Route>
        <Route path="/new-meetup" element={<NewMeetup />}></Route>
      </Routes>
    </Layout>
  );
}

export default App;
