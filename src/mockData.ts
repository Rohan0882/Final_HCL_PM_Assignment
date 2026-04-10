import { 
  ClientConfig, 
  HealthMetric, 
  Insight, 
  RiskStratification, 
  ROIMetrics, 
  DemographicData, 
  FamilyHealthMetric,
  InsuranceMetric,
  CaseRecord,
  CriticalAlert,
  OfficeLocation,
  EnvironmentalData,
  EnvironmentalImpactScore,
  HistoricalTrendPoint,
  ComparativeMetric,
  MedicationAdherence,
  UpcomingTest,
  FamilyMedication,
  AIHealthSuggestion,
  OPDIPDMetric
} from './types';

export const MOCK_OPD_IPD_TRENDS: Record<'day' | 'month' | 'year', OPDIPDMetric[]> = {
  day: [
    { date: '08:00', opdCount: 12, ipdCount: 1, avgCostPerOpd: 1200, avgCostPerIpd: 45000 },
    { date: '10:00', opdCount: 25, ipdCount: 2, avgCostPerOpd: 1150, avgCostPerIpd: 48000 },
    { date: '12:00', opdCount: 38, ipdCount: 1, avgCostPerOpd: 1300, avgCostPerIpd: 42000 },
    { date: '14:00', opdCount: 45, ipdCount: 3, avgCostPerOpd: 1250, avgCostPerIpd: 52000 },
    { date: '16:00', opdCount: 32, ipdCount: 2, avgCostPerOpd: 1100, avgCostPerIpd: 46000 },
    { date: '18:00', opdCount: 18, ipdCount: 1, avgCostPerOpd: 1200, avgCostPerIpd: 44000 },
  ],
  month: [
    { date: 'Week 1', opdCount: 240, ipdCount: 15, avgCostPerOpd: 1250, avgCostPerIpd: 48000 },
    { date: 'Week 2', opdCount: 280, ipdCount: 12, avgCostPerOpd: 1180, avgCostPerIpd: 46000 },
    { date: 'Week 3', opdCount: 310, ipdCount: 18, avgCostPerOpd: 1320, avgCostPerIpd: 51000 },
    { date: 'Week 4', opdCount: 265, ipdCount: 14, avgCostPerOpd: 1210, avgCostPerIpd: 47000 },
  ],
  year: [
    { date: 'Jan', opdCount: 1100, ipdCount: 55, avgCostPerOpd: 1200, avgCostPerIpd: 45000 },
    { date: 'Feb', opdCount: 1050, ipdCount: 48, avgCostPerOpd: 1150, avgCostPerIpd: 44000 },
    { date: 'Mar', opdCount: 1250, ipdCount: 62, avgCostPerOpd: 1280, avgCostPerIpd: 49000 },
    { date: 'Apr', opdCount: 1300, ipdCount: 58, avgCostPerOpd: 1310, avgCostPerIpd: 48000 },
    { date: 'May', opdCount: 1180, ipdCount: 52, avgCostPerOpd: 1220, avgCostPerIpd: 46000 },
    { date: 'Jun', opdCount: 1400, ipdCount: 70, avgCostPerOpd: 1350, avgCostPerIpd: 52000 },
  ],
};

