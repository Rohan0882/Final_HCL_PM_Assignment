import { 
  FileText, 
  CheckCircle2, 
  Target, 
  TrendingUp, 
  Shield, 
  Cpu, 
  Users, 
  Layout, 
  Zap, 
  Brain, 
  Database, 
  Lock, 
  Rocket, 
  Activity,
  AlertCircle,
  Eye,
  Server,
  Smartphone
} from 'lucide-react';
import { motion } from 'motion/react';

export default function SolutionDocument() {
  const sections = [
    {
      id: 'summary',
      title: 'Executive Summary',
      icon: Target,
      content: `This solution provides a unified, client-facing intelligence portal for HCL Healthcare's enterprise clients. It bridges the gap between Annual Health Checks (AHC), On-Site Clinics (OHC), and Wellness App data to provide a 360-degree view of workforce health. The platform is designed specifically for Benefits Heads and HR Leaders, moving from "Informational Dashboards" to "Actionable Intelligence Engines."`
    },
    {
      id: 'dashboard',
      title: 'Part 1: Dashboard Portal Strategy',
      icon: Layout,
      details: [
        {
          label: 'Problem Statement',
          text: 'Benefits Heads are overwhelmed with fragmented data (lab reports, clinic visits, app steps) but lack a "Single Source of Truth" to measure program ROI and identify rising risks before they turn into costly insurance claims.'
        },
        {
          label: 'Design Philosophy',
          text: 'The portal uses a "CFO-Ready" design language. Every metric is tied to a financial or operational outcome. We prioritize "Risk Stratification" and "ROI Tracking" over raw clinical data.'
        },
        {
          label: 'Configuration & Onboarding',
          text: 'To handle different service combinations (AHC only, OHC only, etc.), we use a "Module-Based Configuration" architecture. Onboarding a new client is a JSON configuration step that toggles UI components and data pipelines, ensuring zero custom code for new deployments.'
        },
        {
          label: 'Privacy-First AI Strategy',
          text: 'To solve the "No-Cloud LLM" constraint, we recommend a "Local LLM Deployment" (e.g., Llama 3 via Ollama) running on HCL\'s private infrastructure. We use Retrieval Augmented Generation (RAG) on anonymized, aggregated datasets to provide contextual answers.'
        }
      ]
    },
    {
      id: 'products',
      title: 'Part 2: Data Products Deep Dive',
      icon: Database,
      products: [
        {
          name: 'The Hospitalization Risk Predictor',
          buyer: 'Employers & Insurers',
          problem: 'Catastrophic claims often stem from unmanaged chronic conditions. Employers lack a way to predict which "stable" employee is heading toward an ER visit.',
          impact: '15-20% reduction in annual IPD (In-Patient) spend through proactive clinical intervention.',
          requirements: [
            'Automated ingestion of AHC lab files (HL7/CSV)',
            'Daily sync with Insurance TPA claim feeds',
            'Risk score visualization for Benefits Heads',
            'Automated trigger for OHC doctor outreach'
          ],
          model: 'XGBoost (Classification)',
          stack: 'Python, Scikit-Learn, Snowflake (Data Clean Room), AWS SageMaker',
          mvp: 'Static monthly "High-Risk" cohort report.',
          vision: 'Real-time predictive dashboard with automated care-coordination triggers.'
        },
        {
          name: 'The Care-Gap Closure Engine',
          buyer: 'Insurers & TPAs',
          problem: 'The "Last Mile" of care is broken. Critical lab results are generated, but employees never follow up with a doctor, leading to avoidable emergency claims.',
          impact: 'Immediate reduction in "Lost" patients and significant decrease in catastrophic cardiac/diabetic claims.',
          requirements: [
            'Real-time lab result monitoring',
            'Automated ICD-10 claim matching',
            'Telehealth scheduling integration',
            'Gap-closure tracking dashboard'
          ],
          model: 'Random Forest (Risk Stratification)',
          stack: 'FastAPI, MLflow, Snowflake',
          mvp: 'Monthly "At-Risk" report identifying employees with critical labs but no follow-up claims.',
          vision: 'AI-driven, real-time automated intervention system triggering SMS nudges and telehealth scheduling.'
        },
        {
          name: 'The Family Care Concierge',
          buyer: 'Employers & TPAs',
          problem: 'Employee productivity is derailed by family health crises. Managing medications for children and elderly parents is a high-stress "Mental Load".',
          impact: 'Reduced employee absenteeism and improved family-wide health outcomes, lowering dependent-claim costs.',
          requirements: [
            'Multi-profile family health dashboard',
            'Predictive refill and vaccination alerts',
            'Maternity & Pregnancy tracking module',
            'Family-level risk profiling'
          ],
          model: 'Multi-modal Recommendation Engine',
          stack: 'TensorFlow, Redis (Real-time state), Local Ollama (Nudges)',
          mvp: 'Family-wide medication refill reminders and lab test alerts.',
          vision: 'AI Health Butler: Proactive diet/routine suggestions and automated lab bookings based on family risk.'
        }
      ]
    }
  ];

  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="max-w-4xl mx-auto space-y-8 lg:space-y-12 pb-20 px-4 md:px-0"
    >
      {/* Header */}
      <div className="text-center space-y-4">
        <div className="inline-flex items-center gap-2 px-4 py-2 bg-indigo-50 text-indigo-700 rounded-full text-[10px] lg:text-xs font-black uppercase tracking-widest border border-indigo-100">
          <FileText size={14} />
          Solution Report
        </div>
        <h1 className="text-3xl lg:text-4xl font-black text-slate-900 tracking-tight leading-tight">HCL Healthcare Intelligence Portal</h1>
        <p className="text-sm lg:text-lg text-slate-500 max-w-2xl mx-auto font-medium">
          A comprehensive solution for the Product Manager Assignment, bridging clinical data with insurance claims to drive workforce vitality.
        </p>
      </div>

      {/* Navigation Quick Links */}
      <div className="flex flex-wrap justify-center gap-2 lg:gap-4">
        {sections.map(s => (
          <a key={s.id} href={`#${s.id}`} className="px-3 lg:px-4 py-2 bg-white border border-slate-200 rounded-xl text-[10px] lg:text-xs font-bold text-slate-600 hover:border-indigo-500 hover:text-indigo-600 transition-all shadow-sm">
            {s.title}
          </a>
        ))}
      </div>

      {/* Content Sections */}
      <div className="space-y-12 lg:space-y-16">
        {sections.map((section) => (
          <section key={section.id} id={section.id} className="scroll-mt-24 space-y-6 lg:space-y-8">
            <div className="flex items-center gap-3 lg:gap-4">
              <div className="p-2.5 lg:p-3 bg-slate-900 text-white rounded-xl lg:rounded-2xl shadow-lg shrink-0">
                <section.icon size={20} className="lg:size-6" />
              </div>
              <h2 className="text-xl lg:text-2xl font-black text-slate-900 tracking-tight">{section.title}</h2>
            </div>

            {section.content && (
              <div className="bg-white p-6 lg:p-8 rounded-3xl lg:rounded-[2.5rem] border border-slate-200 shadow-xl">
                <p className="text-slate-600 leading-relaxed text-base lg:text-lg font-medium">
                  {section.content}
                </p>
              </div>
            )}

            {section.details && (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 lg:gap-6">
                {section.details.map((detail, i) => (
                  <div key={i} className="bg-white p-6 lg:p-8 rounded-2xl lg:rounded-[2rem] border border-slate-200 shadow-lg space-y-3 hover:border-indigo-500/30 transition-colors">
                    <h4 className="text-[10px] lg:text-xs font-black text-indigo-600 uppercase tracking-widest">{detail.label}</h4>
                    <p className="text-slate-600 text-xs lg:text-sm leading-relaxed font-medium">{detail.text}</p>
                  </div>
                ))}
              </div>
            )}

            {section.products && (
              <div className="space-y-6 lg:space-y-8">
                {section.products.map((product, i) => (
                  <div key={i} className="bg-white rounded-3xl lg:rounded-[2.5rem] border border-slate-200 shadow-xl overflow-hidden">
                    <div className="bg-slate-900 p-6 lg:p-8 text-white flex flex-col md:flex-row md:items-center justify-between gap-4 lg:gap-6">
                      <div className="space-y-2">
                        <div className="flex items-center gap-2 text-indigo-400">
                          <Zap size={16} className="lg:size-[18px]" />
                          <span className="text-[8px] lg:text-[10px] font-black uppercase tracking-widest">Data Product</span>
                        </div>
                        <h3 className="text-lg lg:text-2xl font-black tracking-tight">{product.name}</h3>
                      </div>
                      <div className="bg-white/10 backdrop-blur-md px-3 lg:px-4 py-2 rounded-xl border border-white/10 w-fit shrink-0">
                        <span className="text-[8px] lg:text-[10px] font-bold text-white/40 uppercase block mb-0.5">Buyer</span>
                        <span className="text-xs lg:text-sm font-bold">{product.buyer}</span>
                      </div>
                    </div>

                    <div className="p-6 lg:p-8 grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
                      <div className="space-y-6 lg:space-y-8">
                        <div className="space-y-3 lg:space-y-4">
                          <div className="flex items-center gap-2 text-rose-600">
                            <AlertCircle size={16} className="lg:size-[18px]" />
                            <h4 className="text-[10px] lg:text-xs font-black uppercase tracking-widest">Problem Statement</h4>
                          </div>
                          <p className="text-xs lg:text-sm text-slate-600 leading-relaxed font-medium">{product.problem}</p>
                        </div>

                        <div className="space-y-3 lg:space-y-4">
                          <div className="flex items-center gap-2 text-emerald-600">
                            <TrendingUp size={16} className="lg:size-[18px]" />
                            <h4 className="text-[10px] lg:text-xs font-black uppercase tracking-widest">Expected Impact</h4>
                          </div>
                          <p className="text-xs lg:text-sm text-slate-600 leading-relaxed font-medium">{product.impact}</p>
                        </div>

                        <div className="space-y-3 lg:space-y-4">
                          <div className="flex items-center gap-2 text-indigo-600">
                            <CheckCircle2 size={16} className="lg:size-[18px]" />
                            <h4 className="text-[10px] lg:text-xs font-black uppercase tracking-widest">Functional Requirements</h4>
                          </div>
                          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 lg:gap-3">
                            {product.requirements.map((req, rIdx) => (
                              <li key={rIdx} className="flex items-start gap-2 text-[10px] lg:text-xs text-slate-500 font-medium">
                                <div className="w-1.5 h-1.5 bg-indigo-400 rounded-full mt-1.5 shrink-0" />
                                {req}
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>

                      <div className="space-y-6 lg:space-y-8">
                        <div className="p-5 lg:p-6 bg-slate-50 rounded-2xl lg:rounded-3xl border border-slate-100 space-y-4 lg:space-y-6">
                          <div className="grid grid-cols-2 gap-4 lg:gap-6">
                            <div>
                              <span className="text-[10px] lg:text-[10px] font-black text-slate-400 uppercase block mb-1">Model Choice</span>
                              <p className="text-[10px] lg:text-xs font-black text-slate-900">{product.model}</p>
                            </div>
                            <div>
                              <span className="text-[10px] lg:text-[10px] font-black text-slate-400 uppercase block mb-1">Tech Stack</span>
                              <p className="text-[10px] lg:text-xs font-black text-slate-900">{product.stack.split(',')[0]}</p>
                            </div>
                          </div>
                          <div className="pt-4 lg:pt-4 border-t border-slate-200">
                            <span className="text-[10px] lg:text-[10px] font-black text-slate-400 uppercase block mb-2 lg:mb-2">Roadmap (Short to Long Term)</span>
                            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-4 lg:gap-4">
                              <div className="flex gap-3">
                                <div className="w-8 h-8 bg-indigo-100 text-indigo-600 rounded-lg flex items-center justify-center shrink-0">
                                  <Rocket size={14} />
                                </div>
                                <div>
                                  <span className="text-[10px] font-black text-indigo-600 uppercase block">MVP</span>
                                  <p className="text-[10px] lg:text-[11px] text-slate-600 font-medium leading-tight">{product.mvp}</p>
                                </div>
                              </div>
                              <div className="flex gap-3">
                                <div className="w-8 h-8 bg-emerald-100 text-emerald-600 rounded-lg flex items-center justify-center shrink-0">
                                  <Eye size={14} />
                                </div>
                                <div>
                                  <span className="text-[10px] font-black text-emerald-600 uppercase block">Vision</span>
                                  <p className="text-[10px] lg:text-[11px] text-slate-600 font-medium leading-tight">{product.vision}</p>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </section>
        ))}
      </div>
    </motion.div>
  );
}
