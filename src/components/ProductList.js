import React from 'react'
import { getUsers, gotUsers } from '../actions/counterAction';

export class ProductList extends React.Component {

  constructor(props) {
    super(props);
    console.log('props=', props);
  }

  handleClick = () => {
    this.props.getUsers();
  }

  //dispatch(getUsers());

  render() {
    const { products, getUsers, dispatch } = this.props;

    // dispatch(gotUsers);
    //console.log('actions', props);

    return (
      <div>
        <button onClick={this.handleClick}>Go</button>
        <ul>
          {products.map((p) => {
            return <li key={p.id}>{p.name}</li>
          })}
        </ul>
      </div>
    )
  }

}