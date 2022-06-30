import './App.css';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Home from './pages/PokemonList';
import PokemonDetail from './pages/PokemonDetail';


function App() {
  return (
    <BrowserRouter>
      <Routes>
          <Route  path="/" index element={<Home />} />
          <Route path="pokedex/:id" element={<PokemonDetail />} />
          {/* <Route path="teams" element={<Teams />}>
          <Route path=":teamId" element={<Team />} />
          <Route path="new" element={<NewTeamForm />} />
          <Route index element={<LeagueStandings />} />
      </Route> */}
    </Routes>
  </BrowserRouter>
  );
}

export default App;
