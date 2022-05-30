import logo from './logo.svg';
import Home from './pages/Home';
import Pages from './pages/Pages';
import Category from './components/Category';
import {BrowserRouter} from 'react-router-dom';
import Search from './components/Search';
import Header from './components/Header';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Category />
        <Search />
        <Pages />
      </BrowserRouter>
    </div>
  );
}

export default App;
