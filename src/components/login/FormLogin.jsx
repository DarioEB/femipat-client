import Logo from '../../assets/images/logo.png';
import styled from '@emotion/styled';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const FormContent = styled.div`
    padding: 1rem;
    width: 100%;
    margin: 0 auto;
    @media (min-width: 768px) {
        padding: 1.5rem;
        width: 50%;
    }    
    display: flex;
    flex-direction: column;
    gap: 2rem;
    background: var(--white);
    border-radius: 2rem;
    box-shadow: 0 1rem 1rem  #474747;
`

const Image = styled.div`
    width: 75%;
    margin: 0 auto;
    max-width: 40rem;
`

const Form = styled.form`
    .field {
        margin-bottom: 1rem;
        &:last-of-type {
            margin-bottom: 0;
        }
        label {
            font-size: 1.2rem;
            color: var(--black);
            font-weight: 500;
            margin-bottom: .5rem;
            padding-left: 1.2rem;
            text-transform: uppercase;
        }
        input {
            padding: 1.2rem;
            width: 100%;
            border: .1rem solid #e1e1e1;
            border-radius: 2rem;
            font-size: 1.4rem;
        }
        @media (min-width: 768px) {
            margin-bottom: 1.2rem;
            label {
                font-size: 1.4rem;
            }
            input {
                font-size: 1.6rem;
                padding: 1.5rem;
            }
        }
    }
`

const BtnSubmit = styled.div`
    margin-top: 3rem;
    .btn-submit {
        padding: 1.5rem 0;
        font-size: 1.6rem;
        font-weight: 700;
        text-transform: uppercase;
        color: var(--white);
        background: var(--red-light);
        text-align: center;
        width: 100%;
        border-radius: 2rem;
        cursor: pointer;
        transition: all .4s ease-out;
        &:hover {
            background: var(--red);
        } 
        @media (min-width: 768px) {
            font-size: 1.8rem;
        }
    }
`


const FormLogin = () => {

    const navigate = useNavigate();

    const [user, setUser] = useState({
        email: "",
        password: ""
    });

    const handleChange = e => {
        setUser({
            ...user,
            [e.target.name]: e.target.value
        });
    }

    const handleSubmit = e => {
        e.preventDefault();
        if(user.email === 'admin@femipat.com' && user.password === "1234") {
            navigate('/admin');
        } else if(user.email === 'club@femipat.com' && user.password === "1234") {
            navigate('/club-admin')
        }
        
    }

    return (
        <section className="section section-contact m-height-100 flex-column-100">
            <div className="container">
                <FormContent>
                    <Image>
                        <img 
                            src={Logo}
                            alt={"Logotipo Login"}
                        />
                    </Image>
                    <Form
                        onSubmit={handleSubmit}
                    >
                        <div className="field">
                            <label
                                htmlFor="email"
                            >E-mail</label>
                            <input 
                                type="email"
                                id="email"
                                name="email"
                                placeholder="Tu e-mail"
                                onChange={handleChange}
                            />
                        </div>
                        <div className="field">
                            <label
                                htmlFor="password"
                            >Contraseña</label>
                            <input 
                                type="password"
                                id="password"
                                name="password"
                                placeholder="Tu contraseña"
                                onChange={handleChange}
                            />
                        </div>
                        <BtnSubmit>
                            <input 
                                type="submit"
                                className="btn-submit"
                                value="Ingresar"
                            />
                        </BtnSubmit>
                    </Form>
                </FormContent>
            </div>
        </section>
    );
}

export default FormLogin;