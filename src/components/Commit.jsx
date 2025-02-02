import React from 'react'

const Commit = () => {
    
  return (
    <div className="cardCont">
        <div className="card">
        <h4>Owner: {item.owner.login}</h4>
        <p><b>Description: </b>{item.description}</p>
        <h4>Star Count: {item.stargazers_count}</h4>
        <h4>Fork Count: {item.forks_count}</h4>
        <h4>Primary Language: {item.language}</h4>
        </div>
  </div>

  )
}

export default Commit
