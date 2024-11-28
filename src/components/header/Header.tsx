import { FC } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAppDispatch  } from "../../hooks/redux";
import './styles.css';
import { logout } from "../../store/reducers/ActionCreators";

const Header:FC = () => {
    const email = JSON.parse(localStorage.getItem('email') || 'null'); 
    const dispatch = useAppDispatch();
    const navigate = useNavigate();

    const handleLogout = () => {
        dispatch(logout);
        navigate('/login');
    }
    return ( 
        <>  
            <header className="header">
                {!!email ? 
                (
                    <button className="header__button" onClick={handleLogout}>Выйти</button>
                )
                :
                (
                    <>
                        <Link to='/register' className="header__link">Зарегистрироваться</Link>
                        <span>|</span>
                        <Link to='/login' className="header__link">Войти</Link>
                    </>
                )
                }
            </header>
        </>
    );
}
 
export default Header;