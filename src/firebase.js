import firebase from "firebase";

const firebaseConfig = {
    apiKey: 'AIzaSyDlXMfY4a__34EfB55SG98qnpfs6NvH3S4',
    authDomain: 'netflix-react-3974e.firebaseapp.com',
    projectId: 'netflix-react-3974e',
    storageBucket: 'netflix-react-3974e.appspot.com',
    messagingSenderId: '561452873097',
    appId: '1:561452873097:web:7f7b38efb47f7ad86b9d58',
    measurementId: 'G-GPT7ZHZWVE',
}

firebase.initializeApp(firebaseConfig);
const storage = firebase.storage();
export default storage;