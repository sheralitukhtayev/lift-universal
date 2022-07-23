import React from 'react'
import style from "styled-components"

function About() {
  return (
    <>
        <Container>
            <Heading>
                <h1>О КОМПАНИИ</h1>
            </Heading>
            <Text>
                <h4>LIFT UNIVERSAL</h4>
                <TextPar>
                    <p>Наша компания является официальным и единственным в Узбекистане партнером компании KONE. Мы предлагаем полный комплекс услуг — от консультирования и установки оборудования до его ремонта и технического обслуживания. А наши специалисты имеют более чем 15-летний опыт монтажа лифтов и эскалаторов. </p>
                    <img src="https://lift-universal.uz/d/5l2a3456.jpg" alt="" />
                    <p>Компания KONE основана в 1910 г. является одним из мировых лидеров в производстве лифтов и эскалаторов, серьезно относится к пониманию нужд заказчиков на протяжении более ста лет.</p>
                    <img src="https://lift-universal.uz/d/097a3655.jpg" alt="" />
                    <p>Мы предоставляем инновационные и эко-эффективные решения для лифтов и эскалаторов.</p>
                    <img src="https://lift-universal.uz/d/5l2a3439.jpg" alt="" />
                    <p>Наша задача - предлагать наилучший опыт в управлении пассажиропотоком People Flow®, разрабатывая и поставляя решения, которые позволяют людям двигаться плавно, безопасно, комфортно и без ожиданий в зданиях во всевозрастающей урбанизированной окружающей среде.</p>
                    <img src="https://lift-universal.uz/d/lifty_naruzhka.jpg" alt="" />
                </TextPar>
            </Text>
        </Container>
    </>
  )
}

const Container = style.div`
    width: 80vw;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    padding: 50px 0;

`

const Heading = style.div`
    
    h1 {
        font-size: 40px;
        color: rgb(45, 68, 171);
        margin: 40px 0;
    }

`

const Text = style.div`
    display: flex;
    flex-direction: column;
    text-align: center;

    h4 {
        font-size: 18px;
        margin: 20px 0;
    }

`

const TextPar = style.div`
    p {
        text-align: left;
        color: rgb(0, 0, 0, 0.7);
    }
    img {
        width: 100%;
        margin: 20px 0;
    }

`

export default About