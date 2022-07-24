import React from 'react'
import style from "styled-components"
import { Link } from "react-router-dom";
import ReactPlayer from 'react-player'

function Header() {
    let settings = {
        dots: false,
        infinite: true,
        speed: 1000,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true
    }
  return (
    <>
        <Our>
            <div className="OurText">
                <div className="aboveHeading">
                    <Line />
                    <h4>О НАС</h4>
                </div>
                <div className="Heading">
                    <h1>LIFT UNIVERSAL</h1>
                </div>
                <div className="text">
                    <p>
                        Наша компания является официальным и единственным в Узбекистане партнером компании KONE. Мы предлагаем полный комплекс услуг — от консультирования и установки оборудования до его ремонта и технического обслуживания. А наши специалисты имеют более чем 15-летний опыт монтажа лифтов и эскалаторов.
                    </p>
                </div>
                <div className="ourBtn">
                    <button>
                        УЗНАТЬ БОЛЬШЕ
                    </button>
                </div>
            </div>
            <div className="OurImg">
                <img src="https://lift-universal.uz/thumb/2/LQ5hrRPVmo9EIoF8FkCmVQ/1000r1500/d/5l2a3466.jpg" alt="" />
            </div>
            <div className="OurText">

            </div>
        </Our>
        <Advantage>
                <div className="AdvText">
                    <div className="aboveHeading">
                        <Line />
                        <h4>ПРЕИМУЩЕСТВА</h4>
                    </div>
                    <div className="Heading">
                        <h1>ПОЧЕМУ ВЫБИРАЮТ НАС?</h1>
                    </div>
                </div>
                <div className="AdvGroup">
                    <div className="Group">
                        <img src="https://lift-universal.uz/thumb/2/hcTd-eXg4pnuoqltIb_ztg/640r480/d/11.png" alt="" />
                        <AdvLine />
                        <h4>
                            СМОНТИРОВАНО БОЛЕЕ 1000 ЕДИНИЦ ОБОРУДОВАНИЯ
                        </h4>
                    </div>
                    <div className="Group">
                        <img src="https://lift-universal.uz/thumb/2/7wEWUwY2KFQlAsuK0akN2Q/640r480/d/22.png" alt="" />
                        <AdvLine />
                        <h4>
                            БОЛЕЕ 20 ЛЕТ НА РЫНКЕ
                        </h4>
                    </div>
                    <div className="Group">
                        <img src="https://lift-universal.uz/thumb/2/uKWuceEUb-rpEjKogovOZw/640r480/d/44.png" alt="" />
                        <AdvLine />
                        <h4>
                            СЕРТИФИЦИРОВАННОЕ ОБОРУДОВАНИЕ  
                        </h4>
                        <p>
                            Наши лифты уже имеют все необходимые сертификаты, поэтому, помогут Вам сэкономить время и бюджет 
                        </p>
                    </div>
                    <div className="Group">
                        <img src="	https://lift-universal.uz/thumb/2/qwBumdUInOsEaSsM26zgzw/640r480/d/33.png" alt="" />
                        <AdvLine />
                        <h4>
                            4 ФИЛИАЛА ПО СТРАНЕ 
                        </h4>
                        <p>
                            Главный офис расположен в Ташкенте, а филиалы компании уже есть в Самарканде, Фергане и Бухаре
                        </p>
                    </div>
                </div>
        </Advantage>
        <Projects>
            <PrText>
                <Line className="line" />
                <h1>РЕШЕНИЯ ДЛЯ НОВЫХ ЗДАНИЙ</h1>
            </PrText>
            <Project>
                <ProjectOne>
                    <Prj>
                        <img src="	https://lift-universal.uz/thumb/2/fLR3IGwJ6_HqZESbUjcdtg/640r480/d/1.png" alt="" />
                        <div className="PrjText">
                            <AdvLine />
                            <h4>ПАССАЖИРСКИЕ</h4>
                        </div>
                        <button>
                            ПОДРОБНЕЕ
                        </button>
                    </Prj>
                    <Prj>
                        <img src="https://lift-universal.uz/thumb/2/AKHQQ0dMQF26ldyMnwiiOQ/640r480/d/4.png" alt="" />
                        <div className="PrjText">
                            <AdvLine />
                            <h4>ПАНОРАМНЫЕ</h4>
                        </div>
                        <button>
                            ПОДРОБНЕЕ
                        </button>
                    </Prj>
                    <Prj>
                        <img src="https://lift-universal.uz/thumb/2/rkgVg__XJcklgqVcMh611g/640r480/d/3.png" alt="" />
                        <div className="PrjText">
                            <AdvLine />
                            <h4>ГРУЗОВЫЕ</h4>
                        </div>
                        <button>
                            ПОДРОБНЕЕ
                        </button>
                    </Prj>

                </ProjectOne>
                <ProjectTwo>
                    <Prj>
                            <img src="	https://lift-universal.uz/thumb/2/6VwdAh0QO0V58-Zq7dSy5A/640r480/d/2.png" alt="" />
                            <div className="PrjText">
                                <AdvLine />
                                <h4>ЭСКАЛАТОРЫ</h4>
                            </div>
                            <button>
                                ПОДРОБНЕЕ
                            </button>
                        </Prj>
                        <Prj>
                            <img src="	https://lift-universal.uz/thumb/2/T-YKwIiPtMyQ7Pz26dxZBw/640r480/d/escalator-2.svg" alt="" />
                            <div className="PrjText">
                                <AdvLine />
                                <h4>ТРАВОЛАТОРЫ</h4>
                            </div>
                            <button>
                                ПОДРОБНЕЕ
                            </button>
                        </Prj>
                        <Prj>
                            <img src="	https://lift-universal.uz/thumb/2/sQwfOcTn021vktSHWejTZQ/640r480/d/creativity.svg" alt="" />
                            <div className="PrjText">
                                <AdvLine />
                                <h4>ИНТЕЛЛЕКТУАЛЬНЫЕ СИСТЕМЫ ПО УПРАВЛЕНИЮ ПАССАЖИРОПОТОКОМ</h4>
                            </div>
                            <button>
                                ПОДРОБНЕЕ
                            </button>
                        </Prj>
                </ProjectTwo>
            </Project>
        </Projects>
        <Buildings>
            <BldText>
                <Line className="line" />
                <h1>РЕШЕНИЯ ДЛЯ СУЩЕСТВУЮЩИХ ЗДАНИЙ</h1>
            </BldText>
            <Building>
                <BuildOne>
                    <Bld>
                        <img src="	https://lift-universal.uz/thumb/2/dXtM37aoCDc0uFvE4V2i3Q/640r480/d/6.png" alt="" />
                        <div className="BldText">
                            <AdvLine />
                            <h4>ТЕХОБСЛУЖИВАНИЕ</h4>
                        </div>
                        <button>
                            ПОДРОБНЕЕ
                        </button>
                    </Bld>
                    <Bld>
                        <img src="	https://lift-universal.uz/thumb/2/dXtM37aoCDc0uFvE4V2i3Q/640r480/d/6.png" alt="" />
                        <div className="BldText">
                            <AdvLine />
                            <h4>РЕМОНТ</h4>
                        </div>
                        <button>
                            ПОДРОБНЕЕ
                        </button>
                    </Bld>
                    <Bld>
                        <img src="	https://lift-universal.uz/thumb/2/dXtM37aoCDc0uFvE4V2i3Q/640r480/d/6.png" alt="" />
                        <div className="BldText">
                            <AdvLine />
                            <h4>МОНТАЖ</h4>
                        </div>
                        <button>
                            ПОДРОБНЕЕ
                        </button>
                    </Bld>

                </BuildOne>
                <BuildTwo>
                    <Bld>
                            <img src="	https://lift-universal.uz/thumb/2/s8_Z4KbY2PriK0dqLMfSuQ/640r480/d/security-camera.svg" alt="" />
                            <div className="BldText">
                                <AdvLine />
                                <h4>МОДЕРНИЗАЦИЯ</h4>
                            </div>
                            <button>
                                ПОДРОБНЕЕ
                            </button>
                        </Bld>
                        <Bld>
                            <img src="	https://lift-universal.uz/thumb/2/-Rw3xpvW5vhtzhab0czC0g/640r480/d/computer-settings.svg" alt="" />
                            <div className="BldText">
                                <AdvLine />
                                <h4>КОНТРОЛЬ ДОСТУПА</h4>
                            </div>
                            <button>
                                ПОДРОБНЕЕ
                            </button>
                        </Bld>
                        <Bld>
                            <img src="	https://lift-universal.uz/thumb/2/UnAnnOwK8A9y0LRCli-iiw/640r480/d/video-call.svg" alt="" />
                            <div className="BldText">
                                <AdvLine />
                                <h4>МОНИТОРИНГ</h4>
                            </div>
                            <button>
                                ПОДРОБНЕЕ
                            </button>
                        </Bld>
                </BuildTwo>
            </Building>
        </Buildings>    
        <Service>
            <SerText>
                <h1>МЫ ОБСЛУЖИВАЕМ</h1>
                <Title>
                    <TitOne>
                        <p>
                            АДМИНИСТРАТИВНЫЕ ЗДАНИЯ
                        </p>
                        <p>
                            ЖИЛЫЕ КОМЛЕКСЫ
                        </p>
                        <p>
                            ТОРГОВЫЕ И БИЗНЕС ЦЕНТРЫ
                        </p>
                        <p>
                            ГОСУДАРСТВЕННЫЕ ОБЪЕКТЫ
                        </p>
                    </TitOne>
                    <TitTwo>
                        <p>
                            МЕДИЦИНСКИЕ УЧРЕЖДЕНИЯ
                        </p>
                        <p>
                            ОТЕЛИ И ГОСТИНИЦЫ
                        </p> 
                        <p>
                            АЭРОПОРТЫ
                        </p>
                        <p>
                            ОБЩЕСТВЕННЫЕ ЗДАНИЯ
                        </p>
                    </TitTwo>
                </Title>
            </SerText>
        </Service>
        <Review>
            <h1>Посмотрите наши дизайны кабин с обзором в 360 градусов</h1>
                <img src="https://image.shutterstock.com/image-photo/interior-view-modern-elevator-260nw-515881960.jpg" alt="" />
        </Review>
        <VideoSlider>
            <ReactPlayer className="Video" controls url='https://youtu.be/sOMdTCOLZYg' />
        </VideoSlider>
        <Cabin>
            <CabTit>
                <AboveHeading>
                    <Line />
                    <h4>КАТАЛОГ</h4>
                </AboveHeading>
                <CabHead>
                    БОЛЕЕ 800 ВАРИАНТОВ ОФОРМЛЕНИЯ КАБИН
                </CabHead>
                <CabTitle>
                    <p>
                        Наша философия дизайна основана на визуальных и эмоциональных ощущениях людей. Сочетая её с современными тенденциями глобальной архитектуры, мы создаём лучшие условия для приятной поездки. В лифтах KONE используются цвета и материалы, идеально подходящие под любой дизайн.
                    </p>
                </CabTitle>
            </CabTit>
            <CabImg>
                <img src="https://i.pinimg.com/originals/0a/46/9f/0a469fa868ae4352f8585f19a73fa6e1.jpg" alt="" />
                <img src="https://i.pinimg.com/736x/a7/4f/af/a74faf7df299d39cea61f56ec37cd9c1--elevator-design-elevator-lobby.jpg" alt="" />
            </CabImg>
        </Cabin>
        <Team>
            <TeamCont>
                <TmTit>
                    <TimAboveHead>
                        <Line />
                        <h4>КОМАНДА</h4>
                    </TimAboveHead>
                    <TimHead>
                        <h1>НАШИ СОТРУДНИКИ</h1>
                    </TimHead>
                    <TmBtn>
                        <button>СМОТРЕТЬ ВСЕХ</button>
                    </TmBtn>
                </TmTit>
                <TmCrt>
                    <TmDr>
                        <TmDrTit>
                            <h4>Андрей Куличихин</h4>
                            <h5>Директор</h5>
                        </TmDrTit>
                        <TmDrImg>
                            <img src="https://lift-universal.uz/thumb/2/UVTMRb8nnXoHDIl59xrNMA/640r480/d/andrej1.jpg" alt="" />
                        </TmDrImg>
                    </TmDr>
                    <TmSl>
                        <TmDrTit>
                            <h4>Армен Ордуханов</h4>
                            <h5>Руководитель отдела продаж</h5>
                        </TmDrTit>
                        <TmDrImg>
                            <img src="https://lift-universal.uz/thumb/2/2sfftra4CxK4o2A7nxSyUQ/640r480/d/armen1.jpg" alt="" />
                        </TmDrImg>
                    </TmSl>
                </TmCrt>
            </TeamCont>
        </Team>
        <Projection>
            <HeadingText>
                <AboveHead>
                    <Line />
                    <h4>КАТАЛОГ</h4>
                </AboveHead>
                <h1>РЕАЛИЗОВАННЫЕ ПРОЕКТЫ</h1>
            </HeadingText>
            <ProImgs>
                <Img>
                    <img src="https://lift-universal.uz/thumb/2/EwY7ZCwEYcc5MzuGFXLu5Q/600r600/d/novoe3.png" alt="" />
                </Img>
                <Img>
                    <img src="https://lift-universal.uz/thumb/2/vWRoAy4jYC_FXBPSIe_QdA/600r600/d/bez_imeni20.png" alt="" />
                </Img>
                <Img>
                    <img src="https://lift-universal.uz/thumb/2/6yvqZMNBwdILFVf8_RJ_Dg/600r600/d/novoe4_1.png" alt="" />
                </Img>
            </ProImgs>
        </Projection>
        <Partner>
            <PartTitle>
                <AboveHeader>
                    <Line />
                    <h4>ПАРТНЕРЫ</h4>
                </AboveHeader>
                <Heading>
                    <h1>НАШИ ПАРТНЁРЫ</h1>
                </Heading>
            </PartTitle>
            <Logos>
                <Logo>
                    <img src="https://lift-universal.uz/thumb/2/tpQ2hMQvzMTft1bI6zqMVQ/210r180/d/image_2020-10-27_21-41-50.png" alt="" />
                </Logo>
                <Logo>
                    <img src="https://lift-universal.uz/thumb/2/QffZFPiucNMeJEs4Nm7AFw/210r180/d/image_2020-10-27_21-41-01.png" alt="" />
                </Logo>
                <Logo>
                    <img src="https://lift-universal.uz/thumb/2/_dBwst-ymAqBnO2b9MXYkA/210r180/d/image_2020-10-27_21-40-34.png" alt="" />
                </Logo>
                <Logo>
                    <img src="https://lift-universal.uz/thumb/2/xLkGssYvJjQ01455NMoQwg/210r180/d/image_2020-10-27_21-46-16.png" alt="" />
                </Logo>
                <Logo>
                    <img src="https://lift-universal.uz/thumb/2/Ojgm9UDLZXLIAyH3BwB8Ag/210r180/d/image_2020-10-27_21-38-40.png" alt="" />
                </Logo>
                <Logo>
                    <img src="https://lift-universal.uz/thumb/2/z_gm6DprKDlm4Hi9IaK4Iw/210r180/d/image_2020-10-27_21-40-06.png" alt="" />
                </Logo>

            </Logos>
        </Partner>
        <Consultation>
            <ConstTit>
                <h1>БЕСПЛАТНАЯ КОНСУЛЬТАЦИЯ</h1>
                <p>Получите бесплатную консультацию специалистов Lift Universal</p>
            </ConstTit>
            <ConsInp>
                <input type="text"  placeholder="Ваш контактный номер * "/>
                <button>ОТПРАВИТЬ</button>
            </ConsInp>
        </Consultation>
    </>
  )
}



