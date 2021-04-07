import React from "react";

export default function About() {
  return (
    <div className="container mt-5">
      <h1 className="display-3">About us</h1>
      <p className="lead">
        We post Mets news and updates throughout the season. You can find our
        socials below. Make sure to bookmark us to keep up with all things New
        York Mets
      </p>
      <ul className="list-group">
        <li className="list-group-item">Daily Lineups</li>
        <li className="list-group-item">Injury Updates</li>
        <li className="list-group-item">Trade Rumors</li>
        <li className="list-group-item">Game highlights & Recaps</li>
        <li className="list-group-item">
          Interviews with players and coaching staff
        </li>
      </ul>
      <div className="row mt-5">
        <div className="col-sm">
          <h3 className="mb-2">Get in touch</h3>
          <ul className="list-group">
            <li className="list-group-item">
              Email: <a href="...">mets@mets.com</a>
            </li>
            <li className="list-group-item">Phone: 555-555-5555</li>
            <li className="list-group-item">
              Address: 41 Seaver Way, Queens, NY 11368
            </li>
          </ul>
        </div>
        <div className="col-sm">
          <form>
            <div className="form-group">
              <label for="exampleInputEmail1">Your email</label>
              <input
                type="email"
                className="form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
                placeholder="Email"
              />
              <small id="emailHelp" className="form-text text-muted">
                We'll never share your email with anyone else.
              </small>
            </div>
            <div className="form-group">
              <label for="exampleFormControlTextarea1">Message</label>
              <textarea
                className="form-control"
                id="exampleFormControlTextarea1"
                rows="3"
                placeholder="Your message here..."
              ></textarea>
            </div>
            <button type="submit" className="btn btn-primary">
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
