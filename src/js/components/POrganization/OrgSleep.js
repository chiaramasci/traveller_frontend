// src/js/components/Form.jsx
import React, { Component } from "react";

class OrganizationHome extends Component {
  render() {
    return (
      <div id="orgsleep">
        {/* <link rel="stylesheet" href="/css/orgsleep.css" /> */}
        <div id="testo">
          <h1 id="title">
            <i>
              <b> ACCOMMODATION </b>
            </i>
          </h1>

          <h3>
            <b>
              Here you can find the five best websites for booking rooms or/and
              appartments
            </b>
          </h3>

          <br />
          <br />
          <br />
          <br />

          <div id="trivago">
            <div class="row">
              <div class="column">
                <img src="/img/trivago.jpeg" height="70px" width="70px" />
              </div>
              <div class="column">
                {" "}
                <a href="https://www.trivago.com/?themeId=280&sem_keyword=trivago%20english&sem_creativeid=72292954089019&sem_matchtype=be&sem_network=s&sem_device=c&sem_campaignid=364001242&sem_adgroupid=1156686497063762&sem_targetid=72293138851165&cip=9981910001">
                  <h2>
                    <b> Trivago </b>
                  </h2>
                </a>
              </div>
              <br />
              <br />
              <p>
                {" "}
                Trivago allows you to compare the price of thousands of
                different accomodation websites. The interface is simple to use,
                you just have to choose the place, where you want to go, select
                the check-in and check-out dates and put the number of people
                per room. The majority of solutions are hotels.
              </p>
            </div>
          </div>

          <br />

          <div id="airbnb">
            <div class="row">
              <div class="column">
                <img src="/img/airbnb.jpeg" height="70px" width="70px" />
              </div>
              <div class="column">
                {" "}
                <a href="https://www.airbnb.com/">
                  <h2>
                    <b> Airbnb </b>
                  </h2>
                </a>
              </div>
              <br />
              <br />
              <br />
              <p>
                Airbnb has a pretty interface. From the start of the page, you
                can see how easy it is to check the different opportunities that
                this website offers. You choose where you want to go, select the
                check-in and check-out dates, and the guests' number. The
                partecularity of Airbnb is a section about possible experiences
                you can have in a city, what to see, what to do. It gives you
                different opportunities.
              </p>
            </div>
          </div>

          <br />

          <div id="booking">
            <div class="row">
              <div class="column">
                <img src="/img/booking.png" height="70px" width="90px" />
              </div>
              <div class="column">
                {" "}
                <a href="https://www.booking.com/">
                  <h2>
                    <b> Booking </b>
                  </h2>
                </a>
              </div>
              <br />
              <br />
              <br />
              <p>
                {" "}
                Booking is mainly about rooms in hotels at a good price. If you
                book on the app, you can have better prices. As the others
                possibilities here, it has a simple interface, an
                easy-understable way to select the country, the dates, and the
                people's number.{" "}
              </p>
            </div>
          </div>

          <br />

          <div id="hotels">
            <div class="row">
              <div class="column">
                <img src="/img/hotels.png" height="70px" width="70px" />
              </div>
              <div class="column">
                {" "}
                <a href="https://www.hotels.com/?pos=HCOM_EMEA&locale=en_IE">
                  <h2>
                    <b> Hotels </b>
                  </h2>
                </a>
              </div>
              <br />
              <br />
              <br />
              <p>
                {" "}
                Hotels has a simple and old-style interface. Here you can find
                thousands of hotel, appartments, resorts and holiday homes
                offers. On the website, you can find different opportunities. If
                you installed the app on the mobile phone, you will have more
                possibilities to see the possible offers.{" "}
              </p>
            </div>
          </div>

          <br />

          <div id="wimdu">
            <div class="row">
              <div class="column">
                <img src="/img/wimdu.jpeg" height="70px" width="70px" />
              </div>
              <div class="column">
                {" "}
                <a href="https://www.wimdu.com/">
                  <h2>
                    <b> Wimdu </b>
                  </h2>
                </a>
              </div>
              <br />
              <br />
              <br />
              <p>
                {" "}
                This one is in particular about appartments around the world.
                It's easy to use, it tells you the price per night, including
                the people's number. Wimdu has an easy interface to understand,
                as the others you choose the place where you are going to go,
                select the check-in and check-out dates, and the number of
                people. You can select even more comforts(like wifi or in the
                centre) in the filter part.{" "}
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default OrganizationHome;
