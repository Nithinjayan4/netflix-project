import Navbar from "./Components/NavBar/Navbar";
import'./App.css'
import Banner from "./Components/Banner/Banner";
import Rowpost from "./Components/Rowpost/Rowpost";
import{action,orginals,ComedyMovies} from './urls'

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Banner/>
      <Rowpost url={orginals} title='Netflix Orginal'/>
      <Rowpost  url={action}  title='Action' isSmall/>
      <Rowpost  url={ComedyMovies}  title='ComedyMovies' isSmall/>
    </div>
  );
}

export default App;
