import './link-item.css'
import { FiX, FiClipboard } from 'react-icons/fi'
import linkCopied from '../linkCopied'

export default function LinkItem({ closeModal, content }) {

    async function copyLink() {
        await navigator.clipboard.writeText(content.link)
    }

    return (
        <div className='container-link'>
            <div className='modal-header'>
                <h2>Link Encurtado</h2>
                <button onClick={closeModal}>
                    <FiX size={28} color="#000" />
                </button>
            </div>
            <span>
                {content.long_url}
            </span>

            <button className='modal-link' onClick={copyLink}>
                {content.link}
                <linkCopied />
                <FiClipboard size={20} color='#FFF' />
            </button>
        </div>
    )
}