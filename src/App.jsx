import { useState } from 'react'
import { Hmenu } from "./components";
import { Amenu } from "./components";
import './App.css'
import './script'
import menu from './assets/menu.png';
import logo from './assets/Logo_Kyoto_Uni.png';
import image1 from "./assets/topimage1.gif";
import image2 from "./assets/topimage2.gif";
import image3 from "./assets/topimage3.gif";
import bookicon from "./assets/book_icon.svg";
import pamphleticon from "./assets/pamphlet_icon.svg";
import pamphlet from "./assets/KU_pamphlet.jpg";

const headers = ["大学の基本理念", "学部アドミッションポリシー", "学費", "交通アクセス", "お問い合わせ", "Web Pamphletを見る", "資料請求", "KyotoU Channel"];
const faculties = ["総合人間", "文", "教育", "法", "経済", "理", "医", "薬", "工", "農"];
const colors = ["174198", "0075c2", "0091db", "27bbe9", "6cc6d2", "6ec2aa", "6dbd72", "b8d200", "f0e900", "f5a200"]
function App() {
  return (
    <div>
      <div id="header">
        <div id="h-hamburger"><img id="h-hamburgerimage" src={menu} /></div>
        <div id="h-closer">×</div>
        <a><img src={logo} className="hover"  id="h-logo" /></a>
        <div className="h-menubox">
            <div className="h-menucontainer">
                <div className="h-menu" id="h-menu">
                    {headers.map((header, index) => (
                      <Hmenu key = {index} number={index + 1} value ={header}/>
                    ))}
                </div>
            </div>
        </div>
      </div>
      <div id="main">
        <div className="p-container">{/*写真スライドショー*/}
          <div id="picturebox">
              <div><img id="picL" src={image1}/></div>
              <div><img id="picR" src={image2}/></div>
              <div><img id="picC" src={image3}/></div>
          </div>
          <div className="p-fadeleft p-fade"></div>
          <div className="p-faderight p-fade"></div>
        </div>
        <div className="a-container">{/*アドミッションポリシー*/}
            <div className="titlebox">
                <img src={bookicon} className="icon"/>
                <h1 className="title">学部アドミッションポリシー</h1>
            </div>
            <div className="a-menubox">
                {faculties.map((faculty, index)=> (
                  <Amenu key = {index} number={index + 1} value={faculty} color={colors[index]} />
                ))}
            </div>
        </div>
        <div className="w-container">{/*Webパンフレット*/}
            <div className="titlebox">
                <img src= {pamphleticon} className="icon"/>
                <h1 className="title">Web Pamphlet</h1>
            </div>
            <div className="w-pamphlet">
                <a href="https://daigakujc.jp/wp/agreement_tmpl.html" id="underline">（ご利用方法について）</a>
                <a href="https://web-pamphlet.jp/kyoto-u/p/" id="pamphlet-a"><img src= {pamphlet} className="hover"  id="pamphlet-img"/></a>
                <span id="pamphlet-title">大学案内</span>
            </div>
            <div className="w-links">
                <a href="https://www.kyoto-u.ac.jp/ja"><div className="w-button hover" id="w-HP">京都大学公式HP<span className="w-arrow"></span></div></a>
                <a href="https://www.kuac.kyoto-u.ac.jp/navi_grad/"><div className="w-button hover" id="w-navi">京都大学受験生ナビゲーション<span className="w-arrow"></span></div></a>
            </div>
        </div>
      </div>
      <a href="#h-logo"><div className="n-container">{/*ナビゲーター*/}
        ∧
      </div></a>
      <div id="footer">
        <div className="f-container">
          <div className="left"><a>Copyright (c) DJC All Rights Reserved.</a></div>
          <div className="right"><a href="https://daigakujc.jp/">がんばれ国公立大学受験生！！</a></div>
        </div>
      </div>
    </div>
  );
}

export default App
