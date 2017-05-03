import React from 'react'

const styles = {
  score: {
    color: 'green',
  },
  success: {
    color: 'limegreen',
  },
  failure: {
    color: 'red',
  },
}

class FlipApp extends React.Component {
  state = {
    score: 0,
    guessed: 'Heads',
    flipResult: 'Heads',
  }

  guess(guessed) {
    console.log('[Flip]', guessed)
  }

  reset() {
    console.log('[Flip]', 'reset')
  }

  renderOutput() {
    if (!this.state.guessed) {
      return null
    }
    if (this.state.guessed === this.state.flipResult) {
      return <p style={styles.success}>Horray! {this.state.guessed}</p>
    }
    return <p style={styles.failure}>Boohoo! {this.state.guessed}</p>
  }

  render() {
    return (
      <div className="container app-container">
        <h2>Flip</h2>
        <div className="row">
          <div className="col-md-4">
            <h3>Controls</h3>
            <div className="row">
              <div className="col-md-4">
                <button className="btn btn-primary btn-block" onClick={() => this.guess('Heads')}>Heads</button>
              </div>
              <div className="col-md-4">
                <button className="btn btn-primary btn-block" onClick={() => this.guess('Tails')}>Tails</button>
              </div>
              <div className="col-md-4">
                <button className="btn btn-default btn-block" onClick={() => this.reset()}>Reset</button>
              </div>
            </div>
          </div>
          <div className="col-md-2 col-md-offset-2">
            <h3>Output</h3>
            <div className="well">
              <span style={styles.score}>Score: <strong>{this.state.score}</strong></span>
              {this.renderOutput()}
            </div>
          </div>
        </div>
      </div>
    )
  }
}
export default FlipApp
