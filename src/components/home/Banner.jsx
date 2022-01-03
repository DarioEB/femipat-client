import { Link } from 'react-router-dom';
// styled components
import styled from '@emotion/styled';
import { Btn , Social} from '../../UI';
// Imagenes
import Logo from '../../assets/images/logo.png';
// Iconos
import { CalendarIcon } from '@heroicons/react/outline'
// Swiper
import { Swiper, SwiperSlide } from 'swiper/react';


import 'swiper/swiper.min.css';
import 'swiper/components/pagination/pagination.min.css';
import 'swiper/components/navigation/navigation.min.css';
import 'swiper/components/effect-fade/effect-fade.min.css';

import SwiperCore, {
    Pagination,
    Autoplay,
    Navigation
} from 'swiper/core';

SwiperCore.use([Pagination, Autoplay, Navigation]);

const HomeLogo = styled.div`
    width: 80%;
    margin: 0 auto 2rem auto;
    max-width: 50rem;
`


const Banner = () => {

    const socialmedia = [
        {link: '/', name: "Instagram", icon: "fab fa-instagram"},
        {link: '/', name: "Instagram", icon: "fab fa-facebook-f"},
        {link: '/', name: "Instagram", icon: "fab fa-linkedin-in"},
        {link: '/', name: "Instagram", icon: "fab fa-twitter"},
        {link: '/', name: "Youtube", icon: "fab fa-youtube"}
    ]

    return (
        <div className="bann">
            <Swiper
                slidesPerView={1}
                spaceBetween={0}
                autoplay={true}
                loop={true}
            >
                <SwiperSlide>
                    <div className="swiper-slide-one">
                        <div className="film"></div>
                    </div>
                </SwiperSlide>
            </Swiper>
            <section className="home">
                <div className="flex-column-100">
                    <div className="container">
                        <HomeLogo>
                            <img 
                                src={Logo}
                                alt="Logotipo"
                            />
                        </HomeLogo>
                        <Social>
                            <div className="social">
                                {socialmedia.map( (link, index) => (
                                    <a
                                        key={index}
                                        className="social-link"
                                        href={link.link}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        <span className={link.icon}></span>
                                    </a>
                                ))}
                            </div>
                        </Social>
                        <Btn>
                            <Link
                                to={"/eventos"}
                                className="btn gap"
                            >
                                <span>
                                    Calendario de Eventos
                                </span> 
                                <CalendarIcon 
                                    className="icon"
                                />
                            </Link>
                        </Btn>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default Banner;