const Our = style.div`
    width: 70vw;
    margin: 0 auto;
    display: flex;
    flex-direction: row;
    justify-content:  space-between;
    padding: 100px 0;

    .OurText {  
        display: flex;
        flex-direction: column;

        .aboveHeading {
            display: flex;
            align-items: center;

            h4 {
                color: rgba(45, 68, 171, 0.8);
                font-size: 20px;
                font-weight: 200;
            }
        }

        .Heading {
            h1 {
                font-size: 40px;
                font-weight: 200;
                color: rgb(45, 68, 171);
                margin: 5px 0;
            }
        }

        .text {
            margin: 30px 0;
            
            p {
                color: rgba(0, 0, 0, 0.6);
                font-size: 18px;
                font-weight: 100;
                word-spacing: 2.5px;
                line-height: 25px;
            }
        }

        }


    }

    .OurImg {
        width: 300%;
        margin-left: 30px; 

        img {
            width: 100%;
        }
        
    }

    .ourBtn {

        button {
            background: rgb(45, 68, 171);
            padding: 20px 40px;
            font-size: 18px;
            color: #fff;
        }
    }

    @media(max-width: 560px) {
        display: flex;
        flex-direction: column;
        width: 80vw;

        .OurImg {
            width: 80vw;
            margin: 30px auto;

            img {
                width: 100%;
            }
        }
    }

`

