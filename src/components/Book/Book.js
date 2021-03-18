import React, { useContext } from 'react';
import { Link, useParams } from 'react-router-dom';
import { UserContext } from '../../App';

const Book = () => {

    const [loggedInUser, setLoggedInUser] = useContext(UserContext);

    const {bedType} = useParams();
    return (
        <div style={{textAlign: 'center'}}>
            <img style={{borderRadius:"50%"}} src={loggedInUser.photoURL} alt="Image"></img>
            <h3>{loggedInUser.displayName}</h3>
            {
                loggedInUser ? <button style={{background:"blue", border:"none", fontSize: "20px", color: "white", padding: "15px", borderRadius:"15px"}} onClick={() => setLoggedInUser({})}>Sign Out</button> : ""
            }
            <h1>Let's book a {bedType} Room.</h1>
            <p>Want a <Link to="/home">different room?</Link> </p>
        </div>
    );
};

export default Book;