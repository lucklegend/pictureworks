import React, {Component} from 'react';
import axios from 'axios';

class GetClick extends Component{
  state = {
    numClick :""
  }
  async componentDidMount(){
    
    var apiLink = "http://localhost:8000";
    const res = await axios.get(apiLink+'/api/getClick');
    
    if(res.data.status === 200){
      var numClick = res.data.clickNum;
      this.setState({numClick})
    }
  }
  


 

  render(){
    const {date, numClick} = this.state;
    return (
      <div className="container">
        <div className="row pt-4">
          <div className="col-md-6">
            <label>Today's Total Click: {numClick}</label> <br />
            <button  className="btn btn-primary" id="btnClick">Click Me!</button>
          </div>
        </div>
      </div>
    );
  }
}

export default GetClick;