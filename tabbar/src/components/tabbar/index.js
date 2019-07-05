import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./index.css";

const tarbarArr = [
    {
        img: "icon-home",
        text: "首页",
        link: "/home"
    },
    {
        img: "icon-fenlei_",
        text: "分类",
        link: "/category"
    },
    {
        img: "icon-gouwuche",
        text: "购物车",
        link: "/car"
    },
    {
        img: "icon-yonghu",
        text: "用户",
        link: "/user"
    }
];
const Tabbar = WrappedComponent =>
    class Tabbar extends Component {
        constructor(props) {
            super(props);
            this.state = {
                index: 0
            };
        }
        itemChange = i => {
            this.setState({
                index: i
            });
        };
        render() {
            const url = window.location.href;
            return (
                <React.Fragment>
                    <div className="tabbar-children">
                        <WrappedComponent />
                    </div>
                    <div className="tabbar">
                        <div className="tabbar-content">
                            {tarbarArr.map((v, i) => (
                                <Link
                                    to={v.link}
                                    key={i}
                                    className={`tarbar-item${
                                        url.indexOf(v.link) > -1
                                            ? " active"
                                            : ""
                                        // this.state.index === i ? " active" : ""
                                    }`}
                                    onClick={() => {
                                        this.itemChange(i);
                                    }}
                                >
                                    <div className={`iconfont ${v.img}`} />
                                    <div className="">{v.text}</div>
                                </Link>
                            ))}
                        </div>
                    </div>
                </React.Fragment>
            );
        }
    };
export default Tabbar;