const Line = style.div`
    height: 3px;
    width: 70px;
    background: rgba(89, 188, 220, 0.9);
    margin: 0 10px;

`

const Advantage = style.div`
    width: 100vw;
    background-color: rgb(18, 66, 175);
    padding: 75px 0;

    .AdvText {
        width: 80vw;
        margin: 0 auto;

        .aboveHeading {
            display: flex;
            text-align: center;
            align-items: center;

            h4 {
                font-size: 20px; 
                color: #fff;
                font-weight: 100; 
            }
        }

        .Heading {
            font-size: 20px;
            color: white;
            color: rgb(89, 188, 220);
            margin-bottom: 70px;

            h1 {
                font-weight: 100;
                margin: 20px 0;
            }
        }
    }

    .AdvGroup {
        width: 80vw;
        margin: 0 auto;
        display: flex;
        flex-direction: row;
        justify-content: space-between;

        .Group {
            width: 23%;
            display: flex;
            flex-direction: column;

            img {
                width: 60px;
                height: 60px;
                margin: 20px 0;
            }

            h4 {
                color: #fff;
                font-size: 18px;
                font-weight: 600;
                margin: 10px 0;
                word-spacing: 3px;
                line-height: 30px;
            }

            p {
                color: rgba(255, 255, 255, 0.5);
                font-weight: 500;
                line-height: 25px;
            }
        }
    }

    @media(max-width: 560px) {
        display: flex;
        flex-direction: column;

        .AdvGroup {
            display: flex;
            flex-direction: column;
            width: 80vw;
            

            .Group {
                width: 100%;
                display: flex;
                flex-direction: row;
                justify-content: space-between;
                align-items: center;
                text-align: center;

                img {
                    width: 50px;
                }

                h4 {
                    width: 75%;
                    margin: auto 0;
                }

                div {
                    display: none;
                }

                p {
                    display: none;
                }
            }

        }
    }

`

