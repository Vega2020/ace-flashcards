import React from "react";
import app from "../../firebase";
import CardFrame from "../cardFrame";

const Home = () => {
    return (
        <>
         <h1>Home</h1>
         <button onClick={() => app.auth().signOut()}>Sign out</button>
        <div>
            <CardFrame />
        </div>
        </>
    );
};

export default Home;