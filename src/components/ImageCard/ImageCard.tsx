import { HandleModalOpen, Image, InittialModalParams } from '../App/App.types';
import css from './ImageCard.module.css';

interface ImageCardProps {
    image: Image;
    onModalOpen: () => void;
}

const ImageCard: React.FC<ImageCardProps> = ({ image, onModalOpen }) => {
    return (
        <div className={css.boxImageCard}>
            <img
                src={image.urls.small}
                alt={image.alt_description}
                onClick={onModalOpen}
            />
        </div>
    );
};

export default ImageCard;