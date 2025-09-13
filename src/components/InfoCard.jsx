import Button from './Button'
import getImageSet from '../helpers/getImageSet';
export default function InfoCard({ title, subtitle, button, image }) {
  return (
    <div
      className="info-card"
      aria-label={title}
      style={{ backgroundImage: `linear-gradient(to right, rgb(6,10,20,.8), transparent), ${getImageSet(image)}` }}
    >
      <div className="info-card__content">
        <h1 className="info-card__title">{title}</h1>
        {subtitle && <p className="info-card__subtitle">{subtitle}</p>}
        {button && (
          <div className="info-card__actions">
            <Button >{button.label}</Button>
          </div>
        )}
      </div>
    </div>
  );
};
