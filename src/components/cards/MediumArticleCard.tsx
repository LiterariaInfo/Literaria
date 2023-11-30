import './card.scss';

const MediumArticleCard = (props: { label: string; title: string; url: string; image: string }) => {
  const { label, title, image } = props;

  return (
    <div className="small-article-card">
      <div className="small-article-card-image">
        <img src={image} alt={title} />
      </div>
      <label>{label}</label>
      <h3>{title}</h3>
    </div>
  );
};

export default MediumArticleCard;
