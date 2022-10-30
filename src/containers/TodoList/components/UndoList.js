import React, { Component } from 'react';
import '../style.css';

class UndoList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: '', // list number
    }
  }



  render() {
    const { list,deleteItem } = this.props;
    return (
      <div className='UndoList'>
        <div data-test="count">{list.length}</div>    
        <ul>
          {
            list.map((item, index) => {
              return (
                <li data-test="list-item" key={`${item}-${index}`}>
                  {item}
                  <span data-test="delete-item" onClick={()=>deleteItem(index)}>-</span>
                </li>
              )
            })
          }
        </ul>
      </div>
    )
  }
}


export default UndoList;