interface Step05Props {
  readonly onNext: () => void
  readonly onBack: () => void
}

function Step05({ onNext, onBack }: Step05Props) {
  return (
    <div className="form-step-card form-step-v2">
      <div style={{ display: 'flex', flexDirection: 'column', gap: 32, width: '100%' }}>
        <div>
          <h2 className="form-step-title" style={{ marginBottom: 8 }}>Activez votre compte</h2>
          <p style={{ fontSize: 16, color: 'var(--color-text-muted)', lineHeight: 1.5 }}>
            Tout est prêt ! Cliquez sur le bouton ci-dessous pour activer votre compte et commencer.
          </p>
        </div>

        <div
          style={{
            padding: 48,
            background: 'var(--color-bg-main)',
            borderRadius: 24,
            textAlign: 'center',
          }}
        >
          <div
            style={{
              width: 80,
              height: 80,
              margin: '0 auto 24px',
              background: 'var(--gradient-primary)',
              borderRadius: '50%',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2">
              <path d="M20 6L9 17l-5-5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>
          <p style={{ fontSize: 18, fontWeight: 600, color: 'var(--color-text-dark)', marginBottom: 8 }}>
            Prêt !
          </p>
          <p style={{ fontSize: 14, color: 'var(--color-text-muted)' }}>
            Votre compte sera activé immédiatement.
          </p>
        </div>
      </div>

      <div className="plan-step-footer">
        <span style={{ fontSize: 16, color: 'var(--color-text-muted)' }}>Étape 5 sur 5</span>
        <div style={{ display: 'flex', gap: 24 }}>
          <button className="btn btn-secondary" onClick={onBack}>Retour</button>
          <button className="btn btn-primary" onClick={onNext}>Activer le compte</button>
        </div>
      </div>
    </div>
  )
}

export default Step05
