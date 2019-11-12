import React from 'react';
import Axios from 'axios';
import "bulma/css/bulma.css";

class  App extends React.Component {
  state = {
    issues : []
  }
  
  componentDidMount = async () => {
    try {
    const res = await Axios.get('https://api.github.com/repos/facebook/create-react-app/issues');
    this.setState({issues: res.data})

  } catch (err) {
    console.log(err)
    }
  }

  render(){
    
    return (
      <div className="section">
          {this.state.issues.map((issue) => {
            return(<div className="box" key={issue.id}>
              <div>
                <h1 className="title">{issue.title}</h1>
              </div>
              <a className = "meta" href={issue.url}><p className="subtitle">{issue.url}</p></a>
              <div className="">
                <p>{issue.body}</p>
              </div>
              <br/>
              </div>)
            })}
        </div>
    );
  }
}
export default App;

