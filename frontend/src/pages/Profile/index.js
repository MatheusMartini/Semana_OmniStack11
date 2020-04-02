import React, {useState, useEffect} from 'react';
import { Link, useHistory } from 'react-router-dom';
import { FiPower, FiTrash2 } from 'react-icons/fi';

import './styles.css';
import logoImg from '../../assets/logo.svg';

import api from '../../services/api';

export default function Profile(){
  const [incidents, setIncidents] = useState([]);

  const ongId = localStorage.getItem('ongId');
  const ongName = localStorage.getItem('ongName');
  const history = useHistory();

  useEffect(() => {
    api.get('profile', {
      headers:{
        Authorization: ongId
      }
    }).then( response => {
      setIncidents(response.data);
    })
  }, [ongId])

  async function handleDeleteIncident(id){
    try {
      await api.delete(`incidents/${id}`, {
        headers:{
          Authorization:ongId
        },
        setIncidents(incident.filter(incident => incident.id != id )

      })
    } catch (error) {
      alert("error when deleting case,try again ")
    }
  }

  function handleLogout(){
    localStorage.clear();
    history.pushState('/');
  }

  return (
    <div className="profile-container">
      <header>
        <img src={logoImg} alt="Be The Hero"/>
        <span>Welcome to page, { ongName}</span>

        <Link className="button" to="/incidents/new">Register new case</Link>
        <button type="button">
          <FiPower onClick={handleLogout} size={18} color="#e02041"/>
        </button>
      </header>

      <h1>Registered Cases</h1>

      <ul>
          {incidents.map(incident => (
            <li key={incident.id}>

              <strong>Case:</strong>
                <p>{incident.title}</p>

              <strong>Description:</strong>
                <p>{incident.description}</p>

              <strong>Value:</strong>
                <p>{Intl.NumberFormat('pt-BR', { style: 'currency', currency:'BRL'}).format(incident.value)}</p>

              <button onClick={() => handleDeleteIncident(incident.id)} type="button">
                <FiTrash2 size={20} color="#a8a8b3"/>
              </button>
            
            </li>
          ))}
      </ul>
    </div>
  )          
}