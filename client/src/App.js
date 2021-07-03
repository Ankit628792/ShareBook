import React, { useEffect } from 'react'

import { Switch, Route, useLocation } from "react-router-dom";
import { AnimatePresence, AnimateSharedLayout } from "framer-motion";

import Navbar from "./Components/other/Navbar";
import HomePage from "./Views/HomePage";
import AllBooksPage from "./Views/AllBooksPage";
import AboutPage from "./Views/AboutPage";
import ContactPage from "./Views/ContactPage";
import BookmarkPage from "./Views/BookmarkPage";
import BookSingle from './Components/book/BookSingle';
import MyAccount from "./Views/MyAccount";
import BookPage from './Views/BookPage';
import ChatPage from "./Views/ChatPage";
import ErrorPage from './Views/ErrorPage';
import Signin from "./Components/form/Signin";
import Signup from "./Components/form/Signup";
import Signout from "./Components/form/Signout";
import Footer from "./Components/other/Footer";
import ScrollToTop from './Components/other/ScrollToTop'


import './assets/main.css'
import "./App.css";
import './assets/style.css'

import { useDispatch } from 'react-redux';
import { restoreBookmark, setUser } from './actions';
import { getData } from './requests/requestData';

function App() {

  const location = useLocation();

  const dispatch = useDispatch()

  const getUser = async () => {
    try {
      const { user, response } = await getData(`/api/user/userAuthentication`);
      if(user){
        dispatch(setUser(user))
      }
      else if (response.status !== 200) {
        console.log('unable to get user')
      }
      else if (response.status === 401) {
        console.log('unauthorised user')
      }
    } catch (error) {
      console.log('user not verified')
    }
  }

  useEffect(() => {
    getUser()

    const localBookmarks = JSON.parse(localStorage.getItem("bookmark"));
    if (localBookmarks) {
      dispatch(restoreBookmark(localBookmarks));
    }
  },[]);

  return (
    <>
      <AnimatePresence exitBeforeEnter>
        <AnimateSharedLayout>
          <Navbar />
          <Switch location={location} key={location.pathname}>

            <Route exact path="/">
              <HomePage />
            </Route>

            <Route exact path="/allbooks">
              <AllBooksPage />
            </Route>

            <Route exact path="/about">
              <AboutPage />
            </Route>

            <Route exact path="/contactus">
              <ContactPage />
            </Route>

            <Route exact path="/bookmarks">
              <BookmarkPage />
            </Route>

            <Route exact path="/book/:id">
              <BookSingle />
            </Route>

            <Route exact path="/myaccount">
              <MyAccount />
            </Route>

            <Route exact path="/mybook">
              <BookPage />
            </Route>

            <Route exact path="/chats">
              <ChatPage />
            </Route>

            <Route exact path="/signup">
              <Signup />
            </Route>

            <Route exact path="/signin">
              <Signin />
            </Route>

            <Route exact path="/signout">
              <Signout />
            </Route>

            <Route>
                <ErrorPage />
            </Route>

          </Switch>
        </AnimateSharedLayout>
      </AnimatePresence>
        <ScrollToTop />
        {
          window.location.pathname !== '/chats'
          &&
          <Footer />

        }
    </>
  );
}

export default App;

