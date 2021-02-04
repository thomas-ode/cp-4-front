import styled from 'styled-components';
import {Link} from 'react-router-dom';

const UL = styled.ul`
    list-style: none;
    display: flex;
    flex-flow: row nowrap;
    justify-content: center;
    margin: 0px;
    
    .liLinks{
        text-decoration: none;
        color: var(--secondary-color);
        font-family: var(--main-font);
        padding: 18px 10px;
        transition: 0.5s;
        font-size: 30px;
        padding-left: 40px;
        padding-right : 40px;
    }

    .liLinks:hover{
        background-color: var(--main-color);
        cursor: pointer;
        color: var(--light);
    }

    li {
        margin: 0px 16px;
        font-size: 20px;
        
    }

    @media screen and (min-width: 768px) and (max-width: 800px){
        flex-flow: column nowrap;
        background-color: var(--main-color);
        position: fixed;
        transform: ${({ open }) => open ? 'translateX(0)' : 'translateX(100%)'};
        top: 0;
        right: 0;
        width: 40%;
        transition: transform 0.3s ease-in-out;
        margin-top: 107px;
        border-top: solid 3px var(--secondary-color);
        
        li {
             color: var(--secondary-color);
             margin-bottom: var(--spacing-large);
        }
    }

    @media screen and (max-width: 767px) {
        align-items: center;
        flex-flow: column nowrap;
        background-color: var(--main-color);
        position: fixed;
        transform: ${({ open }) => open ? 'translateX(0)' : 'translateX(100%)'};
        bottom: 0;
        right: 0;
        width: 100%;
        transition: transform 0.3s ease-in-out;
        margin-bottom: 80px;
        border-bottom: solid 1px var(--secondary-color);
        li {
             color: var(--secondary-color);
             margin-bottom: var(--spacing-large);
             
        }
    }
`;

const PopNav = ({ open }) => {
    return (
        <UL open={open}>
            <li><Link to="/" className="liLinks">Accueil</Link></li>
            <li><Link to="/roster" className="liLinks">Roster</Link></li>
            <li><Link to="/calendrier" className="liLinks">Calendrier</Link></li>
            <li><Link to='/admin' className="liLinks">🔐</Link></li>
        </UL>
    )
}

export default PopNav;