import React from 'react'
import request from 'superagent'
import {HashRouter as Router, Route, Link} from 'react-router-dom'
import RepoDetail from './RepoDetail'

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      repos: []
    }
  }
  componentDidMount() {
    request.get('https://api.github.com/users/tlr87/repos').end((err, res) => {
      this.setState({repos: res.body})
    })
  }
  render() {
    return (
      <div>
        <h1>React development has begun!</h1>
        <Router>
          <ul>
            {this.state.repos.map((repo) => (
              <li><Link to={repo.name}>{repo.name}</Link></li>
            ))}
          </ul>
          <Route exact path="/" component={RepoDetail}/>
        </Router>
      </div>
    )
  }
}

export default App
