import { useState, useEffect } from 'react';
import { 
  LayoutDashboard, 
  Activity, 
  Stethoscope, 
  Smartphone, 
  BrainCircuit, 
  TrendingUp, 
  Settings, 
  ChevronRight,
  AlertCircle,
  CheckCircle2,
  AlertTriangle,
  MessageSquare,
  FileText,
  Menu,
  X,
  Users,
  ShieldCheck,
  Brain,
  Pill,
  Bell,
  Clock,
  MapPin,
  Wind,
  Thermometer,
  Droplets,
  CloudLightning,
  Download,
  Share2,
  Filter,
  Calendar,
  Leaf,
  Trophy
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  LineChart, 
  Line, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  ResponsiveContainer, 
  PieChart, 
  Pie, 
  Cell,
  BarChart,
  Bar,
  AreaChart,
  Area,
  Legend
} from 'recharts';
import { cn } from './lib/utils';
import { 
  MOCK_CLIENT_CONFIGS, 
  MOCK_HEALTH_METRICS, 
  MOCK_RISK_STRATIFICATION, 
  MOCK_ROI, 
  MOCK_INSIGHTS,
  MOCK_DEMOGRAPHICS,
  MOCK_FAMILY_HEALTH,
  MOCK_INSURANCE_METRICS,
  MOCK_CASES,
  MOCK_CRITICAL_ALERTS,
  MOCK_OFFICE_LOCATIONS,
  MOCK_ENVIRONMENTAL_IMPACT,
  MOCK_HISTORICAL_TRENDS,
  MOCK_REGIONAL_COMPARISON,
  MOCK_DEPARTMENTAL_COMPARISON,
  MOCK_ROI_BREAKDOWN,
  MOCK_MEDICATION_ADHERENCE,
  MOCK_UPCOMING_TESTS,
  MOCK_FAMILY_MEDICATIONS,
  MOCK_AI_SUGGESTIONS,
  MOCK_OPD_IPD_TRENDS
} from './mockData';
import { ClientConfig, ServiceType, CriticalAlert, OfficeLocation } from './types';
import AIAssistant from './components/AIAssistant';
import Part2Proposal from './components/Part2Proposal';
import CarePathMVP from './components/CarePathMVP';
import GamifiedWellnessMVP from './components/GamifiedWellnessMVP';
import FamilyCareConciergeMVP from './components/FamilyCareConciergeMVP';
import GamifiedAwarenessMVP from './components/GamifiedAwarenessMVP';
import SolutionDocument from './components/SolutionDocument';

const COLORS = ['#6366f1', '#ec4899', '#f59e0b', '#10b981', '#8b5cf6'];
const RISK_COLORS = ['#ef4444', '#f59e0b', '#10b981'];

