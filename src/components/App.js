import React, { Component } from 'react';
import '../App.css';
import Nav from './Nav'
import Form from './Form'
import hogs from '../porkers_data';
import HogsContainer from './HogsContainer'

class App extends Component {
  state = {
    hogs: hogs,
    showGreased: false
  }

  sortName(a, b) {
    if (a < b) {
      return -1
    } else {
      return 1
    }
  }

  sortWeight(a, b) {
    if (a < b) {
      return 1
    } else {
      return -1
    }
  }
 
  sortByName = () => {

    let sortedHogs = [...this.state.hogs]
    sortedHogs.sort((a, b) => this.sortName(a.name, b.name))
    this.setState({
      hogs: sortedHogs
    })
  }

   sortByWeight = () => {
    let sortedHogs = [...this.state.hogs]
    sortedHogs.sort((a, b) => this.sortWeight(a['weight as a ratio of hog to LG - 24.7 Cu. Ft. French Door Refrigerator with Thru-the-Door Ice and Water'], b['weight as a ratio of hog to LG - 24.7 Cu. Ft. French Door Refrigerator with Thru-the-Door Ice and Water']))
    this.setState({
      hogs: sortedHogs
    })
  }

  filterGreased = () => {
    let filterHogs = [...this.state.hogs]
    let filtered = filterHogs.filter(hog => hog.greased)
    this.setState({
      hogs: filtered,
      showGreased: !this.state.showGreased
    })
  }

  toggleGreased = () => {
    console.log(hogs)
    if (!this.state.showGreased) {
      this.filterGreased()
    } else {
      this.setState({
        hogs: hogs,
        showGreased: !this.state.showGreased
      })
    }
  } 

  formInfoGrab = (data) => {
    console.log(data)
    let newArr = [...this.state.hogs, data]
    this.setState({
      hogs: newArr
    })
  }



  render() {
    return (
      <div className="App">
          < Nav sortByName={this.sortByName} sortByWeight={this.sortByWeight} toggleGreased={this.toggleGreased} />
          < Form formInfoGrab = {this.formInfoGrab}/>
          < HogsContainer hogs={this.state.hogs} />
      </div>
    )
  }
}

export default App;
