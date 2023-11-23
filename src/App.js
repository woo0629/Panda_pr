import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import Toolbar from './components/toolbar'
import Slide from './components/slide'
import TabBar from './components/tabBar'
import Footer from './components/footer'
import PopularProducts from './components/popularItem';

function App() {

//1120시작

  return (
    <div className="App">
        
        <Toolbar/>
        <Slide/>
        <PopularProducts/>
        <Footer/>
    </div>
  );
}

export default App;