export default function App() {
  const [activeTab, setActiveTab] = useState<'dashboard' | 'proposal' | 'mvp' | 'gamified-mvp' | 'family-mvp' | 'gamified-awareness-mvp' | 'solution-report'>('dashboard');
  const [selectedClient, setSelectedClient] = useState<ClientConfig>(MOCK_CLIENT_CONFIGS['GlobalTech Solutions']);
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const [isAIChatOpen, setIsAIChatOpen] = useState(false);
  const [showCaseDetails, setShowCaseDetails] = useState(false);
  const [activeView, setActiveView] = useState<'overview' | 'climate'>('overview');
  const [showRiskOverlay, setShowRiskOverlay] = useState(false);
  const [timeRange, setTimeRange] = useState<'day' | 'month' | 'year'>('month');
  const [comparisonType, setComparisonType] = useState<'region' | 'department'>('region');

  const handleExport = () => {
    const data = JSON.stringify({
      client: selectedClient.name,
      metrics: MOCK_INSURANCE_METRICS,
      locations: MOCK_OFFICE_LOCATIONS,
      timestamp: new Date().toISOString()
    }, null, 2);
    const blob = new Blob([data], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `${selectedClient.name}_Health_Report.json`;
    a.click();
  };

  useEffect(() => {
    // Simulate an API call that "pulls" environmental data and triggers a risk overlay
    const timer = setTimeout(() => {
      const gurgaon = MOCK_OFFICE_LOCATIONS.find(l => l.name.includes('Gurgaon'));
      if (gurgaon && gurgaon.environmentalData.aqi > 300) {
        setShowRiskOverlay(true);
      }
    }, 5000);
    return () => clearTimeout(timer);
  }, []);

  const riskData = [
    { name: 'High Risk', value: MOCK_RISK_STRATIFICATION.high },
    { name: 'Moderate Risk', value: MOCK_RISK_STRATIFICATION.moderate },
    { name: 'Low Risk', value: MOCK_RISK_STRATIFICATION.low },
  ];

  const trendData = [
    { month: 'Jan', metabolic: 22, mental: 28, obesity: 27 },
    { month: 'Feb', metabolic: 23, mental: 30, obesity: 27 },
    { month: 'Mar', metabolic: 24, mental: 32, obesity: 28 },
  ];

  const isServiceEnabled = (service: ServiceType) => {
    return selectedClient.enabledServices.includes(service);
  };

  return (
    <div className="flex h-screen bg-slate-50 font-sans text-slate-900 overflow-hidden">
      {/* Sidebar */}
      <aside 
        className={cn(
          "bg-white border-r border-slate-200 transition-all duration-300 flex flex-col",
          isSidebarOpen ? "w-64" : "w-20"
        )}
      >
        <div className="p-6 flex items-center gap-3 border-b border-slate-100">
          <div className="w-8 h-8 bg-indigo-600 rounded-lg flex items-center justify-center text-white font-bold">
            H
          </div>
          {isSidebarOpen && <span className="font-bold text-xl tracking-tight">Habit Intelligence</span>}
        </div>

        <nav className="flex-1 p-4 space-y-2">
          <button 
            onClick={() => setActiveTab('dashboard')}
            className={cn(
              "w-full flex items-center gap-3 px-3 py-2 rounded-lg transition-colors",
              activeTab === 'dashboard' ? "bg-indigo-50 text-indigo-700" : "text-slate-600 hover:bg-slate-50"
            )}
          >
            <LayoutDashboard size={20} />
            {isSidebarOpen && <span>Dashboard</span>}
          </button>
          <button 
            onClick={() => setActiveTab('proposal')}
            className={cn(
              "w-full flex items-center gap-3 px-3 py-2 rounded-lg transition-colors",
              activeTab === 'proposal' ? "bg-indigo-50 text-indigo-700" : "text-slate-600 hover:bg-slate-50"
            )}
          >
            <FileText size={20} />
            {isSidebarOpen && <span>Part 2: Data Products</span>}
          </button>
          <button 
            onClick={() => setActiveTab('mvp')}
            className={cn(
              "w-full flex items-center gap-3 px-3 py-2 rounded-lg transition-colors",
              activeTab === 'mvp' ? "bg-indigo-50 text-indigo-700" : "text-slate-600 hover:bg-slate-50"
            )}
          >
            <Smartphone size={20} />
            {isSidebarOpen && <span>CarePath MVP</span>}
          </button>
          <button 
            onClick={() => setActiveTab('gamified-awareness-mvp')}
            className={cn(
              "w-full flex items-center gap-3 px-3 py-2 rounded-lg transition-colors",
              activeTab === 'gamified-awareness-mvp' ? "bg-indigo-50 text-indigo-700" : "text-slate-600 hover:bg-slate-50"
            )}
          >
            <Trophy size={20} />
            {isSidebarOpen && <span>Awareness MVP</span>}
          </button>
          <button 
            onClick={() => setActiveTab('solution-report')}
            className={cn(
              "w-full flex items-center gap-3 px-3 py-2 rounded-lg transition-colors",
              activeTab === 'solution-report' ? "bg-indigo-50 text-indigo-700" : "text-slate-600 hover:bg-slate-50"
            )}
          >
            <FileText size={20} />
            {isSidebarOpen && <span>Solution Report</span>}
          </button>
        </nav>

        <div className="p-4 border-t border-slate-100">
          <div className="flex flex-col gap-2">
            <label className="text-[10px] uppercase font-bold text-slate-400 px-3">Switch Client (Config Demo)</label>
            <select 
              className="w-full bg-slate-50 border border-slate-200 rounded-lg px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-indigo-500"
              value={selectedClient.name}
              onChange={(e) => setSelectedClient(MOCK_CLIENT_CONFIGS[e.target.value])}
            >
              {Object.keys(MOCK_CLIENT_CONFIGS).map(name => (
                <option key={name} value={name}>{name}</option>
              ))}
            </select>
          </div>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 flex flex-col overflow-hidden">
        {/* Header */}
        <header className="h-16 bg-white border-b border-slate-200 flex items-center justify-between px-8 shrink-0">
          <div className="flex items-center gap-4">
            <button onClick={() => setIsSidebarOpen(!isSidebarOpen)} className="p-2 hover:bg-slate-100 rounded-lg">
              <Menu size={20} />
            </button>
            <h1 className="text-lg font-semibold text-slate-800">
              {activeTab === 'dashboard' ? `${selectedClient.name} Health Insights` : 'Part 2: Data Product Proposals'}
            </h1>
          </div>
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2 px-3 py-1 bg-indigo-50 text-indigo-700 rounded-full text-xs font-medium">
              <Activity size={14} />
              {selectedClient.employeeCount.toLocaleString()} Employees
            </div>
            <button 
              onClick={handleExport}
              className="hidden md:flex items-center gap-2 px-4 py-2 bg-white border border-slate-200 rounded-lg text-sm font-bold text-slate-600 hover:bg-slate-50 transition-all shadow-sm"
            >
              <Download size={18} />
              Export
            </button>
            <button 
              onClick={() => setIsAIChatOpen(true)}
              className="flex items-center gap-2 bg-indigo-600 hover:bg-indigo-700 text-white px-4 py-2 rounded-lg text-sm font-medium transition-all shadow-sm"
            >
              <BrainCircuit size={18} />
              Ask AI Assistant
            </button>
          </div>
        </header>

        {/* Scrollable Area */}
        <div className="flex-1 overflow-y-auto p-8 space-y-8">
          <AnimatePresence mode="wait">
            {activeTab === 'dashboard' && (
              <motion.div 
                key="dashboard"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                className="space-y-8"
              >
                {/* ROI Tracker - Full Width Horizontal Section */}
                <div className="bg-white p-8 rounded-3xl border border-slate-200 shadow-sm space-y-8">
                  <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                    <div>
                      <h3 className="text-xl font-bold text-slate-800">ROI Tracker</h3>
                      <p className="text-slate-500 text-xs italic">"Preventive care is 4.7x more cost-effective than hospitalization."</p>
                    </div>
                    <div className="flex items-center gap-4">
                      <div className="text-right">
                        <div className="text-[10px] font-bold text-indigo-600 uppercase tracking-wider">Net Savings</div>
                        <div className="text-2xl font-bold text-indigo-600">₹45L</div>
                      </div>
                      <div className="p-3 bg-indigo-50 text-indigo-600 rounded-2xl">
                        <TrendingUp size={24} />
                      </div>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                    {/* Chart Column */}
                    <div className="lg:col-span-3 flex flex-col items-center justify-center">
                      <div className="h-48 w-48 relative">
                        <ResponsiveContainer width="100%" height="100%">
                          <PieChart>
                            <Pie
                              data={MOCK_ROI_BREAKDOWN}
                              cx="50%"
                              cy="50%"
                              innerRadius={60}
                              outerRadius={80}
                              paddingAngle={5}
                              dataKey="value"
                            >
                              {MOCK_ROI_BREAKDOWN.map((entry, index) => (
                                <Cell key={`cell-${index}`} fill={entry.color} />
                              ))}
                            </Pie>
                            <Tooltip 
                              formatter={(value: number) => `₹${(value / 100000).toFixed(1)}L`}
                            />
                          </PieChart>
                        </ResponsiveContainer>
                        <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none">
                          <span className="text-[10px] font-bold text-slate-400 uppercase">Total ROI</span>
                          <span className="text-lg font-bold text-slate-800">₹45L</span>
                        </div>
                      </div>
                    </div>

                    {/* Legend Column */}
                    <div className="lg:col-span-4 flex flex-col gap-4">
                      {MOCK_ROI_BREAKDOWN.map((item) => (
                        <div key={item.name} className="flex items-center justify-between gap-4 p-3 rounded-2xl bg-slate-50 border border-slate-100/50 hover:border-slate-200 transition-colors">
                          <div className="flex items-center gap-3 min-w-0">
                            <div className="w-3 h-3 rounded-full shrink-0 shadow-sm" style={{ backgroundColor: item.color }} />
                            <span className="text-xs font-semibold text-slate-700 truncate">{item.name}</span>
                          </div>
                          <span className="text-sm font-bold text-slate-900 shrink-0">₹{(item.value / 100000).toFixed(1)}L</span>
                        </div>
                      ))}
                    </div>

                    {/* Insights Column */}
                    <div className="lg:col-span-5">
                      <div className="p-6 bg-slate-50 rounded-2xl border border-slate-100">
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                          <div className="space-y-1">
                            <span className="text-[10px] font-bold text-indigo-600 uppercase tracking-wider block">Problem</span>
                            <p className="text-[11px] text-slate-600 leading-tight">₹57L potential liability from unmanaged chronic risks.</p>
                          </div>
                          <div className="space-y-1">
                            <span className="text-[10px] font-bold text-amber-600 uppercase tracking-wider block">Reason</span>
                            <p className="text-[11px] text-slate-600 leading-tight">Low screening adherence in South region (22%).</p>
                          </div>
                          <div className="space-y-1">
                            <span className="text-[10px] font-bold text-emerald-600 uppercase tracking-wider block">Solution</span>
                            <p className="text-[11px] text-slate-800 font-bold leading-tight">Allocate ₹5L for on-site camps to save ₹20L.</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-1 xl:grid-cols-4 gap-8 items-start">
                  {/* Main Dashboard Content */}
                  <div className="xl:col-span-3 space-y-8">
                    {/* Environmental Impact Score & Executive Summary */}
                    <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
                    {/* Environmental Impact Score Widget */}
                    <div className="bg-white p-8 rounded-3xl border border-slate-200 shadow-sm space-y-6">
                      <div className="flex items-center justify-between">
                        <h3 className="text-lg font-bold flex items-center gap-2">
                          <Leaf size={20} className="text-emerald-600" />
                          Env. Score
                        </h3>
                        <div className={cn(
                          "px-2 py-1 rounded text-[10px] font-bold uppercase",
                          MOCK_ENVIRONMENTAL_IMPACT.status === 'excellent' ? "bg-emerald-100 text-emerald-700" :
                          MOCK_ENVIRONMENTAL_IMPACT.status === 'fair' ? "bg-amber-100 text-amber-700" : "bg-rose-100 text-rose-700"
                        )}>
                          {MOCK_ENVIRONMENTAL_IMPACT.status}
                        </div>
                      </div>

                      <div className="flex flex-col items-center justify-center py-4">
                        <div className="relative w-32 h-32 flex items-center justify-center">
                          <svg className="w-full h-full transform -rotate-90">
                            <circle
                              cx="64"
                              cy="64"
                              r="58"
                              stroke="currentColor"
                              strokeWidth="12"
                              fill="transparent"
                              className="text-slate-100"
                            />
                            <circle
                              cx="64"
                              cy="64"
                              r="58"
                              stroke="currentColor"
                              strokeWidth="12"
                              fill="transparent"
                              strokeDasharray={364.4}
                              strokeDashoffset={364.4 * (1 - MOCK_ENVIRONMENTAL_IMPACT.score / 100)}
                              className={cn(
                                "transition-all duration-1000",
                                MOCK_ENVIRONMENTAL_IMPACT.score > 80 ? "text-emerald-500" :
                                MOCK_ENVIRONMENTAL_IMPACT.score > 60 ? "text-amber-500" : "text-rose-500"
                              )}
                            />
                          </svg>
                          <div className="absolute inset-0 flex flex-col items-center justify-center">
                            <span className="text-3xl font-bold text-slate-800">{MOCK_ENVIRONMENTAL_IMPACT.score}</span>
                            <span className="text-[10px] font-bold text-slate-400 uppercase">Impact Score</span>
                          </div>
                        </div>
                      </div>

                      <div className="space-y-3">
                        {MOCK_ENVIRONMENTAL_IMPACT.factors.map((factor) => (
                          <div key={factor.label} className="flex items-center justify-between text-xs">
                            <span className="text-slate-500">{factor.label}</span>
                            <span className={cn(
                              "font-bold",
                              factor.impact === 'positive' ? "text-emerald-600" :
                              factor.impact === 'negative' ? "text-rose-600" : "text-slate-600"
                            )}>
                              {factor.value}{factor.label.includes('Index') ? '' : factor.label.includes('Temp') ? '°C' : '%'}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Executive Summary & Risk Stratification */}
                    <div className="lg:col-span-3 bg-white p-8 rounded-3xl border border-slate-200 shadow-sm space-y-6">
                      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                        <div>
                          <h3 className="text-xl font-bold text-slate-800">Workforce Health Risk Stratification</h3>
                          <p className="text-sm text-slate-500">Executive summary of population health status</p>
                        </div>
                        <div className="flex flex-wrap items-center gap-4 text-xs font-bold uppercase tracking-wider text-slate-400">
                          <div className="flex items-center gap-1.5">
                            <div className="w-2 h-2 rounded-full bg-red-500" /> High
                          </div>
                          <div className="flex items-center gap-1.5">
                            <div className="w-2 h-2 rounded-full bg-amber-500" /> Moderate
                          </div>
                          <div className="flex items-center gap-1.5">
                            <div className="w-2 h-2 rounded-full bg-emerald-500" /> Low
                          </div>
                        </div>
                      </div>
                    
                    <div className="h-64 flex items-center justify-center">
                      <ResponsiveContainer width="100%" height="100%">
                        <BarChart data={[
                          { name: 'Population', high: MOCK_RISK_STRATIFICATION.high, moderate: MOCK_RISK_STRATIFICATION.moderate, low: MOCK_RISK_STRATIFICATION.low }
                        ]} layout="vertical" stackOffset="expand">
                          <XAxis type="number" hide />
                          <YAxis type="category" dataKey="name" hide />
                          <Tooltip 
                            cursor={{ fill: 'transparent' }}
                            content={({ active, payload }) => {
                              if (active && payload && payload.length) {
                                return (
                                  <div className="bg-white p-4 rounded-xl shadow-xl border border-slate-100">
                                    {payload.map((p) => (
                                      <div key={p.name} className="flex items-center justify-between gap-8 py-1">
                                        <span className="text-xs font-bold text-slate-500 uppercase">{p.name}</span>
                                        <span className="text-sm font-bold text-slate-900">{p.value}%</span>
                                      </div>
                                    ))}
                                  </div>
                                );
                              }
                              return null;
                            }}
                          />
                          <Bar dataKey="high" stackId="a" fill="#ef4444" radius={[20, 0, 0, 20]} barSize={60} />
                          <Bar dataKey="moderate" stackId="a" fill="#f59e0b" barSize={60} />
                          <Bar dataKey="low" stackId="a" fill="#10b981" radius={[0, 20, 20, 0]} barSize={60} />
                        </BarChart>
                      </ResponsiveContainer>
                    </div>

                    <div className="grid grid-cols-3 gap-4 pt-4 border-t border-slate-50">
                      <div className="text-center">
                        <div className="text-2xl font-bold text-red-600">{MOCK_RISK_STRATIFICATION.high}%</div>
                        <div className="text-[10px] font-bold text-slate-400 uppercase">Critical Intervention</div>
                      </div>
                      <div className="text-center border-x border-slate-100">
                        <div className="text-2xl font-bold text-amber-600">{MOCK_RISK_STRATIFICATION.moderate}%</div>
                        <div className="text-[10px] font-bold text-slate-400 uppercase">Preventive Focus</div>
                      </div>
                      <div className="text-center">
                        <div className="text-2xl font-bold text-emerald-600">{MOCK_RISK_STRATIFICATION.low}%</div>
                        <div className="text-[10px] font-bold text-slate-400 uppercase">Maintain Wellness</div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Reactive Sections based on ClientConfig */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                  {/* AHC Lab Parameters (Reactive) */}
                  {selectedClient.hasAHC && (
                    <div className="bg-white p-8 rounded-3xl border border-slate-200 shadow-sm space-y-6">
                      <div className="flex items-center justify-between">
                        <h3 className="text-lg font-bold flex items-center gap-2">
                          <Activity size={20} className="text-indigo-600" />
                          AHC Lab Parameter Trends
                        </h3>
                        <div className="px-3 py-1 bg-indigo-50 text-indigo-600 rounded-full text-[10px] font-bold uppercase">HbA1c & Lipids</div>
                      </div>
                      <div className="h-64">
                        <ResponsiveContainer width="100%" height="100%">
                          <LineChart data={trendData}>
                            <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f1f5f9" />
                            <XAxis dataKey="month" axisLine={false} tickLine={false} tick={{ fontSize: 10 }} />
                            <YAxis axisLine={false} tickLine={false} tick={{ fontSize: 10 }} />
                            <Tooltip />
                            <Line type="monotone" dataKey="metabolic" stroke="#6366f1" strokeWidth={3} dot={{ r: 4 }} name="HbA1c Risk" />
                            <Line type="monotone" dataKey="obesity" stroke="#f59e0b" strokeWidth={3} dot={{ r: 4 }} name="Lipid Profile" />
                          </LineChart>
                        </ResponsiveContainer>
                      </div>
                    </div>
                  )}

                  {/* O-Site Clinic Stats (Reactive) */}
                  {selectedClient.hasOHC && (
                    <div className="bg-white p-8 rounded-3xl border border-slate-200 shadow-sm space-y-6">
                      <div className="flex items-center justify-between">
                        <h3 className="text-lg font-bold flex items-center gap-2">
                          <Stethoscope size={20} className="text-emerald-600" />
                          On-Site Clinic Distribution
                        </h3>
                        <div className="px-3 py-1 bg-emerald-50 text-emerald-600 rounded-full text-[10px] font-bold uppercase">ICD-10 Codes</div>
                      </div>
                      <div className="h-64">
                        <ResponsiveContainer width="100%" height="100%">
                          <BarChart data={[
                            { name: 'Respiratory', value: 45 },
                            { name: 'Musculo', value: 32 },
                            { name: 'Digestive', value: 28 },
                            { name: 'Mental', value: 22 }
                          ]}>
                            <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f1f5f9" />
                            <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{ fontSize: 10 }} />
                            <YAxis axisLine={false} tickLine={false} tick={{ fontSize: 10 }} />
                            <Tooltip />
                            <Bar dataKey="value" fill="#10b981" radius={[4, 4, 0, 0]} />
                          </BarChart>
                        </ResponsiveContainer>
                      </div>
                    </div>
                  )}

                  {/* Wellness App Engagement (Reactive) */}
                  {selectedClient.hasApp && (
                    <div className="lg:col-span-2 bg-white p-8 rounded-3xl border border-slate-200 shadow-sm space-y-6">
                      <div className="flex items-center justify-between">
                        <h3 className="text-lg font-bold flex items-center gap-2">
                          <Smartphone size={20} className="text-pink-600" />
                          Wellness App Engagement
                        </h3>
                        <div className="px-3 py-1 bg-pink-50 text-pink-600 rounded-full text-[10px] font-bold uppercase">Step Tracking & Activity</div>
                      </div>
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <div className="h-48 col-span-2">
                          <ResponsiveContainer width="100%" height="100%">
                            <LineChart data={[
                              { day: 'Mon', steps: 6200 },
                              { day: 'Tue', steps: 7100 },
                              { day: 'Wed', steps: 6800 },
                              { day: 'Thu', steps: 8200 },
                              { day: 'Fri', steps: 7500 },
                              { day: 'Sat', steps: 4500 },
                              { day: 'Sun', steps: 5200 },
                            ]}>
                              <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f1f5f9" />
                              <XAxis dataKey="day" axisLine={false} tickLine={false} tick={{ fontSize: 10 }} />
                              <YAxis axisLine={false} tickLine={false} tick={{ fontSize: 10 }} />
                              <Tooltip />
                              <Line type="monotone" dataKey="steps" stroke="#ec4899" strokeWidth={3} dot={{ r: 4 }} />
                            </LineChart>
                          </ResponsiveContainer>
                        </div>
                        <div className="flex flex-col justify-center space-y-4">
                          <div className="bg-pink-50 p-4 rounded-2xl">
                            <div className="text-2xl font-bold text-pink-600">6,850</div>
                            <div className="text-[10px] font-bold text-pink-400 uppercase">Avg Daily Steps</div>
                          </div>
                          <div className="bg-slate-50 p-4 rounded-2xl">
                            <div className="text-2xl font-bold text-slate-700">72%</div>
                            <div className="text-[10px] font-bold text-slate-400 uppercase">Active Users</div>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}
                </div>

                {/* Historical Trends & Improvement Analysis */}
                <div className="bg-white p-8 rounded-3xl border border-slate-200 shadow-sm space-y-8">
                  <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                    <div>
                      <h3 className="text-xl font-bold text-slate-800">Historical Health Trends</h3>
                      <p className="text-sm text-slate-500">Comparative analysis of employee and family health metrics</p>
                    </div>
                    <div className="flex bg-slate-100 p-1 rounded-xl">
                      {(['day', 'month', 'year'] as const).map((range) => (
                        <button
                          key={range}
                          onClick={() => setTimeRange(range)}
                          className={cn(
                            "px-4 py-2 rounded-lg text-xs font-bold transition-all uppercase",
                            timeRange === range ? "bg-white text-indigo-600 shadow-sm" : "text-slate-500 hover:text-slate-700"
                          )}
                        >
                          {range}
                        </button>
                      ))}
                    </div>
                  </div>

                  <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    <div className="lg:col-span-2 h-80">
                      <ResponsiveContainer width="100%" height="100%">
                        <AreaChart data={MOCK_HISTORICAL_TRENDS[timeRange]}>
                          <defs>
                            <linearGradient id="colorEmp" x1="0" y1="0" x2="0" y2="1">
                              <stop offset="5%" stopColor="#6366f1" stopOpacity={0.1}/>
                              <stop offset="95%" stopColor="#6366f1" stopOpacity={0}/>
                            </linearGradient>
                            <linearGradient id="colorFam" x1="0" y1="0" x2="0" y2="1">
                              <stop offset="5%" stopColor="#ec4899" stopOpacity={0.1}/>
                              <stop offset="95%" stopColor="#ec4899" stopOpacity={0}/>
                            </linearGradient>
                          </defs>
                          <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f1f5f9" />
                          <XAxis dataKey="date" axisLine={false} tickLine={false} tick={{ fontSize: 10 }} />
                          <YAxis axisLine={false} tickLine={false} tick={{ fontSize: 10 }} domain={[0, 100]} />
                          <Tooltip 
                            contentStyle={{ borderRadius: '16px', border: 'none', boxShadow: '0 10px 15px -3px rgb(0 0 0 / 0.1)' }}
                          />
                          <Area 
                            type="monotone" 
                            dataKey="employeeHealth" 
                            name="Employee Health"
                            stroke="#6366f1" 
                            strokeWidth={3}
                            fillOpacity={1} 
                            fill="url(#colorEmp)" 
                          />
                          <Area 
                            type="monotone" 
                            dataKey="familyHealth" 
                            name="Family Health"
                            stroke="#ec4899" 
                            strokeWidth={3}
                            fillOpacity={1} 
                            fill="url(#colorFam)" 
                          />
                        </AreaChart>
                      </ResponsiveContainer>
                    </div>

                    <div className="space-y-6">
                      <div className="p-6 bg-emerald-50 rounded-2xl border border-emerald-100">
                        <div className="flex items-center justify-between mb-4">
                          <h4 className="font-bold text-emerald-900">Improvement Trend</h4>
                          <div className="flex items-center gap-1 text-emerald-600 font-bold text-sm">
                            <TrendingUp size={16} />
                            +4.2%
                          </div>
                        </div>
                        <p className="text-xs text-emerald-700 leading-relaxed">
                          Overall health index has improved by 4.2% since the introduction of regional climate-informed advisories.
                        </p>
                      </div>

                      <div className="p-6 bg-indigo-50 rounded-2xl border border-indigo-100">
                        <h4 className="font-bold text-indigo-900 mb-4">Savings Projection</h4>
                        <div className="space-y-4">
                          <div className="flex justify-between items-end">
                            <span className="text-xs text-indigo-600">Projected ROI</span>
                            <span className="text-xl font-bold text-indigo-900">₹1.2Cr</span>
                          </div>
                          <div className="h-2 bg-indigo-200 rounded-full overflow-hidden">
                            <div className="h-full bg-indigo-600" style={{ width: '75%' }} />
                          </div>
                          <p className="text-[10px] text-indigo-400 italic">
                            Based on current preventive care adoption rates.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* High-Impact Case Management (Executive View) */}
                <div className="bg-white p-8 rounded-3xl border border-slate-200 shadow-sm space-y-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="text-xl font-bold text-slate-800">High-Impact Case Management</h3>
                      <p className="text-sm text-slate-500">Tracking critical health events and insurance status</p>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="flex items-center gap-1.5 text-[10px] font-bold text-rose-600 bg-rose-50 px-3 py-1 rounded-full">
                        <AlertTriangle size={12} />
                        {MOCK_INSURANCE_METRICS.uncoveredCount} Uninsured Flags
                      </div>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 gap-4">
                    {MOCK_CASES.slice(0, 3).map((record) => (
                      <div key={record.id} className="flex flex-col md:flex-row md:items-center justify-between p-6 bg-slate-50 rounded-2xl border border-slate-100 hover:border-indigo-200 transition-all group">
                        <div className="flex items-center gap-4 mb-4 md:mb-0">
                          <div className={cn(
                            "w-12 h-12 rounded-xl flex items-center justify-center shrink-0",
                            record.status === 'critical' ? "bg-rose-100 text-rose-600" : "bg-indigo-100 text-indigo-600"
                          )}>
                            <Stethoscope size={24} />
                          </div>
                          <div>
                            <div className="flex items-center gap-2">
                              <span className="font-bold text-slate-900">{record.procedure}</span>
                              <span className={cn(
                                "text-[10px] font-bold px-2 py-0.5 rounded uppercase",
                                record.status === 'critical' ? "bg-rose-500 text-white" : "bg-indigo-500 text-white"
                              )}>
                                {record.status}
                              </span>
                            </div>
                            <div className="text-xs text-slate-500 mt-0.5">
                              {record.id} • {record.gender} • {record.region}
                            </div>
                          </div>
                        </div>

                        <div className="flex items-center gap-8">
                          <div className="text-right hidden md:block">
                            <div className="text-sm font-bold text-slate-900">₹{record.totalBill.toLocaleString()}</div>
                            <div className="text-[10px] text-slate-400 uppercase font-bold">Total Bill</div>
                          </div>
                          
                          <div className="flex items-center gap-3">
                            {!record.hasInsurance && (
                              <div className="px-3 py-1.5 bg-rose-600 text-white text-[10px] font-bold rounded-lg shadow-lg shadow-rose-200 animate-pulse">
                                UNINSURED FLAG
                              </div>
                            )}
                            <button className="p-2.5 bg-white border border-slate-200 text-slate-600 rounded-xl hover:bg-indigo-50 hover:text-indigo-600 hover:border-indigo-200 transition-all shadow-sm">
                              <FileText size={18} />
                            </button>
                            <button className="p-2.5 bg-white border border-slate-200 text-slate-600 rounded-xl hover:bg-slate-100 transition-all shadow-sm">
                              <ChevronRight size={18} />
                            </button>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>

                  <button className="w-full py-4 text-sm font-bold text-slate-400 hover:text-indigo-600 hover:bg-indigo-50 rounded-2xl border border-dashed border-slate-200 hover:border-indigo-200 transition-all">
                    View All Active Cases ({MOCK_CASES.length})
                  </button>
                </div>

                {/* OPD & IPD Analytics */}
                <div className="bg-white p-8 rounded-3xl border border-slate-200 shadow-sm space-y-8">
                  <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                    <div>
                      <h3 className="text-xl font-bold text-slate-800">OPD & IPD Analytics</h3>
                      <p className="text-sm text-slate-500">Real-time tracking of outpatient and inpatient department utilization</p>
                    </div>
                    <div className="flex bg-slate-100 p-1 rounded-xl">
                      {(['day', 'month', 'year'] as const).map((range) => (
                        <button
                          key={range}
                          onClick={() => setTimeRange(range)}
                          className={cn(
                            "px-4 py-2 rounded-lg text-xs font-bold transition-all uppercase",
                            timeRange === range ? "bg-white text-indigo-600 shadow-sm" : "text-slate-500 hover:text-slate-700"
                          )}
                        >
                          {range}
                        </button>
                      ))}
                    </div>
                  </div>

                  <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    <div className="lg:col-span-2 h-80">
                      <ResponsiveContainer width="100%" height="100%">
                        <BarChart data={MOCK_OPD_IPD_TRENDS[timeRange]}>
                          <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f1f5f9" />
                          <XAxis dataKey="date" axisLine={false} tickLine={false} tick={{ fontSize: 10 }} />
                          <YAxis axisLine={false} tickLine={false} tick={{ fontSize: 10 }} />
                          <Tooltip 
                            contentStyle={{ borderRadius: '16px', border: 'none', boxShadow: '0 10px 15px -3px rgb(0 0 0 / 0.1)' }}
                          />
                          <Legend iconType="circle" wrapperStyle={{ fontSize: '10px', paddingTop: '20px' }} />
                          <Bar dataKey="opdCount" name="OPD Visits" fill="#6366f1" radius={[4, 4, 0, 0]} />
                          <Bar dataKey="ipdCount" name="IPD Admissions" fill="#ec4899" radius={[4, 4, 0, 0]} />
                        </BarChart>
                      </ResponsiveContainer>
                    </div>

                    <div className="space-y-6">
                      <div className="p-6 bg-slate-50 rounded-2xl border border-slate-100">
                        <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-4">Cost Efficiency Insights</h4>
                        <div className="space-y-4">
                          <div className="flex items-center justify-between">
                            <div className="flex items-center gap-2">
                              <div className="w-2 h-2 rounded-full bg-indigo-500" />
                              <span className="text-xs text-slate-600">Avg. OPD Cost</span>
                            </div>
                            <span className="text-sm font-bold text-slate-900">₹{MOCK_OPD_IPD_TRENDS[timeRange][0].avgCostPerOpd}</span>
                          </div>
                          <div className="flex items-center justify-between">
                            <div className="flex items-center gap-2">
                              <div className="w-2 h-2 rounded-full bg-pink-500" />
                              <span className="text-xs text-slate-600">Avg. IPD Cost</span>
                            </div>
                            <span className="text-sm font-bold text-slate-900">₹{MOCK_OPD_IPD_TRENDS[timeRange][0].avgCostPerIpd}</span>
                          </div>
                        </div>
                      </div>

                      <div className="p-6 bg-indigo-50 rounded-2xl border border-indigo-100 flex items-start gap-4">
                        <div className="p-2 bg-indigo-600 text-white rounded-xl">
                          <Brain size={20} />
                        </div>
                        <div>
                          <h4 className="text-sm font-bold text-indigo-900 mb-1">AI Utilization Insight</h4>
                          <p className="text-xs text-indigo-700 leading-relaxed">
                            {timeRange === 'day' ? 
                              "Peak OPD hours detected between 10:00 AM - 2:00 PM. Suggesting staggered appointment slots to reduce wait times." :
                              timeRange === 'month' ?
                              "IPD admissions spiked in Week 3, correlating with the recent flu outbreak. OHC inventory has been auto-replenished." :
                              "Annual data shows a 15% shift from IPD to OPD for minor procedures, resulting in a projected saving of ₹18L."
                            }
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Regional Health & Environment (Climate-Informed Surveillance) */}
                <div className="bg-white p-8 rounded-3xl border border-slate-200 shadow-sm space-y-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="text-xl font-bold text-slate-800">Regional Health & Environment</h3>
                      <p className="text-sm text-slate-500">Climate-informed surveillance across major office locations</p>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="flex h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
                      <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Live Environmental Sync</span>
                    </div>
                  </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                      {MOCK_OFFICE_LOCATIONS.map((location) => (
                        <div key={location.id} className="p-6 bg-slate-50 rounded-2xl border border-slate-100 hover:border-indigo-200 transition-all group relative overflow-hidden">
                          {/* ... existing card content ... */}
                          <div className="flex items-start justify-between mb-4">
                            <div className="flex items-center gap-2">
                              <MapPin size={18} className="text-indigo-600" />
                              <span className="font-bold text-slate-800">{location.name}</span>
                            </div>
                            <div className={cn(
                              "px-2 py-0.5 rounded text-[10px] font-bold uppercase",
                              location.healthIndex > 80 ? "bg-emerald-100 text-emerald-700" : "bg-amber-100 text-amber-700"
                            )}>
                              Index: {location.healthIndex}
                            </div>
                          </div>

                          <div className="grid grid-cols-2 gap-4 mb-6">
                            <div className="space-y-1">
                              <div className="flex items-center gap-1.5 text-[10px] font-bold text-slate-400 uppercase">
                                <Wind size={12} /> AQI
                              </div>
                              <div className={cn(
                                "text-xl font-bold",
                                location.environmentalData.aqi > 200 ? "text-rose-600" : 
                                location.environmentalData.aqi > 100 ? "text-amber-600" : "text-emerald-600"
                              )}>
                                {location.environmentalData.aqi}
                              </div>
                            </div>
                            <div className="space-y-1">
                              <div className="flex items-center gap-1.5 text-[10px] font-bold text-slate-400 uppercase">
                                <Thermometer size={12} /> Temp
                              </div>
                              <div className="text-xl font-bold text-slate-800">{location.environmentalData.temperature}°C</div>
                            </div>
                          </div>

                          <div className="space-y-3">
                            <div className="flex justify-between items-center text-xs">
                              <span className="text-slate-500">Respiratory Risk</span>
                              <span className="font-bold text-slate-700">{location.respiratoryRiskPercent}%</span>
                            </div>
                            <div className="h-1.5 bg-slate-200 rounded-full overflow-hidden">
                              <div 
                                className={cn(
                                  "h-full transition-all duration-1000",
                                  location.respiratoryRiskPercent > 10 ? "bg-rose-500" : "bg-indigo-500"
                                )} 
                                style={{ width: `${location.respiratoryRiskPercent * 4}%` }} 
                              />
                            </div>
                          </div>

                          {location.environmentalData.aqi > 300 && (
                            <div className="mt-4 p-3 bg-rose-600 text-white rounded-xl flex items-center gap-2 animate-pulse">
                              <AlertTriangle size={16} />
                              <span className="text-[10px] font-bold uppercase">Critical AQI Alert</span>
                            </div>
                          )}

                          {/* Background Decoration */}
                          <div className="absolute -right-4 -bottom-4 opacity-5 group-hover:opacity-10 transition-opacity">
                            <CloudLightning size={80} />
                          </div>
                        </div>
                      ))}
                    </div>

                    <div className="mt-8 p-6 bg-indigo-50 rounded-2xl border border-indigo-100">
                      <div className="flex items-center gap-3 mb-4">
                        <div className="p-2 bg-indigo-600 text-white rounded-xl shadow-lg shadow-indigo-100">
                          <Activity size={20} />
                        </div>
                        <h4 className="font-bold text-indigo-900">Regional Health Strategy</h4>
                      </div>
                      
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        <div>
                          <span className="text-[10px] font-bold text-indigo-400 uppercase tracking-wider block mb-1">Problem</span>
                          <p className="text-sm text-indigo-900 font-medium leading-relaxed">12% spike in respiratory distress in Gurgaon workforce.</p>
                        </div>
                        <div>
                          <span className="text-[10px] font-bold text-indigo-400 uppercase tracking-wider block mb-1">Reason</span>
                          <p className="text-sm text-indigo-900 leading-relaxed">AQI levels exceeding 300 for 5 consecutive days, impacting high-risk employees.</p>
                        </div>
                        <div>
                          <span className="text-[10px] font-bold text-indigo-400 uppercase tracking-wider block mb-1">Solution</span>
                          <p className="text-sm text-indigo-900 font-bold leading-relaxed">Distribute N95 masks and shift to remote work for high-risk employees immediately.</p>
                        </div>
                      </div>
                    </div>
                  </div>

                {/* Medication Adherence Tracker (Employee & Family) */}
                <div className="bg-white p-8 rounded-3xl border border-slate-200 shadow-sm space-y-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="text-xl font-bold text-slate-800">Medication Adherence Tracker</h3>
                      <p className="text-sm text-slate-500">Linking AHC lab data and insurance claims to track treatment compliance for employees & families</p>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="flex items-center gap-1.5 text-[10px] font-bold text-indigo-600 bg-indigo-50 px-3 py-1 rounded-full">
                        <Pill size={12} />
                        AI-Driven Surveillance
                      </div>
                    </div>
                  </div>

                  <div className="space-y-8">
                    {/* Employee Adherence */}
                    <div className="space-y-4">
                      <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider">Employee Adherence</h4>
                      <div className="grid grid-cols-1 gap-4">
                        {MOCK_MEDICATION_ADHERENCE.map((record) => (
                          <div key={record.id} className="p-6 bg-slate-50 rounded-2xl border border-slate-100 hover:border-indigo-200 transition-all group">
                            <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6">
                              <div className="flex items-center gap-4">
                                <div className={cn(
                                  "w-12 h-12 rounded-xl flex items-center justify-center shrink-0",
                                  record.riskLevel === 'high' ? "bg-rose-100 text-rose-600" : 
                                  record.riskLevel === 'medium' ? "bg-amber-100 text-amber-600" : "bg-emerald-100 text-emerald-600"
                                )}>
                                  <Pill size={24} />
                                </div>
                                <div>
                                  <div className="flex items-center gap-2">
                                    <span className="font-bold text-slate-900">{record.medicationName}</span>
                                    <span className="text-xs text-slate-400">• {record.condition}</span>
                                    <span className={cn(
                                      "px-2 py-0.5 rounded text-[10px] font-bold uppercase",
                                      record.adherenceCategory === 'Adherent' ? "bg-emerald-100 text-emerald-700" :
                                      record.adherenceCategory === 'Partial' ? "bg-amber-100 text-amber-700" : "bg-rose-100 text-rose-700"
                                    )}>
                                      {record.adherenceCategory}
                                    </span>
                                  </div>
                                  <div className="text-xs text-slate-500 mt-0.5">
                                    Employee ID: {record.employeeId} • Next Refill: {record.nextRefillDate}
                                  </div>
                                </div>
                              </div>

                              <div className="grid grid-cols-2 md:grid-cols-4 gap-8 flex-1 lg:max-w-2xl">
                                <div className="space-y-1">
                                  <div className="text-[10px] font-bold text-slate-400 uppercase">Adherence</div>
                                  <div className="flex items-center gap-2">
                                    <span className={cn(
                                      "text-sm font-bold",
                                      record.adherenceRate < 70 ? "text-rose-600" : 
                                      record.adherenceRate < 90 ? "text-amber-600" : "text-emerald-600"
                                    )}>
                                      {record.adherenceRate}%
                                    </span>
                                    <div className="flex-1 h-1.5 w-16 bg-slate-200 rounded-full overflow-hidden">
                                      <div 
                                        className={cn(
                                          "h-full",
                                          record.adherenceRate < 70 ? "bg-rose-500" : 
                                          record.adherenceRate < 90 ? "bg-amber-500" : "bg-emerald-500"
                                        )}
                                        style={{ width: `${record.adherenceRate}%` }}
                                      />
                                    </div>
                                  </div>
                                </div>

                                <div className="space-y-1">
                                  <div className="text-[10px] font-bold text-slate-400 uppercase">Lab Status (AHC)</div>
                                  <div className="flex items-center gap-1.5">
                                    {record.labLinkStatus === 'stable' ? (
                                      <CheckCircle2 size={14} className="text-emerald-500" />
                                    ) : record.labLinkStatus === 'fluctuating' ? (
                                      <AlertTriangle size={14} className="text-amber-500" />
                                    ) : (
                                      <AlertCircle size={14} className="text-rose-500" />
                                    )}
                                    <span className="text-xs font-semibold capitalize">{record.labLinkStatus}</span>
                                  </div>
                                </div>

                                <div className="space-y-1">
                                  <div className="text-[10px] font-bold text-slate-400 uppercase">Claims (Insurance)</div>
                                  <div className="flex items-center gap-1.5">
                                    <ShieldCheck size={14} className={cn(
                                      record.claimsStatus === 'covered' ? "text-emerald-500" : 
                                      record.claimsStatus === 'pending' ? "text-amber-500" : "text-rose-500"
                                    )} />
                                    <span className="text-xs font-semibold capitalize">{record.claimsStatus}</span>
                                  </div>
                                </div>

                                <div className="flex items-center justify-end">
                                  {record.riskLevel === 'high' && (
                                    <div className="px-3 py-1.5 bg-rose-600 text-white text-[10px] font-bold rounded-lg shadow-lg shadow-rose-200 animate-pulse flex items-center gap-1.5">
                                      <AlertTriangle size={12} />
                                      CRITICAL ADHERENCE GAP
                                    </div>
                                  )}
                                  {record.riskLevel === 'medium' && (
                                    <div className="px-3 py-1.5 bg-amber-500 text-white text-[10px] font-bold rounded-lg shadow-lg shadow-amber-200 flex items-center gap-1.5">
                                      <Clock size={12} />
                                      REFILL DUE
                                    </div>
                                  )}
                                </div>
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Family Adherence */}
                    <div className="space-y-4">
                      <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider">Family Medication Tracking</h4>
                      <div className="grid grid-cols-1 gap-4">
                        {MOCK_FAMILY_MEDICATIONS.map((record) => (
                          <div key={record.id} className="p-6 bg-indigo-50/30 rounded-2xl border border-indigo-100 hover:border-indigo-300 transition-all group">
                            <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6">
                              <div className="flex items-center gap-4">
                                <div className={cn(
                                  "w-12 h-12 rounded-xl flex items-center justify-center shrink-0",
                                  record.riskLevel === 'high' ? "bg-rose-100 text-rose-600" : 
                                  record.riskLevel === 'medium' ? "bg-amber-100 text-amber-600" : "bg-emerald-100 text-emerald-600"
                                )}>
                                  <Users size={24} />
                                </div>
                                <div>
                                  <div className="flex items-center gap-2">
                                    <span className="font-bold text-slate-900">{record.dependentName}</span>
                                    <span className="text-xs text-indigo-600 font-bold bg-indigo-50 px-2 py-0.5 rounded uppercase">{record.relationship}</span>
                                  </div>
                                  <div className="text-sm font-medium text-slate-700 mt-1">
                                    {record.medicationName} • {record.condition}
                                  </div>
                                </div>
                              </div>

                              <div className="grid grid-cols-2 md:grid-cols-4 gap-8 flex-1 lg:max-w-2xl">
                                <div className="space-y-1">
                                  <div className="text-[10px] font-bold text-slate-400 uppercase">Adherence</div>
                                  <div className="text-sm font-bold text-slate-800">{record.adherenceRate}%</div>
                                </div>
                                <div className="space-y-1">
                                  <div className="text-[10px] font-bold text-slate-400 uppercase">Lab Status</div>
                                  <div className="text-xs font-semibold capitalize">{record.labLinkStatus}</div>
                                </div>
                                <div className="space-y-1">
                                  <div className="text-[10px] font-bold text-slate-400 uppercase">Refill Date</div>
                                  <div className="text-xs font-semibold">{record.nextRefillDate}</div>
                                </div>
                                <div className="flex items-center justify-end">
                                  {record.riskLevel === 'high' && (
                                    <div className="px-3 py-1.5 bg-rose-600 text-white text-[10px] font-bold rounded-lg flex items-center gap-1.5">
                                      <AlertCircle size={12} />
                                      FAMILY RISK ALERT
                                    </div>
                                  )}
                                </div>
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Upcoming Test Reminders & AI Health Butler */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                  {/* Upcoming Test Reminders */}
                  <div className="bg-white p-8 rounded-3xl border border-slate-200 shadow-sm space-y-6">
                    <div className="flex items-center justify-between">
                      <h3 className="text-xl font-bold text-slate-800 flex items-center gap-2">
                        <Calendar size={24} className="text-indigo-600" />
                        Upcoming Test Reminders
                      </h3>
                      <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Next 7 Days</span>
                    </div>

                    <div className="space-y-4">
                      {MOCK_UPCOMING_TESTS.map((test) => (
                        <div key={test.id} className="p-4 bg-slate-50 rounded-2xl border border-slate-100 flex items-center justify-between group hover:border-indigo-200 transition-all">
                          <div className="flex items-center gap-4">
                            <div className={cn(
                              "w-10 h-10 rounded-lg flex items-center justify-center",
                              test.priority === 'high' ? "bg-rose-100 text-rose-600" : "bg-indigo-100 text-indigo-600"
                            )}>
                              <Stethoscope size={20} />
                            </div>
                            <div>
                              <div className="font-bold text-slate-900">{test.testName}</div>
                              <div className="text-xs text-slate-500">{test.type} • {test.scheduledDate}</div>
                            </div>
                          </div>
                          <div className="flex items-center gap-3">
                            <span className={cn(
                              "px-2 py-0.5 rounded text-[10px] font-bold uppercase",
                              test.status === 'overdue' ? "bg-rose-100 text-rose-700" :
                              test.status === 'pending-prep' ? "bg-amber-100 text-amber-700" : "bg-emerald-100 text-emerald-700"
                            )}>
                              {test.status}
                            </span>
                            <ChevronRight size={16} className="text-slate-300 group-hover:text-indigo-600 transition-colors" />
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* AI Health Butler (Diet & Routine) */}
                  <div className="bg-slate-900 p-8 rounded-3xl shadow-xl space-y-6 relative overflow-hidden">
                    <div className="flex items-center justify-between relative z-10">
                      <h3 className="text-xl font-bold text-white flex items-center gap-2">
                        <BrainCircuit size={24} className="text-indigo-400" />
                        AI Health Butler
                      </h3>
                      <div className="px-3 py-1 bg-indigo-500/20 text-indigo-400 rounded-full text-[10px] font-bold uppercase tracking-widest border border-indigo-500/30">
                        Personalized Routine
                      </div>
                    </div>

                    <div className="space-y-4 relative z-10">
                      {MOCK_AI_SUGGESTIONS.map((suggestion) => (
                        <div key={suggestion.id} className="p-5 bg-white/5 backdrop-blur-md rounded-2xl border border-white/10 space-y-3">
                          <div className="flex items-center justify-between">
                            <div className="flex items-center gap-2">
                              {suggestion.type === 'diet' ? <Leaf size={16} className="text-emerald-400" /> : 
                               suggestion.type === 'routine' ? <Activity size={16} className="text-indigo-400" /> : 
                               <AlertTriangle size={16} className="text-amber-400" />}
                              <span className="text-xs font-bold text-white uppercase tracking-wider">{suggestion.title}</span>
                            </div>
                            <span className={cn(
                              "text-[10px] font-bold uppercase",
                              suggestion.priority === 'high' ? "text-rose-400" : "text-indigo-400"
                            )}>
                              {suggestion.priority} Priority
                            </span>
                          </div>
                          <p className="text-sm text-slate-300 leading-relaxed">
                            {suggestion.content}
                          </p>
                        </div>
                      ))}
                    </div>

                    {/* Decoration */}
                    <div className="absolute -right-12 -bottom-12 w-48 h-48 bg-indigo-600/20 rounded-full blur-3xl" />
                  </div>
                </div>

                {/* Workforce Segmentation & Demographics */}
                <div className="bg-white p-8 rounded-3xl border border-slate-200 shadow-sm space-y-8">
                  <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                    <h3 className="text-xl font-bold flex items-center gap-2">
                      <Users size={24} className="text-indigo-600" />
                      Workforce Segmentation & Demographics
                    </h3>
                    <div className="text-xs text-slate-400 font-medium">Aggregated data for Benefits Head view</div>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {/* Gender */}
                    <div className="space-y-4 text-center">
                      <h4 className="text-sm font-bold text-slate-500 uppercase tracking-wider">Gender Wise</h4>
                      <div className="h-48 relative">
                        <ResponsiveContainer width="100%" height="100%">
                          <PieChart>
                            <Pie
                              data={MOCK_DEMOGRAPHICS.gender}
                              cx="50%"
                              cy="50%"
                              innerRadius={40}
                              outerRadius={60}
                              paddingAngle={5}
                              dataKey="value"
                              nameKey="label"
                            >
                              {MOCK_DEMOGRAPHICS.gender.map((entry, index) => (
                                <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                              ))}
                            </Pie>
                            <Tooltip />
                          </PieChart>
                        </ResponsiveContainer>
                      </div>
                      <div className="flex flex-wrap gap-2 justify-center">
                        {MOCK_DEMOGRAPHICS.gender.map((g, i) => (
                          <div key={g.label} className="flex items-center gap-1 text-[10px] font-medium">
                            <div className="w-2 h-2 rounded-full" style={{ backgroundColor: COLORS[i] }} />
                            {g.label}: {g.value}%
                          </div>
                        ))}
                      </div>
                      <div className="mt-4 p-3 bg-slate-50 rounded-xl border border-slate-100">
                        <p className="text-[10px] text-slate-500 leading-tight">
                          <span className="font-bold text-indigo-600 uppercase block mb-1">Insight</span>
                          Female workforce participation is at 35%, with a 15% higher engagement in wellness programs.
                        </p>
                      </div>
                    </div>

                    {/* Age Group */}
                    <div className="space-y-4">
                      <h4 className="text-sm font-bold text-slate-500 uppercase tracking-wider">Age Group Wise</h4>
                      <div className="h-48">
                        <ResponsiveContainer width="100%" height="100%">
                          <BarChart data={MOCK_DEMOGRAPHICS.ageGroup} layout="vertical">
                            <XAxis type="number" hide />
                            <YAxis dataKey="label" type="category" axisLine={false} tickLine={false} tick={{ fontSize: 10 }} />
                            <Tooltip />
                            <Bar dataKey="value" fill="#6366f1" radius={[0, 4, 4, 0]} />
                          </BarChart>
                        </ResponsiveContainer>
                      </div>
                      <div className="mt-4 p-3 bg-slate-50 rounded-xl border border-slate-100">
                        <p className="text-[10px] text-slate-500 leading-tight">
                          <span className="font-bold text-indigo-600 uppercase block mb-1">Insight</span>
                          The 25-34 age group comprises 45% of the workforce, showing the highest adoption of digital health tools.
                        </p>
                      </div>
                    </div>

                    {/* Region */}
                    <div className="space-y-4 text-center">
                      <h4 className="text-sm font-bold text-slate-500 uppercase tracking-wider">Region Wise</h4>
                      <div className="h-48 relative">
                        <ResponsiveContainer width="100%" height="100%">
                          <PieChart>
                            <Pie
                              data={MOCK_DEMOGRAPHICS.region}
                              cx="50%"
                              cy="50%"
                              innerRadius={40}
                              outerRadius={60}
                              paddingAngle={2}
                              dataKey="value"
                              nameKey="label"
                            >
                              {MOCK_DEMOGRAPHICS.region.map((entry, index) => (
                                <Cell key={`cell-${index}`} fill={COLORS[(index + 2) % COLORS.length]} />
                              ))}
                            </Pie>
                            <Tooltip />
                          </PieChart>
                        </ResponsiveContainer>
                      </div>
                      <div className="flex flex-wrap gap-2 justify-center">
                        {MOCK_DEMOGRAPHICS.region.map((r, i) => (
                          <div key={r.label} className="flex items-center gap-1 text-[10px] font-medium">
                            <div className="w-2 h-2 rounded-full" style={{ backgroundColor: COLORS[(i + 2) % COLORS.length] }} />
                            {r.label}: {r.value}%
                          </div>
                        ))}
                      </div>
                      <div className="mt-4 p-3 bg-slate-50 rounded-xl border border-slate-100">
                        <p className="text-[10px] text-slate-500 leading-tight">
                          <span className="font-bold text-indigo-600 uppercase block mb-1">Insight</span>
                          South region leads in health index, while North requires targeted respiratory interventions.
                        </p>
                      </div>
                    </div>

                    {/* Department */}
                    <div className="space-y-4">
                      <h4 className="text-sm font-bold text-slate-500 uppercase tracking-wider">Department Wise</h4>
                      <div className="h-48">
                        <ResponsiveContainer width="100%" height="100%">
                          <BarChart data={MOCK_DEMOGRAPHICS.department}>
                            <XAxis dataKey="label" hide />
                            <YAxis hide />
                            <Tooltip />
                            <Bar dataKey="value" fill="#ec4899" radius={[4, 4, 0, 0]} />
                          </BarChart>
                        </ResponsiveContainer>
                      </div>
                      <div className="space-y-1">
                        {MOCK_DEMOGRAPHICS.department.map((d) => (
                          <div key={d.label} className="flex justify-between text-[10px] font-medium text-slate-600">
                            <span>{d.label}</span>
                            <span>{d.value}</span>
                          </div>
                        ))}
                      </div>
                      <div className="mt-4 p-3 bg-slate-50 rounded-xl border border-slate-100">
                        <p className="text-[10px] text-slate-500 leading-tight">
                          <span className="font-bold text-indigo-600 uppercase block mb-1">Insight</span>
                          Engineering shows 20% higher stress markers, suggesting a need for focused mental health support.
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Comparative Health Metrics Section */}
                  <div className="pt-8 border-t border-slate-100 space-y-6">
                    <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                      <div>
                        <h4 className="text-lg font-bold text-slate-800">Comparative Health Metrics</h4>
                        <p className="text-sm text-slate-500">Benchmark metabolic risk and stress levels across the organization</p>
                      </div>
                      <div className="flex bg-slate-100 p-1 rounded-xl self-start">
                        {(['region', 'department'] as const).map((type) => (
                          <button
                            key={type}
                            onClick={() => setComparisonType(type)}
                            className={cn(
                              "px-4 py-2 rounded-lg text-xs font-bold transition-all uppercase",
                              comparisonType === type ? "bg-white text-indigo-600 shadow-sm" : "text-slate-500 hover:text-slate-700"
                            )}
                          >
                            By {type}
                          </button>
                        ))}
                      </div>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                      <div className="lg:col-span-2 h-80">
                        <ResponsiveContainer width="100%" height="100%">
                          <BarChart 
                            data={comparisonType === 'region' ? MOCK_REGIONAL_COMPARISON : MOCK_DEPARTMENTAL_COMPARISON}
                            margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
                          >
                            <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f1f5f9" />
                            <XAxis dataKey="label" axisLine={false} tickLine={false} tick={{ fontSize: 12, fontWeight: 600 }} />
                            <YAxis axisLine={false} tickLine={false} tick={{ fontSize: 10 }} />
                            <Tooltip 
                              cursor={{ fill: '#f8fafc' }}
                              contentStyle={{ borderRadius: '16px', border: 'none', boxShadow: '0 10px 15px -3px rgb(0 0 0 / 0.1)' }}
                            />
                            <Legend verticalAlign="top" align="right" iconType="circle" wrapperStyle={{ paddingBottom: '20px', fontSize: '12px', fontWeight: 600 }} />
                            <Bar dataKey="metabolicRisk" name="Metabolic Risk (%)" fill="#6366f1" radius={[4, 4, 0, 0]} />
                            <Bar dataKey="stressLevel" name="Stress Level (%)" fill="#ec4899" radius={[4, 4, 0, 0]} />
                            <Bar dataKey="healthIndex" name="Overall Health Index" fill="#10b981" radius={[4, 4, 0, 0]} />
                          </BarChart>
                        </ResponsiveContainer>
                      </div>

                      <div className="space-y-4">
                        <div className="p-6 bg-slate-50 rounded-2xl border border-slate-100">
                          <h5 className="font-bold text-slate-800 mb-4 flex items-center gap-2">
                            <Filter size={16} className="text-indigo-600" />
                            Disparity Analysis
                          </h5>
                          <div className="space-y-4">
                            <div>
                              <span className="text-[10px] font-bold text-rose-600 uppercase block mb-1">Highest Risk</span>
                              <p className="text-sm font-bold text-slate-700">
                                {comparisonType === 'region' ? 'North Region (28% Metabolic Risk)' : 'Operations (30% Metabolic Risk)'}
                              </p>
                            </div>
                            <div>
                              <span className="text-[10px] font-bold text-emerald-600 uppercase block mb-1">Best Practice</span>
                              <p className="text-sm font-bold text-slate-700">
                                {comparisonType === 'region' ? 'South Region (86 Health Index)' : 'HR & Admin (88 Health Index)'}
                              </p>
                            </div>
                          </div>
                        </div>

                        <div className="p-6 bg-indigo-50 rounded-2xl border border-indigo-100">
                          <h5 className="font-bold text-indigo-900 mb-2">Strategic Recommendation</h5>
                          <p className="text-xs text-indigo-700 leading-relaxed">
                            {comparisonType === 'region' 
                              ? "Implement localized respiratory screening in North region due to high environmental correlation with metabolic markers."
                              : "Engineering team shows critical stress levels (55%). Recommend immediate 'No-Meeting Fridays' and mental wellness workshops."}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Family Health & Chronic Risk Section */}
                <div className="bg-white p-8 rounded-2xl border border-slate-200 shadow-sm">
                  <div className="flex items-center justify-between mb-8">
                    <h3 className="text-xl font-bold flex items-center gap-2">
                      <ShieldCheck size={24} className="text-emerald-600" />
                      Family Health & Chronic Risk Profiling
                    </h3>
                    <div className="flex items-center gap-2 px-3 py-1 bg-emerald-50 text-emerald-700 rounded-full text-xs font-bold">
                      <AlertCircle size={14} />
                      Includes Pregnancy & Hereditary Risks
                    </div>
                  </div>

                  <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    <div className="lg:col-span-2 overflow-x-auto">
                      <table className="w-full text-left">
                        <thead>
                          <tr className="border-b border-slate-100">
                            <th className="pb-4 font-bold text-slate-400 text-xs uppercase tracking-wider">Condition</th>
                            <th className="pb-4 font-bold text-slate-400 text-xs uppercase tracking-wider">Employee Cases</th>
                            <th className="pb-4 font-bold text-slate-400 text-xs uppercase tracking-wider">Family History</th>
                            <th className="pb-4 font-bold text-slate-400 text-xs uppercase tracking-wider">Trend</th>
                          </tr>
                        </thead>
                        <tbody className="divide-y divide-slate-50">
                          {MOCK_FAMILY_HEALTH.map((item) => (
                            <tr key={item.condition} className="group hover:bg-slate-50 transition-colors">
                              <td className="py-4 font-semibold text-slate-700">{item.condition}</td>
                              <td className="py-4 text-slate-600">{item.employeeCount}</td>
                              <td className="py-4 text-slate-600">{item.familyCount > 0 ? item.familyCount : 'N/A'}</td>
                              <td className="py-4">
                                <div className="flex items-center gap-2">
                                  <span className={cn(
                                    "px-2 py-1 rounded text-[10px] font-bold",
                                    item.trend === 'up' ? "bg-red-50 text-red-600" : 
                                    item.trend === 'down' ? "bg-green-50 text-green-600" : "bg-slate-100 text-slate-600"
                                  )}>
                                    {item.trend === 'up' ? 'Worsening' : item.trend === 'down' ? 'Improving' : 'Stable'}
                                  </span>
                                  {item.trend === 'up' && (
                                    <div className="flex items-center gap-1 px-2 py-1 bg-rose-600 text-white rounded text-[10px] font-bold animate-pulse">
                                      <AlertTriangle size={10} />
                                      Action Required
                                    </div>
                                  )}
                                </div>
                              </td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                    
                    <div className="bg-slate-50 p-6 rounded-2xl space-y-6">
                      <h4 className="font-bold text-slate-800 flex items-center gap-2">
                        <Brain size={18} className="text-indigo-600" />
                        AI Prediction: Family Risk
                      </h4>
                      
                      <div className="space-y-4">
                        <div>
                          <span className="text-[10px] font-bold text-indigo-600 uppercase tracking-wider block">Problem</span>
                          <p className="text-xs text-slate-700 font-medium">15% predicted increase in chronic claims over 2 years.</p>
                        </div>
                        <div>
                          <span className="text-[10px] font-bold text-indigo-600 uppercase tracking-wider block">Reason</span>
                          <p className="text-xs text-slate-700">High correlation between family diabetes history and early-onset metabolic risk in employees.</p>
                        </div>
                        <div>
                          <span className="text-[10px] font-bold text-indigo-600 uppercase tracking-wider block">Solution</span>
                          <p className="text-xs text-slate-700 font-bold">Extend preventive screenings to dependents and launch "Healthy Mother" program for 85 active pregnancies.</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* AI-Driven Actionable Insights (Moved to Bottom) */}
                <div className="bg-indigo-900 text-white p-8 rounded-3xl shadow-xl overflow-hidden relative mt-8">
                  <div className="relative z-10">
                    <h3 className="text-2xl font-bold mb-6 flex items-center gap-3">
                      <BrainCircuit size={28} />
                      AI-Driven Actionable Insights
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                      {MOCK_INSIGHTS.map((insight) => (
                        <div key={insight.id} className="bg-white/10 backdrop-blur-md border border-white/20 p-6 rounded-2xl flex flex-col h-full">
                          <div className="flex items-center gap-2 mb-3">
                            <span className={cn(
                              "text-[10px] uppercase font-bold px-2 py-0.5 rounded",
                              insight.impact === 'high' ? "bg-red-500 text-white" : "bg-amber-500 text-white"
                            )}>
                              {insight.impact} Impact
                            </span>
                            <span className="text-[10px] uppercase font-bold text-white/60">{insight.category}</span>
                          </div>
                          <h4 className="font-bold text-lg mb-2">{insight.problem}</h4>
                          <div className="space-y-3 mb-4 flex-1">
                            <div>
                              <span className="text-[10px] uppercase font-bold text-white/40 block">Reason</span>
                              <p className="text-sm text-white/80">{insight.reason}</p>
                            </div>
                          </div>
                          <div className="bg-white/20 p-3 rounded-xl border border-white/10">
                            <span className="text-[10px] uppercase font-bold text-white/60 block mb-1">Solution</span>
                            <p className="text-sm font-medium">{insight.solution}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                  {/* Abstract Background Shapes */}
                  <div className="absolute top-0 right-0 w-64 h-64 bg-indigo-500/20 rounded-full -mr-32 -mt-32 blur-3xl" />
                  <div className="absolute bottom-0 left-0 w-64 h-64 bg-pink-500/10 rounded-full -ml-32 -mb-32 blur-3xl" />
                </div>
              </div>
                
                {/* Critical Alerts Sidebar */}
                <div className="xl:col-span-1 space-y-6 xl:sticky xl:top-0">
                  <div className="bg-white p-6 rounded-3xl border border-slate-200 shadow-sm">
                    <div className="flex items-center justify-between mb-6">
                      <h3 className="text-lg font-bold flex items-center gap-2 text-slate-800">
                        <Bell size={20} className="text-rose-600" />
                        Critical Alerts
                      </h3>
                      <span className="px-2 py-1 bg-rose-50 text-rose-600 rounded-lg text-[10px] font-bold uppercase">
                        {MOCK_CRITICAL_ALERTS.length} Active
                      </span>
                    </div>

                    <div className="space-y-4">
                      {MOCK_CRITICAL_ALERTS.map((alert) => (
                        <div key={alert.id} className={cn(
                          "p-4 rounded-2xl border transition-all",
                          alert.severity === 'critical' ? "bg-rose-50 border-rose-100" : "bg-amber-50 border-amber-100"
                        )}>
                          <div className="flex items-start justify-between mb-2">
                            <h4 className={cn(
                              "font-bold text-sm",
                              alert.severity === 'critical' ? "text-rose-900" : "text-amber-900"
                            )}>
                              {alert.title}
                            </h4>
                            <span className="text-[10px] font-medium text-slate-400 flex items-center gap-1">
                              <Clock size={10} />
                              {alert.timestamp}
                            </span>
                          </div>
                          <p className="text-xs text-slate-600 leading-relaxed mb-3">
                            {alert.message}
                          </p>
                          <div className="bg-white/50 p-3 rounded-xl border border-white/20">
                            <span className="text-[10px] font-bold text-slate-400 uppercase block mb-1">Suggested Action</span>
                            <p className="text-xs font-semibold text-slate-800">{alert.suggestedAction}</p>
                          </div>
                        </div>
                      ))}
                    </div>

                    <button className="w-full mt-6 py-3 text-xs font-bold text-slate-400 hover:text-indigo-600 hover:bg-indigo-50 rounded-xl border border-dashed border-slate-200 hover:border-indigo-200 transition-all">
                      View Alert History
                    </button>
                  </div>

                  {/* Quick Stats Summary (Sidebar) */}
                  <div className="bg-slate-900 p-6 rounded-3xl text-white shadow-xl">
                    <h4 className="text-sm font-bold mb-4 flex items-center gap-2">
                      <Activity size={16} className="text-indigo-400" />
                      Live Health Index
                    </h4>
                    <div className="space-y-4">
                      <div className="flex justify-between items-end">
                        <span className="text-xs text-slate-400">Workforce Wellness</span>
                        <span className="text-lg font-bold text-emerald-400">84%</span>
                      </div>
                      <div className="h-1.5 bg-white/10 rounded-full overflow-hidden">
                        <div className="h-full bg-emerald-400" style={{ width: '84%' }} />
                      </div>
                      <div className="bg-indigo-500/20 p-3 rounded-xl border border-indigo-500/30">
                        <div className="flex items-center gap-2 mb-1">
                          <Brain size={12} className="text-indigo-400" />
                          <span className="text-[10px] font-bold text-indigo-400 uppercase tracking-wider">AI Insight</span>
                        </div>
                        <p className="text-[10px] text-slate-300 leading-relaxed">
                          "Overall wellness is up 2% since the hydration initiative began. Predictive models suggest a further 3% gain if sleep hygiene programs are launched next month."
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              </motion.div>
            )}
            {activeTab === 'proposal' && (
              <Part2Proposal 
                key="proposal" 
                onLaunchMVP={() => setActiveTab('mvp')} 
                onLaunchGamifiedMVP={() => setActiveTab('gamified-mvp')}
                onLaunchFamilyMVP={() => setActiveTab('family-mvp')}
                onLaunchAwarenessMVP={() => setActiveTab('gamified-awareness-mvp')}
              />
            )}
            {activeTab === 'mvp' && (
              <div className="flex items-center justify-center py-12">
                <CarePathMVP />
              </div>
            )}
            {activeTab === 'gamified-mvp' && (
              <div className="flex items-center justify-center py-12">
                <GamifiedWellnessMVP />
              </div>
            )}
            {activeTab === 'family-mvp' && (
              <div className="flex items-center justify-center py-12">
                <FamilyCareConciergeMVP />
              </div>
            )}
            {activeTab === 'gamified-awareness-mvp' && (
              <div className="flex items-center justify-center py-12">
                <GamifiedAwarenessMVP />
              </div>
            )}
            {activeTab === 'solution-report' && (
              <SolutionDocument />
            )}
          </AnimatePresence>
        </div>
      </main>

      {/* AI Assistant Modal */}
      <AnimatePresence>
        {isAIChatOpen && (
          <AIAssistant 
            onClose={() => setIsAIChatOpen(false)} 
            clientName={selectedClient.name} 
            proactiveAlert={showRiskOverlay ? `I noticed the AQI in Gurgaon has exceeded 300. Based on AHC data, 12% of your Gurgaon workforce has a history of respiratory issues. Would you like me to send them a health advisory?` : undefined}
          />
        )}
      </AnimatePresence>

      {/* Risk Overlay Notification */}
      <AnimatePresence>
        {showRiskOverlay && !isAIChatOpen && (
          <motion.div 
            initial={{ opacity: 0, y: 50, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            className="fixed bottom-8 right-8 z-40 max-w-sm"
          >
            <div className="bg-rose-600 text-white p-6 rounded-3xl shadow-2xl shadow-rose-200 border border-rose-500 relative overflow-hidden group">
              <div className="relative z-10">
                <div className="flex items-center gap-3 mb-3">
                  <div className="p-2 bg-white/20 rounded-xl">
                    <CloudLightning size={24} />
                  </div>
                  <h4 className="font-bold text-lg">Climate Risk Alert</h4>
                </div>
                <p className="text-sm text-rose-50 leading-relaxed mb-4">
                  AQI in Gurgaon has exceeded <span className="font-bold">300</span>. 12% of your workforce there has respiratory history.
                </p>
                <button 
                  onClick={() => setIsAIChatOpen(true)}
                  className="w-full py-3 bg-white text-rose-600 rounded-xl font-bold text-sm hover:bg-rose-50 transition-colors shadow-lg"
                >
                  Review Health Advisory
                </button>
              </div>
              <button 
                onClick={() => setShowRiskOverlay(false)}
                className="absolute top-4 right-4 p-1 hover:bg-white/10 rounded-full transition-colors"
              >
                <X size={16} />
              </button>
              {/* Decorative background */}
              <div className="absolute -right-8 -bottom-8 w-32 h-32 bg-white/10 rounded-full blur-2xl group-hover:scale-110 transition-transform" />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
