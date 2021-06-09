
import React, { useEffect } from "react";
import Navbar from "./Views/Navbar";
import Footer from "./Views/Footer";
import Home from "./Views/Home";
import About from "./Views/About";
import BookmarkPage from "./Views/BookmarkPage";
import { Switch, Route, useLocation } from "react-router-dom";
import { AnimatePresence, AnimateSharedLayout } from "framer-motion";
import './assets/main.css'
import "./App.css";
import './assets/style.css'
import BookSingle from './Components/BookSingle';
import Contact from "./Views/Contact";
import AllBooks from "./Views/AllBooks";
import Log from "./Views/Log";
import MyAccount from "./Views/MyAccount";


function App() {
 
  const location = useLocation();
  // useEffect(() => {
  //       const localBookmarks = localStorage.getItem("bookmarks");
  //       console.log(localBookmarks)
        
  //       if (localBookmarks) {
  //         dispatch({
  //           type: "RESTORE_BOOKMARKS",
  //           bookmarks: JSON.parse(localBookmarks),
  //         });
  //       }
  //     }, []);

  return (
    <>
        <AnimatePresence exitBeforeEnter>
          <AnimateSharedLayout>
            <Navbar />
            <Switch location={location} key={location.pathname}>
              <Route path="/book/:id">
                <BookSingle />
              </Route>
            
              <Route path="/bookmarks">
                <BookmarkPage />
              </Route>

              <Route path="/log">
                <Log type="signup" />
              </Route>

              <Route path="/myaccount">
                <MyAccount type="myaccount" />
              </Route>

              <Route exact path="/">
                <Home />
              </Route>

              <Route exact path="/about">
                <About />
              </Route>

              <Route exact path="/contactus">
                <Contact />
              </Route>
              <Route exact path="/allbooks">
                <AllBooks />
              </Route>


            </Switch>
          </AnimateSharedLayout>
        </AnimatePresence>
      <div
        className="bg-black"
        style={{ marginTop: "auto", height: "3rem" }}
      ></div>
      <Footer />
    </>
  );
}

export default App;