export const MOCK_MEDICATION_ADHERENCE: MedicationAdherence[] = [
  {
    id: 'MA-001',
    employeeId: 'GT-8821',
    medicationName: 'Atorvastatin',
    condition: 'Hyperlipidemia',
    adherenceRate: 95,
    adherenceCategory: 'Adherent',
    lastRefillDate: '2026-03-15',
    nextRefillDate: '2026-04-15',
    riskLevel: 'low',
    labLinkStatus: 'stable',
    claimsStatus: 'covered'
  },
  {
    id: 'MA-002',
    employeeId: 'GT-4412',
    medicationName: 'Metformin',
    condition: 'Diabetes',
    adherenceRate: 65,
    adherenceCategory: 'Partial',
    lastRefillDate: '2026-02-10',
    nextRefillDate: '2026-03-10',
    riskLevel: 'high',
    labLinkStatus: 'fluctuating',
    claimsStatus: 'covered'
  },
  {
    id: 'MA-003',
    employeeId: 'GT-1102',
    medicationName: 'Lisinopril',
    condition: 'Hypertension',
    adherenceRate: 82,
    adherenceCategory: 'Partial',
    lastRefillDate: '2026-03-20',
    nextRefillDate: '2026-04-20',
    riskLevel: 'medium',
    labLinkStatus: 'stable',
    claimsStatus: 'pending'
  },
  {
    id: 'MA-004',
    employeeId: 'GT-9931',
    medicationName: 'Sertraline',
    condition: 'Depression',
    adherenceRate: 45,
    adherenceCategory: 'Non-Adherent',
    lastRefillDate: '2026-01-05',
    nextRefillDate: '2026-02-05',
    riskLevel: 'high',
    labLinkStatus: 'critical',
    claimsStatus: 'denied'
  },
  {
    id: 'MA-005',
    employeeId: 'GT-2231',
    medicationName: 'Amlodipine',
    condition: 'Hypertension',
    adherenceRate: 98,
    adherenceCategory: 'Adherent',
    lastRefillDate: '2026-03-25',
    nextRefillDate: '2026-04-25',
    riskLevel: 'low',
    labLinkStatus: 'stable',
    claimsStatus: 'covered'
  }
];

export const MOCK_UPCOMING_TESTS: UpcomingTest[] = [
  {
    id: 'TEST-001',
    employeeId: 'GT-8821',
    testName: 'Lipid Profile',
    scheduledDate: '2026-04-10',
    type: 'AHC',
    status: 'scheduled',
    priority: 'medium'
  },
  {
    id: 'TEST-002',
    employeeId: 'GT-4412',
    testName: 'HbA1c Follow-up',
    scheduledDate: '2026-04-08',
    type: 'OHC',
    status: 'pending-prep',
    priority: 'high'
  },
  {
    id: 'TEST-003',
    employeeId: 'GT-1102',
    testName: 'Cardiac Stress Test',
    scheduledDate: '2026-04-05',
    type: 'Specialist',
    status: 'overdue',
    priority: 'high'
  }
];

export const MOCK_FAMILY_MEDICATIONS: FamilyMedication[] = [
  {
    id: 'FMA-001',
    employeeId: 'GT-8821',
    dependentName: 'Anjali (Spouse)',
    relationship: 'Spouse',
    medicationName: 'Levothyroxine',
    condition: 'Thyroid',
    adherenceRate: 92,
    adherenceCategory: 'Adherent',
    lastRefillDate: '2026-03-10',
    nextRefillDate: '2026-04-10',
    riskLevel: 'low',
    labLinkStatus: 'stable',
    claimsStatus: 'covered'
  },
  {
    id: 'FMA-002',
    employeeId: 'GT-4412',
    dependentName: 'Rahul (Child)',
    relationship: 'Child',
    medicationName: 'Montelukast',
    condition: 'Asthma',
    adherenceRate: 55,
    adherenceCategory: 'Non-Adherent',
    lastRefillDate: '2026-02-15',
    nextRefillDate: '2026-03-15',
    riskLevel: 'high',
    labLinkStatus: 'fluctuating',
    claimsStatus: 'covered'
  }
];

export const MOCK_AI_SUGGESTIONS: AIHealthSuggestion[] = [
  {
    id: 'SUG-001',
    targetId: 'GT-4412',
    type: 'diet',
    title: 'Low Glycemic Index Routine',
    content: 'Based on your fluctuating HbA1c, we recommend switching to complex carbs like quinoa and oats. Avoid white rice for the next 30 days.',
    priority: 'high'
  },
  {
    id: 'SUG-002',
    targetId: 'GT-8821',
    type: 'routine',
    title: 'Cardiac Resilience Walk',
    content: 'Your lipid profile is stable. Maintain this by adding a 20-minute brisk walk daily at 6 PM to optimize metabolic rate.',
    priority: 'medium'
  },
  {
    id: 'SUG-003',
    targetId: 'GT-4412',
    type: 'precaution',
    title: 'Hydration Alert',
    content: 'Rising temperatures in your region (Mumbai) can impact your blood glucose readings. Ensure 3L water intake today.',
    priority: 'high'
  }
];

