import React from 'react'
import {connect} from 'react-redux'
import { buyCake, buyChocolate, buyIceCream } from '../redux'

function ItemContainer(props) {
    return (
        <div>
            <h2>Item - {props.item}</h2>
            <button onClick={props.buyItem}>Buy Item</button>
        </div>
    )
}

//ownProps are the props that the component was originally receving from its parent without the redux
const mapStateToProps = (state, ownProps) => {
    const itemState = ownProps.cake ? state.cake.numOfCakes : (ownProps.iceCream ? state.iceCream.numOfIceCreams : state.chocolate.numOfChocolates)

    return {
        item: itemState
    }
}

const mapDispatchToProps = (dispatch, ownProps) => {
    const dispatchFunction = ownProps.cake ? () => dispatch(buyCake()) : (ownProps.iceCream ? () => dispatch(buyIceCream()) : () => dispatch(buyChocolate()))

    return {
        buyItem: dispatchFunction
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ItemContainer)