import React from 'react';
import { Brand } from '../assets/svgs';
import { NavLink, useLocation } from 'react-router-dom';

const SideBar = () => {
  const menu = [
    {
      title: "Tasks",
      icon: "fa fa-check",
    },
    {
      title: "important",
      icon: "fa fa-star",
    },
    {
      title: "complete",
      icon: "fa fa-list",
    }
  ];

  return (
    <aside>
      <NavLink to="/" className="nav-link">
        <div className="todo-brand">
          <img src={Brand} alt="" />
          <h1>TO-DO</h1>
        </div>
      </NavLink>
      <ul className="todo-menu">
        {menu.map((item, index) => (
          <li key={index}>
            <NavLink
              to={`/${item.title || ''}`}
              // activeClassName="active"
              className={`nav-link ${({ isActive }) => (isActive ? 'active' : '')}`}
            >
              <i className={item.icon}></i>
              <span>{item.title}</span>
            </NavLink>
          </li>
        ))}
      </ul>
    </aside>
  );
};

export default SideBar;
