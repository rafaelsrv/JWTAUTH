import './App.css';
import { createContext, useContext } from 'react';

const Context = createContext()
function App() {

  const theme = 'dark';

  

  return (
    <div className="App">
      
      <Context.Provider value={ {theme, title :'Hello world!'} }>
        <Login />
      </Context.Provider>

    </div>
  );
}


function Login(){
  return <Button />;
}

function Button(){
  const ctx = useContext(Context)
  return(
    <button>{ctx.theme} - {ctx.title}</button>
  )
}

export default App;