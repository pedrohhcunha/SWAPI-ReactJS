import '../assets/css/global.css'
import '../assets/css/section.css'
import { CardType2 } from './CardType2'
import { navesAPI } from '../services/API'
import { useEffect, useState } from 'react'

export function Naves() {
  const [naves, setNaves] = useState([])

  useEffect(() => {
    async function fetchData() {
      const res = await navesAPI.get("")
      setNaves(res.data)
    }
    fetchData()
  }, []);

  if (naves.results) {
    console.log(naves.results)
    return (
      <section id="naves">
        <h1>Naves</h1>
        <div className="area-naves">
          {naves.results.map((nave) => (
            < CardType2
              naveName={nave.name.replace('landing', 'L.')}
              naveModel={nave.model}
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