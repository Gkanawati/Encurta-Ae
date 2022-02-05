import { Link } from 'react-router-dom';
import './error.css';

export default function Error() {
    return (
        <div className='container'>
            <img src='notfound.png' alt='Error 404' />
            <h1>Página não encontrada 🤔</h1>
            <Link className='btn' to="/">
                Voltar para Home
            </Link>
        </div>
    )
}