export function DominionVisual({ compact = false }: { compact?: boolean }) {
  return <div className={`dominion-visual ${compact ? "dominion-visual--compact" : ""}`} aria-label="Dominion Well healthcare platform experience mockup">
    <div className="dominion-browser">
      <div className="dominion-browser__bar">
        <span className="dominion-browser__dots"><i /><i /><i /></span>
        <span className="dominion-browser__address">dominionwell.com</span>
      </div>
      <div className="dominion-browser__body">
        <div className="dominion-browser__content">
          <div className="dominion-browser__label">Better care begins with the right connection.</div>
          <h3>Healthcare, made clearer.</h3>
          <p>Find verified specialists, book appointments and manage care in one calm experience.</p>
        </div>
        <div className="dominion-browser__stack">
          <div className="dominion-card dominion-card--primary">
            <small>Appointments</small>
            <strong>Easy to manage</strong>
          </div>
          <div className="dominion-card">
            <small>Care history</small>
            <strong>Always together</strong>
          </div>
          <div className="dominion-card dominion-card--featured">
            <small>Next step</small>
            <strong>Choose a doctor and a convenient time</strong>
          </div>
        </div>
      </div>
    </div>
  </div>;
}

export function ExplorationVisual({ variant }: { variant: "product" | "brand" | "web" }) {
  return <div className={`exploration-visual exploration-visual--${variant}`} aria-hidden="true">
    <span>Concept<br />exploration</span>
    <i />
    <b>{variant === "product" ? "Product flow" : variant === "brand" ? "Identity rhythm" : "Web system"}</b>
  </div>;
}
