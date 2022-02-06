import { useState } from 'react';
import { FiLink } from 'react-icons/fi';
import './home.css';
import Menu from '../../components/menu';
import LinkItem from '../../components/LinkItem';
//services
import api from '../../services/api';
import { saveLink } from '../../services/storedLinks'

export default function Home() {

    const [link, setLink] = useState('');
    const [data, setData] = useState({});
    const [showModal, setShowModal] = useState(false);

    async function handleShortLink() {
        try {
            const response = await api.post('/shorten', {
                long_url: link
            })

            setData(response.data);
            setShowModal(true);

            saveLink('@encurtaLink', response.data)

            setLink('');
            setShowModal(true);
        } catch {
            alert("Ops, parace que algo deu errado!");
            setLink('');
        }
    }

    return (
        <div className="container-home">
            <Menu />
            <div className="logo">
                <img src="logo.png" alt="Kanawati Link Logo" />
                <h1>Encurta Aê</h1>
                <span>Cole seu link para encurtar 🤙👇</span>
            </div>

            <div className="area-input">
                <div className='input-link'>
                    <FiLink size={24} color='#FFF' />
                    <input
                        placeholder='Cole seu Link aqui..'
                        value={link}
                        onChange={(e) => setLink(e.target.value)}
                    />
                </div>
                <button className='btn-link'
                    onClick={handleShortLink}
                >
                    Encurtar Link
                </button>
            </div>

            {showModal && (
                <LinkItem
                    closeModal={() => setShowModal(false)}
                    content={data}
                />
            )}

        </div>
    )
}