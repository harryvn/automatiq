import React from "react";
import Link from "@docusaurus/Link";
import styles from "./styles.module.css";
import clsx from "clsx";

export default function HomepageCTA() {
  return (
    <section className={styles.cta}>
      <div className="container">
        <div className={styles.ctaContent}>
          <div className={styles.ctaText}>
            <h2 className={styles.ctaTitle}>Ready to Master Automation?</h2>
            <p className={styles.ctaDescription}>
              Start your automation journey with our comprehensive guides and
              real-world projects designed to help you build robust test
              frameworks.
            </p>
          </div>
          <div className={styles.ctaActions}>
            <Link
              className={clsx(
                "button button--primary button--lg",
                styles.ctaPrimaryButton
              )}
              to="/docs/welcome"
            >
              Start Learning Now
            </Link>
            <Link
              className={clsx(
                "button button--outline button--lg",
                styles.ctaSecondaryButton
              )}
              to="/projects"
            >
              Browse Projects
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
