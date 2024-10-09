import { HandleLoadMore } from '../App/App.types';
import css from './LoadMoreBtn.module.css';

interface LoadMoreBtnProps {
    onLoadMoreBtn: HandleLoadMore;
}

const LoadMoreBtn: React.FC<LoadMoreBtnProps> = ({ onLoadMoreBtn }) => {
    return (
        <>
            <button type="button" onClick={onLoadMoreBtn} className={css.loadMoreBtn}>
                Load more
            </button>
        </>
    );
};

export default LoadMoreBtn;