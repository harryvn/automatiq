import clsx from "clsx";
import Link from "@docusaurus/Link";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Layout from "@theme/Layout";
import HomepageFeatures from "@site/src/components/HomepageFeatures";
import HomepageCTA from "@site/src/components/HomepageCTA";

import Heading from "@theme/Heading";
import styles from "./index.module.css";

function HomepageHeader() {
  const {
    siteConfig: { title, tagline },
  } = useDocusaurusContext();
  return (
    <header className={clsx("hero hero--primary", styles.heroBanner)}>
      <div className="container">
        <div className={styles.heroContent}>
          <div className={styles.heroText}>
            <Heading as="h1" className="hero__title">
              {title}
            </Heading>
            <p className="hero__subtitle">{tagline}</p>
            <div className={styles.heroDescription}>
              <p>
                Master automation testing with our comprehensive guides,
                real-world projects, and industry best practices. Learn from
                practical examples and build robust automation frameworks.
              </p>
            </div>
            <div className={styles.buttons}>
              <Link
                className={clsx(
                  "button button--secondary button--lg",
                  styles.primaryButton
                )}
                to="/docs/welcome"
              >
                Get Started
              </Link>
              <Link
                className={clsx(
                  "button button--outline button--lg",
                  styles.secondaryButton
                )}
                to="/projects"
              >
                View Projects
              </Link>
            </div>
          </div>
          <div className={styles.heroVisual}>
            <div className={styles.heroImage}>
              <div className={styles.codeBlock}>
                <div className={styles.codeHeader}>
                  <span className={styles.codeDot}></span>
                  <span className={styles.codeDot}></span>
                  <span className={styles.codeDot}></span>
                </div>
                <pre className={styles.codeContent}>
                  <code>{`// Selenium WebDriver Example
WebDriver driver = new ChromeDriver();
driver.get("https://example.com");

WebElement element = driver.findElement(
  By.cssSelector(".search-input")
);
element.sendKeys("automation");
element.submit();`}</code>
                </pre>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

export default function Home() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout>
      <HomepageHeader />
      <main>
        <HomepageFeatures />
        <HomepageCTA />
      </main>
    </Layout>
  );
}
