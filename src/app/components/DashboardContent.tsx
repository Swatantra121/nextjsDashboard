"use client"; // Ajoutez ceci en haut

import React from 'react';

const DashboardContent: React.FC = () => {
  return (
    <div className="container-fluid text-center">
   
    <div className="row" style={{ margin: "19px 0px 6px 0px" }}>
      <div className="col-sm-3">
        <div className="hex-card" style={{ background: "rgb(213 115 157)" }}>
          <div className="hex-content">
            <p>3000000</p>
            <span>Total Gross sales</span>
          </div>
        </div>
      </div>
      <div className="col-sm-3">
        <div className="hex-card" style={{ background: "rgb(126 166 224)" }}>
          <div className="hex-content">
            <p>30</p>
            <span>Total Invoices</span>
          </div>
        </div>
      </div>
      <div className="col-sm-3">
        <div className="hex-card" style={{ background: "rgb(151 208 119)" }}>
          <div className="hex-content">
            <p>30</p>
            <span>Total PV</span>
          </div>
        </div>
      </div>
      <div className="col-sm-3">
        <div className="hex-card" style={{ background: "rgb(213 115 157)" }}>
          <div className="hex-content">
            <p>30</p>
            <span>Total Quantity</span>
          </div>
        </div>
      </div>
    </div>
    <div className="row" style={{ margin: "0px 131px 0px 131px" }}>
      <div className="col-sm-4">
        <div className="hex-card" style={{ background: "rgb(126 166 224)" }}>
          <div className="hex-content">
            <p>30</p>
            <span>AOV</span>
          </div>
        </div>
      </div>
      <div className="col-sm-4">
        <div className="hex-card" style={{ background: "rgb(151 208 119)" }}>
          <div className="hex-content">
            <p>30</p>
            <span>B 2 C</span>
          </div>
        </div>
      </div>
      <div className="col-sm-4">
        <div className="hex-card" style={{ background: "rgb(213 115 157)" }}>
          <div className="hex-content">
            <p>30</p>
            <span>Unique Distributor</span>
          </div>
        </div>
      </div>
    </div>
    <div className="row" style={{ margin: "-12px 0px 6px 0px" }}>
      <div className="col-sm-3">
        <div className="hex-card" style={{ background: "rgb(213 115 157)" }}>
          <div className="hex-content">
            <p>4:5</p>
            <span>
              Orders
              <br />
              Store:Online
            </span>
          </div>
        </div>
      </div>
      <div className="col-sm-3">
        <div className="hex-card" style={{ background: "rgb(126 166 224)" }}>
          <div className="hex-content">
            <p>5:9</p>
            <span>
              E KYC
              <br />
              Approve:Reject
            </span>
          </div>
        </div>
      </div>
      <div className="col-sm-3">
        <div className="hex-card" style={{ background: "rgb(151 208 119)" }}>
          <div className="hex-content">
            <p>3:7</p>
            <span>
              Orders
              <br />
              New:Repeat
            </span>
          </div>
        </div>
      </div>
      <div className="col-sm-3">
        <div className="hex-card" style={{ background: "rgb(213 115 157)" }}>
          <div className="hex-content">
            <p>0</p>
            <span>Coming Soon</span>
          </div>
        </div>
      </div>
    </div>
    {/* Tables */}
    <div className="row">
      <div className="col-md-12">
        <div className="table-container">
          <h5>Current and Last Months Data</h5>
          <table className="table table-dark">
            <thead>
              <tr>
                <th />
                <th style={{ textAlign: "center" }}>Total Gross Sales</th>
                <th style={{ textAlign: "center" }}>Total Invoices</th>
                <th style={{ textAlign: "center" }}>Total PV</th>
                <th style={{ textAlign: "center" }}>Total Quantity</th>
                <th style={{ textAlign: "center" }}>Unique Distributor</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td style={{ textAlign: "left", fontWeight: 700 }}>This Month</td>
                <td>1000</td>
                <td>150</td>
                <td>1200</td>
                <td>800</td>
                <td>50</td>
              </tr>
              <tr>
                <td style={{ textAlign: "left", fontWeight: 700 }}>Last Month</td>
                <td>900</td>
                <td>140</td>
                <td>1100</td>
                <td>750</td>
                <td>45</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
    <hr />
    <div className="row content">
      <div className="col-md-6">
        <div className="table-container">
          <h5>Top 5 Selling</h5>
          <button type="button" className="btn btn-primary">
            Product
          </button>
          <button type="button" className="btn btn-secondary">
            Category
          </button>
          <table className="table table-dark">
            <thead>
              <tr>
                <th>S.No</th>
                <th>Name</th>
                <th>Amount</th>
                <th>QTY</th>
                <th>PV</th>
              </tr>
            </thead>
            <tbody>{/* Add rows here */}</tbody>
          </table>
        </div>
      </div>
      <div className="col-md-6">
        <div className="table-container">
          <h5>Bottom 5 Selling</h5>
          <button type="button" className="btn btn-primary">
            Product
          </button>
          <button type="button" className="btn btn-secondary">
            Category
          </button>
          <table className="table table-dark">
            <thead>
              <tr>
                <th>S.No</th>
                <th>C.Name</th>
                <th>P Name</th>
                <th>Amount</th>
                <th>QTY</th>
                <th>PV</th>
              </tr>
            </thead>
            <tbody>{/* Add rows here */}</tbody>
          </table>
        </div>
      </div>
    </div>
  </div>
  
  );
};

export default DashboardContent;
