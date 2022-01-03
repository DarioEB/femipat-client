import Logo from '../../assets/images/logo.png';
import styled from '@emotion/styled';
import { 
    Separator,
    Social
} from '../../UI';
import {
    MailIcon, PhoneIcon
} from '@heroicons/react/outline';
const ContactContent = styled.div`
    display: grid;
    gap: 2rem;
    margin: 4rem 0 2rem 0;
    @media (min-width: 768px) {
        grid-template-columns: 1fr 2fr;
        gap: 4rem;
        margin: 6rem 0 2rem 0;
        align-items: center;
    }
`

const Information = styled.div`
    display: flex;
    flex-direction: column;
    gap: 4rem;
`

const Links = styled.div`
    display: flex;
    flex-direction: column;
    /* align-items: flex-start; */
    gap: 2rem;
    a {
        border-radius: 2rem;
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: center;
        padding: 1.2rem 0 ;
        gap: 1rem;
        color: var(--white);
        background: var(--blue);
        font-size: 1.6rem;
        font-weight: 700;
        .icon {
            width: 2.2rem;
            height: 2.2rem;
            font-size: 2.2rem;
        }
    }
`

const FormContact = styled.form`
    padding: 1rem;
    border-radius: 2rem;
    /* box-shadow: 0 .5rem .5rem .25rem #e1e1e1; */
    /* background: var(--white); */
    @media (min-width: 768px) {
        padding: 1rem;
    }
    display: flex;
    flex-direction: column;
    .field {
        margin-bottom: 1rem;
        
        &:last-of-type {
            margin-bottom: 0;
        }
        label {
            margin-bottom: .5rem;
            font-size: 1.4rem;
            font-weight: 500;
            color: var(--white);
            padding-left: 1.5rem;
        }
        input, textarea {
            background-color :transparent;
            padding: 1.2rem;
            width: 100%;
            font-size: 1.6rem;
            border-radius: 2rem;
            border: .1rem solid #e1e1e1;
            outline: none;
            color: var(--white);
        }
        @media (min-width: 768px) {
            margin-bottom: 1.5rem;
            label {
                font-size: 1.6rem;
            }
            input, textarea {
                font-size: 1.8rem;
            }
        }
        textarea {
            height: 12rem;
            resize: none;
        }
    }
    .btn-submit {
        margin-top: 1rem;
        .btn {
            background: var(--blue);
            font-size: 1.6rem;
            text-transform: uppercase;
            color: var(--white);
            width: 100%;
            text-align: center;
            font-weight: 700;
            border-radius: 2rem;
            padding: 1.5rem 0;
            cursor: pointer;
        }
    }
    .field-two {
        display: grid;
        margin-bottom: 1rem;
        @media (min-width: 768px) {
            grid-template-columns: repeat(2, 1fr);
            gap: 1rem;
            margin-bottom: 0;
        }
    }
`


const Contact = () => {

    const socialmedia = [
        { link: '/', name: "Instagram", icon: "fab fa-instagram" },
        { link: '/', name: "Instagram", icon: "fab fa-facebook-f" },
        { link: '/', name: "Instagram", icon: "fab fa-linkedin-in" },
        { link: '/', name: "Instagram", icon: "fab fa-twitter" },
        { link: '/', name: "Youtube", icon: "fab fa-youtube" }
    ]

    return (
        <section
            className="section section-contact m-height-100 flex-column-100"
        >
            <div className="container">
                <Separator>
                    <div className="title">
                        <h2>Contacto</h2>
                        <div className="details"></div>
                    </div>
                </Separator>
                <ContactContent>
                    <Information>
                        <div>
                            <img
                                src={Logo}
                                alt={`Logotipo Femipat`}
                            />
                        </div>
                        <Links>
                            <a
                                href="mailto:contacto@femipat.com"
                            >
                                <span>contacto@femipat.com</span>
                                <MailIcon
                                    className="icon"
                                />
                            </a>
                            <a
                                href="tel:+543755722023"
                            >
                                <span>+54 9 (3755) 722023</span>
                                <PhoneIcon
                                    className="icon"
                                />
                            </a>
                            <a
                                href="/"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <span>+54 9 (3755) 722023</span>
                                <span className="fab fa-whatsapp
                                font-size: 2.2rem; icon"></span>
                            </a>
                        </Links>
                        <Social>
                            <div className="social">
                                {socialmedia.map((link, index) => (
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
                    </Information>
                    <div>
                        <FormContact>
                            <div className="field-two">
                                <div className="field">
                                    <label
                                        htmlFor="name"
                                    >Nombre (*)</label>
                                    <input
                                        type="text"
                                        id="name"
                                        name="name"
                                        placeholder="Tu Nombre"
                                    />
                                </div>
                                <div className="field">
                                    <label
                                        htmlFor="email"
                                    >Correo Electrónico (*)</label>
                                    <input
                                        type="email"
                                        id="email"
                                        name="email"
                                        placeholder="Tu Correo Electrónico"
                                    />
                                </div>
                            </div>
                            <div className="field">
                                <label
                                    htmlFor="subject"
                                >Asunto (*)</label>
                                <input
                                    type="text"
                                    id="subject"
                                    name="subject"
                                    placeholder="Asunto del mensaje"
                                />
                            </div>
                            <div className="field">
                                <label
                                    htmlFor="name"
                                >Mensaje (*)</label>
                                <textarea
                                    id="name"
                                    name="name"
                                    placeholder="Tu Nombre"
                                ></textarea>
                            </div>
                            <div className="btn-submit">
                                <input
                                    type="submit"
                                    className="btn"
                                    value="Enviar Mensaje"
                                />
                            </div>
                        </FormContact>
                    </div>
                </ContactContent>
            </div>
        </section>
    )
}

export default Contact;