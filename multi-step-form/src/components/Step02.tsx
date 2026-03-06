import { useEffect, useState } from 'react'

interface Step02Props {
  readonly prestationType: string
  readonly onPrestationChange: (id: string) => void
  readonly onNext: () => void
  readonly onBack: () => void
}

/* Plans DeepCleaning par type de prestation */
const PLANS_BY_PRESTATION: Record<string, Array<{ id: string; title: string; price: number; duration: string }>> = {
  canape: [
    { id: 'canape-2-3', title: 'Canapé 2-3 places', price: 79, duration: '30 min' },
    { id: 'canape-4-5', title: 'Canapé 4/5 places', price: 89, duration: '45 min' },
    { id: 'canape-6', title: 'Canapé 6 places', price: 109, duration: '50 min' },
    { id: 'canape-8', title: 'Canapé 8 places', price: 159, duration: '50 min' },
  ],
  matelas: [
    { id: 'matelas-1', title: 'Matelas 1 place (recto/verso)', price: 69, duration: '20 min' },
    { id: 'matelas-2', title: 'Matelas 2 place (recto/verso)', price: 79, duration: '30 min' },
    { id: 'matelas-kingsize', title: 'King size', price: 89, duration: '30 min' },
  ],
  tapis: [
    { id: 'tapis-23x16', title: 'Tapis, Moquette 2.3×1.6m', price: 49, duration: '15 min' },
  ],
  fauteuil: [
    { id: 'fauteuil-1', title: 'Fauteuil', price: 39, duration: '15 min' },
  ],
  chaises: [
    { id: 'chaises-4', title: 'Lots de 4 Chaises', price: 66, duration: '30 min' },
  ],
}

import { PrestationTypeSelector } from './PrestationTypeSelector'

function Step02({ prestationType, onPrestationChange, onNext, onBack }: Step02Props) {
  const plans = prestationType ? (PLANS_BY_PRESTATION[prestationType] ?? PLANS_BY_PRESTATION.canape) : []
  const [selectedPlan, setSelectedPlan] = useState<string>('')

  useEffect(() => {
    if (prestationType) {
      const firstPlanId = (PLANS_BY_PRESTATION[prestationType] ?? PLANS_BY_PRESTATION.canape)[0]?.id ?? ''
      setSelectedPlan(firstPlanId)
    } else {
      setSelectedPlan('')
    }
  }, [prestationType])

  const canContinue = Boolean(prestationType && selectedPlan)

  return (
    <div className="form-step-card form-step-v2">
      <div style={{ display: 'flex', flexDirection: 'column', gap: 24, width: '100%' }}>
        <div className="stepper-horizontal stepper-compact">
          <div className="stepper-step">
            <div className="stepper-dot active">1</div>
            <span className="stepper-title active">Prestation & Plan</span>
          </div>
          <div className="stepper-chevron">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M9 18l6-6-6-6" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>
          <div className="stepper-step">
            <div className="stepper-dot pending">2</div>
            <span className="stepper-title pending">Prestations supplémentaires</span>
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

        <div style={{ display: 'flex', flexDirection: 'column', gap: 40, paddingTop: 32 }}>
          {/* Section 1: Type de prestation */}
          <PrestationTypeSelector
            prestationType={prestationType}
            onPrestationChange={onPrestationChange}
            stepLabel="Étape 1/6"
          />

          {/* Section 2: Choisissez votre plan - appears only after prestation type is selected */}
          {prestationType && (
            <div key={prestationType} className="prestation-plan-section" style={{ animation: 'fadeSlideIn 0.35s ease-out 0.2s both' }}>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
                <h3 className="form-step-subtitle" style={{ marginBottom: 0 }}>Choisissez votre plan</h3>
                <p style={{ fontSize: 14, color: 'var(--color-text-muted)', lineHeight: 1.5, marginTop: -8 }}>
                  Sélectionnez le plan qui correspond à votre prestation.
                </p>
                <div className="plan-cards-grid">
                  {plans.map((plan) => (
                    <button
                      key={plan.id}
                      type="button"
                      className={`plan-card ${selectedPlan === plan.id ? 'selected' : ''}`}
                      onClick={() => setSelectedPlan(plan.id)}
                    >
                      <div className="plan-card-radio">
                        <span className="radio-dot" />
                      </div>
                      <div className="plan-card-content">
                        <span className="plan-card-title">{plan.title}</span>
                        <div className="badges-row" style={{ marginTop: 16 }}>
                          <span className={`mini-tag ${selectedPlan === plan.id ? 'selected' : ''}`}>
                            <strong>{plan.price}€</strong>
                          </span>
                          <span className={`mini-tag ${selectedPlan === plan.id ? 'selected' : ''}`}>
                            <svg width="14" height="14" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5" style={{ flexShrink: 0 }}>
                              <circle cx="8" cy="8" r="6" />
                              <path d="M8 4v4l2 2" strokeLinecap="round" />
                            </svg>
                            {plan.duration}
                          </span>
                        </div>
                      </div>
                    </button>
                  ))}
                </div>
              </div>
            </div>
          )}
        </div>
      </div>

      <div className="plan-step-footer">
        <span style={{ fontSize: 16, color: 'var(--color-text-muted)' }}>Étape 1 sur 6</span>
        <div style={{ display: 'flex', gap: 24 }}>
          <button className="btn btn-secondary" onClick={onBack}>Retour</button>
          <button className="btn btn-primary" onClick={onNext} disabled={!canContinue}>Continuer</button>
        </div>
      </div>
    </div>
  )
}

export default Step02
