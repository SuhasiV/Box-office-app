import { SearchCard, SearchImgWrapper } from '../common/SearchCard';

const ActorsCard = ({ name, image, gender, country, birthday, deathday }) => {
  return (
    <SearchCard>
      <SearchImgWrapper>
        <img src={image} alt={name} />
      </SearchImgWrapper>
      <h3>
        {name} {!!gender && `(${gender})`}
      </h3>
      <p>{gender ? `gender is ${gender}` : 'No gender known'}</p>
      <p>{country ? `Comes from ${country}` : 'No country known'}</p>

      {!!birthday && <p>Born {birthday}</p>}

      <p>{deathday ? `Died ${deathday}` : 'Alive'}</p>
    </SearchCard>
  );
};

export default ActorsCard;
