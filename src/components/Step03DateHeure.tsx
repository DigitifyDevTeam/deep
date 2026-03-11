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
        <div style={{ display: 'flex', flexDirection: 'column', gap: 15, paddingTop: 32 }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', width: '100%', flexWrap: 'wrap', gap: 16 }}>
            <h2 className="form-step-title" style={{ marginBottom: 0 }}>Date et Heure</h2>
            <span style={{ fontSize: 16, color: 'var(--color-text-muted)' }}>Étape 3/6</span>
          </div>
          <p style={{ fontSize: 14, color: 'var(--color-text-muted)', lineHeight: 1.5, marginTop: -8 }}>
            Sélectionnez le créneau qui vous convient.
          </p>

          <div className="date-heure-row" style={{ display: 'flex', gap: '24px', width: '100%', marginTop: '16px' }}>
            {/* Calendar Section */}
            <div className="pro-calendar-wrapper" style={{ flex: 2, minWidth: 0 }}>
              <ProCalendar
                selected={selectedDate}
                onSelect={setSelectedDate}
                month={month}
                onMonthChange={setMonth}
              />
            </div>

            {/* Time Slots Section - Desktop: vertical list, Mobile: grid */}
            <div 
              className="time-slots-wrapper"
              style={{ 
                flex: 1, 
                minWidth: 0,
                display: 'flex',
                flexDirection: 'column'
              }}
            >
              <p className="time-slots-header" style={{ marginBottom: '16px', fontSize: '16px', fontWeight: 600, color: 'var(--color-text-muted)', display: 'flex', alignItems: 'center', gap: '8px' }}>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="10"/>
                  <polyline points="12 6 12 12 16 14"/>
                </svg>
                Sélectionnez un créneau horaire


              </p>
              <div className="time-slots-list" style={{ display: 'grid', gridTemplateColumns: 'repeat(2, minmax(0, 1fr))', gap: '12px', flex: 1 }}>
                {TIME_SLOTS.map((slot, index) => {
                  const isReserved = index === 2 || index === 5 // Simulate reserved slots
                  const isSelected = time === slot

                  if (isReserved) {
                    return (
                      <button
                        key={slot}
                        type="button"
                        disabled
                        className="time-slot-btn time-slot-reserved"
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
                        Complet
                      </button>
                    )
                  }

                  return (
                    <button
                      key={slot}
                      type="button"
                      onClick={() => setTime(slot)}
                      className="time-slot-btn"
                      style={{
                        padding: '0',
                        height: '100%',
                        minHeight: '48px',
                        fontSize: '16px',
                        fontWeight: 500,
                        borderRadius: '8px',
                        border: isSelected ? '2px solid var(--color-primary)' : '1px solid var(--color-primary-border)',
                        background: isSelected ? 'var(--gradient-primary)' : 'var(--color-bg-f9f8ff)',
                        color: isSelected ? 'white' : 'var(--color-primary)',
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
                          e.currentTarget.style.borderColor = 'var(--color-primary-border)'
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
        <span style={{ fontSize: 16, color: 'var(--color-text-muted)' }}>Étape 3 sur 6</span>
        <div style={{ display: 'flex', gap: 24 }}>
          <button className="btn btn-secondary" onClick={onBack}>Retour</button>
          <button 
            className="btn btn-primary" 
            onClick={onNext} 
            disabled={!selectedDate || !time}
            style={{ backgroundColor: 'var(--color-primary)', backgroundImage: 'none', borderColor: 'var(--color-primary)' }}
          >
            Continuer
          </button>
        </div>
      </div>
    </div>
  )
}

export default Step03DateHeure
