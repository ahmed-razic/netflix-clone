import './App.css';
import Navigation from './components/Navigation';
import Billboard from './components/Billboard';
import Titles from './components/Titles';
import Footer from './components/Footer';

function App() {
    return (
        <div className="app">
            <Navigation />
            <Billboard />
            <Titles />
            <Footer />
        </div>
    );
}

export default App;
