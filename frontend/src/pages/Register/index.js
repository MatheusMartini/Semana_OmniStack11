import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { FiArrowLeft } from 'react-icons/fi'

import logoImg from '../../assets/logo.svg';

import api from '../../services/api'

import './styles.css';
import '../../global.css';

export default function Register() {
  const[name, setName] = useState('');
  const[email, setEmail] = useState('');
  const[whatsapp, setWhatsapp] = useState('');
  const[city, setCity] = useState('');
  const[uf, setUf] = useState('');
  
  const history = useHistory();

  async function handleRegister(e){
    e.preventDefault(); 

    const data = {
      name,
      email,
      whatsapp,
      city,
      uf,
    };

    try {
      const response = await api.post('ongs', data)
        alert(`your id is ${response.data.id}`)
        history.push('/');
    } catch (error) {
      alert("Error in register, try again")
    }
    
  }


  return (
    <div className="register-container">
      <div className="content">
        <section>
          <img src={logoImg} alt="Be The Hero" />

          <h1>Register</h1>
          <p>Make user registration, enter the platform and help peole find the cases of your ONG</p>
          
          <Link className='back-link' to="/">
            <FiArrowLeft size={16} color="#e02041" />
              I don't have a register
          </Link>
        </section>

        <form onSubmit={handleRegister}>

          <input 
            placeholder="Name of ONG" 
            value={name}
            onChange={ e => setName(e.target.value)}
          />

          <input 
            type="email"
            placeholder="E-mail"
            value={email}
            onChange={ e => setEmail(e.target.value)}  
          />

          <input
            placeholder="Whatsapp"
            value={whatsapp}
            onChange={ e => setWhatsapp(e.target.value)}
          />

          <div className="input-group">
            <input 
              placeholder="City"
              value={city}
              onChange={ e => setCity(e.target.value)}
            />

            <input 
              placeholder="UF" style={{ width: 80 }}
              value={uf}
              onChange={ e => setUf(e.target.value)}
            />
          </div>

          <button className="button" type="submit">Register</button>
        </form>
      </div>
    </div>
  );

}