const AdvLine = style.div`
    height: 2px;
    width: 80px;
    background-color: rgba(200, 200, 200, 0.9); 

`

const Projects = style.div`
    width: 75vw;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    padding: 50px 0;

`

const PrText = style.div`
    h1 {
        font-size: 40px;
        font-weight: 100;
        color: rgb(18, 66, 175);
        margin-bottom: 50px;
    }


    .line {
        margin: 10px 0;
    }

`

const Project = style.div`
    display: flex;
    flex-direction: column;

`

const ProjectOne = style.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    margin: 10px 0;

    @media(max-width: 560px) {
        width: 80vw;
        display: flex;
        flex-direction: column;
    }

`

const Prj = style.div`
    width: 32%;
    background: rgba(180, 180, 180, 0.25);
    padding: 40px 30px;

    img {
        width: 5vw;
        margin: 10px;
    }

    .BldText {
        display: flex;
        text-align: center;
        align-items: center;
        margin: 20px 0;

        h4 {
            margin: 0 20px;
            text-align: left;
        }
    }

    button {
        background: rgb(112, 221, 255);
        color: #fff;
        padding: 15px 30px;
        font-weight: 600;
        margin: 10px 0;
        cursor: pointer;
    }
    button:hover {
        background-color: rgb(18, 66, 175);
    }

    @media(max-width: 560px) {
        display: flex;
        flex-direction: column;
        text-align: center;
        align-items: center;
        width: 100%;
        margin: 20px 0;

        img {
            width: 100px;
        }

        .BldText {
            
        }


    }

