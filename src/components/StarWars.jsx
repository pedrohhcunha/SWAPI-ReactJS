import React from 'react';
import '../assets/css/global.css';
import '../assets/css/starwars.css';

import logoSWImg from '../assets/img/logo.png';
import { Filmes } from './Filmes';
import { Naves } from './Naves'

export function StarWars() {
  return (
    <div>
      <header id="header">
        <img src={logoSWImg} alt="Logo Star Wars" />
        <nav>
          <ul>
            <li><a className="active" href="#filmes">Filmes</a></li>
            <li><a href="#naves">Naves</a></li>
          </ul>
          <a href="https://swapi.dev/">Acessar SWAPI</a>
        </nav>
      </header>
      <Filmes />
      <Naves />
      <footer>
        <span>Desenvolvido por @pedrohhcunha</span>
      </footer>
      <aside><a href="#header">Voltar ao topo</a></aside>
    </div>
  )
}