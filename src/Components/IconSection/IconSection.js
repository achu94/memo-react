import ThumbUpIcon from '@material-ui/icons/ThumbUp';
import TimerIcon from '@material-ui/icons/Timer';
import BeenhereIcon from '@material-ui/icons/Beenhere';

import './IconSection.css';

const IconSection = () => {

    return (
        <div className="main main-icon" >
            <div className="icon-zufrieden">
                <div><ThumbUpIcon fontSize="large" style={{ color: "#438FB0" }} /> <p> Zufriedenheit </p> </div>
                <div><TimerIcon fontSize="large" style={{ color: "#438FB0" }} /> <p> Püntlichkeit </p> </div>
                <div><BeenhereIcon fontSize="large" style={{ color: "#438FB0" }} /> <p> Langjärigkeit </p> </div>
            </div>
        </div>
    );
}

export default IconSection;