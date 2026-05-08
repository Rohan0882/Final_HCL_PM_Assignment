import { Brain, Database, Shield, Zap, TrendingUp, Users, Layout, Cpu, Lock, Rocket, Target, BarChart3, Terminal, CheckCircle2, Activity as ActivityIcon, AlertCircle, Smartphone, Calendar, Search, ClipboardList, Braces, Layers, FileCode, ChevronRight, Activity, Stethoscope, MapPin, Wind, Thermometer, CloudLightning, Pill } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { useState } from 'react';
import { cn } from '../lib/utils';

interface Part2ProposalProps {
  onLaunchMVP?: () => void;
  onLaunchGamifiedMVP?: () => void;
  onLaunchFamilyMVP?: () => void;
  onLaunchAwarenessMVP?: () => void;
}

export default function Part2Proposal({ onLaunchMVP, onLaunchGamifiedMVP, onLaunchFamilyMVP, onLaunchAwarenessMVP }: Part2ProposalProps) {
  const [activeProduct, setActiveProduct] = useState(0);

  const products = [
    {
      hook: "The Hospitalization Risk Predictor",
      buyer: "Employers (Self-insured) & Insurers",
      soWhat: "Reducing high-cost admissions by 15% through proactive preventive care.",
      ahcFeatures: "HbA1c levels, Lipid profile (LDL/HDL), BMI trends.",
      claimsFeatures: "ICD-10 consultation history, previous claim frequency, ER visit patterns.",
      intersection: "Biometric-to-Claim Correlation: Mapping biometric risk (AHC) to utilization frequency (Claims) to identify 'Rising Risk' individuals.",
      model: "XGBoost (Extreme Gradient Boosting)",
      problemType: "Classification (Likelihood of Hospitalization)",
      stack: "Python, Scikit-Learn, AWS SageMaker, Snowflake",
      privacy: "Hashed identifiers for data joining; PII-free training sets.",
      mvp: "Static monthly 'High-Risk' cohort report.",
      fullVision: "Real-time predictive dashboard with automated care-coordination triggers.",
      explanation: {
        problemStatement: "Catastrophic healthcare claims (IPD) often stem from unmanaged chronic conditions. Employers lack a way to predict which 'stable' employee is heading toward an ER visit until the claim is already filed.",
        objective: "To identify the 'Rising Risk' cohort (top 5% of employees) who are likely to be hospitalized in the next 12 months, enabling early clinical intervention.",
        howSolving: "By merging AHC lab markers (biometric risk) with ICD-10 claim history (utilization risk), we create a 'Health Velocity' score that predicts acute episodes before they happen.",
        productFor: "Benefits Heads and Insurance TPAs who need to manage loss ratios.",
        whoCanBuy: "Self-insured corporates and Group Health Insurance (GHI) providers.",
        functionalRequirements: [
          "Automated ingestion of AHC lab files (CSV/HL7)",
          "Daily sync with Insurance TPA claim feeds",
          "Risk score visualization for Benefits Heads",
          "Automated trigger for OHC doctor outreach"
        ],
        impactShort: "Immediate identification of high-risk employees for immediate OHC consultation.",
        impactLong: "15-20% reduction in annual IPD spend and improved workforce health stability.",
        productDetail: "A predictive engine that identifies employees likely to be hospitalized in the next 6-12 months by merging clinical lab results with historical claim velocity.",
        whyAlgo: "We chose XGBoost over Logistic Regression because health data is non-linear and often contains missing values (e.g., missed AHC tests). XGBoost handles missingness natively and provides 'Feature Importance' scores, which are critical for clinical defensibility in front of medical boards.",
        whyStack: "Snowflake is used for its 'Data Clean Room' capabilities, allowing us to join AHC and Claims data without either party seeing the other's PII. AWS SageMaker is selected for its robust 'Model Monitor' which detects 'Data Drift'—essential in healthcare where clinical guidelines change over time.",
        otherOptions: "Other options included Deep Learning (RNNs), but they require significantly more data and lack the interpretability required for healthcare compliance.",
        privacyConsent: "We use 'Tokenization-at-Source'. PII is replaced with a unique token before data leaves the OHC or Insurer. The model only sees tokens, ensuring HIPAA compliance by design.",
        errorHandling: [
          "Data Quality Firewall: Automated ingestion checks for missing lab values (HbA1c/Lipids) with 24h retry logic.",
          "Model Drift Alerts: AWS SageMaker Model Monitor triggers alerts if the distribution of biometric risk scores shifts by >10%.",
          "Clinical Fallback: If biometric data is >12 months old, the system defaults to a baseline age/gender risk profile with a 'Data Stale' flag.",
          "API Circuit Breaker: Prevents cascading failures if the Insurance TPA claim feed is temporarily unreachable."
        ]
      }
    },
    {
      hook: "Adherence Sentinel",
      buyer: "Corporate Wellness Teams",
      soWhat: "Preventing acute episodes by ensuring 90%+ adherence to chronic treatment plans.",
      ahcFeatures: "Lab parameter stability (HbA1c, BP), longitudinal biometric trends.",
      claimsFeatures: "Pharmacy refill rates, OHC follow-up frequency, medication adherence codes.",
      intersection: "Adherence-to-Outcome Delta: Correlating pharmacy refill gaps with fluctuations in lab parameters.",
      model: "Time-series Anomaly Detection (Isolation Forest)",
      problemType: "Anomaly Detection (Adherence Drop)",
      stack: "Python, Scikit-Learn, AWS SageMaker, Snowflake",
      privacy: "Aggregated employer reporting; individual nudges via secure app.",
      mvp: "Weekly adherence alerts for wellness coaches.",
      fullVision: "Automated nudges via the Habit app when adherence drops.",
      explanation: {
        problemStatement: "Chronic disease management fails not because of bad medicine, but because of poor adherence. 50% of employees with hypertension stop taking medication within 6 months.",
        objective: "To detect 'silent' adherence drops in real-time and intervene before they lead to biometric spikes or ER visits.",
        howSolving: "We correlate pharmacy refill gaps (Claims) with biometric stability (AHC). If a refill is missed and BP rises, the system flags a 'Critical Adherence Gap'.",
        productFor: "Occupational Health Centers (OHC) and Wellness Managers.",
        whoCanBuy: "Enterprises with high chronic disease prevalence in their workforce.",
        functionalRequirements: [
          "Real-time pharmacy refill tracking",
          "Integration with wearable BP/Glucose monitors",
          "Automated nudge engine (SMS/App)",
          "Adherence dashboard for OHC nurses"
        ],
        impactShort: "Immediate improvement in medication compliance for flagged individuals.",
        impactLong: "Lower long-term complications (stroke, kidney failure) and reduced insurance premiums.",
        productDetail: "A monitoring system that detects when an employee's medication adherence drops below a critical threshold, potentially leading to a biometric spike.",
        whyAlgo: "Isolation Forest is ideal for anomaly detection because adherence drops are 'outliers' in a normally compliant population. It is computationally efficient and doesn't require labeled 'failure' data to start providing value.",
        whyStack: "The stack leverages Python's extensive scientific library. We chose Snowflake for its seamless scaling as the number of time-series data points (daily refills) grows.",
        otherOptions: "LSTMs were considered but deemed 'overkill' for the initial MVP where simple statistical anomalies provide 80% of the value with 20% of the complexity.",
        privacyConsent: "Employees opt-in via the 'Habit' app. The employer only sees 'Departmental Adherence Scores' (Aggregated), while the individual receives personalized nudges.",
        errorHandling: [
          "Refill Gap Validation: Cross-references travel data to distinguish between 'intentional non-adherence' and 'out-of-station' status.",
          "Sensor Calibration Watchdog: Detects 'impossible' biometric spikes (e.g., BP 240/120) and triggers a sensor recalibration request.",
          "Human-in-the-Loop: Critical adherence drops trigger a manual review task for the OHC nurse before an automated nudge is sent.",
          "Deduplication Engine: Ensures users aren't spammed with multiple alerts for the same missed dose."
        ]
      }
    },
    {
      hook: "The Productivity ROI Engine",
      buyer: "CHRO / CFO",
      soWhat: "Quantifying the 'Hidden Cost of Health' to justify wellness budget increases.",
      ahcFeatures: "Stress markers (Cortisol), biometric health scores, sleep data.",
      claimsFeatures: "Sick leave frequency, OHC visit volume, presenteeism markers.",
      intersection: "Health-Productivity Correlation: Mapping chronic risk levels to absenteeism and presenteeism costs.",
      model: "Multi-variate Regression (ElasticNet)",
      problemType: "Regression (Predicted Productivity Loss)",
      stack: "Python, Scikit-Learn, AWS SageMaker, Snowflake",
      privacy: "Differential privacy applied to all CHRO-level reports.",
      mvp: "Annual productivity impact report.",
      fullVision: "Real-time productivity forecasting tool.",
      explanation: {
        problemStatement: "HR budgets are often the first to be cut because 'Wellness' is seen as a cost center, not a profit driver. There is no hard link between health and the bottom line.",
        objective: "To prove the financial impact of health by correlating biometric risk with absenteeism and presenteeism costs.",
        howSolving: "We use Multi-variate Regression to find the 'Productivity Coefficient'—how much every 1% increase in workforce stress or HbA1c costs the company in lost man-hours.",
        productFor: "CHROs and CFOs looking to optimize human capital spend.",
        whoCanBuy: "Large enterprises and consulting firms managing workforce strategy.",
        functionalRequirements: [
          "Integration with HRMS (Attendance/Leave data)",
          "Biometric health score calculation",
          "Financial ROI modeling dashboard",
          "Scenario simulation tool ('What if we reduce stress by 10%?')"
        ],
        impactShort: "Data-driven justification for wellness program budgets.",
        impactLong: "Shift in corporate culture toward 'Health as a Strategic Asset', leading to higher retention and performance.",
        productDetail: "A financial modeling tool that translates clinical health risks into monetary productivity loss, providing a clear ROI for wellness interventions.",
        whyAlgo: "ElasticNet (Linear Regression with L1/L2 regularization) is chosen for its ability to handle 'multicollinearity' (e.g., stress and sleep data are often highly correlated). It keeps the model simple and highly explainable for CFOs.",
        whyStack: "AWS SageMaker's 'Clarify' tool is used to ensure the model isn't biased against specific demographics, which is a major concern for HR departments.",
        otherOptions: "Random Forest Regressors were an option, but they are 'black boxes'. CFOs prefer the transparency of a regression coefficient (e.g., 'Every 1% increase in stress leads to ₹500 loss').",
        privacyConsent: "We apply 'Differential Privacy'—adding mathematical noise to the output so that no individual's health status can be inferred from the aggregate ROI report.",
        errorHandling: [
          "Outlier Scrubbing: Automated detection and removal of extreme absenteeism data (e.g., long-term disability) to prevent ROI skew.",
          "Sensitivity Analysis: Runs 1,000 Monte Carlo simulations to provide a '95% Confidence Interval' for all financial ROI projections.",
          "Data Completeness Audit: Flags departments where <70% of employees have completed AHCs, marking the ROI as 'Preliminary'.",
          "Back-testing: Monthly comparison of predicted vs. actual sick leave to refine the 'Productivity Coefficient'."
        ]
      }
    }
  ];

  return (
    <div className="space-y-6 lg:space-y-12">
      {/* Search and Navigation Bar */}
      <div className="bg-white/80 backdrop-blur-md p-4 lg:p-6 rounded-3xl border border-slate-200 shadow-xl shadow-slate-200/50 flex flex-col md:flex-row items-stretch md:items-center justify-between gap-4 sticky top-0 z-10">
        <div className="flex items-center gap-3 lg:gap-4 overflow-x-auto pb-2 md:pb-0 scrollbar-hide">
          {products.map((p, idx) => (
            <button
              key={idx}
              onClick={() => setActiveProduct(idx)}
              className={cn(
                "px-3 lg:px-6 py-2 lg:py-3 rounded-2xl text-[10px] lg:text-xs font-bold transition-all whitespace-nowrap border-2",
                activeProduct === idx 
                  ? "bg-indigo-600 border-indigo-600 text-white shadow-lg shadow-indigo-100" 
                  : "bg-slate-50 border-slate-100 text-slate-500 hover:border-slate-300"
              )}
            >
              PRODUCT {idx + 1}
            </button>
          ))}
        </div>
        <div className="relative group">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 group-hover:text-indigo-600 transition-colors" size={18} />
          <input 
            type="text" 
            placeholder="Search ML models..." 
            className="w-full md:w-80 pl-11 pr-4 py-3 bg-slate-50 border-2 border-slate-100 rounded-2xl text-xs lg:text-sm focus:outline-none focus:border-indigo-600 focus:bg-white transition-all"
          />
        </div>
      </div>

      <AnimatePresence mode="wait">
        <motion.div
          key={activeProduct}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          className="grid grid-cols-1 xl:grid-cols-12 gap-6 lg:gap-10"
        >
          {/* Main Content Area */}
          <div className="xl:col-span-8 space-y-6 lg:space-y-10">
            {/* Hero Card */}
            <div className="relative overflow-hidden bg-slate-900 rounded-[2.5rem] p-6 lg:p-12 text-white">
              <div className="absolute top-0 right-0 w-1/2 lg:w-1/3 h-full bg-gradient-to-l from-indigo-500/20 to-transparent pointer-events-none" />
              <div className="relative z-10 space-y-4 lg:space-y-8">
                <div className="flex flex-wrap items-center gap-3 lg:gap-4">
                  <span className="px-3 lg:px-4 py-1 rounded-full bg-indigo-500/20 border border-indigo-400/30 text-indigo-300 text-[8px] lg:text-[10px] font-bold uppercase tracking-widest">
                    {products[activeProduct].buyer} • BUYER
                  </span>
                  <div className="flex items-center gap-2 text-emerald-400">
                    <TrendingUp size={16} />
                    <span className="text-[10px] lg:text-xs font-bold uppercase tracking-wider">High ROI Potential</span>
                  </div>
                </div>
                
                <h2 className="text-3xl lg:text-5xl font-black leading-tight bg-gradient-to-r from-white to-slate-400 bg-clip-text text-transparent">
                  {products[activeProduct].hook}
                </h2>

                <p className="text-lg lg:text-2xl text-slate-400 font-medium leading-relaxed max-w-2xl">
                  {products[activeProduct].soWhat}
                </p>

                <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6 lg:gap-10 pt-4 lg:pt-8 border-t border-white/10">
                  <div className="flex items-center gap-4">
                    <div className="p-3 bg-white/10 rounded-2xl backdrop-blur-md shrink-0">
                      <Cpu className="text-indigo-300" size={24} />
                    </div>
                    <div>
                      <div className="text-[10px] text-slate-500 font-bold uppercase tracking-widest mb-0.5">Primary Model</div>
                      <div className="text-sm lg:text-base font-bold whitespace-nowrap">{products[activeProduct].model.split('(')[0]}</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="p-3 bg-white/10 rounded-2xl backdrop-blur-md shrink-0">
                      <ShieldCheck className="text-emerald-300" size={24} />
                    </div>
                    <div>
                      <div className="text-[10px] text-slate-500 font-bold uppercase tracking-widest mb-0.5">Privacy Strategy</div>
                      <div className="text-sm lg:text-base font-bold whitespace-nowrap">{products[activeProduct].privacy.split(':')[0]}</div>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="absolute -right-16 -bottom-16 w-48 lg:w-96 h-48 lg:h-96 bg-indigo-500/10 rounded-full blur-[100px] pointer-events-none" />
            </div>

            {/* AI/ML Deep Dive */}
            <div className="bg-white rounded-[2.5rem] border border-slate-200 p-6 lg:p-10 shadow-sm space-y-6 lg:space-y-10">
              <div className="flex items-center justify-between">
                <h3 className="text-xl lg:text-2xl font-bold flex items-center gap-3">
                  <span className="p-2 bg-indigo-50 text-indigo-600 rounded-xl shrink-0"><Layers size={24} /></span>
                  <span className="truncate">ML Architecture</span>
                </h3>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 lg:gap-8">
                <div className="p-4 lg:p-8 rounded-[2rem] bg-indigo-50/50 border border-indigo-100/50 space-y-4">
                  <div className="flex items-center gap-3 text-indigo-600 mb-4">
                    <Brain className="shrink-0" />
                    <span className="font-bold text-sm lg:text-base">Why Algorithm?</span>
                  </div>
                  <p className="text-xs lg:text-sm text-slate-700 leading-relaxed font-medium">
                    {products[activeProduct].explanation.whyAlgo}
                  </p>
                </div>
                <div className="p-4 lg:p-8 rounded-[2rem] bg-emerald-50/50 border border-emerald-100/50 space-y-4">
                  <div className="flex items-center gap-3 text-emerald-600 mb-4">
                    <Braces className="shrink-0" />
                    <span className="font-bold text-sm lg:text-base">Tech Strategy</span>
                  </div>
                  <p className="text-xs lg:text-sm text-slate-700 leading-relaxed font-medium">
                    {products[activeProduct].explanation.whyStack}
                  </p>
                </div>
              </div>

              <div className="p-6 lg:p-8 rounded-[2rem] bg-slate-900 text-white overflow-hidden relative group">
                <Terminal className="absolute top-8 right-8 text-white/5 group-hover:text-white/10 transition-colors" size={120} />
                <div className="relative z-10 space-y-6">
                  <h4 className="flex items-center gap-3 font-bold text-base lg:text-lg">
                    <span className="w-8 h-8 rounded-lg bg-white/10 flex items-center justify-center text-xs">ML</span>
                    ML Training Features
                  </h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-10">
                    <div className="space-y-4">
                      <div className="text-[10px] text-slate-500 font-bold uppercase tracking-[0.2em] flex items-center gap-2">
                        <Activity size={14} className="text-indigo-400" /> Biometric Points
                      </div>
                      <div className="flex flex-wrap gap-2">
                        {products[activeProduct].ahcFeatures.split(',').map((f, i) => (
                          <span key={i} className="px-3 py-1.5 rounded-lg bg-white/5 border border-white/10 text-[10px] lg:text-xs font-mono">{f.trim()}</span>
                        ))}
                      </div>
                    </div>
                    <div className="space-y-4">
                      <div className="text-[10px] text-slate-500 font-bold uppercase tracking-[0.2em] flex items-center gap-2">
                        <FileCode size={14} className="text-pink-400" /> Claims & Policy
                      </div>
                      <div className="flex flex-wrap gap-2">
                        {products[activeProduct].claimsFeatures.split(',').map((f, i) => (
                          <span key={i} className="px-3 py-1.5 rounded-lg bg-white/5 border border-white/10 text-[10px] lg:text-xs font-mono">{f.trim()}</span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Functional Requirements */}
            <div className="bg-white rounded-[2.5rem] border border-slate-200 p-6 lg:p-10 shadow-sm">
              <h3 className="text-xl lg:text-2xl font-bold flex items-center gap-3 mb-8">
                <span className="p-2 bg-pink-50 text-pink-600 rounded-xl"><ClipboardList size={24} /></span>
                Functional Architecture
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 lg:gap-6">
                {products[activeProduct].explanation.functionalRequirements.map((req, i) => (
                  <div key={i} className="flex items-start gap-4 p-4 lg:p-6 rounded-2xl bg-slate-50 hover:bg-slate-100 transition-colors group">
                    <div className="w-6 h-6 lg:w-8 lg:h-8 rounded-lg bg-white border border-slate-200 flex items-center justify-center text-xs lg:text-sm font-bold text-pink-600 shrink-0 group-hover:scale-110 transition-transform">
                      {i + 1}
                    </div>
                    <p className="text-xs lg:text-sm font-bold text-slate-700 leading-relaxed">{req}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Sidebar / Detailed Info */}
          <div className="xl:col-span-4 space-y-6 lg:space-y-10">
            {/* Impact Analysis */}
            <div className="bg-white rounded-[2.5rem] border border-slate-200 p-6 lg:p-8 shadow-sm space-y-6 lg:space-y-8">
              <h3 className="text-xl lg:text-2xl font-bold text-slate-900">Strategic Impact</h3>
              <div className="space-y-4 lg:space-y-6">
                <div className="p-4 lg:p-6 rounded-3xl bg-emerald-50 border border-emerald-100 space-y-2">
                  <div className="flex items-center gap-2 text-emerald-600">
                    <Zap size={18} />
                    <span className="text-[10px] lg:text-xs font-bold uppercase tracking-widest">Short-Term Impact</span>
                  </div>
                  <p className="text-sm lg:text-base font-bold text-emerald-900 leading-tight">
                    {products[activeProduct].explanation.impactShort}
                  </p>
                </div>
                <div className="p-4 lg:p-6 rounded-3xl bg-indigo-50 border border-indigo-100 space-y-2">
                  <div className="flex items-center gap-2 text-indigo-600">
                    <Rocket size={18} />
                    <span className="text-[10px] lg:text-xs font-bold uppercase tracking-widest">Long-Term Impact</span>
                  </div>
                  <p className="text-sm lg:text-base font-bold text-indigo-900 leading-tight">
                    {products[activeProduct].explanation.impactLong}
                  </p>
                </div>
              </div>
            </div>

            {/* Error Handling Toolkit */}
            <div className="bg-slate-50 rounded-[2.5rem] border border-slate-200 p-6 lg:p-8 space-y-6">
              <h3 className="text-lg lg:text-xl font-bold text-slate-900 flex items-center gap-2">
                <AlertCircle size={20} className="text-amber-500" />
                Robustness Toolkit
              </h3>
              <div className="space-y-3">
                {products[activeProduct].explanation.errorHandling.map((item, i) => (
                  <div key={i} className="flex items-start gap-3 p-3 rounded-xl bg-white border border-slate-100">
                    <div className="w-1.5 h-1.5 rounded-full bg-amber-400 shrink-0 mt-1.5" />
                    <p className="text-[10px] lg:text-xs text-slate-600 leading-relaxed italic">{item}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </AnimatePresence>
    </div>
  );
}

const ShieldCheck = Shield;
