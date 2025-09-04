import React, { useState } from "react";
import styles from "./styles.module.css";
import { FaGithub, FaBlog, FaInfoCircle, FaSignal } from "react-icons/fa";
import ProjectModal from "../ProjectModal";

function ShowcaseCard({ projects }) {
  const [selectedProject, setSelectedProject] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

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

  const handleInfoClick = (project) => {
    setSelectedProject(project);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedProject(null);
  };

  return (
    <>
      <div className={styles.showcaseGrid}>
        {projects.map((project, index) => (
          <div key={index} className={styles.showcaseCard}>
            <div className={styles.cardHeader}>
              <div
                className={styles.cardBackground}
                style={{
                  backgroundImage: project.backgroundImage,
                  backgroundSize: project.backgroundSize || "cover",
                  backgroundPosition: project.backgroundPosition || "center",
                }}
              >
                <div className={styles.cardOverlay}>
                  {getStatusBadge(project.status)}
                </div>
              </div>

              {/* Project Info */}
              <div className={styles.projectInfo}>
                {project.language && (
                  <div className={styles.languageBadge}>{project.language}</div>
                )}
              </div>
            </div>

            <div className={styles.cardBody}>
              <div className={styles.cardTitleContainer}>
                <h3 className={styles.cardTitle}>{project.title}</h3>
              </div>

              <p className={styles.cardDescription}>{project.description}</p>

              {/* Difficulty Badge */}
              {project.difficulty && (
                <div
                  className={styles.difficultyBadge}
                  style={{
                    backgroundColor: getDifficultyColor(project.difficulty),
                  }}
                >
                  <FaSignal className={styles.difficultyIcon} />
                  {project.difficulty}
                </div>
              )}

              {/* Features List */}
              <div className={styles.featuresList}>
                <h4 className={styles.featuresTitle}>Key Features:</h4>
                <ul className={styles.featuresUl}>
                  {project.features.slice(0, 4).map((feature, idx) => (
                    <li key={idx} className={styles.featureItem}>
                      <span className={styles.featureDot}>•</span>
                      {feature}
                    </li>
                  ))}
                  {project.features.length > 4 && (
                    <li className={styles.featureMore}>
                      +{project.features.length - 4} more features
                    </li>
                  )}
                </ul>
              </div>

              <div className={styles.cardTags}>
                {project.tags.map((tag, idx) => (
                  <span key={idx} className={styles.cardTag}>
                    {tag}
                  </span>
                ))}
              </div>

              <div className={styles.cardLinks}>
                {project.githubUrl && (
                  <a
                    href={project.githubUrl}
                    className={styles.cardLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="GitHub Repository"
                    title="View on GitHub"
                  >
                    <FaGithub />
                  </a>
                )}
                {project.blogUrl && (
                  <a
                    href={project.blogUrl}
                    className={styles.cardLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Blog Post"
                    title="Read Blog Post"
                  >
                    <FaBlog />
                  </a>
                )}
                <button
                  className={styles.cardLink}
                  onClick={() => handleInfoClick(project)}
                  aria-label="Project Details"
                  title="View Project Details"
                >
                  <FaInfoCircle />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Project Modal */}
      <ProjectModal
        project={selectedProject}
        isOpen={isModalOpen}
        onClose={closeModal}
      />
    </>
  );
}

export default ShowcaseCard;
