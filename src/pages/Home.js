import {Footer2, Features, Header, Capacitacion} from "../containers/index";
import {Carrusel} from "../components/index";
import {Bot} from '../chatbot/index';

const Home = () => {
    return (
        <div className="app">
            <Carrusel  />
            <Header />
            <Capacitacion />
            <Features />
            <Bot />
            <Footer2 />
        </div> 
    )
};

export default Home;
