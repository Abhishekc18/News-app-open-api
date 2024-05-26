import './App.css';
import React, { Component } from 'react'
import Navbar from './Components/Navbar';
import News from './Components/News';
import {
  BrowserRouter as Router,
  Route,
  Routes
} from "react-router-dom";
import LoadingBar from 'react-top-loading-bar'

export default class App extends Component {
  pageSize = 9;
  state={
    progress:0
  }
  setProgress=(progress)=>{
    this.setState({progress:progress})
  }
  render() {
    return (
      <div>
        <Router>
          <Navbar />
          <LoadingBar height={3}
            color='#dc3545'
            progress={this.state.progress}
          />
          <Routes>
            <Route exact path="/home" element={<News setProgress={this.setProgress} pageSize={this.pageSize}  key="general" country="in" category="general" />} />
            <Route exact path="/newsapp" element={<News setProgress={this.setProgress} pageSize={this.pageSize}  key="general" country="in" category="general" />} />
            <Route exact path="/sports" element={<News setProgress={this.setProgress} pageSize={this.pageSize}  key="sports" country="in" category="sports" />} />
            <Route exact path="/science" element={<News setProgress={this.setProgress}  pageSize={this.pageSize} key="science" country="in" category="science" />} />
            <Route exact path="/entertainment" element={<News setProgress={this.setProgress} pageSize={this.pageSize}  key="entertainment" country="in" category="entertainment" />} />
            <Route exact path="/business" element={<News setProgress={this.setProgress} pageSize={this.pageSize}  key="business" country="in" category="business" />} />
            <Route exact path="/technology" element={<News setProgress={this.setProgress}  pageSize={this.pageSize} key="technology" country="in" category="technology" />} />
            <Route exact path="/health" element={<News setProgress={this.setProgress}  pageSize={this.pageSize} key="health" country="in" category="health" />} />
          </Routes>
        </Router>
      </div>
    )
  }
}
//News api key:d897fab57442444381ebbf478b2c2f32