export const MOCK_REGIONAL_COMPARISON: ComparativeMetric[] = [
  { label: 'North', metabolicRisk: 28, stressLevel: 42, healthIndex: 72 },
  { label: 'South', metabolicRisk: 18, stressLevel: 35, healthIndex: 86 },
  { label: 'East', metabolicRisk: 22, stressLevel: 38, healthIndex: 78 },
  { label: 'West', metabolicRisk: 24, stressLevel: 40, healthIndex: 82 },
];

export const MOCK_DEPARTMENTAL_COMPARISON: ComparativeMetric[] = [
  { label: 'Engineering', metabolicRisk: 20, stressLevel: 55, healthIndex: 75 },
  { label: 'Sales', metabolicRisk: 26, stressLevel: 48, healthIndex: 78 },
  { label: 'Operations', metabolicRisk: 30, stressLevel: 45, healthIndex: 72 },
  { label: 'HR & Admin', metabolicRisk: 18, stressLevel: 32, healthIndex: 88 },
];

export const MOCK_ROI_BREAKDOWN = [
  { name: 'Preventive Care Savings', value: 1200000, color: '#6366f1' },
  { name: 'Hospitalization Avoided', value: 1800000, color: '#10b981' },
  { name: 'Productivity Gains', value: 1000000, color: '#f59e0b' },
  { name: 'Insurance Premium Savings', value: 500000, color: '#ec4899' },
];

export const MOCK_ENVIRONMENTAL_IMPACT: EnvironmentalImpactScore = {
  score: 68,
  status: 'fair',
  factors: [
    { label: 'Air Quality Index (AQI)', value: 312, impact: 'negative' },
    { label: 'Thermal Comfort', value: 34, impact: 'negative' },
    { label: 'Humidity Index', value: 45, impact: 'neutral' },
    { label: 'Workplace Ergonomics', value: 85, impact: 'positive' },
  ],
};

export const MOCK_HISTORICAL_TRENDS: Record<'day' | 'month' | 'year', HistoricalTrendPoint[]> = {
  day: [
    { date: '08:00', employeeHealth: 82, familyHealth: 75, savings: 12000 },
    { date: '10:00', employeeHealth: 84, familyHealth: 76, savings: 15000 },
    { date: '12:00', employeeHealth: 83, familyHealth: 74, savings: 18000 },
    { date: '14:00', employeeHealth: 85, familyHealth: 77, savings: 22000 },
    { date: '16:00', employeeHealth: 86, familyHealth: 78, savings: 25000 },
    { date: '18:00', employeeHealth: 84, familyHealth: 76, savings: 28000 },
  ],
  month: [
    { date: 'Week 1', employeeHealth: 78, familyHealth: 70, savings: 120000 },
    { date: 'Week 2', employeeHealth: 80, familyHealth: 72, savings: 150000 },
    { date: 'Week 3', employeeHealth: 82, familyHealth: 74, savings: 180000 },
    { date: 'Week 4', employeeHealth: 84, familyHealth: 76, savings: 220000 },
  ],
  year: [
    { date: 'Jan', employeeHealth: 70, familyHealth: 65, savings: 1200000 },
    { date: 'Feb', employeeHealth: 72, familyHealth: 66, savings: 1500000 },
    { date: 'Mar', employeeHealth: 75, familyHealth: 68, savings: 1800000 },
    { date: 'Apr', employeeHealth: 78, familyHealth: 70, savings: 2200000 },
    { date: 'May', employeeHealth: 80, familyHealth: 72, savings: 2500000 },
    { date: 'Jun', employeeHealth: 82, familyHealth: 74, savings: 2800000 },
  ],
};

export const MOCK_OFFICE_LOCATIONS: OfficeLocation[] = [
  {
    id: 'LOC-001',
    name: 'Gurgaon (NCR)',
    region: 'North',
    employeeCount: 1850,
    respiratoryRiskPercent: 12,
    metabolicRiskPercent: 24,
    healthIndex: 78,
    environmentalData: {
      aqi: 312,
      temperature: 34,
      humidity: 45,
      lastUpdated: '10 mins ago',
    },
  },
  {
    id: 'LOC-002',
    name: 'Bangalore (HQ)',
    region: 'South',
    employeeCount: 2200,
    respiratoryRiskPercent: 8,
    metabolicRiskPercent: 18,
    healthIndex: 86,
    environmentalData: {
      aqi: 145,
      temperature: 28,
      humidity: 60,
      lastUpdated: '15 mins ago',
    },
  },
  {
    id: 'LOC-003',
    name: 'Mumbai (BKC)',
    region: 'West',
    employeeCount: 950,
    respiratoryRiskPercent: 10,
    metabolicRiskPercent: 22,
    healthIndex: 82,
    environmentalData: {
      aqi: 180,
      temperature: 32,
      humidity: 75,
      lastUpdated: '5 mins ago',
    },
  },
];

