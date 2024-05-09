import React, { Component } from "react";
import { Link } from "react-router-dom";
import NotFound404 from "../../Shared/images/404.svg";

export class NotFound extends Component {
  render() {
    return (
      <div
        className="d-flex centered container"
        style={{ textAlign: "center" }}
      >
        <div className="row">
          <div className="col-md-12">
            <div className="error-template">
              <img
                src={NotFound404}
                width="300"
                height="200"
                className="mb-3 "
                alt="Masuk"
              />
              <h1>Oops!</h1>
              <h2>404 Not Found</h2>
              <div className="error-details">
                Maaf,Halaman Tidak Ditemukan
              </div>
              <br></br>
              <div className="error-actions">
                <Link to="/" style={{ textDecoration: "none" }}>
                  <button className="button button1 mb-3">
                    <i className="fa fa-home"></i> Bawa Saya Kembali
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default NotFound;
