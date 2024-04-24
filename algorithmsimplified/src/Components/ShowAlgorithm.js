import React, { useEffect } from 'react'
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import { getSingleAlgorithm } from '../actions/algorithmActions';
function ShowAlgorithm() {
  const dispatch=useDispatch();
  const {id}=useParams();
  const {SingleAlgorithm}=useSelector(state=>state.singleAlgorithmState);
  console.log("FROM SHOW ALGORITHM"+id);
  useEffect(()=>
{
  dispatch(getSingleAlgorithm(id));
},[dispatch,id])
  return (
    <div className="container bg-white">
      {SingleAlgorithm && 
      <div className='container' key={SingleAlgorithm._id}>

      <p class="mb-3 text-xl text-black font-bold md:text-xl dark:text-black-400">{SingleAlgorithm.name}</p>
      <p class="text-gray-500  dark:text-white-400">{SingleAlgorithm.descriptions}</p>
      <div dangerouslySetInnerHTML={{__html:SingleAlgorithm.Long_description}}></div>
      </div>}


    </div>
  )
}

export default ShowAlgorithm
