import React from 'react';
import ReactDom from 'react-dom';
import { MainRouter } from "./router";

// 引入 css
import './style';

// axios 全局带 cookie 的设置
import axios from 'axios';
axios.defaults.withCredentials = true;

// 渲染路由组件
ReactDom.render(
    <MainRouter/>,
    document.getElementById('root')
);