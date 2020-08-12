import { library } from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/free-solid-svg-icons";
library.add(fas);
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Li = (props) => {
    return (
        <li>{props.children}</li>
      );
}


export default Li;