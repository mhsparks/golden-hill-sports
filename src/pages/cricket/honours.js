import React from "react";
import Layout from "../../components/layout";

import { graphql, Link } from "gatsby";
import { faFileWord } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const HonoursPage = ({ data }) => {
  return (
    <Layout>
      <section class="hero is-primary">
        <div class="hero-body">
          <div class="container">
            <h1 class="title is-size-4">Golden Hill Cricket Club Honours</h1>
            <h2 class="subtitle is-size-6">
              Formerly known as YMCA Cricket - Founded 1878
            </h2>
          </div>
        </div>
      </section>
      <section>
        <div class="container">
          <div class="tabs is-boxed is-hidden-mobile">
            <ul>
              <li class="is-active">
                <Link to="/cricket/honours/">Senior Honours</Link>
              </li>
              <li>
                <Link to="/cricket/youthhonours/">Youth Honours</Link>
              </li>
            </ul>
          </div>
        </div>
      </section>
      <section>
        <div class="container">
          <div class="tabs is-small is-boxed is-hidden-desktop is-hidden-tablet">
            <ul>
              <li class="is-active">
                <Link to="/cricket/honours/">Senior Honours</Link>
              </li>
              <li>
                <Link to="/cricket/youthhonours/">Youth Honours</Link>
              </li>
            </ul>
          </div>
        </div>
      </section>
      <section class="section">
        <div class="container">
          <div class="card">
            <header class="card-header">
              <p class="card-header-title has-background-primary has-text-white">
                Senior Honours
              </p>
            </header>
          </div>
          <div class="columns">
            <div class="column">
              <div class="table">
                <table class="table is-bordered is-striped is-size-7 is-fullwidth">
                  <thead>
                    <tr>
                      <th>Year</th>
                      <th>Team</th>
                      <th>Competition</th>
                      <th>Honours</th>
                    </tr>
                  </thead>

                  <tbody>
                    <tr>
                      <td>1891</td>
                      <td>1sts</td>
                      <td>Bristol Cricket Cup Challenge</td>
                      <td>Champions</td>
                    </tr>
                    <tr>
                      <td>1892</td>
                      <td>1sts</td>
                      <td>Bristol Cricket Cup Challenge</td>
                      <td>Runners Up</td>
                    </tr>
                    <tr>
                      <td>1964</td>
                      <td>1sts</td>
                      <td>Bristol & District Knockout Cup</td>
                      <td>Runners Up</td>
                    </tr>
                    <tr>
                      <td>1980</td>
                      <td>1sts</td>
                      <td>1st XI Bristol & District Second Division</td>
                      <td>Runners Up</td>
                    </tr>
                    <tr>
                      <td>1985</td>
                      <td>1sts</td>
                      <td>Bristol & District Knockout Plate</td>
                      <td>Runners Up</td>
                    </tr>
                    <tr>
                      <td>1986</td>
                      <td>3rds</td>
                      <td>A XI Bristol & District Third Division South</td>
                      <td>Champions</td>
                    </tr>
                    <tr>
                      <td>1990</td>
                      <td>1sts</td>
                      <td>Bristol & District Knockout Plate</td>
                      <td>Runners Up</td>
                    </tr>
                    <tr>
                      <td>2000</td>
                      <td>2nds</td>
                      <td>2nd XI Bristol & District Second Division</td>
                      <td>Champions</td>
                    </tr>
                    <tr>
                      <td>2001</td>
                      <td>2nds</td>
                      <td>2nd XI Bristol & District Second Division</td>
                      <td>Champions</td>
                    </tr>
                    <tr>
                      <td>2004</td>
                      <td>3rds</td>
                      <td>A XI Bristol & District First Division</td>
                      <td>Runners Up</td>
                    </tr>
                    <tr>
                      <td>2005</td>
                      <td>2nds</td>
                      <td>2nd XI Bristol & District Second Division</td>
                      <td>Champions</td>
                    </tr>
                    <tr>
                      <td>2005</td>
                      <td>3rds</td>
                      <td>A XI Bristol & District First Division</td>
                      <td>Runners Up</td>
                    </tr>
                    <tr>
                      <td>2005</td>
                      <td>4ths</td>
                      <td>A XI Bristol & District Third Division</td>
                      <td>Runners Up</td>
                    </tr>
                    <tr>
                      <td>2005</td>
                      <td>1sts</td>
                      <td>Bristol Construction League</td>
                      <td>Champions</td>
                    </tr>
                    <tr>
                      <td>2006</td>
                      <td>1sts</td>
                      <td>1st XI Bristol & District Second Division</td>
                      <td>Runners Up</td>
                    </tr>
                    <tr>
                      <td>2006</td>
                      <td>2nds</td>
                      <td>2nd XI Bristol & District First Division </td>
                      <td>Champions</td>
                    </tr>
                    <tr>
                      <td>2006</td>
                      <td>3rds</td>
                      <td>A XI Bristol & District First Division</td>
                      <td>Runners Up</td>
                    </tr>
                    <tr>
                      <td>2008</td>
                      <td>2nds</td>
                      <td>2nd XI Bristol & District Senior Division</td>
                      <td>Runners Up</td>
                    </tr>
                    <tr>
                      <td>2009</td>
                      <td>2nds</td>
                      <td>2nd XI Bristol & District Senior Division</td>
                      <td>Champions</td>
                    </tr>
                    <tr>
                      <td>2009</td>
                      <td>4ths</td>
                      <td>A XI Bristol & District First Division</td>
                      <td>Champions</td>
                    </tr>
                    <tr>
                      <td>2010</td>
                      <td>1sts</td>
                      <td>Bristol & District Knockout Plate</td>
                      <td>Champions</td>
                    </tr>
                    <tr>
                      <td>2010</td>
                      <td>2nds</td>
                      <td>2nd XI Bristol & District Senior Division</td>
                      <td>Champions</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
            <div class="column">
              {" "}
              <div class="table-container">
                <table class="table is-bordered is-striped is-size-7 is-fullwidth">
                  <thead>
                    <tr>
                      <th>Year</th>
                      <th>Team</th>
                      <th>Competition</th>
                      <th>Honours</th>
                    </tr>
                  </thead>

                  <tbody>
                    <tr>
                      <td>2010</td>
                      <td>3rds</td>
                      <td>2nd XI Bristol & District Third Division</td>
                      <td>Champions</td>
                    </tr>
                    <tr>
                      <td>2010</td>
                      <td>4ths</td>
                      <td>2nd XI Bristol & District Fourth Division</td>
                      <td>Champions</td>
                    </tr>
                    <tr>
                      <td>2010</td>
                      <td>5ths</td>
                      <td>A XI Bristol & District Third Division</td>
                      <td>Runners Up</td>
                    </tr>
                    <tr>
                      <td>2011</td>
                      <td>1sts</td>
                      <td>Bristol & District Knockout Plate</td>
                      <td>Champions</td>
                    </tr>
                    <tr>
                      <td>2011</td>
                      <td>1sts</td>
                      <td>1st XI Bristol & District First Division</td>
                      <td>Champions</td>
                    </tr>
                    <tr>
                      <td>2011</td>
                      <td>3rds</td>
                      <td>2nd XI Bristol & District Second Division</td>
                      <td>Runners Up</td>
                    </tr>
                    <tr>
                      <td>2012</td>
                      <td>2nds</td>
                      <td>2nd XI Bristol & District Senior Division</td>
                      <td>Runners Up</td>
                    </tr>
                    <tr>
                      <td>2013</td>
                      <td>1sts</td>
                      <td>1st XI Bristol & District Senior Division</td>
                      <td>Champions</td>
                    </tr>
                    <tr>
                      <td>2013</td>
                      <td>2nds</td>
                      <td>2nd XI Bristol & District Senior Division</td>
                      <td>Champions</td>
                    </tr>
                    <tr>
                      <td>2014</td>
                      <td>3rds</td>
                      <td>Bristol & District Division 7</td>
                      <td>Runners Up</td>
                    </tr>
                    <tr>
                      <td>2016</td>
                      <td>1sts</td>
                      <td>Bristol & District Knockout Plate</td>
                      <td>Champions</td>
                    </tr>
                    <tr>
                      <td>2017</td>
                      <td>1sts</td>
                      <td>Gloucestershire Trophy </td>
                      <td>Champions</td>
                    </tr>
                    <tr>
                      <td>2018</td>
                      <td>5ths</td>
                      <td>Bristol & District Division 15A</td>
                      <td>Runners Up</td>
                    </tr>
                    <tr>
                      <td>2019</td>
                      <td>1sts</td>
                      <td>The Tony Hitch Cup</td>
                      <td>Runners Up</td>
                    </tr>
                    <tr>
                      <td>2019</td>
                      <td>1sts</td>
                      <td>Bristol & District Senior Division</td>
                      <td>Runners Up</td>
                    </tr>
                    <tr>
                      <td>2020</td>
                      <td>2nds</td>
                      <td>Bristol & District Pod F</td>
                      <td>Runners Up</td>
                    </tr>
                    <tr>
                      <td>2020</td>
                      <td>3rds</td>
                      <td>Bristol & District Pod T</td>
                      <td>Champions</td>
                    </tr>
                    <tr>
                      <td>2020</td>
                      <td>4ths</td>
                      <td>Bristol & District Pod V</td>
                      <td>Champions</td>
                    </tr>
                    <tr>
                      <td>2020</td>
                      <td>6ths</td>
                      <td>Bristol & District Pod W</td>
                      <td>Runners Up</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <div class="card">
                <ul>
                  <li class="panel-block">
                    <span class="icon has-addons is-left">
                      <FontAwesomeIcon icon={faFileWord} aria-hidden="true" />
                    </span>
                    <a
                      href="https://storage.googleapis.com/ghs-static/docx/ClubHonours.docx"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      &nbsp; Club Honours (download)
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default HonoursPage;
