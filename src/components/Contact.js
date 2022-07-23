import React from 'react'
import style from "styled-components"

function Contact() {
  return (
    <>
            <Container>
                <h1>СВЯЗАТЬСЯ С НАМИ</h1>
                <FooHead>
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
                    <Number>
                        <NumLoc>ФЕРГАНА</NumLoc>
                        <p>+99890 581 46 66</p>
                        <p>+99895 401 40 46</p>
                    </Number>
                </FooLoc>
                <FooEma>
                    <Number>
                        <NumLoc>БУХАРА</NumLoc>
                        <p>+99865 770 13 20</p>
                        <p>+99893 475 18 81</p>
                    </Number>
                    <p><span>Адрес:</span> Узбекистан, г. Ташкент, Яккасарайский район, ул.Кушбеги, 10Б; ориентир БЦ «Qushbegi»</p>
                    <p><span>E-mail:</span> info@lift-universal.uz</p>
                    <p><span>Факс:</span> +99871 254 86 06</p>
                </FooEma>
            </Container>
    </>
  )
}

const Container = style.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    width: 80vw;
    margin: 0 auto;
    color: #000;
    padding: 70px 0;

    h1 {
        font-size: 40px;
        color: rgb(45, 68, 171);
        margin-bottom: 50px;
    }

`


const FooHead = style.div`
    display: flex;
    flex-direction: column;
    width: 20%;

`

const Number = style.div`
    display: flex;
    flex-direction: column;
    margin: 10px 0;
    color: #000;


    p { 
        font-weight: 100;
        font-size: 14px;
        margin: 10px 0;
    }
`

const NumLoc = style.div`
    font-weight: 900;
    font-size: 15px;

`

const FooLoc = style.div`
    width: 40%;

    p:first-child {
        color: #000;
        margin: 30px 0;
    }

`

const FooEma = style.div`
    color: #000;
    margin-top: 25px;

    p {
        margin: 10px 0;
        span {
            display: block;
            margin: 15px 0;
            font-weight: 600;
        }
    }

`


export default Contact