import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { buyIceCream, addIceCream } from './iceCreamSlice'

function IceCreamView() {
    const numOfIceCream = useSelector(state => state.iceCream.noOfIceCream)
    const dispatch = useDispatch()
  return (
    <div>
      <p>Number of IceCream {numOfIceCream}</p>
      <button onClick={() => dispatch(buyIceCream())}>Buy IceCream</button>
      <button onClick={() => dispatch(addIceCream(1))}>Add IceCream</button>
    </div>
  )
}

export default IceCreamView