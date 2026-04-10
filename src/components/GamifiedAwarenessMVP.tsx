import { useState, useEffect } from 'react';
import { 
  Trophy, 
  Target, 
  Zap, 
  Users, 
  Star, 
  ChevronRight, 
  ChevronLeft, 
  Gift, 
  Flame, 
  Activity, 
  Droplets, 
  Moon, 
  TrendingUp,
  Award,
  Shield,
  Search,
  Bell,
  User,
  ArrowRight,
  CheckCircle2,
  Lock,
  Smartphone,
  Sparkles,
  Heart,
  Timer,
  Calendar,
  Info,
  Share2,
  Brain,
  Dumbbell,
  Eye,
  Ear,
  Stethoscope,
  MapPin,
  Camera,
  BookOpen,
  Sparkle,
  Leaf,
  Coffee,
  Sun,
  Home
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { cn } from '../lib/utils';

type Screen = 
  | 'onboarding' 
  | 'dashboard' 
  | 'quest-detail'
  | 'calendar'
  | 'rewards'
  | 'aura-vision'
  | 'quiz'
  | 'community-walk' 
  | 'share-journey' 
  | 'notifications'
  | '100-day-challenge'
  | 'ai-board'
  | 'blogs'
  | 'leaderboard'
  | 'aura-engine'
  | 'heros-assessment'
  | 'tribe-raid'
  | 'proactive-alerts';

const AWARENESS_MONTHS = [
  { 
    month: 'January', 
    title: 'Cervical Health Awareness', 
    date: 'Jan 1-31', 
    icon: Shield, 
    color: 'bg-teal-500', 
    text: 'Empowering women through early detection and awareness.',
    events: [
      { date: '1-31', name: 'Cervical Health Awareness Month' },
      { date: '30', name: 'World Neglected Tropical Diseases Day' }
    ]
  },
  { 
    month: 'February', 
    title: 'World Cancer Day', 
    date: 'Feb 4', 
    icon: Heart, 
    color: 'bg-indigo-500', 
    text: 'Close the care gap. Everyone deserves access to cancer care.',
    events: [
      { date: '4', name: 'World Cancer Day' },
      { date: '10', name: 'International Epilepsy Day' },
      { date: '28', name: 'Rare Disease Day' }
    ]
  },
  { 
    month: 'March', 
    title: 'World Hearing Day', 
    date: 'Mar 3', 
    icon: Ear, 
    color: 'bg-emerald-500', 
    text: 'Ear and hearing care for all! Let’s make it a reality.',
    events: [
      { date: '3', name: 'World Hearing Day' },
      { date: '4', name: 'World Obesity Day' },
      { date: '24', name: 'World Tuberculosis Day' }
    ]
  },
  { 
    month: 'April', 
    title: 'World Health Day', 
    date: 'Apr 7', 
    icon: Stethoscope, 
    color: 'bg-sky-500', 
    text: 'My health, my right. Celebrating global health equity.',
    events: [
      { date: '7', name: 'World Health Day' },
      { date: '17', name: 'World Hemophilia Day' },
      { date: '19', name: 'World Liver Day' },
      { date: '25', name: 'World Malaria Day' }
    ]
  },
  { 
    month: 'May', 
    title: 'World Hypertension Day', 
    date: 'May 17', 
    icon: Activity, 
    color: 'bg-rose-500', 
    text: 'Measure your blood pressure accurately, control it, live longer.',
    events: [
      { date: '17', name: 'World Hypertension Day' },
      { date: '19', name: 'World Inflammatory Bowel Disease Day' },
      { date: '31', name: 'World No Tobacco Day' }
    ]
  },
  { 
    month: 'June', 
    title: 'International Day of Yoga', 
    date: 'Jun 21', 
    icon: Zap, 
    color: 'bg-amber-500', 
    text: 'Yoga for self and society. Harmony and peace through practice.',
    events: [
      { date: '14', name: 'World Blood Donor Day' },
      { date: '21', name: 'International Day of Yoga' }
    ]
  },
  { 
    month: 'July', 
    title: 'World Brain Day', 
    date: 'Jul 22', 
    icon: Brain, 
    color: 'bg-violet-500', 
    text: 'Brain health and disability. Leave no one behind.',
    events: [
      { date: '22', name: 'World Brain Day' },
      { date: '28', name: 'World Hepatitis Day' }
    ]
  },
  { 
    month: 'August', 
    title: 'Organ Donation Day', 
    date: 'Aug 13', 
    icon: Heart, 
    color: 'bg-red-500', 
    text: 'Be the reason for someone’s smile. Donate organs, save lives.',
    events: [
      { date: '1-7', name: 'World Breastfeeding Week' },
      { date: '13', name: 'World Organ Donation Day' }
    ]
  },
  { 
    month: 'September', 
    title: 'World Heart Day', 
    date: 'Sep 29', 
    icon: Activity, 
    color: 'bg-rose-600', 
    text: 'Use heart for every heart. Protecting our most vital organ.',
    events: [
      { date: '10', name: 'World Suicide Prevention Day' },
      { date: '28', name: 'World Rabies Day' },
      { date: '29', name: 'World Heart Day' }
    ]
  },
  { 
    month: 'October', 
    title: 'World Mental Health Day', 
    date: 'Oct 10', 
    icon: Brain, 
    color: 'bg-indigo-600', 
    text: 'Mental health is a universal human right.',
    events: [
      { date: '10', name: 'World Mental Health Day' },
      { date: '12', name: 'World Arthritis Day' },
      { date: '20', name: 'World Osteoporosis Day' }
    ]
  },
  { 
    month: 'November', 
    title: 'World Diabetes Day', 
    date: 'Nov 14', 
    icon: Droplets, 
    color: 'bg-blue-500', 
    text: 'Access to diabetes care. If not now, when?',
    events: [
      { date: '14', name: 'World Diabetes Day' },
      { date: '20', name: 'World Piles Day' }
    ]
  },
  { 
    month: 'December', 
    title: 'World AIDS Day', 
    date: 'Dec 1', 
    icon: Shield, 
    color: 'bg-red-600', 
    text: 'Let communities lead. Ending the epidemic together.',
    events: [
      { date: '1', name: 'World AIDS Day' },
      { date: '3', name: 'International Day of Persons with Disabilities' }
    ]
  },
];

export default function GamifiedAwarenessMVP() {
  const [currentScreen, setCurrentScreen] = useState<Screen>('dashboard');
  const [currentSlider, setCurrentSlider] = useState(0);
  const [xp, setXp] = useState(1200);
  const [level, setLevel] = useState(5);
  const [unlockedBadges, setUnlockedBadges] = useState<string[]>(['Jan-Badge']);
  const [quizStep, setQuizStep] = useState(0);
  const [walkActive, setWalkActive] = useState(false);
  const [walkDistance, setWalkDistance] = useState(0);
  const [storyText, setStoryText] = useState('');
  const [notifications, setNotifications] = useState([
    { id: 1, title: 'Quest Alert', desc: 'April Health Day quest is now active!', time: '2h ago', read: false },
    { id: 2, title: 'Badge Unlocked', desc: 'You earned the March Hearing Hero badge!', time: '1d ago', read: true },
    { id: 3, title: 'Tribe Update', desc: 'Your tribe reached 50k steps!', time: '3h ago', read: false },
  ]);
  const [selectedQuest, setSelectedQuest] = useState<any>(null);

  const [challenges, setChallenges] = useState([
    { id: 'quiz', title: 'Health Equity Quiz', desc: 'Test your knowledge on global health rights.', xp: 200, icon: Sparkles, color: 'bg-emerald-50', textColor: 'text-emerald-600', accent: 'emerald', progress: 1, total: 3, unit: 'steps' },
    { id: 'community-walk', title: 'Community Walk', desc: 'Walk 5km to support local health initiatives.', xp: 500, icon: Activity, color: 'bg-sky-50', textColor: 'text-sky-600', accent: 'sky', progress: 2.4, total: 5, unit: 'km' },
    { id: 'share-journey', title: 'Share Your Story', desc: 'Post a health tip to inspire others.', xp: 300, icon: Share2, color: 'bg-indigo-50', textColor: 'text-indigo-600', accent: 'indigo', progress: 0, total: 1, unit: 'post' },
  ]);

  const [challenge100Day, setChallenge100Day] = useState({
    currentDay: 42,
    totalDays: 100,
    photos: [],
    streak: 12,
  });

  const [aiRecommendations, setAiRecommendations] = useState([
    { type: 'Ayurveda', title: 'Spring Detox', desc: 'Incorporate bitter greens and warm ginger water to balance Kapha.', progress: 65, icon: Leaf, color: 'text-emerald-500' },
    { type: 'Diet', title: 'High Protein Morning', desc: 'Try sprouted moong dal for sustained energy.', progress: 40, icon: Coffee, color: 'text-amber-500' },
    { type: 'Exercise', title: 'Surya Namaskar', desc: 'Perform 12 rounds at sunrise for metabolic fire.', progress: 80, icon: Sun, color: 'text-orange-500' },
  ]);

  const [proactiveAlerts, setProactiveAlerts] = useState([
    { 
      id: 1, 
      type: 'Critical AQI Risk', 
      title: 'Respiratory Warning', 
      desc: 'High AQI (180+) detected in your area. Based on your history of asthma, we recommend staying indoors and using an air purifier.', 
      severity: 'high',
      icon: Droplets,
      color: 'text-rose-600',
      bgColor: 'bg-rose-50',
      borderColor: 'border-rose-100'
    },
    { 
      id: 2, 
      type: 'Sleep Pattern Shift', 
      title: 'Fatigue Prediction', 
      desc: 'Your sleep latency has increased by 20% over 3 days. Potential burnout risk detected. Schedule a rest day.', 
      severity: 'medium',
      icon: Moon,
      color: 'text-amber-600',
      bgColor: 'bg-amber-50',
      borderColor: 'border-amber-100'
    }
  ]);

  const [blogs, setBlogs] = useState([
    { id: 1, title: 'The Power of Ayurveda in Modern Life', author: 'Dr. Ananya', readTime: '5 min', progress: 30, category: 'Ayurveda', image: 'https://picsum.photos/seed/ayurveda/400/200' },
    { id: 2, title: '10 Exercises for a Stronger Core', author: 'Coach Mike', readTime: '8 min', progress: 0, category: 'Fitness', image: 'https://picsum.photos/seed/fitness/400/200' },
    { id: 3, title: 'Understanding Health Equity', author: 'Global Health Org', readTime: '12 min', progress: 100, category: 'Awareness', image: 'https://picsum.photos/seed/equity/400/200' },
  ]);

  const [leaderboard, setLeaderboard] = useState([
    { id: 1, name: 'Sarah Miller', xp: 4500, level: 12, avatar: 'SM', color: 'bg-amber-100 text-amber-600', rank: 1 },
    { id: 2, name: 'Alex Chen', xp: 4200, level: 11, avatar: 'AC', color: 'bg-slate-100 text-slate-600', rank: 2 },
    { id: 3, name: 'David Park', xp: 3900, level: 10, avatar: 'DP', color: 'bg-orange-100 text-orange-600', rank: 3 },
    { id: 4, name: 'You (Hero)', xp: 2450, level: 8, avatar: 'AH', color: 'bg-indigo-100 text-indigo-600', rank: 4 },
    { id: 5, name: 'Elena Rodriguez', xp: 2100, level: 7, avatar: 'ER', color: 'bg-slate-50 text-slate-400', rank: 5 },
  ]);

  const [auraStats, setAuraStats] = useState({
    mana: 75,
    vitality: 82,
    manaMax: 100,
    vitalityMax: 100,
    forestHealth: 64,
    bossHealth: 45,
    lootBoxes: 2,
  });

  const [showLootBox, setShowLootBox] = useState(false);
  const [lootBoxReward, setLootBoxReward] = useState<any>(null);
  const [showLevelUp, setShowLevelUp] = useState(false);

  const nextSlider = () => {
    if (currentSlider < AWARENESS_MONTHS.length - 1) {
      setCurrentSlider(prev => prev + 1);
    } else {
      setCurrentScreen('dashboard');
    }
  };

  const prevSlider = () => {
    if (currentSlider > 0) {
      setCurrentSlider(prev => prev - 1);
    }
  };

  const renderBottomNav = () => (
    <div className="fixed bottom-8 left-1/2 -translate-x-1/2 w-[90%] max-w-md bg-slate-900/90 backdrop-blur-xl border border-white/10 shadow-2xl rounded-full px-6 py-4 flex items-center justify-between z-20">
      <button onClick={() => setCurrentScreen('calendar')} className={cn("p-2 transition-colors", currentScreen === 'calendar' ? "text-indigo-400" : "text-slate-500")}>
        <Calendar size={22} />
      </button>
      <button onClick={() => setCurrentScreen('leaderboard')} className={cn("p-2 transition-colors", currentScreen === 'leaderboard' ? "text-indigo-400" : "text-slate-500")}>
        <Trophy size={22} />
      </button>
      <button onClick={() => setCurrentScreen('dashboard')} className="p-4 bg-indigo-600 text-white rounded-full -mt-12 shadow-xl shadow-indigo-900/50 hover:scale-110 transition-transform">
        <Home size={24} />
      </button>
      <button onClick={() => setCurrentScreen('aura-engine')} className={cn("p-2 transition-colors", currentScreen === 'aura-engine' ? "text-indigo-400" : "text-slate-500")}>
        <Zap size={22} />
      </button>
      <button onClick={() => setCurrentScreen('rewards')} className={cn("p-2 transition-colors", currentScreen === 'rewards' ? "text-indigo-400" : "text-slate-500")}>
        <Gift size={22} />
      </button>
    </div>
  );

  const renderOnboarding = () => (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="flex flex-col h-full bg-slate-900 text-white overflow-hidden"
    >
      <div className="flex-1 relative">
        <AnimatePresence mode="wait">
          <motion.div 
            key={currentSlider}
            initial={{ x: 300, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: -300, opacity: 0 }}
            transition={{ type: 'spring', damping: 20, stiffness: 100 }}
            className="absolute inset-0 flex flex-col items-center justify-center p-8 text-center space-y-8"
          >
            <div className={cn("w-48 h-48 rounded-full flex items-center justify-center shadow-2xl relative", AWARENESS_MONTHS[currentSlider].color)}>
              <div className="absolute inset-0 bg-white/10 rounded-full animate-pulse" />
              {(() => {
                const Icon = AWARENESS_MONTHS[currentSlider].icon;
                return <Icon size={80} className="text-white relative z-10" />;
              })()}
            </div>

            <div className="space-y-4">
              <div className="inline-block px-4 py-1 bg-white/10 rounded-full border border-white/20">
                <span className="text-xs font-bold uppercase tracking-widest text-indigo-300">
                  {AWARENESS_MONTHS[currentSlider].month}
                </span>
              </div>
              <h1 className="text-3xl font-black tracking-tighter leading-none">
                {AWARENESS_MONTHS[currentSlider].title}
              </h1>
              <p className="text-slate-400 text-sm leading-relaxed max-w-xs mx-auto">
                {AWARENESS_MONTHS[currentSlider].text}
              </p>
              
              <div className="pt-4 space-y-2">
                {AWARENESS_MONTHS[currentSlider].events.map((event, idx) => (
                  <div key={idx} className="flex items-center gap-3 bg-white/5 p-3 rounded-xl border border-white/10">
                    <div className="w-8 h-8 rounded-lg bg-white/10 flex items-center justify-center text-[10px] font-bold">
                      {event.date}
                    </div>
                    <span className="text-xs text-left font-medium">{event.name}</span>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      <div className="p-8 space-y-8 bg-slate-800/50 backdrop-blur-xl border-t border-white/5">
        <div className="flex justify-center gap-2">
          {AWARENESS_MONTHS.map((_, i) => (
            <div 
              key={i} 
              className={cn(
                "h-1.5 rounded-full transition-all duration-300",
                i === currentSlider ? "w-8 bg-indigo-500" : "w-1.5 bg-white/20"
              )} 
            />
          ))}
        </div>

        <div className="flex items-center justify-between">
          <button 
            onClick={prevSlider}
            className={cn(
              "p-4 rounded-2xl border border-white/10 text-slate-400 transition-all",
              currentSlider === 0 ? "opacity-0 pointer-events-none" : "hover:bg-white/5"
            )}
          >
            <ChevronLeft size={24} />
          </button>
          
          <button 
            onClick={nextSlider}
            className="px-8 py-4 bg-indigo-600 text-white rounded-2xl font-bold flex items-center gap-3 shadow-xl shadow-indigo-900/50 hover:bg-indigo-700 transition-all active:scale-95"
          >
            {currentSlider === AWARENESS_MONTHS.length - 1 ? 'Get Started' : 'Next'}
            <ArrowRight size={20} />
          </button>
        </div>

        <button 
          onClick={() => setCurrentScreen('dashboard')}
          className="w-full text-center text-xs font-bold text-slate-500 uppercase tracking-widest hover:text-white transition-colors"
        >
          Skip to Dashboard
        </button>
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
      <div className="bg-slate-900 p-6 pb-12 rounded-b-[40px] text-white space-y-8 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 bg-indigo-600/20 rounded-full -mr-32 -mt-32 blur-3xl" />
        
        <div className="flex items-center justify-between relative z-10">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-2xl bg-indigo-600 flex items-center justify-center border-2 border-indigo-400/30">
              <User size={24} />
            </div>
            <div>
              <h3 className="font-bold">Awareness Hero</h3>
              <p className="text-[10px] text-indigo-300 font-bold uppercase tracking-widest">Level {level} Advocate</p>
            </div>
          </div>
          <div className="flex gap-3">
            {proactiveAlerts.some(a => a.severity === 'high') && (
              <button 
                onClick={() => setCurrentScreen('proactive-alerts')}
                className="p-2 bg-rose-500/20 rounded-xl border border-rose-500/30 text-rose-500 animate-pulse"
              >
                <Shield size={20} />
              </button>
            )}
            <button 
              onClick={() => setCurrentScreen('notifications')}
              className="relative p-2 bg-white/10 rounded-xl border border-white/10"
            >
              <Bell size={20} />
              {notifications.some(n => !n.read) && (
                <span className="absolute top-1 right-1 w-2 h-2 bg-rose-500 rounded-full border border-slate-900" />
              )}
            </button>
            <button 
              onClick={() => setShowLevelUp(true)}
              className="bg-white/10 backdrop-blur-md px-3 py-1.5 rounded-full border border-white/10 flex items-center gap-2 active:scale-95 transition-transform"
            >
              <Zap size={14} className="text-amber-400 fill-amber-400" />
              <span className="text-xs font-bold">{xp} XP</span>
            </button>
          </div>
        </div>

        <div className="bg-white/5 backdrop-blur-md p-6 rounded-3xl border border-white/10 space-y-4 relative z-10">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-indigo-500 rounded-xl flex items-center justify-center">
                <Home size={20} className="text-white" />
              </div>
              <div>
                <h4 className="font-bold text-sm">Current Awareness</h4>
                <p className="text-[10px] text-indigo-300 uppercase font-bold">April: World Health Day</p>
              </div>
            </div>
            <div className="text-right">
              <span className="text-xs font-bold text-emerald-400">Active Now</span>
            </div>
          </div>
          <p className="text-xs text-slate-300 leading-relaxed">
            "My health, my right." Join the global movement for health equity. Complete this month's quest to earn the 'Health Guardian' badge.
          </p>
          <div className="flex gap-3">
            <button className="flex-1 py-3 bg-white text-slate-900 rounded-xl font-bold text-xs shadow-lg">
              Join April Quest
            </button>
            <button 
              onClick={() => setCurrentScreen('heros-assessment')}
              className="px-4 py-3 bg-indigo-600 text-white rounded-xl font-bold text-xs shadow-lg flex items-center gap-2"
            >
              <Shield size={14} />
              Assess
            </button>
          </div>
        </div>
      </div>

      <div className="p-6 -mt-8 space-y-8 relative z-10">
        {/* Monthly Badges */}
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <h4 className="font-bold text-slate-900">Your Awareness Badges</h4>
            <button className="text-xs font-bold text-indigo-600">View Collection</button>
          </div>
          <div className="flex gap-4 overflow-x-auto pb-2 scrollbar-hide">
            {AWARENESS_MONTHS.map((m, i) => {
              const isUnlocked = i < 4; // Mocking first 4 months as unlocked
              return (
                <div key={i} className="flex flex-col items-center gap-2 shrink-0">
                  <div className={cn(
                    "w-16 h-16 rounded-full flex items-center justify-center border-4 transition-all",
                    isUnlocked ? "bg-white border-indigo-500 shadow-lg" : "bg-slate-100 border-slate-200 grayscale opacity-40"
                  )}>
                    <m.icon size={24} className={isUnlocked ? "text-indigo-600" : "text-slate-400"} />
                  </div>
                  <span className={cn("text-[8px] font-bold uppercase tracking-widest", isUnlocked ? "text-indigo-600" : "text-slate-400")}>
                    {m.month.substring(0, 3)}
                  </span>
                </div>
              );
            })}
          </div>
        </div>

        {/* Quick Challenges */}
        <div className="bg-indigo-600 p-6 rounded-[32px] text-white space-y-4 shadow-xl shadow-indigo-200">
          <div className="flex items-center justify-between">
            <h4 className="font-bold">Aura Engine</h4>
            <button 
              onClick={() => setCurrentScreen('aura-engine')}
              className="px-4 py-1.5 bg-white/20 rounded-full text-[10px] font-bold uppercase tracking-widest backdrop-blur-md"
            >
              Enter Engine
            </button>
          </div>
          <p className="text-xs text-indigo-100 leading-relaxed">
            Your Bio-Avatar is ready. Heal the virtual forest and earn loot boxes.
          </p>
        </div>

        {/* Seasonal Wellness Guide */}
        <div className="bg-white p-6 rounded-[32px] border border-slate-100 shadow-sm space-y-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-amber-50 rounded-xl flex items-center justify-center text-amber-600">
              <Sparkles size={20} />
            </div>
            <div>
              <h4 className="font-bold text-sm text-slate-900">Seasonal Wellness Guide</h4>
              <p className="text-[10px] text-slate-500 uppercase font-bold tracking-widest">April • Spring Focus</p>
            </div>
          </div>
          <div className="p-4 bg-amber-50 rounded-2xl border border-amber-100">
            <p className="text-xs text-amber-900 leading-relaxed italic">
              "Spring is the season of renewal. Focus on liver health by incorporating bitter greens like dandelion or kale into your diet."
            </p>
          </div>
          <button className="w-full py-2 text-xs font-bold text-amber-600 hover:bg-amber-50 rounded-lg transition-colors">
            Read Full Guide
          </button>
        </div>

        {/* 100 Day Challenge & AI Board Quick Links */}
        <div className="grid grid-cols-2 gap-4">
          <div 
            onClick={() => setCurrentScreen('100-day-challenge')}
            className="bg-slate-900 p-6 rounded-[32px] text-white space-y-4 shadow-xl shadow-slate-200 cursor-pointer group overflow-hidden relative"
          >
            <div className="absolute top-0 right-0 w-24 h-24 bg-indigo-600/20 rounded-full -mr-12 -mt-12 blur-2xl group-hover:scale-150 transition-transform" />
            <div className="flex items-center justify-between relative z-10">
              <div className="w-10 h-10 bg-indigo-600 rounded-xl flex items-center justify-center">
                <Flame size={20} className="text-orange-400 fill-orange-400" />
              </div>
              <span className="text-[10px] font-black text-indigo-400">Day {challenge100Day.currentDay}</span>
            </div>
            <div className="relative z-10">
              <h4 className="font-bold text-sm">100 Day Challenge</h4>
              <p className="text-[10px] text-slate-400">Keep the streak alive!</p>
            </div>
            <div className="h-1 bg-white/10 rounded-full overflow-hidden relative z-10">
              <div className="h-full bg-orange-500" style={{ width: `${(challenge100Day.currentDay / challenge100Day.totalDays) * 100}%` }} />
            </div>
          </div>

          <div 
            onClick={() => setCurrentScreen('ai-board')}
            className="bg-white p-6 rounded-[32px] border border-slate-100 shadow-sm space-y-4 cursor-pointer group"
          >
            <div className="flex items-center justify-between">
              <div className="w-10 h-10 bg-emerald-50 rounded-xl flex items-center justify-center text-emerald-600">
                <Sparkle size={20} />
              </div>
              <span className="text-[10px] font-black text-emerald-600">AI Board</span>
            </div>
            <div>
              <h4 className="font-bold text-sm text-slate-900">Health AI</h4>
              <p className="text-[10px] text-slate-500">Personalized tips</p>
            </div>
            <div className="flex -space-x-2">
              {[Leaf, Coffee, Sun].map((Icon, i) => (
                <div key={i} className="w-6 h-6 rounded-full bg-slate-50 border border-white flex items-center justify-center">
                  <Icon size={12} className="text-slate-400" />
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Tribe Activity Feed */}
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <h4 className="font-bold text-slate-900">Tribe Activity</h4>
            <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Live</span>
          </div>
          <div className="space-y-3">
            {[
              { user: 'Sarah M.', action: 'completed Day 45', time: '2m ago', icon: Flame, color: 'text-orange-500' },
              { user: 'Alex C.', action: 'earned "Health Guardian"', time: '15m ago', icon: Award, color: 'text-indigo-500' },
            ].map((activity, i) => (
              <div key={i} className="bg-white p-4 rounded-2xl border border-slate-100 shadow-sm flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center text-[10px] font-bold">
                  {activity.user.split(' ')[0][0]}{activity.user.split(' ')[1][0]}
                </div>
                <div className="flex-1">
                  <p className="text-xs text-slate-900">
                    <span className="font-bold">{activity.user}</span> {activity.action}
                  </p>
                  <p className="text-[10px] text-slate-400">{activity.time}</p>
                </div>
                <activity.icon size={14} className={activity.color} />
              </div>
            ))}
          </div>
        </div>

        {/* Awareness Blogs */}
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <h4 className="font-bold text-slate-900">Awareness Blogs</h4>
            <button onClick={() => setCurrentScreen('blogs')} className="text-xs font-bold text-indigo-600">See All</button>
          </div>
          <div className="flex gap-4 overflow-x-auto pb-2 scrollbar-hide">
            {blogs.map((blog) => (
              <div 
                key={blog.id}
                onClick={() => setCurrentScreen('blogs')}
                className="w-64 shrink-0 bg-white rounded-[32px] border border-slate-100 shadow-sm overflow-hidden group cursor-pointer"
              >
                <div className="h-32 relative overflow-hidden">
                  <img src={blog.image} alt={blog.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" referrerPolicy="no-referrer" />
                  <div className="absolute top-3 left-3 px-3 py-1 bg-white/90 backdrop-blur-md rounded-full text-[8px] font-black uppercase tracking-widest text-slate-900">
                    {blog.category}
                  </div>
                </div>
                <div className="p-4 space-y-2">
                  <h5 className="font-bold text-slate-900 text-xs line-clamp-1">{blog.title}</h5>
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] text-slate-500">{blog.readTime} read</span>
                    <div className="flex items-center gap-1">
                      <div className="w-12 h-1 bg-slate-100 rounded-full overflow-hidden">
                        <div className="h-full bg-indigo-500" style={{ width: `${blog.progress}%` }} />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Active Challenges */}
        <div className="space-y-4">
          <h4 className="font-bold text-slate-900">Active Challenges</h4>
          <div className="space-y-4">
            {challenges.map((challenge, i) => (
              <div 
                key={i} 
                onClick={() => {
                  setSelectedQuest(challenge);
                  setCurrentScreen('quest-detail');
                }}
                className="bg-white p-5 rounded-[32px] border border-slate-100 shadow-sm space-y-4 group hover:border-indigo-200 transition-all cursor-pointer"
              >
                <div className="flex items-center gap-4">
                  <div className={cn("w-12 h-12 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform", challenge.color, challenge.textColor)}>
                    <challenge.icon size={24} />
                  </div>
                  <div className="flex-1">
                    <h5 className="font-bold text-slate-900 text-sm">{challenge.title}</h5>
                    <p className="text-[10px] text-slate-500">{challenge.desc}</p>
                  </div>
                  <div className="text-right">
                    <span className="text-xs font-bold text-indigo-600">+{challenge.xp} XP</span>
                  </div>
                </div>

                {/* Progress Bar */}
                <div className="space-y-2">
                  <div className="flex justify-between items-end">
                    <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Progress</span>
                    <span className="text-[10px] font-black text-slate-900">
                      {challenge.progress}/{challenge.total} {challenge.unit}
                    </span>
                  </div>
                  <div className="h-2 bg-slate-100 rounded-full overflow-hidden">
                    <motion.div 
                      initial={{ width: 0 }}
                      animate={{ width: `${(challenge.progress / challenge.total) * 100}%` }}
                      className={cn("h-full rounded-full", 
                        challenge.accent === 'emerald' ? 'bg-emerald-500' :
                        challenge.accent === 'sky' ? 'bg-sky-500' :
                        'bg-indigo-500'
                      )}
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Upcoming Events */}
        <div className="bg-white p-6 rounded-[32px] border border-slate-100 shadow-sm space-y-4">
          <div className="flex items-center justify-between">
            <h4 className="font-bold text-slate-900">Upcoming Awareness</h4>
            <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Next Month</span>
          </div>
          <div className="flex items-center gap-4 p-4 bg-rose-50 rounded-2xl border border-rose-100">
            <div className="w-12 h-12 bg-rose-500 rounded-xl flex items-center justify-center text-white">
              <Activity size={24} />
            </div>
            <div>
              <h5 className="font-bold text-rose-900 text-sm">World Hypertension Day</h5>
              <p className="text-[10px] text-rose-600 font-medium">May 17 • Get ready to measure!</p>
            </div>
            <button className="ml-auto p-2 bg-white text-rose-500 rounded-lg shadow-sm">
              <Bell size={16} />
            </button>
          </div>
        </div>
      </div>

      {/* Bottom Nav */}
      {renderBottomNav()}
    </motion.div>
  );

  const render100DayChallenge = () => (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="flex flex-col h-full bg-slate-950 text-white overflow-y-auto pb-32">
      <div className="p-6 flex items-center justify-between bg-slate-900 border-b border-white/5 sticky top-0 z-10">
        <button onClick={() => setCurrentScreen('dashboard')} className="p-2 -ml-2 text-slate-400"><ChevronLeft size={24} /></button>
        <h3 className="font-bold text-indigo-400 tracking-widest uppercase text-xs">100 Day Challenge</h3>
        <div className="w-10" />
      </div>

      <div className="p-8 space-y-8">
        {/* Progress Circle */}
        <div className="relative w-48 h-48 mx-auto flex items-center justify-center">
          <svg className="w-full h-full -rotate-90">
            <circle cx="96" cy="96" r="88" className="stroke-white/5 fill-none stroke-[8]" />
            <motion.circle 
              cx="96" cy="96" r="88" 
              className="stroke-orange-500 fill-none stroke-[8]" 
              strokeDasharray="553"
              initial={{ strokeDashoffset: 553 }}
              animate={{ strokeDashoffset: 553 - (553 * challenge100Day.currentDay) / 100 }}
              transition={{ duration: 1.5, ease: "easeOut" }}
            />
          </svg>
          <div className="absolute inset-0 flex flex-col items-center justify-center">
            <span className="text-4xl font-black">{challenge100Day.currentDay}</span>
            <span className="text-[10px] font-bold text-slate-500 uppercase tracking-widest">Day / 100</span>
          </div>
        </div>

        <div className="bg-white/5 border border-white/10 p-6 rounded-[32px] space-y-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-orange-500/20 rounded-xl flex items-center justify-center text-orange-500">
                <Flame size={20} />
              </div>
              <div>
                <h4 className="font-bold text-sm">Current Streak</h4>
                <p className="text-[10px] text-slate-400">{challenge100Day.streak} Days Strong</p>
              </div>
            </div>
            <button className="p-2 bg-white/10 rounded-lg text-slate-400 shadow-sm">
              <Share2 size={16} />
            </button>
          </div>
        </div>

        {/* AI Health Board Integration */}
        <div className="bg-white/5 border border-white/10 p-6 rounded-[32px] space-y-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-emerald-500/20 rounded-xl flex items-center justify-center text-emerald-400">
                <Sparkle size={20} />
              </div>
              <h4 className="font-bold text-sm">AI Health Board</h4>
            </div>
            <button 
              onClick={() => setCurrentScreen('ai-board')}
              className="text-[10px] font-black text-indigo-400 uppercase tracking-widest"
            >
              View All
            </button>
          </div>
          <div className="space-y-3">
            {aiRecommendations.slice(0, 2).map((rec, i) => (
              <div key={i} className="flex items-center gap-3 p-3 bg-white/5 rounded-2xl border border-white/5">
                <rec.icon size={16} className={rec.color} />
                <div className="flex-1">
                  <p className="text-[10px] font-bold text-slate-300">{rec.title}</p>
                  <div className="h-1 bg-white/10 rounded-full mt-1 overflow-hidden">
                    <div className={cn("h-full", rec.color.replace('text-', 'bg-'))} style={{ width: `${rec.progress}%` }} />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Morning Photo Upload & Gallery */}
        <div className="space-y-4">
          <div className="flex items-center justify-between px-2">
            <h4 className="font-bold text-slate-200">Morning Rituals</h4>
            <span className="text-[10px] font-bold text-slate-500">{challenge100Day.photos.length || 12} Photos</span>
          </div>
          
          <div className="grid grid-cols-2 gap-4">
            <div className="aspect-square bg-white/5 border-2 border-dashed border-white/10 rounded-[32px] flex flex-col items-center justify-center gap-2 group cursor-pointer hover:border-indigo-500/50 transition-all">
              <div className="w-10 h-10 bg-indigo-600/20 rounded-full flex items-center justify-center text-indigo-400 group-hover:scale-110 transition-transform">
                <Camera size={20} />
              </div>
              <p className="text-[10px] font-bold text-slate-400">Add Today</p>
            </div>
            
            {/* Sample Gallery Photos */}
            {[1, 2, 3].map((i) => (
              <div key={i} className="aspect-square rounded-[32px] overflow-hidden relative group">
                <img 
                  src={`https://picsum.photos/seed/morning${i}/300/300`} 
                  alt="Morning ritual" 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-4">
                  <span className="text-[8px] font-bold text-white uppercase tracking-widest">Day {challenge100Day.currentDay - i}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Social Share */}
        <div className="bg-indigo-600 p-6 rounded-[32px] space-y-4 shadow-xl shadow-indigo-900/20">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-white/20 rounded-xl flex items-center justify-center">
              <Users size={20} />
            </div>
            <h4 className="font-bold text-sm">Share with Tribe</h4>
          </div>
          <p className="text-xs text-indigo-100 leading-relaxed">Let your community know you've completed Day {challenge100Day.currentDay}!</p>
          <button className="w-full py-3 bg-white text-indigo-600 rounded-xl font-bold text-xs shadow-lg">
            Share on Social Media
          </button>
        </div>
      </div>
    </motion.div>
  );

  const renderProactiveAlerts = () => (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="flex flex-col h-full bg-slate-50 overflow-y-auto pb-32">
      <div className="p-6 flex items-center justify-between bg-white border-b border-slate-100 sticky top-0 z-10">
        <button onClick={() => setCurrentScreen('ai-board')} className="p-2 -ml-2 bg-slate-50 rounded-xl"><ChevronLeft size={20} /></button>
        <h3 className="font-bold text-slate-900">Predictive Health Alerts</h3>
        <div className="w-10" />
      </div>

      <div className="p-6 space-y-6">
        <div className="bg-indigo-600 p-6 rounded-[32px] text-white space-y-2 shadow-xl shadow-indigo-100">
          <div className="flex items-center gap-2">
            <Sparkles size={18} className="text-indigo-200" />
            <h4 className="font-bold">AI Predictive Engine</h4>
          </div>
          <p className="text-xs text-indigo-100 leading-relaxed">
            Our AI analyzes environmental data and your health history to flag potential risks before they become critical.
          </p>
        </div>

        <div className="space-y-4">
          {proactiveAlerts.map((alert) => (
            <div key={alert.id} className={cn("p-6 rounded-[32px] border space-y-4", alert.bgColor, alert.borderColor)}>
              <div className="flex items-start justify-between">
                <div className="flex items-center gap-3">
                  <div className={cn("w-10 h-10 rounded-xl flex items-center justify-center bg-white shadow-sm", alert.color)}>
                    <alert.icon size={20} />
                  </div>
                  <div>
                    <span className={cn("text-[8px] font-black uppercase tracking-widest", alert.color)}>{alert.type}</span>
                    <h5 className="font-bold text-slate-900 text-sm">{alert.title}</h5>
                  </div>
                </div>
                <div className={cn("px-2 py-1 rounded-full text-[8px] font-black uppercase tracking-widest", 
                  alert.severity === 'high' ? "bg-rose-100 text-rose-600" : "bg-amber-100 text-amber-600"
                )}>
                  {alert.severity} Priority
                </div>
              </div>
              <p className="text-xs text-slate-600 leading-relaxed">{alert.desc}</p>
              <div className="flex gap-2 pt-2">
                <button className="flex-1 py-3 bg-white border border-slate-200 rounded-xl text-[10px] font-bold text-slate-600">Dismiss</button>
                <button className={cn("flex-1 py-3 rounded-xl text-[10px] font-bold text-white shadow-lg", 
                  alert.severity === 'high' ? "bg-rose-600 shadow-rose-900/20" : "bg-amber-600 shadow-amber-900/20"
                )}>Take Action</button>
              </div>
            </div>
          ))}
        </div>

        {/* System Logic Explanation */}
        <div className="p-6 bg-white rounded-[32px] border border-slate-100 space-y-4">
          <h4 className="text-xs font-bold text-slate-400 uppercase tracking-widest">How it works</h4>
          <div className="space-y-3">
            <div className="flex items-start gap-3">
              <div className="w-6 h-6 bg-slate-100 rounded-lg flex items-center justify-center text-slate-500 mt-0.5">
                <Activity size={12} />
              </div>
              <p className="text-[10px] text-slate-500 leading-relaxed">
                <span className="text-slate-900 font-bold">Data Integration:</span> Syncs with local AQI sensors, wearable vitals, and self-reported history.
              </p>
            </div>
            <div className="flex items-start gap-3">
              <div className="w-6 h-6 bg-slate-100 rounded-lg flex items-center justify-center text-slate-500 mt-0.5">
                <Brain size={12} />
              </div>
              <p className="text-[10px] text-slate-500 leading-relaxed">
                <span className="text-slate-900 font-bold">Risk Prediction:</span> Uses pattern matching to identify correlations between environment and symptoms.
              </p>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );

  const renderAIBoard = () => (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="flex flex-col h-full bg-slate-50 overflow-y-auto pb-32">
      <div className="p-6 flex items-center justify-between bg-white border-b border-slate-100 sticky top-0 z-10">
        <button onClick={() => setCurrentScreen('dashboard')} className="p-2 -ml-2 bg-slate-50 rounded-xl"><ChevronLeft size={20} /></button>
        <h3 className="font-bold text-slate-900">Health AI Board</h3>
        <div className="w-10" />
      </div>

      <div className="p-6 space-y-8">
        {/* Ayurvedic Seasonal Recommendation */}
        <div className="bg-emerald-600 p-8 rounded-[40px] text-white space-y-6 relative overflow-hidden shadow-xl shadow-emerald-100">
          <div className="absolute top-0 right-0 w-48 h-48 bg-white/10 rounded-full -mr-24 -mt-24 blur-3xl" />
          <div className="flex items-center gap-3 relative z-10">
            <div className="w-12 h-12 bg-white/20 rounded-2xl flex items-center justify-center">
              <Leaf size={28} />
            </div>
            <div>
              <h4 className="font-bold text-lg">Ayurvedic Insights</h4>
              <p className="text-[10px] text-emerald-100 uppercase font-bold tracking-widest">Season: Spring (Vasant)</p>
            </div>
          </div>
          <p className="text-sm text-emerald-50 leading-relaxed relative z-10">
            Spring is the time of Kapha accumulation. Focus on light, warm, and dry foods. Avoid heavy dairy and cold drinks.
          </p>
          <div className="pt-4 border-t border-white/10 relative z-10">
            <div className="flex justify-between items-end mb-2">
              <span className="text-[10px] font-bold uppercase tracking-widest">Seasonal Alignment</span>
              <span className="text-xs font-black">75%</span>
            </div>
            <div className="h-2 bg-white/20 rounded-full overflow-hidden">
              <div className="h-full bg-white" style={{ width: '75%' }} />
            </div>
          </div>
        </div>

        {/* Predictive Health Alerts Section */}
        <div className="bg-white p-6 rounded-[32px] border border-slate-100 shadow-sm space-y-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-rose-50 rounded-xl flex items-center justify-center text-rose-600">
                <Bell size={20} />
              </div>
              <div>
                <h4 className="font-bold text-sm text-slate-900">Predictive Alerts</h4>
                <p className="text-[10px] text-slate-500 uppercase font-bold tracking-widest">AI Risk Engine</p>
              </div>
            </div>
            <button 
              onClick={() => setCurrentScreen('proactive-alerts')}
              className="px-4 py-1.5 bg-rose-600 text-white rounded-full text-[10px] font-bold uppercase tracking-widest shadow-lg shadow-rose-900/20"
            >
              Check Risks
            </button>
          </div>
          <div className="p-4 bg-rose-50 rounded-2xl border border-rose-100 flex items-center gap-3">
            <div className="w-2 h-2 bg-rose-500 rounded-full animate-pulse" />
            <p className="text-[10px] text-rose-900 font-medium">
              1 High Priority Risk detected: <span className="font-bold">AQI Exposure Alert</span>
            </p>
          </div>
        </div>

        {/* AI Recommendations List */}
        <div className="space-y-4">
          <h4 className="font-bold text-slate-900 px-2">Personalized Recommendations</h4>
          <div className="space-y-4">
            {aiRecommendations.map((rec, i) => (
              <div key={i} className="bg-white p-6 rounded-[32px] border border-slate-100 shadow-sm space-y-4 group">
                <div className="flex items-center gap-4">
                  <div className={cn("w-12 h-12 rounded-2xl bg-slate-50 flex items-center justify-center transition-transform group-hover:scale-110", rec.color)}>
                    <rec.icon size={24} />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center justify-between mb-1">
                      <span className={cn("text-[8px] font-black uppercase tracking-widest", rec.color)}>{rec.type}</span>
                      <span className="text-[10px] font-bold text-slate-400">Daily Tip</span>
                    </div>
                    <h5 className="font-bold text-slate-900 text-sm">{rec.title}</h5>
                  </div>
                </div>
                <p className="text-[10px] text-slate-500 leading-relaxed">{rec.desc}</p>
                <div className="space-y-2">
                  <div className="flex justify-between items-end">
                    <span className="text-[8px] font-bold text-slate-400 uppercase tracking-widest">Implementation</span>
                    <span className="text-[10px] font-black text-slate-900">{rec.progress}%</span>
                  </div>
                  <div className="h-1.5 bg-slate-100 rounded-full overflow-hidden">
                    <div className={cn("h-full rounded-full", rec.color.replace('text-', 'bg-'))} style={{ width: `${rec.progress}%` }} />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );

  const renderBlogs = () => (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="flex flex-col h-full bg-slate-50 overflow-y-auto pb-32">
      <div className="p-6 flex items-center justify-between bg-white border-b border-slate-100 sticky top-0 z-10">
        <button onClick={() => setCurrentScreen('dashboard')} className="p-2 -ml-2 bg-slate-50 rounded-xl"><ChevronLeft size={20} /></button>
        <h3 className="font-bold text-slate-900">Awareness Blogs</h3>
        <div className="w-10" />
      </div>

      <div className="p-6 space-y-6">
        {blogs.map((blog) => (
          <div key={blog.id} className="bg-white rounded-[40px] border border-slate-100 shadow-sm overflow-hidden group cursor-pointer">
            <div className="h-48 relative overflow-hidden">
              <img src={blog.image} alt={blog.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" referrerPolicy="no-referrer" />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent" />
              <div className="absolute bottom-6 left-6 right-6">
                <div className="px-3 py-1 bg-white/20 backdrop-blur-md rounded-full text-[8px] font-black uppercase tracking-widest text-white inline-block mb-2">
                  {blog.category}
                </div>
                <h4 className="text-lg font-bold text-white leading-tight">{blog.title}</h4>
              </div>
            </div>
            <div className="p-6 space-y-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="w-6 h-6 rounded-full bg-slate-100" />
                  <span className="text-[10px] font-bold text-slate-600">{blog.author}</span>
                </div>
                <span className="text-[10px] text-slate-400">{blog.readTime} read</span>
              </div>
              <div className="space-y-2">
                <div className="flex justify-between items-end">
                  <span className="text-[8px] font-bold text-slate-400 uppercase tracking-widest">Reading Progress</span>
                  <span className="text-[10px] font-black text-indigo-600">{blog.progress}%</span>
                </div>
                <div className="h-1.5 bg-slate-100 rounded-full overflow-hidden">
                  <div className="h-full bg-indigo-500" style={{ width: `${blog.progress}%` }} />
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </motion.div>
  );
  const renderQuiz = () => {
    const questions = [
      { q: "What is Health Equity?", a: ["Equal access for all", "Better care for rich", "Free medicine for some"], correct: 0 },
      { q: "Why is it important?", a: ["To save money", "Human right", "To win prizes"], correct: 1 },
      { q: "How can you help?", a: ["Ignore issues", "Raise awareness", "Do nothing"], correct: 1 }
    ];

    const handleAnswer = (idx: number) => {
      if (idx === questions[quizStep].correct) {
        if (quizStep < questions.length - 1) {
          setQuizStep(quizStep + 1);
        } else {
          setXp(xp + 200);
          setCurrentScreen('dashboard');
          setQuizStep(0);
        }
      }
    };

    return (
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="flex flex-col h-full bg-white p-6 space-y-8">
        <div className="flex items-center justify-between">
          <button onClick={() => setCurrentScreen('dashboard')} className="p-2 bg-slate-100 rounded-xl"><ChevronLeft size={20} /></button>
          <h3 className="font-bold text-slate-900">Health Equity Quiz</h3>
          <div className="w-10" />
        </div>

        <div className="space-y-6">
          <div className="h-2 bg-slate-100 rounded-full overflow-hidden">
            <motion.div 
              className="h-full bg-indigo-600" 
              initial={{ width: 0 }} 
              animate={{ width: `${((quizStep + 1) / questions.length) * 100}%` }} 
            />
          </div>

          <div className="space-y-4">
            <h4 className="text-xl font-black text-slate-900 leading-tight">{questions[quizStep].q}</h4>
            <div className="grid gap-3">
              {questions[quizStep].a.map((ans, i) => (
                <button 
                  key={i}
                  onClick={() => handleAnswer(i)}
                  className="w-full p-4 text-left bg-slate-50 border border-slate-100 rounded-2xl font-bold text-slate-700 hover:bg-indigo-50 hover:border-indigo-200 transition-all"
                >
                  {ans}
                </button>
              ))}
            </div>
          </div>
        </div>
      </motion.div>
    );
  };

  const renderCommunityWalk = () => (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="flex flex-col h-full bg-slate-50">
      <div className="p-6 bg-white border-b border-slate-100 flex items-center justify-between">
        <button onClick={() => setCurrentScreen('dashboard')} className="p-2 bg-slate-50 rounded-xl"><ChevronLeft size={20} /></button>
        <h3 className="font-bold text-slate-900">Community Walk</h3>
        <div className="w-10" />
      </div>

      <div className="flex-1 p-6 space-y-6 overflow-y-auto">
        <div className="bg-white p-6 rounded-[32px] border border-slate-100 shadow-sm space-y-4">
          <div className="h-48 bg-slate-100 rounded-2xl flex items-center justify-center relative overflow-hidden">
            <div className="absolute inset-0 bg-[url('https://picsum.photos/seed/map/400/300')] bg-cover opacity-50" />
            <div className="relative z-10 flex flex-col items-center gap-2">
              <MapPin size={32} className="text-indigo-600" />
              <span className="text-xs font-bold text-slate-600">Gurgaon Central Park</span>
            </div>
          </div>

          <div className="flex justify-between items-center">
            <div>
              <h4 className="font-bold text-slate-900">Walk for Health Equity</h4>
              <p className="text-xs text-slate-500">Goal: 5.0 km • 500 XP</p>
            </div>
            <div className="text-right">
              <span className="text-2xl font-black text-indigo-600">{walkDistance.toFixed(1)}</span>
              <span className="text-[10px] font-bold text-slate-400 block uppercase">km done</span>
            </div>
          </div>

          <button 
            onClick={() => setWalkActive(!walkActive)}
            className={cn(
              "w-full py-4 rounded-2xl font-bold text-sm transition-all shadow-lg",
              walkActive ? "bg-rose-500 text-white" : "bg-indigo-600 text-white"
            )}
          >
            {walkActive ? 'Stop Walk' : 'Start Walk'}
          </button>
        </div>

        <div className="space-y-4">
          <h4 className="font-bold text-slate-900">Participants</h4>
          <div className="flex -space-x-3 overflow-hidden">
            {[1,2,3,4,5].map(i => (
              <img key={i} className="inline-block h-10 w-10 rounded-full ring-2 ring-white" src={`https://i.pravatar.cc/150?u=${i}`} alt="" />
            ))}
            <div className="flex items-center justify-center h-10 w-10 rounded-full bg-slate-100 ring-2 ring-white text-[10px] font-bold text-slate-500">+12</div>
          </div>
        </div>
      </div>
    </motion.div>
  );

  const renderHerosAssessment = () => {
    const [step, setStep] = useState(0);
    const questions = [
      { q: "How many hours of sleep did you get last night?", options: ["< 5h", "5-7h", "7-9h", "9h+"], icon: Moon },
      { q: "What was your primary mood today?", options: ["Stressed", "Neutral", "Focused", "Energetic"], icon: Brain },
      { q: "How much water have you consumed?", options: ["< 1L", "1-2L", "2-3L", "3L+"], icon: Droplets },
    ];

    const handleOption = () => {
      if (step < questions.length - 1) {
        setStep(step + 1);
      } else {
        setXp(xp + 150);
        setAuraStats(prev => ({ ...prev, vitality: Math.min(100, prev.vitality + 5) }));
        setCurrentScreen('dashboard');
      }
    };

    return (
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="flex flex-col h-full bg-slate-950 text-white p-8 space-y-12">
        <div className="space-y-2 text-center">
          <h2 className="text-2xl font-black text-indigo-400 tracking-tight uppercase">Hero's Assessment</h2>
          <p className="text-[10px] text-slate-500 font-bold uppercase tracking-[0.2em]">Calibrating Bio-Avatar</p>
        </div>

        <div className="flex-1 flex flex-col justify-center space-y-12">
          <div className="flex flex-col items-center space-y-6">
            <div className="w-20 h-20 bg-indigo-600/20 rounded-3xl flex items-center justify-center text-indigo-400 shadow-xl shadow-indigo-900/20">
              {(() => {
                const Icon = questions[step].icon;
                return <Icon size={40} />;
              })()}
            </div>
            <h3 className="text-xl font-bold text-center leading-tight">{questions[step].q}</h3>
          </div>

          <div className="grid gap-4">
            {questions[step].options.map((opt, i) => (
              <button 
                key={i}
                onClick={handleOption}
                className="w-full py-5 bg-white/5 border border-white/10 rounded-2xl font-bold text-sm hover:bg-indigo-600 hover:border-indigo-500 transition-all active:scale-95"
              >
                {opt}
              </button>
            ))}
          </div>
        </div>

        <div className="flex justify-center gap-2">
          {questions.map((_, i) => (
            <div key={i} className={cn("h-1 rounded-full transition-all", i === step ? "w-8 bg-indigo-500" : "w-2 bg-white/10")} />
          ))}
        </div>
      </motion.div>
    );
  };
  const renderLevelUpModal = () => (
    <AnimatePresence>
      {showLevelUp && (
        <div className="fixed inset-0 z-[110] flex items-center justify-center p-6">
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="absolute inset-0 bg-indigo-950/90 backdrop-blur-2xl"
          />
          
          <motion.div 
            initial={{ scale: 0.5, opacity: 0, rotate: -10 }}
            animate={{ scale: 1, opacity: 1, rotate: 0 }}
            exit={{ scale: 0.5, opacity: 0, rotate: 10 }}
            className="relative w-full max-w-sm text-center space-y-8"
          >
            <div className="relative">
              <motion.div 
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                className="absolute inset-0 flex items-center justify-center"
              >
                <div className="w-64 h-64 border-4 border-dashed border-indigo-400/30 rounded-full" />
              </motion.div>
              
              <motion.div 
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="w-32 h-32 mx-auto bg-indigo-600 rounded-[40px] flex items-center justify-center border-4 border-indigo-400 shadow-[0_0_50px_rgba(99,102,241,0.8)] relative z-10"
              >
                <Award size={64} className="text-white" />
              </motion.div>
            </div>

            <div className="space-y-2">
              <h2 className="text-4xl font-black text-white uppercase tracking-tighter italic">Level Up!</h2>
              <p className="text-indigo-300 font-bold uppercase tracking-[0.3em] text-xs">You reached Level {level + 1}</p>
            </div>

            <div className="bg-white/10 backdrop-blur-md p-6 rounded-[32px] border border-white/20 space-y-4">
              <p className="text-sm text-indigo-100">New Unlocks:</p>
              <div className="flex justify-center gap-4">
                <div className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center text-amber-400">
                  <Gift size={24} />
                </div>
                <div className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center text-sky-400">
                  <Shield size={24} />
                </div>
              </div>
            </div>

            <button 
              onClick={() => {
                setLevel(level + 1);
                setShowLevelUp(false);
              }}
              className="w-full py-5 bg-white text-indigo-900 rounded-2xl font-black text-sm shadow-2xl active:scale-95 transition-transform"
            >
              Continue Journey
            </button>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );

  const renderLootBoxModal = () => (
    <AnimatePresence>
      {showLootBox && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-6">
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="absolute inset-0 bg-slate-950/90 backdrop-blur-xl"
            onClick={() => !lootBoxReward && setShowLootBox(false)}
          />
          
          <motion.div 
            initial={{ scale: 0.8, opacity: 0, y: 20 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.8, opacity: 0, y: 20 }}
            className="relative w-full max-w-sm bg-slate-900 border border-white/10 rounded-[48px] p-8 text-center space-y-8 shadow-2xl"
          >
            {!lootBoxReward ? (
              <>
                <div className="space-y-2">
                  <h3 className="text-2xl font-black text-indigo-400 uppercase tracking-tight">Health Loot Box</h3>
                  <p className="text-xs text-slate-500 font-bold uppercase tracking-widest">Tap to reveal your reward</p>
                </div>
                
                <motion.div 
                  animate={{ 
                    y: [0, -10, 0],
                    rotate: [0, 5, -5, 0]
                  }}
                  transition={{ duration: 2, repeat: Infinity }}
                  onClick={() => {
                    setLootBoxReward({ xp: 500, item: 'Vitality Elixir' });
                    setXp(xp + 500);
                    setAuraStats(prev => ({ ...prev, lootBoxes: prev.lootBoxes - 1 }));
                  }}
                  className="w-48 h-48 mx-auto bg-indigo-600 rounded-[40px] flex items-center justify-center border-4 border-indigo-400 shadow-xl shadow-indigo-900/40 cursor-pointer active:scale-90 transition-transform"
                >
                  <Gift size={80} className="text-white" />
                </motion.div>
              </>
            ) : (
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="space-y-8"
              >
                <div className="w-24 h-24 mx-auto bg-emerald-500 rounded-3xl flex items-center justify-center shadow-xl shadow-emerald-900/40">
                  <Sparkles size={48} className="text-white" />
                </div>
                <div className="space-y-2">
                  <h3 className="text-3xl font-black text-white uppercase tracking-tight">Success!</h3>
                  <p className="text-sm text-slate-400">You unlocked a <span className="text-emerald-400 font-bold">{lootBoxReward.item}</span></p>
                </div>
                <div className="bg-white/5 border border-white/10 p-4 rounded-2xl">
                  <span className="text-2xl font-black text-indigo-400">+{lootBoxReward.xp} XP</span>
                </div>
                <button 
                  onClick={() => {
                    setShowLootBox(false);
                    setLootBoxReward(null);
                  }}
                  className="w-full py-4 bg-indigo-600 text-white rounded-2xl font-bold text-sm shadow-lg shadow-indigo-900/40"
                >
                  Claim Reward
                </button>
              </motion.div>
            )}
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );

  const renderTribeRaid = () => (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="flex flex-col h-full bg-slate-950 text-white overflow-y-auto pb-32">
      <div className="p-6 flex items-center justify-between bg-slate-900 border-b border-white/5 sticky top-0 z-10">
        <button onClick={() => setCurrentScreen('dashboard')} className="p-2 -ml-2 text-slate-400"><ChevronLeft size={24} /></button>
        <h3 className="font-bold text-rose-400 tracking-widest uppercase text-xs">Weekly Raid: The Sloth King</h3>
        <div className="w-10" />
      </div>

      <div className="p-8 space-y-8">
        {/* Boss HP Bar */}
        <div className="space-y-2">
          <div className="flex justify-between items-end">
            <span className="text-xs font-black text-rose-500 uppercase tracking-widest">Boss Health</span>
            <span className="text-sm font-black">{auraStats.bossHealth}%</span>
          </div>
          <div className="h-4 bg-white/5 rounded-full overflow-hidden border border-white/10">
            <motion.div 
              initial={{ width: '100%' }}
              animate={{ width: `${auraStats.bossHealth}%` }}
              className="h-full bg-rose-600 shadow-[0_0_20px_rgba(225,29,72,0.5)]"
            />
          </div>
        </div>

        {/* Boss Visual */}
        <div className="aspect-square bg-gradient-to-b from-rose-500/10 to-transparent rounded-[48px] border border-white/5 flex items-center justify-center relative overflow-hidden">
          <motion.div 
            animate={{ 
              scale: [1, 1.05, 1],
              rotate: [0, 2, -2, 0]
            }}
            transition={{ duration: 4, repeat: Infinity }}
            className="relative z-10"
          >
            <div className="w-48 h-48 bg-slate-800 rounded-full flex items-center justify-center border-8 border-rose-500/30">
              <Activity size={80} className="text-rose-500 opacity-80" />
            </div>
          </motion.div>
          
          {/* Damage Particles (Simulated) */}
          <AnimatePresence>
            {auraStats.bossHealth < 100 && (
              <motion.div 
                initial={{ opacity: 0, y: 0 }}
                animate={{ opacity: 1, y: -50 }}
                exit={{ opacity: 0 }}
                className="absolute top-1/2 left-1/2 -translate-x-1/2 text-rose-400 font-black text-2xl"
              >
                -12 HP
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Tribe Progress */}
        <div className="bg-white/5 border border-white/10 p-6 rounded-[32px] space-y-4">
          <h4 className="font-bold text-sm">Tribe Contribution</h4>
          <div className="space-y-3">
            {[
              { name: 'Sarah M.', progress: 85, color: 'bg-emerald-500' },
              { name: 'Alex C.', progress: 60, color: 'bg-sky-500' },
              { name: 'You', progress: 45, color: 'bg-indigo-500' },
            ].map((member, i) => (
              <div key={i} className="space-y-1">
                <div className="flex justify-between text-[10px] font-bold text-slate-400">
                  <span>{member.name}</span>
                  <span>{member.progress}%</span>
                </div>
                <div className="h-1.5 bg-white/5 rounded-full overflow-hidden">
                  <div className={cn("h-full", member.color)} style={{ width: `${member.progress}%` }} />
                </div>
              </div>
            ))}
          </div>
        </div>

        <button 
          onClick={() => {
            setAuraStats(prev => ({ ...prev, bossHealth: Math.max(0, prev.bossHealth - 5) }));
            setXp(xp + 50);
          }}
          className="w-full py-4 bg-rose-600 text-white rounded-2xl font-bold text-sm shadow-xl shadow-rose-900/40 active:scale-95 transition-transform"
        >
          Attack Boss (Walk 100 Steps)
        </button>
      </div>
    </motion.div>
  );

  const renderAuraEngine = () => (
    <motion.div 
      initial={{ opacity: 0 }} 
      animate={{ opacity: 1 }} 
      className="flex flex-col h-full bg-slate-950 text-white overflow-y-auto pb-32"
    >
      {/* Aura Header */}
      <div className="p-6 flex items-center justify-between bg-slate-900/50 backdrop-blur-md border-b border-white/5 sticky top-0 z-20">
        <button onClick={() => setCurrentScreen('dashboard')} className="p-2 -ml-2 text-slate-400">
          <ChevronLeft size={24} />
        </button>
        <div className="text-center">
          <h3 className="font-black text-indigo-400 tracking-[0.2em] uppercase text-[10px]">Aura Engine</h3>
          <p className="text-[8px] text-slate-500 font-bold">BIO-SYNC ACTIVE</p>
        </div>
        <button onClick={() => setCurrentScreen('aura-vision')} className="p-2 text-slate-400">
          <Info size={20} />
        </button>
      </div>

      <div className="p-6 space-y-8">
        {/* Bio-Avatar Stage */}
        <div className="relative aspect-square bg-gradient-to-b from-indigo-500/5 to-transparent rounded-[48px] border border-white/5 flex items-center justify-center overflow-hidden">
          {/* Background Aura Rings */}
          <div className="absolute inset-0 flex items-center justify-center">
            <motion.div 
              animate={{ scale: [1, 1.2, 1], opacity: [0.1, 0.2, 0.1] }}
              transition={{ duration: 4, repeat: Infinity }}
              className="w-64 h-64 rounded-full border border-indigo-500/30 blur-xl"
            />
            <motion.div 
              animate={{ scale: [1.2, 1, 1.2], opacity: [0.05, 0.1, 0.05] }}
              transition={{ duration: 6, repeat: Infinity }}
              className="w-80 h-80 rounded-full border border-sky-500/20 blur-2xl"
            />
          </div>

          {/* The Bio-Avatar (Visualized as a pulsing core for MVP) */}
          <div className="relative z-10 flex flex-col items-center">
            <motion.div 
              animate={{ 
                y: [0, -10, 0],
                filter: ["drop-shadow(0 0 20px rgba(99, 102, 241, 0.5))", "drop-shadow(0 0 40px rgba(99, 102, 241, 0.8))", "drop-shadow(0 0 20px rgba(99, 102, 241, 0.5))"]
              }}
              transition={{ duration: 3, repeat: Infinity }}
              className="w-32 h-32 bg-indigo-600 rounded-full flex items-center justify-center border-4 border-indigo-400/50 relative"
            >
              <User size={64} className="text-white opacity-80" />
              {/* Mana Orbitals */}
              <motion.div 
                animate={{ rotate: 360 }}
                transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
                className="absolute inset-0 border-2 border-dashed border-sky-400/30 rounded-full -m-4"
              />
            </motion.div>
            <div className="mt-8 text-center">
              <h4 className="text-lg font-black tracking-tight">Level {level} Advocate</h4>
              <p className="text-[10px] text-indigo-400 font-bold uppercase tracking-widest">Evolution: 12% Complete</p>
            </div>
          </div>

          {/* Floating Stats */}
          <div className="absolute top-8 left-8 space-y-4">
            <div className="space-y-1">
              <div className="flex justify-between text-[8px] font-black text-sky-400 uppercase tracking-widest">
                <span>Mana</span>
                <span>{auraStats.mana}%</span>
              </div>
              <div className="w-24 h-1.5 bg-white/5 rounded-full overflow-hidden border border-white/5">
                <motion.div 
                  initial={{ width: 0 }}
                  animate={{ width: `${auraStats.mana}%` }}
                  className="h-full bg-sky-500 shadow-[0_0_10px_rgba(14,165,233,0.5)]"
                />
              </div>
            </div>
            <div className="space-y-1">
              <div className="flex justify-between text-[8px] font-black text-rose-400 uppercase tracking-widest">
                <span>Vitality</span>
                <span>{auraStats.vitality}%</span>
              </div>
              <div className="w-24 h-1.5 bg-white/5 rounded-full overflow-hidden border border-white/5">
                <motion.div 
                  initial={{ width: 0 }}
                  animate={{ width: `${auraStats.vitality}%` }}
                  className="h-full bg-rose-500 shadow-[0_0_10px_rgba(244,63,94,0.5)]"
                />
              </div>
            </div>
          </div>

          <div className="absolute top-8 right-8 space-y-4">
            <div className="space-y-1">
              <div className="flex justify-between text-[8px] font-black text-rose-400 uppercase tracking-widest">
                <span>Risk Engine</span>
                <span className="flex items-center gap-1">
                  <div className="w-1 h-1 bg-rose-500 rounded-full animate-pulse" />
                  Active
                </span>
              </div>
              <div 
                onClick={() => setCurrentScreen('proactive-alerts')}
                className="bg-rose-500/10 border border-rose-500/20 px-2 py-1 rounded-lg cursor-pointer hover:bg-rose-500/20 transition-colors"
              >
                <p className="text-[6px] font-bold text-rose-400 uppercase tracking-tighter">1 Critical Alert</p>
              </div>
            </div>
          </div>

          <div className="absolute bottom-8 right-8">
            <div className="bg-slate-900/80 backdrop-blur-md p-3 rounded-2xl border border-white/10 flex items-center gap-3">
              <div className="w-8 h-8 bg-amber-500/20 rounded-lg flex items-center justify-center text-amber-500">
                <Gift size={16} />
              </div>
              <div>
                <p className="text-[8px] font-bold text-slate-500 uppercase tracking-widest">Loot Boxes</p>
                <p className="text-xs font-black">{auraStats.lootBoxes} Earned</p>
              </div>
            </div>
          </div>
        </div>

        {/* Quest Campaigns */}
        <div className="space-y-4">
          <div className="flex items-center justify-between px-2">
            <h4 className="text-sm font-bold text-slate-400 uppercase tracking-[0.2em]">Active Missions</h4>
            <span className="text-[10px] font-bold text-indigo-400">Daily Reset: 14h</span>
          </div>
          <div className="grid gap-4">
            <div className="bg-white/5 border border-white/10 p-5 rounded-[32px] flex items-center gap-4 group hover:bg-white/10 transition-all cursor-pointer">
              <div className="w-12 h-12 bg-indigo-600/20 rounded-2xl flex items-center justify-center text-indigo-400 group-hover:scale-110 transition-transform">
                <Zap size={24} />
              </div>
              <div className="flex-1">
                <h5 className="font-bold text-sm">Morning Grind</h5>
                <p className="text-[10px] text-slate-500">Complete 10 min of meditation</p>
              </div>
              <div className="text-right">
                <span className="text-xs font-black text-indigo-400">+250 XP</span>
              </div>
            </div>

            <div className="bg-rose-500/10 border border-rose-500/20 p-5 rounded-[32px] flex items-center gap-4 relative overflow-hidden group cursor-pointer" onClick={() => setCurrentScreen('tribe-raid')}>
              <div className="absolute top-0 right-0 w-24 h-24 bg-rose-500/5 rounded-full -mr-12 -mt-12 blur-2xl" />
              <div className="w-12 h-12 bg-rose-500/20 rounded-2xl flex items-center justify-center text-rose-500 group-hover:scale-110 transition-transform">
                <Activity size={24} />
              </div>
              <div className="flex-1">
                <h5 className="font-bold text-sm">Boss: The Sedentary Sloth</h5>
                <p className="text-[10px] text-slate-500">Defeat by walking 2k steps now</p>
              </div>
              <div className="text-right">
                <span className="text-xs font-black text-rose-500">{auraStats.bossHealth}% HP</span>
              </div>
            </div>
          </div>
        </div>

        {/* Social Tribes: Heal the Forest */}
        <div className="bg-emerald-600/10 border border-emerald-500/20 p-6 rounded-[40px] space-y-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-emerald-500/20 rounded-xl flex items-center justify-center text-emerald-400">
                <Leaf size={20} />
              </div>
              <div>
                <h4 className="font-bold text-sm">Tribe: Forest Guardians</h4>
                <p className="text-[10px] text-emerald-500/60 font-bold uppercase tracking-widest">Weekly Raid</p>
              </div>
            </div>
            <div className="flex -space-x-2">
              {[1, 2, 3, 4].map(i => (
                <div key={i} className="w-6 h-6 rounded-full bg-slate-800 border border-slate-950 flex items-center justify-center text-[8px] font-bold">
                  U{i}
                </div>
              ))}
              <div className="w-6 h-6 rounded-full bg-emerald-500 flex items-center justify-center text-[8px] font-bold text-white">+1</div>
            </div>
          </div>

          <div className="space-y-3">
            <div className="flex justify-between items-end">
              <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Forest Vitality</span>
              <span className="text-xs font-black text-emerald-400">{auraStats.forestHealth}%</span>
            </div>
            <div className="h-3 bg-white/5 rounded-full overflow-hidden border border-white/5">
              <motion.div 
                initial={{ width: 0 }}
                animate={{ width: `${auraStats.forestHealth}%` }}
                className="h-full bg-emerald-500 shadow-[0_0_15px_rgba(16,185,129,0.5)]"
              />
            </div>
            <p className="text-[10px] text-slate-500 text-center italic leading-relaxed">
              "Your tribe has planted 12 virtual trees this week. Reach 250k steps to unlock the Ancient Chest."
            </p>
          </div>

          <div className="flex gap-3">
            <button className="flex-1 py-3 bg-emerald-600 text-white rounded-2xl font-bold text-xs shadow-lg shadow-emerald-900/20">
              Send Energy Boost
            </button>
            <button 
              onClick={() => setCurrentScreen('tribe-raid')}
              className="px-6 py-3 bg-white text-emerald-900 rounded-2xl font-bold text-xs shadow-lg"
            >
              Enter Raid
            </button>
          </div>
        </div>

        {/* Loot Box Section */}
        <div className="grid grid-cols-2 gap-4">
          <div className="bg-white/5 border border-white/10 p-6 rounded-[32px] flex flex-col items-center gap-4 group cursor-pointer hover:border-amber-500/50 transition-all" onClick={() => setShowLootBox(true)}>
            <motion.div 
              animate={{ y: [0, -5, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="w-16 h-16 bg-amber-500/20 rounded-2xl flex items-center justify-center text-amber-500"
            >
              <Gift size={32} />
            </motion.div>
            <div className="text-center">
              <h5 className="font-bold text-xs">Open Loot Box</h5>
              <p className="text-[8px] text-slate-500 uppercase tracking-widest">{auraStats.lootBoxes} Available</p>
            </div>
          </div>
          <div className="bg-white/5 border border-white/10 p-6 rounded-[32px] flex flex-col items-center gap-4 opacity-40">
            <div className="w-16 h-16 bg-slate-800 rounded-2xl flex items-center justify-center text-slate-600">
              <Lock size={32} />
            </div>
            <div className="text-center">
              <h5 className="font-bold text-xs">Evolution Skin</h5>
              <p className="text-[8px] text-slate-500 uppercase tracking-widest">Locked: Lvl 10</p>
            </div>
          </div>
        </div>
      </div>
      {renderBottomNav()}
    </motion.div>
  );

  const renderAuraVision = () => (
    <motion.div 
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      className="flex flex-col h-full bg-slate-950 text-white overflow-y-auto pb-32"
    >
      <div className="p-6 flex items-center justify-between bg-slate-900 border-b border-white/5 sticky top-0 z-10">
        <button onClick={() => setCurrentScreen('dashboard')} className="p-2 -ml-2 text-slate-400"><ChevronLeft size={24} /></button>
        <h2 className="font-bold text-indigo-400 tracking-widest uppercase text-xs">Aura Engine Vision</h2>
        <div className="w-10" />
      </div>

      <div className="p-8 space-y-12">
        {/* Hero Section */}
        <div className="text-center space-y-4">
          <div className="w-24 h-24 bg-indigo-600/20 rounded-full flex items-center justify-center mx-auto border border-indigo-500/30 shadow-[0_0_30px_rgba(79,70,229,0.3)]">
            <Brain size={48} className="text-indigo-400" />
          </div>
          <h1 className="text-4xl font-black tracking-tighter italic">AURA</h1>
          <p className="text-slate-400 text-sm uppercase tracking-[0.2em] font-bold">The Health Engagement Engine</p>
        </div>

        {/* Core Features */}
        <div className="space-y-6">
          <h3 className="text-lg font-bold flex items-center gap-2 text-emerald-400">
            <Zap size={20} />
            Core Features & Mechanics
          </h3>
          <div className="grid gap-4">
            {[
              { title: 'The Bio-Avatar', desc: 'A 3D digital twin that reflects real-world health stats.', element: 'Self-Expression: Avatar reflects habits.', icon: User, color: 'text-sky-400' },
              { title: 'Quest Campaigns', desc: 'Daily, weekly, and monthly health "missions".', element: 'Progression: Levels and XP.', icon: Target, color: 'text-indigo-400' },
              { title: 'Social Tribes', desc: 'Group challenges to "heal" a virtual forest.', element: 'Social Influence: Peer accountability.', icon: Users, color: 'text-emerald-400' },
              { title: 'Health Loot Boxes', desc: 'Earned through streaks; contain real rewards.', element: 'Variable Rewards: Anticipation.', icon: Gift, color: 'text-amber-400' },
              { title: 'Dynamic Difficulty (DDA)', desc: 'AI scales goals based on past performance.', element: 'The "Flow" State: Balancing challenge.', icon: Activity, color: 'text-rose-400' },
            ].map((f, i) => (
              <div key={i} className="bg-white/5 border border-white/10 p-5 rounded-3xl space-y-3">
                <div className="flex items-center gap-3">
                  <div className={cn("p-2 rounded-xl bg-white/5", f.color)}>
                    <f.icon size={20} />
                  </div>
                  <h4 className="font-bold text-white">{f.title}</h4>
                </div>
                <p className="text-xs text-slate-400 leading-relaxed">{f.desc}</p>
                <div className="pt-2 border-t border-white/5">
                  <span className="text-[10px] font-bold text-indigo-400 uppercase tracking-wider">{f.element}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* User Journey */}
        <div className="space-y-6">
          <h3 className="text-lg font-bold flex items-center gap-2 text-sky-400">
            <TrendingUp size={20} />
            The User Journey: "Path to Vitality"
          </h3>
          <div className="space-y-8 relative before:absolute before:left-4 before:top-2 before:bottom-2 before:w-0.5 before:bg-white/10">
            {[
              { step: '1. Onboarding: The Awakening', desc: 'User enters vitals via a "Hero’s Assessment". Bio-Avatar is born mirroring current state.', icon: Sparkles, active: true },
              { step: '2. Daily Loop: The Grind', desc: 'Morning Ritual Quests. Real-time tracking gains XP/Mana. "Boss Monsters" challenge inactivity.', icon: Zap, active: true },
              { step: '3. Weekly Milestone: The Raid', desc: 'Join a "Tribe" of 5. Reach 250k steps to unlock a "Chest". Send "Energy Boosts" to laggers.', icon: Users, active: true },
              { step: '4. Long-term Mastery: Evolution', desc: 'Avatar "evolves" after 30 days. Unlock aesthetics and 20% off health insurance premiums.', icon: Award, active: false },
            ].map((j, i) => (
              <div key={i} className={cn("relative pl-12 transition-opacity", j.active ? "opacity-100" : "opacity-40")}>
                <div className={cn("absolute left-0 top-0 w-8 h-8 rounded-full flex items-center justify-center z-10 border", j.active ? "bg-slate-900 border-sky-400/50" : "bg-slate-950 border-white/10")}>
                  <j.icon size={14} className={j.active ? "text-sky-400" : "text-slate-600"} />
                </div>
                <h4 className={cn("font-bold text-sm mb-1", j.active ? "text-white" : "text-slate-500")}>{j.step}</h4>
                <p className="text-xs text-slate-400 leading-relaxed">{j.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* System Logic */}
        <div className="bg-indigo-600/10 border border-indigo-500/20 p-8 rounded-[40px] space-y-6">
          <h3 className="text-lg font-bold flex items-center gap-2 text-indigo-400">
            <Smartphone size={20} />
            Line of Flow (System Logic)
          </h3>
          <div className="space-y-4">
            <div className="p-4 bg-slate-950 rounded-2xl border border-white/5 font-mono text-[10px] text-indigo-300">
              H = w1(Steps) + w2(Sleep) + w3(Nutrition) - w4(Stress)
            </div>
            <p className="text-xs text-slate-400 leading-relaxed">
              The "Engine" operates on a loop of <span className="text-white font-bold">Trigger → Action → Variable Reward → Investment</span>. 
              XP is converted into "Vitality Coins" for third-party redemption.
            </p>
          </div>
        </div>

        {/* Design Prompt */}
        <div className="bg-white/5 border border-white/10 p-8 rounded-[40px] space-y-4">
          <h4 className="text-xs font-bold text-slate-500 uppercase tracking-widest">Design Prompt</h4>
          <p className="text-xs text-slate-300 italic leading-relaxed">
            "Design a mobile-first Health Engagement Engine named 'Aura'. The UI should feel like a high-end RPG mixed with a clean SaaS dashboard. Use a dark-mode aesthetic with neon bio-luminescent accents..."
          </p>
        </div>
      </div>

      {/* Bottom Nav */}
      {renderBottomNav()}
    </motion.div>
  );

  const renderShareJourney = () => (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="flex flex-col h-full bg-white p-6 space-y-8">
      <div className="flex items-center justify-between">
        <button onClick={() => setCurrentScreen('dashboard')} className="p-2 bg-slate-100 rounded-xl"><ChevronLeft size={20} /></button>
        <h3 className="font-bold text-slate-900">Share Your Story</h3>
        <div className="w-10" />
      </div>

      <div className="space-y-6">
        <div className="bg-indigo-50 p-6 rounded-[32px] border border-indigo-100">
          <h4 className="font-bold text-indigo-900 mb-2">Inspire Others</h4>
          <p className="text-xs text-indigo-700 leading-relaxed">Your journey matters. Share a health tip or a personal milestone to earn 300 XP and help the community.</p>
        </div>

        <div className="space-y-4">
          <textarea 
            value={storyText}
            onChange={(e) => setStoryText(e.target.value)}
            placeholder="Write your story here..."
            className="w-full h-48 p-6 bg-slate-50 border border-slate-100 rounded-[32px] text-sm focus:ring-2 focus:ring-indigo-500 outline-none resize-none"
          />
          <button 
            onClick={() => {
              setXp(xp + 300);
              setCurrentScreen('dashboard');
              setStoryText('');
            }}
            className="w-full py-4 bg-indigo-600 text-white rounded-2xl font-bold text-sm shadow-xl shadow-indigo-900/20"
          >
            Post Story
          </button>
        </div>
      </div>
    </motion.div>
  );

  const renderNotifications = () => (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="flex flex-col h-full bg-slate-50">
      <div className="p-6 bg-white border-b border-slate-100 flex items-center justify-between">
        <button onClick={() => setCurrentScreen('dashboard')} className="p-2 bg-slate-50 rounded-xl"><ChevronLeft size={20} /></button>
        <h3 className="font-bold text-slate-900">Notifications</h3>
        <div className="w-10" />
      </div>

      <div className="flex-1 p-4 space-y-3 overflow-y-auto">
        {notifications.map(n => (
          <div key={n.id} className={cn(
            "p-5 rounded-[24px] border transition-all flex items-start gap-4",
            n.read ? "bg-white border-slate-100" : "bg-indigo-50 border-indigo-100 shadow-sm"
          )}>
            <div className={cn("w-10 h-10 rounded-xl flex items-center justify-center", n.read ? "bg-slate-100 text-slate-400" : "bg-indigo-600 text-white")}>
              <Bell size={18} />
            </div>
            <div className="flex-1">
              <div className="flex items-center justify-between mb-1">
                <h5 className="font-bold text-slate-900 text-sm">{n.title}</h5>
                <span className="text-[10px] text-slate-400">{n.time}</span>
              </div>
              <p className="text-[10px] text-slate-500 leading-relaxed">{n.desc}</p>
            </div>
          </div>
        ))}
      </div>
      {renderBottomNav()}
    </motion.div>
  );

  const renderLeaderboard = () => (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="flex flex-col h-full bg-slate-50 overflow-y-auto pb-32">
      <div className="p-6 bg-white border-b border-slate-100 flex items-center justify-between sticky top-0 z-10">
        <button onClick={() => setCurrentScreen('dashboard')} className="p-2 bg-slate-50 rounded-xl"><ChevronLeft size={20} /></button>
        <h3 className="font-bold text-slate-900">Tribe Leaderboard</h3>
        <div className="w-10" />
      </div>

      <div className="p-6 bg-indigo-600 text-white rounded-b-[40px] shadow-lg space-y-6">
        <div className="flex items-center justify-between">
          <div>
            <h4 className="text-xl font-black">Emerald League</h4>
            <p className="text-[10px] font-bold uppercase tracking-widest opacity-80">Top 10% move to Diamond</p>
          </div>
          <div className="w-12 h-12 bg-white/20 rounded-2xl flex items-center justify-center">
            <Trophy size={24} className="text-amber-400" />
          </div>
        </div>
        
        {/* Top 3 Podium */}
        <div className="flex items-end justify-center gap-4 pt-4">
          {/* 2nd Place */}
          <div className="flex flex-col items-center space-y-2">
            <div className="w-12 h-12 rounded-full border-2 border-slate-300 bg-slate-100 flex items-center justify-center text-slate-600 font-bold text-xs">
              AC
            </div>
            <div className="w-12 h-16 bg-white/20 rounded-t-xl flex flex-col items-center justify-center">
              <span className="text-xs font-black">2</span>
            </div>
          </div>
          {/* 1st Place */}
          <div className="flex flex-col items-center space-y-2">
            <div className="relative">
              <div className="absolute -top-4 left-1/2 -translate-x-1/2 text-amber-400">
                <Sparkles size={16} />
              </div>
              <div className="w-16 h-16 rounded-full border-4 border-amber-400 bg-amber-100 flex items-center justify-center text-amber-600 font-bold text-sm shadow-lg">
                SM
              </div>
            </div>
            <div className="w-16 h-24 bg-white/30 rounded-t-xl flex flex-col items-center justify-center">
              <span className="text-sm font-black">1</span>
            </div>
          </div>
          {/* 3rd Place */}
          <div className="flex flex-col items-center space-y-2">
            <div className="w-12 h-12 rounded-full border-2 border-orange-400 bg-orange-100 flex items-center justify-center text-orange-600 font-bold text-xs">
              DP
            </div>
            <div className="w-12 h-12 bg-white/10 rounded-t-xl flex flex-col items-center justify-center">
              <span className="text-xs font-black">3</span>
            </div>
          </div>
        </div>
      </div>

      <div className="p-6 space-y-3">
        {leaderboard.map((user) => (
          <div 
            key={user.id} 
            className={cn(
              "p-4 rounded-3xl border flex items-center gap-4 transition-all",
              user.name.includes('You') 
                ? "bg-indigo-50 border-indigo-200 shadow-md scale-[1.02]" 
                : "bg-white border-slate-100 shadow-sm"
            )}
          >
            <span className={cn(
              "w-6 text-center font-black text-xs",
              user.rank <= 3 ? "text-amber-500" : "text-slate-400"
            )}>
              {user.rank}
            </span>
            <div className={cn("w-10 h-10 rounded-xl flex items-center justify-center font-bold text-xs", user.color)}>
              {user.avatar}
            </div>
            <div className="flex-1">
              <h5 className="font-bold text-slate-900 text-sm">{user.name}</h5>
              <p className="text-[10px] text-slate-500">Level {user.level}</p>
            </div>
            <div className="text-right">
              <span className="text-xs font-black text-slate-900">{user.xp}</span>
              <p className="text-[8px] font-bold text-slate-400 uppercase tracking-widest">XP</p>
            </div>
          </div>
        ))}
      </div>
      {renderBottomNav()}
    </motion.div>
  );

  const renderRewards = () => (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="flex flex-col h-full bg-slate-50">
      <div className="p-6 bg-white border-b border-slate-100 flex items-center justify-between">
        <button onClick={() => setCurrentScreen('dashboard')} className="p-2 bg-slate-50 rounded-xl"><ChevronLeft size={20} /></button>
        <h3 className="font-bold text-slate-900">Health Rewards</h3>
        <div className="w-10" />
      </div>

      <div className="p-6 bg-indigo-600 text-white flex items-center justify-between rounded-b-[40px] shadow-lg">
        <div>
          <p className="text-[10px] font-bold uppercase tracking-widest opacity-80">Available Balance</p>
          <h4 className="text-2xl font-black">{xp} <span className="text-sm font-bold opacity-60">XP</span></h4>
        </div>
        <Gift size={32} className="opacity-40" />
      </div>

      <div className="flex-1 p-6 space-y-6 overflow-y-auto pb-32">
        <div className="grid grid-cols-2 gap-4">
          {[
            { title: 'Gym Pass', cost: 1000, icon: Dumbbell, color: 'text-emerald-500' },
            { title: 'Health Check', cost: 2500, icon: Stethoscope, color: 'text-sky-500' },
            { title: 'Yoga Mat', cost: 800, icon: Zap, color: 'text-amber-500' },
            { title: 'Consultation', cost: 1500, icon: User, color: 'text-indigo-500' },
          ].map((item, i) => (
            <div key={i} className="bg-white p-5 rounded-[32px] border border-slate-100 shadow-sm space-y-4 flex flex-col items-center text-center">
              <div className={cn("w-14 h-14 rounded-2xl bg-slate-50 flex items-center justify-center", item.color)}>
                <item.icon size={28} />
              </div>
              <div>
                <h5 className="font-bold text-slate-900 text-sm">{item.title}</h5>
                <p className="text-[10px] font-bold text-indigo-600">{item.cost} XP</p>
              </div>
              <button 
                disabled={xp < item.cost}
                className="w-full py-2 bg-slate-900 text-white rounded-xl text-[10px] font-bold disabled:opacity-30"
              >
                Redeem
              </button>
            </div>
          ))}
        </div>
      </div>
      {renderBottomNav()}
    </motion.div>
  );

  const renderCalendar = () => (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="flex flex-col h-full bg-slate-50 overflow-y-auto pb-32"
    >
      <div className="p-6 space-y-6">
        <div className="flex items-center justify-between">
          <h2 className="text-2xl font-black text-slate-900 tracking-tight">Health Calendar</h2>
          <button onClick={() => setCurrentScreen('dashboard')} className="p-2 bg-white rounded-xl shadow-sm border border-slate-100">
            <ChevronLeft size={20} />
          </button>
        </div>

        <div className="space-y-8">
          {AWARENESS_MONTHS.map((month, mIdx) => (
            <div key={mIdx} className="space-y-4">
              <div className="flex items-center gap-3">
                <div className={cn("w-2 h-8 rounded-full", month.color)} />
                <h3 className="font-bold text-slate-900">{month.month}</h3>
              </div>
              <div className="grid gap-3">
                {month.events.map((event, eIdx) => (
                  <div key={eIdx} className="bg-white p-4 rounded-2xl border border-slate-100 shadow-sm flex items-center gap-4">
                    <div className={cn("w-12 h-12 rounded-xl flex items-center justify-center text-white", month.color)}>
                      <month.icon size={20} />
                    </div>
                    <div>
                      <h4 className="font-bold text-sm text-slate-900">{event.name}</h4>
                      <p className="text-[10px] text-slate-500 font-bold uppercase tracking-widest">{month.month} {event.date}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom Nav */}
      {renderBottomNav()}
    </motion.div>
  );

  const renderQuestDetail = () => {
    if (!selectedQuest) return null;
    
    const tasks = [
      { title: 'Morning Awareness', desc: 'Read a short article about health equity.', completed: true, xp: 50 },
      { title: 'Community Engagement', desc: 'Share your thoughts in the tribe chat.', completed: selectedQuest.progress > 1, xp: 100 },
      { title: 'Final Assessment', desc: 'Complete the quiz with 100% accuracy.', completed: false, xp: 150 },
    ];

    return (
      <motion.div 
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        exit={{ opacity: 0, x: -20 }}
        className="flex flex-col h-full bg-slate-50 overflow-y-auto pb-32"
      >
        <div className="p-6 bg-white border-b border-slate-100 flex items-center justify-between sticky top-0 z-10">
          <button onClick={() => setCurrentScreen('dashboard')} className="p-2 bg-slate-50 rounded-xl hover:bg-slate-100 transition-colors">
            <ChevronLeft size={20} />
          </button>
          <h3 className="font-bold text-slate-900">Quest Details</h3>
          <div className="w-10" />
        </div>

        <div className="p-6 space-y-8">
          {/* Quest Header */}
          <div className="bg-white p-8 rounded-[40px] border border-slate-100 shadow-sm space-y-6 text-center">
            <div className={cn("w-20 h-20 rounded-3xl mx-auto flex items-center justify-center shadow-lg", selectedQuest.color, selectedQuest.textColor)}>
              <selectedQuest.icon size={40} />
            </div>
            <div className="space-y-2">
              <h2 className="text-2xl font-black text-slate-900 tracking-tight">{selectedQuest.title}</h2>
              <p className="text-xs text-slate-500 leading-relaxed max-w-[200px] mx-auto">{selectedQuest.desc}</p>
            </div>
            <div className="flex items-center justify-center gap-2">
              <div className="px-4 py-1.5 bg-indigo-600 text-white rounded-full text-[10px] font-bold uppercase tracking-widest shadow-lg shadow-indigo-200">
                {selectedQuest.xp} XP Reward
              </div>
            </div>
          </div>

          {/* Progress Section */}
          <div className="bg-white p-6 rounded-[32px] border border-slate-100 shadow-sm space-y-4">
            <div className="flex justify-between items-end">
              <h4 className="font-bold text-slate-900 text-sm">Quest Progress</h4>
              <span className="text-xs font-black text-indigo-600">
                {Math.round((selectedQuest.progress / selectedQuest.total) * 100)}%
              </span>
            </div>
            <div className="h-3 bg-slate-100 rounded-full overflow-hidden">
              <motion.div 
                initial={{ width: 0 }}
                animate={{ width: `${(selectedQuest.progress / selectedQuest.total) * 100}%` }}
                className={cn("h-full rounded-full", 
                  selectedQuest.accent === 'emerald' ? 'bg-emerald-500' :
                  selectedQuest.accent === 'sky' ? 'bg-sky-500' :
                  'bg-indigo-500'
                )}
              />
            </div>
            <p className="text-[10px] text-slate-400 font-medium text-center italic">
              "You're making great strides! Keep going to unlock the {selectedQuest.title} badge."
            </p>
          </div>

          {/* Tasks List */}
          <div className="space-y-4">
            <h4 className="font-bold text-slate-900 px-2">Quest Tasks</h4>
            <div className="space-y-3">
              {tasks.map((task, i) => (
                <div key={i} className="bg-white p-5 rounded-3xl border border-slate-100 shadow-sm flex items-center gap-4 group">
                  <div className={cn(
                    "w-10 h-10 rounded-xl flex items-center justify-center transition-all",
                    task.completed ? "bg-emerald-50 text-emerald-500" : "bg-slate-50 text-slate-300"
                  )}>
                    {task.completed ? <CheckCircle2 size={20} /> : <Lock size={20} />}
                  </div>
                  <div className="flex-1">
                    <h5 className={cn("font-bold text-sm", task.completed ? "text-slate-400 line-through" : "text-slate-900")}>
                      {task.title}
                    </h5>
                    <p className="text-[10px] text-slate-500">{task.desc}</p>
                  </div>
                  <div className="text-right">
                    <span className="text-[10px] font-bold text-indigo-600">+{task.xp} XP</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Action Button */}
          <button 
            onClick={() => setCurrentScreen(selectedQuest.id)}
            className="w-full py-4 bg-slate-900 text-white rounded-2xl font-bold text-sm shadow-xl shadow-slate-200 hover:bg-slate-800 transition-all active:scale-95"
          >
            Continue Quest
          </button>
        </div>
      </motion.div>
    );
  };

  return (
    <div className="w-full max-w-md mx-auto h-[800px] bg-white rounded-[48px] shadow-2xl overflow-hidden border-[8px] border-slate-900 relative">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-6 bg-slate-900 rounded-b-2xl z-50" />
      
      <AnimatePresence mode="wait">
        {currentScreen === 'onboarding' && renderOnboarding()}
        {currentScreen === 'dashboard' && renderDashboard()}
        {currentScreen === 'calendar' && renderCalendar()}
        {currentScreen === 'quest-detail' && renderQuestDetail()}
        {currentScreen === 'aura-vision' && renderAuraVision()}
        {currentScreen === 'quiz' && renderQuiz()}
        {currentScreen === 'community-walk' && renderCommunityWalk()}
        {currentScreen === 'share-journey' && renderShareJourney()}
        {currentScreen === 'notifications' && renderNotifications()}
        {currentScreen === 'rewards' && renderRewards()}
        {currentScreen === 'leaderboard' && renderLeaderboard()}
        {currentScreen === 'aura-engine' && renderAuraEngine()}
        {currentScreen === 'heros-assessment' && renderHerosAssessment()}
        {currentScreen === 'tribe-raid' && renderTribeRaid()}
        {currentScreen === 'proactive-alerts' && renderProactiveAlerts()}
        {currentScreen === '100-day-challenge' && render100DayChallenge()}
        {currentScreen === 'ai-board' && renderAIBoard()}
        {currentScreen === 'blogs' && renderBlogs()}
      </AnimatePresence>
      {renderLootBoxModal()}
      {renderLevelUpModal()}
    </div>
  );
}