`

const ProjectTwo = style(ProjectOne) `


`

// ################################

const Buildings = style.div`
    width: 75vw;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    padding: 50px 0;

`

const BldText = style.div`
    h1 {
        font-size: 40px;
        font-weight: 100;
        color: rgb(18, 66, 175);
        margin-bottom: 50px;
    }


    .line {
        margin: 10px 0;
    }

    @media(max-width: 560px) {
        h1 {
            font-size: 30px;
        }
    }

`

const Building = style.div`
    display: flex;
    flex-direction: column;

`

const BuildOne = style.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    margin: 10px 0;

    @media(max-width: 560px) {
        display: flex;
        flex-direction: column;
        width: 80%;
    }

`

const Bld = style.div`
    width: 32%;
    background: rgba(180, 180, 180, 0.25);
    padding: 40px 30px;

    img {
        width: 5vw;
        margin: 10px;
    }

    .BldText {
        display: flex;
        text-align: center;
        align-items: center;
        margin: 20px 0;

        h4 {
            margin: 0 20px;
            text-align: left;
        }
    }

    button {
        background: rgb(112, 221, 255);
        color: #fff;
        padding: 15px 30px;
        font-weight: 600;
        margin: 10px 0;
        cursor: pointer;
    }
    button:hover {
        background-color: rgb(18, 66, 175);
    }

    @media(max-width: 560px) {
        display: flex;
        flex-direction: column;
        align-items: center;
        text-align: center;
        width: 100%;
        margin: 20px 0;

        img {
            width: 100px;
        }

        .BldText {
            display: flex;
            flex-direction: column;

        }
    }

`

