import './App.css';

import SearchBar from 'components/SearchBar/SearchBar';
import Recipes from 'components/Recipes/Recipes';
import ViewRecipeSection from 'components/ViewRecipeSection/ViewRecipeSection';

function App() {
  return (
    <div className="App">
      <SearchBar />
      <div className="MainContent">
        <Recipes />
        <ViewRecipeSection />
      </div>
    </div>
  );
}

export default App;
