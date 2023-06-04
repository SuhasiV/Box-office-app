import { Link } from 'react-router-dom';

const ActorsCard = ({ name, image, gender, country, birthday, deathday }) => {
  return (
    <div>
      <div>
        <img src={image} alt={name} />
      </div>
      <h3>
        {name} {!!gender && `(${gender})`}
      </h3>
      <p>{gender ? `gender is ${gender}` : 'No gender known'}</p>
      <p>{country ? `Comes from ${country}` : 'No country known'}</p>

      {!!birthday && <p>Born {birthday}</p>}

      <p>{deathday ? `Died ${deathday}` : 'Alive'}</p>

      <div>
        <Link to="/">Read More</Link>
        <button type="button">Star Me</button>
      </div>
    </div>
  );
};

export default ActorsCard;
