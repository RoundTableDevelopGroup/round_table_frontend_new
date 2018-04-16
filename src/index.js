import React from 'react';
import ReactDom from 'react-dom';
import { MainRouter } from "./router";

// 渲染全局路由
ReactDom.render(
    <MainRouter/>,
    document.getElementById('root')
);