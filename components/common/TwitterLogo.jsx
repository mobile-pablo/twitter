import {FontAwesomeIcon} from "@fortawesome/react-native-fontawesome";
import {faTwitter} from "@fortawesome/free-brands-svg-icons/faTwitter";
import {Colors} from "@/constants/Colors";

const TwitterLogo = () => {
    return (
        <FontAwesomeIcon icon={faTwitter} size={24} color={Colors.light.secondary}/>
    );
};

export default TwitterLogo;