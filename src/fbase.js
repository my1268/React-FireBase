import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: process.env.React_APP_API_KEY,
  authDomain: process.env.React_APP_AUTH_DOMAIN,
  projectId: process.env.React_APP_PROJECT_ID,
  storageBucket: process.env.React_APP_STORAGE_BUCKET,
  messagingSenderId: process.env.React_APP_MESSAGING_SENDER_ID,
  appId: process.env.React_APP_APP_ID,
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth();

export default app;
