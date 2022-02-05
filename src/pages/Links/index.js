import './links.css';
import { FiArrowLeft, FiLink, FiTrash } from 'react-icons/fi'
import { Link } from 'react-router-dom'


export default function Links() {
  return (
    <div>
      <div className='links-container'>

        <div className='links-header'>
          <Link to={'/'}>
            <FiArrowLeft size={35} color='#FFF' />
          </Link>
          <h1>Meus Links</h1>
        </div>

        <div className='links-item'>
          <button className='link'>
            <FiLink size={18} color='#FFF' />
            https://bit.ly/Portfolio_GK
          </button>

          <button className='trash'>
            <FiTrash size={18} color='#FF5454' />
          </button>
        </div>

        <div className='links-item'>
          <button className='link'>
            <FiLink size={18} color='#FFF' />
            https://bit.ly/Portfolio_GK
          </button>

          <button className='trash'>
            <FiTrash size={18} color='#FF5454' />
          </button>
        </div>

      </div>
    </div>
  )
}