import React, { Component } from "react";
import A from "./A";
// import D from "./D";

// @D
class B extends Component {
    constructor(props) {
        super(props);
        this.state = {
            value: ""
        };
    }
    changeInput(e, parame) {
        console.log(e.target.value, parame);
        this.setState({
            value: e.target.value
        });
    }
    getName() {
        return "我是B组件";
    }
    render() {
        return (
            <div>
                我是组件B
                <br />
                <input type="text" {...this.props} />
                <br />
                <input
                    type="text"
                    value={this.state.value}
                    onChange={e => {
                        this.changeInput(e, "wfc");
                    }}
                />
                <br />
                我的名字叫:{this.props.name}
                <br />
                我的年龄是:{this.props.age}
                <br />
                我的性别是：{this.props.sex}
                <img src={require("../images/B.jpg")} alt="" />
            </div>
        );
    }
}
export default A("提示")(B);
// export default B;
