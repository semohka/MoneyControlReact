import {NavLink} from 'react-router-dom'

const Menu = () => {
    return (
        <nav>
            <NavLink to="." end>
                Главная
            </NavLink>
            <NavLink to="receipts">Все чеки</NavLink>
            <NavLink to="about">О нас</NavLink>
            <NavLink to="contacts">Контакты</NavLink>
        </nav>
    )
}

export default Menu

//Относительные ссылки: <Link to="."> <Link to="about"> <Link to="contacts">
//Абсолютные ссылки: <Link to="/"> <Link to="/about"> <Link to="/contacts">
