import clsx from "clsx";
import Heading from "@theme/Heading";
import styles from "./styles.module.css";
import Link from "@docusaurus/Link";

const FeatureList = [
  {
    title: "Real-World Projects",
    description: (
      <>
        Browse automation projects and their documentation{" "}
        <Link to="/projects">here</Link>.
      </>
    ),
    icon: "🚀",
    color: "#28a745",
  },
  {
    title: "Comprehensive Documentation",
    description: (
      <>
        Step-by-step <Link to="/docs/welcome">Guide</Link> to help you master
        automation testing, covering the basics, advanced topics, and best
        practices.
      </>
    ),
    icon: "📚",
    color: "#007bff",
  },
  {
    title: "Expert Insights",
    description: (
      <>
        Explore the <Link to="/blog">Blogs</Link> for a range of topics on
        automation testing, featuring frameworks, insights, tips, and best
        practices.
      </>
    ),
    icon: "💡",
    color: "#ffc107",
  },
  {
    title: "Best Practices",
    description: (
      <>
        Learn industry-standard patterns and practices for building robust,
        maintainable, and scalable automation frameworks.
      </>
    ),
    icon: "✅",
    color: "#17a2b8",
  },
  {
    title: "Hands-on Experience",
    description:
      "Real projects you can clone, run, and modify to understand automation testing in practice.",
    icon: "🔧",
    color: "#6f42c1",
  },
];

function Feature({ title, description, icon, color }) {
  return (
    <div className={clsx("col col--4", styles.featureCol)}>
      <div className={styles.featureCard}>
        <div className={styles.featureIcon} style={{ backgroundColor: color }}>
          <span className={styles.iconEmoji}>{icon}</span>
        </div>
        <div className={styles.featureContent}>
          <Heading as="h3" className={styles.featureTitle}>
            {title}
          </Heading>
          <p className={styles.featureDescription}>{description}</p>
        </div>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className={styles.featuresHeader}>
          <Heading as="h2" className={styles.featuresTitle}>
            Why Choose AutoMatiQ?
          </Heading>
          <p className={styles.featuresSubtitle}>
            Everything you need to become an automation expert
          </p>
        </div>
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
