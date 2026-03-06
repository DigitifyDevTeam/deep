import { useState } from 'react'
import './App.css'
import Step01 from './components/Step01'
import Step02 from './components/Step02'
import Step02Prestation from './components/Step02Prestation'
import Step03DateHeure from './components/Step03DateHeure'
import Step04 from './components/Step04'
import Step05 from './components/Step05'

const STEPS = [
  { id: 1, title: 'Prestation & Plan', description: 'Choisissez votre type de prestation et votre plan.' },
  { id: 2, title: 'Prestations supplémentaires', description: 'Des prestations supplémentaires ?' },
  { id: 3, title: 'Date et Heure', description: 'Sélectionnez le créneau qui vous convient.' },
  { id: 4, title: 'Informations personnelles', description: 'Présentez-vous pour commencer.' },
  { id: 5, title: 'Vérification d\'identité', description: 'Vérifiez votre identité pour des raisons de sécurité.' },
  { id: 6, title: 'Activer le compte', description: 'Dernière étape ! Activons votre compte.' },
]

function App() {
  const [currentStep, setCurrentStep] = useState(1)
  const [prestationType, setPrestationType] = useState<string>('')

  const handleNext = () => {
    if (currentStep < 6) setCurrentStep(currentStep + 1)
  }

  const handleBack = () => {
    if (currentStep > 1) setCurrentStep(currentStep - 1)
  }

  return (
    <div className="multistep-form-wrapper">
      {/* Tag Container */}
      <div className="tag-container">
        <div className="tab-pill">
          <span>Deep Cleaning</span>
        </div>
      </div>

      {/* Main Form Container */}
      <div className="form-main-container">
        <div className="form-card">
          <div className="form-inner">
            <aside className="sidebar sidebar-brix">
              <div className="sidebar-top">
                <div className="sidebar-logo-brix">
                  <img src="/logo_4.png" alt="Logo" className="sidebar-logo-img" />
                </div>
                <div className="sidebar-divider" />
                <div className="sidebar-steps-vertical">
                  {STEPS.map((step, index) => (
                    <div key={step.id} className="step-item-vertical">
                      <div className="step-icon-column">
                        <div className={`step-dot-brix ${currentStep >= step.id ? 'active' : 'inactive'}`}>
                          <span>{step.id}</span>
                        </div>
                        {index < STEPS.length - 1 && (
                          <div className={`step-connector ${currentStep > step.id ? 'active' : 'inactive'}`} />
                        )}
                      </div>
                      <div className="step-texts">
                        <span className="step-title">{step.title}</span>
                        <span className="step-paragraph">{step.description}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <div className="sidebar-bottom">
                <div className="sidebar-bottom-inner">
                  <div>
                    <div className="sidebar-help-title">Besoin d'aide ?</div>
                    <div className="sidebar-help-text">discuter avec le support en direct</div>
                  </div>
                  <button className="help-button help-button-headphones" type="button" aria-label="Chat support">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M3 18v-6a9 9 0 0 1 18 0v6" />
                      <path d="M21 19a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3zM3 19a2 2 0 0 0 2 2h1a2 2 0 0 0 2-2v-3a2 2 0 0 0-2-2H3z" />
                    </svg>
                  </button>
                </div>
              </div>
            </aside>

            {/* Right Column - Form Content */}
            <main className="form-content">
              {currentStep === 1 && (
                <Step02 prestationType={prestationType} onPrestationChange={setPrestationType} onNext={handleNext} onBack={handleBack} />
              )}
              {currentStep === 2 && (
                <Step02Prestation onNext={handleNext} onBack={handleBack} />
              )}
              {currentStep === 3 && (
                <Step03DateHeure onNext={handleNext} onBack={handleBack} />
              )}
              {currentStep === 4 && (
                <Step01 onNext={handleNext} onBack={handleBack} />
              )}
              {currentStep === 5 && (
                <Step04 onNext={handleNext} onBack={handleBack} />
              )}
              {currentStep === 6 && (
                <Step05 onNext={handleNext} onBack={handleBack} />
              )}
            </main>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
