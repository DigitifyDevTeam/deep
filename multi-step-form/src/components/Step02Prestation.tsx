import { useState } from 'react'

/* Prestations supplémentaires DeepCleaning - -20% sur toutes les prestations - https://deepcleaning.fr/booking/ */
const SUPPLEMENTARY_SERVICES = [
  { id: 'kingsize', title: 'King size', duration: '30 min', priceDiscounted: 71.2, priceOriginal: 89 },
  { id: 'canape-8', title: 'Canapé 8 places', duration: '50 min', priceDiscounted: 127.2, priceOriginal: 159 },
  { id: 'repose-pied', title: 'Repose Pied', duration: '20 min', priceDiscounted: 28, priceOriginal: 35 },
  { id: 'matelas-bebe', title: 'Matelas Bébé', duration: '20 min', priceDiscounted: 39.2, priceOriginal: 49 },
  { id: 'sur-matelas', title: 'Sur-matelas', duration: '20 min', priceDiscounted: 39.2, priceOriginal: 49 },
  { id: 'sommier', title: 'Sommier', duration: '10 min', priceDiscounted: 31.2, priceOriginal: 39 },
  { id: 'tete-de-lit', title: 'Tete de lit', duration: '20 min', priceDiscounted: 39.2, priceOriginal: 49 },
  { id: 'fauteuil', title: 'Fauteuil', duration: '15 min', priceDiscounted: 31.2, priceOriginal: 39 },
  { id: 'chaise', title: 'Chaise', duration: '10 min', priceDiscounted: 15.2, priceOriginal: 19 },
  { id: 'matelas-1', title: 'Matelas 1 place (recto/verso)', duration: '15 min', priceDiscounted: 55.2, priceOriginal: 69 },
  { id: 'matelas-2', title: 'Matelas 2 places (recto/verso)', duration: '30 min', priceDiscounted: 63.2, priceOriginal: 79 },
  { id: 'canape-2-3', title: 'Canapé 2/3 places', duration: '30 min', priceDiscounted: 63.2, priceOriginal: 79 },
  { id: 'canape-4-5', title: 'Canapé 4/5 places', duration: '30 min', priceDiscounted: 71.2, priceOriginal: 89 },
  { id: 'canape-6', title: 'Canapé 6 places', duration: '50 min', priceDiscounted: 87.2, priceOriginal: 109 },
  { id: 'tapis', title: 'Tapis, Moquette 2.3×1.6m', duration: '15 min', priceDiscounted: 39.2, priceOriginal: 49 },
]

interface Step02PrestationProps {
  readonly onNext: () => void
  readonly onBack: () => void
}

function Step02Prestation({ onNext, onBack }: Step02PrestationProps) {
  const [quantities, setQuantities] = useState<Record<string, number>>({})

  const getQuantity = (id: string) => quantities[id] ?? 0

  const setQuantity = (id: string, qty: number) => {
    const value = Math.max(0, Math.min(99, qty))
    setQuantities((prev) => ({ ...prev, [id]: value }))
  }

  return (
    <div className="form-step-card form-step-v2">
      <div style={{ display: 'flex', flexDirection: 'column', gap: 24, width: '100%' }}>
        <div className="stepper-horizontal stepper-compact">
          <div className="stepper-step">
            <div className="stepper-dot completed">
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                <circle cx="7" cy="7" r="6" fill="#1BB42D" />
                <path d="M4 7L6 9L10 5" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>
            <span className="stepper-title">Prestation & Plan</span>
          </div>
          <div className="stepper-chevron">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M9 18l6-6-6-6" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>
          <div className="stepper-step">
            <div className="stepper-dot active">2</div>
            <span className="stepper-title active">Prestations supplémentaires</span>
          </div>
          <div className="stepper-chevron">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M9 18l6-6-6-6" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>
          <div className="stepper-step">
            <div className="stepper-dot pending">3</div>
            <span className="stepper-title pending">Date et Heure</span>
          </div>
          <div className="stepper-chevron">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M9 18l6-6-6-6" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>
          <div className="stepper-step">
            <div className="stepper-dot pending">4</div>
            <span className="stepper-title pending">Infos personnelles</span>
          </div>
          <div className="stepper-chevron">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M9 18l6-6-6-6" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>
          <div className="stepper-step">
            <div className="stepper-dot pending">5</div>
            <span className="stepper-title pending">Identité</span>
          </div>
          <div className="stepper-chevron">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M9 18l6-6-6-6" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>
          <div className="stepper-step">
            <div className="stepper-dot pending">6</div>
            <span className="stepper-title pending">Activer</span>
          </div>
        </div>

        <div style={{ borderTop: '1px solid var(--color-border)', width: '100%' }} />

        <div style={{ display: 'flex', flexDirection: 'column', gap: 24, paddingTop: 32 }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', width: '100%', flexWrap: 'wrap', gap: 16 }}>
            <div>
              <h2 className="form-step-title" style={{ marginBottom: 8 }}>Des prestations supplémentaires ?</h2>
              <span className="supplementary-discount-tag">-20 % sur toutes les prestations supplémentaires</span>
            </div>
            <span style={{ fontSize: 16, color: 'var(--color-text-muted)' }}>Étape 2/6</span>
          </div>

          <div className="supplementary-services-grid">
            {SUPPLEMENTARY_SERVICES.map((service) => {
              const qty = getQuantity(service.id)
              const isSelected = qty > 0
              return (
                <div
                  key={service.id}
                  className={`supplementary-service-card ${isSelected ? 'selected' : ''}`}
                >
                  <div className="supplementary-service-content">
                    <span className="supplementary-service-name">{service.title}</span>
                    <div className="supplementary-service-meta">
                      <span>{service.duration}</span>
                      <span className="supplementary-service-price">
                        <strong>{service.priceDiscounted}€</strong>
                        <span className="price-original">{service.priceOriginal} €</span>
                      </span>
                    </div>
                    <div className="quantity-selector">
                      <button
                        type="button"
                        className="quantity-btn"
                        onClick={() => setQuantity(service.id, qty - 1)}
                        aria-label="Diminuer"
                      >
                        −
                      </button>
                      <span className="quantity-value">{qty}</span>
                      <button
                        type="button"
                        className="quantity-btn"
                        onClick={() => setQuantity(service.id, qty + 1)}
                        aria-label="Augmenter"
                      >
                        +
                      </button>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </div>

      <div className="plan-step-footer">
        <span style={{ fontSize: 16, color: 'var(--color-text-muted)' }}>Étape 2 sur 6</span>
        <div style={{ display: 'flex', gap: 24 }}>
          <button className="btn btn-secondary" onClick={onBack}>Retour</button>
          <button className="btn btn-primary" onClick={onNext}>Continuer</button>
        </div>
      </div>
    </div>
  )
}

export default Step02Prestation