const BuildTwo = style(BuildOne) `


`

const Service = style.div`
    padding: 30px 0;
    background: rgb(45, 68, 171);

`

const SerText = style.div`
    width: 75vw;
    margin: 0 auto;

    h1{
        color: #fff;
        font-weight: 100;
        margin-bottom: 40px;
    }

`

const Title = style.div`    
    display: flex;

    @media(max-width: 560px) {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
    }

`

const TitOne = style.div`
    width: 20vw;
     
    p {
        color: rgba(150, 150, 150, 0.9);
        margin-bottom: 20px;
        border-bottom: 1px solid rgb(200, 200, 200);
        font-size: 18px;
    }

    @media(max-width: 560px) {
        width: 45%;
        text-align: center;
        
        p{
            font-size: 12px;
        }
    }

`

const TitTwo = style(TitOne)`
    margin: 0 80px;

    @media(max-width: 560px) {
        margin: 0;
    }


`

const Review = style.div`
    padding: 50px 0;
    display: flex;
    flex-direction: column;

    h1 {
        width: 75vw;
        margin: 0 auto;
        text-align: center;
        font-size: 40px;
        font-weight: 100;
        color: rgb(45, 68, 171);
    }

    img {
        width: 70vw;
        margin: 40px auto;
    }

    @media(max-width: 560px) {
        display: flex;
        flex-direction: column;

        h1 {
            font-size: 20px;
        }
    }

` 

