import { useEffect, useRef, useState } from "react";
import { ArrowLeft, ArrowRight, Code2, ExternalLink, Play, X } from "lucide-react";

const createImages = (folder, title, captions) =>
  captions.map((caption, index) => ({
    src: `/projects/${folder}/gallery/image-${String(index + 1).padStart(2, "0")}.png`,
    alt: `${title} — ${caption}`,
  }));

const projects = [
  {
    title: "Movie Explorer",
    description:
      "A movie discovery application with authentication, movie search, favorites and Firebase integration.",
    technologies: ["Flutter", "Firebase", "TMDB API"],
    images: createImages("movie-explorer", "Movie Explorer", [
      "Home screen", "Animated intro", "Movie details", "Navigation drawer", "Favorites",
      "Genres", "Login", "Movies list", "Profile", "Sign up",
    ]),
    video: { src: "/projects/movie-explorer/demo.mp4", label: "Movie Explorer demo video" },
    github: "https://github.com/omniahassan251224",
  },
  {
    title: "MovieTracker",
    description:
      "A movie tracking website built from scratch with a clean and responsive interface.",
    technologies: ["Laravel", "PHP", "SQL"],
    images: createImages("movie-tracker", "MovieTracker", [
      "Home screen", "Movie selection", "Add a movie", "My movies list", "Search results",
    ]),
    video: { src: "/projects/movie-tracker/demo.mp4", label: "MovieTracker demo video" },
    github: "https://github.com/omniahassan251224",
  },
  {
    title: "BNPL Risk Prediction",
    description:
      "An AI-powered credit risk dashboard for analyzing customer financial behavior and predicting default risk.",
    technologies: ["Python", "Machine Learning", "Streamlit"],
    images: createImages("bnpl-risk", "BNPL Risk Prediction", [
      "Dashboard home", "Analysis screen 2", "Analysis screen 3", "Analysis screen 4", "Prediction results",
    ]),
    video: { src: "/projects/bnpl-risk/demo.mp4", label: "BNPL Risk Prediction demo video" },
    github: "https://github.com/omniahassan251224/BNPL-Risk-predict-APP",
  },
  {
    title: "Sales Store Analysis",
    description:
      "An interactive dashboard exploring sales trends, order issues, regional performance and store data.",
    technologies: ["Power BI", "Data Analysis", "Dashboard"],
    images: createImages("sales-store-dashboard", "Sales Store Analysis", [
      "Main dashboard", "Dashboard page 2", "Dashboard page 3", "Dashboard page 3 overview",
      "Dashboard page 4", "Dashboard page 5", "Dashboard page 6",
    ]),
    github: "https://github.com/omniahassan251224",
  },
  {
    title: "San3a",
    description:
      "A mobile platform connecting customers with skilled professionals for home maintenance services.",
    technologies: ["Flutter", "Mobile App", "Services"],
    images: createImages("san3a", "San3a", [
      "Welcome screen", "Main services screen", "Login", "Sign up",
      ...Array.from({ length: 31 }, (_, index) => `App demo frame ${String(index + 1).padStart(2, "0")}`),
      "App screen 2", "App screen 3", "App screen 4",
    ]),
    github: "https://github.com/omniahassan251224",
  },
];

