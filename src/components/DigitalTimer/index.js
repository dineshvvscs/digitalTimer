import {Component} from 'react'

import './index.css'

class DigitalTimer extends Component {
  state = {min: 25, sec: 0, isStarted: false, timerShow: 25}

  componentDidMount() {
    this.timerId = setInterval(this.tick, 1000)
  }

  componentWillUnmount() {
    clearInterval(this.timerId)
  }

  tick = () => {
    const {isStarted, min, sec} = this.state
    if (isStarted) {
      if (sec !== 0) {
        this.setState({sec: sec - 1})
      } else {
        this.setState({min: min - 1})
        this.setState({sec: 60})
      }
    }
    if (min === 0 && sec === 0) {
      this.setState({sec: 0, min: 0, isStarted: false})
    }
  }

  startTimer = () => {
    this.setState(presSate => ({isStarted: !presSate.isStarted}))
  }

  resetTimer = () => {
    this.setState({min: 25, sec: 0, isStarted: false, timerShow: 25})
  }

  decreaseMin = () => {
    const {isStarted} = this.state
    if (isStarted === false) {
      this.setState(preState => ({
        min: preState.min - 1,
        timerShow: preState.min - 1,
      }))
    }
  }

  increaseMin = () => {
    const {isStarted} = this.state
    if (isStarted === false) {
      this.setState(preState => ({
        min: preState.min + 1,
        timerShow: preState.min + 1,
      }))
    }
  }

  render() {
    const {min, sec, isStarted, timerShow} = this.state
    console.log(isStarted)
    const playImg = isStarted
      ? 'https://assets.ccbp.in/frontend/react-js/pause-icon-img.png'
      : 'https://assets.ccbp.in/frontend/react-js/play-icon-img.png'
    const playAlt = isStarted ? 'pause icon' : 'play icon'

    const timerStatus = isStarted ? 'Running' : 'Paused'
    const startStatus = isStarted ? 'Pause' : 'Start'

    let resultSec
    if (sec < 10) {
      resultSec = `0${sec}`
    } else {
      resultSec = sec
    }

    let minResult
    if (min < 10) {
      minResult = `0${min}`
    } else {
      minResult = min
    }

    return (
      <div className="backgroundContainer">
        <h1 className="headingTimer">Digital Timer</h1>
        <div className="bothContainers">
          <div className="topContainer">
            <div className="beforeImage">
              <div className="timerContainer">
                <h1 className="timer">
                  {minResult}:{resultSec}
                </h1>
                <p className="paused">{timerStatus}</p>
              </div>
            </div>
          </div>
          <div className="bottomContainer">
            <div className="startRest">
              <div className="startContainer">
                <button
                  id="reset"
                  onClick={this.startTimer}
                  className="playPauseButton"
                  type="button"
                >
                  <img
                    htmlFor="reset"
                    className="playPauseImage"
                    src={playImg}
                    alt={playAlt}
                  />
                  <p>{startStatus}</p>
                </button>
              </div>
              <div className="restContainer">
                <button
                  id="start"
                  onClick={this.resetTimer}
                  className="playPauseButton"
                  type="button"
                >
                  <img
                    htmlFor="start"
                    className="playPauseImage"
                    src="https://assets.ccbp.in/frontend/react-js/reset-icon-img.png"
                    alt="reset icon"
                  />
                  <p>Reset</p>
                </button>
              </div>
            </div>
            <p className="setaTimerLimit">Set Timer Limit</p>
            <div className="timeControlContainer">
              <button
                onClick={this.decreaseMin}
                className="addReduceButton"
                type="button"
              >
                -
              </button>
              <div>
                <p className="timmerInput">{timerShow}</p>
              </div>
              <button
                onClick={this.increaseMin}
                className="addReduceButton"
                type="button"
              >
                +
              </button>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default DigitalTimer
