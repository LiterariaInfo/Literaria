import './card.scss';
import { baseURL } from '../../api.ts';
import { Article } from '../../redux/slices/articleSlice.ts';
import Timestamp from '../timestamp/Timestamp.tsx';
import OpenLinkButton from '../buttons/OpenLinkButton.tsx';

const GiantArticleCard = ({ article }: { article: Article }) => {
  const { image, name, createdAt } = article;

  return (
    <div className='large-article-card'>
      <img src={`${baseURL}/image/${image}`} alt={name} />
      <Timestamp className='outer-time-stamp' time={createdAt} />
      <OpenLinkButton className='outer-open-link-button' />
    </div>
  );
};

export default GiantArticleCard;
