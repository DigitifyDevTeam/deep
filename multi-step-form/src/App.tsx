import { useState } from 'react'
import './App.css'
import Step01 from './components/Step01'
import Step02 from './components/Step02'
import Step03 from './components/Step03'
import Step04 from './components/Step04'
import Step05 from './components/Step05'

const STEPS = [
  { id: 1, title: 'Type de prestation', description: 'Choisissez votre type de prestation.' },
  { id: 2, title: 'Plan', description: 'Choisissez le plan qui correspond à vos besoins.' },
  { id: 3, title: 'Informations personnelles', description: 'Présentez-vous pour commencer.' },
  { id: 4, title: 'Vérification d\'identité', description: 'Vérifiez votre identité pour des raisons de sécurité.' },
  { id: 5, title: 'Activer le compte', description: 'Dernière étape ! Activons votre compte.' },
]

function App() {
  const [currentStep, setCurrentStep] = useState(1)
  const [selectedPrestation, setSelectedPrestation] = useState<string>('canape')

  const handleNext = () => {
    if (currentStep < 5) setCurrentStep(currentStep + 1)
  }

  const handleBack = () => {
    if (currentStep > 1) setCurrentStep(currentStep - 1)
  }

  return (
    <div className="multistep-form-wrapper">
      {/* Tag Container */}
      <div className="tag-container">
        <div className="tab-pill">
          <span>Formulaire multi-étapes V1</span>
        </div>
      </div>

      {/* Main Form Container */}
      <div className="form-main-container">
        <div className="form-card">
          <div className="form-inner">
            {/* Side Bar - brix templates style */}
            <aside className="sidebar sidebar-brix">
              <div className="sidebar-top">
                <div className="sidebar-logo-brix">
                  <div className="sidebar-logo-dots">
                    <span /><span /><span /><span />
                  </div>
                  <span className="sidebar-logo-text-brix">
                    <strong>brix</strong>{' '}
                    <span className="sidebar-logo-templates">templates</span>
                  </span>
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
                <Step02
                  selectedPrestation={selectedPrestation}
                  onSelectPrestation={setSelectedPrestation}
                  onNext={handleNext}
                  onBack={handleBack}
                />
              )}
              {currentStep === 2 && (
                <Step03
                  selectedPrestation={selectedPrestation}
                  onNext={handleNext}
                  onBack={handleBack}
                />
              )}
              {currentStep === 3 && (
                <Step01 onNext={handleNext} onBack={handleBack} />
              )}
              {currentStep === 4 && (
                <Step04 onNext={handleNext} onBack={handleBack} />
              )}
              {currentStep === 5 && (
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