function Projects() {
  const [activeGallery, setActiveGallery] = useState(null);
  const [activeImageIndex, setActiveImageIndex] = useState(0);
  const dialogRef = useRef(null);

  useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog) return;

    if (activeGallery && !dialog.open) dialog.showModal();
    if (!activeGallery && dialog.open) dialog.close();
  }, [activeGallery]);

  function openGallery(project) {
    setActiveImageIndex(0);
    setActiveGallery(project);
  }

  function showPreviousImage() {
    const mediaCount = activeGallery.images.length + (activeGallery.video ? 1 : 0);
    setActiveImageIndex((current) =>
      (current - 1 + mediaCount) % mediaCount,
    );
  }

  function showNextImage() {
    const mediaCount = activeGallery.images.length + (activeGallery.video ? 1 : 0);
    setActiveImageIndex((current) => (current + 1) % mediaCount);
  }

  const galleryHasVideo = Boolean(activeGallery?.video);
  const galleryMediaCount = activeGallery
    ? activeGallery.images.length + (galleryHasVideo ? 1 : 0)
    : 0;
  const showingGalleryVideo = Boolean(
    activeGallery && galleryHasVideo && activeImageIndex === activeGallery.images.length,
  );
  const activeGalleryCaption = activeGallery
    ? showingGalleryVideo
      ? activeGallery.video.label
      : activeGallery.images[activeImageIndex].alt
    : "";

  return (
    <section id="projects" className="section projects-section">
      <div className="projects-heading">
        <div className="section-heading">
          <p className="section-kicker"><span /> Selected Work</p>
          <h2>Ideas, shaped into experiences.</h2>
        </div>
        <a className="all-projects" href="#contact">Let's connect <ArrowRight size={14} /></a>
      </div>

      <div className="projects-grid">
        {projects.map((project, index) => {
          const { title, description, technologies, images, video, github, website } = project;
          const galleryItemCount = images.length + (video ? 1 : 0);
          return (
          <article className="project-card" key={title}>
            <div className={`project-preview preview-${index + 1}`}>
              <button
                className="project-image-trigger"
                type="button"
                onClick={() => openGallery(project)}
                aria-label={`View ${galleryItemCount} ${title} gallery items`}
              >
                <img className="project-image" src={images[0].src} alt={images[0].alt} loading="lazy" />
                <span className="project-image-hint">View gallery</span>
              </button>
              <span className="preview-chip">{technologies[0]}</span>
            </div>
            <div className="project-content">
              <span className="project-type">PROJECT 0{index + 1}</span>
              <h3>{title}</h3>
              <p>{description}</p>
              <div className="project-tags">
                {technologies.map((technology) => <span key={technology}>{technology}</span>)}
              </div>
              <div className="project-actions">
                <a href={github} target="_blank" rel="noreferrer" aria-label={`${title} on GitHub`}>
                  <Code2 size={12} /> GitHub
                </a>
                {website && (
                  <a href={website} target="_blank" rel="noreferrer" aria-label={`${title} website`}>
                    <ExternalLink size={12} /> Enter
                  </a>
                )}
              </div>
            </div>
          </article>
          );
        })}
      </div>

      <dialog
        className="project-gallery-dialog"
        ref={dialogRef}
        aria-label={activeGallery ? `${activeGallery.title} project images` : "Project images"}
        onClose={() => setActiveGallery(null)}
        onClick={(event) => {
          if (event.target === event.currentTarget) setActiveGallery(null);
        }}
      >
        {activeGallery && (
          <div className="project-gallery-content">
            <div className="project-gallery-heading">
              <div>
                <span className="project-type">PROJECT GALLERY</span>
                <h3>{activeGallery.title}</h3>
              </div>
              <button
                className="project-gallery-close"
                type="button"
                onClick={() => setActiveGallery(null)}
                aria-label="Close gallery"
                autoFocus
              >
                <X size={18} />
              </button>
            </div>
            <div className="project-gallery-viewer">
              {galleryMediaCount > 1 && (
                <button
                  className="project-gallery-nav"
                  type="button"
                  onClick={showPreviousImage}
                  aria-label="Previous image"
                >
                  <ArrowLeft size={18} />
                </button>
              )}
              {showingGalleryVideo ? (
                <video
                  key={activeGallery.video.src}
                  src={activeGallery.video.src}
                  controls
                  playsInline
                  preload="metadata"
                  aria-label={activeGallery.video.label}
                />
              ) : (
                <img
                  src={activeGallery.images[activeImageIndex].src}
                  alt={activeGallery.images[activeImageIndex].alt}
                />
              )}
              {galleryMediaCount > 1 && (
                <button
                  className="project-gallery-nav"
                  type="button"
                  onClick={showNextImage}
                  aria-label="Next image"
                >
                  <ArrowRight size={18} />
                </button>
              )}
            </div>
            <div className="project-gallery-footer">
              <span>{activeGalleryCaption}</span>
              <span>{String(activeImageIndex + 1).padStart(2, "0")} / {String(galleryMediaCount).padStart(2, "0")}</span>
            </div>
            {galleryMediaCount > 1 && (
              <div className="project-gallery-thumbnails" aria-label="Choose gallery item">
                {activeGallery.images.map((image, imageIndex) => (
                  <button
                    className={imageIndex === activeImageIndex ? "active" : ""}
                    type="button"
                    key={image.src}
                    onClick={() => setActiveImageIndex(imageIndex)}
                    aria-label={`Show image ${imageIndex + 1}`}
                    aria-pressed={imageIndex === activeImageIndex}
                  >
                    <img src={image.src} alt="" />
                  </button>
                ))}
                {galleryHasVideo && (
                  <button
                    className={showingGalleryVideo ? "active project-video-thumbnail" : "project-video-thumbnail"}
                    type="button"
                    onClick={() => setActiveImageIndex(activeGallery.images.length)}
                    aria-label="Play project demo video"
                    aria-pressed={showingGalleryVideo}
                  >
                    <Play size={16} />
                    <span>Video</span>
                  </button>
                )}
              </div>
            )}
          </div>
        )}
      </dialog>
    </section>
  );
}

export default Projects;