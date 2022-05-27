import React from "react";
import clsx from "clsx";
import Layout from "@theme/Layout";
import Link from "@docusaurus/Link";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import styles from "./index.module.css";
import Card from "../components/card";
import Player from "react-player";

function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <header className={clsx("hero hero--primary", styles.heroBanner)}>
      <div className="container">
        <h1 className="hero__title">{siteConfig.title}</h1>
        <p className="hero__subtitle">{siteConfig.tagline}</p>
        <div className={styles.buttons}>
          <Link
            className="button button--secondary button--lg"
            to="/docs/intro"
          >
            SimpleQ Intro - 5min ⏱️
          </Link>
        </div>
        <div style={{ marginTop: "12px" }} className={styles.buttons}>
          <Link
            className="button button--secondary button--md"
            to="https://github.com/proofgeist/SimpleQ/archive/refs/tags/v1.2.0.zip"
          >
            Download Version 1.2
          </Link>
        </div>
      </div>
    </header>
  );
}

export default function Home() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout
      title={`Hello from ${siteConfig.title}`}
      description="Description will go into a meta tag in <head />"
    >
      <HomepageHeader />

      <div>
        <main style={{ flexGrow: 20 }}>
          <div style={{ height: "40px" }}></div>
          <div class="container">
            <div class="row">
              <div class="col col--4">
                <div class="col-demo">
                  <Card
                    header={<h3>Introduction</h3>}
                    body={
                      <p>
                        SimpleQ is a messaging service that allows applications
                        to work together in a loosely-coupled fashion.
                      </p>
                    }
                    footer={
                      <Link
                        className="button button--primary button--md"
                        to="/docs/intro"
                      >
                        Read more...
                      </Link>
                    }
                  ></Card>
                </div>
              </div>
              <div class="col col--4">
                <div class="col-demo">
                  <Card
                    header={<h3>Step by Step Guide</h3>}
                    body={
                      <p>
                        There is a step by step guide to help you get setup and
                        get familiar with the main concepts, behind effectively
                        using SimpleQ in your FileMaker system. .{" "}
                      </p>
                    }
                    footer={
                      <Link
                        className="button button--primary button--md"
                        to="/docs/getting-started-guide/intro"
                      >
                        Learn more...
                      </Link>
                    }
                  ></Card>
                </div>
              </div>
              <div class="col col--4">
                <div class="col-demo">
                  <Card
                    header={<h3>Works Great with Otto</h3>}
                    body={
                      <p>
                        Otto is not required to use SimpleQ, but it does make
                        receiving webhooks and processing them in your FileMaker
                        Applications
                      </p>
                    }
                    footer={
                      <Link
                        _target="_blank"
                        className="button button--primary button--md"
                        to="https://www.ottofms.com/docs/developer-api/receiving-web-hooks"
                      >
                        Learn about Otto
                      </Link>
                    }
                  ></Card>
                </div>
              </div>
            </div>
          </div>
          <div style={{ height: "40px" }}></div>
          <div style={{ display: "flex", justifyContent: "space-around" }}>
            <h2>Getting Start Guide Video</h2>
          </div>
          <div style={{ display: "flex", justifyContent: "space-around" }}>
            <Player url={"https://vimeo.com/714595854/c5b59187e5"} />
          </div>
          <div style={{ height: "40px" }}></div>
        </main>
      </div>
    </Layout>
  );
}
