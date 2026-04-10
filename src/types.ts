export type ServiceType = 'AHC' | 'OHC' | 'WellnessApp';

export interface DemographicData {
  gender: { label: string; value: number }[];
  department: { label: string; value: number }[];
  ageGroup: { label: string; value: number }[];
  region: { label: string; value: number }[];
}

export interface FamilyHealthMetric {
  condition: string;
  employeeCount: number;
  familyCount: number;
  trend: 'up' | 'down' | 'stable';
}

export interface InsuranceMetric {
  coveredCount: number;
  uncoveredCount: number;
  totalSpending: number;
  outOfPocketSpending: number;
}

export interface CaseRecord {
  id: string;
  employeeId: string; // Anonymized
  gender: string;
  region: string;
  condition: string;
  procedure: string;
  hasInsurance: boolean;
  totalBill: number;
  insuranceClaimed: number;
  prescriptionUrl: string;
  status: 'active' | 'resolved' | 'critical';
}

export interface ClientConfig {
  name: string;
  enabledServices: ServiceType[];
  employeeCount: number;
  hasAHC: boolean;
  hasOHC: boolean;
  hasApp: boolean;
}

export interface HealthMetric {
  category: string;
  value: number;
  trend: 'up' | 'down' | 'stable';
  change: number;
  status: 'critical' | 'warning' | 'good';
}

export interface RiskStratification {
  high: number;
  moderate: number;
  low: number;
}

export interface ROIMetrics {
  totalSavings: number;
  preventiveCareCost: number;
  potentialHospitalizationCost: number;
  productivityGain: number;
  hospitalizationAvoided: number;
}

export interface EnvironmentalData {
  aqi: number;
  temperature: number;
  humidity: number;
  lastUpdated: string;
}

export interface EnvironmentalImpactScore {
  score: number;
  status: 'excellent' | 'good' | 'fair' | 'poor' | 'critical';
  factors: {
    label: string;
    value: number;
    impact: 'positive' | 'negative' | 'neutral';
  }[];
}

export interface HistoricalTrendPoint {
  date: string;
  employeeHealth: number;
  familyHealth: number;
  savings: number;
}

export interface OfficeLocation {
  id: string;
  name: string;
  region: string;
  employeeCount: number;
  respiratoryRiskPercent: number;
  metabolicRiskPercent: number;
  environmentalData: EnvironmentalData;
  healthIndex: number;
}

export interface CriticalAlert {
  id: string;
  title: string;
  message: string;
  severity: 'critical' | 'warning' | 'info';
  timestamp: string;
  location?: string;
  suggestedAction: string;
}

export interface Insight {
  id: string;
  problem: string;
  reason: string;
  solution: string;
  impact: 'high' | 'medium' | 'low';
  category: string;
}

export interface ComparativeMetric {
  label: string;
  metabolicRisk: number;
  stressLevel: number;
  healthIndex: number;
}

export interface OPDIPDMetric {
  date: string;
  opdCount: number;
  ipdCount: number;
  avgCostPerOpd: number;
  avgCostPerIpd: number;
}

export interface MedicationAdherence {
  id: string;
  employeeId: string;
  medicationName: string;
  condition: string;
  adherenceRate: number;
  lastRefillDate: string;
  nextRefillDate: string;
  riskLevel: 'low' | 'medium' | 'high';
  adherenceCategory: 'Adherent' | 'Partial' | 'Non-Adherent';
  labLinkStatus: 'stable' | 'fluctuating' | 'critical';
  claimsStatus: 'covered' | 'pending' | 'denied';
}

export interface UpcomingTest {
  id: string;
  employeeId: string;
  testName: string;
  scheduledDate: string;
  type: 'AHC' | 'OHC' | 'Specialist';
  status: 'scheduled' | 'overdue' | 'pending-prep';
  priority: 'high' | 'medium' | 'low';
}

export interface FamilyMedication extends MedicationAdherence {
  relationship: 'Spouse' | 'Child' | 'Parent';
  dependentName: string;
}

export interface AIHealthSuggestion {
  id: string;
  targetId: string;
  type: 'diet' | 'routine' | 'precaution';
  title: string;
  content: string;
  priority: 'high' | 'medium' | 'low';
}
