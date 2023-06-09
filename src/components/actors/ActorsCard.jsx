import { Link } from 'react-router-dom';
import { SearchCard, SearchImgWrapper } from '../common/SearchCard';

const ActorsCard = ({ name, image, gender, country, birthday, deathday }) => {
  return (
    <SearchCard>
      <SearchImgWrapper>
        <img src={image} alt={name} />
      </SearchImgWrapper>
      <h1>
        {name} {!!gender && `(${gender})`}
      </h1>
      <p>{gender ? `gender is ${gender}` : 'No gender known'}</p>
      <p>{country ? `Comes from ${country}` : 'No country known'}</p>

      {!!birthday && <p>Born {birthday}</p>}

      <p>{deathday ? `Died ${deathday}` : 'Alive'}</p>

      <div>
        <Link to="/">Read More</Link>
        <button type="button">Star Me</button>
      </div>
    </SearchCard>
  );
};

export default ActorsCard;
