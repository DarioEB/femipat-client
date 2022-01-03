import styled from '@emotion/styled';

/*** Layout Admin ***/

export const ADMIN = styled.section`
    @media (min-width: 768px) {
        flex:1;
        overflow-y: scroll;
    }
`

export const Header = styled.header`
    display: flex;
    flex-direction: column-reverse;
    justify-content: space-between;
    align-items: flex-start;
    gap: 1rem;
    padding: 2rem;
    background: var(--white);
    box-shadow: 0 .5rem .25rem var(--shadow);
    border-bottom-left-radius: 2rem;
    border-bottom-right-radius: 2rem;
    @media (min-width: 768px) {
        padding: 2rem 1rem;
        flex-direction: row;
        align-items: center;
    }



    .user {
        p {
            font-size: 1.2rem;
            color: var(--black);
            span {
                font-weight: 700;
            }
        }
        @media (min-width: 768px) {
            p {
                font-size: 1.4rem;
            }
        }
    }

    .location {
        display: flex;
        align-items: center;
        .icon {
            width: 2.2rem;
            height: 2.2rem;
            color: var(--blue);
        }
        p {
            font-size: 1.2rem;
            color: var(--blue);
            text-transform: capitalize;
            letter-spacing: 1px;
            font-weight: 700;
        }
        @media (min-width: 768px) {
            p {
                font-size: 1.6rem;
            }
            .icon {
                width: 2.5rem;
                width: 2.5rem;
            }
        }
    }

    .logout {
        display: flex;
        align-items: center;
        gap: .5rem;
        .btn-logout {
            padding: 1.5rem 2rem;
            color: var(--white);
            font-weight: 500;
            font-size: 1.4rem;
            background: var(--red-light);
            border-radius: 2rem;
            text-transform: uppercase;
            transition: all .4s ease-out;
            cursor: pointer;
            &:hover {
                background: var(--red);
            }
        }
        @media (min-width: 768px) {
            .btn-logout {
                font-size: 1.6rem;
            }
        }
    }
`

export const CONTAINER = styled.div`
    width: 98%;
    margin: 0 auto 2rem auto;
    @media (min-width: 768px) {
        width: 95%;
    }
    @media (min-width: 992px) {
        width: 92%;
    }
`


export const NAVSIDEBAR = styled.nav`
    display: flex;
    margin-top: 2rem;
    flex-direction: column;
    gap: .5rem;
    .link-nav {
        padding: 1.5rem 1rem;
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: space-between;
        color: var(--white);
        border-radius: 2rem;
        text-align: center;
        font-size: 1.4rem;
        font-weight: 700;
        background-color: var(--blue);
        transition: all .4s ease-out;
        .icon {
            width: 2.2rem;
            height: 2.2rem;
        }
    }
    button.others {
        cursor: pointer;
        width: 100%;
        position: relative;
        z-index: 5;
        
    }
    
    
    @media (min-width: 768px) {
       
        .link-nav {
            font-size: 1.6rem;
            .icon {
                width: 2.5rem;
                height: 2.5rem;
            }
            &:hover {
                background-color: var(--red);
                /* color: var(--white); */
            }
        }
    }

    .menu-others {
        overflow: hidden;
        border-radius: 2rem;
        background-color: var(--blue);
        transition: all .4s ease-out;
        .nav-menu-others {
            max-height: 0;
            transform: translateY(-100%);
            transition: all .4s ease-out;
            opacity: 0;
            position: relative;
            z-index: 4;
            &.view {
                opacity: 1;
                transform: translateY(0%);
                max-height: 100rem;
            }
        }

    }
`

/**  **/

export const Btn = styled.div`
    margin: 2rem 0 0 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    .btn {
        padding: 2rem 3rem;
        font-weight: 700;
        &.w-full {
            width: 100%;
            padding: 2rem 0;
        }
        border-radius: 2rem;
        font-size: 1.6rem;
        font-weight: 500;
        text-transform: uppercase;
        color: var(--white);
        &.gap {
            display: flex;
            justify-content: center;
            flex-direction: row;
            align-items: center;
            gap: .5rem;
        }
        background: var(--blue);
        .icon {
            width: 2.2rem;
            height: 2.2rem;
        }
    }
    @media (min-width: 768px) {
        .btn {
            font-size: 1.8rem;
        }
    }
`

export const DROPZONE = styled.div`
    background: var(--gradient-transparent);
    height: 12rem;
    border-radius: 2rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    p {
        color: var(--white);
        font-size: 1.2rem;
        font-weight: 500;

    }
`

export const Social = styled.div`
    /* margin: 2rem 0; */
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`

export const Separator = styled.div`
    margin: 7rem 0 0 0;
    @media (min-width: 768px) {
        margin: 8rem 0 0 0;
    }
`

export const FORMADMIN = styled.form`
    width: 100%;
    margin: 0 auto;
    box-shadow: 0 1rem 1rem .5rem var(--shadow);
    border-radius: 2rem;
    padding: 1rem;
    @media (min-width: 768px) {
        padding: 2rem;
        width: 100%;
    }
    @media (min-width: 992px) {
        width: 75%;
    }
`

