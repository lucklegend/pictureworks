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
  
  saveClick = async (e) =>{
    const {numClick} = this.state;
    e.preventDefault();
    document.getElementById('btnClick').innerText = 'Loading';
    document.getElementById('btnClick').disabled = true;
    var apiLink = "http://localhost:8000"
    const res = await axios.get(apiLink+'/api/saveClick');
    if(res.data.status === 200){
      this.setState({numClick:numClick+1});
      document.getElementById('btnClick').innerText = 'Click Me!';
      document.getElementById('btnClick').disabled = false;
    }
  }
  
  render(){
    const {date, numClick} = this.state;
    return (
      <div className="container">
        <div className="row pt-4">
          <div className="col-md-6">
            <label>Today's Total Click: {numClick}</label> <br />
            <button onClick={this.saveClick} className="btn btn-primary" id="btnClick">Click Me!</button>
          </div>
        </div>
      </div>
    );
  }
}

export default GetClick;