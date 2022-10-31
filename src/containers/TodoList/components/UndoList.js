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
      <div className='Undo-List'>
        <div className='undo-list-title'>
           List in progress
          <div data-test="count" className='undo-list-count'>{list.length}</div>  
        </div>          
        <ul className='undo-list-content'>
          {
            list.map((item, index) => {
              return (
                <li data-test="list-item" key={`${item}-${index}`} className='undo-list-item'>
                  {item}
                  <div className="undo-list-delete" data-test="delete-item" onClick={()=>deleteItem(index)}>-</div>
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