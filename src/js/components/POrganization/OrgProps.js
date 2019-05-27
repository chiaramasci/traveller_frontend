// src/js/components/Form.jsx
import React, { Component } from "react";

class OrganizationHome extends Component {
  render() {
    return (
      <div id="orgprops">
        {/* <link rel="stylesheet" href="/css/orgprops.css" /> */}
        <div id="testo">
          <h1>
            <i>
              <b> PROPS </b>
            </i>
          </h1>
          <h3>
            <b>
              Here you can find articles about what you need to have when you
              travel
            </b>
          </h3>

          <br />
          <br />
          <br />
          <br />

          <div id="traveldoc">
            <div class="row">
              <div class="column">
                <img src="/img/traveldoc.png" height="70px" width="70px" />
              </div>
              <div class="column">
                {" "}
                <a href="https://officialtraveldocuments.com/">
                  <h2>
                    <b> OFFICIAL TRAVEL DOCUMENTS </b>
                  </h2>
                </a>
              </div>
              <br />
              <br />
              <br />
              <p>
                {" "}
                Here, how the title says, will tell you about the official
                travel documents you need to have for travelling, specifically
                from/to USA. It tells you everything about visa and passport,
                and gives you all the official information you need to have. It
                is pretty intuitive to interact with this page.
              </p>
            </div>
          </div>

          <br />

          <div id="international">
            <div class="row">
              <div class="column">
                <img src="/img/inter.jpeg" height="70px" width="90px" />
              </div>
              <div class="column">
                {" "}
                <a href="https://www.united.com/web/en-US/content/travel/destination/international/passport.aspx">
                  <h2>
                    <b>
                      {" "}
                      INTERNATIONAL TRAVEL
                      <br /> DOCUMENT REQUIREMENTS{" "}
                    </b>
                  </h2>
                </a>
              </div>
              <br />
              <br />
              <br />
              <p>
                {" "}
                This is a more international document requirements guide. It
                gives you information to travel in different countries,
                including in Canada, China and Australia. It is an interesting
                page, and if you want more information about anything in there,
                there is a link on the most important topics, like visa,
                Passport etc.
              </p>
            </div>
          </div>

          <br />

          <div id="europe">
            <div class="row">
              <div class="column">
                <img src="/img/europe.jpeg" height="70px" width="70px" />
              </div>
              <div class="column">
                {" "}
                <a href="https://europa.eu/youreurope/citizens/travel/entry-exit/index_en.htm">
                  <h2>
                    <b> Europa </b>
                  </h2>
                </a>
              </div>
              <br />
              <br />
              <br />
              <p>
                {" "}
                Here you will find all the burocratic stuff(id, different
                documents, passport) you will need to have when travelling in
                europe. This is for people from europe, and outside it. There
                are different sections, and it is pretty simple to understand.{" "}
              </p>
            </div>
          </div>

          <br />

          <div id="badass">
            <div class="row">
              <div class="column">
                <img src="/img/badass.jpg" height="70px" width="70px" />
              </div>
              <div class="column">
                {" "}
                <a href="https://whereintheworldisnina.com/road-trip-packing-list/">
                  <h2>
                    <b>
                      {" "}
                      EVERYTHING YOU NEED FOR <br />
                      YOUR BADASS ROAD TRIP{" "}
                    </b>
                  </h2>
                </a>
              </div>
              <br />
              <br />
              <p>
                {" "}
                This is a nice/funny post about(how the title says) "everything
                you need for your badass road trip", not only the stupid/travial
                things, but also some interesting new item, that usually people
                don't think about. Moreover on this blog, it can be found a lot
                of other articles about travel and what you need to take with
                you, on more topics; for example: "Southest Asia packing list"
                or "Anti-theft travel gear that you need".
              </p>
            </div>
          </div>

          <br />

          <div id="things">
            <div class="row">
              <div class="column">
                <img src="/img/50things.jpeg" height="70px" width="70px" />
              </div>
              <div class="column">
                {" "}
                <a href="https://www.st-christophers.co.uk/travel-tips/blogs/2017/what-to-pack-in-your-travel-backpack">
                  <h2>
                    <b>
                      {" "}
                      50 THINGS TO PACK <br /> IN YOUR TRAVEL BACKPACK{" "}
                    </b>
                  </h2>
                </a>
              </div>
              <br />
              <br />
              <br />
              <p>
                {" "}
                This, like the previous one, is a 'funny' post. There is a list
                of all the most important, you-must-have and travial things you
                need to remember, when you go around the world. A couple of them
                could appear stupid, but thinking twice you see that ,after all,
                they could be convinient.
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default OrganizationHome;
