import { ArrowUpRight, Check, ExternalLink, Layers3, MapPin, PackageCheck, Radio, Wallet } from "lucide-react";
import type { Project } from "./projects";

function ProjectVisual({ project }: { project: Project }) {
  const labels: Record<Project["visual"], string> = {
    marketplace: "Marketplace system",
    pharmacy: "Pharmacy operations",
    ai: "AI product interface",
    claims: "Claims workflow",
    delivery: "Mobile delivery",
    property: "Rental platform",
  };

  return (
    <div className={`project-visual visual-${project.visual}`} role="img" aria-label={`${labels[project.visual]} illustrative graphic`}>
      <div className="visual-window">
        <div className="visual-topbar">
          <span className="window-dots" aria-hidden="true"><i /><i /><i /></span>
          <span>{labels[project.visual]}</span>
          <span className="visual-status"><i /> Illustrative view</span>
        </div>
        {project.visual === "marketplace" && (
          <div className="market-visual-content">
            <div className="visual-map"><span className="map-road road-one" /><span className="map-road road-two" /><span className="map-road road-three" /><MapPin className="map-pin pin-one" /><MapPin className="map-pin pin-two" /></div>
            <div className="visual-float-card"><span className="avatar-chip">SK</span><span><b>Service request</b><small>Matched · En route</small></span><i className="tiny-pulse" /></div>
            <div className="visual-metric"><Wallet size={15} /><span>Wallet + payments</span><b>Connected</b></div>
          </div>
        )}
        {project.visual === "pharmacy" && (
          <div className="pharmacy-visual-content">
            <div className="visual-side-nav"><i /><i /><i /><i /></div>
            <div className="inventory-panel"><span className="visual-kicker">INVENTORY OVERVIEW</span><b>Pharmacy operations</b><div className="inventory-stats"><span><small>Medicines</small><i /></span><span><small>Stock status</small><i /></span><span><small>Recent activity</small><i /></span></div><div className="inventory-line"><i /><i /><i /><i /></div><span className="visual-verify">Management dashboard</span></div>
          </div>
        )}
        {project.visual === "ai" && (
          <div className="ai-visual-content"><span className="ai-orbit orbit-a" /><span className="ai-orbit orbit-b" /><span className="ai-core">AI</span><span className="ai-node node-a">API</span><span className="ai-node node-b">UI</span><span className="ai-node node-c">Go</span><span className="ai-node node-d">Py</span></div>
        )}
        {project.visual === "claims" && (
          <div className="claims-visual-content"><span className="workflow-step done"><Check size={13} /><b>Submitted</b></span><i className="workflow-line" /><span className="workflow-step active"><Radio size={13} /><b>In review</b></span><i className="workflow-line" /><span className="workflow-step"><PackageCheck size={13} /><b>Decision</b></span><div className="claim-label">Role-based approval flow</div></div>
        )}
        {project.visual === "delivery" && (
          <div className="delivery-visual-content"><div className="delivery-route"><span /><i /><b /><span /></div><div className="delivery-card"><MapPin size={15} /><span><b>Delivery in progress</b><small>Location-aware workflow</small></span></div></div>
        )}
        {project.visual === "property" && (
          <div className="property-visual-content"><div className="property-house"><div className="house-roof" /><div className="house-body"><i /><i /><span /></div></div><div className="property-listing"><small>PROPERTY LISTING</small><b>Search. Discover. Rent.</b><span><i /><i /><i /></span></div></div>
        )}
      </div>
    </div>
  );
}

export default function ProjectCard({ project, featured = false }: { project: Project; featured?: boolean }) {
  return (
    <article className={`project-card accent-${project.accent}${featured ? " project-featured" : ""}`}>
      <ProjectVisual project={project} />
      <div className="project-body">
        <div className="project-heading">
          <div><p className="eyebrow">{project.eyebrow}</p><h3>{project.name}</h3></div>
          {featured && <span className="featured-label">Featured</span>}
        </div>
        <p className="project-description">{project.description}</p>
        <div className="tag-list" aria-label="Technologies">
          {project.technologies.map((technology) => <span className="tech-tag" key={technology}>{technology}</span>)}
        </div>
        <ul className="project-highlights">
          {project.highlights.map((highlight) => <li key={highlight}><span aria-hidden="true">—</span>{highlight}</li>)}
        </ul>
        <details className="project-details">
          <summary>System & project details <ArrowUpRight size={14} aria-hidden="true" /></summary>
          <p>{project.detail}</p>
          {project.note && <p className="project-note">{project.note}</p>}
        </details>
        <div className="project-links">
          {project.links.map(({ label, href }) => (
            <a href={href} key={href} target="_blank" rel="noreferrer">
              {label}<ExternalLink size={14} aria-hidden="true" />
            </a>
          ))}
          <span className="project-type"><Layers3 size={14} aria-hidden="true" /> Project overview</span>
        </div>
      </div>
    </article>
  );
}
