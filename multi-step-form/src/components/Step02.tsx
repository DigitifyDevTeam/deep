interface Step02Props {
  readonly selectedPrestation: string
  readonly onSelectPrestation: (id: string) => void
  readonly onNext: () => void
  readonly onBack: () => void
}

/* Prestations DeepCleaning - choisissez votre type de prestation */
const SERVICES = [
  { id: 'canape', label: 'Canapé', icon: 'sofa' },
  { id: 'matelas', label: 'Matelas', icon: 'bed' },
  { id: 'tapis', label: 'Tapis, Moquette', icon: 'rug' },
  { id: 'fauteuil', label: 'Fauteuil', icon: 'armchair' },
  { id: 'chaises', label: 'Chaises', icon: 'chairs' },
]

const ServiceIcon = ({ name, selected }: { name: string; selected: boolean }) => {
  const color = selected ? '#FFFFFF' : '#4A3AFF'
  const size = 32
  switch (name) {
    case 'sofa':
      return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M2 9a3 3 0 0 1 3-3h14a3 3 0 0 1 3 3v3a3 3 0 0 1-3 3H5a3 3 0 0 1-3-3V9z" />
          <path d="M4 15v2a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-2" />
          <path d="M6 12h.01M18 12h.01" />
        </svg>
      )
    case 'bed':
      return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M2 4v16" />
          <path d="M2 8h18a2 2 0 0 1 2 2v10" />
          <path d="M2 17h20" />
          <path d="M6 8V4a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v4" />
        </svg>
      )
    case 'rug':
      return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <rect x="3" y="3" width="18" height="18" rx="2" />
          <path d="M3 9h18" />
          <path d="M3 15h18" />
          <path d="M9 3v18" />
          <path d="M15 3v18" />
        </svg>
      )
    case 'armchair':
      return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M19 9V6a2 2 0 0 0-2-2H7a2 2 0 0 0-2 2v3" />
          <path d="M3 11v2a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-2" />
          <path d="M5 18v2" />
          <path d="M19 18v2" />
          <path d="M9 11v6" />
          <path d="M15 11v6" />
        </svg>
      )
    case 'chairs':
      return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M5 10V4a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v6" />
          <path d="M5 10v10a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1V10" />
          <path d="M15 10v10a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1V10" />
          <path d="M5 10h14" />
          <path d="M8 7h8" />
        </svg>
      )
    default:
      return null
  }
}

function Step02({ selectedPrestation, onSelectPrestation, onNext, onBack }: Step02Props) {

  return (
    <div className="form-step-card form-step-v2">
      <div style={{ display: 'flex', flexDirection: 'column', gap: 24, width: '100%' }}>
        {/* Stepper - 3 steps as in image */}
        <div className="stepper-horizontal stepper-compact">
          <div className="stepper-step">
            <div className="stepper-dot active">1</div>
            <span className="stepper-title active">Type de prestation</span>
          </div>
          <div className="stepper-chevron">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M9 18l6-6-6-6" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>
          <div className="stepper-step">
            <div className="stepper-dot pending">2</div>
            <span className="stepper-title pending">Plan</span>
          </div>
          <div className="stepper-chevron">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M9 18l6-6-6-6" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>
          <div className="stepper-step">
            <div className="stepper-dot pending">3</div>
            <span className="stepper-title pending">Infos personnelles</span>
          </div>
        </div>

        <div style={{ borderTop: '1px solid var(--color-border)', width: '100%' }} />

        <div style={{ display: 'flex', flexDirection: 'column', gap: 32, paddingTop: 32 }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', width: '100%' }}>
            <h2 className="form-step-title" style={{ marginBottom: 0 }}>Choisissez votre type de prestation</h2>
            <span style={{ fontSize: 16, color: 'var(--color-text-muted)' }}>Étape 1/5</span>
          </div>

          <div className="services-grid">
            {SERVICES.map((service) => (
              <button
                key={service.id}
                type="button"
                className={`service-card ${selectedPrestation === service.id ? 'selected' : ''}`}
                onClick={() => onSelectPrestation(service.id)}
              >
                <div className="service-card-radio">
                  <span className="radio-dot" />
                </div>
                <div className={`service-card-icon-wrapper ${selectedPrestation === service.id ? 'selected' : ''}`}>
                  <ServiceIcon name={service.icon} selected={selectedPrestation === service.id} />
                </div>
                <span className={`service-card-label ${selectedPrestation === service.id ? 'selected' : ''}`}>
                  {service.label}
                </span>
              </button>
            ))}
          </div>
        </div>
      </div>

      <div className="plan-step-footer">
        <span style={{ fontSize: 16, color: 'var(--color-text-muted)' }}>Étape 1 sur 5</span>
        <div style={{ display: 'flex', gap: 24 }}>
          <button className="btn btn-secondary" onClick={onBack}>
            Retour
          </button>
          <button className="btn btn-primary" onClick={onNext}>
            Continuer
          </button>
        </div>
      </div>
    </div>
  )
}

export default Step02
