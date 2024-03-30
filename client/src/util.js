// import jwt from 'jsonwebtoken'
import { jwtDecode } from "jwt-decode";

const userSession = () => {
  try {
    let data = jwtDecode(window.localStorage.getItem('token') || '')
    console.log(data)
  } catch (error) {
    return;
  }
  // try {
  //   if (typeof window !== 'undefined') {
  //     const data = JSON.parse(window.localStorage.getItem('token'));
  //     if (data) {
  //       const verifyToken = jwt.verify(data, 'secret_key');
  //       return verifyToken;
  //     }
  //   }
  // } catch (error) {
  //   return;
  // }
}

const shuffleArray = (array) => {
  let shuffled = [...array];
  for (let i = shuffled.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
};

const Cipher = (text) => {
  let cText = '';
  for (let i = 0; i < text.length; i++) {
    cText += String.fromCharCode(text.charCodeAt(i) + 6)
  }
  return cText;
}

const DeCipher = (text) => {
  let dcText = '';
  for (let i = 0; i < text.length; i++) {
    dcText += String.fromCharCode(text.charCodeAt(i) - 6)
  }
  return dcText;
}

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


const uploadImage = async (image) => {
  let data = new FormData();
  data.append("file", image)
  data.append("upload_preset", `${process.env.preset}`)
  data.append("cloud_name", `${process.env.cloud_name}`)
  data.append("folder", 'sharebook')
  const resp = await fetch(`https://api.cloudinary.com/v1_1/${process.env.cloud_name}/image/upload`, {
    method: "post",
    body: data
  })
  let res = await resp.json();
  return res.secure_url
}

export {
  errorAnim,
  container,
  item,
  pageTransition,
  pageZoom,
  pageSlide,
  Cipher,
  DeCipher,
  shuffleArray,
  userSession,
  uploadImage
};
