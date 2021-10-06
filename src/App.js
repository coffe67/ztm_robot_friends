import './App.css';
// import 'bootstrap/dist/css/bootstrap.min.css';

import Body from './layout/Body'
import Footer from './layout/Footer'
import Header from './layout/Header'
import 'tachyons'


function App() {
  return (
    <div className="App">
      <Header />
      <Body />
      <Footer />
    </div>
  );
}

export default App;
