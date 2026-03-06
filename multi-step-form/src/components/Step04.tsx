import { useState } from 'react'

interface Step04Props {
  readonly onNext: () => void
  readonly onBack: () => void
}

function Step04({ onNext, onBack }: Step04Props) {
  const [cardNumber, setCardNumber] = useState('')
  const [expiry, setExpiry] = useState('')
  const [cvc, setCvc] = useState('')
  const [name, setName] = useState('')

  return (
    <div className="form-step-card form-step-v2">
      <div style={{ display: 'flex', flexDirection: 'column', gap: 24, width: '100%' }}>
        <div className="stepper-horizontal">
          <div className="stepper-step">
            <div className="stepper-dot completed">
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                <circle cx="7" cy="7" r="6" fill="#1BB42D" />
                <path d="M4 7L6 9L10 5" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>
            <span className="stepper-title">Prestation & Plan</span>
          </div>
          <div style={{ flex: 1, height: 4, background: 'var(--color-primary-light)', borderRadius: 2, alignSelf: 'center', maxWidth: 60 }} />
          <div className="stepper-step">
            <div className="stepper-dot completed">2</div>
            <span className="stepper-title">Prestations supplémentaires</span>
          </div>
          <div style={{ flex: 1, height: 4, background: 'var(--color-primary-light)', borderRadius: 2, alignSelf: 'center', maxWidth: 60 }} />
          <div className="stepper-step">
            <div className="stepper-dot completed">3</div>
            <span className="stepper-title">Date et Heure</span>
          </div>
          <div style={{ flex: 1, height: 4, background: 'var(--color-primary-light)', borderRadius: 2, alignSelf: 'center', maxWidth: 60 }} />
          <div className="stepper-step">
            <div className="stepper-dot completed">4</div>
            <span className="stepper-title">Infos personnelles</span>
          </div>
          <div style={{ flex: 1, height: 4, background: 'var(--color-primary-light)', borderRadius: 2, alignSelf: 'center', maxWidth: 60 }} />
          <div className="stepper-step">
            <div className="stepper-dot active">5</div>
            <span className="stepper-title active">Identité</span>
          </div>
          <div style={{ flex: 1, height: 3, background: 'var(--color-border-input)', borderRadius: 2, alignSelf: 'center', maxWidth: 60 }} />
          <div className="stepper-step">
            <div className="stepper-dot pending">6</div>
            <span className="stepper-title pending">Activer</span>
          </div>
        </div>

        <div style={{ borderTop: '1px solid var(--color-border)', width: '100%' }} />

        <div style={{ display: 'flex', flexDirection: 'column', gap: 32, paddingTop: 32 }}>
          <div>
            <h2 className="form-step-title" style={{ marginBottom: 8 }}>Vérification d'identité</h2>
            <p style={{ fontSize: 16, color: 'var(--color-text-muted)', lineHeight: 1.5 }}>
              Vérifiez votre identité pour des raisons de sécurité.
            </p>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
            <div className="input-group">
              <label className="input-label">Pièce d'identité</label>
              <div className="input-field">
                <input type="text" placeholder="Téléchargez ou saisissez le numéro de votre pièce" value={cardNumber} onChange={(e) => setCardNumber(e.target.value)} />
              </div>
            </div>
            <div className="input-row">
              <div className="input-group" style={{ flex: 1 }}>
                <label className="input-label">Date d'expiration</label>
                <div className="input-field">
                  <input type="text" placeholder="MM/YY" value={expiry} onChange={(e) => setExpiry(e.target.value)} />
                </div>
              </div>
              <div className="input-group" style={{ flex: 1 }}>
                <label className="input-label">Code de vérification</label>
                <div className="input-field">
                  <input type="text" placeholder="Saisissez le code" value={cvc} onChange={(e) => setCvc(e.target.value)} />
                </div>
              </div>
            </div>
            <div className="input-group">
              <label className="input-label">Nom complet (tel qu'indiqué sur la pièce)</label>
              <div className="input-field">
                <input type="text" placeholder="Jean Dupont" value={name} onChange={(e) => setName(e.target.value)} />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="plan-step-footer">
        <span style={{ fontSize: 16, color: 'var(--color-text-muted)' }}>Étape 4 sur 5</span>
        <div style={{ display: 'flex', gap: 24 }}>
          <button className="btn btn-secondary" onClick={onBack}>Retour</button>
          <button className="btn btn-primary" onClick={onNext}>Suivant</button>
        </div>
      </div>
    </div>
  )
}

export default Step04
