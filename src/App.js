import Tip from './Tip';
import { TipProvider } from './context/Tipcontext';
import './App.css'

function App() {
  return (
   <div className='App'>
      <h3 className='App-h3'>
        <p className='tracking-widest'>SPLI</p>
        <p className='tracking-widest'>TTER</p>
      </h3>
      <TipProvider>
         <Tip />
      </TipProvider>
   </div>
  );
}

export default App;
