import React, { Component } from "react";
import A from "./A";

@A("警告")
class C extends Component {
    getName() {
        return "我是C组件";
    }
    render() {
        return (
            <div>
                <input type="text" {...this.props} />
                <img src={require("../images/C.jpg")} alt="" />
            </div>
        );
    }
}

export default C;
