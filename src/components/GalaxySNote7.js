import React from "react"
import wreee from '../assets/wreee.mp3';
import exclaim from '../assets/exclaim.mp3';
import exclamation from "../assets/exclamation.png"


export default class GalaxySNote7 extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      panicked: false,
    }

    this.squeelAudio = new Audio(wreee);
    this.exclaimAudio = new Audio(exclaim);
    this.exclaimAudio.addEventListener("ended", () => {
      this.throwAFit()
    }, false)
  }

  throwAFit = (vibe) => {
    if(this.state.panicked === "true"){ 
      vibe = "inhospitable"
    }
    return this.props.alterEnvironment(vibe)
  }

  relax = () => {
    let panicked = this.state.panicked
    this.setState({panicked: !panicked})
  }

  exclaim = () => {
    this.setState({panicked : true})
    if (this.state.panicked) return
    this.exclaimAudio.play()
    this.squeelAudio.play()
    setTimeout(this.relax, 2000 )
  }

  panic = () => (<img id="galaxy-exclamation" className="exclamation" src={exclamation} alt="" />)

  render() {
    return(
      <div id="galaxy-s-note" onClick={this.exclaim}>
        {(this.state.panicked) ? this.panic() : null}
      </div>
    )
  }
}
