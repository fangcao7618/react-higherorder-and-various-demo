import React from "react";
// import Tabbar from "./components/tabbar";
import RouterMap from "./router";
import "./static/iconfont.css";
import "./App.css";

function App() {
    console.log("here we go");
    new Promise(resolve => {
        setTimeout(() => {
            resolve("hello");
        }, 2000);
    })
        .then(value => {
            console.log(value);
            return new Promise(resolve => {
                setTimeout(() => {
                    resolve("nihao");
                }, 2000);
            });
        })
        .then(value => {
            console.log(`${value} world`);
        });
    return (
        <div className="App">
            {/* <Tabbar /> */}
            <RouterMap />
        </div>
    );
}

export default App;
