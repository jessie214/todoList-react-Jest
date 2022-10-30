import React, { Component } from 'react';
import '../style.css';

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value:''
    }
  }

 handleInputChange = (e) => {
    this.setState({
      value:e.target.value
    })    
  }

  handleInputKeyUp = (e) => {
    if (e.keyCode === 13 && this.state.value) {
      this.props.addUndoItem(this.state.value)
      this.setState({value:''})
    }
  }

  render() {
    return (
      <div className='header'>
        <div className='hader-content'>
        TodoList
          <input data-test="input"
            placeholder='addtodo'
            className='header-input'
            value={this.state.value}
            onChange={this.handleInputChange}
            onKeyUp={this.handleInputKeyUp}
        /> 
      </div>               
    </div>
    )
  }
}
// const Header = (props) => {
//   const [value, setValue] = useState('');
//   const handleInputChange = (e) => {
//     if (e) {
//       setValue(e.target.value)
//     console.log(e.target.value)
//     }
    
//   }
//   const handleInputKeyUp = (e) => {
//     if (e.keyCode === 13 && value) {
//       props.addUndoItem(value)
//     }
//   }
//   return (
//     <div>
//       <input
//         data-test="input"
//         className='searchInput'
//         value={value}
//         onChange={(e) => handleInputChange(e)}
//         onKeyUp={handleInputKeyUp}
//       />
//     </div>
//   )
// }

export default Header;