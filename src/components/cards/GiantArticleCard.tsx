import './card.scss';
import { baseURL } from '../../api.ts';
import { Article } from '../../redux/slices/articleSlice.ts';
import Timestamp from '../timestamp/Timestamp.tsx';
import OpenLinkButton from '../buttons/OpenLinkButton.tsx';

const GiantArticleCard = ({ article }: { article: Article }) => {
  const { image, name, createdAt } = article ?? {};

  return (
    <div className='giant-article-card'>
      <img src={`${baseURL}/image/${image}`} alt={name} />
      <Timestamp time={createdAt} />
      <OpenLinkButton />
    </div>
  );
};

export default GiantArticleCard;
