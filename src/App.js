import './App.css';
import './index.css';
import { Random } from './components/Random';
import { Tag } from './components/Tag';
function App() {
  return (
    <div  className='flex flex-col w-full h-full background'>
      <h1  className='bg-white  text-center m-[40px] py-3  text-3xl rounded-md'>RANDOM GIf</h1>
      <div className='flex flex-col items-center gap-10 font-bold'>
        <Random />
        <Tag />
      </div>
    </div>
  );
}

export default App;
