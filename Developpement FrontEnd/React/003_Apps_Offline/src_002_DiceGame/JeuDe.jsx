import React from "react"

export default class JeuDe extends React.Component {
  constructor(props) {
    super(props)
    this.state = { face: null, essai: 0, totalEssai: 4, record: 0, num: props.num, end: false }
  }
  inisialise() {
    this.setState({ face: null, essai: 0, totalEssai: 4, record: 0, num: this.state.num, end: false })
  }
  Joue() {
    const num = Math.floor(Math.random() * 6) + 1
    this.setState({ record: this.state.record + num })
    this.setState({ face: num })
    this.setState({ essai: this.state.essai + 1 })
    if (this.state.face === this.state.num) {
      this.setState({ end: true })
    }
  }
  render() {
    return (
      <div className="flex">

        <div className="flex flex-col p-8 gap-3 text-gray-700">
          {!this.state.end ?
            <div className="flex flex-col p-2 gap-3">
              <h2>Jeu De De</h2>
              {this.state.face && <h3>Face: {this.state.face}</h3>}
              <h3>nombre d'essais: {this.state.essai}</h3>
              <div>
                <button onClick={() => this.Joue()} className="px-4 py-2 bg-slate-400 rounded-lg hover:bg-slate-300">Joue</button>
              </div>
            </div>
            :
            <div className="flex flex-col p-2 gap-3">
              <p>Bravo</p>
              <p>Trys is : {this.state.essai - 1}</p>
              <button onClick={() => this.inisialise()} className="px-4 py-2 bg-slate-400 rounded-lg hover:bg-slate-300">Inisialise</button>
            </div>
          }
        </div>
        <div>
          {this.state.face && !this.state.end &&
            <img src={`/src/assets/Dice/fase${this.state.face}.png`} width={400} />
          }
        </div>
      </div>
    )
  }

}




