import '../assets/css/cardfilme.css'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faInfoCircle } from '@fortawesome/free-solid-svg-icons'
import { faShareAlt } from '@fortawesome/free-solid-svg-icons'


export function CardFilme(props) {
  let imageFilm;
  console.log(parseInt(props.imgId))
  switch (parseInt(props.imgId)) {
    case 1:
      imageFilm = "https://i.ibb.co/tsp8srD/image.png";
      break;
    case 2:
      imageFilm = "https://i.ibb.co/W2JKCdJ/1.png";
      break;
    case 3:
      imageFilm = "https://i.ibb.co/fNBf2cD/2.png";
      break;
    case 4:
      imageFilm = "https://i.ibb.co/9Nk0vW3/3.png";
      break;
    case 5:
      imageFilm = "https://i.ibb.co/SBvXKVx/4.png";
      break;
    case 6:
      imageFilm = "https://i.ibb.co/WyZqJbm/5.png";
      break;
    default:
      imageFilm = "teste"
      break;
  }
  console.log(imageFilm)
  return (
    <div className="card">
      <span>Filme</span>
      <div className="content">
        <div className="img-area">
          <img src={imageFilm} alt="img plaholder" />
        </div>
        <div className="area-right">
          <div className="infos">
            <h2>{props.title}</h2>
            <h3>Diretor: {props.director} | Produção: {props.producer}</h3>
            <p>{props.text}</p>
          </div>
          <div className="buttons">
            <button>
              <FontAwesomeIcon className="icon" icon={faInfoCircle} />
              Ver Mais
            </button>
            <FontAwesomeIcon className="shareIcon" icon={faShareAlt} />
          </div>
        </div>
      </div>
    </div>
  )
}