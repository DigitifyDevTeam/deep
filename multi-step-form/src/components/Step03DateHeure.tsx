import React, { useState, useMemo } from 'react'

const TIME_SLOTS = ['9h00', '10h30', '12h00', '13h30', '15h00', '16h30', '18h00', '19h30', '21h00']
const WEEKDAYS = ['lun', 'mar', 'mer', 'jeu', 'ven', 'sam'] as const
const MONTHS = ['janvier', 'février', 'mars', 'avril', 'mai', 'juin', 'juillet', 'août', 'septembre', 'octobre', 'novembre', 'décembre']

/* 5 slots indisponibles (occupés) - dayIndex 0-5, timeIndex 0-8 */
const UNAVAILABLE_SLOTS: Array<{ dayIndex: number; timeIndex: number }> = [
  { dayIndex: 0, timeIndex: 0 },
  { dayIndex: 1, timeIndex: 2 },
  { dayIndex: 2, timeIndex: 4 },
  { dayIndex: 3, timeIndex: 6 },
  { dayIndex: 4, timeIndex: 1 },
]

function getWeekDates(date: Date): Date[] {
  const d = new Date(date)
  const day = d.getDay()
  const diff = day === 0 ? -6 : 1 - day
  d.setDate(d.getDate() + diff)
  const week: Date[] = []
  for (let i = 0; i < 6; i++) {
    week.push(new Date(d))
    d.setDate(d.getDate() + 1)
  }
  return week
}

function formatSlotKey(date: Date, time: string): string {
  const y = date.getFullYear()
  const m = String(date.getMonth() + 1).padStart(2, '0')
  const d = String(date.getDate()).padStart(2, '0')
  return `${y}-${m}-${d}_${time}`
}

interface Step03DateHeureProps {
  readonly onNext: () => void
  readonly onBack: () => void
}

function Step03DateHeure({ onNext, onBack }: Step03DateHeureProps) {
  const [viewDate, setViewDate] = useState(() => {
    const d = new Date()
    const day = d.getDay()
    const diff = day === 0 ? -6 : 1 - day
    d.setDate(d.getDate() + diff)
    return d
  })
  const [selectedSlot, setSelectedSlot] = useState<string | null>(null)

  const weekDates = useMemo(() => getWeekDates(new Date(viewDate)), [viewDate])
  const monthLabel = `${MONTHS[viewDate.getMonth()]} ${viewDate.getFullYear()}`

  const prevWeek = () => {
    const d = new Date(viewDate)
    d.setDate(d.getDate() - 7)
    setViewDate(d)
  }

  const nextWeek = () => {
    const d = new Date(viewDate)
    d.setDate(d.getDate() + 7)
    setViewDate(d)
  }

  const isSlotUnavailable = (dayIndex: number, timeIndex: number) =>
    UNAVAILABLE_SLOTS.some((s) => s.dayIndex === dayIndex && s.timeIndex === timeIndex)

  const selectSlot = (date: Date, time: string, dayIndex: number, timeIndex: number) => {
    if (isSlotUnavailable(dayIndex, timeIndex)) return
    const key = formatSlotKey(date, time)
    setSelectedSlot((prev) => (prev === key ? null : key))
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

          <div className="date-heure-calendar">
            <div className="calendar-header">
              <button type="button" className="calendar-nav-btn" onClick={prevWeek} aria-label="Semaine précédente">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M15 18l-6-6 6-6" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </button>
              <span className="calendar-month-label">{monthLabel}</span>
              <button type="button" className="calendar-nav-btn" onClick={nextWeek} aria-label="Semaine suivante">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M9 18l6-6-6-6" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </button>
            </div>

            <div className="calendar-grid">
              <div className="calendar-corner" />
              {WEEKDAYS.map((day, i) => (
                <div key={day} className="calendar-day-header">
                  <span className="day-name">{day}</span>
                  <span className="day-num">{weekDates[i]?.getDate()}</span>
                </div>
              ))}
              {TIME_SLOTS.map((time, timeIndex) => (
                <React.Fragment key={time}>
                  <div className="calendar-time-header">{time}</div>
                  {weekDates.map((date, dayIndex) => {
                    const key = formatSlotKey(date, time)
                    const isSelected = selectedSlot === key
                    const isUnavailable = isSlotUnavailable(dayIndex, timeIndex)
                    return (
                      <button
                        key={key}
                        type="button"
                        className={`calendar-slot ${isSelected ? 'selected' : ''} ${isUnavailable ? 'unavailable' : ''}`}
                        onClick={() => selectSlot(date, time, dayIndex, timeIndex)}
                        disabled={isUnavailable}
                      >
                        {isSelected && (
                          <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                            <path d="M2 7L5 10L12 3" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                          </svg>
                        )}
                        {isUnavailable && <span className="slot-unavailable-label">Occupé</span>}
                      </button>
                    )
                  })}
                </React.Fragment>
              ))}
            </div>
          </div>
          <p style={{ fontSize: 12, color: 'var(--color-text-muted)', lineHeight: 1.5, marginTop: 12 }}>
            * Les heures de réservation sont approximatives et peuvent varier de 15 minutes.
          </p>
        </div>
      </div>

      <div className="plan-step-footer">
        <span style={{ fontSize: 16, color: 'var(--color-text-muted)' }}>Étape 3 sur 6</span>
        <div style={{ display: 'flex', gap: 24 }}>
          <button className="btn btn-secondary" onClick={onBack}>Retour</button>
          <button className="btn btn-primary" onClick={onNext} disabled={!selectedSlot}>Continuer</button>
        </div>
      </div>
    </div>
  )
}

export default Step03DateHeure
