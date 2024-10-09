import Modal from 'react-modal';
import { FaUser } from 'react-icons/fa';
import { AiFillLike } from 'react-icons/ai';
import css from './ImageModal.module.css';
import { HandleModalClose, InittialModalParams } from '../App/App.types';

interface ImageModalProps {
    onModalClose: HandleModalClose;
    modalData: InittialModalParams;
}

const ImageModal: React.FC<ImageModalProps> = ({ onModalClose, modalData }) => {
    return (
        <Modal
            className={css.modal}
            overlayClassName={css.modalOverlay}
            isOpen={modalData.modalIsOpen}
            onRequestClose={onModalClose}
            ariaHideApp={false}
        >
            <img src={modalData.urlRegular} alt={modalData.imgAlt} />
            <ul className={css.modalInfoList}>
                <li className={css.modalInfoListItem}>
                    <FaUser size="18" />
                    {modalData.userName}
                </li>
                <li className={css.modalInfoListItem}>
                    <AiFillLike size="18" />
                    {modalData.likes}
                </li>
            </ul>
        </Modal>
    );
};

export default ImageModal;