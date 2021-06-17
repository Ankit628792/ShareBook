import React, {useEffect} from 'react'
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
import MyAccount from "./Views/MyAccount";
import ChatPage from "./Components/ChatPage";
import Signin from "./Components/Signin";
import Signup from "./Components/Signup";
import { useDispatch } from 'react-redux';
import { restoreBookmark } from './actions';

function App() {

  const location = useLocation();

  const dispatch = useDispatch()
  
  useEffect(() => {
        const localBookmarks = JSON.parse(localStorage.getItem("bookmark"));
        console.log(localBookmarks)
        if (localBookmarks) {
          dispatch(restoreBookmark(localBookmarks));
        }
      }, []);
  
  return (
    <>
        <AnimatePresence exitBeforeEnter>
          <AnimateSharedLayout>
            <Navbar />
            <Switch location={location} key={location.pathname}>
              <Route exact path="/book/:id">
                <BookSingle />
              </Route>

              <Route exact path="/bookmarks">
                <BookmarkPage />
              </Route>

              <Route exact path="/signup">
                <Signup />
              </Route>

              <Route exact path="/signin">
                <Signin />
              </Route>

              <Route exact path="/myaccount">
                <MyAccount />
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
              <Route exact path="/chats">
                <ChatPage />
              </Route>


            </Switch>
          </AnimateSharedLayout>
        </AnimatePresence>

        <Footer />
    </>
  );
}

export default App;

