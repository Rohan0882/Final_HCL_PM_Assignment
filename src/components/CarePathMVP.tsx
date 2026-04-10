import { useState } from 'react';
import { 
  ChevronLeft, 
  Search, 
  Mic, 
  Bell, 
  User, 
  Plus, 
  Activity, 
  Pill, 
  FileText, 
  Heart, 
  Calendar, 
  ArrowRight,
  CheckCircle2,
  AlertCircle,
  Thermometer,
  Droplets,
  Zap,
  Shield,
  CreditCard,
  ChevronRight,
  Camera,
  Info,
  LayoutDashboard,
  MessageSquare,
  Phone,
  BookOpen,
  Utensils,
  Dumbbell,
  Clock,
  Sparkles,
  Scan,
  MoreVertical,
  Trash2,
  Edit3,
  Brain,
  Leaf
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { cn } from '../lib/utils';

type Screen = 
  | 'onboarding' 
  | 'login' 
  | 'dashboard' 
  | 'medications' 
  | 'medication-detail'
  | 'vitals' 
  | 'vitals-success'
  | 'ai-report'
  | 'diet-routine'
  | 'chatbot'
  | 'pharmacy'
  | 'notifications'
  | 'couple-counselor';

export default function CarePathMVP() {
  const [currentScreen, setCurrentScreen] = useState<Screen>('onboarding');
  const [symptomStatus, setSymptomStatus] = useState<'better' | 'worse' | null>(null);
  const [selectedSymptom, setSelectedSymptom] = useState<string>('Abdomen Pain');
  const [medsStatus, setMedsStatus] = useState<Record<string, 'taken' | 'skipped' | 'pending'>>({});
  const [selectedMed, setSelectedMed] = useState<any>(null);
  const [medicationView, setMedicationView] = useState<'planner' | 'list'>('planner');
  const [isScanning, setIsScanning] = useState(false);
  const [chatMessages, setChatMessages] = useState([
    { role: 'ai', text: 'Hello Alex! I am your Swasthya AI assistant. How can I help you with your recovery today?' }
  ]);
  const [inputMessage, setInputMessage] = useState('');
  const [orderSuccess, setOrderSuccess] = useState(false);
  const [isFamilyMember, setIsFamilyMember] = useState(false);
  const [cart, setCart] = useState<{name: string, price: number, type: 'med' | 'test'}[]>([]);

  const addToCart = (item: {name: string, price: number, type: 'med' | 'test'}) => {
    setCart(prev => [...prev, item]);
  };

  const cartTotal = cart.reduce((sum, item) => sum + item.price, 0);
  const medCount = cart.filter(i => i.type === 'med').length;
  const testCount = cart.filter(i => i.type === 'test').length;

  const sendMessage = () => {
    if (!inputMessage.trim()) return;
    setChatMessages(prev => [...prev, { role: 'user', text: inputMessage }]);
    setInputMessage('');
    setTimeout(() => {
      setChatMessages(prev => [...prev, { role: 'ai', text: "Based on your current symptoms of mild abdomen pain, I suggest monitoring your hydration and scheduling a follow-up ultrasound if the pain persists for more than 48 hours. Would you like me to book a test at a nearby pathology lab?" }]);
    }, 1000);
  };

  const toggleMed = (id: string, status: 'taken' | 'skipped') => {
    setMedsStatus(prev => ({ ...prev, [id]: status }));
  };

  const renderOnboarding = () => (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      className="flex flex-col items-center justify-center h-full p-8 bg-white"
    >
      <div className="w-full max-w-sm space-y-12 text-center">
        <div className="relative">
          <div className="w-48 h-48 mx-auto bg-indigo-50 rounded-full flex items-center justify-center">
            <div className="relative">
              <Heart size={80} className="text-indigo-600 fill-indigo-600/20" />
              <div className="absolute -top-2 -right-2 w-8 h-8 bg-pink-500 rounded-full flex items-center justify-center text-white">
                <Plus size={16} />
              </div>
            </div>
          </div>
          <motion.div 
            animate={{ scale: [1, 1.1, 1] }}
            transition={{ repeat: Infinity, duration: 2 }}
            className="absolute -bottom-4 left-1/2 -translate-x-1/2 bg-white px-4 py-2 rounded-full shadow-lg border border-slate-100"
          >
            <span className="text-xs font-bold text-indigo-600 uppercase tracking-widest">Swasthya AI</span>
          </motion.div>
        </div>

        <div className="space-y-4">
          <h1 className="text-3xl font-bold text-slate-900 tracking-tight">Well come to Swasthya AI</h1>
          <p className="text-slate-500 text-sm leading-relaxed">
            Join us for a wellness journey. Tests, appointments, and well-being, all in one place!
          </p>
        </div>

        <div className="space-y-6">
          <div className="bg-slate-50 p-6 rounded-3xl border border-slate-100 space-y-4">
            <div className="text-xs font-bold text-slate-400 uppercase tracking-widest">Log In or Signup</div>
            <div className="flex items-center gap-3 bg-white p-4 rounded-2xl border border-slate-200 shadow-sm">
              <span className="text-slate-400 font-medium">+91</span>
              <input 
                type="text" 
                placeholder="Enter your Mobile Number" 
                className="flex-1 bg-transparent outline-none text-slate-900 font-medium placeholder:text-slate-300"
              />
            </div>
          </div>
          <button 
            onClick={() => setCurrentScreen('login')}
            className="w-full py-5 bg-indigo-600 text-white rounded-3xl font-bold text-lg shadow-xl shadow-indigo-200 hover:bg-indigo-700 transition-all active:scale-95"
          >
            Continue
          </button>
        </div>
      </div>
    </motion.div>
  );

  const renderLogin = () => (
    <motion.div 
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -20 }}
      className="flex flex-col h-full bg-white p-8"
    >
      <button onClick={() => setCurrentScreen('onboarding')} className="p-2 -ml-2 text-slate-400 hover:text-slate-900 transition-colors">
        <ChevronLeft size={24} />
      </button>

      <div className="mt-12 space-y-8">
        <div className="space-y-2">
          <h2 className="text-2xl font-bold text-slate-900">Enter Details</h2>
          <p className="text-slate-500 text-sm">Please provide your information to continue.</p>
        </div>

        <div className="space-y-4">
          <div className="space-y-2">
            <label className="text-xs font-bold text-slate-400 uppercase ml-1">Full Name</label>
            <input 
              type="text" 
              placeholder="Alex Johnson" 
              className="w-full p-4 bg-slate-50 rounded-2xl border border-slate-200 outline-none focus:border-indigo-600 transition-colors"
            />
          </div>
          <div className="space-y-2">
            <label className="text-xs font-bold text-slate-400 uppercase ml-1">Mobile Number</label>
            <input 
              type="text" 
              placeholder="+91 98765 43210" 
              className="w-full p-4 bg-slate-50 rounded-2xl border border-slate-200 outline-none focus:border-indigo-600 transition-colors"
            />
          </div>
          <div className="flex items-center gap-2 ml-1">
            <input type="checkbox" className="w-4 h-4 rounded border-slate-300 text-indigo-600 focus:ring-indigo-600" />
            <span className="text-sm text-slate-500">Remember me</span>
          </div>
        </div>

        <div className="space-y-4 pt-4">
          <button 
            onClick={() => setCurrentScreen('dashboard')}
            className="w-full py-5 bg-indigo-600 text-white rounded-3xl font-bold text-lg shadow-xl shadow-indigo-200 hover:bg-indigo-700 transition-all active:scale-95"
          >
            Log In
          </button>
          <div className="flex items-center gap-4">
            <div className="flex-1 h-px bg-slate-100" />
            <span className="text-xs font-bold text-slate-300 uppercase">Or</span>
            <div className="flex-1 h-px bg-slate-100" />
          </div>
          <button className="w-full py-5 bg-white text-slate-900 border-2 border-slate-100 rounded-3xl font-bold text-lg hover:border-indigo-600 transition-all active:scale-95 flex items-center justify-center gap-2">
            <Shield size={20} className="text-indigo-600" />
            Log-in with ABHA
          </button>
        </div>
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
      <div className="bg-white p-6 pb-8 rounded-b-[40px] shadow-sm space-y-6 sticky top-0 z-10">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-full bg-indigo-100 flex items-center justify-center text-indigo-600 overflow-hidden border-2 border-white shadow-md">
              <User size={24} />
            </div>
            <div>
              <h3 className="font-bold text-slate-900">Welcome Alex!</h3>
              <p className="text-xs text-slate-500">Nice to have you here. We're here to support you.</p>
            </div>
          </div>
          <button onClick={() => setCurrentScreen('notifications')} className="p-3 bg-slate-50 rounded-full text-slate-400 hover:text-indigo-600 transition-colors relative">
            <Bell size={20} />
            <div className="absolute top-2 right-2 w-2 h-2 bg-rose-500 rounded-full border-2 border-white" />
          </button>
        </div>

        <div className="relative">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
          <input 
            type="text" 
            placeholder="Search for symptoms, meds..." 
            className="w-full pl-12 pr-12 py-4 bg-slate-50 rounded-2xl border border-slate-100 outline-none focus:bg-white focus:border-indigo-600 transition-all"
          />
          <button className="absolute right-4 top-1/2 -translate-y-1/2 text-indigo-600">
            <Mic size={18} />
          </button>
        </div>
      </div>

      <div className="p-6 space-y-8">
        {/* Profile Completion */}
        <div className="bg-indigo-600 p-6 rounded-[32px] text-white flex items-center justify-between shadow-xl shadow-indigo-100">
          <div className="flex items-center gap-4">
            <div className="relative w-16 h-16 flex items-center justify-center">
              <svg className="w-full h-full -rotate-90">
                <circle cx="32" cy="32" r="28" fill="none" stroke="rgba(255,255,255,0.2)" strokeWidth="6" />
                <circle cx="32" cy="32" r="28" fill="none" stroke="white" strokeWidth="6" strokeDasharray={176} strokeDashoffset={176 * 0.15} strokeLinecap="round" />
              </svg>
              <span className="absolute text-sm font-bold">85%</span>
            </div>
            <div>
              <h4 className="font-bold text-sm">Profile is not complete!</h4>
              <p className="text-[10px] opacity-80">Please complete your KYC profile details for the best Swasthya Connect experience</p>
            </div>
          </div>
          <button className="p-2 bg-white/20 rounded-full"><ChevronRight size={20} /></button>
        </div>

        {/* Symptom Tracker */}
        <div className="bg-white p-6 rounded-[32px] border border-slate-100 shadow-sm space-y-4">
          <div className="flex items-start gap-4">
            <div className="w-16 h-16 bg-pink-50 rounded-2xl flex items-center justify-center shrink-0">
              <Activity className="text-pink-500" size={32} />
            </div>
            <div className="space-y-1">
              <h4 className="font-bold text-slate-900">Symptom Tracker</h4>
              <p className="text-xs text-slate-500 leading-relaxed">How is the abdomen pain from yesterday?</p>
            </div>
          </div>
          <div className="flex gap-3">
            <button 
              onClick={() => {
                setSymptomStatus('better');
                setCurrentScreen('diet-routine');
              }}
              className={cn(
                "flex-1 py-3 rounded-2xl font-bold text-sm transition-all",
                symptomStatus === 'better' ? "bg-emerald-600 text-white" : "bg-slate-50 text-slate-600 hover:bg-slate-100"
              )}
            >
              Better
            </button>
            <button 
              onClick={() => {
                setSymptomStatus('worse');
                setCurrentScreen('diet-routine');
              }}
              className={cn(
                "flex-1 py-3 rounded-2xl font-bold text-sm transition-all",
                symptomStatus === 'worse' ? "bg-rose-600 text-white" : "bg-slate-50 text-slate-600 hover:bg-slate-100"
              )}
            >
              Worse
            </button>
          </div>
          <button className="w-full text-center text-xs font-bold text-slate-400 uppercase tracking-widest py-2">Skip &gt;&gt;</button>
        </div>

        {/* AI Suggested Tests */}
        <div className="bg-gradient-to-br from-indigo-600 to-violet-700 p-6 rounded-[32px] text-white space-y-4 shadow-xl shadow-indigo-100 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -mr-16 -mt-16 blur-2xl" />
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-white/20 rounded-xl flex items-center justify-center backdrop-blur-md">
              <Sparkles size={20} />
            </div>
            <h4 className="font-bold text-sm">AI Suggested Tests</h4>
          </div>
          <p className="text-xs opacity-90 leading-relaxed">Based on your "Worse" symptom report for Abdomen Pain, we suggest:</p>
          <div className="bg-white/10 rounded-2xl p-4 space-y-3 backdrop-blur-md border border-white/10">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <FileText size={16} className="opacity-60" />
                <span className="text-xs font-bold">Abdominal Ultrasound</span>
              </div>
              <button className="px-3 py-1 bg-white text-indigo-600 rounded-lg text-[10px] font-bold uppercase">Book Now</button>
            </div>
          </div>
        </div>

        {/* Categories */}
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <h4 className="font-bold text-slate-900">Choose from categories</h4>
            <button className="text-xs font-bold text-indigo-600">See all</button>
          </div>
          <div className="grid grid-cols-5 gap-4">
            {[
              { icon: Activity, label: 'Vitals', color: 'bg-indigo-50 text-indigo-500', action: () => setCurrentScreen('vitals') },
              { icon: Pill, label: 'Pharmacy', color: 'bg-emerald-50 text-emerald-500', action: () => setCurrentScreen('pharmacy') },
              { icon: FileText, label: 'Pathology', color: 'bg-amber-50 text-amber-500', action: () => setCurrentScreen('pharmacy') },
              { icon: Utensils, label: 'Routine', color: 'bg-emerald-50 text-emerald-600', action: () => setCurrentScreen('diet-routine') },
              { icon: MessageSquare, label: 'Counselor', color: 'bg-pink-50 text-pink-500', action: () => setCurrentScreen('couple-counselor') },
            ].map((cat, idx) => (
              <button 
                key={idx} 
                onClick={cat.action}
                className="flex flex-col items-center gap-2 group"
              >
                <div className={cn("w-14 h-14 rounded-2xl flex items-center justify-center transition-transform group-hover:scale-110", cat.color)}>
                  <cat.icon size={24} />
                </div>
                <span className="text-[10px] font-bold text-slate-500 uppercase tracking-wider">{cat.label}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Self Care Tips */}
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <h4 className="font-bold text-slate-900">Self care tips</h4>
            <button className="text-xs font-bold text-indigo-600">See more</button>
          </div>
          <div className="flex gap-4 overflow-x-auto pb-2 scrollbar-hide">
            {[1, 2, 3].map((i) => (
              <div key={i} className="min-w-[140px] bg-white rounded-2xl border border-slate-100 p-3 space-y-2">
                <div className="w-full h-20 bg-indigo-50 rounded-xl overflow-hidden">
                  <img src={`https://picsum.photos/seed/health${i}/200/200`} alt="Tip" className="w-full h-full object-cover" referrerPolicy="no-referrer" />
                </div>
                <h5 className="text-[10px] font-bold text-slate-900 leading-tight">Health Tips {i}</h5>
                <p className="text-[8px] text-slate-500 line-clamp-2">Lorem ipsum dolor sit amet, consectetur adipiscing elit...</p>
              </div>
            ))}
          </div>
        </div>

        {/* Emergency Contact */}
        <div className="bg-rose-50 p-6 rounded-[32px] border border-rose-100 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 bg-rose-500 rounded-full flex items-center justify-center text-white">
              <Phone size={24} />
            </div>
            <div>
              <h4 className="font-bold text-slate-900 text-sm">Having any kind of emergency ???</h4>
              <p className="text-[10px] text-slate-500">Contact medical team immediately. We are here for you !</p>
            </div>
          </div>
          <button className="px-4 py-2 bg-rose-500 text-white rounded-xl text-[10px] font-bold uppercase">Contact</button>
        </div>

        {/* Vitals Summary */}
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <h4 className="font-bold text-slate-900">Your Vitals</h4>
            <button className="text-xs font-bold text-indigo-600">See more</button>
          </div>
          <div className="grid grid-cols-3 gap-3">
            {[
              { label: 'SPO2', value: '98%', color: 'text-sky-500' },
              { label: 'Heart Rate', value: '98%', color: 'text-rose-500' },
              { label: 'Blood Sug', value: '7.8 mmol/L', color: 'text-emerald-500' },
            ].map((v, i) => (
              <div key={i} className="bg-white p-3 rounded-2xl border border-slate-100 text-center space-y-1">
                <span className="text-[8px] font-bold text-slate-400 uppercase">{v.label}</span>
                <p className={cn("text-xs font-bold", v.color)}>{v.value}</p>
              </div>
            ))}
          </div>
          <button onClick={() => setCurrentScreen('vitals')} className="w-full py-3 bg-indigo-600 text-white rounded-2xl font-bold text-xs shadow-lg shadow-indigo-100">Add Vitals</button>
        </div>

        {/* Planner */}
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <h4 className="font-bold text-slate-900">Planner</h4>
            <button className="text-xs font-bold text-indigo-600">See all</button>
          </div>
          <div className="bg-white p-6 rounded-[32px] border border-slate-100 shadow-sm space-y-6">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-slate-50 rounded-2xl flex flex-col items-center justify-center text-slate-400">
                  <Calendar size={20} />
                </div>
                <div>
                  <h5 className="text-sm font-bold text-slate-900">Test Appointment</h5>
                  <p className="text-[10px] text-slate-500">Electrocardiogram • 12pm - 2pm</p>
                </div>
              </div>
              <button className="px-4 py-2 bg-slate-50 text-indigo-600 rounded-xl text-xs font-bold">Reschedule</button>
            </div>
            <div className="h-px bg-slate-50" />
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-slate-50 rounded-2xl flex items-center justify-center text-slate-400">
                  <Pill size={20} />
                </div>
                <div>
                  <h5 className="text-sm font-bold text-slate-900">DOLO 650mg</h5>
                  <p className="text-[10px] text-slate-500">1 tablet • 12pm</p>
                </div>
              </div>
              <div className="flex gap-2">
                <button className="px-4 py-2 bg-indigo-600 text-white rounded-xl text-xs font-bold">Taken</button>
                <button className="px-4 py-2 bg-slate-50 text-slate-400 rounded-xl text-xs font-bold">Skip</button>
              </div>
            </div>
          </div>
          <button onClick={() => setCurrentScreen('medications')} className="w-full py-3 bg-indigo-600 text-white rounded-2xl font-bold text-xs shadow-lg shadow-indigo-100">Go to Planner</button>
        </div>

        {/* To-do list */}
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <h4 className="font-bold text-slate-900">To-do list</h4>
            <button className="text-xs font-bold text-indigo-600">See all</button>
          </div>
          <div className="bg-white p-6 rounded-[32px] border border-slate-100 shadow-sm space-y-4">
            {[
              { label: 'Buy Groceries', checked: true },
              { label: 'Make Pasta', checked: false },
              { label: 'Visit Bank', checked: false },
              { label: 'Watch a movie', checked: false },
            ].map((item, i) => (
              <div key={i} className="flex items-center gap-3">
                <div className={cn("w-5 h-5 rounded border-2 flex items-center justify-center transition-colors", item.checked ? "bg-indigo-600 border-indigo-600" : "border-slate-200")}>
                  {item.checked && <CheckCircle2 size={12} className="text-white" />}
                </div>
                <span className={cn("text-sm", item.checked ? "text-slate-400 line-through" : "text-slate-700")}>{item.label}</span>
              </div>
            ))}
            <button className="w-full py-3 bg-indigo-600 text-white rounded-2xl font-bold text-xs shadow-lg shadow-indigo-100">Go to Planner</button>
          </div>
        </div>

        {/* Finances */}
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <h4 className="font-bold text-slate-900">Finances</h4>
            <button className="text-xs font-bold text-indigo-600">See all</button>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div className="bg-indigo-600 p-6 rounded-[32px] text-white space-y-4 shadow-lg shadow-indigo-100">
              <CreditCard size={24} className="opacity-60" />
              <div>
                <p className="text-[10px] font-bold uppercase tracking-widest opacity-60">Insurances</p>
                <h5 className="text-lg font-bold">24,00,000 INR</h5>
                <p className="text-[10px] opacity-60">till now</p>
              </div>
              <button className="w-full py-2 bg-white/20 rounded-xl text-[10px] font-bold uppercase tracking-widest">View more</button>
            </div>
            <div className="bg-white p-6 rounded-[32px] border border-slate-100 shadow-sm space-y-4">
              <FileText size={24} className="text-slate-300" />
              <div>
                <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Bills</p>
                <h5 className="text-lg font-bold text-slate-900">95,000 INR</h5>
                <p className="text-[10px] text-slate-400">till now</p>
              </div>
              <button className="w-full py-2 bg-slate-50 rounded-xl text-[10px] font-bold text-slate-400 uppercase tracking-widest">View more</button>
            </div>
          </div>
        </div>

        {/* QLQ 30 Questionnaire */}
        <div className="bg-indigo-50 p-6 rounded-[32px] border border-indigo-100 space-y-4">
          <div className="flex items-start gap-4">
            <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center text-indigo-600 shadow-sm">
              <MessageSquare size={24} />
            </div>
            <div className="space-y-1">
              <h4 className="font-bold text-slate-900 text-sm">We care about your health.</h4>
              <p className="text-[10px] text-slate-500 leading-relaxed">Please circle the most applicable number to answer our questions and share important insights about your well-being.</p>
            </div>
          </div>
          <button className="w-full py-3 bg-indigo-600 text-white rounded-2xl font-bold text-xs shadow-lg shadow-indigo-100">Proceed with QLQ 30</button>
        </div>

        {/* Articles */}
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <h4 className="font-bold text-slate-900">Articles</h4>
            <button className="text-xs font-bold text-indigo-600">See more</button>
          </div>
          <div className="grid grid-cols-3 gap-4">
            {[1, 2, 3].map((i) => (
              <div key={i} className="space-y-2">
                <div className="aspect-square bg-slate-100 rounded-2xl overflow-hidden">
                  <img src={`https://picsum.photos/seed/article${i}/200/200`} alt="Article" className="w-full h-full object-cover" referrerPolicy="no-referrer" />
                </div>
                <h5 className="text-[10px] font-bold text-slate-900 leading-tight">Article Title {i}</h5>
                <p className="text-[8px] text-slate-400">Lorem ipsum dolor sit amet...</p>
                <button className="w-full py-1.5 bg-slate-50 text-indigo-600 rounded-lg text-[8px] font-bold uppercase">View more</button>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom Nav */}
      <div className="fixed bottom-8 left-1/2 -translate-x-1/2 w-[90%] max-w-md bg-white/80 backdrop-blur-xl border border-white/20 shadow-2xl rounded-full px-8 py-4 flex items-center justify-between z-20">
        <button onClick={() => setCurrentScreen('dashboard')} className={cn("p-2", currentScreen === 'dashboard' ? "text-indigo-600" : "text-slate-400")}><LayoutDashboard size={24} /></button>
        <button onClick={() => setCurrentScreen('medications')} className={cn("p-2", currentScreen === 'medications' ? "text-indigo-600" : "text-slate-400")}><Pill size={24} /></button>
        <button onClick={() => setCurrentScreen('chatbot')} className={cn("p-4 bg-indigo-600 text-white rounded-full -mt-12 shadow-xl shadow-indigo-200", currentScreen === 'chatbot' && "scale-110")}><MessageSquare size={24} /></button>
        <button onClick={() => setCurrentScreen('vitals')} className={cn("p-2", currentScreen === 'vitals' ? "text-indigo-600" : "text-slate-400")}><Activity size={24} /></button>
        <button onClick={() => setCurrentScreen('pharmacy')} className={cn("p-2", currentScreen === 'pharmacy' ? "text-indigo-600" : "text-slate-400")}><Pill size={24} /></button>
      </div>
    </motion.div>
  );

  const renderChatbot = () => (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      className="flex flex-col h-full bg-white"
    >
      <div className="p-6 flex items-center justify-between border-b border-slate-50 sticky top-0 bg-white z-10">
        <button onClick={() => setCurrentScreen('dashboard')} className="p-2 -ml-2 text-slate-400"><ChevronLeft size={24} /></button>
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-indigo-600 rounded-full flex items-center justify-center text-white">
            <Sparkles size={20} />
          </div>
          <div>
            <h2 className="font-bold text-slate-900">Swasthya AI</h2>
            <p className="text-[10px] text-emerald-500 font-bold uppercase tracking-widest">HIPAA Compliant</p>
          </div>
        </div>
        <button className="p-2 -mr-2 text-slate-400"><MoreVertical size={24} /></button>
      </div>

      <div className="flex-1 overflow-y-auto p-6 space-y-6">
        {chatMessages.map((msg, i) => (
          <div key={i} className={cn("flex", msg.role === 'user' ? "justify-end" : "justify-start")}>
            <div className={cn(
              "max-w-[80%] p-4 rounded-3xl text-sm leading-relaxed",
              msg.role === 'user' ? "bg-indigo-600 text-white rounded-tr-none" : "bg-slate-50 text-slate-700 rounded-tl-none"
            )}>
              {msg.text}
            </div>
          </div>
        ))}
      </div>

      <div className="p-6 border-t border-slate-50 bg-white">
        <div className="flex items-center gap-3 bg-slate-50 p-2 rounded-2xl border border-slate-100">
          <input 
            type="text" 
            value={inputMessage}
            onChange={(e) => setInputMessage(e.target.value)}
            onKeyPress={(e) => e.key === 'Enter' && sendMessage()}
            placeholder="Ask about your recovery..." 
            className="flex-1 bg-transparent px-4 py-2 outline-none text-sm"
          />
          <button 
            onClick={sendMessage}
            className="p-3 bg-indigo-600 text-white rounded-xl shadow-lg shadow-indigo-100"
          >
            <ArrowRight size={20} />
          </button>
        </div>
      </div>
    </motion.div>
  );

  const renderPharmacy = () => (
    <motion.div 
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -20 }}
      className="flex flex-col h-full bg-slate-50 overflow-y-auto pb-32"
    >
      <div className="p-6 flex items-center justify-between bg-white border-b border-slate-50 sticky top-0 z-10">
        <button onClick={() => setCurrentScreen('dashboard')} className="p-2 -ml-2 text-slate-400"><ChevronLeft size={24} /></button>
        <h2 className="font-bold text-slate-900">Pharmacy & Pathology</h2>
        <button className="p-2 -mr-2 text-slate-400"><Bell size={24} /></button>
      </div>

      <div className="p-6 space-y-8">
        <div className="bg-white p-6 rounded-[32px] border border-slate-100 shadow-sm space-y-4">
          <div className="flex items-center justify-between">
            <div className="space-y-1">
              <h3 className="font-bold text-slate-900">Booking for Family?</h3>
              <p className="text-xs text-slate-500">Add tests or medicine for family members</p>
            </div>
            <button 
              onClick={() => setIsFamilyMember(!isFamilyMember)}
              className={cn("w-12 h-6 rounded-full transition-colors relative", isFamilyMember ? "bg-indigo-600" : "bg-slate-200")}
            >
              <div className={cn("absolute top-1 w-4 h-4 bg-white rounded-full transition-all", isFamilyMember ? "left-7" : "left-1")} />
            </button>
          </div>
          {isFamilyMember && (
            <input 
              type="text" 
              placeholder="Enter family member's name" 
              className="w-full p-3 bg-slate-50 rounded-xl border border-slate-100 text-sm outline-none focus:border-indigo-600"
            />
          )}
        </div>

        {orderSuccess ? (
          <motion.div 
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            className="bg-emerald-500 p-8 rounded-[32px] text-white text-center space-y-4 shadow-xl shadow-emerald-100"
          >
            <div className="w-20 h-20 bg-white/20 rounded-full flex items-center justify-center mx-auto">
              <CheckCircle2 size={40} />
            </div>
            <h3 className="text-xl font-bold">Order Confirmed!</h3>
            <p className="text-sm opacity-90">Your medications will be delivered within 2 hours. A tracking link has been sent to your phone.</p>
            <button 
              onClick={() => setOrderSuccess(false)}
              className="px-8 py-3 bg-white text-emerald-600 rounded-2xl font-bold text-sm"
            >
              Done
            </button>
          </motion.div>
        ) : (
          <div className="bg-white p-6 rounded-[32px] border border-slate-100 shadow-sm space-y-6">
            <div className="flex items-center gap-4">
              <div className="w-16 h-16 bg-emerald-50 rounded-2xl flex items-center justify-center text-emerald-500">
                <Pill size={32} />
              </div>
              <div className="flex-1">
                <h3 className="font-bold text-slate-900">Order Medications</h3>
                <p className="text-xs text-slate-500">Refill your active prescriptions</p>
              </div>
            </div>
            <div className="space-y-3">
              {[
                { name: 'XYZ 25mg', count: '12 tablets left', price: '₹450', prescription: '5 days remaining' },
                { name: 'HYZ 50mg', count: '5 tablets left', price: '₹890', prescription: '2 days remaining' },
                { name: 'Sexual Wellness Supplement', count: '10 tablets left', price: '₹1,200', prescription: 'Daily' },
                { name: 'Ashwagandha Extract (Ayurvedic)', count: '60 capsules', price: '₹450', prescription: '1 Daily' },
                { name: 'Multivitamin Complex', count: '30 tablets', price: '₹650', prescription: '1 Daily' },
                { name: 'Omega-3 Fish Oil', count: '60 softgels', price: '₹1,100', prescription: '1 Daily' },
                { name: 'DOLO 650mg', count: '20 tablets left', price: '₹120', prescription: 'SOS' },
                { name: 'Vitamin C', count: '30 tablets left', price: '₹250', prescription: 'Daily' },
              ].map((item, i) => (
                <div key={i} className="flex items-center justify-between p-4 bg-slate-50 rounded-2xl border border-slate-100">
                  <div>
                    <h5 className="text-sm font-bold text-slate-900">{item.name}</h5>
                    <div className="flex items-center gap-2 mt-1">
                      <span className="text-[10px] text-rose-500 font-bold uppercase">{item.count}</span>
                      <span className="text-[10px] text-slate-400 font-bold uppercase">• {item.prescription}</span>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="text-sm font-bold text-slate-900">{item.price}</span>
                    <button 
                      onClick={() => addToCart({ name: item.name, price: parseInt(item.price.replace('₹', '').replace(',', '')), type: 'med' })}
                      className="p-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700"
                    >
                      <Plus size={16} />
                    </button>
                  </div>
                </div>
              ))}
            </div>
            <div className="p-4 bg-indigo-50 rounded-2xl border border-indigo-100 space-y-2">
              <div className="flex items-center gap-2 text-indigo-600">
                <Brain size={16} />
                <span className="text-[10px] font-bold uppercase tracking-wider">AI Insight</span>
              </div>
              <p className="text-[11px] text-indigo-900 leading-relaxed">
                Based on your current consumption, you will run out of <b>HYZ 50mg</b> in 2 days. We recommend ordering today to avoid gaps in your recovery path.
              </p>
            </div>

            <div className="bg-slate-900 p-6 rounded-[32px] text-white space-y-4">
              <h4 className="font-bold text-sm flex items-center gap-2">
                <CreditCard size={18} className="text-indigo-400" />
                Checkout Summary
              </h4>
              <div className="space-y-2 border-b border-white/10 pb-4">
                <div className="flex justify-between text-xs">
                  <span className="opacity-60">Medications ({medCount} items)</span>
                  <span>₹{cart.filter(i => i.type === 'med').reduce((s, i) => s + i.price, 0).toLocaleString()}</span>
                </div>
                <div className="flex justify-between text-xs">
                  <span className="opacity-60">Pathology Tests ({testCount} items)</span>
                  <span>₹{cart.filter(i => i.type === 'test').reduce((s, i) => s + i.price, 0).toLocaleString()}</span>
                </div>
                {isFamilyMember && (
                  <div className="flex justify-between text-[10px] text-indigo-400 font-bold">
                    <span>Family Member Surcharge</span>
                    <span>₹0 (Waived)</span>
                  </div>
                )}
              </div>
              <div className="flex justify-between font-bold">
                <span>Total Amount</span>
                <span>₹{cartTotal.toLocaleString()}</span>
              </div>
            </div>

            <button 
              onClick={() => {
                if (cart.length > 0) setOrderSuccess(true);
              }}
              disabled={cart.length === 0}
              className={cn(
                "w-full py-4 rounded-2xl font-bold text-sm shadow-xl transition-all",
                cart.length > 0 ? "bg-indigo-600 text-white shadow-indigo-100" : "bg-slate-200 text-slate-400 cursor-not-allowed"
              )}
            >
              {cart.length > 0 ? `Confirm & Pay ₹${cartTotal.toLocaleString()}` : 'Add items to checkout'}
            </button>
            <button className="w-full py-4 bg-slate-50 text-slate-600 rounded-2xl font-bold text-sm flex items-center justify-center gap-2 hover:bg-slate-100 transition-colors">
              <Clock size={18} /> Schedule Medicine Order
            </button>
          </div>
        )}

        <div className="bg-white p-6 rounded-[32px] border border-slate-100 shadow-sm space-y-6">
          <div className="flex items-center gap-4">
            <div className="w-16 h-16 bg-amber-50 rounded-2xl flex items-center justify-center text-amber-500">
              <Activity size={32} />
            </div>
            <div className="flex-1">
              <h3 className="font-bold text-slate-900">Pathology Services</h3>
              <p className="text-xs text-slate-500">Book home sample collection</p>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            {[
              { name: 'Full Body Checkup', price: '₹2,499', color: 'bg-indigo-50 text-indigo-600' },
              { name: 'Diabetes Panel', price: '₹1,200', color: 'bg-emerald-50 text-emerald-600' },
              { name: 'USG Abdomen', price: '₹1,800', color: 'bg-sky-50 text-sky-600' },
              { name: 'MRI Brain', price: '₹8,500', color: 'bg-indigo-50 text-indigo-600' },
              { name: 'Cardiac Profile', price: '₹3,500', color: 'bg-rose-50 text-rose-600' },
              { name: 'Liver Function', price: '₹1,800', color: 'bg-amber-50 text-amber-600' },
              { name: 'Kidney Panel', price: '₹1,500', color: 'bg-sky-50 text-sky-600' },
              { name: 'Vitamin Profile', price: '₹2,100', color: 'bg-pink-50 text-pink-600' },
            ].map((test, i) => (
              <button 
                key={i} 
                onClick={() => addToCart({ name: test.name, price: parseInt(test.price.replace('₹', '').replace(',', '')), type: 'test' })}
                className="p-4 bg-white rounded-2xl border border-slate-100 text-left space-y-2 hover:border-indigo-200 transition-all shadow-sm"
              >
                <div className={cn("w-8 h-8 rounded-lg flex items-center justify-center mb-2", test.color)}>
                  <Activity size={16} />
                </div>
                <h5 className="text-xs font-bold text-slate-900">{test.name}</h5>
                <p className="text-[10px] text-indigo-600 font-bold">{test.price}</p>
              </button>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );

  const renderNotifications = () => (
    <motion.div 
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -20 }}
      className="flex flex-col h-full bg-white"
    >
      <div className="p-6 flex items-center justify-between border-b border-slate-50 sticky top-0 bg-white z-10">
        <button onClick={() => setCurrentScreen('dashboard')} className="p-2 -ml-2 text-slate-400"><ChevronLeft size={24} /></button>
        <h2 className="font-bold text-slate-900">Notifications</h2>
        <button className="text-xs font-bold text-indigo-600">Mark all read</button>
      </div>

      <div className="flex-1 overflow-y-auto p-6 space-y-6">
        {[
          { title: 'Medication Reminder', text: 'Time to take XYZ 25mg. Don\'t forget to have it after lunch!', time: '5 mins ago', icon: Pill, color: 'bg-indigo-50 text-indigo-600' },
          { title: 'Upcoming Test', text: 'Your Abdominal Ultrasound is scheduled for tomorrow at 10:00 AM.', time: '2 hours ago', icon: Calendar, color: 'bg-amber-50 text-amber-600' },
          { title: 'Vitals Alert', text: 'Your heart rate was slightly elevated (92 bpm) during rest. Take a deep breath.', time: 'Yesterday', icon: Activity, color: 'text-rose-600 bg-rose-50' },
        ].map((notif, i) => (
          <div key={i} className="flex gap-4 p-4 rounded-3xl hover:bg-slate-50 transition-colors">
            <div className={cn("w-12 h-12 rounded-2xl flex items-center justify-center shrink-0", notif.color)}>
              <notif.icon size={24} />
            </div>
            <div className="space-y-1">
              <div className="flex items-center justify-between">
                <h5 className="text-sm font-bold text-slate-900">{notif.title}</h5>
                <span className="text-[10px] text-slate-400">{notif.time}</span>
              </div>
              <p className="text-xs text-slate-500 leading-relaxed">{notif.text}</p>
            </div>
          </div>
        ))}
      </div>
    </motion.div>
  );

  const renderMedications = () => (
    <motion.div 
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -20 }}
      className="flex flex-col h-full bg-white overflow-y-auto pb-32"
    >
      <div className="p-6 flex items-center justify-between border-b border-slate-50 sticky top-0 bg-white z-10">
        <button onClick={() => setCurrentScreen('dashboard')} className="p-2 -ml-2 text-slate-400"><ChevronLeft size={24} /></button>
        <h2 className="font-bold text-slate-900">Medications</h2>
        <button className="p-2 -mr-2 text-slate-400"><Bell size={24} /></button>
      </div>

      <div className="p-6 space-y-8">
        <div className="flex gap-4 p-1 bg-slate-50 rounded-2xl">
          <button 
            onClick={() => setMedicationView('planner')}
            className={cn("flex-1 py-3 rounded-xl text-xs font-bold transition-all", medicationView === 'planner' ? "bg-white shadow-sm text-indigo-600" : "text-slate-400")}
          >
            Planner
          </button>
          <button 
            onClick={() => setMedicationView('list')}
            className={cn("flex-1 py-3 rounded-xl text-xs font-bold transition-all", medicationView === 'list' ? "bg-white shadow-sm text-indigo-600" : "text-slate-400")}
          >
            Medicine list
          </button>
        </div>

        <div className="relative">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
          <input 
            type="text" 
            placeholder="Search for medicines" 
            className="w-full pl-12 pr-12 py-4 bg-slate-50 rounded-2xl border border-slate-100 outline-none focus:bg-white focus:border-indigo-600 transition-all"
          />
        </div>

        {medicationView === 'planner' ? (
          <>
            <div className="space-y-6">
              <div className="flex items-center justify-between">
                <h3 className="text-2xl font-bold text-slate-900">12:30 PM</h3>
                <div className="flex items-center gap-2 px-3 py-1.5 bg-slate-50 rounded-lg text-xs font-bold text-slate-600">
                  Tuesday, Oct 17 <ChevronRight size={14} />
                </div>
              </div>

              <div className="flex justify-between">
                {['M', 'T', 'W', 'Th', 'F', 'Sa'].map((day, idx) => (
                  <div key={idx} className={cn(
                    "flex flex-col items-center gap-2 p-3 rounded-2xl transition-all",
                    idx === 1 ? "bg-indigo-600 text-white shadow-lg shadow-indigo-100" : "bg-slate-50 text-slate-400"
                  )}>
                    <span className="text-[10px] font-bold uppercase">{day}</span>
                    <span className="text-sm font-bold">{9 + idx}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="space-y-4">
              <h4 className="font-bold text-slate-900">Daily Medication & Progress</h4>
              <div className="space-y-4">
                {[
                  { id: '1', name: 'XYZ', dose: '1 tablet, 25mg', time: 'upcoming medication in 5 mins', color: 'bg-indigo-50 text-indigo-600', progress: 2, total: 5 },
                  { id: '2', name: 'HYZ', dose: '1 tablet, 50mg', time: 'Have you taken your medicines at 2pm?', color: 'bg-amber-50 text-amber-600', progress: 4, total: 7 },
                  { id: '3', name: 'ABC', dose: '1 tablet, 10mg', time: 'Taken at 12 pm', color: 'bg-emerald-50 text-emerald-600', progress: 5, total: 5 },
                ].map((med) => {
                  const status = medsStatus[med.id] || (med.id === '3' ? 'taken' : 'pending');
                  return (
                    <div 
                      key={med.id} 
                      onClick={() => { setSelectedMed(med); setCurrentScreen('medication-detail'); }}
                      className={cn(
                        "bg-white p-6 rounded-[32px] border border-slate-100 shadow-sm space-y-6 cursor-pointer hover:border-indigo-200 transition-all",
                        status !== 'pending' && "opacity-60 grayscale-[0.5]"
                      )}
                    >
                      <div className="flex items-center gap-4">
                        <div className={cn("w-14 h-14 rounded-2xl flex items-center justify-center", med.color)}>
                          <Pill size={28} />
                        </div>
                        <div className="flex-1">
                          <div className="flex items-center justify-between mb-1">
                            <h5 className="font-bold text-slate-900">{med.name}</h5>
                            <span className="text-[10px] font-bold text-slate-400 uppercase">Day {med.progress}/{med.total}</span>
                          </div>
                          <p className="text-xs text-slate-500">{med.dose} • {med.time}</p>
                          <div className="mt-3 w-full h-1.5 bg-slate-50 rounded-full overflow-hidden">
                            <div 
                              className={cn("h-full rounded-full transition-all duration-1000", med.color.split(' ')[1].replace('text-', 'bg-'))} 
                              style={{ width: `${(med.progress / med.total) * 100}%` }}
                            />
                          </div>
                        </div>
                        {status === 'taken' && <CheckCircle2 className="text-emerald-500" size={24} />}
                        {status === 'skipped' && <AlertCircle className="text-rose-500" size={24} />}
                      </div>
                      {status === 'pending' && (
                        <div className="flex gap-3">
                          <button 
                            onClick={(e) => { e.stopPropagation(); toggleMed(med.id, 'taken'); }}
                            className="flex-1 py-4 bg-indigo-600 text-white rounded-2xl font-bold text-sm shadow-lg shadow-indigo-100"
                          >
                            Taken
                          </button>
                          <button 
                            onClick={(e) => { e.stopPropagation(); toggleMed(med.id, 'skipped'); }}
                            className="flex-1 py-4 bg-slate-50 text-slate-600 rounded-2xl font-bold text-sm"
                          >
                            Skip
                          </button>
                        </div>
                      )}
                      <div className="flex items-center justify-between pt-2 border-t border-slate-50">
                        <button onClick={(e) => { e.stopPropagation(); setCurrentScreen('pharmacy'); }} className="flex items-center gap-2 text-[10px] font-bold text-indigo-600 uppercase tracking-widest">
                          <Plus size={12} /> Order Refill
                        </button>
                        <span className="text-[10px] font-bold text-slate-300 uppercase">12 tablets left</span>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </>
        ) : (
          <div className="space-y-4">
            <h4 className="font-bold text-slate-900">Running Medications</h4>
            <div className="space-y-3">
              {[
                { name: 'XYZ 25mg', status: 'Running', days: 'Day 2 of 5', color: 'text-indigo-600 bg-indigo-50' },
                { name: 'HYZ 50mg', status: 'Running', days: 'Day 4 of 7', color: 'text-amber-600 bg-amber-50' },
                { name: 'ABC 10mg', status: 'Completed', days: 'Day 5 of 5', color: 'text-emerald-600 bg-emerald-50' },
                { name: 'DOLO 650mg', status: 'SOS', days: 'As needed', color: 'text-rose-600 bg-rose-50' },
              ].map((med, i) => (
                <div key={i} className="bg-white p-4 rounded-2xl border border-slate-100 flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <div className={cn("w-10 h-10 rounded-xl flex items-center justify-center", med.color)}>
                      <Pill size={20} />
                    </div>
                    <div>
                      <h5 className="text-sm font-bold text-slate-900">{med.name}</h5>
                      <p className="text-[10px] text-slate-500">{med.days}</p>
                    </div>
                  </div>
                  <span className={cn("px-3 py-1 rounded-full text-[10px] font-bold uppercase", med.color)}>
                    {med.status}
                  </span>
                </div>
              ))}
            </div>
          </div>
        )}

        <button 
          onClick={() => {
            setIsScanning(true);
            setTimeout(() => setIsScanning(false), 2000);
          }}
          className="w-full py-5 bg-slate-900 text-white rounded-3xl font-bold text-lg flex items-center justify-center gap-3 relative overflow-hidden"
        >
          {isScanning ? (
            <motion.div 
              initial={{ x: '-100%' }}
              animate={{ x: '100%' }}
              transition={{ repeat: Infinity, duration: 1.5, ease: 'linear' }}
              className="absolute inset-0 bg-white/20"
            />
          ) : null}
          <Camera size={24} />
          {isScanning ? 'Scanning...' : 'Scan your Prescription'}
        </button>
      </div>
    </motion.div>
  );

  const renderMedicationDetail = () => (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      className="flex flex-col h-full bg-white overflow-y-auto pb-32"
    >
      <div className="p-6 flex items-center justify-between border-b border-slate-50 sticky top-0 bg-white z-10">
        <button onClick={() => setCurrentScreen('medications')} className="p-2 -ml-2 text-slate-400 flex items-center gap-2">
          <ChevronLeft size={24} />
          <span className="font-bold text-slate-900">Back to Medications</span>
        </button>
        <button className="p-2 -mr-2 text-slate-400"><MoreVertical size={24} /></button>
      </div>

      <div className="p-8 space-y-8">
        <div className="bg-slate-50 rounded-[40px] p-10 flex flex-col items-center text-center space-y-6 border border-slate-100">
          <div className="w-32 h-32 bg-white rounded-full flex items-center justify-center shadow-xl">
            <Pill size={64} className="text-rose-500 rotate-45" />
          </div>
          <div className="space-y-2">
            <h3 className="text-2xl font-bold text-slate-900">Setspukt</h3>
            <p className="text-slate-500 font-medium">1 tablet per dose • 3 doses per day</p>
          </div>
          <div className="flex gap-4">
            <div className="bg-white px-4 py-2 rounded-full text-[10px] font-bold text-slate-400 uppercase tracking-widest border border-slate-100">After breakfast</div>
            <div className="bg-white px-4 py-2 rounded-full text-[10px] font-bold text-slate-400 uppercase tracking-widest border border-slate-100">After lunch</div>
          </div>
          <div className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Medication Start Date: 12.04.2022</div>
        </div>

        <div className="bg-indigo-50 p-6 rounded-[32px] border border-indigo-100 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 bg-indigo-600 rounded-2xl flex items-center justify-center text-white">
              <Pill size={24} />
            </div>
            <div>
              <h4 className="font-bold text-indigo-900 text-lg">28 tablets left in stock</h4>
              <p className="text-[10px] text-indigo-600 uppercase font-bold tracking-widest">Refill needed in 9 days</p>
            </div>
          </div>
          <button className="p-2 bg-indigo-600 text-white rounded-full"><Plus size={20} /></button>
        </div>

        <div className="space-y-4">
          <h4 className="font-bold text-slate-900">About Setspukt</h4>
          <p className="text-sm text-slate-500 leading-relaxed">
            Setspukt is a widely recognized over-the-counter medicine known for its effectiveness in relieving pain and reducing fever in both children and adults. Its gentle formulation and trusted brand make it a go-to choice for addressing common ailments.
          </p>
        </div>

        <div className="bg-rose-50 p-6 rounded-[32px] border border-rose-100 space-y-3">
          <div className="flex items-center gap-2 text-rose-600">
            <AlertCircle size={20} />
            <h4 className="font-bold text-sm">Potential Side effects</h4>
          </div>
          <p className="text-xs text-rose-700 leading-relaxed">
            Setspukt is a widely recognized over-the-counter medicine known for its effectiveness in relieving pain and reducing fever in both children and adults.
          </p>
        </div>

        <div className="flex gap-4">
          <button className="flex-1 py-5 bg-indigo-600 text-white rounded-3xl font-bold text-lg shadow-xl shadow-indigo-100 flex items-center justify-center gap-2">
            <Edit3 size={20} />
            Edit Medication
          </button>
          <button className="flex-1 py-5 bg-rose-50 text-rose-600 rounded-3xl font-bold text-lg flex items-center justify-center gap-2">
            <Trash2 size={20} />
            Delete
          </button>
        </div>
      </div>
    </motion.div>
  );

  const renderVitals = () => (
    <motion.div 
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -20 }}
      className="flex flex-col h-full bg-slate-50 overflow-y-auto pb-32"
    >
      <div className="p-6 flex items-center justify-between bg-white border-b border-slate-50 sticky top-0 z-10">
        <button onClick={() => setCurrentScreen('dashboard')} className="p-2 -ml-2 text-slate-400"><ChevronLeft size={24} /></button>
        <h2 className="font-bold text-slate-900">Vitals</h2>
        <button className="p-2 -mr-2 text-slate-400"><Bell size={24} /></button>
      </div>

      <div className="p-6 space-y-8">
        <div className="bg-white p-6 rounded-[32px] border border-slate-100 shadow-sm space-y-4">
          <h3 className="text-xl font-bold text-slate-900">Hey Alex!</h3>
          <p className="text-xs text-slate-500">Here are your vitals. Last synced with your watch at 7:00pm on 23rd Oct, 2023.</p>
          <div className="bg-indigo-50 p-4 rounded-2xl border border-indigo-100">
            <p className="text-xs text-indigo-900 leading-relaxed">
              <span className="font-bold">Hello!</span> Please share your vital signs here. Monitoring vitals is crucial, offering insights into overall health and well-being.
            </p>
          </div>
          <button className="w-full py-4 bg-indigo-600 text-white rounded-2xl font-bold text-sm shadow-lg shadow-indigo-100 flex items-center justify-center gap-2">
            <Plus size={18} />
            Add Vitals tab
          </button>
        </div>

        <div className="grid grid-cols-2 gap-4">
          {[
            { label: 'Body weight', value: '74 kg', icon: Activity, color: 'text-indigo-600', bg: 'bg-indigo-50' },
            { label: 'Body Temp', value: '98°F', icon: Thermometer, color: 'text-rose-600', bg: 'bg-rose-50' },
            { label: 'Heart Rate', value: '82 bpm', icon: Heart, color: 'text-pink-600', bg: 'bg-pink-50' },
            { label: 'Blood Pressure', value: '120/80', icon: Zap, color: 'text-amber-600', bg: 'bg-amber-50' },
            { label: 'Blood Sugar', value: '7.8 mmol/L', icon: Droplets, color: 'text-emerald-600', bg: 'bg-emerald-50' },
            { label: 'SPO2 levels', value: '98%', icon: Activity, color: 'text-sky-600', bg: 'bg-sky-50' },
          ].map((vital, idx) => (
            <div key={idx} className="bg-white p-5 rounded-[32px] border border-slate-100 shadow-sm space-y-4">
              <div className="flex items-center gap-2">
                <div className={cn("w-8 h-8 rounded-lg flex items-center justify-center", vital.bg, vital.color)}>
                  <vital.icon size={16} />
                </div>
                <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">{vital.label}</span>
              </div>
              <div className="space-y-1">
                <p className="text-[10px] text-slate-400">Last taken yesterday, 2:00pm</p>
                <h4 className="text-xl font-bold text-slate-900">{vital.value}</h4>
              </div>
              <div className="flex gap-2">
                <button 
                  onClick={() => setCurrentScreen('vitals-success')}
                  className="flex-1 py-2 bg-indigo-600 text-white rounded-xl text-[10px] font-bold uppercase"
                >
                  Add Reading
                </button>
                <button className="flex-1 py-2 bg-slate-50 text-slate-400 rounded-xl text-[10px] font-bold uppercase">View Details</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </motion.div>
  );

  const renderVitalsSuccess = () => (
    <motion.div 
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.9 }}
      className="flex flex-col items-center justify-center h-full p-8 bg-white text-center space-y-12"
    >
      <div className="relative">
        <div className="w-48 h-48 bg-indigo-50 rounded-full flex items-center justify-center">
          <div className="relative">
            <User size={100} className="text-indigo-600" />
            <div className="absolute -top-2 -right-2 w-10 h-10 bg-pink-500 rounded-full flex items-center justify-center text-white border-4 border-white">
              <Plus size={20} />
            </div>
            <div className="absolute -bottom-2 -left-2 w-10 h-10 bg-indigo-600 rounded-full flex items-center justify-center text-white border-4 border-white">
              <Heart size={20} />
            </div>
          </div>
        </div>
        <motion.div 
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.3, type: 'spring' }}
          className="absolute -top-4 -right-4 bg-white p-3 rounded-2xl shadow-xl border border-slate-100"
        >
          <CheckCircle2 className="text-emerald-500" size={32} />
        </motion.div>
      </div>

      <div className="space-y-4">
        <h2 className="text-3xl font-bold text-slate-900 tracking-tight">Congratulations !!</h2>
        <p className="text-indigo-600 font-bold">Your vitals have been added and recorded.</p>
      </div>

      <div className="w-full space-y-4">
        <button 
          onClick={() => setCurrentScreen('vitals')}
          className="w-full py-5 bg-indigo-600 text-white rounded-3xl font-bold text-lg shadow-xl shadow-indigo-200"
        >
          Back to Vitals
        </button>
        <button 
          onClick={() => setCurrentScreen('dashboard')}
          className="w-full py-5 bg-white text-slate-900 border-2 border-slate-100 rounded-3xl font-bold text-lg"
        >
          Back to Home
        </button>
      </div>
    </motion.div>
  );

  const renderAIReport = () => (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      className="flex flex-col h-full bg-slate-50 overflow-y-auto pb-32"
    >
      <div className="p-6 flex items-center justify-between bg-white border-b border-slate-50 sticky top-0 z-10">
        <button onClick={() => setCurrentScreen('dashboard')} className="p-2 -ml-2 text-slate-400"><ChevronLeft size={24} /></button>
        <h2 className="font-bold text-slate-900">AI Report Helper</h2>
        <button className="p-2 -mr-2 text-slate-400"><Sparkles size={24} /></button>
      </div>

      <div className="p-6 space-y-8">
        <div className="bg-indigo-600 p-8 rounded-[40px] text-white space-y-6 shadow-xl shadow-indigo-100 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -mr-16 -mt-16 blur-2xl" />
          <div className="flex items-center gap-4">
            <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center backdrop-blur-md">
              <FileText size={32} />
            </div>
            <div>
              <h3 className="text-xl font-bold">Blood Report Analysis</h3>
              <p className="text-xs opacity-80">Uploaded on 22nd Oct, 2023</p>
            </div>
          </div>
          <div className="h-px bg-white/20" />
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <span className="text-sm opacity-80">Overall Health Score</span>
              <span className="text-2xl font-bold">82/100</span>
            </div>
            <div className="w-full h-2 bg-white/20 rounded-full overflow-hidden">
              <div className="w-[82%] h-full bg-white rounded-full" />
            </div>
          </div>
        </div>

        <div className="space-y-4">
          <h4 className="font-bold text-slate-900 flex items-center gap-2">
            <Brain size={20} className="text-indigo-600" />
            AI Insights
          </h4>
          <div className="space-y-4">
            {[
              { title: 'Vitamin D Deficiency', desc: 'Your levels are at 18 ng/mL (Normal: 30-100). This might be causing your fatigue.', action: 'Recommended: 15 mins sun exposure daily.' },
              { title: 'High Cholesterol', desc: 'LDL is slightly elevated at 135 mg/dL. Your diet needs more fiber.', action: 'Recommended: Add oats and flaxseeds.' },
              { title: 'Normal HbA1c', desc: 'Your blood sugar levels are stable at 5.4%. Keep up the good work!', action: 'Status: Healthy' },
            ].map((insight, i) => (
              <div key={i} className="bg-white p-6 rounded-[32px] border border-slate-100 shadow-sm space-y-3">
                <div className="flex items-center justify-between">
                  <h5 className="font-bold text-slate-900">{insight.title}</h5>
                  <div className="w-8 h-8 bg-slate-50 rounded-full flex items-center justify-center text-slate-400"><ChevronRight size={16} /></div>
                </div>
                <p className="text-xs text-slate-500 leading-relaxed">{insight.desc}</p>
                <div className="p-3 bg-indigo-50 rounded-xl text-[10px] font-bold text-indigo-600 uppercase tracking-widest">
                  {insight.action}
                </div>
              </div>
            ))}
          </div>
        </div>

        <button 
          onClick={() => {
            setIsScanning(true);
            setTimeout(() => setIsScanning(false), 2000);
          }}
          className="w-full py-5 bg-slate-900 text-white rounded-3xl font-bold text-lg flex items-center justify-center gap-3 relative overflow-hidden"
        >
          {isScanning ? (
            <motion.div 
              initial={{ x: '-100%' }}
              animate={{ x: '100%' }}
              transition={{ repeat: Infinity, duration: 1.5, ease: 'linear' }}
              className="absolute inset-0 bg-white/20"
            />
          ) : null}
          <Scan size={24} />
          {isScanning ? 'Analyzing...' : 'Scan New Report'}
        </button>
      </div>
    </motion.div>
  );

  const renderDietRoutine = () => {
    const routines: Record<string, any> = {
      'Abdomen Pain': {
        diet: [
          { meal: 'Breakfast', items: 'Oatmeal with banana (easy to digest)', cal: '300 kcal' },
          { meal: 'Lunch', items: 'Khichdi (Rice & Lentils) with curd', cal: '400 kcal' },
          { meal: 'Snack', items: 'Coconut water or Buttermilk', cal: '50 kcal' },
          { meal: 'Dinner', items: 'Steamed vegetables with clear soup', cal: '250 kcal' },
        ],
        exercise: [
          { name: 'Gentle Stretching', desc: '10 mins • Focus on breathing', icon: Activity, color: 'text-emerald-500', bg: 'bg-emerald-50' },
          { name: 'Slow Walk', desc: '15 mins • Post-meal stroll', icon: Activity, color: 'text-sky-500', bg: 'bg-sky-50' },
        ],
        tips: [
          { time: '07:00 AM', activity: 'Warm Water', desc: 'Sip slowly to soothe the stomach.', icon: Droplets, color: 'text-sky-500' },
          { time: '08:00 AM', activity: 'Ginger Tea', desc: 'Helps reduce inflammation and nausea.', icon: Sparkles, color: 'text-amber-500' },
        ],
        ayurveda: [
          { name: 'Triphala', desc: 'Take 1 tsp with warm water before bed for digestion.', icon: Sparkles },
          { name: 'Ajwain & Salt', desc: 'Chew half a tsp for instant relief from bloating.', icon: Leaf },
        ]
      },
      'Fever': {
        diet: [
          { meal: 'Breakfast', items: 'Fruit salad with honey', cal: '250 kcal' },
          { meal: 'Lunch', items: 'Vegetable broth with toast', cal: '350 kcal' },
          { meal: 'Snack', items: 'Orange juice (Vitamin C)', cal: '100 kcal' },
          { meal: 'Dinner', items: 'Boiled eggs or Tofu with soup', cal: '300 kcal' },
        ],
        exercise: [
          { name: 'Complete Rest', desc: 'Focus on recovery', icon: Activity, color: 'text-rose-500', bg: 'bg-rose-50' },
          { name: 'Deep Breathing', desc: '5 mins • Relax the nervous system', icon: Activity, color: 'text-indigo-500', bg: 'bg-indigo-50' },
        ],
        tips: [
          { time: 'Every 2h', activity: 'Hydration', desc: 'Drink plenty of fluids to prevent dehydration.', icon: Droplets, color: 'text-sky-500' },
          { time: 'Morning', activity: 'Tulsi Decoction', desc: 'Natural ayurvedic drink for immunity.', icon: Sparkles, color: 'text-emerald-500' },
        ],
        ayurveda: [
          { name: 'Giloy Ghan Vati', desc: 'Natural immunity booster to fight infection.', icon: Sparkles },
          { name: 'Sudarshan Vati', desc: 'Traditional remedy for managing body temperature.', icon: Leaf },
        ]
      },
      'Fatigue': {
        diet: [
          { meal: 'Breakfast', items: 'Sprouted grains with nuts', cal: '400 kcal' },
          { meal: 'Lunch', items: 'Brown rice with dal and spinach', cal: '550 kcal' },
          { meal: 'Snack', items: 'Banana or Energy bar', cal: '200 kcal' },
          { meal: 'Dinner', items: 'Lentil soup with whole wheat bread', cal: '350 kcal' },
        ],
        exercise: [
          { name: 'Light Yoga', desc: '20 mins • Restorative poses', icon: Activity, color: 'text-indigo-500', bg: 'bg-indigo-50' },
          { name: 'Pranayama', desc: '10 mins • Energy breathing', icon: Activity, color: 'text-emerald-500', bg: 'bg-emerald-50' },
        ],
        tips: [
          { time: '07:00 AM', activity: 'Ashwagandha Drink', desc: 'Ayurvedic tonic for energy and stress.', icon: Sparkles, color: 'text-indigo-500' },
          { time: 'Afternoon', activity: 'Power Nap', desc: 'Short 20 min nap to recharge.', icon: Clock, color: 'text-slate-500' },
        ],
        ayurveda: [
          { name: 'Brahmi', desc: 'Improves mental clarity and reduces brain fog.', icon: Sparkles },
          { name: 'Shatavari', desc: 'Supports overall strength and vitality.', icon: Leaf },
        ]
      },
      'Cough': {
        diet: [
          { meal: 'Breakfast', items: 'Warm porridge with honey', cal: '300 kcal' },
          { meal: 'Lunch', items: 'Vegetable khichdi with ginger', cal: '400 kcal' },
          { meal: 'Snack', items: 'Herbal tea with honey', cal: '50 kcal' },
          { meal: 'Dinner', items: 'Chicken/Vegetable soup', cal: '300 kcal' },
        ],
        exercise: [
          { name: 'Chest Opening', desc: '5 mins • Gentle stretches', icon: Activity, color: 'text-rose-500', bg: 'bg-rose-50' },
          { name: 'Steam Inhalation', desc: '10 mins • Clear airways', icon: Droplets, color: 'text-sky-500', bg: 'bg-sky-50' },
        ],
        tips: [
          { time: 'Bedtime', activity: 'Turmeric Milk', desc: 'Golden milk with black pepper for cough.', icon: Sparkles, color: 'text-amber-500' },
          { time: 'Daytime', activity: 'Salt Water Gargle', desc: 'Soothe the throat 3 times a day.', icon: Droplets, color: 'text-sky-500' },
        ],
        ayurveda: [
          { name: 'Sitopaladi Churna', desc: 'Mix with honey to relieve congestion.', icon: Sparkles },
          { name: 'Mulethi (Licorice)', desc: 'Chew a small piece to soothe a sore throat.', icon: Leaf },
        ]
      }
    };

    const currentRoutine = routines[selectedSymptom] || routines['Abdomen Pain'];

    return (
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -20 }}
        className="flex flex-col h-full bg-slate-50 overflow-y-auto pb-32"
      >
        <div className="p-6 flex items-center justify-between bg-white border-b border-slate-50 sticky top-0 z-10">
          <button onClick={() => setCurrentScreen('dashboard')} className="p-2 -ml-2 text-slate-400"><ChevronLeft size={24} /></button>
          <div className="text-center">
            <h2 className="font-bold text-slate-900">Diet & Routine</h2>
            <p className="text-[10px] text-indigo-600 font-bold uppercase tracking-widest">For {selectedSymptom}</p>
          </div>
          <button className="p-2 -mr-2 text-slate-400"><Utensils size={24} /></button>
        </div>

        <div className="p-6 space-y-8">
          {/* Symptom Selector (Quick) */}
          <div className="flex gap-2 overflow-x-auto pb-2 scrollbar-hide">
            {['Abdomen Pain', 'Fever', 'Fatigue', 'Cough'].map((s) => (
              <button 
                key={s}
                onClick={() => setSelectedSymptom(s)}
                className={cn(
                  "px-4 py-2 rounded-full text-[10px] font-bold uppercase tracking-widest whitespace-nowrap transition-all",
                  selectedSymptom === s ? "bg-indigo-600 text-white shadow-lg shadow-indigo-100" : "bg-white text-slate-400 border border-slate-100"
                )}
              >
                {s}
              </button>
            ))}
          </div>

          {/* Daily Routine */}
          <div className="space-y-4">
            <h4 className="font-bold text-slate-900 flex items-center gap-2">
              <Clock size={20} className="text-indigo-600" />
              Ideal Daily Routine
            </h4>
            <div className="space-y-4">
              {currentRoutine.tips.map((item: any, i: number, arr: any[]) => (
                <div key={i} className="flex gap-4">
                  <div className="flex flex-col items-center gap-2">
                    <div className={cn("w-10 h-10 rounded-full bg-white border-2 border-slate-100 flex items-center justify-center shadow-sm", item.color)}>
                      <item.icon size={18} />
                    </div>
                    {i < arr.length - 1 && <div className="w-0.5 h-full bg-slate-200" />}
                  </div>
                  <div className="pb-6">
                    <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">{item.time}</span>
                    <h5 className="font-bold text-slate-900">{item.activity}</h5>
                    <p className="text-xs text-slate-500">{item.desc}</p>
                  </div>
                </div>
              ))}
              {/* Common items */}
              <div className="flex gap-4">
                <div className="flex flex-col items-center gap-2">
                  <div className="w-10 h-10 rounded-full bg-white border-2 border-slate-100 flex items-center justify-center shadow-sm text-emerald-500">
                    <Utensils size={18} />
                  </div>
                  <div className="w-0.5 h-full bg-slate-200" />
                </div>
                <div className="pb-6">
                  <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">01:30 PM</span>
                  <h5 className="font-bold text-slate-900">Balanced Lunch</h5>
                  <p className="text-xs text-slate-500">High protein, moderate carbs, lots of greens.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Diet Plan */}
          <div className="space-y-4">
            <h4 className="font-bold text-slate-900 flex items-center gap-2">
              <Utensils size={20} className="text-emerald-600" />
              Personalized Diet Plan
            </h4>
            <div className="grid grid-cols-1 gap-4">
              {currentRoutine.diet.map((meal: any, i: number) => (
                <div key={i} className="bg-white p-6 rounded-[32px] border border-slate-100 shadow-sm flex items-center justify-between">
                  <div className="space-y-1">
                    <span className="text-[10px] font-bold text-emerald-600 uppercase tracking-widest">{meal.meal}</span>
                    <h5 className="font-bold text-slate-900">{meal.items}</h5>
                  </div>
                  <div className="text-right">
                    <span className="text-xs font-bold text-slate-400">{meal.cal}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Exercise Plan */}
          <div className="space-y-4">
            <h4 className="font-bold text-slate-900 flex items-center gap-2">
              <Dumbbell size={20} className="text-rose-600" />
              Exercise Routine
            </h4>
            <div className="bg-white p-6 rounded-[32px] border border-slate-100 shadow-sm space-y-6">
              {currentRoutine.exercise.map((ex: any, i: number) => (
                <div key={i} className="space-y-6">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-4">
                      <div className={cn("w-12 h-12 rounded-2xl flex items-center justify-center", ex.bg, ex.color)}>
                        <ex.icon size={24} />
                      </div>
                      <div>
                        <h5 className="font-bold text-slate-900">{ex.name}</h5>
                        <p className="text-xs text-slate-500">{ex.desc}</p>
                      </div>
                    </div>
                    <button className={cn("px-4 py-2 text-white rounded-xl text-xs font-bold", ex.color.replace('text-', 'bg-'))}>Start</button>
                  </div>
                  {i < currentRoutine.exercise.length - 1 && <div className="h-px bg-slate-50" />}
                </div>
              ))}
            </div>
          </div>

          {/* Ayurvedic Wisdom */}
          <div className="space-y-4">
            <h4 className="font-bold text-slate-900 flex items-center gap-2">
              <Sparkles size={20} className="text-amber-500" />
              Ayurvedic Wisdom
            </h4>
            <div className="space-y-4">
              {currentRoutine.ayurveda.map((item: any, i: number) => (
                <div key={i} className="bg-gradient-to-br from-amber-50 to-orange-50 p-6 rounded-[32px] border border-amber-100 shadow-sm flex items-start gap-4">
                  <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center text-amber-500 shadow-sm shrink-0">
                    <item.icon size={24} />
                  </div>
                  <div className="space-y-1">
                    <h5 className="font-bold text-amber-900">{item.name}</h5>
                    <p className="text-xs text-amber-700 leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              ))}
              
              {/* General Ayurvedic Tip */}
              <div className="bg-white p-6 rounded-[32px] border border-slate-100 shadow-sm space-y-3">
                <div className="flex items-center gap-2 text-emerald-600">
                  <Leaf size={18} />
                  <h5 className="font-bold text-sm uppercase tracking-widest">Daily Dinacharya</h5>
                </div>
                <p className="text-xs text-slate-500 italic">
                  "Health is the state where the Doshas are balanced, Agni is strong, and the mind is clear."
                </p>
                <div className="flex gap-2 overflow-x-auto pb-2 scrollbar-hide">
                  {['Tongue Scraping', 'Oil Pulling', 'Sun Exposure', 'Warm Water'].map((tip) => (
                    <span key={tip} className="px-3 py-1 bg-slate-50 rounded-full text-[10px] font-bold text-slate-400 whitespace-nowrap">
                      {tip}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    );
  };

  const renderCoupleCounselor = () => (
    <motion.div 
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -20 }}
      className="flex flex-col h-full bg-white overflow-y-auto pb-32"
    >
      <div className="p-6 flex items-center justify-between border-b border-slate-50 sticky top-0 bg-white z-10">
        <button onClick={() => setCurrentScreen('dashboard')} className="p-2 -ml-2 text-slate-400"><ChevronLeft size={24} /></button>
        <h2 className="font-bold text-slate-900">Couple Counselor</h2>
        <button className="p-2 -mr-2 text-slate-400"><Bell size={24} /></button>
      </div>

      <div className="p-6 space-y-8">
        <div className="bg-pink-50 p-8 rounded-[40px] text-pink-900 space-y-4 border border-pink-100">
          <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center text-pink-500 shadow-sm">
            <Heart size={32} />
          </div>
          <h3 className="text-xl font-bold">Strengthen Your Relationship</h3>
          <p className="text-sm opacity-80 leading-relaxed">
            Recovery is a journey for both of you. Our expert counselors help you navigate emotional challenges and build a stronger bond.
          </p>
        </div>

        <div className="space-y-4">
          <h4 className="font-bold text-slate-900">Available Counselors</h4>
          <div className="space-y-4">
            {[
              { name: 'Dr. Sarah Wilson', exp: '12 years exp', rating: '4.9', price: '₹1,500/session', img: 'https://picsum.photos/seed/doc1/200/200' },
              { name: 'Dr. Michael Chen', exp: '8 years exp', rating: '4.8', price: '₹1,200/session', img: 'https://picsum.photos/seed/doc2/200/200' },
            ].map((doc, i) => (
              <div key={i} className="bg-white p-4 rounded-[32px] border border-slate-100 shadow-sm flex items-center gap-4">
                <div className="w-20 h-20 rounded-2xl overflow-hidden">
                  <img src={doc.img} alt={doc.name} className="w-full h-full object-cover" referrerPolicy="no-referrer" />
                </div>
                <div className="flex-1 space-y-1">
                  <h5 className="font-bold text-slate-900">{doc.name}</h5>
                  <p className="text-[10px] text-slate-500">{doc.exp} • ⭐ {doc.rating}</p>
                  <p className="text-xs font-bold text-indigo-600">{doc.price}</p>
                </div>
                <button className="p-3 bg-indigo-600 text-white rounded-2xl shadow-lg shadow-indigo-100">
                  <Calendar size={20} />
                </button>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-slate-50 p-6 rounded-[32px] border border-slate-100 space-y-4">
          <h4 className="font-bold text-slate-900 text-sm">Why Couple Counseling?</h4>
          <div className="grid grid-cols-2 gap-3">
            {['Better Communication', 'Emotional Support', 'Conflict Resolution', 'Intimacy Building'].map((item, i) => (
              <div key={i} className="flex items-center gap-2">
                <div className="w-2 h-2 bg-pink-500 rounded-full" />
                <span className="text-[10px] font-bold text-slate-600 uppercase tracking-widest">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );

  return (
    <div className="w-full max-w-md mx-auto h-[800px] bg-white rounded-[48px] shadow-2xl overflow-hidden border-[8px] border-slate-900 relative">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-6 bg-slate-900 rounded-b-2xl z-50" />
      
      <AnimatePresence mode="wait">
        {currentScreen === 'onboarding' && renderOnboarding()}
        {currentScreen === 'login' && renderLogin()}
        {currentScreen === 'dashboard' && renderDashboard()}
        {currentScreen === 'medications' && renderMedications()}
        {currentScreen === 'medication-detail' && renderMedicationDetail()}
        {currentScreen === 'vitals' && renderVitals()}
        {currentScreen === 'vitals-success' && renderVitalsSuccess()}
        {currentScreen === 'ai-report' && renderAIReport()}
        {currentScreen === 'diet-routine' && renderDietRoutine()}
        {currentScreen === 'chatbot' && renderChatbot()}
        {currentScreen === 'pharmacy' && renderPharmacy()}
        {currentScreen === 'notifications' && renderNotifications()}
        {currentScreen === 'couple-counselor' && renderCoupleCounselor()}
      </AnimatePresence>
    </div>
  );
}
