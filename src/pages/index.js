import { Link } from "gatsby";
import * as React from "react";
import Layout from "../components/Layout";
import * as styles from "../sass/home.module.scss";

const IndexPage = () => {
  // console.log(data);
  // const { description, title } = data.site.siteMetadata;
  return (
    <Layout>
      <section className={styles.header}>
        <div>
          <h2>Developper</h2>
          <h3>Develop & Deploy</h3>
          <p>UX designer & Web developper based in Madagascar</p>
          <Link className={styles.btn} to="/projects">
            My Portfolio Projects
          </Link>
        </div>
        <img src="/home.png" alt="Site banner" style={{ maxWidth: "100%" }} />
        {/* <p>
          {title} - {description}
        </p> */}
      </section>
    </Layout>
  );
};

export default IndexPage;

// export const query = graphql`
//   query SiteInfo {
//     site(siteMetadata: {}) {
//       siteMetadata {
//         description
//         title
//       }
//     }
//   }
// `;
