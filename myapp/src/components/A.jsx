/*
 *代理方式的高阶组件
 */
import React, { Component } from "react";

export default title => WrappedComponent =>
    class A extends Component {
        constructor(props) {
            super(props);
            this.state = {
                inputvalue: ""
            };
        }
        onInputChange = e => {
            this.setState({
                inputvalue: e.target.value
            });
        };
        refc(instance) {
            //instance是WrappedComponent的实例
            console.log(instance);
            // instance.getName && console.log(instance.getName());
        }
        render() {
            const { age, ...otherProps } = this.props;
            const newProps = {
                inputvalue: this.state.inputvalue,
                onInput: this.onInputChange
            };
            return (
                <div className="a-container">
                    <div className="header">
                        <div>{title}</div>
                        <div>&times;</div>
                    </div>
                    <div className="content">
                        我是高阶组件A
                        <WrappedComponent
                            sex={"男"}
                            {...otherProps}
                            ref={this.refc.bind(this)}
                            {...newProps}
                        />
                    </div>
                </div>
            );
        }
    };
