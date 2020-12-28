import React from "react";
import Layout from "../../components/layout";
import { graphql } from "gatsby";

const SelectionPage = ({ data }) => {
  const pageData = data.allContentfulCricketSelection.nodes[0];
  return (
    <Layout>
      <section>
        <section class="hero is-primary">
          <div class="hero-body">
            <div class="container">
              <h1 class="title is-size-4">Team Selection</h1>
            </div>
          </div>
        </section>
        <section>
          <div class="card">
            <div class="card-content">
              <div class="subtitle is-6 has-text-primary">
                {pageData.title}:
              </div>
            </div>
          </div>
          {pageData.teams.map((node) => (
            <div class="card" key={node.teamName}>
              <div class="card-content">
                <div class="media">
                  <div class="media-content">
                    <p class="title is-6">{node.teamName}</p>
                    <p class="subtitle is-6">{node.fixtureName}</p>
                    <p class="subtitle is-6">
                      {node.meetDetails.map((detail) => (
                        <span key={detail}>
                          Meet at {detail}
                          <br />
                        </span>
                      ))}
                      Start: {node.startTime}
                    </p>
                    <p class="has-text-primary">
                      Please confirm with {node.confirmWith}
                    </p>
                  </div>
                </div>
                <div class="selection-content">
                  <ul>
                    {node.playerName.map((player) => (
                      <li key={player}>{player}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
          <div class="card">
            <div class="card-content">
              <div class="media">
                <div class="media-content">
                  <p class="title is-6">Reserves</p>
                </div>
              </div>
              <div class="selection-content">
                <ul>
                  {pageData.reserves &&
                    pageData.reserves.map((name) => <li key={name}>{name}</li>)}
                </ul>
              </div>
            </div>
          </div>
        </section>
      </section>
    </Layout>
  );
};
export default SelectionPage;

export const query = graphql`
  query {
    allContentfulCricketSelection {
      nodes {
        title
        reserves
        teams {
          fixtureName
          meetDetails
          playerName
          startTime
          teamName
          confirmWith
        }
      }
    }
  }
`;
