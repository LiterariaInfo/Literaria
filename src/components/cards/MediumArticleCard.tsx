import './card.scss';
import { Link } from 'react-router-dom';

const MediumArticleCard = (props: { label: string; title: string; url: string; image: string }) => {
  const { label, title, url, image } = props;

  return (
    <Link to={url}>
      <div className="small-article-card">
        <div className="small-article-card-image">
          <img src={image} alt={title} />
        </div>
        <label>{label}</label>
        <h3>{title}</h3>
      </div>
    </Link>
  );
};

export default MediumArticleCard;
