import "./HomeMenu.css";
//import { makeStyles } from '@material-ui/core/styles';

const HomeMenu = () => {
    return (
        <div className="HomeMenuContainer">
            
            <button className="playButtons quickPlay">QUICK PLAY</button>
            <button className="playButtons friendPlay">INVITE FRIEND</button>
           
        </div>
      );
}
 
export default HomeMenu;