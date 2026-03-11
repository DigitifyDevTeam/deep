
interface Step04Props {
  readonly onNext: () => void
  readonly onBack: () => void
}

function Step04({ onNext, onBack }: Step04Props) {
  return (
    <div className="form-step-card form-step-v2">
      <div style={{ display: 'flex', flexDirection: 'column', gap: 24, width: '100%' }}>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 32, paddingTop: 32 }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', width: '100%', flexWrap: 'wrap', gap: 16 }}>
            <div>
              <h2 className="form-step-title" style={{ marginBottom: 8 }}>Résumé et Confirmation</h2>
              <p style={{ fontSize: 16, color: 'var(--color-text-muted)', lineHeight: 1.5 }}>
                Vérifiez les détails de votre réservation avant de confirmer.
              </p>
            </div>
            <span style={{ fontSize: 16, color: 'var(--color-text-muted)' }}>Étape 5/6</span>
          </div>

          <div className="step04-columns-wrapper" style={{ display: 'flex', gap: '24px', width: '100%', flexWrap: 'wrap' }}>
            
            {/* Left Column: Details */}
            <div style={{ flex: 2, display: 'flex', flexDirection: 'column', gap: '24px', minWidth: '300px' }}>
              
              {/* Prestation Info */}
              <div style={{ padding: '24px', backgroundColor: 'var(--color-bg-fbfbfe)', border: '1px solid var(--color-border-input)', borderRadius: '16px' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '16px' }}>
                  <h3 style={{ fontSize: '18px', fontWeight: 600, color: 'var(--color-text-dark)', margin: 0, display: 'flex', alignItems: 'center', gap: '8px' }}>
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="var(--color-primary)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M2 9a3 3 0 0 1 3-3h14a3 3 0 0 1 3 3v3a3 3 0 0 1-3 3H5a3 3 0 0 1-3-3V9z"></path><path d="M4 15v2a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-2"></path>
                    </svg>
                    Prestation
                  </h3>
                  <button type="button" style={{ background: 'none', border: 'none', color: 'var(--color-primary)', fontSize: '14px', fontWeight: 500, cursor: 'pointer', textDecoration: 'underline' }}>Modifier</button>
                </div>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                    <span style={{ color: 'var(--color-text-secondary)', fontSize: '15px' }}>Canapé (Nettoyage en profondeur)</span>
                    <span style={{ fontWeight: 600, color: 'var(--color-text-dark)' }}>89,00 €</span>
                  </div>
                  <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                    <span style={{ color: 'var(--color-text-secondary)', fontSize: '15px' }}>Plan : Canapé 4/5 places</span>
                  </div>
                </div>
                
                <div style={{ height: '1px', background: 'var(--color-border-input)', margin: '16px 0' }}></div>
                
                <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                    <span style={{ color: 'var(--color-text-secondary)', fontSize: '15px' }}>Tapis, Moquette 2.3×1.6m (x1)</span>
                    <span style={{ fontWeight: 600, color: 'var(--color-text-dark)' }}>39,20 €</span>
                  </div>
                  <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                    <span style={{ color: 'var(--color-text-secondary)', fontSize: '15px' }}>Fauteuil (x2)</span>
                    <span style={{ fontWeight: 600, color: 'var(--color-text-dark)' }}>62,40 €</span>
                  </div>
                </div>
              </div>

              {/* Date & Time Info */}
              <div style={{ padding: '24px', backgroundColor: 'var(--color-bg-fbfbfe)', border: '1px solid var(--color-border-input)', borderRadius: '16px' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '16px' }}>
                  <h3 style={{ fontSize: '18px', fontWeight: 600, color: 'var(--color-text-dark)', margin: 0, display: 'flex', alignItems: 'center', gap: '8px' }}>
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="var(--color-primary)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect><line x1="16" y1="2" x2="16" y2="6"></line><line x1="8" y1="2" x2="8" y2="6"></line><line x1="3" y1="10" x2="21" y2="10"></line>
                    </svg>
                    Date & Heure
                  </h3>
                  <button type="button" style={{ background: 'none', border: 'none', color: 'var(--color-primary)', fontSize: '14px', fontWeight: 500, cursor: 'pointer', textDecoration: 'underline' }}>Modifier</button>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
                  <div style={{ padding: '12px 16px', background: 'var(--color-bg-white)', border: '1px solid var(--color-border-input)', borderRadius: '8px', flex: 1 }}>
                    <div style={{ fontSize: '13px', color: 'var(--color-text-muted)', marginBottom: '4px' }}>Date sélectionnée</div>
                    <div style={{ fontSize: '15px', fontWeight: 600, color: 'var(--color-text-dark)' }}>Samedi 28 Mars 2026</div>
                  </div>
                  <div style={{ padding: '12px 16px', background: 'var(--color-bg-white)', border: '1px solid var(--color-border-input)', borderRadius: '8px', flex: 1 }}>
                    <div style={{ fontSize: '13px', color: 'var(--color-text-muted)', marginBottom: '4px' }}>Heure d'arrivée</div>
                    <div style={{ fontSize: '15px', fontWeight: 600, color: 'var(--color-text-dark)' }}>14:00 (Durée est. 2h)</div>
                  </div>
                </div>
              </div>

              {/* Personal Info */}
              <div style={{ padding: '24px', backgroundColor: 'var(--color-bg-fbfbfe)', border: '1px solid var(--color-border-input)', borderRadius: '16px' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '16px' }}>
                  <h3 style={{ fontSize: '18px', fontWeight: 600, color: 'var(--color-text-dark)', margin: 0, display: 'flex', alignItems: 'center', gap: '8px' }}>
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="var(--color-primary)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle>
                    </svg>
                    Informations
                  </h3>
                  <button type="button" style={{ background: 'none', border: 'none', color: 'var(--color-primary)', fontSize: '14px', fontWeight: 500, cursor: 'pointer', textDecoration: 'underline' }}>Modifier</button>
                </div>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }}>
                  <div>
                    <div style={{ fontSize: '13px', color: 'var(--color-text-muted)', marginBottom: '4px' }}>Nom complet</div>
                    <div style={{ fontSize: '15px', fontWeight: 500, color: 'var(--color-text-dark)' }}>Jean Dupont</div>
                  </div>
                  <div>
                    <div style={{ fontSize: '13px', color: 'var(--color-text-muted)', marginBottom: '4px' }}>Téléphone</div>
                    <div style={{ fontSize: '15px', fontWeight: 500, color: 'var(--color-text-dark)' }}>+33 6 12 34 56 78</div>
                  </div>
                  <div style={{ gridColumn: '1 / -1' }}>
                    <div style={{ fontSize: '13px', color: 'var(--color-text-muted)', marginBottom: '4px' }}>Adresse d'intervention</div>
                    <div style={{ fontSize: '15px', fontWeight: 500, color: 'var(--color-text-dark)' }}>123 Avenue des Champs-Élysées, 75008 Paris</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column: Price Summary & Confirm */}
            <div style={{ flex: 1, minWidth: '300px', display: 'flex', flexDirection: 'column' }}>
              <div style={{ 
                padding: '16px', 
                backgroundColor: 'var(--color-bg-white)', 
                border: '2px solid var(--color-primary)', 
                borderRadius: '16px',
                boxShadow: 'var(--shadow-primary-04)',
                position: 'sticky',
                top: '24px',
                flex: 1,
                display: 'flex',
                flexDirection: 'column'
              }}>
                <h3 style={{ fontSize: '18px', fontWeight: 700, color: 'var(--color-text-dark)', marginBottom: '16px', marginTop: 0 }}>Total à payer</h3>
                
                <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', flex: 1 }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <span style={{ color: 'var(--color-text-secondary)', fontSize: '15px' }}>Prestation principale</span>
                    <span style={{ fontWeight: 500, color: 'var(--color-text-dark)' }}>89,00 €</span>
                  </div>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <span style={{ color: 'var(--color-text-secondary)', fontSize: '15px' }}>Options (3)</span>
                    <span style={{ fontWeight: 500, color: 'var(--color-text-dark)' }}>101,60 €</span>
                  </div>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <span style={{ color: 'var(--color-success)', fontSize: '15px', display: 'flex', alignItems: 'center', gap: '4px' }}>
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M20.59 13.41l-7.17 7.17a2 2 0 0 1-2.83 0L2 12V2h10l8.59 8.59a2 2 0 0 1 0 2.82z"></path><line x1="7" y1="7" x2="7.01" y2="7"></line></svg>
                      Remise extras (-20%)
                    </span>
                    <span style={{ fontWeight: 500, color: 'var(--color-success)' }}>Inclus</span>
                  </div>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <span style={{ color: 'var(--color-text-secondary)', fontSize: '15px' }}>TVA (20%)</span>
                    <span style={{ fontWeight: 500, color: 'var(--color-text-dark)' }}>38,12 €</span>
                  </div>
                  
                  <div style={{ height: '1px', background: 'var(--color-border)', margin: '4px 0' }}></div>
                  
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end' }}>
                    <span style={{ color: 'var(--color-text-dark)', fontSize: '16px', fontWeight: 600 }}>Total TTC</span>
                    <span style={{ fontWeight: 800, color: 'var(--color-primary)', fontSize: '28px', lineHeight: 1 }}>190,60 €</span>
                  </div>
                </div>

                <div style={{ marginTop: '20px', flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'flex-end' }}>
                  <button 
                    type="button" 
                    className="btn btn-primary" 
                    onClick={onNext}
                    style={{ width: '100%', padding: '14px', fontSize: '16px', display: 'flex', justifyContent: 'center', gap: '8px', alignItems: 'center' }}
                  >
                    Confirmer et Payer
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline>
                    </svg>
                  </button>
                  <p style={{ textAlign: 'center', fontSize: '12px', color: 'var(--color-text-light)', marginTop: '8px', marginBottom: 0 }}>
                    Paiement 100% sécurisé via Stripe
                  </p>
                </div>

                {/* Additional Summary Section */}
                <div style={{ marginTop: '16px', padding: '12px', backgroundColor: 'var(--color-bg-fbfbfe)', borderRadius: '8px', border: '1px solid var(--color-border-input)' }}>
                  <h4 style={{ fontSize: '14px', fontWeight: 600, color: 'var(--color-text-dark)', margin: '0 0 8px 0' }}>Récapitulatif</h4>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="var(--color-success)" strokeWidth="2">
                        <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                        <polyline points="22 4 12 14.01 9 11.01"></polyline>
                      </svg>
                      <span style={{ fontSize: '13px', color: 'var(--color-text-secondary)' }}>Professionnel certifié</span>
                    </div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="var(--color-success)" strokeWidth="2">
                        <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                        <polyline points="22 4 12 14.01 9 11.01"></polyline>
                      </svg>
                      <span style={{ fontSize: '13px', color: 'var(--color-text-secondary)' }}>Garantie satisfaction</span>
                    </div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="var(--color-success)" strokeWidth="2">
                        <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                        <polyline points="22 4 12 14.01 9 11.01"></polyline>
                      </svg>
                      <span style={{ fontSize: '13px', color: 'var(--color-text-secondary)' }}>Équipements professionnels</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="plan-step-footer">
        <span style={{ fontSize: 16, color: 'var(--color-text-muted)' }}>Étape 5 sur 6</span>
        <div style={{ display: 'flex', gap: 24 }}>
          <button className="btn btn-secondary" onClick={onBack}>Retour</button>
        </div>
      </div>
    </div>
  )
}

export default Step04
