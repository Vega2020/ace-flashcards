import React from "react";
import app from "../../firebase";
import Cardmaker from "../Cardmaker";

const Home = () => {
    return (
        <>
         <h1>Home</h1>
         <button onClick={() => app.auth().signOut()}>Sign out</button>
        {/* <Cardmaker></Cardmaker> */}
        </>
    );
};

export default Home;