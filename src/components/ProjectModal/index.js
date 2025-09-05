import React from "react";
import {
  FaTimes,
  FaGithub,
  FaBlog,
  FaSignal,
  FaCode,
  FaRocket,
  FaCheckCircle,
} from "react-icons/fa";
import styles from "./styles.module.css";

function ProjectModal({ project, isOpen, onClose }) {
  if (!isOpen || !project) return null;

  const getDifficultyColor = (difficulty) => {
    switch (difficulty) {
      case "Beginner":
        return "#28a745";
      case "Intermediate":
        return "#ffc107";
      case "Advanced":
        return "#dc3545";
      default:
        return "#6c757d";
    }
  };

  const getStatusBadge = (status) => {
    if (status === "coming-soon") {
      return <span className={styles.comingSoonBadge}>Coming Soon</span>;
    }
    if (status === "active") {
      return <span className={styles.activeBadge}>Active</span>;
    }
    return null;
  };

  return (
    <div className={styles.modalOverlay} onClick={onClose}>
      <div className={styles.modalContent} onClick={(e) => e.stopPropagation()}>
        {/* Modal Header */}
        <div className={styles.modalHeader}>
          <div className={styles.modalTitleSection}>
            <h2 className={styles.modalTitle}>{project.title}</h2>
            {getStatusBadge(project.status)}
          </div>
          <button className={styles.closeButton} onClick={onClose}>
            <FaTimes />
          </button>
        </div>

        {/* Project Overview */}
        <div className={styles.modalBody}>
          <div className={styles.projectOverview}>
            <p className={styles.projectDescription}>{project.description}</p>

            <div className={styles.projectMeta}>
              <div className={styles.metaItem}>
                <FaCode className={styles.metaIcon} />
                <span className={styles.metaLabel}>Language:</span>
                <span className={styles.metaValue}>{project.language}</span>
              </div>

              {project.difficulty && (
                <div className={styles.metaItem}>
                  <FaSignal className={styles.metaIcon} />
                  <span className={styles.metaLabel}>Difficulty:</span>
                  <div
                    className={styles.difficultyBadge}
                    style={{
                      backgroundColor: getDifficultyColor(project.difficulty),
                    }}
                  >
                    {project.difficulty}
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Key Features */}
          <div className={styles.featuresSection}>
            <h3 className={styles.sectionTitle}>
              <FaRocket className={styles.sectionIcon} />
              Key Features
            </h3>
            <div className={styles.featuresGrid}>
              {project.features.map((feature, idx) => (
                <div key={idx} className={styles.featureItem}>
                  <FaCheckCircle className={styles.featureIcon} />
                  <span>{feature}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Technology Stack */}
          <div className={styles.techStackSection}>
            <h3 className={styles.sectionTitle}>
              <FaCode className={styles.sectionIcon} />
              Technology Stack
            </h3>
            <div className={styles.tagsContainer}>
              {project.tags.map((tag, idx) => (
                <span key={idx} className={styles.techTag}>
                  {tag}
                </span>
              ))}
            </div>
          </div>

          {/* Getting Started */}
          <div className={styles.gettingStartedSection}>
            <h3 className={styles.sectionTitle}>
              <FaRocket className={styles.sectionIcon} />
              Getting Started
            </h3>
            <div className={styles.gettingStartedContent}>
              <p>
                This project provides a comprehensive solution for{" "}
                {(() => {
                  const firstTwoTags = project.tags.slice(0, 2);
                  const hasAutomationTag = firstTwoTags.some((tag) =>
                    tag.toLowerCase().includes("automation")
                  );
                  const tagsText = firstTwoTags.join(" and ");
                  return hasAutomationTag ? tagsText : `${tagsText} automation`;
                })()}
                . Follow the links below to get started with implementation and
                detailed documentation.
              </p>
            </div>
          </div>

          {/* Action Links */}
          <div className={styles.actionLinks}>
            {project.githubUrl && (
              <a
                href={project.githubUrl}
                className={styles.actionLink}
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaGithub />
                <span>View on GitHub</span>
              </a>
            )}

            {project.blogUrl && (
              <a
                href={project.blogUrl}
                className={styles.actionLink}
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaBlog />
                <span>Read Blog Post</span>
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProjectModal;
