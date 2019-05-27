// src/js/components/Form.jsx
import React, { Component } from "react";

class OrganizationHome extends Component {
  render() {
    return (
      <div id="orgflights">
        {/* <link rel="stylesheet" href="/css/orgflights.css" /> */}
        <div id="testo">
          <h1>
            <i>
              <b> FLIGHTS </b>
            </i>
          </h1>
          <h3>
            <b>You can use these websites to get the best deals for flights </b>
          </h3>

          <br />
          <br />
          <br />
          <br />

          <div id="kayak">
            <div class="row">
              <div class="column">
                <img src="/img/download.png" height="80px" width="80px" />
              </div>
              <div class="column">
                {" "}
                <a href="https://kayak.com">
                  {" "}
                  <h2>
                    <b> KAYAK </b>
                  </h2>
                </a>
              </div>
              <br />
              <br />
              <br />
              <p>
                {" "}
                This website helps you to find the best flights' prices. Plus,
                it offers a smart solution for having your travel itineraries
                readily accessible from home, office and on the road which you
                can explore by clicking on this link:{" "}
                <a href="https://www.kayak.com/trips">
                  {" "}
                  <b> Trips </b>
                </a>
              </p>
            </div>
          </div>

          <br />

          <div id="skyScan">
            <div class="row">
              <div class="column">
                <img src="/img/skyscanner.jfif" height="80px" width="80px" />
              </div>
              <div class="column">
                {" "}
                <a href="https://www.skyscanner.com/">
                  <h2>
                    <b> SkyScanner </b>
                  </h2>
                </a>
              </div>
              <br />
              <br />
              <br />
              <p>
                {" "}
                This exceptional website guides you through the best flights'
                prices. If your travel dates are flexible Sky Scanner can show
                you the cheapest days in the month to fly. And if you're in the
                mood for adventure you can search on Skyscanner from your chosen
                departure airport to everywhere.{" "}
              </p>
            </div>
          </div>

          <br />

          <div id="expedia">
            <div class="row">
              <div class="column">
                <img src="/img/expedia3.jpg" height="80px" width="80px" />
              </div>
              <div class="column">
                {" "}
                <a href="https://www.expedia.com/">
                  <h2>
                    <b> Expedia </b>
                  </h2>
                </a>
              </div>
              <br />
              <br />
              <br />
              <p>
                {" "}
                Expedia is a unique website that you can exploit to book the
                best flights at the most convenient prices. Would you love to
                experience a different kind of adventure? Then expedia will be
                perfect for you because it also offers the best deals for
                cruises everywhere in the world.
              </p>
            </div>
          </div>

          <br />

          <div id="momondo">
            <div class="row">
              <div class="column">
                <img src="/img/momondo.jfif" height="80px" width="80px" />
              </div>
              <div class="column">
                {" "}
                <a href="https://momondo.com">
                  <h2>
                    <b> momondo </b>
                  </h2>
                </a>
              </div>
              <br />
              <br />
              <p>
                {" "}
                momondo is what you are looking for if you want your trip to be
                filled with different kind of activities and still get all of
                this at the best price possible. In the <b>Discover</b> section
                you will be able to choose between several categories like{" "}
                <b>Beaches</b>, <b>Nature</b>, or also <b>Road Trip</b>.{" "}
              </p>
            </div>
          </div>

          <br />

          <div id="eDreams">
            <div class="row">
              <div class="column">
                <img src="/img/eDreams.jfif" height="80px" width="80px" />
              </div>
              <div class="column">
                {" "}
                <a href="https://www.edreams.com/">
                  <h2>
                    <b> eDreams </b>
                  </h2>
                </a>
              </div>
              <br />
              <br />
              <br />
              <p>
                {" "}
                eDreams searches through a lot of different websites in order to
                offer you the best deals. Do you love driving? Then you must
                know that eDreams has a car rental feature which will help you
                to find the cheapest priced cars in your destination country.{" "}
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default OrganizationHome;