const VideoSlider = style.div`
    background: rgb(45, 68, 171);
    padding: 30px 370px;
    text-align: center;

    .Video {
        width: 70vw;
        margin: 0 auto;
    }

    @media(max-width: 560px) {
        padding: 0;

        .Video {
            display: none;
        }
    }

`

const Cabin = style.div`
    width: 80vw;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    padding: 50px 0;

    @media(max-width: 560px) {
        display: flex;
        flex-direction: column;
    }

`

const CabTit = style.div`
    width: 25%;
    padding: 50px 0;

    @media(max-width: 560px) {
        width: 100%;
        display: flex;
        flex-direction: column;
    }

`

const AboveHeading = style.div`
    display: flex;
    align-items: center;

    h4 {
        color: rgba(45, 68, 171, 1);
        font-weight: 10;
        font-size: 20px;
    }

`

const CabHead = style.div`
    font-size: 40px;
    line-height: 50px;
    color: rgb(45, 68, 171);
    margin: 20px 0;

`

const CabTitle = style.div`
    font-size: 17px;
    line-height: 25px;
    color: gray;
    font-weight: 100;
    border-left: 2px solid rgb(45, 68, 171);

    p {
        margin-left: 25px;
    }

`

const CabImg = style.div`
    width: 70%;
    display: flex;
    justify-content: space-between;

    img {
        width: 50%;
    }

    @media(max-width: 560px) {
        display: flex;
        flex-direction: column;
        width: 80vw;

        img {
            width: 100%;
            margin: 20px 0;
        }
    }

`

const Team = style.div`
    margin: 0 auto;
    background: rgb(45, 68, 171);

`

const  TeamCont = style.div`
    width: 80vw;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    padding: 70px 0;

    @media(max-width: 560px){
        width: 80vw;
        display: flex;
        flex-direction: column;
        text-align: center;
        align-items: center;
    }

`

const TmTit = style.div`
    width: 30%;

    @media(max-width: 560px){
        width: 100%;
    
    }

`

const TimAboveHead = style.div`
    display: flex;
    align-items: center;

    h4 {
        color: #fff;
    }

`

const TimHead = style.div`
    font-size: 30px;
    font-weight: 100;
    color: rgb(112, 221, 255);  
    margin: 20px 0;

    @media(max-width: 560px) {
        h1 {
            font-size: 20px;
        }
    }

`

const TmBtn = style.div`

    button {
        padding: 15px 30px;
        color: rgb(45, 68, 171);
        font-size: 20px;
    }

    @media(max-width: 560px){
        margin: 30px 0;
    }

`

const TmCrt = style.div`
    width: 60%;
    display: flex;
    justify-content: space-between;

    @media(max-width: 560px){
        width: 80vw;
        display: flex;
        flex-direction: column;
    }

`

const TmDr = style.div`
    background: #fff;
    width: 49%;
    display: flex;
    flex-direction: row;
    height: 200px; 
    align-items: center;

    @media(max-width: 560px) {
        width: 100%; 
        margin: 20px 0;
    }
    

`

const TmSl = style(TmDr)`


`

const TmDrTit = style.div`
    width: 50%;
    text-align: left;
    margin-left: 20px;

    h5 {
        margin-top: 70px;
        color: gray;
        font-size: 15px;
        font-weight: 100;
    }

    @media(max-width: 560px) {
        width: 30%;
        text-align: center;
        align-items: center;
    }

`

