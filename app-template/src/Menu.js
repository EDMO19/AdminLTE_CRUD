import React, { Component } from 'react';
import { Link, BrowserRouter } from "react-router-dom";
import { Redirect } from 'react-router';

export default class Menu extends Component {
    render() {
        return (
            <div>
  <aside className="main-sidebar">
    {/* sidebar: style can be found in sidebar.less */}
    <section className="sidebar">   
      {/* search form */}
      <form action="#" method="get" className="sidebar-form">
        <div className="input-group">
          <input type="text" name="q" className="form-control" placeholder="Search..." />
          <span className="input-group-btn">
            <button type="submit" name="search" id="search-btn" className="btn btn-flat">
              <i className="fa fa-search" />
            </button>
          </span>
        </div>
      </form>
      {/* /.search form */}
      {/* sidebar menu: : style can be found in sidebar.less */}
      <BrowserRouter>
      <ul className="sidebar-menu" data-widget="tree">
        <li className="header">MAIN NAVIGATION</li>
        <li >
          <Link to={"/employees"}>
            <i className="fa fa-dashboard" /> <span>Employees</span>
            </Link>
        </li>
        <li>
          <Link to={"/jobs"}>
            <i className="fa fa-dashboard" /> <span>Jobs</span>
            </Link>
        </li>
        <li>
          <Link to={'/enterprises'}>
            <i className="fa fa-dashboard" /> <span>Enterprises</span>
            </Link>
        </li>
        
      </ul>
      </BrowserRouter>
    </section>
    {/* /.sidebar */}
  </aside>
</div>

        )
    }
}
