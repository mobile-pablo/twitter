import {FontAwesomeIcon} from "@fortawesome/react-native-fontawesome";
import {TouchableOpacity} from "react-native";
import {faSearch} from "@fortawesome/free-solid-svg-icons/faSearch";
import styles from "@/components/home/HomeSearchBtn.style";

const HomeSearchBtn = ({handlePress}) => {
    return (
        <TouchableOpacity style={styles.btnContainer} onPress={handlePress}>
            <FontAwesomeIcon icon={faSearch}/>
        </TouchableOpacity>
    );
};

export default HomeSearchBtn;