import Tip from './Tip';
import './App.css'
function App() {
  return (
   <div className='bg-input-300 px-0 md:px-6 py-4 font-primary flex flex-col justify-center items-center h-auto lg:h-fullv md:w-screen'>
      <h3 className='text-dark font-bold tracking-widest text-xl'>
        <p>SPLI</p>
        <p>TTER</p>
      </h3>
      <Tip />
   </div>
  );
}

export default App;
