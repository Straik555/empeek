import React from 'react';
import {Header} from "../Header";

export const Layout = (props) => {
    return (
        <div className={"container"}>
            <Header />
            <div className="main__inner">
                { props.children }
            </div>
        </div>
    )
}