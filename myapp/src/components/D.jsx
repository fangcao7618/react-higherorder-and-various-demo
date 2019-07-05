/**
 * @description 继承方式的高阶函数组件
 * @author wfc
 * @date 2019-07-05
 * @param {*} WrappedComponent
 * @returns
 */
import React from "react";

const modifyPropsHOC = WrappedComponent =>
    class NewComponent extends WrappedComponent {
        static displayName = `NewComponent(${getDispalyName(
            WrappedComponent
        )})`;
        componentWillMount() {
            console.log("我是修改后的生命周期");
        }
        render() {
            const element = super.render();
            const newStyle = {
                color: element.type === "div" ? "red" : "green"
            };
            const newProps = { ...this.props, style: newStyle };
            return React.cloneElement(
                element,
                newProps,
                element.props.children
            );
        }
    };

//高阶组件显示名
function getDispalyName(WrappedComponent) {
    console.log(WrappedComponent);
    return WrappedComponent.displayName || WrappedComponent.name || "Component";
}
export default modifyPropsHOC;
