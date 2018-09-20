import React from 'react'
import { getUsers } from '../actions/counterAction';

export class ProductList extends React.Component {

  constructor(props) {
    super(props);
  }

  handleClick = () => {
    console.log('hi');
  }

  //dispatch(getUsers());

  render() {
    const { products, getUsers, dispatch } = this.props;

    //console.log('actions', props);

    return (
      <div>
        <button onClick={this.handleClick}>Go</button>
        <ul>
          {products.map((p) => {
            return <li>{p.name}</li>
          })}
        </ul>
      </div>
    )
  }

}