import './menu.css';
import { BsYoutube, BsInstagram } from 'react-icons/bs'
import { Link } from 'react-router-dom';

export default function Menu() {
    return (
        <div className='menu'>
            <div className='icons-social'>
                <a className='social' href='https://www.instagram.com/gkanawati_/' >
                    <BsInstagram color='#fff' size={24} />
                </a>
                <a className='social' href='https://www.youtube.com/channel/UCKo1CFcUkwFjIT9I_MXr6Pg' >
                    <BsYoutube color='#fff' size={24} />
                </a>
            </div>
            <Link className='menu-item' to={'/links'}>
                Meus Links
            </Link>
        </div>
    )
}