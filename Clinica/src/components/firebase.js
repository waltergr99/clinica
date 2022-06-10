
import { initializeApp} from "firebase/app"
import { getFirestore} from "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyDk1i_7ULyln2LixAkfnwrF1ius6of1wio",
  authDomain: "ageless-talent-352816.firebaseapp.com",
  projectId: "ageless-talent-352816",
  storageBucket: "ageless-talent-352816.appspot.com",
  messagingSenderId: "733419776530",
  appId: "1:733419776530:web:eb679bd276d0b4d42206cb",
  measurementId: "G-W2J2Y3WZ1X"
  }

const app = initializeApp(firebaseConfig)

export const db = getFirestore(app)