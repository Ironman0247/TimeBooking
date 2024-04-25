import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAlJw6SHQ9HZ2MXziERdAQMRSQ7XGp7pTs",
  authDomain: "timebookingweb.firebaseapp.com",
  projectId: "timebookingweb",
  storageBucket: "timebookingweb.appspot.com",
  messagingSenderId: "187139566714",
  appId: "1:187139566714:web:4e4b34e852d6e08df49fc3",
  measurementId: "G-CTKQHDNRHB"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

const fireStore = getFirestore(app);