import React, { useState }from 'react';
import { Link, useHistory  } from 'react-router-dom'; 
import { FiArrowLeft } from 'react-icons/fi';

import './styles.css';
import '../../global.css';
import api from '../../services/api';

import logoImg from '../../assets/logo.svg';

export default function NewIncident() {

  const [title, setTitle] = useState('');
  const [description, setDescription] =useState('');
  const [value, setValue] = useState('');

  const history = useHistory();

  const ongId = localStorage.getItem(ongId);

  async function handleNewIncident(e) {
    e.preventDefault();

    const data = {
      title,
      description,
      value,
    };
    try {
      await api.post('incidents', data, {
        headers: {
          authorization: ongId, 
        }
      })
      history.push('/profile');
    } catch (error) {
      alert('Error in register new case, try again');
    }
  }

  return (
    <div className="new-incident-container">
      <div className="content">
        <section>
          <img src={logoImg} alt="Be The Hero" />

          <h1>Register new case</h1>
          <p>describe the case in detail to find a hero to solve it</p>
        
          <Link className='back-link' to="/profile">
            <FiArrowLeft size={16} color="#e02041" />
              back to home
          </Link>
        </section>

        <form onSubmit={handleNewIncident}>
          <input 
            placeholder="Title Case"
            value={title}
            onChange={e => setTitle(e.target.value)}
          />
          <textarea 
            placeholder="Descriptioin"
            value={description}
            onChange={e => setDescription(e.target.value)} 
          />
          <input 
            placeholder="Value in reais"
            value={value}
            onChange={e => setValue(e.target.value)}
          />
        
          <button className="button" type="submit">Register</button>
        </form>
      </div>
    </div>
  );
}