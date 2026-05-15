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
  Timer
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { cn } from '../lib/utils';

type Screen = 
  | 'onboarding' 
  | 'dashboard' 
  | 'quest-detail'
  | 'leaderboard'
  | 'rewards'
  | 'level-up';

export default function GamifiedWellnessMVP() {
  const [currentScreen, setCurrentScreen] = useState<Screen>('onboarding');
  const [xp, setXp] = useState(2450);
  const [level, setLevel] = useState(12);
  const [coins, setCoins] = useState(850);
  const [selectedQuest, setSelectedQuest] = useState<any>(null);
  const [showLevelUp, setShowLevelUp] = useState(false);

  const quests = [
    { 
      id: '1', 
      title: 'Hydration Hero', 
      desc: 'Drink 8 glasses of water daily for 5 days.', 
      progress: 3, 
      total: 5, 
      reward: 200, 
      xp: 500,
      icon: Droplets,
      color: 'text-sky-500',
      bg: 'bg-sky-50'
    },
    { 
      id: '2', 
      title: 'Step Master', 
      desc: 'Complete 10,000 steps for 3 consecutive days.', 
      progress: 1, 
      total: 3, 
      reward: 500, 
      xp: 1200,
      icon: Activity,
      color: 'text-emerald-500',
      bg: 'bg-emerald-50'
    },
    { 
      id: '3', 
      title: 'Sleep Guardian', 
      desc: 'Get 8 hours of sleep for a week.', 
      progress: 4, 
      total: 7, 
      reward: 300, 
      xp: 800,
      icon: Moon,
      color: 'text-indigo-500',
      bg: 'bg-indigo-50'
    }
  ];

  const renderOnboarding = () => (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      className="flex flex-col items-center justify-center h-full p-8 bg-slate-900 text-white text-center space-y-12"
    >
      <div className="relative">
        <div className="w-48 h-48 bg-indigo-600/20 rounded-full flex items-center justify-center border-4 border-indigo-500/30">
          <Trophy size={100} className="text-indigo-400" />
        </div>
        <motion.div 
          animate={{ scale: [1, 1.2, 1], rotate: [0, 10, -10, 0] }}
          transition={{ repeat: Infinity, duration: 3 }}
          className="absolute -top-4 -right-4 bg-amber-500 p-4 rounded-2xl shadow-xl"
        >
          <Star size={32} className="text-white fill-white" />
        </motion.div>
      </div>

      <div className="space-y-4">
        <h1 className="text-4xl font-bold tracking-tight">HCL Health Quests</h1>
        <p className="text-slate-400 text-sm leading-relaxed max-w-xs mx-auto">
          Turn your recovery and wellness journey into an epic adventure. Level up your health, earn rewards, and compete with colleagues.
        </p>
      </div>

      <div className="w-full space-y-4">
        <button 
          onClick={() => setCurrentScreen('dashboard')}
          className="w-full py-5 bg-indigo-600 text-white rounded-3xl font-bold text-lg shadow-xl shadow-indigo-900/50 flex items-center justify-center gap-3 group"
        >
          Start Your Quest
          <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
        </button>
        <p className="text-[10px] text-slate-500 uppercase font-bold tracking-widest flex items-center justify-center gap-2">
          <Shield size={12} /> HIPAA Compliant & Private
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
      <div className="bg-slate-900 p-6 pb-12 rounded-b-[40px] text-white space-y-8 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 bg-indigo-600/20 rounded-full -mr-32 -mt-32 blur-3xl" />
        
        <div className="flex items-center justify-between relative z-10">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-2xl bg-indigo-600 flex items-center justify-center border-2 border-indigo-400/30">
              <User size={24} />
            </div>
            <div>
              <h3 className="font-bold">Hero Alex</h3>
              <p className="text-[10px] text-indigo-300 font-bold uppercase tracking-widest">Level {level} Warrior</p>
            </div>
          </div>
          <div className="flex gap-3">
            <div className="bg-white/10 backdrop-blur-md px-3 py-1.5 rounded-full border border-white/10 flex items-center gap-2">
              <Zap size={14} className="text-amber-400 fill-amber-400" />
              <span className="text-xs font-bold">{xp} XP</span>
            </div>
            <div className="bg-white/10 backdrop-blur-md px-3 py-1.5 rounded-full border border-white/10 flex items-center gap-2">
              <Star size={14} className="text-amber-400 fill-amber-400" />
              <span className="text-xs font-bold">{coins}</span>
            </div>
          </div>
        </div>

        <div className="space-y-4 relative z-10">
          <div className="flex items-center justify-between">
            <span className="text-xs font-bold text-indigo-300 uppercase tracking-widest">Progress to Level {level + 1}</span>
            <span className="text-xs font-bold">75%</span>
          </div>
          <div className="w-full h-3 bg-white/10 rounded-full overflow-hidden border border-white/5">
            <motion.div 
              initial={{ width: 0 }}
              animate={{ width: '75%' }}
              className="h-full bg-gradient-to-r from-indigo-500 to-violet-500 rounded-full"
            />
          </div>
        </div>
      </div>

      <div className="p-6 -mt-8 space-y-8 relative z-10">
        {/* Daily Streak */}
        <div className="bg-white p-6 rounded-[32px] border border-slate-100 shadow-xl shadow-slate-200/50 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <div className="w-14 h-14 bg-rose-50 rounded-2xl flex items-center justify-center text-rose-500">
              <Flame size={32} className="fill-rose-500/20" />
            </div>
            <div>
              <h4 className="font-bold text-slate-900">7 Day Streak!</h4>
              <p className="text-xs text-slate-500">You're on fire, Alex!</p>
            </div>
          </div>
          <div className="flex -space-x-2">
            {[1, 2, 3, 4, 5].map(i => (
              <div key={i} className="w-8 h-8 rounded-full bg-rose-500 border-2 border-white flex items-center justify-center text-[10px] font-bold text-white">
                {i}
              </div>
            ))}
            <div className="w-8 h-8 rounded-full bg-slate-100 border-2 border-white flex items-center justify-center text-[10px] font-bold text-slate-400">
              +2
            </div>
          </div>
        </div>

        {/* Active Quests */}
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <h4 className="font-bold text-slate-900">Active Quests</h4>
            <button className="text-xs font-bold text-indigo-600">View All</button>
          </div>
          <div className="space-y-4">
            {quests.map(quest => (
              <div 
                key={quest.id}
                onClick={() => { setSelectedQuest(quest); setCurrentScreen('quest-detail'); }}
                className="bg-white p-6 rounded-[32px] border border-slate-100 shadow-sm space-y-4 cursor-pointer hover:border-indigo-200 transition-all group"
              >
                <div className="flex items-center gap-4">
                  <div className={cn("w-16 h-16 rounded-2xl flex items-center justify-center transition-transform group-hover:scale-110", quest.bg, quest.color)}>
                    <quest.icon size={32} />
                  </div>
                  <div className="flex-1">
                    <h5 className="font-bold text-slate-900">{quest.title}</h5>
                    <p className="text-xs text-slate-500 line-clamp-1">{quest.desc}</p>
                  </div>
                  <div className="text-right">
                    <span className="text-[10px] font-bold text-indigo-600 uppercase tracking-widest">+{quest.xp} XP</span>
                  </div>
                </div>
                <div className="space-y-2">
                  <div className="flex items-center justify-between text-[10px] font-bold text-slate-400 uppercase">
                    <span>Progress</span>
                    <span>{quest.progress}/{quest.total} Days</span>
                  </div>
                  <div className="w-full h-2 bg-slate-50 rounded-full overflow-hidden">
                    <div 
                      className={cn("h-full rounded-full transition-all duration-1000", quest.color.replace('text-', 'bg-'))}
                      style={{ width: `${(quest.progress / quest.total) * 100}%` }}
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Quick Actions */}
        <div className="grid grid-cols-2 gap-4">
          <button 
            onClick={() => setCurrentScreen('leaderboard')}
            className="bg-indigo-600 p-6 rounded-[32px] text-white space-y-3 shadow-xl shadow-indigo-200 text-left"
          >
            <Users size={24} />
            <div>
              <h5 className="font-bold">Leaderboard</h5>
              <p className="text-[10px] opacity-70">Rank #4 in IT Dept</p>
            </div>
          </button>
          <button 
            onClick={() => setCurrentScreen('rewards')}
            className="bg-white p-6 rounded-[32px] border border-slate-100 shadow-sm space-y-3 text-left"
          >
            <Gift size={24} className="text-rose-500" />
            <div>
              <h5 className="font-bold text-slate-900">Rewards</h5>
              <p className="text-[10px] text-slate-500">3 new prizes ready</p>
            </div>
          </button>
        </div>
      </div>

      {/* Bottom Nav */}
      <div className="fixed bottom-8 left-1/2 -translate-x-1/2 w-[90%] max-w-md bg-slate-900/90 backdrop-blur-xl border border-white/10 shadow-2xl rounded-full px-8 py-4 flex items-center justify-between z-20">
        <button onClick={() => setCurrentScreen('dashboard')} className={cn("p-2", currentScreen === 'dashboard' ? "text-indigo-400" : "text-slate-500")}><Target size={24} /></button>
        <button onClick={() => setCurrentScreen('leaderboard')} className={cn("p-2", currentScreen === 'leaderboard' ? "text-indigo-400" : "text-slate-500")}><Users size={24} /></button>
        <button className="p-4 bg-indigo-600 text-white rounded-full -mt-12 shadow-xl shadow-indigo-900/50"><Zap size={24} /></button>
        <button onClick={() => setCurrentScreen('rewards')} className={cn("p-2", currentScreen === 'rewards' ? "text-indigo-400" : "text-slate-500")}><Gift size={24} /></button>
        <button className="p-2 text-slate-500"><User size={24} /></button>
      </div>
    </motion.div>
  );

  const renderQuestDetail = () => (
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
        <button className="p-2 -mr-2 text-slate-400"><Share2 size={24} /></button>
      </div>

      <div className="p-8 space-y-8">
        <div className={cn("rounded-[40px] p-10 flex flex-col items-center text-center space-y-6 border border-slate-100", selectedQuest?.bg)}>
          <div className="w-32 h-32 bg-white rounded-full flex items-center justify-center shadow-xl">
            <selectedQuest.icon size={64} className={selectedQuest?.color} />
          </div>
          <div className="space-y-2">
            <h3 className="text-2xl font-bold text-slate-900">{selectedQuest?.title}</h3>
            <p className="text-slate-500 font-medium">{selectedQuest?.desc}</p>
          </div>
          <div className="flex gap-4">
            <div className="bg-white px-4 py-2 rounded-full text-[10px] font-bold text-indigo-600 uppercase tracking-widest border border-slate-100">+{selectedQuest?.xp} XP</div>
            <div className="bg-white px-4 py-2 rounded-full text-[10px] font-bold text-amber-600 uppercase tracking-widest border border-slate-100">+{selectedQuest?.reward} Coins</div>
          </div>
        </div>

        <div className="space-y-6">
          <h4 className="font-bold text-slate-900">Quest Progress</h4>
          <div className="grid grid-cols-7 gap-2">
            {[1, 2, 3, 4, 5, 6, 7].map(day => (
              <div key={day} className="flex flex-col items-center gap-2">
                <div className={cn(
                  "w-10 h-10 rounded-xl flex items-center justify-center border-2 transition-all",
                  day <= selectedQuest?.progress 
                    ? "bg-indigo-600 border-indigo-600 text-white" 
                    : "bg-slate-50 border-slate-100 text-slate-300"
                )}>
                  {day <= selectedQuest?.progress ? <CheckCircle2 size={20} /> : <span className="text-xs font-bold">{day}</span>}
                </div>
                <span className="text-[8px] font-bold text-slate-400 uppercase">Day {day}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-indigo-50 p-6 rounded-[32px] border border-indigo-100 space-y-4">
          <div className="flex items-center gap-3 text-indigo-600">
            <Sparkles size={20} />
            <h4 className="font-bold text-sm">AI Coach Tip</h4>
          </div>
          <p className="text-xs text-indigo-900 leading-relaxed">
            "Alex, you've been consistent for 3 days! Drinking water right after you wake up can increase your metabolism by 24%. Keep it up!"
          </p>
        </div>

        <button 
          onClick={() => {
            if (selectedQuest.progress < selectedQuest.total) {
              const updatedQuest = { ...selectedQuest, progress: selectedQuest.progress + 1 };
              setSelectedQuest(updatedQuest);
              if (updatedQuest.progress === updatedQuest.total) {
                setXp(prev => prev + selectedQuest.xp);
                setCoins(prev => prev + selectedQuest.reward);
                setCurrentScreen('level-up');
              }
            }
          }}
          className="w-full py-5 bg-indigo-600 text-white rounded-3xl font-bold text-lg shadow-xl shadow-indigo-100"
        >
          Log Today's Progress
        </button>
      </div>
    </motion.div>
  );

  const renderLeaderboard = () => (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      className="flex flex-col h-full bg-slate-50 overflow-y-auto pb-32"
    >
      <div className="p-6 flex items-center justify-between bg-white border-b border-slate-50 sticky top-0 z-10">
        <button onClick={() => setCurrentScreen('dashboard')} className="p-2 -ml-2 text-slate-400"><ChevronLeft size={24} /></button>
        <h2 className="font-bold text-slate-900">Leaderboard</h2>
        <button className="p-2 -mr-2 text-slate-400"><Users size={24} /></button>
      </div>

      <div className="p-6 space-y-8">
        <div className="flex gap-4 p-1 bg-white rounded-2xl border border-slate-100">
          <button className="flex-1 py-3 bg-slate-900 text-white rounded-xl text-xs font-bold">Department</button>
          <button className="flex-1 py-3 text-xs font-bold text-slate-400">Global</button>
        </div>

        <div className="flex items-end justify-center gap-4 pb-8 border-b border-slate-200">
          <div className="flex flex-col items-center gap-3">
            <div className="w-16 h-16 rounded-full border-4 border-slate-200 overflow-hidden">
              <img src="https://picsum.photos/seed/user2/100/100" alt="User" className="w-full h-full object-cover" referrerPolicy="no-referrer" />
            </div>
            <div className="bg-slate-200 h-24 w-16 rounded-t-2xl flex flex-col items-center justify-center text-slate-600">
              <span className="text-xl font-bold">2</span>
              <span className="text-[10px] font-bold uppercase">Rank</span>
            </div>
          </div>
          <div className="flex flex-col items-center gap-3">
            <div className="relative">
              <div className="w-20 h-20 rounded-full border-4 border-amber-400 overflow-hidden">
                <img src="https://picsum.photos/seed/user1/100/100" alt="User" className="w-full h-full object-cover" referrerPolicy="no-referrer" />
              </div>
              <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-amber-400 p-1.5 rounded-full text-white">
                <Trophy size={16} />
              </div>
            </div>
            <div className="bg-amber-400 h-32 w-20 rounded-t-2xl flex flex-col items-center justify-center text-white">
              <span className="text-2xl font-bold">1</span>
              <span className="text-[10px] font-bold uppercase">Rank</span>
            </div>
          </div>
          <div className="flex flex-col items-center gap-3">
            <div className="w-16 h-16 rounded-full border-4 border-amber-700/30 overflow-hidden">
              <img src="https://picsum.photos/seed/user3/100/100" alt="User" className="w-full h-full object-cover" referrerPolicy="no-referrer" />
            </div>
            <div className="bg-amber-700/10 h-20 w-16 rounded-t-2xl flex flex-col items-center justify-center text-amber-800">
              <span className="text-xl font-bold">3</span>
              <span className="text-[10px] font-bold uppercase">Rank</span>
            </div>
          </div>
        </div>

        <div className="space-y-3">
          {[
            { rank: 4, name: 'Alex Johnson (You)', xp: '2,450', img: 'https://picsum.photos/seed/alex/100/100', me: true },
            { rank: 5, name: 'Sarah Wilson', xp: '2,100', img: 'https://picsum.photos/seed/sarah/100/100' },
            { rank: 6, name: 'Michael Chen', xp: '1,950', img: 'https://picsum.photos/seed/mike/100/100' },
            { rank: 7, name: 'Priya Sharma', xp: '1,800', img: 'https://picsum.photos/seed/priya/100/100' },
          ].map((user, i) => (
            <div key={i} className={cn(
              "p-4 rounded-3xl border flex items-center gap-4 transition-all",
              user.me ? "bg-indigo-600 border-indigo-600 text-white shadow-xl shadow-indigo-200" : "bg-white border-slate-100 text-slate-900"
            )}>
              <span className="text-sm font-bold w-4">{user.rank}</span>
              <div className="w-10 h-10 rounded-full overflow-hidden border-2 border-white">
                <img src={user.img} alt={user.name} className="w-full h-full object-cover" referrerPolicy="no-referrer" />
              </div>
              <div className="flex-1">
                <h5 className="text-sm font-bold">{user.name}</h5>
                <p className={cn("text-[10px] font-bold uppercase", user.me ? "text-indigo-200" : "text-slate-400")}>IT Department</p>
              </div>
              <div className="text-right">
                <span className="text-sm font-bold">{user.xp} XP</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </motion.div>
  );

  const renderRewards = () => (
    <motion.div 
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: 20 }}
      className="flex flex-col h-full bg-slate-50 overflow-y-auto pb-32"
    >
      <div className="p-6 flex items-center justify-between bg-white border-b border-slate-50 sticky top-0 z-10">
        <button onClick={() => setCurrentScreen('dashboard')} className="p-2 -ml-2 text-slate-400"><ChevronLeft size={24} /></button>
        <h2 className="font-bold text-slate-900">Rewards Store</h2>
        <div className="bg-amber-50 px-3 py-1.5 rounded-full border border-amber-100 flex items-center gap-2">
          <Star size={14} className="text-amber-500 fill-amber-500" />
          <span className="text-xs font-bold text-amber-700">{coins}</span>
        </div>
      </div>

      <div className="p-6 space-y-8">
        <div className="bg-gradient-to-br from-rose-500 to-pink-600 p-8 rounded-[40px] text-white space-y-4 shadow-xl shadow-rose-200 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -mr-16 -mt-16 blur-2xl" />
          <Gift size={40} className="opacity-60" />
          <h3 className="text-2xl font-bold">Redeem Your Coins</h3>
          <p className="text-sm opacity-80 leading-relaxed">
            You've earned these coins through hard work. Use them to unlock premium health benefits.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-4">
          {[
            { title: 'Free Full Body Checkup', price: 1200, desc: 'Complete diagnostic at HCL Onsite Clinic.', img: 'https://picsum.photos/seed/checkup/400/200', color: 'bg-indigo-50 text-indigo-600' },
            { title: '1 Month Gym Access', price: 800, desc: 'Unlimited access to partner fitness centers.', img: 'https://picsum.photos/seed/gym/400/200', color: 'bg-emerald-50 text-emerald-600' },
            { title: 'Organic Wellness Kit', price: 500, desc: 'Curated selection of Ayurvedic supplements.', img: 'https://picsum.photos/seed/kit/400/200', color: 'bg-amber-50 text-amber-600' },
          ].map((reward, i) => (
            <div key={i} className="bg-white rounded-[32px] border border-slate-100 shadow-sm overflow-hidden flex flex-col">
              <div className="h-32 overflow-hidden">
                <img src={reward.img} alt={reward.title} className="w-full h-full object-cover" referrerPolicy="no-referrer" />
              </div>
              <div className="p-6 space-y-4">
                <div className="flex items-center justify-between">
                  <h5 className="font-bold text-slate-900">{reward.title}</h5>
                  <div className="flex items-center gap-1.5">
                    <Star size={14} className="text-amber-500 fill-amber-500" />
                    <span className="text-sm font-bold text-slate-900">{reward.price}</span>
                  </div>
                </div>
                <p className="text-xs text-slate-500 leading-relaxed">{reward.desc}</p>
                <button 
                  disabled={coins < reward.price}
                  className={cn(
                    "w-full py-3 rounded-2xl font-bold text-xs uppercase tracking-widest transition-all",
                    coins >= reward.price 
                      ? "bg-indigo-600 text-white shadow-lg shadow-indigo-100 hover:bg-indigo-700" 
                      : "bg-slate-100 text-slate-400 cursor-not-allowed"
                  )}
                >
                  {coins >= reward.price ? 'Redeem Now' : 'Not Enough Coins'}
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </motion.div>
  );

  const renderLevelUp = () => (
    <motion.div 
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.9 }}
      className="flex flex-col items-center justify-center h-full p-8 bg-slate-900 text-center space-y-12 relative overflow-hidden"
    >
      <div className="absolute inset-0">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 800, opacity: [0, 1, 0] }}
            transition={{ repeat: Infinity, duration: Math.random() * 2 + 1, delay: Math.random() * 2 }}
            className="absolute w-1 h-1 bg-indigo-400 rounded-full"
            style={{ left: `${Math.random() * 100}%` }}
          />
        ))}
      </div>

      <div className="relative">
        <div className="w-64 h-64 bg-indigo-600 rounded-full flex items-center justify-center shadow-[0_0_50px_rgba(79,70,229,0.5)]">
          <div className="relative">
            <Award size={120} className="text-white" />
            <motion.div 
              animate={{ rotate: 360 }}
              transition={{ repeat: Infinity, duration: 10, ease: 'linear' }}
              className="absolute -inset-8 border-4 border-dashed border-indigo-400/30 rounded-full"
            />
          </div>
        </div>
        <motion.div 
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.5, type: 'spring' }}
          className="absolute -bottom-4 left-1/2 -translate-x-1/2 bg-amber-500 px-8 py-2 rounded-full shadow-xl"
        >
          <span className="text-xl font-black text-white uppercase italic tracking-tighter">Level Up!</span>
        </motion.div>
      </div>

      <div className="space-y-4 relative z-10">
        <h2 className="text-5xl font-black text-white tracking-tighter italic">LEVEL {level + 1}</h2>
        <p className="text-indigo-300 font-bold uppercase tracking-widest">Master Health Warrior</p>
        <div className="flex justify-center gap-4 pt-4">
          <div className="bg-white/10 px-4 py-2 rounded-2xl border border-white/10">
            <span className="text-[10px] font-bold text-white/40 uppercase block">Bonus XP</span>
            <span className="text-lg font-bold text-white">+500</span>
          </div>
          <div className="bg-white/10 px-4 py-2 rounded-2xl border border-white/10">
            <span className="text-[10px] font-bold text-white/40 uppercase block">Bonus Coins</span>
            <span className="text-lg font-bold text-white">+200</span>
          </div>
        </div>
      </div>

      <div className="w-full space-y-4 relative z-10">
        <button 
          onClick={() => {
            setLevel(prev => prev + 1);
            setCurrentScreen('dashboard');
          }}
          className="w-full py-5 bg-white text-slate-900 rounded-3xl font-bold text-lg shadow-xl"
        >
          Continue Adventure
        </button>
      </div>
    </motion.div>
  );

  return (
    <div className="w-full max-w-md mx-auto h-[800px] bg-white rounded-[48px] shadow-2xl overflow-hidden border-[8px] border-slate-900 relative">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-6 bg-slate-900 rounded-b-2xl z-50" />
      
      <AnimatePresence mode="wait">
        {currentScreen === 'onboarding' && renderOnboarding()}
        {currentScreen === 'dashboard' && renderDashboard()}
        {currentScreen === 'quest-detail' && renderQuestDetail()}
        {currentScreen === 'leaderboard' && renderLeaderboard()}
        {currentScreen === 'rewards' && renderRewards()}
        {currentScreen === 'level-up' && renderLevelUp()}
      </AnimatePresence>
    </div>
  );
}

function Share2({ size, className }: { size: number, className?: string }) {
  return (
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      width={size} 
      height={size} 
      viewBox="0 0 24 24" 
      fill="none" 
      stroke="currentColor" 
      strokeWidth="2" 
      strokeLinecap="round" 
      strokeLinejoin="round" 
      className={className}
    >
      <circle cx="18" cy="5" r="3" />
      <circle cx="6" cy="12" r="3" />
      <circle cx="18" cy="19" r="3" />
      <line x1="8.59" y1="13.51" x2="15.42" y2="17.49" />
      <line x1="15.41" y1="6.51" x2="8.59" y2="10.49" />
    </svg>
  );
}
