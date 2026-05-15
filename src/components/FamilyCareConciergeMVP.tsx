import { useState } from 'react';
import { 
  Users, 
  Heart, 
  Baby, 
  Calendar, 
  Pill, 
  Activity, 
  ChevronRight, 
  ChevronLeft, 
  Plus, 
  Bell, 
  Shield, 
  Search, 
  Sparkles, 
  ArrowRight,
  Clock,
  Smartphone,
  CheckCircle2,
  AlertCircle,
  Stethoscope,
  TrendingUp,
  User,
  Settings,
  Info
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { cn } from '../lib/utils';

type Screen = 
  | 'onboarding' 
  | 'dashboard' 
  | 'member-detail'
  | 'maternity'
  | 'elderly-care'
  | 'ai-butler'
  | 'scheduling';

interface FamilyMember {
  id: string;
  name: string;
  role: 'Self' | 'Spouse' | 'Child' | 'Parent';
  age: number;
  avatar: string;
  healthScore: number;
  status: 'Healthy' | 'Monitoring' | 'Action Required';
  recentActivity: string;
}

export default function FamilyCareConciergeMVP() {
  const [currentScreen, setCurrentScreen] = useState<Screen>('onboarding');
  const [selectedMember, setSelectedMember] = useState<FamilyMember | null>(null);
  const [isAuthReady, setIsAuthReady] = useState(false);

  const familyMembers: FamilyMember[] = [
    { 
      id: '1', 
      name: 'Alex (You)', 
      role: 'Self', 
      age: 34, 
      avatar: 'https://picsum.photos/seed/alex/100/100',
      healthScore: 85,
      status: 'Healthy',
      recentActivity: 'Logged 10k steps today'
    },
    { 
      id: '2', 
      name: 'Sarah', 
      role: 'Spouse', 
      age: 32, 
      avatar: 'https://picsum.photos/seed/sarah/100/100',
      healthScore: 92,
      status: 'Monitoring',
      recentActivity: 'Week 24 Pregnancy Checkup'
    },
    { 
      id: '3', 
      name: 'Leo', 
      role: 'Child', 
      age: 5, 
      avatar: 'https://picsum.photos/seed/leo/100/100',
      healthScore: 98,
      status: 'Healthy',
      recentActivity: 'Flu Vaccination due in 2 days'
    },
    { 
      id: '4', 
      name: 'Mr. Johnson', 
      role: 'Parent', 
      age: 68, 
      avatar: 'https://picsum.photos/seed/dad/100/100',
      healthScore: 65,
      status: 'Action Required',
      recentActivity: 'BP Spike detected (150/95)'
    }
  ];

  const renderOnboarding = () => (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      className="flex flex-col items-center justify-center h-full p-8 bg-indigo-900 text-white text-center space-y-12"
    >
      <div className="relative">
        <div className="w-48 h-48 bg-white/10 rounded-full flex items-center justify-center border-4 border-white/20">
          <Users size={100} className="text-indigo-300" />
        </div>
        <motion.div 
          animate={{ scale: [1, 1.2, 1] }}
          transition={{ repeat: Infinity, duration: 3 }}
          className="absolute -top-4 -right-4 bg-rose-500 p-4 rounded-2xl shadow-xl"
        >
          <Heart size={32} className="text-white fill-white" />
        </motion.div>
      </div>

      <div className="space-y-4">
        <h1 className="text-4xl font-bold tracking-tight">Family Care Concierge</h1>
        <p className="text-indigo-200 text-sm leading-relaxed max-w-xs mx-auto">
          Your AI-powered health butler for the entire household. From pediatric vaccinations to elderly chronic care, we manage it all.
        </p>
      </div>

      <div className="w-full space-y-4">
        <button 
          onClick={() => setCurrentScreen('dashboard')}
          className="w-full py-5 bg-white text-indigo-900 rounded-3xl font-bold text-lg shadow-xl flex items-center justify-center gap-3 group"
        >
          Manage Family Health
          <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
        </button>
        <p className="text-[10px] text-indigo-400 uppercase font-bold tracking-widest flex items-center justify-center gap-2">
          <Shield size={12} /> Secure & Private Family Data
        </p>
      </div>
    </motion.div>
  );

  const renderDashboard = () => (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="flex flex-col h-full bg-slate-50 overflow-y-auto pb-32"
    >
      {/* Header */}
      <div className="bg-indigo-900 p-6 pb-12 rounded-b-[40px] text-white space-y-8 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full -mr-32 -mt-32 blur-3xl" />
        
        <div className="flex items-center justify-between relative z-10">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-2xl bg-white/10 flex items-center justify-center border border-white/20">
              <Users size={24} />
            </div>
            <div>
              <h3 className="font-bold">Johnson Family</h3>
              <p className="text-[10px] text-indigo-300 font-bold uppercase tracking-widest">4 Members • 2 Alerts</p>
            </div>
          </div>
          <button onClick={() => setCurrentScreen('ai-butler')} className="p-3 bg-white/10 rounded-full text-white hover:bg-white/20 transition-colors relative">
            <Sparkles size={20} />
            <div className="absolute top-2 right-2 w-2 h-2 bg-amber-400 rounded-full border-2 border-indigo-900" />
          </button>
        </div>

        <div className="flex gap-4 overflow-x-auto pb-2 scrollbar-hide relative z-10">
          {familyMembers.map(member => (
            <button 
              key={member.id}
              onClick={() => { setSelectedMember(member); setCurrentScreen('member-detail'); }}
              className="flex flex-col items-center gap-2 min-w-[80px] group"
            >
              <div className={cn(
                "w-16 h-16 rounded-2xl p-1 border-2 transition-all group-hover:scale-110",
                member.status === 'Action Required' ? "border-rose-500" : "border-white/20"
              )}>
                <img src={member.avatar} alt={member.name} className="w-full h-full object-cover rounded-xl" referrerPolicy="no-referrer" />
              </div>
              <span className="text-[10px] font-bold text-white/80">{member.name.split(' ')[0]}</span>
            </button>
          ))}
          <button className="flex flex-col items-center gap-2 min-w-[80px]">
            <div className="w-16 h-16 rounded-2xl border-2 border-dashed border-white/20 flex items-center justify-center text-white/40">
              <Plus size={24} />
            </div>
            <span className="text-[10px] font-bold text-white/40">Add</span>
          </button>
        </div>
      </div>

      <div className="p-6 -mt-8 space-y-8 relative z-10">
        {/* Critical Alerts */}
        <div className="bg-white p-6 rounded-[32px] border border-slate-100 shadow-xl shadow-slate-200/50 space-y-4">
          <div className="flex items-center justify-between">
            <h4 className="font-bold text-slate-900 flex items-center gap-2">
              <AlertCircle size={18} className="text-rose-500" />
              Family Alerts
            </h4>
            <span className="px-2 py-1 bg-rose-50 text-rose-600 text-[10px] font-bold rounded-lg uppercase">2 New</span>
          </div>
          <div className="space-y-3">
            <div className="p-4 bg-rose-50 rounded-2xl border border-rose-100 flex items-center gap-4">
              <div className="w-10 h-10 rounded-full overflow-hidden border-2 border-white">
                <img src="https://picsum.photos/seed/dad/100/100" alt="Dad" className="w-full h-full object-cover" referrerPolicy="no-referrer" />
              </div>
              <div className="flex-1">
                <h5 className="text-xs font-bold text-rose-900">BP Spike: Mr. Johnson</h5>
                <p className="text-[10px] text-rose-600">150/95 recorded at 10:30 AM. Suggesting OHC consult.</p>
              </div>
              <button className="p-2 bg-white rounded-xl text-rose-500 shadow-sm"><ChevronRight size={16} /></button>
            </div>
            <div className="p-4 bg-amber-50 rounded-2xl border border-amber-100 flex items-center gap-4">
              <div className="w-10 h-10 rounded-full overflow-hidden border-2 border-white">
                <img src="https://picsum.photos/seed/leo/100/100" alt="Leo" className="w-full h-full object-cover" referrerPolicy="no-referrer" />
              </div>
              <div className="flex-1">
                <h5 className="text-xs font-bold text-amber-900">Vaccination Due: Leo</h5>
                <p className="text-[10px] text-amber-600">Flu shot due in 2 days. Book now?</p>
              </div>
              <button className="p-2 bg-white rounded-xl text-amber-500 shadow-sm"><ChevronRight size={16} /></button>
            </div>
          </div>
        </div>

        {/* AI Health Butler Insight */}
        <div className="bg-gradient-to-br from-indigo-600 to-violet-700 p-6 rounded-[32px] text-white space-y-4 shadow-xl shadow-indigo-100 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -mr-16 -mt-16 blur-2xl" />
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-white/20 rounded-xl flex items-center justify-center backdrop-blur-md">
              <Sparkles size={20} />
            </div>
            <h4 className="font-bold text-sm">AI Butler Suggestion</h4>
          </div>
          <p className="text-xs opacity-90 leading-relaxed">
            "Alex, Sarah is entering her 3rd trimester next week. I've prepared a 'Hospital Bag' checklist and scheduled a prenatal yoga session for her. Would you like to review?"
          </p>
          <div className="flex gap-2">
            <button onClick={() => setCurrentScreen('maternity')} className="flex-1 py-2 bg-white text-indigo-600 rounded-xl text-[10px] font-bold uppercase">View Maternity Plan</button>
            <button className="flex-1 py-2 bg-white/20 rounded-xl text-[10px] font-bold uppercase">Dismiss</button>
          </div>
        </div>

        {/* Family Health Timeline */}
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <h4 className="font-bold text-slate-900">Health Timeline</h4>
            <button className="text-xs font-bold text-indigo-600">View Calendar</button>
          </div>
          <div className="space-y-4">
            {[
              { date: 'Oct 12', event: 'Sarah: Prenatal Checkup', type: 'Clinical', icon: Stethoscope, color: 'text-indigo-600', bg: 'bg-indigo-50' },
              { date: 'Oct 14', event: 'Leo: Flu Vaccination', type: 'Preventive', icon: Pill, color: 'text-emerald-600', bg: 'bg-emerald-50' },
              { date: 'Oct 15', event: 'Mr. Johnson: BP Follow-up', type: 'Chronic', icon: Activity, color: 'text-rose-600', bg: 'bg-rose-50' },
            ].map((item, i) => (
              <div key={i} className="bg-white p-4 rounded-2xl border border-slate-100 flex items-center gap-4">
                <div className="text-center min-w-[50px]">
                  <span className="text-[10px] font-bold text-slate-400 uppercase block">{item.date.split(' ')[0]}</span>
                  <span className="text-lg font-bold text-slate-900">{item.date.split(' ')[1]}</span>
                </div>
                <div className="w-px h-10 bg-slate-100" />
                <div className="flex-1">
                  <h5 className="text-xs font-bold text-slate-900">{item.event}</h5>
                  <p className="text-[10px] text-slate-500">{item.type} • 10:00 AM</p>
                </div>
                <div className={cn("w-10 h-10 rounded-xl flex items-center justify-center", item.bg, item.color)}>
                  <item.icon size={20} />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Quick Services */}
        <div className="grid grid-cols-2 gap-4">
          <button className="bg-white p-6 rounded-[32px] border border-slate-100 shadow-sm space-y-3 text-left">
            <div className="w-12 h-12 bg-sky-50 rounded-2xl flex items-center justify-center text-sky-600">
              <Smartphone size={24} />
            </div>
            <div>
              <h5 className="font-bold text-slate-900">Tele-Consult</h5>
              <p className="text-[10px] text-slate-500">Instant family doctor</p>
            </div>
          </button>
          <button className="bg-white p-6 rounded-[32px] border border-slate-100 shadow-sm space-y-3 text-left">
            <div className="w-12 h-12 bg-amber-50 rounded-2xl flex items-center justify-center text-amber-600">
              <Pill size={24} />
            </div>
            <div>
              <h5 className="font-bold text-slate-900">Family Meds</h5>
              <p className="text-[10px] text-slate-500">Refill all prescriptions</p>
            </div>
          </button>
        </div>
      </div>

      {/* Bottom Nav */}
      <div className="fixed bottom-8 left-1/2 -translate-x-1/2 w-[90%] max-w-md bg-slate-900/90 backdrop-blur-xl border border-white/10 shadow-2xl rounded-full px-8 py-4 flex items-center justify-between z-20">
        <button onClick={() => setCurrentScreen('dashboard')} className={cn("p-2", currentScreen === 'dashboard' ? "text-indigo-400" : "text-slate-500")}><Users size={24} /></button>
        <button onClick={() => setCurrentScreen('scheduling')} className={cn("p-2", currentScreen === 'scheduling' ? "text-indigo-400" : "text-slate-500")}><Calendar size={24} /></button>
        <button onClick={() => setCurrentScreen('ai-butler')} className="p-4 bg-indigo-600 text-white rounded-full -mt-12 shadow-xl shadow-indigo-900/50"><Sparkles size={24} /></button>
        <button onClick={() => setCurrentScreen('maternity')} className={cn("p-2", currentScreen === 'maternity' ? "text-indigo-400" : "text-slate-500")}><Baby size={24} /></button>
        <button className="p-2 text-slate-500"><Settings size={24} /></button>
      </div>
    </motion.div>
  );

  const renderMemberDetail = () => (
    <motion.div 
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -20 }}
      className="flex flex-col h-full bg-white overflow-y-auto pb-32"
    >
      <div className="p-6 flex items-center justify-between border-b border-slate-50 sticky top-0 bg-white z-10">
        <button onClick={() => setCurrentScreen('dashboard')} className="p-2 -ml-2 text-slate-400 flex items-center gap-2">
          <ChevronLeft size={24} />
          <span className="font-bold text-slate-900">Back</span>
        </button>
        <button className="p-2 -mr-2 text-slate-400"><Info size={24} /></button>
      </div>

      <div className="p-8 space-y-8">
        <div className="flex flex-col items-center text-center space-y-4">
          <div className="relative">
            <div className="w-32 h-32 rounded-[40px] overflow-hidden border-4 border-slate-50 shadow-xl">
              <img src={selectedMember?.avatar} alt={selectedMember?.name} className="w-full h-full object-cover" referrerPolicy="no-referrer" />
            </div>
            <div className={cn(
              "absolute -bottom-2 -right-2 px-3 py-1 rounded-full text-[10px] font-bold text-white shadow-lg",
              selectedMember?.status === 'Healthy' ? "bg-emerald-500" : 
              selectedMember?.status === 'Monitoring' ? "bg-amber-500" : "bg-rose-500"
            )}>
              {selectedMember?.status}
            </div>
          </div>
          <div>
            <h3 className="text-2xl font-bold text-slate-900">{selectedMember?.name}</h3>
            <p className="text-slate-500 font-medium">{selectedMember?.role} • {selectedMember?.age} Years</p>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div className="bg-slate-50 p-6 rounded-[32px] border border-slate-100 text-center space-y-2">
            <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Health Score</span>
            <div className="text-3xl font-black text-indigo-600">{selectedMember?.healthScore}</div>
            <div className="flex items-center justify-center gap-1 text-[10px] text-emerald-500 font-bold">
              <TrendingUp size={12} /> +2% this month
            </div>
          </div>
          <div className="bg-slate-50 p-6 rounded-[32px] border border-slate-100 text-center space-y-2">
            <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Care Gaps</span>
            <div className="text-3xl font-black text-rose-500">{selectedMember?.status === 'Action Required' ? '1' : '0'}</div>
            <p className="text-[10px] text-slate-500 font-bold uppercase">Critical</p>
          </div>
        </div>

        <div className="space-y-4">
          <h4 className="font-bold text-slate-900">Recent Medical History</h4>
          <div className="space-y-3">
            {[
              { title: 'Annual Health Checkup', date: 'Sep 15, 2025', result: 'Normal', icon: CheckCircle2, color: 'text-emerald-500' },
              { title: 'Pharmacy Refill: BP Meds', date: 'Oct 01, 2025', result: 'Completed', icon: Pill, color: 'text-indigo-500' },
            ].map((item, i) => (
              <div key={i} className="p-4 bg-white rounded-2xl border border-slate-100 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-slate-50 rounded-xl flex items-center justify-center text-slate-400">
                    <item.icon size={20} />
                  </div>
                  <div>
                    <h5 className="text-xs font-bold text-slate-900">{item.title}</h5>
                    <p className="text-[10px] text-slate-500">{item.date}</p>
                  </div>
                </div>
                <span className={cn("text-[10px] font-bold uppercase", item.color)}>{item.result}</span>
              </div>
            ))}
          </div>
        </div>

        <button className="w-full py-5 bg-indigo-600 text-white rounded-3xl font-bold text-lg shadow-xl shadow-indigo-100">
          Book Appointment
        </button>
      </div>
    </motion.div>
  );

  const renderMaternity = () => (
    <motion.div 
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: 20 }}
      className="flex flex-col h-full bg-slate-50 overflow-y-auto pb-32"
    >
      <div className="p-6 flex items-center justify-between bg-white border-b border-slate-50 sticky top-0 z-10">
        <button onClick={() => setCurrentScreen('dashboard')} className="p-2 -ml-2 text-slate-400"><ChevronLeft size={24} /></button>
        <h2 className="font-bold text-slate-900">Maternity Co-pilot</h2>
        <button className="p-2 -mr-2 text-rose-500"><Heart size={24} className="fill-rose-500" /></button>
      </div>

      <div className="p-6 space-y-8">
        <div className="bg-gradient-to-br from-rose-500 to-pink-600 p-8 rounded-[40px] text-white space-y-6 shadow-xl shadow-rose-200 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -mr-16 -mt-16 blur-2xl" />
          <div className="flex items-center justify-between">
            <div className="space-y-1">
              <h3 className="text-2xl font-bold">Week 24</h3>
              <p className="text-sm opacity-80">2nd Trimester • 16 weeks to go</p>
            </div>
            <div className="w-20 h-20 bg-white/20 rounded-full flex items-center justify-center backdrop-blur-md border border-white/20">
              <Baby size={40} />
            </div>
          </div>
          <div className="space-y-2">
            <div className="flex justify-between text-xs font-bold">
              <span>Baby is the size of an Eggplant</span>
              <span>60%</span>
            </div>
            <div className="w-full h-2 bg-white/20 rounded-full overflow-hidden">
              <motion.div 
                initial={{ width: 0 }}
                animate={{ width: '60%' }}
                className="h-full bg-white rounded-full"
              />
            </div>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div className="bg-white p-6 rounded-[32px] border border-slate-100 shadow-sm space-y-3">
            <div className="w-10 h-10 bg-indigo-50 rounded-xl flex items-center justify-center text-indigo-600">
              <Clock size={20} />
            </div>
            <h5 className="text-xs font-bold text-slate-900">Next Scan</h5>
            <p className="text-[10px] text-slate-500">Oct 15 • 10:00 AM</p>
          </div>
          <div className="bg-white p-6 rounded-[32px] border border-slate-100 shadow-sm space-y-3">
            <div className="w-10 h-10 bg-emerald-50 rounded-xl flex items-center justify-center text-emerald-600">
              <Pill size={20} />
            </div>
            <h5 className="text-xs font-bold text-slate-900">Supplements</h5>
            <p className="text-[10px] text-slate-500">Folic Acid • Daily</p>
          </div>
        </div>

        <div className="bg-white p-6 rounded-[32px] border border-slate-100 shadow-sm space-y-6">
          <h4 className="font-bold text-slate-900">Maternity Checklist</h4>
          <div className="space-y-4">
            {[
              { label: 'Prenatal Yoga Session', done: true },
              { label: 'Hospital Bag Preparation', done: false },
              { label: 'Baby Room Setup', done: false },
              { label: 'Maternity Insurance Review', done: true },
            ].map((item, i) => (
              <div key={i} className="flex items-center gap-3">
                <div className={cn("w-5 h-5 rounded border-2 flex items-center justify-center transition-colors", item.done ? "bg-rose-500 border-rose-500" : "border-slate-200")}>
                  {item.done && <CheckCircle2 size={12} className="text-white" />}
                </div>
                <span className={cn("text-sm", item.done ? "text-slate-400 line-through" : "text-slate-700")}>{item.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );

  const renderAIButler = () => (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      className="flex flex-col h-full bg-white"
    >
      <div className="p-6 flex items-center justify-between border-b border-slate-50 sticky top-0 bg-white z-10">
        <button onClick={() => setCurrentScreen('dashboard')} className="p-2 -ml-2 text-slate-400"><ChevronLeft size={24} /></button>
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-indigo-900 rounded-full flex items-center justify-center text-white">
            <Sparkles size={20} />
          </div>
          <div>
            <h2 className="font-bold text-slate-900">AI Health Butler</h2>
            <p className="text-[10px] text-emerald-500 font-bold uppercase tracking-widest">Family Concierge</p>
          </div>
        </div>
        <button className="p-2 -mr-2 text-slate-400"><Settings size={24} /></button>
      </div>

      <div className="flex-1 overflow-y-auto p-6 space-y-6">
        <div className="flex justify-start">
          <div className="max-w-[80%] p-4 bg-slate-50 text-slate-700 rounded-3xl rounded-tl-none text-sm leading-relaxed">
            Hello Alex! I am your Family Health Butler. I've analyzed the recent data for your household. 
            <br/><br/>
            <b>Mr. Johnson's</b> BP spike is concerning. I've already alerted the OHC doctor. Would you like me to book a tele-consult for him now?
          </div>
        </div>
        <div className="flex justify-end">
          <div className="max-w-[80%] p-4 bg-indigo-600 text-white rounded-3xl rounded-tr-none text-sm leading-relaxed shadow-lg shadow-indigo-100">
            Yes, please book it for the earliest available slot.
          </div>
        </div>
        <div className="flex justify-start">
          <div className="max-w-[80%] p-4 bg-slate-50 text-slate-700 rounded-3xl rounded-tl-none text-sm leading-relaxed">
            Done! Dr. Sharma is available at 2:30 PM today. I've added it to the family calendar and sent a notification to his phone.
          </div>
        </div>
      </div>

      <div className="p-6 border-t border-slate-50 bg-white">
        <div className="flex items-center gap-3 bg-slate-50 p-2 rounded-2xl border border-slate-100">
          <input 
            type="text" 
            placeholder="Ask about family health..." 
            className="flex-1 bg-transparent px-4 py-2 outline-none text-sm"
          />
          <button className="p-3 bg-indigo-900 text-white rounded-xl shadow-lg">
            <ArrowRight size={20} />
          </button>
        </div>
      </div>
    </motion.div>
  );

  return (
    <div className="w-full max-w-md mx-auto h-[800px] bg-white rounded-[48px] shadow-2xl overflow-hidden border-[8px] border-slate-900 relative">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-6 bg-slate-900 rounded-b-2xl z-50" />
      
      <AnimatePresence mode="wait">
        {currentScreen === 'onboarding' && renderOnboarding()}
        {currentScreen === 'dashboard' && renderDashboard()}
        {currentScreen === 'member-detail' && renderMemberDetail()}
        {currentScreen === 'maternity' && renderMaternity()}
        {currentScreen === 'ai-butler' && renderAIButler()}
      </AnimatePresence>
    </div>
  );
}
