//import { Link } from 'react-router-dom';

const ShowCard = ({ name, image, id, summary, onStarMeClick, isStarred }) => {
  const summaryStripped = summary
    ? summary.split(' ').slice(0, 10).join(' ').replace(/<.+>/g, '')
    : 'No Description';

  return (
    <div>
      <div>
        <img src={image} alt={name} />
      </div>
      <h3>{name}</h3>
      <p>{summaryStripped}</p>
      <div>
        <a href={`/show/${id}`} target="_blank" rel="noreferrer">
          Read More
        </a>
        <button type="button" onClick={() => onStarMeClick(id)}>
          {isStarred ? 'UNSTAR' : 'STAR'}
        </button>
      </div>
    </div>
  );
};

export default ShowCard;
