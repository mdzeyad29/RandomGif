import { Spinner } from './Spinner';
import { useGif } from '../hooks/useGif';
export const Random = () => {
    const {gif,loading,fetchData} = useGif();
function clickHandler(){
   fetchData();
    }
  return (
    <div className="flex flex-col items-center w-1/2 bg-green-500 border border-black rounded-lg gap-y-5 ">
    <h1   className='mt-[15px]'>A RANDOM GIF</h1>
    {
      loading ?(<Spinner/>):(<img src={gif}  alt='not ' width={450}></img>)
    }
        <button onClick={clickHandler}
         className='w-10/12 text-lg rounded-sm pymb--1 bg-slate-400 mb-[20px]' >Generate</button>
    </div>
  )
}
