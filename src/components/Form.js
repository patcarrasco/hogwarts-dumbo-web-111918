import React, {Component} from "react"

export default class Form extends Component {
    state = {
        name: "",
        gif: ""
    }

    changeInput = (e) => {
        this.setState({
            [e.target.name] : e.target.value
        })
    }

    submitHandler = (e) => {
        e.preventDefault()
        this.props.formInfoGrab(this.state)
    }
    
    
    render() {
        return (
            <form onSubmit={this.submitHandler} >
                <input placeholder="Name" name="name" value={this.state.name} onChange={this.changeInput} />
                <input placeholder="Gif" name="gif" value={this.state.gif} onChange={this.changeInput} />
                <button> Add Hog </button>
            </form>
        )
    }
}