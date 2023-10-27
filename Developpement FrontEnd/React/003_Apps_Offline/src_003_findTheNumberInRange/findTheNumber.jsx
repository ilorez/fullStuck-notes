import React from "react"

export default class JeuDevinettes extends React.Component {
    constructor(props) {
        super(props)
        this.lastNum = null;
        this.state = { nombreADeviner: Math.floor(Math.random() * 100) + 1, essais: 20, tentaive: 0, message: 'give me a number between 1 and 100', userNum: null, end: false, max: 100, min: 1 }
    }
    inisialise() {
        this.setState({ nombreADeviner: Math.floor(Math.random() * 101), essais: 20, tentaive: 0, message: 'give me a number between 1 and 100', userNum: null, end: false })
    }
    attempt(num) {
        if (this.lastNum === num) {
            return
        }
        if (num == this.state.nombreADeviner) {
            this.setState({ message: "correct" })
            this.setState({ end: true })
        } else if (this.state.nombreADeviner < num) {
            this.setState({ message: "under", tentaive: this.state.tentaive + 1 })

        } else {
            this.setState({ message: "upper", tentaive: this.state.tentaive + 1 })
        }
        this.lastNum = num
        if (this.state.tentaive + 1 > this.state.essais) {
            this.setState({ end: true })
        }
    }

    render() {
        return (
            <div className="flex flex-col gap-2 p-8 w-10/12 bg-gray-100 rounded-lg shadow-md">
                {
                    this.state.end ? this.state.message === "correct" ?
                        <div className="flex flex-col gap-3">
                            <p>You Founed it Greate Do you want play again</p>
                            <button type="button" onClick={() => this.inisialise()} className="px-4 py-2 bg-slate-400 rounded-lg hover:bg-slate-300">Play again</button>
                        </div>
                        :
                        <div className="flex flex-col gap-3">
                            <p>Sorry you have just {this.state.essais} trys</p>
                            <button type="button" onClick={() => this.inisialise()} className="px-4 py-2 bg-slate-400 rounded-lg hover:bg-slate-300">Retry</button>
                        </div>
                        :
                        <div className="flex flex-col">

                            <div className="flex flex-col gap-3 items-center">
                                <input

                                    type="number"
                                    max={this.state.max}
                                    min={this.state.min}
                                    placeholder={"number between " + this.state.min + " and " + this.state.max}
                                    onChange={(e) => this.setState({ userNum: e.target.value })}
                                    className="w-2/4 rounded-md"
                                />
                                <button type="button" onClick={() => this.attempt(this.state.userNum)} className="px-4 py-1 bg-slate-400 rounded-lg hover:bg-slate-300">Ok</button>

                            </div>
                            <p>Tentaive: {this.state.tentaive}</p>
                            <p>Message : {this.state.message}</p>
                        </div>
                }
            </div>
        )
    }



}