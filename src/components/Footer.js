import React from 'react'
import style from "styled-components"

function Footer() {
  return (
    <Content>
            <Container>
                <FooHead>
                    <h1>LIFT-UNIVERSAL</h1>
                    <h3>ЛИФТЫ И ЭСКАЛАТОРЫ</h3>
                    <Number>
                        <NumLoc>ТАШКЕНТ</NumLoc>
                        <p>+99871 205 52 25</p>
                        <p>+99871 254 86 06</p>
                    </Number>
                    <Number>
                        <NumLoc>САМАРКАНД</NumLoc>
                        <p>+99890 337 28 94</p>
                    </Number>
                </FooHead>
                <FooLoc>
                    <p>Адрес: Узбекистан, г. Ташкент, Яккасарайский район, ул.Кушбеги, 10Б; ориентир БЦ «Qushbegi»</p>
                    <Number>
                        <NumLoc>ФЕРГАНА</NumLoc>
                        <p>+99890 581 46 66</p>
                        <p>+99895 401 40 46</p>
                    </Number>
                </FooLoc>
                <FooEma>
                    <p>E-mail: info@lift-universal.uz</p>
                    <p>Факс: +99871 254 86 06</p>
                    <Number>
                        <NumLoc>БУХАРА</NumLoc>
                        <p>+99865 770 13 20</p>
                        <p>+99893 475 18 81</p>
                    </Number>
                </FooEma>
            </Container>

    </Content>
  )
}

const Content = style.div`
    width: 100vw;
    background-color: rgb(45, 68,171);
    border-top: 1px solid rgba(255, 255, 255, 0.1);
    padding: 50px 0;

`

const Container = style.div`
    display: flex;
    justify-content: space-between;
    width: 80vw;
    margin: 0 auto;

`


const FooHead = style.div`
    display: flex;
    flex-direction: column;
    width: 20%;
    
    h1 {
        font-size: 25px;
        font-weight: 100;
        color: white;
    }
    h3 {
        color: white;
        font-size: 15px;
        font-weight: 100;
        margin: 10px 0;
    }

`

const Number = style.div`
    display: flex;
    flex-direction: column;
    margin: 10px 0;
    color: #fff;


    p { 
        font-weight: 600;
        font-size: 18px;
        margin: 2px 0;
    }
`

const NumLoc = style.div`
    font-weight: 300;
    font-size: 12px;

`

const FooLoc = style.div`
    width: 40%;

    p:first-child {
        color: #fff;
        margin: 30px 0;
    }

`

const FooEma = style.div`
    color: #fff;
    margin-top: 25px;

    p:nth-child(2) {
        margin: 10px 0;
    }

`

export default Footer