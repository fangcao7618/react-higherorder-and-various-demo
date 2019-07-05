import React from "react";
import B from "./components/B";
import C from "./components/C";
import E from "./components/E";
import F from "./components/F";
import "./App.css";

// const BComponent = A(B);
function App() {
    return (
        <div className="App">
            <B name={"张三"} age={18} />
            <C />
            <E />
            <F />
        </div>
    );
}

export default App;
