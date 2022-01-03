import image1 from '../../assets/images/5.jpg';
import image2 from '../../assets/images/6.jpg';
import image3 from '../../assets/images/7.jpg';
import image4 from '../../assets/images/4.jpg';
import { Link } from 'react-router-dom'
import {
    CalendarIcon,
    InformationCircleIcon
} from '@heroicons/react/outline'
import { Btn } from '../../UI';

import styled from '@emotion/styled';

const EventsContent = styled.div`
    display: grid;
    margin: 4rem 0 4rem 0;
    grid-template-columns: repeat(1, 1fr);
    gap: 2rem;
    @media (min-width: 768px) {
        grid-template-columns: repeat(3, 1fr);
        align-items: baseline;
        gap: 2.5rem;
        row-gap: 4rem;
    }
`

const ImageEvent = styled.div`
    display: flex;
    align-items: center;
    position: relative;
    img {
        border-radius: .5rem;
    }
`

const EventContent = styled.article`
    display: flex;
    width: 92%;
    margin: 0 auto;
    @media (min-width: 768px) {
        width: 100%;
    }
    padding: 1rem;
    flex-direction: column;
    gap: 1rem;
    background: var(--gradient-transparent);
    border-radius: 1rem;
    box-shadow: 0 1rem 1rem .5rem #c1c1c1;
    .name-type {
        padding-left: 1rem;
        h4 {
            margin: 0;
            font-size: 2.2rem;
            margin-bottom: 1rem;
            color: var(--white);
        }
        p {
            font-size: 1.4rem;
            margin-bottom: .5rem;
            color: var(--white);
            span {
                font-weight: 700;
            }
            &:last-of-type {
                margin-bottom: 0;
            }
        }
    }

    .description {
        font-size: 1.4rem;
        text-align: justify;
        color: var(--white);
    }

    .date {
        font-size: 1.2rem;
        letter-spacing: 1px;
        color: var(--red);
        font-weight: 900;
    }


    .box-button {
        .btn {
            display: flex;
            background: var(--blue);
            border-radius: 2rem;
            flex-direction: row;
            align-items: center;
            gap: .5rem;
            justify-content: center;
            font-size: 1.4rem;
            padding: 1.2rem 0 ;
            color: var(--white);
            font-weight: 700;
            text-transform: uppercase;

            .icon {
                width: 2.2rem;
                height: 2.2rem;
            }
        }
    }
`

const Events = () => {

    const events = [
        {name: 'Competencia Evento', image: image2, date: '13 de Febrero de 2022', type: 'Tipo de Evento'},
        {name: 'Competencia Danza Libre', image:  image3, date: '02 de Febrero de 2022', type: 'Tipo de Evento'},
        {name: 'Apertura 2022', image: image4, date: '22 de Enero de 2021', type: 'Tipo de Evento'},
        {name: 'Nombre de Evento',image: image2, date: '28 de diciembre de 2021', type: 'Tipo de Evento'},
        {name: 'Nombre de Evento',image: image3, date: '22 de diciembre de 2021', type: 'Tipo de Evento'},
        {name: 'Nombre de Evento',image: image4, date: '12 de Noviembre de 2021', type: 'Tipo de Evento'},
    ]

    return (
        <section className="section m-height-100">
            <div className="container">
                <div className="title">
                    <h2>Eventos</h2>
                    <div className="details"></div>
                </div>
                <EventsContent>
                    {events.map( (e, index) => (
                        <EventContent
                            key={index}
                        >
                            <div className="name-type">
                                <h4>{e.name}</h4>
                                <p>Tipo: <span>{e.type}</span></p>
                            </div>
                            <ImageEvent>
                                <img 
                                    src={e.image}
                                    alt={`Imagen Evento ${e.name}`}
                                />
                                <div className="film-image"></div>
                            </ImageEvent>
                            <p className="description">
                                Nam in ullamcorper leo. Fusce quis lectus 
                                luctus velit convallis fringilla ac a quam. 
                                Nam eu cursus mi. Aliquam euismod purus sit 
                                amet iaculis imperdiet. Nulla tempus diam 
                                eget pharetra pretium.
                            </p>
                            <span className="date">{e.date}</span>
                            <div className="box-button">
                                <Link
                                    to={"/eventos"}
                                    className="btn"
                                >
                                    <span>Ver Evento</span>
                                    <InformationCircleIcon 
                                        className="icon"
                                    />
                                </Link>
                            </div>
                        </EventContent>
                    ))}
                </EventsContent>
                <Btn>
                    <Link
                        to={"/eventos"}
                        className="btn gap"
                    >
                        <span>Ir a Calendario de Eventos</span>
                        <CalendarIcon 
                            className="icon"
                        />
                    </Link>
                </Btn>
            </div>
        </section>
    );
}

export default Events;