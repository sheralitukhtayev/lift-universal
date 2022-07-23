import React from 'react'
import style from 'styled-components'
import { Link } from "react-router-dom"

function Nav() {
  return (
    <>
        <NavMenu>
            <div>
                <div>
                    <Link exact to="/">
                        <img src="https://lift-universal.uz/thumb/2/f6GqUesX2zL6ARsXyPaIfQ/640r480/d/layer_3.png" alt="" />
                    </Link>
                </div>
                <div className="navitem">
                    <ul>
                        <Link className="link" exact to="/about">
                            О КОМПАНИИ
                        </Link>
                        <Link className="link" exact to="/vocation">
                            ВАКАНСИИ
                        </Link>
                        <Link className="link" exact to="/contact">
                            СВЯЗАТЬ С НАМИ
                        </Link>
                    </ul>
                </div>
            </div>
        </NavMenu>
        <NavAbout>
            <div className="text">

                <h1>
                    ЛИФТЫ И ЭСКАЛАТОРЫ KONE
                </h1>
                <button>
                    Заполнить Бриф
                </button>
            </div>
            <div className="phone">
                <div className="num">
                        <p>+99871 205 52 25</p>
                        <p>+99871 254 86 06</p>
                </div>
                <div className="btn">
                    <button>
                        Заказать звонок
                    </button>
                </div>
            </div>
        </NavAbout>
    </>
  )
}

const NavMenu = style.div`
    width: 100%;    
    display: relative;
    background: #fff;

    div {
        max-width: 70vw;
        width: 100%;    
        display: flex;
        margin: 0 auto;
        align-items: center;
        justify-content: space-between;


        div:first-child img{
            width: 230px;

            cursor: pointer;
        }
        
        div:nth-child(2) {
            width: 30vw;
            
            ul{
                width: 30vw;
                display: flex;
                flex-direction: row;
                justify-content: space-between;
        
                .link {
                    color: black;
                    text-decoration: none;
                    font-size: 13px;
                    letter-spacing: 1.3px;
                    cursor: pointer;
                }
            }
        }
    
    }


`

const NavAbout = style.div`
    background: url("https://lift-universal.uz/thumb/2/WsLZjBZ8JBx7K9kudA9k-A/2200r1000/d/5l2a2738_2.jpg") center center / cover no-repeat fixed;
    content: "";
    position: relative;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: -1;
    max-width: 100%;
    height: 80vh;
    width: 100%;
    display: flex;
    flex-direction: column;

    .text {
        width: 70vw;
        margin: 0 auto;
        margin-top: 100px;

        h1 {
            font-size: 50px;
            width: 50vw;
            color: #fff;
            font-weight: 800;
            
        }

        button {
            padding: 20px 55px;
            background-color: rgb(89, 188, 220);
            color: #fff;
            font-size: 18px;
            letter-spacing: 1.5px;
            word-spacing: 2px;
            margin: 30px 0; 
        }


    }

    .phone {
        display: flex;
        flex-direction: row;
        text-align: center;
        align-items:  center;
        width: 70vw;
        margin: 50px auto;

        .num {
            background: rgba(0, 0, 0, 0.4);
            color: #fff;
            border: 1px solid rgb(89, 188, 220);
            padding: 5px 40px;
            border-right: none;

            p {
                font-size: 20px;
                margin: 5px 0;
            }
        }

        .btn {
            border: 1px solid rgb(89, 188, 220);
            button {
                padding: 21px 40px;
                font-size: 25px;
                color: #fff;
                background: rgb(45, 68, 171);
                font-weight: 100;
            }
        }
    }


`

export default Nav