import React from "react";
import Layout from "../../components/Layout";
import * as styles from "../../sass/projects.module.scss";

export default function Projects() {
  return (
    <Layout>
      <div className={styles.portfolio}>
        <h2>Portfolio</h2>
        <h3>Projects & Website I've created</h3>
      </div>
    </Layout>
  );
}
