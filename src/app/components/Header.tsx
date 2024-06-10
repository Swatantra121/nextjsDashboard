"use client"; // Ajoutez ceci en haut

import React from 'react';

const Header: React.FC = () => {
  return (
   <>
    <div className="row">
      <div className="col-sm-4" />
      <div className="col-sm-4">
        <span className="active" style={{
            position: "relative",
            top: 26,
            fontSize: "larger",
            fontWeight: 900,
            color: "white",
            background: "radial-gradient(black, transparent)",
            padding: 23
}}
        >
          Vestige Management Dashboard
        </span>
      </div>
      <div className="col-sm-4">
        <img
          src="./logo.png"
          alt="Logo"
          style={{
            height: 45,
            width: 67,
            position: "relative",
            top: 16,
            left: 126
          }}
        />
      </div>
    </div>
    <div className="container-fluid">
      <div className="row" style={{ background: "#9a9a9a", padding: "17px 0px", marginTop: 28 }}>
        <div className="col-md-2">
          <div className="form-group">
            <select className="form-control">
              <option value="">Duration</option>
              <option value="Yesterday">Yesterday</option>
              <option value="This Month">This Month</option>
            </select>
          </div>
        </div>
        <div className="col-md-2">
          <div className="form-group">
            <select id="country" className="form-control">
              <option value="">Country</option>
              <option value="India">India</option>
              <option value="UAE">UAE</option>
              <option value="Nepal">Nepal</option>
            </select>
          </div>
        </div>
        <div className="col-md-2">
          <div className="form-group">
            <select id="region" className="form-control">
              <option value="">Region</option>
              <option value=""></option>
              <option value=""></option>
              <option value=""></option>
            </select>
          </div>
        </div>
        <div className="col-md-2">
          <div className="form-group">
            <select id="state" className="form-control">
              <option value="">State</option>
              <option value="Madhya Pradesh">Madhya Pradesh</option>
            </select>
          </div>
        </div>
        <div className="col-md-2">
          <div className="form-group">
            <select id="category" className="form-control">
              <option value="">Category</option>
              <option value="Agri">Agri</option>
            </select>
          </div>
        </div>
      </div>
    </div>
   </>
    
  );
};

export default Header;
