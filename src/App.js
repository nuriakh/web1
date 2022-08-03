import logo from './logo.svg';


import {CTA , Brand , Navbar} from './components'
import {Footer, Blog, Possibility, Features, WhatWEB1, Header } from './container';
import './App.css'




function App() {
  return (
    <div className='App'>
      <div className='gradient__bg'>
        <Navbar/>
        <Header/>

      </div>
      <Brand/>
      <WhatWEB1/>
      <Features/>
      <Possibility/>
      <CTA/>
      <Blog/>
      <Footer/>
     </div>
  );
}

export default App;
