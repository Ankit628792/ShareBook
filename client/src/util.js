import jwt from 'jsonwebtoken'

const userSession = () => {
    try {
        if(typeof window !== 'undefined'){
            const data = JSON.parse(window.localStorage.getItem('neuron-token'));
            if(data){
                const verifyToken = jwt.verify(data, 'zyxwvutsrqponmlkjihgfedcbaneuronclub');
                return verifyToken;
            }
        }
    } catch (error) {
        return ;
    }
}

const shuffleArray = (array) => {
  let shuffled = [...array];
  for (let i = shuffled.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
};

const pageTransition = {
  type: "tween",
  duration: 0.2,
};

const pageSlide = {
  initial: {
    opacity: 0,
    y: "-1rem",
  },
  in: {
    opacity: 1,
    y: 0,
  },
  out: {
    opacity: 0,
    y: "1rem",
  },
};

const pageZoom = {
  initial: {
    opacity: 0,
    scale: 0.95,
  },
  in: {
    opacity: 1,
    scale: 1,
  },
  out: {
    opacity: 0,
    scale: 0.95,
  },
};

const container = {
  hidden: { opacity: 0, scale: 1 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      delayChildren: 0.3,
      staggerChildren: 0.2
    }
  }
};

const item = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1
  }
};

const errorAnim = {
  initial: {
    opacity: 0,
    scale: 0.8,
  },
  in: {
    opacity: 1,
    scale: 1,
  },
  out: {
    opacity: 0,
    scale: 0.8,
  },
};

export {
  errorAnim,
  container,
  item,
  pageTransition,
  pageZoom,
  pageSlide,
  shuffleArray,
  userSession
};
