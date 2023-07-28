import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { buyCake, addCake } from './cakeSlice'

function CakeView() {
  const numOfCakes = useSelector(state => state.cake.noOfCake);
  const dispatch = useDispatch();
  return (
    <div>
      <p>Number of cake {numOfCakes}</p>
      <button onClick={() => dispatch(buyCake())}>Buy cake</button>
      <button onClick={() => dispatch(addCake(2))}>Add cake</button>
    </div>
  )
}

export default CakeView