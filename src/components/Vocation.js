import React from 'react'
import style from "styled-components"

function Vocation() {
  return (
    <>
        <Container>
            <Heading>
                <h1>ВАКАНСИИ</h1>
            </Heading>
            <Text>
                <h1>Наши ценности:</h1>
                <p>Мы стремимся поддерживать культуру взаимопомощи, главные принципы которой уважение и доверие в коллективе, вдохновение от руководителей на дальнейшие свершения.Мы верим в то, что улучшим наши показатели благодаря мотивации, обучению и развитию наших сотрудников. Компания поддерживает карьерный рост и предоставляет широкие возможности для развития.</p>
                <p>Работать в Lift Universal – значит быть в сердце компании, быть тем, кто каждый день делает жизнь людей проще. Мы гордимся, что можем поделиться опытом и предложить вам возможности, которые помогут вам достичь карьерных и личностных целей.</p>

                <h1>Кто нам нужен?</h1>

                <AboutTextCont>
                    <AboutText>
                        <h3>ОПЫТНЫЕ СПЕЦИАЛИСТЫ И РУКОВОДИТЕЛИ</h3>
                        <p>Мы предлагаем специалистам из разных областей возможность работать в сфере высокотехнологичного оборудования. В дополнении к этому, мы работаем с комплексными сервисами и инструментами, обеспечивающими нашу производительность 24/7. Больше половины наших продаж являются результатом предложенного сервиса.</p>
                    </AboutText>
                    <AboutText>
                        <h3>ПРОФЕССИОНАЛЫ В СФЕРЕ БИЗНЕСА</h3>
                        <p>Для перспективных лидеров мы предлагаем возможности по поддержке личностного роста и профессионального развития. Наш подход к менеджменту подразумевает регулярные обсуждения показателей продуктивности.</p>
                    </AboutText>
                    <AboutText>
                        <h3>ТЕХНИЧЕСКИЕ СПЕЦИАЛИСТЫ</h3>
                        <p>Монтажники и наладчики – это эксперты, которые заботятся о безопасности и качественной установке такого оборудования, как лифты и эскалаторы.</p>
                        <p>Электромеханики по лифтам и машинисты эскалаторов осуществляют сервисное обслуживание оборудования и ежедневно встречаются с клиентами, показывая истинно сервисный подход.</p>
                    </AboutText>
                </AboutTextCont>

                <button>Отправить резюме</button>

                <h4>Отправьте свое резюме на интересующую вакансию по электронному адресу info@lift-universal.uz , указав в теме письма название вакансии.</h4>
                <h2>ВАКАНСИЯ</h2>
                <li>Электромеханик по лифтам</li>
                <li>Менеджер по модернизации и замене оборудования</li>
                <li>Монтажник электрических лифтов</li>
            </Text>
            <Resume>
                <h1>Отправить резюме</h1>
                <ResCont>
                <form action="https://formsubmit.co/sheralitukhtayev@gmail.com">
                    <Inputs>
                        <h6><span>*</span> Вакансия</h6>
                        <input placeholder="Не вибрано"/>
                    </Inputs>
                    <Inputs>
                        <h6><span>*</span> Имя</h6>
                        <input type="text" />
                    </Inputs>
                    <Inputs>
                        <h6><span>*</span> Телефон</h6>
                        <input type="number" />
                    </Inputs>
                    <Inputs>
                        <h6><span>*</span> E-mail</h6>
                        <input type="email" />
                    </Inputs>
                    <h5>Загрузка файла</h5>
                    <div className="Btn">
                        <button>Выбрать файл(ы)</button>
                        <p>не болуу:1</p>
                    </div>
                    <Inputs>
                        <h6>Комментарий</h6>
                        <textarea className="Comment" name="message" id=""></textarea>
                    </Inputs>
                <form />
                </ResCont>
            </Resume>
        </Container>
    </>
  )
}

const Container = style.div`
    width: 80vw;
    margin: 0 auto;
    padding: 100px 0;

`

const Heading = style.div`
    h1 {
        font-size: 40px;
        color: rgb(45, 68, 171);
        margin: 40px 0;
    }

`

const Text = style.div`
    width: 65vw;
    margin: 0 auto;
    text-align: center;

    h1{
        font-size: 40px;
        margin: 10px 0;
    }
     
    p{
        font-size: 20px;
        line-height: 30px;
        font-weight: 100;
        color: rgba(0, 0, 0, 0.6);
        margin: 25px 0;
    }

    button {
        padding: 20px 20px;
        background: rgb(45, 68, 171);
        color:  #fff;
        margin: 30px 0;
        cursor: pointer;
    }

    button:hover {
        background: rgba(45, 68, 171, 0.9);
    }

    h4  {
        margin-top: 100px;
        font-size: 20px;
        color: rgba(0, 0, 0, 0.7);
    }
    h2 {
        font-size: 30px; 
        font-weight: 700;
        color: rgb(45, 68, 171);
        margin: 20px 0;
    }

    li {
        list-style-type: none;
        text-align: center;
        margin: 10px 0;
        font-size: 20px;
        font-weight: 100;
        color: rgba(0, 0, 0, 0.8);
    }

`

const AboutTextCont = style.div`
    display: flex;
    flex-direction: column;


`

const AboutText = style.div`
    display: flex;
    flex-direction: column;
    text-align: left;
    margin: 20px 0;
    border-bottom: 2px solid rgba(0, 0, 0, 0.1);

    h3 {
        margin: 10px 0;
        font-size: 18px;
        font-weight: 600;
        color: rgba(0, 0, 0, 0.8);
    }
     
    p {
        margin: 0;
        margin-bottom: 10px; 
        font-size: 12px;
        line-height: 17px;
    }

`

const Resume = style.div`
    width: 80vw;
    background: rgb(45, 68, 171); 
    text-align: center;
    padding: 70px 0;
    color: white;

    h1 {
        font-size: 40px;
    }

`

const ResCont = style.div`
    width: 50%;
    background: white;
    padding: 50px 0;
    margin: 50px auto;
    color: #000;

    h5 {
        text-align: left;
        margin: 30px 0 5px 0;
        margin-left: 60px;
    }

    .Btn {
        display: flex;
        align-items: center;
        margin-left: 55px;
        margin-bottom: 40px;
         
        button {
            font-size: 13px;
        }

        p {
            font-size: 13px;
        }
    }

    @media(max-width: 560px) {
        h5 {
            display: none;
        }
        .Btn {
            display: none;
        }
    }

    button {
        cursor: pointer;
        padding: 5px 10px;
        font-size: 15px;
        border: 1px solid #000;
        border-radius: 2px;
        text-align: left;
    }

`

const Inputs = style.div`
    margin: 20px 0;

    h6 {
        color: black;
        text-align: left;
        margin-left: 50px;
        margin-bottom: 5px;
        font-size: 12px;
        font-weight: 600;

        span {
            color: red;
        }
    }
    input {
        border: 1px solid #000;
        width: 80%;
        padding: 15px 10px;
    }

    input:hover {
        background-color: rgba(112, 221, 255, 0.1);
    }

    .Comment {
        border: 1px solid #000;
        padding: 50px 225px;

        @media(max-width: 560px) {
            padding: 40px 0;
        }
    }

    

`

export default Vocation
