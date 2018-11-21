import React from 'react';
import ReactDOM from 'react-dom';
import FrontPage from './components/frontPage';
import Helllo from './components/helllo'
import './style/styles.css'

class Hello extends React.Component{
    render()
    {
        return(
          <div>
          <FrontPage/>
          </div>
        )
    }
}

ReactDOM.render(<Hello/>, document.querySelector('#root'));