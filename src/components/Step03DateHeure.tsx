import { useState } from 'react'
import ProCalendar from './ProCalendar'

const TIME_SLOTS = [
  "9h00", "10h30", "12h00", "13h30", 
  "15h00", "16h30", "18h00", "19h30", 
  "21h00"
]

interface Step03DateHeureProps {
  readonly onNext: () => void
  readonly onBack: () => void
}

function Step03DateHeure({ onNext, onBack }: Step03DateHeureProps) {
  const [month, setMonth] = useState<Date>(() => new Date())
  const [selectedDate, setSelectedDate] = useState<Date | undefined>(() => new Date())
  const [time, setTime] = useState<string | undefined>()

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
            <div className="stepper-dot completed">2</div>
            <span className="stepper-title">Prestations supplémentaires</span>
          </div>
          <div className="stepper-chevron">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M9 18l6-6-6-6" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>
          <div className="stepper-step">
            <div className="stepper-dot active">3</div>
            <span className="stepper-title active">Date et Heure</span>
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
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', width: '100%', flexWrap: 'wrap', gap: 16 }}>
            <h2 className="form-step-title" style={{ marginBottom: 0 }}>Date et Heure</h2>
            <span style={{ fontSize: 16, color: 'var(--color-text-muted)' }}>Étape 3/6</span>
          </div>
          <p style={{ fontSize: 14, color: 'var(--color-text-muted)', lineHeight: 1.5, marginTop: -8 }}>
            Sélectionnez le créneau qui vous convient.
          </p>

          <div style={{ display: 'flex', gap: '24px', width: '100%', marginTop: '16px' }}>
            {/* Calendar Section */}
            <div className="pro-calendar-wrapper" style={{ flex: 2 }}>
              <ProCalendar
                selected={selectedDate}
                onSelect={setSelectedDate}
                month={month}
                onMonthChange={setMonth}
              />
            </div>

            {/* Time Slots Section */}
            <div 
              style={{ 
                flex: 1, 
                border: '1px solid var(--color-border-input)', 
                borderRadius: '12px', 
                padding: '24px', 
                boxShadow: 'var(--shadow-neutral-01)',
                display: 'flex',
                flexDirection: 'column'
              }}
            >
              <p style={{ marginBottom: '16px', fontSize: '16px', fontWeight: 600, color: 'var(--color-text-muted)' }}>
                Sélectionnez un créneau horaire
              </p>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, minmax(0, 1fr))', gap: '12px', flex: 1 }}>
                {TIME_SLOTS.map((slot, index) => {
                  const isReserved = index === 2 || index === 5 // Simulate reserved slots
                  const isSelected = time === slot

                  if (isReserved) {
                    return (
                      <button
                        key={slot}
                        type="button"
                        disabled
                        style={{
                          padding: '0',
                          height: '100%',
                          minHeight: '48px',
                          fontSize: '16px',
                          fontWeight: 500,
                          borderRadius: '8px',
                          border: '1px solid #fdba74',
                          backgroundColor: '#fff7ed',
                          color: '#ea580c',
                          cursor: 'not-allowed',
                          transition: 'all 0.2s',
                          width: '100%',
                        }}
                      >
                        Réservé
                      </button>
                    )
                  }

                  return (
                    <button
                      key={slot}
                      type="button"
                      onClick={() => setTime(slot)}
                      style={{
                        padding: '0',
                        height: '100%',
                        minHeight: '48px',
                        fontSize: '16px',
                        fontWeight: 500,
                        borderRadius: '8px',
                        border: isSelected ? '2px solid var(--color-primary)' : '1px solid var(--color-border-input)',
                        backgroundColor: isSelected ? 'var(--color-primary)' : 'transparent',
                        color: isSelected ? 'white' : 'var(--color-text-dark)',
                        cursor: 'pointer',
                        transition: 'all 0.2s',
                        width: '100%',
                      }}
                      onMouseEnter={(e) => {
                        if (!isSelected) {
                          e.currentTarget.style.borderColor = 'var(--color-primary)'
                        }
                      }}
                      onMouseLeave={(e) => {
                        if (!isSelected) {
                          e.currentTarget.style.borderColor = 'var(--color-border-input)'
                        }
                      }}
                    >
                      {slot}
                    </button>
                  )
                })}
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="plan-step-footer" style={{ marginTop: 24 }}>
        <button 
          type="button"
          onClick={() => {
            setSelectedDate(new Date())
            setTime(undefined)
          }}
          style={{
            background: 'none',
            border: 'none',
            fontSize: '14px',
            fontWeight: 600,
            cursor: 'pointer',
            padding: '8px 16px'
          }}
        >
          Reset
        </button>
        <div style={{ display: 'flex', gap: 24 }}>
          <button className="btn btn-secondary" onClick={onBack}>Retour</button>
          <button 
            className="btn btn-primary" 
            onClick={onNext} 
            disabled={!selectedDate || !time}
            style={{ backgroundColor: 'var(--color-primary)', backgroundImage: 'none', borderColor: 'var(--color-primary)' }}
          >
            Suivant
          </button>
        </div>
      </div>
    </div>
  )
}

export default Step03DateHeure
