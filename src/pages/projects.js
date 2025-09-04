import React, { useState } from "react";
import Layout from "@theme/Layout";
import ShowcaseCard from "../components/ShowcaseCard";
import styles from "./project.module.css";

const projects = [
  {
    title: "AutoMatiQ-CLI",
    description:
      "Interactive CLI for Test Framework Setup with project scaffolding and configuration management.",
    tags: ["CLI", "Automation", "NodeJS"],
    features: [
      "Interactive CLI",
      "Automatic Project Configuration",
      "Multiple Framework Support",
      "Smart Scaffolding",
      "Template Management",
    ],
    backgroundImage: "url('/img/cli/automatiq-cli.png')",
    backgroundSize: "cover",
    backgroundPosition: "center",
    githubUrl: "https://github.com/harryvn/automatiq-cli",
    language: "NodeJS",
    difficulty: "Beginner",
    status: "active",
  },
  {
    title: "Modular Framework in Java",
    description:
      "A production-ready, modular Selenium-based automation framework built with Java for enterprise web application testing.",
    tags: ["Java", "Selenium", "TestNG", "Docker", "Enterprise"],
    features: [
      "Modular Design",
      "Page Object Model (POM)",
      "TestNG Integration",
      "Logging and Reporting",
      "Configuration Management",
      "Cross-Browser Testing",
      "Parallel Execution",
      "Docker Support",
      "Customisable",
    ],
    backgroundImage: "url('/img/java/java.jpeg')",
    backgroundSize: "cover",
    backgroundPosition: "center",
    githubUrl: "https://github.com/harryvn/selenium-automation-framework-java",
    blogUrl: "/automatiq/blog/selenium-framework-java",
    language: "Java",
    difficulty: "Advanced",
    status: "active",
  },
  {
    title: "Minimal Framework in NodeJS",
    description:
      "A lightweight, fast selenium automation framework developed using NodeJS for modern web application testing.",
    tags: ["NodeJS", "Selenium", "Mocha", "Chai", "Modern"],
    features: [
      "PM2 Support",
      "Page Object Model (POM)",
      "Mocha Test Runner",
      "Chai Assertion Library",
      "Logging and Reporting",
      "Cross-Browser Testing",
      "Parallel Execution",
      "ES6+ Support",
      "Fast Execution",
    ],
    backgroundImage: "url('/img/javascript/javascript.png')",
    backgroundSize: "cover",
    backgroundPosition: "center",
    githubUrl: "https://github.com/harryvn/automation-framework",
    blogUrl: "/automatiq/blog/selenium-framework-javascript",
    language: "JavaScript",
    difficulty: "Intermediate",
    status: "active",
  },
  {
    title: "Dockerized Test Environment",
    description:
      "Complete containerized testing environment with Selenium Grid, test runners, and monitoring tools.",
    tags: ["Docker", "Selenium Grid", "Monitoring", "DevOps"],
    features: [
      "Selenium Grid Setup",
      "Docker Compose",
      "Monitoring Tools",
      "Log Aggregation",
      "Easy Scaling",
      "CI/CD Ready",
    ],
    backgroundImage: "url('/img/java/live-preview.avif')",
    backgroundSize: "cover",
    backgroundPosition: "center",
    blogUrl: "/automatiq/blog/docker",
    language: "Docker",
    difficulty: "Intermediate",
    status: "active",
  },
  {
    title: "Playwright Framework",
    description:
      "Modern web automation framework using Playwright for fast, reliable cross-browser testing with built-in auto-waiting and smart selectors.",
    tags: [
      "Playwright",
      "TypeScript",
      "Modern",
      "Cross-browser",
      "Auto-waiting",
    ],
    features: [
      "Cross-browser Support",
      "Auto-waiting",
      "Smart Selectors",
      "Network Interception",
      "Mobile Emulation",
      "Visual Testing",
    ],
    backgroundSize: "cover",
    backgroundPosition: "center",
    language: "TypeScript",
    difficulty: "Advanced",
    status: "coming-soon",
  },
];

const tags = [
  "All",
  "CLI",
  "Java",
  "NodeJS",
  "Selenium",
  "Docker",
  "TestNG",
  "Mocha",
  "Playwright",
];

function Projects() {
  const [selectedTag, setSelectedTag] = useState("All");

  const filteredProjects =
    selectedTag === "All"
      ? projects
      : projects.filter((project) => project.tags.includes(selectedTag));

  return (
    <Layout title="Projects Showcase">
      {/* Enhanced Hero Section */}
      <header className={styles.pageHeader}>
        <div className={styles.heroContent}>
          <h1 className={styles.heroTitle}>Project Showcase</h1>
          <p className={styles.heroSubtitle}>
            Explore our collection of automation frameworks, tools, and
            utilities
          </p>
          <div className={styles.heroDescription}>
            <p>
              From beginner-friendly CLI tools to enterprise-grade testing
              frameworks, discover solutions designed to help you build robust
              automation systems.
            </p>
          </div>
        </div>
      </header>

      {/* Enhanced Filters */}
      <section className={styles.filtersSection}>
        <div className="container">
          <div className={styles.filtersHeader}>
            <h2>Filter Projects</h2>
            <p>Find exactly what you need by technology or complexity</p>
          </div>
          <div className={styles.filters}>
            {tags.map((tag) => (
              <button
                key={tag}
                className={`${styles.filterButton} ${
                  selectedTag === tag ? styles.activeFilter : ""
                }`}
                onClick={() => setSelectedTag(tag)}
              >
                {tag}
                {selectedTag === tag && (
                  <span className={styles.filterCheckmark}>✓</span>
                )}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className={styles.projectsSection}>
        <div className="container">
          <div className={styles.projectsHeader}>
            <h2>
              {selectedTag === "All"
                ? "All Projects"
                : `${selectedTag} Projects`}
            </h2>
            <p>
              Showing {filteredProjects.length} of {projects.length} projects
            </p>
          </div>
          <div className={styles.projectsContainer}>
            <ShowcaseCard projects={filteredProjects} />
          </div>
        </div>
      </section>
    </Layout>
  );
}

export default Projects;