export const FIELDSET = styled.fieldset`
    display: flex;
    flex-direction: column;
    border: none;
    padding: 0;
    legend {
        color: var(--gray);
        padding: 2rem 0 2rem 1.5rem;
        &.p-0 {
            padding: 0 0 2rem 1.5rem;
        }
        font-size: 1.4rem;
        font-weight: 700;
        text-transform: uppercase;
    }
`

export const FIELDADMIN = styled.div`

    margin-bottom: 1.5rem;
    &:last-of-type {
        margin-bottom: 0;
    }
    label {
        font-size: 1.2rem;
        font-weight: 700;
        text-transform: uppercase;
        margin-bottom: .5rem;
        padding-left: 1.2rem;
        &.label-g {
            font-size: 1.2rem;
            padding: 0;
            margin-bottom: 1rem;
            color: var(--gray);
        }
        &.indent {
            color: var(--white);
            margin: 0;
        }
    }
    input, select, textarea {
        width: 100%;
        border: .1rem solid var(--shadow);
        padding: 1.2rem;
        border-radius: 2rem;
        outline: none;
    }
    textarea {
        height: 12rem;
        resize: none;
    }
    @media (min-width: 768px) {
        label {
            padding-left: 1.5rem;
            font-size: 1.2rem;
        }
        input, select, textarea  {
            padding :1.5rem;
            font-size: 1.6rem;
        }
    }
`

export const FIELDTWO = styled.div`
    display: grid;
    @media (min-width: 768px) {
        column-gap: 1.5rem;
        grid-template-columns: repeat(3, 1fr); 
        align-items: center;
    }

    .select {
        padding: 1.2rem;
        width: 100%;
        border-radius: 2rem;
        font-size: 1.4rem;
        color: var(--white);
        font-weight: 700;
        cursor: pointer;
        background: var(--blue);
        @media (min-width: 768px) {
            padding: 1.5rem;
            font-size: 1.6rem;
        }
    }
`



/** Listados **/

export const BtnNew = styled.div`
    margin: 2rem 0;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    .btn-new {
        border-radius: 2rem;
        display: flex;
        flex-direction: row;
        text-transform: uppercase;
        font-weight: 700;
        align-items: center;
        gap: .5rem;
        color: var(--white);
        padding: 1.5rem 3rem;
        background: var(--blue);
        .icon {
            width: 2.2rem;
            height: 2.2rem;
        }
        font-size: 1.4rem;
    }
`

export const BtnElement = styled.button`
    padding: .5rem 1rem;
    border-radius: 2rem;
    font-size: 1.2rem;
    font-weight: 700;
    display: flex;
    align-items: center;
    gap: .5rem;
    color: var(--white);
    box-shadow: 0 .25rem .25rem #474747;
    cursor: pointer;
    .icon {
        width: 1.8rem;
        height: 1.8rem;
    }
    &.view {
        background: var(--blue);
    }
    &.edit {
        background: var(--red-light);
    }
    &.delete {
        background: var(--red);
    }
    @media (min-width: 768px) {
        font-size: 1.4rem;
    }
`
export const Elements = styled.div`
    padding: 1rem;
    box-shadow: 0 1rem 1rem .5rem var(--shadow);
    border-radius: 2rem;
    @media (min-width: 768px) {
        padding: 2rem;
    }
    ul {
        display: flex;
        flex-direction: column;
        li {
            display: flex;
            flex-direction: row;
            justify-content: space-between;
            align-items: center;
            padding: 1rem 0 1rem 0;
            border-bottom: .1rem solid var(--gray);
            &:last-of-type {
                border-bottom: none;
            }
        
            .element-description {
                &.club {
                    display: flex;
                    flex-direction: row;
                    align-items: center;
                }
                img {
                    width: 8rem;
                }
                display: flex;
                flex-direction: column;
                gap: .5rem;
                p {
                    font-size: 1.2rem;
                    font-weight: 400;
                    &:last-of-type {
                        color: var(--gray);
                        font-weight: 700;
                        text-decoration: underline;
                    }
                    &.no-last {
                        color: var(--black);
                        &:last-of-type {
                            color: var(--black);
                        }
                    }
                }
            }
            .element-actions {
                display: flex;
                flex-direction: column;
                gap: .5rem;
            }
            @media (min-width: 768px) {
                .element-description {
                    p {
                        font-size: 1.4rem;
                    }
                }
                .element-actions {
                    flex-direction: row;
                    align-items: center;
                }
            }
        }
    }  
`

export const Filters = styled.div`
    display: grid;
    margin-bottom: 2rem;
    grid-template-columns: repeat(1, 1fr);
    gap: .5rem;
    @media (min-width: 786px) {
        grid-template-columns: repeat(3, 1fr);
        gap: 1rem;
        select, input {
            padding: 1.5rem;
        }
    }
    @media (min-width: 992px) {
        grid-template-columns: repeat(4, 1fr);
    }
    label {
        font-size: 1.2rem;
        font-weight: 700;
        color: var(--blue);
        padding-left: 1.2rem;
        margin-bottom: .5rem;
    }
    select, input {
        font-size: 1.4rem;
        width: 100%;
        padding: 1.2rem;
        color: var(--blue);
        border-radius: 2rem;
        border: .1rem solid var(--shadow);
        outline: none;
    }
`