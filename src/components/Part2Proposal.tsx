import { Brain, Database, Shield, Zap, TrendingUp, Users, Layout, Cpu, Lock, Rocket, Target, BarChart3, Terminal, CheckCircle2, Activity as ActivityIcon, AlertCircle, Smartphone, Calendar } from 'lucide-react';
import { motion } from 'motion/react';

interface Part2ProposalProps {
  onLaunchMVP?: () => void;
  onLaunchGamifiedMVP?: () => void;
  onLaunchFamilyMVP?: () => void;
  onLaunchAwarenessMVP?: () => void;
}

export default function Part2Proposal({ onLaunchMVP, onLaunchGamifiedMVP, onLaunchFamilyMVP, onLaunchAwarenessMVP }: Part2ProposalProps) {
  const dataProducts = [
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
    },
    {
      hook: "The Care-Gap Closure Engine",
      buyer: "Insurer & TPA",
      soWhat: "Reducing 15% of emergency cardiac claims by closing the loop between lab alerts and doctor visits.",
      ahcFeatures: "HbA1c, LDL-C, BMI, Blood Pressure (last 3 years).",
      claimsFeatures: "ICD-10 (E11.x, I10.x), Procedure codes (99213), Pharmacy fill patterns (Statins, Metformin).",
      intersection: "Lab-to-Claim Latency: The derived delta between a 'Critical' lab result and the first corresponding claim for a specialist consultation.",
      model: "Random Forest (Risk Stratification)",
      problemType: "Classification (High/Low Risk of Gap)",
      stack: "Scikit-learn (Training), FastAPI (Serving), MLflow (Monitoring)",
      privacy: "Tokenization & De-identification: Joining datasets via a third-party tokenization service (e.g., Datavant) to ensure PII never leaves the source.",
      mvp: "Static monthly 'At-Risk' report identifying employees with critical labs but no follow-up claims.",
      fullVision: "AI-driven, real-time automated intervention system triggering SMS nudges and telehealth scheduling the moment a gap is detected.",
      explanation: {
        problemStatement: "The 'Last Mile' of clinical care is often broken. A critical lab result (AHC) is generated, but the employee never follows up with a doctor, leading to avoidable emergency claims later.",
        objective: "To close 100% of 'High-Risk' care gaps by identifying lab-to-claim latency and triggering automated clinical interventions.",
        howSolving: "The engine monitors the delta between a 'Critical' lab alert and the first corresponding medical claim. If no claim appears within 14 days, it triggers a 'Gap Alert'.",
        productFor: "Insurers and TPAs focused on value-based care.",
        whoCanBuy: "TPAs and Corporate Health Insurance providers.",
        functionalRequirements: [
          "Real-time lab result monitoring",
          "Automated ICD-10 claim matching",
          "Telehealth scheduling integration",
          "Gap-closure tracking dashboard"
        ],
        impactShort: "Immediate reduction in 'Lost' patients who ignore critical lab results.",
        impactLong: "Significant reduction in catastrophic cardiac and diabetic claims by catching issues at the 'Pre-Claim' stage.",
        productDetail: "An automated 'loop-closer' that identifies when a critical lab result hasn't been followed by a medical consultation within 14 days.",
        whyAlgo: "Random Forest is used for its excellent performance on tabular data and its ability to capture complex interactions between different lab markers (e.g., high LDL + high BP = higher priority).",
        whyStack: "FastAPI is chosen for its high performance and native support for asynchronous operations, allowing the system to handle thousands of lab-result triggers in real-time.",
        otherOptions: "Serverless functions (AWS Lambda) were an option, but a dedicated FastAPI service provides better control over long-lived database connections.",
        privacyConsent: "Data is joined using Datavant's 'Privacy-Preserving Record Linkage' (PPRL). This ensures that the 'Linker' never sees the actual health data, only the anonymous tokens.",
        errorHandling: [
          "Deduplication Engine: Prevents multiple alerts for the same care gap if an employee visits multiple diagnostic centers.",
          "ICD-10 Version Control: Automated mapping of old codes to latest standards to ensure claim-matching accuracy.",
          "Nudge Throttling: Limits automated SMS/Calls to 1 per 48 hours to prevent 'Alert Fatigue' and maintain high engagement.",
          "Provider Verification: Cross-checks telehealth bookings against the TPA's network list to ensure claim eligibility."
        ]
      }
    },
    {
      hook: "The Metabolic-Cost Forecasting Engine",
      buyer: "Employer (Self-Insured)",
      soWhat: "Predicting and preventing ₹2Cr+ in annual catastrophic claims by identifying 'Rising Risk' cohorts early.",
      ahcFeatures: "Triglycerides, Fasting Glucose, Waist Circumference, Liver Enzymes (ALT/AST).",
      claimsFeatures: "ER visit frequency, outpatient procedure types, historical claim cost velocity.",
      intersection: "Risk-to-Cost Velocity: A derived feature mapping the rate of change in metabolic markers to the probability of a high-cost hospitalization within 18 months.",
      model: "XGBoost (Cost Prediction)",
      problemType: "Regression (Predicted Claim Amount)",
      stack: "PyTorch (Deep Learning), Docker (Containerization), Weights & Biases (Experiment Tracking)",
      privacy: "Differential Privacy: Adding mathematical noise to aggregated cohort data to prevent individual re-identification in employer reports.",
      mvp: "Quarterly 'Financial Risk' dashboard for the CFO showing projected healthcare spend based on current health trends.",
      fullVision: "Dynamic cost-saving simulation tool allowing HR to model the ROI of specific wellness interventions (e.g., 'What if we reduce average BMI by 2%?').",
      explanation: {
        problemStatement: "CFOs struggle with 'Healthcare Cost Volatility'. They don't know if next year's premiums will rise by 10% or 30% because they can't see the 'Health Velocity' of their workforce.",
        objective: "To provide a 12-18 month financial forecast of healthcare spend based on the current metabolic trajectory of the workforce.",
        howSolving: "We map the 'Rate of Change' in metabolic markers (AHC) to historical claim cost distributions. This allows us to predict the 'Financial Weight' of the current health risk.",
        productFor: "CFOs and Finance Directors managing self-insured funds.",
        whoCanBuy: "Fortune 500 companies with large self-insured populations.",
        functionalRequirements: [
          "Longitudinal biometric data ingestion",
          "Historical claim cost velocity mapping",
          "Financial forecasting dashboard",
          "Intervention ROI simulator"
        ],
        impactShort: "More accurate budgeting for healthcare premiums and self-insured reserves.",
        impactLong: "Strategic shift from 'Buying Insurance' to 'Managing Health Risk' as a financial discipline.",
        productDetail: "A strategic financial tool that predicts future healthcare spending by analyzing the 'velocity' of metabolic health decline in the workforce.",
        whyAlgo: "XGBoost is the gold standard for cost prediction because it can handle the 'long-tail' distribution of healthcare costs (where a few individuals account for most of the spend).",
        whyStack: "Weights & Biases is used for experiment tracking, allowing us to compare hundreds of model versions to find the one that most accurately predicts high-cost outliers.",
        otherOptions: "Linear Regression is too simple to capture the exponential nature of chronic disease costs. Deep Learning (PyTorch) is used for the 'Full Vision' to incorporate sequential biometric data.",
        privacyConsent: "Employer reports are strictly 'Cohort-Based'. No report is generated for groups smaller than 50 individuals to prevent 'Identity Triangulation'.",
        errorHandling: [
          "Confidence Interval Reporting: All cost forecasts include a +/- 15% variance range to manage CFO expectations.",
          "Velocity Benchmark Validation: Flags forecasts that deviate by >30% from historical claim cost trends for manual audit.",
          "Sequential Data Imputation: Uses K-Nearest Neighbors (KNN) to handle missing biometric data points in longitudinal trends.",
          "Inflation Adjustment: Automated indexing of projected costs against the latest medical inflation rates (e.g., 12-14% in India)."
        ]
      }
    },
    {
      hook: "CarePath Recovery Navigator",
      buyer: "CHRO & Benefits Head",
      soWhat: "Reducing 'Surgical Leakage' and post-op readmission costs by 20% through holistic recovery tracking.",
      ahcFeatures: "HbA1c > 7.0, Rising BMI, Pre-op Albumin, Stress markers (Cortisol).",
      claimsFeatures: "ICD-10 for Surgical Complications (T81.x), Pharmacy gap > 15 days, Readmission codes.",
      intersection: "Biometric-to-Claim Latency: The time between a physiological risk marker (AHC) and the corresponding medical intervention (Claim).",
      model: "Random Forest (Interpretability) + LLM (Coaching)",
      problemType: "Classification (Risk of Readmission) + Generative AI",
      stack: "Scikit-Learn (Training), Local Ollama (AI Interface), FastAPI",
      privacy: "Tokenization/Hashing + Local RAG: Ensuring PII never leaves on-premise servers, addressing the 'No-Cloud LLM' constraint.",
      mvp: "Static 'Post-Op Risk' report identifying employees with high-risk markers and low adherence.",
      fullVision: "Agentic AI version with proactive clinical nudges, integrating Modern Science with Ayurveda/Homeopathy for holistic post-op recovery.",
      explanation: {
        problemStatement: "Post-surgical recovery is a 'Black Box'. Once an employee is discharged, the employer and insurer lose visibility, leading to high readmission rates due to poor home-care adherence.",
        objective: "To provide a 24/7 AI-driven recovery companion that monitors post-op metrics and ensures adherence to clinical and holistic recovery plans.",
        howSolving: "We use a hybrid model: Random Forest predicts readmission risk based on pre-op labs and post-op pharmacy fills, while a Local LLM provides personalized recovery coaching.",
        productFor: "Employees recovering from major procedures and their family caregivers.",
        whoCanBuy: "Employers looking to reduce 'Surgical Leakage' and improve Return-to-Work (RTW) timelines.",
        functionalRequirements: [
          "Post-op medication tracking",
          "Symptom monitoring via conversational AI",
          "Integration with Modern & Holistic care plans",
          "Escalation trigger to OHC doctors"
        ],
        impactShort: "Reduced anxiety for recovering employees and fewer 'Panic' ER visits.",
        impactLong: "20% reduction in post-surgical readmissions and 15% faster return-to-work rates.",
        productDetail: "A personalized AI companion that guides employees through the critical 90-day post-surgical window, combining clinical data with holistic wellness.",
        whyAlgo: "Random Forest provides the 'Why' (Interpretability) that doctors need, while the LLM (Llama 3) provides the 'How' (Conversational Coaching) that employees need.",
        whyStack: "Local Ollama is a hard requirement because clinical recovery data is too sensitive for public cloud LLMs. FastAPI serves as the bridge between the ML model and the chat interface.",
        otherOptions: "OpenAI API was rejected due to strict data residency and privacy constraints. A simple rule-based chatbot was rejected because it lacks the empathy required for recovery.",
        privacyConsent: "The 'Local RAG' (Retrieval Augmented Generation) architecture ensures that the LLM only accesses the employee's specific recovery plan within a private, encrypted memory space.",
        errorHandling: [
          "Clinical Guardrails: A secondary 'Validator' model checks all LLM responses against a pre-approved clinical knowledge base.",
          "Connectivity Fallback: If the local LLM server is down, the app switches to a rule-based 'Emergency Protocol' mode.",
          "Symptom Escalation: Any mention of 'Chest Pain' or 'Shortness of Breath' bypasses the AI and triggers an immediate OHC nurse call.",
          "Hallucination Detection: Monitors LLM output for 'Uncertainty Scores' and flags low-confidence responses for human review."
        ]
      }
    },
    {
      hook: "The Family Care Concierge",
      buyer: "Employers & TPAs",
      soWhat: "Improving family-wide health outcomes and increasing internal lab/pharmacy capture by 30%.",
      ahcFeatures: "Employee lab history, chronic risk markers, pre-existing conditions.",
      claimsFeatures: "Dependent pharmacy history, family-level ICD-10 codes, pediatric/maternity claims.",
      intersection: "Family Health Velocity: Correlating family-wide medication adherence with upcoming preventive screening windows.",
      model: "Multi-modal Recommendation Engine",
      problemType: "Predictive Scheduling & Personalization",
      stack: "Python, TensorFlow (Time-series), Local Ollama (Nudges), Redis",
      privacy: "Dynamic Consent: Individual family members (dependents) grant specific access to their medication data via the app.",
      mvp: "Family-wide medication refill reminders and lab test alerts.",
      fullVision: "AI Health Butler: Proactive diet/routine suggestions, pregnancy tracking (maternity co-pilot), and automated lab bookings based on family risk profiles.",
      explanation: {
        problemStatement: "Employee productivity is often derailed by family health crises. Managing medications for children and elderly parents is a high-stress 'Mental Load' that leads to absenteeism.",
        objective: "To reduce the 'Caregiver Burden' on employees by providing an AI concierge that manages family-wide health schedules and risks.",
        howSolving: "We use a Multi-modal Recommendation Engine that looks at family-wide pharmacy fills and lab histories to predict upcoming needs (vaccinations, refills, screenings).",
        productFor: "Employees with dependents (children, parents, spouse).",
        whoCanBuy: "Enterprises looking to improve 'Family Wellness' as a key retention benefit.",
        functionalRequirements: [
          "Multi-profile family health dashboard",
          "Predictive refill and vaccination alerts",
          "Maternity & Pregnancy tracking module",
          "Family-level risk profiling"
        ],
        impactShort: "Reduced mental stress for employees managing family health.",
        impactLong: "Improved family-wide health outcomes, leading to lower dependent-claim costs and higher employee focus.",
        productDetail: "A family-centric health assistant that manages the collective health risk of an employee's household, from pediatric vaccinations to elderly chronic care.",
        whyAlgo: "A Multi-modal Recommendation Engine is used to synthesize diverse data types (lab results, pharmacy fills, and user-reported symptoms) into a single 'Family Health Score'.",
        whyStack: "Redis is used for real-time state management, ensuring that 'Refill Reminders' are delivered instantly across all family-linked devices.",
        otherOptions: "Collaborative Filtering (like Netflix) was considered but rejected because health needs are highly individual and shouldn't be based on 'what other families did'.",
        privacyConsent: "Each dependent (spouse, adult child) has their own sub-account with 'Granular Permissioning'. They can choose to share their lab results with the primary employee or keep them private.",
        errorHandling: [
          "Consent Expiry Watchdog: Automatically revokes data access if a dependent's consent isn't renewed annually.",
          "Conflict Resolution: If two caregivers (e.g., parents) input conflicting medication data, the system flags it for 'Primary Caregiver' review.",
          "Vaccination Logic Check: Cross-references pediatric schedules with the child's age and previous history to prevent duplicate alerts.",
          "Audit Logging: Maintains a tamper-proof log of who accessed which family member's data and when."
        ]
      }
    },
    {
      hook: "Phygital Care Orchestrator",
      buyer: "HCL Operations & Corporate HR",
      soWhat: "Optimizing utilization of 50+ physical facilities vs. digital consults to reduce wait times by 40%.",
      ahcFeatures: "Employee location (Postal Code), chronic severity, historical facility usage.",
      claimsFeatures: "Tele-consult frequency, onsite clinic visit types, emergency vs. planned care claims.",
      intersection: "Care-Mode Elasticity: Predicting which patients can be safely managed via 'Digital' vs. those requiring 'Physical' intervention based on clinical risk markers.",
      model: "Reinforcement Learning (Resource Allocation)",
      problemType: "Optimization (Care Path Routing)",
      stack: "Python, Ray Rllib, Snowflake, FastAPI",
      privacy: "Geospatial masking; PII-free routing logs.",
      mvp: "Smart scheduling assistant for onsite clinics.",
      fullVision: "Autonomous 'Phygital' router that dynamically assigns care modes based on real-time clinic load and patient severity.",
      explanation: {
        problemStatement: "HCL Healthcare's 'Phygital' model requires seamless routing. Overcrowding at physical sites while digital channels are underutilized leads to poor employee experience and operational inefficiency.",
        objective: "To dynamically route employees to the most efficient care channel (Onsite vs. Tele-consult) based on their clinical risk and real-time facility capacity.",
        howSolving: "We use Reinforcement Learning to learn the 'Optimal Care Path' for different personas (e.g., a diabetic patient with a spike vs. a routine check-up) to maximize health outcomes and minimize wait times.",
        productFor: "Clinic Administrators and Corporate HR Benefits Managers.",
        whoCanBuy: "Large corporates with onsite HCL clinics and pan-India digital needs.",
        functionalRequirements: [
          "Real-time clinic load monitoring",
          "Clinical severity triage engine",
          "Automated appointment routing",
          "Wait-time prediction dashboard"
        ],
        impactShort: "Immediate reduction in clinic wait times and improved NPS.",
        impactLong: "30% improvement in operational efficiency across HCL's 50+ facilities and 100+ planned sites.",
        productDetail: "An AI-driven traffic controller for HCL's phygital network, ensuring every employee gets the right care in the right place at the right time.",
        whyAlgo: "Reinforcement Learning (PPO) is ideal for dynamic resource allocation where the environment (clinic load) changes constantly and the goal is to optimize a long-term reward (patient health + efficiency).",
        whyStack: "Ray Rllib is the industry standard for scalable RL. Snowflake's geospatial features allow us to efficiently map 3000+ postal codes to the nearest physical sites.",
        otherOptions: "Static rule-based routing was considered but fails to adapt to sudden surges (e.g., flu season) or clinical nuances.",
        privacyConsent: "Employees consent to 'Location-Aware Routing' via the app. Precise coordinates are never stored; only postal-code level proximity is used for routing.",
        errorHandling: [
          "Emergency Override: Any high-severity clinical marker (e.g., high BP) automatically forces an Onsite/Emergency route regardless of load.",
          "Network Latency Fallback: System defaults to 'Nearest Site' if real-time load data from a facility is unavailable.",
          "Bias Audit: Quarterly checks to ensure routing isn't unfairly prioritizing specific departments or seniority levels.",
          "Load Balancing Circuit Breaker: Prevents the system from 'Ping-Ponging' patients between sites during peak volatility."
        ]
      }
    },
    {
      hook: "Gamified Health Engagement Engine",
      buyer: "Corporate Wellness & Engagement Teams",
      soWhat: "Increasing wellness program participation by 3x through hyper-personalized 'Health Quests'.",
      ahcFeatures: "Biometric 'Level-up' markers (HbA1c reduction, BMI loss), step counts, sleep quality.",
      claimsFeatures: "Preventive screening adherence, vaccination completion, OHC follow-up rates.",
      intersection: "Behavioral-to-Clinical Correlation: Mapping 'Game Engagement' (badges/quests) to actual clinical improvements (Biometric stability).",
      model: "Collaborative Filtering + Multi-armed Bandits",
      problemType: "Recommendation (Personalized Health Quests)",
      stack: "TensorFlow Recommenders, Redis, AWS Lambda, Snowflake",
      privacy: "Pseudonymized leaderboards; private health data never shared with peers.",
      mvp: "Personalized weekly 'Health Challenges' via the app.",
      fullVision: "A fully immersive, clinically-sound gamified platform that turns recovery and prevention into a rewarding corporate 'Quest'.",
      explanation: {
        problemStatement: "Wellness programs suffer from 'The 20/80 Trap'—the healthiest 20% participate, while the 80% who need it most stay disengaged. Generic programs lack the 'Hook' for long-term behavior change.",
        objective: "To drive 90%+ engagement in wellness programs by creating hyper-personalized 'Health Quests' that reward actual clinical progress.",
        howSolving: "We use Multi-armed Bandits to test which 'Nudges' (e.g., social competition vs. individual rewards) work for which employee persona, combined with Collaborative Filtering to suggest relevant health content.",
        productFor: "Employees looking for a fun way to manage health and HR teams driving engagement.",
        whoCanBuy: "Progressive organizations looking to promote a 'Culture of Positive Health' (as per HCL Mission).",
        functionalRequirements: [
          "Personalized quest generation engine",
          "Biometric-linked reward system",
          "Social/Team-based challenges",
          "Engagement analytics for HR"
        ],
        impactShort: "Significant spike in app logins and wellness program sign-ups.",
        impactLong: "Sustainable behavior change leading to a 10-15% reduction in workforce chronic risk over 24 months.",
        productDetail: "A 'clinically sound gamified platform' (as per HCL Market Position) that uses behavioral economics to make health management addictive.",
        whyAlgo: "Multi-armed Bandits are perfect for 'Exploration vs. Exploitation'—finding the right nudge for an employee without annoying them with irrelevant content.",
        whyStack: "TensorFlow Recommenders allow us to build complex retrieval and ranking models. Redis ensures the 'Game State' (points/badges) is updated in sub-millisecond time.",
        otherOptions: "Simple point-based systems were rejected because they lose novelty quickly. We need AI to keep the 'Quests' fresh and clinically relevant.",
        privacyConsent: "Employees opt-in to 'Gamified Health'. Leaderboards use aliases (e.g., 'HealthHero_123') to protect identity. Clinical data (HbA1c) is used for 'Leveling up' but never displayed to others.",
        errorHandling: [
          "Cheating Detection: Identifies 'Impossible' step counts or manual data entry spikes to maintain game integrity.",
          "Fatigue Monitor: Detects when a user is becoming overwhelmed by notifications and automatically throttles quest frequency.",
          "Clinical Safety Check: Ensures 'Quests' don't encourage dangerous behavior (e.g., excessive weight loss) based on the user's AHC profile.",
          "Reward Reconciliation: Automated audit of 'Points-to-Prizes' to prevent financial leakage in corporate reward programs."
        ]
      }
    }
  ];

  return (
    <motion.div 
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      className="max-w-5xl mx-auto space-y-12 pb-20"
    >
      <div className="text-center space-y-4">
        <h2 className="text-4xl font-bold text-slate-900 tracking-tight">Data Product Proposals</h2>
        <p className="text-lg text-slate-600 max-w-2xl mx-auto">
          Leveraging the combined power of AHC Lab Data and Insurance Claims to create high-value predictive products.
        </p>
      </div>

      <div className="space-y-12">
        <div className="grid grid-cols-1 gap-12">
          {dataProducts.map((dive, idx) => (
            <div key={idx} className="bg-white rounded-[2rem] border border-slate-200 shadow-xl overflow-hidden">
              {/* Header */}
              <div className="bg-slate-900 p-8 text-white">
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
                  <div className="space-y-2">
                    <div className="flex items-center gap-2 text-indigo-400">
                      <Target size={20} />
                      <span className="text-xs font-bold uppercase tracking-widest">The Hook</span>
                    </div>
                    <h3 className="text-3xl font-bold tracking-tight">{dive.hook}</h3>
                  </div>
                  <div className="flex gap-4">
                    <div className="bg-white/10 backdrop-blur-md p-4 rounded-2xl border border-white/10">
                      <span className="text-[10px] font-bold text-white/40 uppercase block mb-1">The Buyer</span>
                      <div className="flex items-center gap-2 font-bold text-sm">
                        <Users size={14} className="text-indigo-400" />
                        {dive.buyer}
                      </div>
                    </div>
                    <div className="bg-indigo-600 p-4 rounded-2xl shadow-lg shadow-indigo-900/50">
                      <span className="text-[10px] font-bold text-white/60 uppercase block mb-1">The "So What"</span>
                      <div className="flex items-center gap-2 font-bold text-sm">
                        <TrendingUp size={14} />
                        {dive.soWhat.split(' ').slice(0, 3).join(' ')}...
                      </div>
                    </div>
                  </div>
                </div>
                <p className="mt-6 text-slate-400 max-w-3xl leading-relaxed italic">
                  "{dive.soWhat}"
                </p>
              </div>

              <div className="p-8 grid grid-cols-1 lg:grid-cols-3 gap-12">
                {/* Column 1: Feature Engineering */}
                <div className="space-y-8">
                  <div className="flex items-center gap-3 pb-4 border-b border-slate-100">
                    <div className="p-2 bg-amber-50 text-amber-600 rounded-xl">
                      <Database size={20} />
                    </div>
                    <h4 className="font-bold text-slate-900 uppercase tracking-wider text-sm">Feature Engineering</h4>
                  </div>
                  
                  <div className="space-y-6">
                    <div>
                      <span className="text-[10px] font-bold text-slate-400 uppercase block mb-2">AHC Features</span>
                      <p className="text-sm text-slate-700 leading-relaxed">{dive.ahcFeatures}</p>
                    </div>
                    <div>
                      <span className="text-[10px] font-bold text-slate-400 uppercase block mb-2">Claims Features</span>
                      <p className="text-sm text-slate-700 leading-relaxed">{dive.claimsFeatures}</p>
                    </div>
                    <div className="p-4 bg-indigo-50 rounded-2xl border border-indigo-100">
                      <span className="text-[10px] font-bold text-indigo-600 uppercase block mb-2">The Intersection (Secret Sauce)</span>
                      <p className="text-sm text-indigo-900 font-bold leading-relaxed">{dive.intersection}</p>
                    </div>
                  </div>
                </div>

                {/* Column 2: Model & Pipeline */}
                <div className="space-y-8">
                  <div className="flex items-center gap-3 pb-4 border-b border-slate-100">
                    <div className="p-2 bg-indigo-50 text-indigo-600 rounded-xl">
                      <Cpu size={20} />
                    </div>
                    <h4 className="font-bold text-slate-900 uppercase tracking-wider text-sm">Model & Pipeline</h4>
                  </div>

                  <div className="space-y-6">
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <span className="text-[10px] font-bold text-slate-400 uppercase block mb-1">Model Choice</span>
                        <p className="text-xs font-bold text-slate-800">{dive.model}</p>
                      </div>
                      <div>
                        <span className="text-[10px] font-bold text-slate-400 uppercase block mb-1">Problem Type</span>
                        <p className="text-xs font-bold text-slate-800">{dive.problemType}</p>
                      </div>
                    </div>
                    <div>
                      <span className="text-[10px] font-bold text-slate-400 uppercase block mb-2">Tech Stack</span>
                      <div className="flex flex-wrap gap-2">
                        {dive.stack.split(', ').map(s => (
                          <span key={s} className="px-2 py-1 bg-slate-100 rounded text-[10px] font-bold text-slate-600 border border-slate-200">{s}</span>
                        ))}
                      </div>
                    </div>
                    <div className="p-4 bg-slate-900 rounded-2xl">
                      <div className="flex items-center gap-2 mb-2">
                        <Lock size={14} className="text-emerald-400" />
                        <span className="text-[10px] font-bold text-emerald-400 uppercase">Privacy Strategy</span>
                      </div>
                      <p className="text-[11px] text-slate-400 leading-relaxed">{dive.privacy}</p>
                    </div>
                  </div>
                </div>

                {/* Column 3: Roadmap */}
                <div className="space-y-8">
                  <div className="flex items-center gap-3 pb-4 border-b border-slate-100">
                    <div className="p-2 bg-emerald-50 text-emerald-600 rounded-xl">
                      <Rocket size={20} />
                    </div>
                    <h4 className="font-bold text-slate-900 uppercase tracking-wider text-sm">Roadmap</h4>
                  </div>

                  <div className="space-y-6">
                    <div className="relative pl-6 border-l-2 border-slate-100">
                      <div className="absolute -left-[9px] top-0 w-4 h-4 bg-white border-2 border-indigo-600 rounded-full" />
                      <span className="text-[10px] font-bold text-indigo-600 uppercase block mb-1">MVP</span>
                      <p className="text-xs text-slate-600 leading-relaxed">{dive.mvp}</p>
                    </div>
                    <div className="relative pl-6 border-l-2 border-indigo-600">
                      <div className="absolute -left-[9px] top-0 w-4 h-4 bg-indigo-600 rounded-full" />
                      <span className="text-[10px] font-bold text-indigo-600 uppercase block mb-1">Full Vision</span>
                      <p className="text-xs text-slate-900 font-bold leading-relaxed">{dive.fullVision}</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Technical Deep Dive Section */}
              <div className="bg-slate-50 border-t border-slate-100 p-8 space-y-8">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="p-2 bg-indigo-600 text-white rounded-lg">
                      <Brain size={18} />
                    </div>
                    <h4 className="text-lg font-bold text-slate-900 tracking-tight">Technical Deep Dive & Explanation</h4>
                  </div>
                  {dive.hook === "CarePath Recovery Navigator" && onLaunchMVP && (
                    <button 
                      onClick={onLaunchMVP}
                      className="flex items-center gap-2 px-6 py-3 bg-indigo-600 text-white rounded-2xl font-bold text-sm shadow-xl shadow-indigo-100 hover:bg-indigo-700 transition-all group"
                    >
                      <Smartphone size={18} className="group-hover:scale-110 transition-transform" />
                      Launch Live MVP
                    </button>
                  )}
                  {dive.hook === "Gamified Health Engagement Engine" && onLaunchGamifiedMVP && (
                    <div className="flex gap-3">
                      <button 
                        onClick={onLaunchGamifiedMVP}
                        className="flex items-center gap-2 px-6 py-3 bg-indigo-600 text-white rounded-2xl font-bold text-sm shadow-xl shadow-indigo-100 hover:bg-indigo-700 transition-all group"
                      >
                        <Smartphone size={18} className="group-hover:scale-110 transition-transform" />
                        Launch Wellness MVP
                      </button>
                      {onLaunchAwarenessMVP && (
                        <button 
                          onClick={onLaunchAwarenessMVP}
                          className="flex items-center gap-2 px-6 py-3 bg-emerald-600 text-white rounded-2xl font-bold text-sm shadow-xl shadow-emerald-100 hover:bg-emerald-700 transition-all group"
                        >
                          <Calendar size={18} className="group-hover:scale-110 transition-transform" />
                          Launch Awareness MVP
                        </button>
                      )}
                    </div>
                  )}
                  {dive.hook === "The Family Care Concierge" && onLaunchFamilyMVP && (
                    <button 
                      onClick={onLaunchFamilyMVP}
                      className="flex items-center gap-2 px-6 py-3 bg-indigo-600 text-white rounded-2xl font-bold text-sm shadow-xl shadow-indigo-100 hover:bg-indigo-700 transition-all group"
                    >
                      <Smartphone size={18} className="group-hover:scale-110 transition-transform" />
                      Launch Live MVP
                    </button>
                  )}
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="space-y-8">
                    <div className="space-y-4">
                      <h5 className="text-xs font-bold text-indigo-600 uppercase tracking-wider">Project Report: Strategic Overview</h5>
                      <div className="space-y-4">
                        <div>
                          <span className="text-[10px] font-bold text-slate-400 uppercase block mb-1">Problem Statement</span>
                          <p className="text-sm text-slate-700 leading-relaxed">{dive.explanation.problemStatement}</p>
                        </div>
                        <div>
                          <span className="text-[10px] font-bold text-slate-400 uppercase block mb-1">Objective</span>
                          <p className="text-sm text-slate-700 leading-relaxed">{dive.explanation.objective}</p>
                        </div>
                        <div>
                          <span className="text-[10px] font-bold text-slate-400 uppercase block mb-1">How we are solving this</span>
                          <p className="text-sm text-slate-700 leading-relaxed">{dive.explanation.howSolving}</p>
                        </div>
                      </div>
                    </div>

                    <div className="space-y-4">
                      <h5 className="text-xs font-bold text-indigo-600 uppercase tracking-wider">Commercial Positioning</h5>
                      <div className="grid grid-cols-2 gap-4">
                        <div className="p-3 bg-white rounded-xl border border-slate-100">
                          <span className="text-[10px] font-bold text-slate-400 uppercase block mb-1">This product is for</span>
                          <p className="text-xs text-slate-700 font-bold">{dive.explanation.productFor}</p>
                        </div>
                        <div className="p-3 bg-white rounded-xl border border-slate-100">
                          <span className="text-[10px] font-bold text-slate-400 uppercase block mb-1">Who can buy</span>
                          <p className="text-xs text-slate-700 font-bold">{dive.explanation.whoCanBuy}</p>
                        </div>
                      </div>
                    </div>

                    <div className="space-y-4">
                      <h5 className="text-xs font-bold text-indigo-600 uppercase tracking-wider">Functional Requirements</h5>
                      <ul className="space-y-2">
                        {dive.explanation.functionalRequirements.map((req, rIdx) => (
                          <li key={rIdx} className="flex items-start gap-2 text-xs text-slate-600">
                            <CheckCircle2 size={14} className="text-emerald-500 shrink-0 mt-0.5" />
                            {req}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <div className="space-y-8">
                    <div className="space-y-4">
                      <h5 className="text-xs font-bold text-indigo-600 uppercase tracking-wider">Technical Stack (How it works)</h5>
                      <div className="p-4 bg-slate-900 rounded-2xl space-y-4">
                        <div>
                          <span className="text-[10px] font-bold text-indigo-400 uppercase block mb-1">Algorithm Choice (The "Why")</span>
                          <p className="text-xs text-slate-300 leading-relaxed">{dive.explanation.whyAlgo}</p>
                        </div>
                        <div>
                          <span className="text-[10px] font-bold text-indigo-400 uppercase block mb-1">Architecture Strategy</span>
                          <p className="text-xs text-slate-300 leading-relaxed">{dive.explanation.whyStack}</p>
                        </div>
                        <div className="pt-2 border-t border-white/10">
                          <span className="text-[10px] font-bold text-slate-500 uppercase block mb-1">Other Options Considered</span>
                          <p className="text-[10px] text-slate-500 italic">{dive.explanation.otherOptions}</p>
                        </div>
                      </div>
                    </div>

                    <div className="space-y-4">
                      <h5 className="text-xs font-bold text-indigo-600 uppercase tracking-wider">Impact Analysis</h5>
                      <div className="grid grid-cols-1 gap-4">
                        <div className="p-4 bg-emerald-50 rounded-2xl border border-emerald-100">
                          <span className="text-[10px] font-bold text-emerald-600 uppercase block mb-1">Short-Term Impact</span>
                          <p className="text-xs text-emerald-900 font-bold leading-relaxed">{dive.explanation.impactShort}</p>
                        </div>
                        <div className="p-4 bg-indigo-50 rounded-2xl border border-indigo-100">
                          <span className="text-[10px] font-bold text-indigo-600 uppercase block mb-1">Long-Term Impact</span>
                          <p className="text-xs text-indigo-900 font-bold leading-relaxed">{dive.explanation.impactLong}</p>
                        </div>
                      </div>
                    </div>

                    <div className="p-4 bg-white rounded-2xl border border-slate-200 shadow-sm">
                      <div className="flex items-center gap-2 mb-2">
                        <Shield size={14} className="text-emerald-600" />
                        <h5 className="text-xs font-bold text-emerald-600 uppercase tracking-wider">Privacy & Consent Handling</h5>
                      </div>
                      <p className="text-xs text-slate-600 leading-relaxed">{dive.explanation.privacyConsent}</p>
                    </div>

                    <div className="p-4 bg-amber-50 rounded-2xl border border-amber-100">
                      <div className="flex items-center gap-2 mb-3">
                        <Zap size={14} className="text-amber-600" />
                        <h5 className="text-xs font-bold text-amber-600 uppercase tracking-wider">Error Handling Toolkit</h5>
                      </div>
                      <ul className="space-y-2">
                        {(dive.explanation.errorHandling as string[]).map((error, eIdx) => (
                          <li key={eIdx} className="flex items-start gap-2 text-[10px] text-slate-600 leading-relaxed">
                            <AlertCircle size={12} className="text-amber-500 shrink-0 mt-0.5" />
                            {error}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* AI Strategy & Methodology Section */}
      <div className="space-y-8 pt-12 border-t border-slate-200">
        <div className="flex items-center gap-3">
          <div className="p-3 bg-slate-900 text-white rounded-2xl">
            <Terminal size={24} />
          </div>
          <div>
            <h3 className="text-2xl font-bold text-slate-900">AI Strategy & Methodology</h3>
            <p className="text-slate-500 text-sm">Architecting HCL Healthcare's Phygital & Gamified Future</p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-slate-50 p-8 rounded-3xl border border-slate-200 space-y-6">
            <h4 className="font-bold text-slate-900 flex items-center gap-2">
              <Shield size={18} className="text-indigo-600" />
              1. HCL-Specific System Instruction
            </h4>
            <div className="bg-slate-900 rounded-xl p-4 font-mono text-[11px] text-slate-300 leading-relaxed overflow-x-auto">
              <p className="text-indigo-400 mb-2">// Role: HCL Healthcare Digital Strategist</p>
              <p>You are architecting the next-gen 'Phygital' model for HCL Healthcare. Your mission is to bridge the gap between 50+ physical facilities and 3000+ postal codes using AI-driven routing and gamified engagement.</p>
              <p className="mt-4 text-indigo-400 mb-2">// HCL Differentiators to Leverage:</p>
              <ul className="list-disc list-inside space-y-1">
                <li>Phygital Orchestration: Seamless clinic-to-cloud routing.</li>
                <li>Gamified Wellness: Driving participation in corporate India.</li>
                <li>Personalized Care: Moving from 'Bespoke' to 'AI-Personalized'.</li>
                <li>Data Protection: Ensuring HCL's 'Data Protection' differentiator is baked into the ML stack.</li>
              </ul>
            </div>
          </div>

          <div className="bg-slate-50 p-8 rounded-3xl border border-slate-200 space-y-6">
            <h4 className="font-bold text-slate-900 flex items-center gap-2">
              <Zap size={18} className="text-amber-600" />
              2. The "Deep-Dive" Prompt
            </h4>
            <div className="bg-slate-900 rounded-xl p-4 font-mono text-[11px] text-slate-300 leading-relaxed overflow-x-auto">
              <p className="text-amber-400 mb-2">// Task: Propose 2-3 deep-dive data products</p>
              <p>For each, follow this structure:</p>
              <ul className="list-disc list-inside space-y-1 mt-2">
                <li>Product Name (e.g., "CarePath Recovery Navigator")</li>
                <li>Problem & Buyer (e.g., "Surgical Leakage")</li>
                <li>Feature Engineering (AHC + Claims + Derived)</li>
                <li>Model Architecture (Algorithm + Tech Stack)</li>
                <li>Privacy & Roadmap (Tokenization + MVP + Full Vision)</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="bg-indigo-900 text-white p-8 rounded-3xl shadow-xl space-y-6">
          <h4 className="text-xl font-bold flex items-center gap-2">
            <CheckCircle2 size={24} className="text-indigo-400" />
            3. Strategic Alignment & Impact
          </h4>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="space-y-2">
              <h5 className="font-bold text-indigo-300 text-sm uppercase tracking-wider">Actionable Insights</h5>
              <p className="text-sm text-indigo-100/80 leading-relaxed">
                Moves beyond simple information display to ROI-driven actions, which is the core objective of the assignment.
              </p>
            </div>
            <div className="space-y-2">
              <h5 className="font-bold text-indigo-300 text-sm uppercase tracking-wider">Defensibility</h5>
              <p className="text-sm text-indigo-100/80 leading-relaxed">
                Forcing the AI to name specific algorithms (like Random Forest) and ICD-10 features prepares you to defend your choices in the interview.
              </p>
            </div>
            <div className="space-y-2">
              <h5 className="font-bold text-indigo-300 text-sm uppercase tracking-wider">Privacy Compliance</h5>
              <p className="text-sm text-indigo-100/80 leading-relaxed">
                Addresses the "Hard Constraint" by integrating technical recommendations for local processing into the product's architecture.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Privacy & Compliance Section */}
      <div className="bg-indigo-50 p-8 rounded-3xl border border-indigo-100 space-y-6">
        <h3 className="text-xl font-bold text-indigo-900 flex items-center gap-2">
          <Shield size={24} />
          Data Privacy & Consent Strategy
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="space-y-3">
            <h4 className="font-bold text-indigo-800">Consent-First Architecture</h4>
            <p className="text-sm text-indigo-700/80 leading-relaxed">
              Implementing granular consent at the employee level. Employees can opt-in to specific data products (e.g., "I want my claims data used for my health score") while maintaining the right to be forgotten.
            </p>
          </div>
          <div className="space-y-3">
            <h4 className="font-bold text-indigo-800">Differential Privacy</h4>
            <p className="text-sm text-indigo-700/80 leading-relaxed">
              For employer-level insights, we apply differential privacy techniques to ensure that individual medical records cannot be reverse-engineered from aggregated reports.
            </p>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
