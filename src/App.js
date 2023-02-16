import React, { Component } from "react";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import News from "./components/news";
import Background from "./components/background";
import Contact from "./components/contact";
import AboutBlair from "./components/aboutBlair";
import MlsSearch from "./components/mlsSearch";
import Dashboard from "./components/dashboard";
import Communities from "./components/communities";
import OurProperties from "./components/ourProperties";
import Services from "./components/services";
import Landing from "./components/landing";
import Dash from "./components/dash";
import { AddBlogs } from "./components/addBlogs";
import MyListings from "./components/myListings";
class App extends Component {
  render() {
    return (
      <div>
        <div className="content">
          <Routes>
            <Route path="/contact" element={<Contact />} />
            <Route path="/news" element={<News />} />
            <Route path="/AboutBlair" element={<AboutBlair />} />
            <Route path="/mlsSearch" element={<MlsSearch />} />
            <Route path="/communities" element={<Communities />} />
            <Route path="/ourProperties" element={<OurProperties />} />
            <Route path="/services" element={<Services />} />
            <Route path="/background" element={<Background />} />
            <Route path="/myListings" element={<MyListings />} />
            <Route path="/dash" element={<Dash />} />
            <Route path="/" exact element={<Landing />} />
            <Route path="/contact" exact element={<Landing />} />
            <Route path="/addBlogs" element={<AddBlogs />} />
            <Route path="/dashboard" element={<Dashboard />}>
              <Route path="/dashboard/news" element={<News />} />
              <Route path="/dashboard/services" element={<Services />} />
              <Route path="/dashboard/dash" element={<Dash />} />
              <Route path="/dashboard/addBlogs" element={<AddBlogs />} />
              <Route path="/dashboard/background" element={<Background />} />
              <Route path="/dashboard/myListings" element={<MyListings />} />
              <Route
                path="/dashboard/ourProperties"
                element={<OurProperties />}
              />
            </Route>
          </Routes>
        </div>
      </div>
    );
  }
}

export default App;
