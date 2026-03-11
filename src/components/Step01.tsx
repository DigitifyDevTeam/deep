import { useState, useRef, useEffect } from 'react'

interface Step01Props {
  onNext: () => void
  onBack: () => void
}

function Step01({ onNext, onBack }: Step01Props) {
  const addressInputRef = useRef<HTMLInputElement>(null)
  const [formData, setFormData] = useState({
    nom: '',
    prenom: '',
    telephone: '',
    email: '',
    adresse: '',
    ville: '',
    codePostal: '',
    codePromo: '',
    autresInformations: '',
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }))
  }

  useEffect(() => {
    const initAutocomplete = () => {
      if (!addressInputRef.current || !window.google?.maps?.places) return
      const autocomplete = new window.google.maps.places.Autocomplete(addressInputRef.current, {
        types: ['address'],
        componentRestrictions: { country: ['fr'] },
      })
      autocomplete.addListener('place_changed', () => {
        const place = autocomplete.getPlace()
        const addr = place.formatted_address || ''
        let ville = ''
        let codePostal = ''
        for (const c of place.address_components || []) {
          if (c.types.includes('postal_code')) codePostal = c.long_name
          if (c.types.includes('locality')) ville = c.long_name
          else if (c.types.includes('administrative_area_level_2') && !ville) ville = c.long_name
        }
        setFormData((prev) => ({ ...prev, adresse: addr, ville, codePostal }))
      })
    }
    const id = setInterval(() => {
      if (addressInputRef.current && window.google?.maps?.places) {
        clearInterval(id)
        initAutocomplete()
      }
    }, 100)
    return () => clearInterval(id)
  }, [])

  return (
    <div className="form-step-card form-step-v2">
      <div style={{ display: 'flex', flexDirection: 'column', gap: 24, width: '100%' }}>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 40, paddingTop: 32 }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', width: '100%' }}>
            <h2 className="form-step-title" style={{ marginBottom: 8 }}>Merci de renseigner vos coordonnées de contact</h2>
            <span style={{ fontSize: 16, color: 'var(--color-text-muted)' }}>Étape 4/6</span>
          </div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 20, width: '100%' }}>
          {/* Row 1: Nom + Prénom */}
          <div className="input-row">
            <div className="input-group" style={{ flex: 1, minWidth: 274 }}>
              <label className="input-label">Nom</label>
              <div className="input-field">
                <input
                  type="text"
                  name="nom"
                  placeholder="Votre nom"
                  value={formData.nom}
                  onChange={handleChange}
                />
              </div>
            </div>
            <div className="input-group" style={{ flex: 1, minWidth: 274 }}>
              <label className="input-label">Prénom</label>
              <div className="input-field">
                <input
                  type="text"
                  name="prenom"
                  placeholder="Votre prénom"
                  value={formData.prenom}
                  onChange={handleChange}
                />
              </div>
            </div>
          </div>

          {/* Row 2: Téléphone + Email */}
          <div className="input-row">
            <div className="input-group" style={{ flex: 1, minWidth: 274 }}>
              <label className="input-label">Numéro de téléphone</label>
              <div className="input-field">
                <input
                  type="tel"
                  name="telephone"
                  placeholder="Votre numéro de téléphone"
                  value={formData.telephone}
                  onChange={handleChange}
                />
              </div>
            </div>
            <div className="input-group" style={{ flex: 1, minWidth: 274 }}>
              <label className="input-label">Email</label>
              <div className="input-field">
                <input
                  type="email"
                  name="email"
                  placeholder="Votre adresse e-mail"
                  value={formData.email}
                  onChange={handleChange}
                />
              </div>
            </div>
          </div>

          {/* Row 3: Adresse (full width) – Google Places Autocomplete */}
          <div className="input-row">
            <div className="input-group" style={{ flex: 1, minWidth: '100%' }}>
              <label className="input-label">Adresse</label>
              <div className="input-field">
                <input
                  ref={addressInputRef}
                  type="text"
                  name="adresse"
                  placeholder="Commencez à taper votre adresse..."
                  value={formData.adresse}
                  onChange={handleChange}
                  autoComplete="off"
                />
              </div>
            </div>
          </div>

          {/* Row 4: Ville + Code postal */}
          <div className="input-row">
            <div className="input-group" style={{ flex: 1, minWidth: 274 }}>
              <label className="input-label">Ville</label>
              <div className="input-field">
                <input
                  type="text"
                  name="ville"
                  placeholder="Votre ville"
                  value={formData.ville}
                  onChange={handleChange}
                />
              </div>
            </div>
            <div className="input-group" style={{ flex: 1, minWidth: 274 }}>
              <label className="input-label">Code postal</label>
              <div className="input-field">
                <input
                  type="text"
                  name="codePostal"
                  placeholder="Votre code postal"
                  value={formData.codePostal}
                  onChange={handleChange}
                />
              </div>
            </div>
          </div>

          {/* Row 5: Code promo (full width) */}
          <div className="input-row">
            <div className="input-group" style={{ flex: 1, minWidth: '100%' }}>
              <label className="input-label">Code promo (facultatif)</label>
              <div className="input-field">
                <input
                  type="text"
                  name="codePromo"
                  placeholder="Saisissez votre code promo si vous en avez un"
                  value={formData.codePromo}
                  onChange={handleChange}
                />
              </div>
            </div>
          </div>

          {/* Row 6: Autre informations (full width textarea) */}
          <div className="input-row">
            <div className="input-group" style={{ flex: 1, minWidth: '100%' }}>
              <label className="input-label">Autres informations</label>
              <div className="input-field" style={{ height: 'auto', padding: 0 }}>
                <textarea
                  name="autresInformations"
                  placeholder="Précisions supplémentaires, instructions pour l'accès..."
                  value={formData.autresInformations}
                  onChange={handleChange}
                  style={{
                    width: '100%',
                    minHeight: '100px',
                    border: 'none',
                    background: 'transparent',
                    outline: 'none',
                    padding: '12px 16px',
                    fontSize: '15px',
                    resize: 'vertical',
                    fontFamily: 'inherit'
                  }}
                />
              </div>
            </div>
          </div>
        </div>
        </div>
      </div>

      <div className="plan-step-footer" style={{ marginTop: 32 }}>
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
