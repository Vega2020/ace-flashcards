import React from "react";
import app from "../../firebase";
<<<<<<< HEAD
import Cardmaker from "../Cardmaker";
=======
import CardFrame from "../cardFrame";
>>>>>>> 1ece44872e1e50702263b5a41cba44c0dd362fe9

const Home = () => {
    return (
        <>
         <h1>Home</h1>
         <button onClick={() => app.auth().signOut()}>Sign out</button>
<<<<<<< HEAD
        {/* <Cardmaker></Cardmaker> */}
=======
        <div>
            <CardFrame />
        </div>
>>>>>>> 1ece44872e1e50702263b5a41cba44c0dd362fe9
        </>
    );
};

export default Home;