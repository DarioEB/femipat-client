import image1 from '../../assets/images/8.jpg';
import image2 from '../../assets/images/1.jpg';
import image3 from '../../assets/images/3.jpg';
import image4 from '../../assets/images/2.jpg';
import Logo from '../../assets/images/logo2.png';
// styled-components
import styled from '@emotion/styled';
import { Btn } from '../../UI';
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
import { Link } from 'react-router-dom';

SwiperCore.use([Pagination, Autoplay, Navigation]);


const InfoContent = styled.div`
    margin: 4rem 0 4rem 0;
    display: grid;
    gap: 2rem;
    
    @media (min-width: 768px ) {
        gap: 2rem;
        grid-template-columns: 2fr 3fr;
    }
`

const Image = styled.div`
    @keyframes rotate {
        from {
            transform: rotateY(0deg);
        }
        to {
            transform: rotateY(359deg);
        }
    }
    width: 92%;
    margin: 0 auto;
    @media (min-width: 768px) {
        width: 100%;
    }
    img {
        /* position: relative; */
        border-radius: .25rem;
        box-shadow: .2rem 1rem 1rem .5rem #e1e1e1;
    }
`

const Text = styled.div`
    position: relative;
    padding: 0 1rem;
    border-radius: 1rem;
    p {
        font-size: 1.4rem;
        line-height: 1.5;
        margin-top: 1rem;
        &:first-of-type {
            margin-top: 0;
        }
    }
    @media (min-width: 768px) {
        p {
            font-size: 1.6rem;
        }
    }
`

const ContainerCart = styled.div`
    padding: 2rem 1rem;
`

const ContentCart = styled.div`
    width: calc(92% + 1rem);
    margin: 0 auto;
    @media (min-width: 768px) {
        /* padding: 1rem; */
        width: 100%;
    }
    display: flex;
    flex-direction: column;
    box-shadow: 0rem .5rem .5rem .5rem #e1e1e1;
    gap: 1rem;
    border-radius: 1rem;
`

const TitleCart = styled.h4`
    font-size: 2.6rem;
    text-trasnform: uppercase;
    color: var(--blue);
    text-align: center;
    margin: 1rem 0 0 0 ;
`

const ImageCart = styled.div`
    margin: 1rem;
    display: flex;
    align-items: center;
    position: relative;
    img {
        border-radius: .25rem;
    }
`

const BtnCart = styled.div`
    padding: 0 1rem 1rem 1rem;
    .btn {
        border-radius: 2rem;
        display: block;
        font-weight: 700;
        letter-spacing: 1px;
        text-align: center;
        padding: 1.5rem 0;
        background: var(--blue);
        color: var(--white);
        font-size: 1.6rem;
    }
`

const Info = () => {

    const images = [
        {title: 'Patinaje Libre', image: image2 },
        {title: 'Danza', image: image3 },
        {title: 'Escuela', image: image4 }
    ]

    return (
        <section className="section ">
            <div className="container">
                <div className="title">
                    <h2>Femipat</h2>
                    <div className="details">
                        
                    </div>
                </div>
                <InfoContent>
                    <Image>
                        <img 
                            src={image1}
                            alt="Imagen"
                        />
                    </Image>
                    <Text>
                        <p>consectetur adipiscing elit. Morbi eget suscipit magna. Vivamus ornare tempus tincidunt. In eu sagittis orci. Ut id sapien dignissim, porta lectus vel, dignissim lectus. Morbi aliquam aliquam velit interdum vehicula. In hac habitasse platea dictumst. Donec non massa nec velit semper vehicula non in sem. Sed ut ante metus. Pellentesque egestas turpis non tincidunt scelerisque. Maecenas malesuada blandit augue, quis accumsan lacus dictum nec. Aliquam ipsum mauris, efficitur quis interdum non, facilisis in elit.</p>
                        <p>In hac habitasse platea dictumst. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam metus neque, scelerisque non ex sit amet, pellentesque vulputate velit. Aenean id pretium tortor. Vestibulum libero justo, dignissim non mattis at, lacinia sed lorem. Etiam ac sagittis sapien. Nam nec pretium arcu.</p>
                    </Text>
                </InfoContent>
                <div className="title">
                    <h2>Especialidades</h2>
                    <div className="details">
                        
                    </div>
                </div>
                <Swiper
                    slidesPerView={1}
                    spaceBetween={0}
                    autoplay={true}
                    loop={true}
                    breakpoints={{
                        "768": {
                            "slidesPerView": 3,
                            "spaceBetween": 10
                        }
                    }}
                    className="swiper-info"
                >
                    {images.map( (image, index) => (
                        <SwiperSlide
                            key={index}
                        >
                            <ContainerCart>
                                <ContentCart>
                                    <TitleCart>
                                        {image.title}
                                    </TitleCart>
                                    <ImageCart>
                                        <img 
                                            src={image.image}
                                            alt="Imagen"
                                        />
                                        <span className="film-image"></span>
                                    </ImageCart>
                                    <BtnCart>
                                        <Link
                                            to={"/info"}
                                            className="btn"
                                        >
                                            Más Información
                                        </Link>
                                    </BtnCart>
                                </ContentCart>
                            </ContainerCart>   
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </section>
    );
}

export default Info;