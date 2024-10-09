import styles from "./Loader.module.css";
import { ThreeDots } from "react-loader-spinner";
const { loader } = styles;

const Loader = () => {
    return (
        <div className={loader}>
            <ThreeDots
                visible={true}
                height="80"
                width="80"
                color="blue"
                radius="9"
                ariaLabel="three-dots-loading"
                wrapperStyle={{}}
                wrapperClass=""
                margin="auto"
            />
        </div>
    );
};
export default Loader;