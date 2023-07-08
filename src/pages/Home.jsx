import {Link} from 'react-router-dom';
import BannerImage from '../assets/images/f3.jpg'
import '../assets/styles/Home.css'
const Home=()=>{
    return(
        <div className="home" style={{backgroundImage:`url(${BannerImage})`}}>
            <div className="homeCountainer"> 
               <h1>Rose Shop</h1>
               <p>Beauty, one flower at a time.</p>
               <Link to='/product'>
               <button>ORDER NOW</button>
               </Link>
            </div>
        </div>
    )
}
export default Home;