import React, {Component} from 'react'

export default class HogCard extends Component {
    state = {
        clicked: false,
        display: true
    }


    clickHandler = ()  => {
        this.setState({
            clicked: !this.state.clicked
        })
    }

    hideHog = () => {
         this.setState({
            display: !this.state.display
        }) 
    }

    hogInfo = () => {
        return (
            <div>
                <p> specialty : {this.props.hog.specialty} </p>
                <p> greased : {this.props.hog.greased ? "true" : "false"} </p>
                <p> weight ratio : {
                            this.props.hog["weight as a ratio of hog to LG - 24.7 Cu. Ft. French Door Refrigerator with Thru-the-Door Ice and Water"]
                        }
                </p>
                <p> medal : {
                        this.props.hog['highest medal achieved']
                        }
                </p>
                <button onClick={this.hideHog} >hide this hog</button>
            </div>
        )
    }
    

    render() {
    
        return (
            < div className = "pigTile" onClick={this.clickHandler} style={{display: this.state.display ? 'block' : 'none'}} >
                <h2>
                    {this.props.hog.name}
                </h2>

                <img alt="" src={require(`../hog-imgs/${this.props.hog.name.split(' ').join('_').toLowerCase()}.jpg`)} />

                {this.state.clicked ? this.hogInfo() : null}


            </div>
        )
    }
}