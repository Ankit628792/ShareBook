import React from "react";
import "./Bookmark.css";
import { motion } from 'framer-motion'
import emptyBookmarks from "../assets/emptyBookmarks.svg";
import { NavLink } from "react-router-dom";
import Book from "./Book";
import { pageTransition, pageZoom } from "../util";

function Bookmarks() {
  const bookmarks = 0;
  const bookmark = [
    {
      "ISBN": 9780552159722,
      "title": "Deception point",
      "author": "Dan Brown",
      "summary": "When a new NASA satellite detects evidence of an astonishingly rare object buried deep in the Arctic ice, the floundering space agency proclaims a much-needed victory.. a victory that has profound implications for U.S. space policy and the impending presidential election. With the Oval Office in the balance, the President dispatches White House Intelligence analyst Rachel Sexton to the Arctic to verify the authenticity of the find. Accompanied by a team of experts, including the charismatic academic Michael Tolland, Rachel uncovers the unthinkable - evidence of scientific trickery - a bold deception that threatens to plunge the world into controversy..",
      "image": "http://s.s-bol.com/imgbase0/imagebase/large/FC/8/8/9/8/1001004006878988.jpg",
      "price": {
        "currency": "EUR",
        "value": 9.99,
        "displayValue": "9.99"
      }
    },
    {
      "ISBN": 9789022558027,
      "title": "Magic staff",
      "author": "Terry Brooks",
      "summary": "Vijf eeuwen geleden werd de wereld door een noodlottige demonenoorlog in de as gelegd. De overlevenden hebben een toevluchtsoord gevonden in een door magie beschermde vallei, maar nu staat een genadeloos leger op het punt de vallei binnen te vallen. De enige hoop op redding voor de overlevenden was Sider Ament, maar hij leeft niet meer. Sider was de drager van de enig overgebleven zwarte staf, een machtige talisman die eeuwenlang door de Ridders van het Woord is doorgegeven en die van cruciaal belang is bij het in evenwicht houden van de magie op de wereld. Om de wereld van de ondergang te redden, moet de magie van de staf behouden blijven. Panterra Qu, een jonge Spoorzoeker aan wie de staf na Siders dood wordt doorgegeven, heeft grote moeite om de macht ervan naar zijn hand te zetten. Alles moet op alles worden gezet, want eenieder zal een hoge tol betalen als de oorlog tussen het Woord en de Leegte naar de duisternis dreigt af te glijden. ",
      "image": "http://s.s-bol.com/imgbase0/imagebase/large/FC/2/2/5/2/9200000002212522.jpg",
      "price": {
        "currency": "EUR",
        "value": 17.5,
        "displayValue": "17.50"
      }
    }
  ]

  return (
    <motion.div
      initial="initial"
      animate="in"
      exit="out"
      variants={pageZoom}
      transition={pageTransition} className="bookmarks">
      <h4 className="h-text">Bookmarks</h4>
      {bookmarks.length > 0 ? (
        <div className="products">
          {bookmarks.map((product) => (
            <Book id={product.id} item={product} />
          ))}
        </div>
      ) : (
        <div className="cart__inner bookmark__inner">
          <div className="cart__items">
            <img src={emptyBookmarks} className="cart__empty" />
          </div>
          <div className="cart__checkout">
            <h4 className="h-text text-xl font-medium my-2">It's empty here.</h4>
            <p className="p-text mb-2">
              Something's catching your eye? Add your favorite items to
              Bookmarks, and check them out anytime you wish.
            </p>
            <a href="/allbooks"><motion.button
              whileHover={{scale: 1.05, transition: { duration: 0.1 }}}
              whileTap={{ scale: 0.95 , transition:{duration: 0.1}}} className="btn-bg mx-auto lg:mx-0 my-3 py-3 px-7 font-bold tracking-wide text-white focus:shadow-outline focus:outline-none"
            >Go To Books Rack</motion.button></a>
          </div>
        </div>
      )}
    </motion.div>
  );
}
export default Bookmarks;
