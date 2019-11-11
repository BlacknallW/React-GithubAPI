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
        <div className="box">
          {this.state.issues.map((issue) => {
            return(<div className="content justified aligned" key={issue.id}>
              <div>
                <h1>{issue.title}</h1>
              </div>
              <a className = "meta" href={issue.url}>{issue.url}</a>
              <div className="description has-text-justified">
                <p>{issue.body}</p>
              </div>
              <br/>
              </div>)
            })}
            </div>
        </div>
    );
  }
}
export default App;

