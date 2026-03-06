import { useState } from 'react'

interface Step01Props {
  onNext: () => void
  onBack: () => void
}

function Step01({ onNext, onBack }: Step01Props) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    role: '',
    phone: '',
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }))
  }

  return (
    <div className="form-step-card">
      <div style={{ display: 'flex', flexDirection: 'column', gap: 32, width: '100%' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', width: '100%' }}>
          <h2 className="form-step-title" style={{ marginBottom: 0 }}>Informations personnelles</h2>
          <span style={{ fontSize: 16, color: 'var(--color-text-muted)' }}>Étape 4/6</span>
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 20, width: '100%' }}>
          {/* Row 1: Name + Email */}
          <div className="input-row">
            <div className="input-group" style={{ flex: 1, minWidth: 274 }}>
              <label className="input-label">Full Name</label>
              <div className="input-field">
                <input
                  type="text"
                  name="name"
                  placeholder="Enter your name"
                  value={formData.name}
                  onChange={handleChange}
                />
              </div>
            </div>
            <div className="input-group" style={{ flex: 1, minWidth: 274 }}>
              <label className="input-label">Adresse e-mail</label>
              <div className="input-field">
                <input
                  type="email"
                  name="email"
                  placeholder="Saisissez votre e-mail"
                  value={formData.email}
                  onChange={handleChange}
                />
              </div>
            </div>
          </div>

          {/* Row 2: Company + Role */}
          <div className="input-row">
            <div className="input-group" style={{ flex: 1, minWidth: 274 }}>
              <label className="input-label">Entreprise</label>
              <div className="input-field">
                <input
                  type="text"
                  name="company"
                  placeholder="Saisissez le nom de l'entreprise"
                  value={formData.company}
                  onChange={handleChange}
                />
              </div>
            </div>
            <div className="input-group" style={{ flex: 1, minWidth: 274 }}>
              <label className="input-label">Poste</label>
              <div className="input-field">
                <input
                  type="text"
                  name="role"
                  placeholder="Saisissez votre poste"
                  value={formData.role}
                  onChange={handleChange}
                />
              </div>
            </div>
          </div>

          {/* Row 3: Phone (full width) */}
          <div className="input-row">
            <div className="input-group" style={{ flex: 1, minWidth: '100%' }}>
              <label className="input-label">Numéro de téléphone</label>
              <div className="input-field">
                <input
                  type="tel"
                  name="phone"
                  placeholder="Saisissez votre numéro de téléphone"
                  value={formData.phone}
                  onChange={handleChange}
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="plan-step-footer">
        <span style={{ fontSize: 16, color: 'var(--color-text-muted)' }}>Étape 4 sur 6</span>
        <div style={{ display: 'flex', gap: 24 }}>
          <button className="btn btn-secondary" onClick={onBack}>Retour</button>
          <button className="btn btn-primary" onClick={onNext}>Suivant</button>
        </div>
      </div>
    </div>
  )
}

export default Step01
