import './App.css';
import Card from './components/Card';
import Button from './components/Button';
import ToggleSwitch from './components/ToggleSwitch';
import { ThemeContext, themes } from './themeContext';
import { useState, useEffect, useContext } from 'react';

function App() {

  const [theme, setTheme] = useState(themes.dark);
  
  
  const toggleTheme = () => {
    setTheme((previousValue) =>
      previousValue === themes.light ? themes.dark : themes.light
      );
  };
  //getting the whole background to toggle.
  useEffect(() => {
    document.body.style.background = theme.background;
    
  }, [theme]);

  return (
    <ThemeContext.Provider value={{ theme }}> 
    <div className="App" >
      <header className="header" style={{ backgroundColor: theme.background}} >
        <div className="header-content">
          <h2 style={{color: theme.textColor}}>Dark Mode Exercise</h2>
          <ToggleSwitch onToggle = {toggleTheme} />
        </div>
      </header>
      <div className="main-container">
        <Card style={{ justifyContent: 'space-between', color: theme.textColor }}>
          A card with stuff
          <Button label="Click me" onClick={() => {}} />
        </Card>
      </div>
    </div>
    </ThemeContext.Provider>
  );
}

export default App;
