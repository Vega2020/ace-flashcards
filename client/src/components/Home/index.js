import React from "react";
import app from "../../firebase";
import CardRender from "../cardRender";

const Home = () => {
    return (
        <>
         <h1>Home</h1>
         <button onClick={() => app.auth().signOut()}>Sign out</button>
        <div>
            <CardRender />
        </div>
        </>
    );
};

export default Home;