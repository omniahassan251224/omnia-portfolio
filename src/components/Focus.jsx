import { ExternalLink, FileText } from "lucide-react";

const certificates = [
  {
    category: "MOBILE DEVELOPMENT",
    title: "Cross-Platform App Development using Flutter",
    organization: "Information Technology Institute (ITI)",
    image: "/certificates/iti-flutter-development.jpeg",
  },
  {
    category: "FLUTTER",
    title: "SBS Flutter Delegate",
    organization: "Step By Step",
    image: "/certificates/flutter-sbs-delegate.png",
  },
  {
    category: "GENERATIVE AI",
    title: "CIB Summer Internship",
    organization: "CIB Egypt",
    image: "/certificates/cib-generative-ai-internship.png",
  },
  {
    category: "FREELANCING",
    title: "Basics of Remote Work",
    organization: "Khamsat",
    image: "/certificates/khamsat-remote-work.png",
  },
  {
    category: "DATA ANALYSIS",
    title: "Advanced Data Analytics",
    organization: "National Telecommunication Institute (NTI)",
    image: "/certificates/nti-data-analysis.png",
    document: "/certificates/nti-data-analysis.pdf",
  },
];

function Certifications() {
  return (
    <section id="certifications" className="section certificates-section">
      <div className="section-heading">
        <p className="section-kicker"><span /> Certifications</p>
        <h2>Space for the next milestone.</h2>
        <p className="section-description">A collection of certificates and professional learning experiences.</p>
      </div>
      <div className="certificates-grid">
        {certificates.map(({ category, title, organization, image, document }) => (
          <article className="certificate-card" key={title}>
            <a className="certificate-preview" href={image} target="_blank" rel="noreferrer" aria-label={`Open ${title} certificate`}>
              <img src={image} alt={`${title} certificate`} loading="lazy" />
              <span className="certificate-open"><ExternalLink size={13} /> View certificate</span>
            </a>
            <span className="certificate-category">{category}</span>
            <h3>{title}</h3>
            <p>{organization}</p>
            {document && (
              <a className="certificate-file-link" href={document} target="_blank" rel="noreferrer">
                <FileText size={12} /> Open PDF
              </a>
            )}
          </article>
        ))}
      </div>
    </section>
  );
}

export default Certifications;
