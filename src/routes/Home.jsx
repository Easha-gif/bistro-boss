import Banner from "../Pages/Banner";
import Chef from "../Pages/Chef";
import Different from "../Pages/Different";
import Menu from "../Pages/Menu";
import Slider from "../Pages/Slider";
import Test from "../Pages/Test";


const Home = () => {
    return (
        <div>
          <Banner></Banner> 
          <Slider></Slider> 
          <Menu></Menu>
          <Chef></Chef>
          <Different></Different>
          <Test></Test>
        </div>
    );
};

export default Home;