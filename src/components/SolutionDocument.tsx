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
          text: 'To solve the "No-Cloud LLM" constraint, we recommend a "Local LLM Deployment" (e.g., Llama 3 via Ollama) running on HCL\'s private infrastructure. We use Retrieval Augmented Generation (RAG) on anonymized, aggregated datasets to provide contextual answers without exposing individual PII to any external API.'
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
      className="max-w-4xl mx-auto space-y-12 pb-20"
    >
      {/* Header */}
      <div className="text-center space-y-4">
        <div className="inline-flex items-center gap-2 px-4 py-2 bg-indigo-50 text-indigo-700 rounded-full text-xs font-black uppercase tracking-widest border border-indigo-100">
          <FileText size={14} />
          Solution Report
        </div>
        <h1 className="text-4xl font-black text-slate-900 tracking-tight">HCL Healthcare Intelligence Portal</h1>
        <p className="text-slate-500 max-w-2xl mx-auto font-medium">
          A comprehensive solution for the Product Manager Assignment, bridging clinical data with insurance claims to drive workforce vitality.
        </p>
      </div>

      {/* Navigation Quick Links */}
      <div className="flex flex-wrap justify-center gap-4">
        {sections.map(s => (
          <a key={s.id} href={`#${s.id}`} className="px-4 py-2 bg-white border border-slate-200 rounded-xl text-xs font-bold text-slate-600 hover:border-indigo-500 hover:text-indigo-600 transition-all shadow-sm">
            {s.title}
          </a>
        ))}
      </div>

      {/* Content Sections */}
      <div className="space-y-16">
        {sections.map((section) => (
          <section key={section.id} id={section.id} className="scroll-mt-24 space-y-8">
            <div className="flex items-center gap-4">
              <div className="p-3 bg-slate-900 text-white rounded-2xl shadow-lg">
                <section.icon size={24} />
              </div>
              <h2 className="text-2xl font-black text-slate-900 tracking-tight">{section.title}</h2>
            </div>

            {section.content && (
              <div className="bg-white p-8 rounded-[2.5rem] border border-slate-200 shadow-xl">
                <p className="text-slate-600 leading-relaxed text-lg font-medium">
                  {section.content}
                </p>
              </div>
            )}

            {section.details && (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {section.details.map((detail, i) => (
                  <div key={i} className="bg-white p-8 rounded-[2rem] border border-slate-200 shadow-lg space-y-4 hover:border-indigo-500/30 transition-colors">
                    <h4 className="text-xs font-black text-indigo-600 uppercase tracking-widest">{detail.label}</h4>
                    <p className="text-slate-600 text-sm leading-relaxed font-medium">{detail.text}</p>
                  </div>
                ))}
              </div>
            )}

            {section.products && (
              <div className="space-y-8">
                {section.products.map((product, i) => (
                  <div key={i} className="bg-white rounded-[2.5rem] border border-slate-200 shadow-xl overflow-hidden">
                    <div className="bg-slate-900 p-8 text-white flex flex-col md:flex-row md:items-center justify-between gap-6">
                      <div className="space-y-2">
                        <div className="flex items-center gap-2 text-indigo-400">
                          <Zap size={18} />
                          <span className="text-[10px] font-black uppercase tracking-widest">Data Product</span>
                        </div>
                        <h3 className="text-2xl font-black tracking-tight">{product.name}</h3>
                      </div>
                      <div className="bg-white/10 backdrop-blur-md px-4 py-2 rounded-xl border border-white/10">
                        <span className="text-[10px] font-bold text-white/40 uppercase block mb-1">Buyer</span>
                        <span className="text-sm font-bold">{product.buyer}</span>
                      </div>
                    </div>

                    <div className="p-8 grid grid-cols-1 lg:grid-cols-2 gap-12">
                      <div className="space-y-8">
                        <div className="space-y-4">
                          <div className="flex items-center gap-2 text-rose-600">
                            <AlertCircle size={18} />
                            <h4 className="text-xs font-black uppercase tracking-widest">Problem Statement</h4>
                          </div>
                          <p className="text-sm text-slate-600 leading-relaxed font-medium">{product.problem}</p>
                        </div>

                        <div className="space-y-4">
                          <div className="flex items-center gap-2 text-emerald-600">
                            <TrendingUp size={18} />
                            <h4 className="text-xs font-black uppercase tracking-widest">Expected Impact</h4>
                          </div>
                          <p className="text-sm text-slate-600 leading-relaxed font-medium">{product.impact}</p>
                        </div>

                        <div className="space-y-4">
                          <div className="flex items-center gap-2 text-indigo-600">
                            <CheckCircle2 size={18} />
                            <h4 className="text-xs font-black uppercase tracking-widest">Functional Requirements</h4>
                          </div>
                          <ul className="space-y-2">
                            {product.requirements.map((req, rIdx) => (
                              <li key={rIdx} className="flex items-start gap-2 text-xs text-slate-500 font-medium">
                                <div className="w-1.5 h-1.5 bg-indigo-400 rounded-full mt-1.5 shrink-0" />
                                {req}
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>

                      <div className="space-y-8">
                        <div className="p-6 bg-slate-50 rounded-3xl border border-slate-100 space-y-6">
                          <div className="grid grid-cols-2 gap-6">
                            <div>
                              <span className="text-[10px] font-black text-slate-400 uppercase block mb-1">Model Choice</span>
                              <p className="text-xs font-black text-slate-900">{product.model}</p>
                            </div>
                            <div>
                              <span className="text-[10px] font-black text-slate-400 uppercase block mb-1">Tech Stack</span>
                              <p className="text-xs font-black text-slate-900">{product.stack.split(',')[0]}</p>
                            </div>
                          </div>
                          <div className="pt-4 border-t border-slate-200">
                            <span className="text-[10px] font-black text-slate-400 uppercase block mb-2">Roadmap (Short to Long Term)</span>
                            <div className="space-y-4">
                              <div className="flex gap-3">
                                <div className="w-8 h-8 bg-indigo-100 text-indigo-600 rounded-lg flex items-center justify-center shrink-0">
                                  <Rocket size={14} />
                                </div>
                                <div>
                                  <span className="text-[10px] font-black text-indigo-600 uppercase block">MVP (Short Term)</span>
                                  <p className="text-[11px] text-slate-600 font-medium">{product.mvp}</p>
                                </div>
                              </div>
                              <div className="flex gap-3">
                                <div className="w-8 h-8 bg-emerald-100 text-emerald-600 rounded-lg flex items-center justify-center shrink-0">
                                  <Eye size={14} />
                                </div>
                                <div>
                                  <span className="text-[10px] font-black text-emerald-600 uppercase block">Full Vision (Long Term)</span>
                                  <p className="text-[11px] text-slate-600 font-medium">{product.vision}</p>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>

                        <div className="p-6 bg-indigo-900 rounded-3xl text-white space-y-4 shadow-xl shadow-indigo-900/20">
                          <div className="flex items-center gap-2 text-indigo-300">
                            <Shield size={18} />
                            <h4 className="text-xs font-black uppercase tracking-widest">Privacy & Compliance</h4>
                          </div>
                          <p className="text-[11px] text-indigo-100/80 leading-relaxed font-medium">
                            We use "Tokenization-at-Source" and "Data Clean Rooms" (Snowflake) to ensure PII never leaves the source. All models are trained on de-identified tokens, ensuring HIPAA and GDPR compliance by design.
                          </p>
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

      {/* Footer / Call to Action */}
      <div className="bg-slate-900 p-12 rounded-[3rem] text-white text-center space-y-8 shadow-2xl">
        <div className="w-20 h-20 bg-indigo-600 rounded-[2rem] flex items-center justify-center mx-auto shadow-xl shadow-indigo-900/50">
          <Brain size={40} />
        </div>
        <div className="space-y-2">
          <h2 className="text-3xl font-black tracking-tight">Ready to Transform Workforce Health?</h2>
          <p className="text-slate-400 max-w-xl mx-auto font-medium">
            This solution combines clinical precision with behavioral economics to create a sustainable, ROI-driven health culture.
          </p>
        </div>
        <div className="flex flex-wrap justify-center gap-4">
          <div className="px-6 py-3 bg-white/10 rounded-2xl border border-white/10 flex items-center gap-3">
            <Server size={18} className="text-indigo-400" />
            <span className="text-xs font-bold">Local LLM Architecture</span>
          </div>
          <div className="px-6 py-3 bg-white/10 rounded-2xl border border-white/10 flex items-center gap-3">
            <Lock size={18} className="text-emerald-400" />
            <span className="text-xs font-bold">Privacy-First Data Mesh</span>
          </div>
          <div className="px-6 py-3 bg-white/10 rounded-2xl border border-white/10 flex items-center gap-3">
            <Smartphone size={18} className="text-pink-400" />
            <span className="text-xs font-bold">Gamified Engagement</span>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