export const MOCK_INSURANCE_METRICS: InsuranceMetric = {
  coveredCount: 4200,
  uncoveredCount: 800,
  totalSpending: 12500000, // INR
  outOfPocketSpending: 3500000,
};

export const MOCK_CASES: CaseRecord[] = [
  { 
    id: 'CASE-001', 
    employeeId: 'GT-8821', 
    gender: 'Male', 
    region: 'South', 
    condition: 'Cardiac', 
    procedure: 'Angioplasty', 
    hasInsurance: true, 
    totalBill: 450000, 
    insuranceClaimed: 400000, 
    prescriptionUrl: '#', 
    status: 'critical' 
  },
  { 
    id: 'CASE-002', 
    employeeId: 'GT-4412', 
    gender: 'Female', 
    region: 'North', 
    condition: 'Maternity', 
    procedure: 'C-Section', 
    hasInsurance: false, 
    totalBill: 120000, 
    insuranceClaimed: 0, 
    prescriptionUrl: '#', 
    status: 'active' 
  },
  { 
    id: 'CASE-003', 
    employeeId: 'GT-1102', 
    gender: 'Male', 
    region: 'West', 
    condition: 'Diabetes', 
    procedure: 'Insulin Therapy', 
    hasInsurance: true, 
    totalBill: 25000, 
    insuranceClaimed: 20000, 
    prescriptionUrl: '#', 
    status: 'resolved' 
  },
  { 
    id: 'CASE-004', 
    employeeId: 'GT-9931', 
    gender: 'Female', 
    region: 'South', 
    condition: 'Mental Health', 
    procedure: 'Psychotherapy', 
    hasInsurance: false, 
    totalBill: 45000, 
    insuranceClaimed: 0, 
    prescriptionUrl: '#', 
    status: 'active' 
  },
];

export const MOCK_DEMOGRAPHICS: DemographicData = {
  gender: [
    { label: 'Male', value: 65 },
    { label: 'Female', value: 34 },
    { label: 'Other', value: 1 },
  ],
  department: [
    { label: 'Engineering', value: 450 },
    { label: 'Sales', value: 280 },
    { label: 'Operations', value: 320 },
    { label: 'HR & Admin', value: 150 },
  ],
  ageGroup: [
    { label: '20-30', value: 40 },
    { label: '31-45', value: 45 },
    { label: '46-60', value: 12 },
    { label: '60+', value: 3 },
  ],
  region: [
    { label: 'North', value: 25 },
    { label: 'South', value: 40 },
    { label: 'East', value: 15 },
    { label: 'West', value: 20 },
  ],
};

export const MOCK_FAMILY_HEALTH: FamilyHealthMetric[] = [
  { condition: 'Diabetes', employeeCount: 450, familyCount: 820, trend: 'up' },
  { condition: 'Hypertension', employeeCount: 380, familyCount: 950, trend: 'stable' },
  { condition: 'Cardiac Issues', employeeCount: 120, familyCount: 410, trend: 'up' },
  { condition: 'Pregnancy/Maternity', employeeCount: 85, familyCount: 0, trend: 'stable' },
  { condition: 'Chronic Respiratory', employeeCount: 210, familyCount: 340, trend: 'down' },
];

