import React from "react";
import clsx from "clsx";
import Layout from "@theme/Layout";
import Link from "@docusaurus/Link";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import styles from "./index.module.css";
import Card from "../components/card";

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
      <main>
        <div class="container">
          <div class="row">
            <div class="col col--4">
              <div class="col-demo">
                <Card header="SimpleQ" body="simpleQ" footer="simpleQ"></Card>
              </div>
            </div>
            <div class="col col--4">
              <div class="col-demo">
                <Card header="SimpleQ" body="simpleQ" footer="simpleQ"></Card>
              </div>
            </div>
            <div class="col col--4">
              <div class="col-demo">
                <Card header="SimpleQ" body="simpleQ" footer="simpleQ"></Card>
              </div>
            </div>
          </div>
        </div>
      </main>
    </Layout>
  );
}
