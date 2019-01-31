import React, {Component} from 'react'
import HogCard from './HogCard'

export default class HogsContainer extends Component {
    


    render() {

        const hogcards = this.props.hogs.map((hog, ind) => <HogCard key={ind} hog={hog} />)

        return (
            <div>
                {hogcards}
            </div>
        )
    }
}