import { Facebook, GitHub, Instagram, LinkedIn } from '@mui/icons-material';
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
      <Pop Data={Data8} Text="Hollywood Movies"/>
      <Pop Data={Data9} Text="Blockbuster Movies"/>
      <div className="footer">
         <div className="icons">
          <a href='https://www.facebook.com/abhinav.tushar.3'>
          <Facebook  htmlColor="white" className="muilogo"/>
          </a>
          <a href='https://github.com/ZeusAbhi' >
            <GitHub htmlColor="white" className="muilogo"/>
          </a>
          <a href="https://www.linkedin.com/in/abhinav-tushar-36149521b/">
            <LinkedIn htmlColor="white" className="muilogo"/>
          </a>
         </div>
         ©️TenFlix 2023
      </div>
    
    </>
  );
}



export default App;
