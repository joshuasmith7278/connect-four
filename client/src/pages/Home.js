import "./Home.css";
import flamingo from '../images/flamingo1.png'
import HomeMenu from "../components/homeMenu/HomeMenu";

const Home = () => {
    return ( 
        <div className="titlePage">
            <img src={flamingo} alt="flamingo" className="flamingoMain"/>
            <HomeMenu />
            <img src={flamingo} alt="flamingo" className="flamingoMain"/>
        </div>
     );
}
 
export default Home;
