import { Facebook, Instagram, LinkedIn } from '@mui/icons-material';
import './App.css';
import {Header} from './components/Header'
import {Pop} from './components/pop'    
import { Data,Data2, Data3, Data4, Data5, Data6, Data7, Data8, Data9} from "./data";



function App() {
  return (
    <>
      <Header/>
      <Pop Data={Data} special/>
      <Pop Data={Data2} Text="Trending Now"/>
      <Pop Data={Data3} Text="Rousing US TV Shows"/>
      <Pop Data={Data4} Text="New Releases"/>
      <Pop Data={Data5} Text="Critically Acclaimed TV Shows"/>
      <Pop Data={Data6} Text="Only on Netflix"/>
      <Pop Data={Data7} Text="Critically Acclaimed Movies"/>
      <Pop Data={Data8} Text="Award-winning Quirky US TV Comedies"/>
      <Pop Data={Data9} Text="Blockbuster Movies"/>
      <div className="footer">
         <div className="icons">
          {/* TODO: Links daal dena laude */}
          <a href='https://facebook.com/lauda'>
          <Facebook  htmlColor="white" className="muilogo"/>
          </a>
          <a href='https://instagram.com/singleforever' >
            <Instagram htmlColor="white" className="muilogo"/>
          </a>
          <a href="https://linkedin.com/kalsepadunga">
            <LinkedIn htmlColor="white" className="muilogo"/>
          </a>
         </div>
         ©️Pimza Bhaimya @TenFlix Senior SDE
      </div>
    
    </>
  );
}



export default App;