export const MOCK_CLIENT_CONFIGS: Record<string, ClientConfig> = {
  'GlobalTech Solutions': {
    name: 'GlobalTech Solutions',
    enabledServices: ['AHC', 'OHC', 'WellnessApp'],
    employeeCount: 5000,
    hasAHC: true,
    hasOHC: true,
    hasApp: true,
  },
  'FinServe India': {
    name: 'FinServe India',
    enabledServices: ['AHC', 'OHC'],
    employeeCount: 2500,
    hasAHC: true,
    hasOHC: true,
    hasApp: false,
  },
  'RetailCorp': {
    name: 'RetailCorp',
    enabledServices: ['AHC'],
    employeeCount: 1200,
    hasAHC: true,
    hasOHC: false,
    hasApp: false,
  },
};

export const MOCK_HEALTH_METRICS: HealthMetric[] = [
  { category: 'Metabolic Risk (Diabetes/Pre-diabetes)', value: 24, trend: 'up', change: 2.1, status: 'warning' },
  { category: 'Hypertension (High BP)', value: 18, trend: 'down', change: 1.5, status: 'good' },
  { category: 'Mental Wellness (Stress/Anxiety)', value: 32, trend: 'up', change: 4.2, status: 'critical' },
  { category: 'Obesity (BMI > 30)', value: 28, trend: 'stable', change: 0.2, status: 'warning' },
];

export const MOCK_RISK_STRATIFICATION: RiskStratification = {
  high: 12,
  moderate: 35,
  low: 53,
};

export const MOCK_ROI: ROIMetrics = {
  totalSavings: 4500000, // INR
  preventiveCareCost: 1200000,
  potentialHospitalizationCost: 5700000,
  productivityGain: 1200, // Man-hours saved
  hospitalizationAvoided: 45,
};

export const MOCK_CRITICAL_ALERTS: CriticalAlert[] = [
  {
    id: 'ALERT-001',
    title: 'Respiratory Distress Spike',
    message: '12% of the Bangalore workforce shows signs of respiratory distress; cross-referencing with local AQI data (320+) suggests a high risk of asthma exacerbation.',
    severity: 'critical',
    timestamp: '2 hours ago',
    location: 'Bangalore Office',
    suggestedAction: 'Distribute N95 masks at OHC and enable remote work for high-risk employees.',
  },
  {
    id: 'ALERT-002',
    title: 'Heatwave Health Risk',
    message: 'Predicted heatwave in Mumbai (42°C) correlates with a 15% increase in dehydration-related clinic visits in the last 24 hours.',
    severity: 'warning',
    timestamp: '5 hours ago',
    location: 'Mumbai Office',
    suggestedAction: 'Install hydration stations at all exits and send hydration reminders via Wellness App.',
  },
  {
    id: 'ALERT-003',
    title: 'Mental Wellness Trend',
    message: 'Anonymized app data shows a 20% drop in sleep quality scores for the Engineering team following the recent project release cycle.',
    severity: 'warning',
    timestamp: '1 day ago',
    location: 'Global',
    suggestedAction: 'Schedule a mandatory "No-Meeting Friday" and promote the "Mindfulness" module on the app.',
  },
];

export const MOCK_INSIGHTS: Insight[] = [
  {
    id: '1',
    category: 'Regional Health',
    problem: 'Regional Cardiac Risk Spike',
    reason: 'A 12% increase in cardiac-related queries and procedures observed in the South Region among males aged 45-60.',
    solution: 'Deploy specialized cardiac screening camp in Chennai/Bangalore offices.',
    impact: 'high',
  },
  {
    id: '2',
    category: 'Maternity',
    problem: 'Maternity Support Gap',
    reason: '85 active pregnancies detected; 15% are in the North Region with no prior insurance coverage for prenatal care.',
    solution: 'Extend "Healthy Mother" insurance top-up to uninsured employees in North region.',
    impact: 'high',
  },
  {
    id: '3',
    category: 'Mental Health',
    problem: 'Mental Wellness Trend',
    reason: 'Engineering department shows rising stress markers (22% increase) specifically in the 25-35 age group.',
    solution: 'Launch "Mindful Engineering" workshop series and 1:1 counseling sessions.',
    impact: 'medium',
  },
  {
    id: '4',
    category: 'Insurance',
    problem: 'Uninsured High-Cost Risk',
    reason: '12 employees in the High Risk category currently lack Term Health insurance, posing a ₹4.5M potential liability.',
    solution: 'Facilitate immediate enrollment in corporate group health policy for flagged employees.',
    impact: 'high',
  }
];
