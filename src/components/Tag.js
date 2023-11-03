import React, { useState } from 'react'
import { Spinner } from './Spinner';
import { useGif } from '../hooks/useGif';

export const Tag = () => {
  const [tag,settag]= useState('');
    const {gif,loading,fetchData} = useGif();
function clickHandler(){
   fetchData();
    }
    function changeHandler(event){
       settag(event.target.value)
    }
  return (
    <div className="flex flex-col items-center w-1/2 bg-blue-500 border border-black rounded-lg gap-y-5 ">
    <h1   className='mt-[15px]'> RANDOM {tag} GIF</h1>
    {
      loading ?(<Spinner/>):(<img src={gif}  alt='not ' width={450}></img>)
    }
      <input
      className='w-10/12 text-lg rounded-sm '
      onChange={changeHandler}
      value={tag}
      />
        <button onClick={clickHandler}
         className='w-10/12 text-lg rounded-sm py-1 bg-slate-400 mb-[20px]' >Generate</button>
    </div>
  )
}
