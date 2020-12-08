import React from "react";
import Layout from "../../components/layout";
import {
  faFilePdf,
  faTable,
  faExternalLinkAlt,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const StatsPage = () => {
  return (
    <Layout>
      <section class="hero is-primary">
        <div class="hero-body">
          <div class="container">
            <h1 class="title is-size-4">Records and Statistics</h1>
          </div>
        </div>
      </section>

      <section class="section">
        <div class="container">
          <div class="columns">
            <div class="column">
              <div class="card">
                <header class="card-header">
                  <p class="card-header-title">Current Season</p>
                </header>
                <ul class="panel">
                  <li class="panel-block">
                    <span class="icon has-addons is-left">
                      <FontAwesomeIcon
                        icon={faExternalLinkAlt}
                        aria-hidden="true"
                      />
                    </span>
                    <a
                      href="https://goldenhill.play-cricket.com/Teams"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Golden Hill CC at Playcricket.com
                    </a>
                  </li>
                </ul>
              </div>
              <div class="column"></div>
              <div class="card">
                <header class="card-header">
                  <p class="card-header-title">This week's results</p>
                </header>
                <div class="card">
                  <iframe
                    title="Golden Hill on Instagram"
                    src="https://www.instagram.com/p/B6RO5Rrhv61/embed/"
                    frameborder="0"
                    allowfullscreen
                    scrolling="no"
                    allowtransparency
                    width="100%"
                    height="800"
                  ></iframe>
                </div>
              </div>
            </div>
            <div class="column">
              <div class="card">
                <header class="card-header">
                  <p class="card-header-title">Previous Seasons</p>
                </header>
                <ul class="panel">
                  <li class="panel-block">
                    <span class="icon has-addons is-left">
                      <FontAwesomeIcon icon={faFilePdf} aria-hidden="true" />
                    </span>
                    <a
                      href="https://ghs-static.storage.googleapis.com/pdf/Season_2020.pdf"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      2020
                    </a>
                  </li>
                  <li class="panel-block">
                    <span class="icon has-addons is-left">
                      <FontAwesomeIcon icon={faFilePdf} aria-hidden="true" />
                    </span>
                    <a
                      href="https://ghs-static.storage.googleapis.com/pdf/season2019.pdf"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      2019
                    </a>
                  </li>
                  <li class="panel-block">
                    <span class="icon has-addons is-left">
                      <FontAwesomeIcon icon={faFilePdf} aria-hidden="true" />
                    </span>
                    <a
                      href="https://ghs-static.storage.googleapis.com/pdf/season2018.pdf"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      2018
                    </a>
                  </li>
                  <li class="panel-block">
                    <span class="icon has-addons is-left">
                      <FontAwesomeIcon icon={faFilePdf} aria-hidden="true" />
                    </span>
                    <a
                      href="https://ghs-static.storage.googleapis.com/pdf/season2017.pdf"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      2017
                    </a>
                  </li>
                </ul>
              </div>
              <div class="column"></div>
              <div class="card">
                <header class="card-header">
                  <p class="card-header-title">Players' Career Records</p>
                </header>
                <ul class="panel">
                  <li class="panel-block">
                    <span class="icon has-addons is-left">
                      <FontAwesomeIcon icon={faTable} aria-hidden="true" />
                    </span>
                    <a
                      href="https://ghs-static.storage.googleapis.com/xls/Batting.xls"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Batting
                    </a>
                  </li>
                  <li class="panel-block">
                    <span class="icon has-addons is-left">
                      <FontAwesomeIcon icon={faTable} aria-hidden="true" />
                    </span>
                    <a
                      href="https://ghs-static.storage.googleapis.com/xls/Bowling.xls"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Bowling
                    </a>
                  </li>
                  <li class="panel-block">
                    <span class="icon has-addons is-left">
                      <FontAwesomeIcon icon={faTable} aria-hidden="true" />
                    </span>
                    <a
                      href="https://ghs-static.storage.googleapis.com/xls/Fielding.xls"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Fielding
                    </a>
                  </li>
                  <li class="panel-block">
                    <span class="icon has-addons is-left">
                      <FontAwesomeIcon icon={faTable} aria-hidden="true" />
                    </span>
                    <a
                      href="https://ghs-static.storage.googleapis.com/xls/Centurions.xls"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Centurions
                    </a>
                  </li>
                  <li class="panel-block">
                    <span class="icon has-addons is-left">
                      <FontAwesomeIcon icon={faFilePdf} aria-hidden="true" />
                    </span>
                    <a
                      href="https://storage.googleapis.com/ghs-static/pdf/AllRounders.pdf"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      All Rounders
                    </a>
                  </li>
                </ul>
              </div>
              <div class="column"></div>
              <div class="card">
                <header class="card-header">
                  <p class="card-header-title">Team Records</p>
                </header>
                <ul class="panel">
                  <li class="panel-block">
                    <span class="icon has-addons is-left">
                      <FontAwesomeIcon icon={faTable} aria-hidden="true" />
                    </span>
                    <a
                      href="https://ghs-static.storage.googleapis.com/xls/Overall-Records.xls"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Overall
                    </a>
                  </li>
                  <li class="panel-block">
                    <span class="icon has-addons is-left">
                      <FontAwesomeIcon icon={faTable} aria-hidden="true" />
                    </span>
                    <a
                      href="https://ghs-static.storage.googleapis.com/xls/1st-XI-Records.xls"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      1st XI
                    </a>
                  </li>
                  <li class="panel-block">
                    <span class="icon has-addons is-left">
                      <FontAwesomeIcon icon={faTable} aria-hidden="true" />
                    </span>
                    <a
                      href="https://ghs-static.storage.googleapis.com/xls/2nd-XI-Records.xls"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      2nd XI
                    </a>
                  </li>
                  <li class="panel-block">
                    <span class="icon has-addons is-left">
                      <FontAwesomeIcon icon={faTable} aria-hidden="true" />
                    </span>
                    <a
                      href="https://ghs-static.storage.googleapis.com/xls/3rd-XI-Records.xls"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      3rd XI
                    </a>
                  </li>
                  <li class="panel-block">
                    <span class="icon has-addons is-left">
                      <FontAwesomeIcon icon={faTable} aria-hidden="true" />
                    </span>
                    <a
                      href="https://ghs-static.storage.googleapis.com/xls/4th-XI-Records.xls"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      4th XI
                    </a>
                  </li>

                  <li class="panel-block">
                    <span class="icon has-addons is-left">
                      <FontAwesomeIcon icon={faTable} aria-hidden="true" />
                    </span>
                    <a
                      href="https://ghs-static.storage.googleapis.com/xls/5th-XI-Records.xls"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      5th XI
                    </a>
                  </li>

                  <li class="panel-block">
                    <span class="icon has-addons is-left">
                      <FontAwesomeIcon icon={faTable} aria-hidden="true" />
                    </span>
                    <a
                      href="https://ghs-static.storage.googleapis.com/xls/6th-XI-Records.xls"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      6th XI
                    </a>
                  </li>
                </ul>
              </div>
              <div class="column"></div>
              <div class="card">
                <header class="card-header">
                  <p class="card-header-title">Club Officials</p>
                </header>
                <ul class="panel">
                  <li class="panel-block">
                    <span class="icon has-addons is-left">
                      <FontAwesomeIcon icon={faFilePdf} aria-hidden="true" />
                    </span>
                    <a
                      href="https://ghs-static.storage.googleapis.com/pdf/Club-Officials.pdf"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Club Officials
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

export default StatsPage;
