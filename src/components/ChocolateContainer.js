import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { buyChocolate } from '../redux'

const ChocolateContainer = () => {
    const chocolates = useSelector(state => state.chocolate.numOfChocolates)
    const dispatch = useDispatch()
    return (
        <div>
            <h2>No of Chocolates - {chocolates}</h2>
            <button onClick={() => dispatch(buyChocolate())}>Buy Chocolate</button>
        </div>
    )
}

export default ChocolateContainer
