import { initializeApp } from "@firebase/app";

const firebaseConfig = {
    apiKey: "AIzaSyBNEV_NmsIpXsxpObi4-eEq935vjRSmlEU",
    authDomain: "errorreporting-3b318.firebaseapp.com",
    databaseURL: "https://errorreporting-3b318-default-rtdb.firebaseio.com",
    projectId: "errorreporting-3b318",
    storageBucket: "errorreporting-3b318.appspot.com",
    messagingSenderId: "171015997044",
    appId: "1:171015997044:web:b0071c01128d906cecb321",
    measurementId: "G-DFTNDNLHCF"
};

export const app = initializeApp(firebaseConfig);

export const initFirebase = () => {
    return app;
}