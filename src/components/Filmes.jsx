import '../assets/css/global.css'
import '../assets/css/filmes.css'
import { CardFilme } from './CardFilme'
import { filmsAPI } from '../services/API'
import { useEffect, useState } from 'react'

export function Filmes() {
  const [films, setFilms] = useState([])

  useEffect(() => {
    async function fetchData() {
      const res = await filmsAPI.get("")
      setFilms(res.data)
    }
    fetchData()
  }, []);

  if (films.results) {
    console.log(films.results[0].url.substr(-3).replace('/', '').replace('/', ''))
    return (
      <section id="filmes">
        <h1>Filmes</h1>
        <div className="area-filmes">
          {films.results.map((film) => (
            < CardFilme
              title={film.title}
              director={film.director}
              producer={film.producer}
              text={film.opening_crawl.substr(0, 255) + "..."}
              imgId={film.url.substr(-3).replace('/', '').replace('/', '')}
            />
          ))}
        </div>
      </section>
    )
  } else {
    return (
      <div></div>
    )
  }
}