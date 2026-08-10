export function DominionVisual({ compact = false }: { compact?: boolean }) {
  return <div className={`dominion-visual ${compact ? "dominion-visual--compact" : ""}`} aria-label="Abstract browser mockup for the Dominion Well digital healthcare experience">
    <div className="dominion-browser">
      <div className="dominion-browser__bar"><i /><i /><i /><span>dominionwell.health</span></div>
      <div className="dominion-browser__body">
        <div className="dominion-browser__copy"><small>Healthcare platform</small><strong>Find care with more clarity.</strong><p>Services, professionals and access points brought into one digital experience.</p></div>
        <div className="dominion-browser__panel"><span /><span /><span /></div>
        <div className="dominion-browser__grid"><i /><i /><i /><i /></div>
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
