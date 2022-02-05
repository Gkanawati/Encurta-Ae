import './menu.css';
import { BsInstagram, BsGithub, BsLinkedin } from 'react-icons/bs'
import { Link } from 'react-router-dom';

export default function Menu() {
    return (
        <div className='menu'>
            <div className='icons-social'>

                <a className='social' href='https://github.com/Gkanawati' target='_blank' >
                    <BsGithub color='#fff' size={24} />
                </a>
                <a className='social' href='https://www.linkedin.com/in/gabrielkanawati/' target='_blank' >
                    <BsLinkedin color='#fff' size={24} />
                </a>
                <a className='social' href='https://www.instagram.com/gkanawati_/' target='_blank' >
                    <BsInstagram color='#fff' size={24} />
                </a>
            </div>
            <Link className='menu-item' to={'/links'}>
                Meus Links
            </Link>
        </div>
    )
}