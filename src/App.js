import logo from './logo.svg';
import './App.css';
import Head from './component/Head/Head';
import Home from './component/Home/Home';
import { createContext, useState } from 'react';
import CategoryDetail from './component/CategoryDetail/CategoryDetail';
import Category from './component/CategoryDetail/Category/Category';

 export const categoryContext = createContext();



function App() {
  const [clicked, setClicked] = useState('laptop');

  return (
    <categoryContext.Provider className="App" value = {[clicked, setClicked]}>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>nuber count: {clicked}</p>
       <Head></Head>
       <Category></Category>
       
       <Home clicked= {clicked}></Home>
       <CategoryDetail clicked = {clicked}>  </CategoryDetail>

      </header>
    </categoryContext.Provider>
  );
}

export default App;
