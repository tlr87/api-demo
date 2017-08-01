import React from 'react'
import request from 'superagent'
import {HashRouter as Router, Route, Link} from 'react-router-dom'



class RepoDetail extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      description: []
    }
  }
  render() {
    return (
      <div>
        <h1>{this.props.description}</h1>
      </div>
    )
  }
}

export default RepoDetail
