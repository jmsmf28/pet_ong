import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';

import api from '../../services/api';
import './styles.css';
import logoImg from '../../assets/logo.svg'
import { FiArrowLeft } from 'react-icons/fi';

export default function Register(){
    const [name, setName] =  useState('');
    const [email, setEmail] =  useState('');
    const [whatsapp, setWhatsapp] =  useState('');
    const [city, setCity] =  useState('');

    const history = useHistory();

    async function handleRegister(e) {
        e.preventDefault();

        const data = {
            name,
            email,
            whatsapp,
            city
        };

        try {
            const res = await api.post('ongs', data);

            alert(`Seu ID de acesso: ${res.data.id}`);

            history.push('/');
        } catch (err) {
            alert('Erro no registo, tente novamente.');
        }

    }

    return (
        <div className="register-container">
            <div className="content">
                <section>
                    <img src= {logoImg} alt="Be The Hero"/>

                    <h1>Registo</h1>
                    <p>Faça o seu registo, entre na plataforma e ajude pessoas a encontrar os casos da sua ONG.</p>
                    <Link className="back-link" to="/">
                        <FiArrowLeft size={16} color="#e02041" />
                        Home
                    </Link>
                </section>
                <form onSubmit={handleRegister}>
                    <input 
                        placeholder="Nome da ONG"
                        value={name} 
                        onChange={e => setName(e.target.value)}
                    />
                    <input type="email" 
                        placeholder="E-mail"
                        value={email} 
                        onChange={e => setEmail(e.target.value)} 
                    />
                    <input 
                        placeholder="Whatsapp"
                        value={whatsapp} 
                        onChange={e => setWhatsapp(e.target.value)} 
                    />
                    <input 
                        placeholder="Cidade"
                        value={city} 
                        onChange={e => setCity(e.target.value)} 
                    />
                    <button className="button" type="submit">Registar</button>
                </form>
            </div>
        </div>
    )
}