const TmDrImg = style.div`
    width: 50%;    

    img{
        width: 100px;
        border-radius: 50%;
        padding: 10px;
        border: 2px solid rgb(112, 221, 255);
        margin-top: -70px;
        margin-left: 50px;
    }

`

const Projection = style.div`
    width: 80vw;
    margin: 0 auto;
    padding: 50px 0;

`

const HeadingText = style.div`
    display: flex;
    flex-direction: column;

    h1 {
        font-size: 40px;
        font-weight: 100;
        color: rgb(45, 68, 171);
    }
`

const AboveHead = style.div`
    display: flex;
    align-items: center;
    margin-bottom: 30px;
    
    h4 {
        color: rgb(45, 68, 171);
        font-weight: 100;
        font-size: 20px;
    }

`

const ProImgs = style.div`
    margin: 50px 0;
    display: flex;
    flex-direction: row;
    justify-content: space-between;

    @media(max-width: 560px) {
        display: flex;
        flex-direction: column;
    }

`

const Img = style.div`
    width: 32%;
    height: 370px;
    border: 1px solid rgba(45, 68, 171, 0.2);
    padding: 20px;

    img {
        width: 100%;
        height: 100%;
        background-size: cover;
    }

    @media(max-width: 560px) {
        width: 80vw;

        img {
            width: 100%;
        }
    }

`

const Partner = style.div`
    display: flex;
    flex-direction: column;
    width: 80vw;
    padding: 40px 0;
    margin: 0 auto;

`
const PartTitle = style.div`
    display: flex;
    flex-direction: column;

`

const AboveHeader = style.div`
    display: flex;
    align-items: center;
    margin: 10px 0;

    h4 {
        font-size: 23px;
        color: rgb(45, 68, 171);
        font-weight: 100;
    }

`

const Heading = style.div`
    h1  {
        font-size: 40px;
        font-weight: 100;
        color: rgb(45, 68, 171);
        margin: 10px 0;
    }

`

const Logos = style.div`
    width: 80vw;
    margin: 50px auto;
    display: flex;
    justify-content: space-between;

    @media(max-width: 560px) {
        display: flex;
        flex-direction: column;
    }

`

const Logo = style.div`
    border: 1px solid rgba(100, 100, 100, 0.5);
    width: 15%;
    padding: 20px;

    img {
        width: 100%;
    }

    @media(max-width: 560px) {
        width: 100%;
    }

`

const Consultation = style.div`
    background-color: rgb(45, 68, 171);
    width: 100vw;
    padding: 30px 0;
    display: flex;
    // justify-content: space-between;

    @media(max-width: 560px) {
        display: flex;
        flex-direction: column;s
        text-align: center;
        align-items: center;
    }

`

const ConstTit = style.div`
    width: 30vw;
    margin: 0 auto;

    h1{
        font-size: 40px;
        font-weight: 100;
        color: rgb(112, 221, 255);
    }

    p {
        color: gray;
        font-size: 20px;
        margin: 30px 0;
    }

    @media(max-width: 560px) {
        width: 80%;
    }

`

const ConsInp = style.div`
    width: 50vw;
    align-items: center;
    text-align: left;

    input {
        padding: 20px 200px 20px 20px;
        background: transparent;
        border-bottom: 1px solid gray;
        margin: 50px 30px;
        color: rgba(200, 200, 200, 0.7);
        font-size: 15px;
        font-weight: 600;
    }
    
    button {
        padding: 20px 40px;
        cursor: pointer;
        color: white;
        background: rgb(112, 221, 255);
        font-size: 18px;
    }

    button:hover {
        background: rgb(255, 68, 69);
    }

    @media(max-width: 560px) {
        width: 80%;
        align-items: center;
        display: flex;
        flex-direction: column;


        input {
            padding: 20px 10px;
        }

        button {
            width: auto;
        }
    }

`

const Button = style.button`


`


export default Header