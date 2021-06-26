import '../assets/css/cardtype2.css'

import nave from '../assets/img/nave.png'

export function CardType2(props) {
  return (
    <div className="card">
      <span>Nave</span>
      <img src={nave} alt="Nave" />
      <h2>{props.naveName}</h2>
      <h3>{props.naveModel}</h3>
    </div>
  )
}