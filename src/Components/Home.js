import React from "react";

export default function Home() {
  return (
    <div className="container mt-4">
      <div className="jumbotron">
        <h1 className="display-4">Let's Go Mets!</h1>
        <p className="lead">
          Your place for all things Mets! News, daily lineups, trade rumors,
          injury list, game recaps & more.
        </p>
        <hr className="my-4" />
        <h2>Mets get first win of season in Philidelphia.</h2>
        <p>
          A strong start from Marcus Stroman helps drive the Mets the their
          first W in 2021
        </p>
        <button className="btn btn-primary">Read More</button>
      </div>
      <div className="container">
        <div className="row">
          <div className="col-sm m-3">
            <div className="card">
              <img
                src="https://www.cleveland.com/resizer/I0pkxfItpJB5LYOa3YNG5QyJDrA=/450x0/smart/cloudfront-us-east-1.images.arcpublishing.com/advancelocal/OXHCYE52ABA3JHUW46GGDKDAWA.jpg"
                className="card-img-top"
                alt="Lindor forearm bashing Michael Conforto"
              />
              <div className="card-body">
                <h5 className="card-title">
                  Lindor deal, good long term for Mets?
                </h5>
                <p className="card-text">
                  $341M is a lot of money, but 10 years is a long time as well.
                  Were the Mets smart to lock in a superstar for the next
                  decade, or are they now stuck with
                  <a href="https://www.mlb.com/mets"> Read More...</a>
                </p>
              </div>
            </div>
          </div>
          <div className="col-sm m-3">
            <div className="card">
              <img
                src="https://sportshub.cbsistatic.com/i/r/2020/11/24/c155cec2-0c04-4f77-b245-1a40f561d63c/thumbnail/1200x675/d4f98b93107bfc2d9a8ba11e1f8a647b/luis-rojas.png"
                className="card-img-top"
                alt="Luis Rojas during a game in 2020"
              />
              <div className="card-body">
                <h5 className="card-title">
                  Looking back at Luis Rojas' First Year as a Big League Manager
                </h5>
                <p className="card-text">
                  The 2020 season started out awful for the Mets as their new
                  Manager, Carlos Beltran, was named in the Astros sign stealing
                  scandal from a few years back.{" "}
                  <a href="https://www.mlb.com/mets">Read More...</a>
                </p>
              </div>
            </div>
          </div>
          <div className="col-sm m-3">
            <div className="card">
              <img
                src="https://dynaimage.cdn.cnn.com/cnn/c_fill,g_auto,w_1200,h_675,ar_16:9/https%3A%2F%2Fcdn.cnn.com%2Fcnnnext%2Fdam%2Fassets%2F190929111511-pete-alonso-new-york-mets-record-trnd.jpg"
                className="card-img-top"
                alt="Alonso raises his arms as he breaks the Rookie HR record"
              />
              <div className="card-body">
                <h5 className="card-title">
                  Can Pete Bounce Back After a slump of a 2020 Season?
                </h5>
                <p className="card-text">
                  Pete Alonso made a name for himself in 2019 when he broke
                  Aaron Judges rookie HR record by smashing 53 Hr, which was
                  also a franchise record for New York.{" "}
                  <a href="https://www.mlb.com/mets">Read More...</a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
