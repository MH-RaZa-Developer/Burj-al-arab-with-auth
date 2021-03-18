import React, { useContext } from 'react';
import firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from './firebase.config';
import { UserContext } from '../../App';
import { useHistory, useLocation } from 'react-router';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee } from '@fortawesome/free-solid-svg-icons'



firebase.initializeApp(firebaseConfig);

    const provider = new firebase.auth.GoogleAuthProvider();

const Login = () => {

    const [loggedInUser, setLoggedInUser] = useContext(UserContext);

    const history = useHistory();
    const location = useLocation();

    const { from } = location.state || { from: { pathname: "/" } };

    const handleSignIn = (e) =>{
        firebase.auth()
        .signInWithPopup(provider)
        .then((result) => {
            console.log(result.user);
            setLoggedInUser(result.user);
            history.replace(from);
            
        }).catch((error) => {
            var errorCode = error.code;
            var errorMessage = error.message;
            console.log(errorMessage);
        });
        e.preventDefault();
    }

    return (
        <div>
            <button style={{background:"blue", border:"none", fontSize: "20px", color: "white", padding: "15px", borderRadius:"15px", marginLeft:"500px", marginTop: "70px"}} onClick={handleSignIn}>Sign In With Google</button>
        </div>
    );
};

export default Login;