import styled from '@emotion/styled';
import { Separator } from "../../UI";
import { Calendar } from 'react-calendar';
import { useState } from 'react';
import Logo from '../../assets/images/logo2.png';
import ImageEvent2 from '../../assets/images/5.jpg'; 
import ImageEvent from '../../assets/images/4.jpg';

import 'react-calendar/dist/Calendar.css';

const ContainerEvents = styled.section`
    
`

const Events = styled.div`
    display: flex;
    gap: 2rem;
    flex-direction: column;
    align-items: flex-start;
    @media (min-width: 768px) {
        flex-direction: row;
    }
`

const ContentCalendar = styled.div`
    box-shadow: 0 1rem 1rem  #c1c1c1;
    @media (min-width: 768px) {
        flex: 0 0 33.3%;
    }
    border-radius: 2rem;
    padding: 1rem;
    background: var(--gradient-transparent);
    & > p {
        font-size: 1.6rem;
        text-align: center;
        margin-bottom: 2rem;
        text-transform: uppercase;
        color: var(--blue);
        font-weight: 700;
    }
    .image-calendar {
        width: 10rem;
        margin: 0 auto;
    }
    .react-calendar {
        background: transparent;
        width: 100%;
        margin-top: 1rem;
        border: none;
        font-family: var(--font-main-two);
    }
    .react-calendar__navigation__label {
        font-size: 1.2rem;
        color: var(--white);
        font-weight: 700;
        text-transform: uppercase;
    }
    .react-calendar__month-view__weekdays {
        font-size: 1.2rem;
        abbr {
            text-decoration: none;
            color: var(--blue);
        }
    }
    .react-calendar__tile {
        font-size: 1.4rem;
        font-weight: 700;
        color: var(--white);
    }
    .react-calendar__month-view__days__day--neighboringMonth {
        color: var(--gray);
    }
    .react-calendar__month-view__days__day--weekend {
        color :var(--red-light);
    }
`

const ListEvents = styled.div`
    display: flex;
    flex-direction: column;
    gap: 2rem;

`

const Event = styled.div`
    flex: 1;
    padding: 1rem 0;
    &:first-of-type {
        padding-top: 0;
    }
    display: flex;
    flex-direction: column;
    gap: 2rem;
    h4 {
        font-size: 2.2rem;
        text-transform: uppercase;
        margin-top: 0;
        margin-bottom: 1rem;
        color: var(--blue);
    }
    @media (min-width: 768px) {
        h4 {
            font-size: 2.6rem;
        }
    }
    img {
        border-radius: 1rem;
        box-shadow: 0 .5rem 1rem .1rem #e1e1e1;
    }
    .event-data {
        display: flex;
        flex-direction: column;
        gap: 1rem;
        p {
                font-size:1.6rem;
            span {
                font-weight: 700;
                color: var(--white);
                border-radius: 2rem;
                padding: .25rem 1rem;
                background: var(--red-light);
            }
        }
    }
    .text-event {
        font-size: 1.4rem;
        line-height: 1.5;
        p {
            margin-bottom: 1rem;
            &:last-of-type {
                margin-bottom: 0;
            }
        }
    }
`

const ContentEvents = () => {

    const [value, setValue] = useState(new Date());

    return (
        <ContainerEvents className="section ">
            <div className="container">
                <Separator>
                    <div className="title">
                        <h2>Eventos FEMIPAT</h2>
                        <div className="details"></div>
                    </div>
                </Separator>
                <Events>
                    <ContentCalendar>
                        <p>Calendario Femipat</p>
                        <div className="image-calendar">
                            <img
                                src={Logo}
                                alt={"Logotipo Calendario"}
                            />
                        </div>
                        <Calendar
                            onChange={setValue}
                            value={value}
                        />
                    </ContentCalendar>
                    <ListEvents>
                        <Event>
                            <h4>Nombre del Evento</h4>
                            <div>
                                <img
                                    src={ImageEvent}
                                    alt={`Imagen Evento`}
                                />
                            </div>
                            <div className="event-data">
                                <p>Fecha: <span>25 de Febrero de 2022</span></p>
                                <p>Tipo de evento: <span>Competencia</span></p>
                                
                            </div>
                            <div className="text-event">
                                <p>Proin sagittis ex sed nulla mollis laoreet. Duis nec ultrices nunc. Proin felis justo, sodales a arcu sed, hendrerit condimentum eros. Vivamus sed purus augue. Suspendisse ex lorem, pulvinar sed nunc eu, ullamcorper feugiat lacus. Morbi non sapien sit amet sapien volutpat facilisis. Cras odio arcu, posuere a libero nec, sollicitudin viverra sem. Proin in ipsum sed dolor molestie tincidunt. Aenean scelerisque porttitor tellus, et finibus sapien egestas vitae.</p>
                                <p>Etiam mattis quam ipsum, quis faucibus metus dapibus ut. In fermentum tempus nibh. Proin dictum tempor vulputate. Sed pellentesque urna lorem, ut fringilla metus porttitor vel. Ut luctus arcu et eros tincidunt, a lacinia dolor ullamcorper. Cras eu scelerisque ligula, in accumsan sem. Cras sit amet tempus lacus. Mauris mattis id lectus ut sagittis. Proin pellentesque, massa a tincidunt euismod, nisl mauris faucibus lectus, ut mollis nibh magna ac est.</p>
                            </div>
                        </Event>
                        <Event>
                            <h4>Nombre del Evento</h4>
                            <div>
                                <img
                                    src={ImageEvent2}
                                    alt={`Imagen Evento`}
                                />
                            </div>
                            <div className="event-data">
                                <p>Fecha: <span>05 de Febrero de 2022</span></p>
                                <p>Tipo de evento: <span>Competencia</span></p>
                                
                            </div>
                            <div className="text-event">
                                <p>Proin sagittis entum eros. Vivamus sed purus augue. Suspendisse ex lorem, pulvinar sed nunc eu, ullamcorper feugiat lacus. Morbi non sapien sit amet sapien volutpat facilisis. Cras odio arcu, posuere a libero nec, sollicitudin viverra sem. Proin in ipsum sed dolor molestie tincidunt. Aenean scelerisque porttitor tellus, et finibus sapien egestas vitae.</p>
                                <p>Etiam mattis qu. Ut luctus arcu et eros tincidunt, a lacinia dolor ullamcorper. Cras eu scelerisque ligula, in accumsan sem. Cras sit amet tempus lacus. Mauris mattis id lectus ut sagittis. Proin pellentesque, massa a tincidunt euismod, nisl mauris faucibus lectus, ut mollis nibh magna ac est.</p>
                            </div>
                        </Event>
                    </ListEvents>
                </Events>
            </div>
        </ContainerEvents>
    );
}

export default ContentEvents;