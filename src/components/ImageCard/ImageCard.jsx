import styles from "./ImageCard.module.css";
const { imageCard } = styles;
const ImageCard = ({ image, onClick }) => {
    // console.log(image);
    return (
        <div className={imageCard} onClick={onClick}>
            <img src={image.urls.small} alt={image.alt_description} />
            <span>Author: {image.user.name}</span>
        </div>
    );
};
export default ImageCard;