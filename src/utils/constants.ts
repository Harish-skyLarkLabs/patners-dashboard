export const BASE_PROTOCOL = "http";
export const BASE_HOST = `localhost:5000/api/`;
export const BASE_PROTOCOL_WS = window.location.protocol === "https:" ? "wss" : "ws";
export const BASE_URL: string = `${BASE_PROTOCOL}://${BASE_HOST}`;
export const WS_BASE_URL = `${BASE_PROTOCOL_WS}://${BASE_HOST}`;
export const TESTING: boolean = true;
export const GOOGLE_MAPS_API_KEY = 'AIzaSyC-bqnjCFZ82yl51ys00XkNmd-vLxHSVQE';

export const bundles = [
  {
    id: 1,
    name: "DEFENSE SECURITY SUITE",
    description: "Multi-Domain Threat Detection & Response for Land, Air, and Sea",
    subBundles: [
      {
        id: 101,
        name: "BorderShield Ground Security Package",
        tiers: [
          {
            id: 1001,
            name: "Core",
            price: "$799/month",
            features: [
              "AI-Powered Intruder Detection (99.7% accuracy)",
              "Smart Fence Jumping & Crawling Recognition", 
              "Advanced Loitering & Vehicle Detection",
              "Night Vision & Thermal AI Support",
              "Real-time Alert System",
              "Mobile App Integration",
              "24/7 Technical Support"
            ]
          },
          {
            id: 1002,
            name: "Plus",
            price: "$1,299/month",
            features: [
              "All Core features",
              "Advanced Weapon Detection (Gun, Knife, Explosives)",
              "Facial Recognition with Blacklist/Whitelist",
              "Vandalism & Tampering Detection",
              "Gunshot & Audio Anomaly Detection", 
              "Security Guard Presence & Performance Tracking",
              "Predictive Threat Analytics",
              "Custom Alert Rules & Escalation"
            ]
          },
          {
            id: 1003,
            name: "Max",
            price: "$2,499/month",
            features: [
              "All Plus & Core features",
              "Multi-Sensor Fusion (Visual + IR + Audio + Radar)",
              "Predictive Intrusion Mapping & Risk Assessment",
              "Panic Phrase & Distress Signal Detection",
              "Command Dashboard with Real-time Analytics",
              "Tarmac & Road Defect Detection",
              "AI-Powered Response Coordination",
              "Integration with Law Enforcement Systems"
            ]
          }
        ]
      },
      {
        id: 102,
        name: "SkySentinel Aerial Threat Defense Package",
        tiers: [
          {
            id: 1004,
            name: "Core",
            price: "$899/month",
            features: [
              "Unauthorized Drone Detection (5km range)",
              "Flight Path Tracking & Analysis",
              "No-Fly Zone Enforcement",
              "Basic Drone Classification",
              "Real-time Aerial Threat Alerts",
              "Weather-Resistant Sensors",
              "Mobile Command Center"
            ]
          },
          {
            id: 1005,
            name: "Plus",
            price: "$1,599/month",
            features: [
              "All Core features",
              "Drone Make/Model Identification",
              "Pilot Location Triangulation",
              "Audio Signature Analysis",
              "RF Signal Detection & Jamming",
              "Counter-Drone Measures",
              "Multi-Sensor Fusion System",
              "Predictive Threat Assessment"
            ]
          },
          {
            id: 1006,
            name: "Max",
            price: "$3,199/month",
            features: [
              "All Plus & Core features",
              "Autonomous Drone Response System",
              "Aerial Threat Priority Assessment",
              "Multi-Drone Swarm Detection",
              "Advanced Counter-Measures",
              "Integration with Air Defense Systems",
              "AI-Powered Tactical Decision Support",
              "Real-time Battlefield Analytics"
            ]
          }
        ]
      },
      {
        id: 103,
        name: "MarineShield Maritime Security Package",
        tiers: [
          {
            id: 1007,
            name: "Core",
            price: "$999/month",
            features: [
              "Underwater Intrusion Detection",
              "Surface Vessel Tracking & Identification",
              "Port Perimeter Security",
              "Marine Wildlife Differentiation",
              "Weather-Adaptive Monitoring",
              "Coastal Surveillance Integration",
              "Emergency Response Coordination"
            ]
          },
          {
            id: 1008,
            name: "Plus",
            price: "$1,799/month",
            features: [
              "All Core features",
              "Submarine Detection & Tracking",
              "Underwater Communication Monitoring",
              "Marine Traffic Pattern Analysis",
              "Port Security Automation",
              "Vessel Risk Assessment",
              "Maritime Law Enforcement Integration",
              "Environmental Impact Monitoring"
            ]
          },
          {
            id: 1009,
            name: "Max",
            price: "$3,599/month",
            features: [
              "All Plus & Core features",
              "Advanced Sonar & Radar Integration",
              "Maritime Predictive Analytics",
              "Autonomous Marine Response Units",
              "Multi-Port Security Coordination",
              "International Maritime Law Compliance",
              "Environmental Protection Monitoring",
              "Naval Defense System Integration"
            ]
          }
        ]
      }
    ]
  },
  {
    id: 2,
    name: "PUBLIC SAFETY SUITE",
    description: "Urban & Civic-Scale AI Protection Across Events, Parks, Facilities, and Streets",
    subBundles: [
      {
        id: 201,
        name: "Perimeter Security Package",
        tiers: [
          {
            id: 2001,
            name: "Core",
            price: "$549/month",
            features: [
              "Smart Boundary Breach Detection",
              "Automated Fence-line Monitoring",
              "Unauthorized Vehicle Alert System",
              "Entry Point Supervision",
              "Real-time Perimeter Analytics",
              "Mobile Security Integration",
              "24/7 Automated Monitoring"
            ]
          },
          {
            id: 2002,
            name: "Plus",
            price: "$949/month",
            features: [
              "All Core features",
              "Advanced Tailgating Detection",
              "License Plate Recognition System",
              "Environmental Condition Monitoring",
              "Secure Area Classification",
              "Predictive Security Analytics",
              "Multi-Perimeter Coordination",
              "Weather-Adaptive Sensing"
            ]
          },
          {
            id: 2003,
            name: "Max",
            price: "$1,649/month",
            features: [
              "All Plus & Core features",
              "Autonomous Drone Integration",
              "Multi-Perimeter Defense Layers",
              "Weather-Adaptive Sensing",
              "Central Command Dashboard",
              "AI-Powered Threat Assessment",
              "Automated Response Coordination",
              "Integration with Law Enforcement"
            ]
          }
        ]
      },
      {
        id: 202,
        name: "Public Space Safety Package",
        tiers: [
          {
            id: 2004,
            name: "Core",
            price: "$499/month",
            features: [
              "Crowd Density Monitoring",
              "Suspicious Behavior Detection",
              "Abandoned Object Recognition",
              "Emergency Exit Monitoring",
              "Public Safety Analytics",
              "Mobile App Integration",
              "Community Alert System"
            ]
          },
          {
            id: 2005,
            name: "Plus",
            price: "$849/month",
            features: [
              "All Core features",
              "Violence & Fight Detection",
              "Slip & Fall Detection",
              "Public Address Integration",
              "Directional Audio Alerts",
              "Predictive Safety Analytics",
              "Emergency Services Integration",
              "Real-time Safety Monitoring"
            ]
          },
          {
            id: 2006,
            name: "Max",
            price: "$1,449/month",
            features: [
              "All Plus & Core features",
              "Multi-Camera Tracking",
              "Behavioral Anomaly Prediction",
              "Emergency Services Integration",
              "Mass Notification System",
              "AI-Powered Safety Analytics",
              "Community Engagement Platform",
              "Smart City Integration"
            ]
          }
        ]
      },
      {
        id: 203,
        name: "Event & Venue Security Package",
        tiers: [
          {
            id: 2007,
            name: "Core",
            price: "$599/month",
            features: [
              "Crowd Flow Management",
              "Queue Monitoring & Optimization",
              "Capacity Limit Alerts",
              "VIP Zone Protection",
              "Event Security Analytics",
              "Mobile Security Integration",
              "Real-time Event Monitoring"
            ]
          },
          {
            id: 2008,
            name: "Plus",
            price: "$1,099/month",
            features: [
              "All Core features",
              "Ticket Validation Integration",
              "Prohibited Item Detection",
              "Staff Positioning Optimization",
              "Public Safety Messaging System",
              "Advanced Crowd Analytics",
              "Emergency Evacuation Planning",
              "Multi-Venue Coordination"
            ]
          },
          {
            id: 2009,
            name: "Max",
            price: "$1,899/month",
            features: [
              "All Plus & Core features",
              "Multi-Venue Command Center",
              "Real-time Risk Assessment",
              "Emergency Evacuation Guidance",
              "Law Enforcement Data Sharing",
              "AI-Powered Event Analytics",
              "Predictive Security Planning",
              "Global Event Security Network"
            ]
          }
        ]
      }
    ]
  },
  {
    id: 3,
    name: "CRITICAL INFRASTRUCTURE SUITE",
    description: "AI-Powered Protection for Power Grids, Data Centers, Airports, and Utilities",
    subBundles: [
      {
        id: 301,
        name: "Power Grid Protection Package",
        tiers: [
          {
            id: 3001,
            name: "Core",
            price: "$699/month",
            features: [
              "Substation Intrusion Detection",
              "Equipment Overheating Alerts",
              "Worker Presence Monitoring",
              "Real-time Grid Analytics",
              "Mobile Security Integration",
              "24/7 Grid Protection",
              "Emergency Response Coordination"
            ]
          },
          {
            id: 3002,
            name: "Plus",
            price: "$1,299/month",
            features: [
              "All Core features",
              "Voltage Fluctuation Pattern Detection",
              "Tool Tracking & Unauthorized Usage Alerts",
              "Fire & Smoke AI Monitoring",
              "Predictive Grid Analytics",
              "Advanced Equipment Monitoring",
              "Multi-Substation Coordination",
              "Grid-Wide Security Analytics"
            ]
          },
          {
            id: 3003,
            name: "Max",
            price: "$2,199/month",
            features: [
              "All Plus & Core features",
              "Predictive Failure Mapping",
              "Grid-Wide Command Dashboard",
              "Auto-Emergency Escalation",
              "AI-Powered Grid Analytics",
              "Multi-Grid Coordination",
              "Advanced Threat Neutralization",
              "Global Grid Network Security"
            ]
          }
        ]
      },
      {
        id: 302,
        name: "Data Center Security Package",
        tiers: [
          {
            id: 3004,
            name: "Core",
            price: "$799/month",
            features: [
              "Server Room Access Control",
              "Environmental Condition Monitoring",
              "Equipment Tampering Detection",
              "Power Consumption Analysis",
              "Real-time Data Center Analytics",
              "Mobile Security Integration",
              "24/7 Data Center Protection"
            ]
          },
          {
            id: 3005,
            name: "Plus",
            price: "$1,499/month",
            features: [
              "All Core features",
              "Server Rack-Level Security",
              "Biometric Authentication Integration",
              "Hardware Failure Prediction",
              "Cooling System Optimization",
              "Advanced Data Center Analytics",
              "Multi-Site Coordination",
              "Predictive Maintenance Analytics"
            ]
          },
          {
            id: 3006,
            name: "Max",
            price: "$2,599/month",
            features: [
              "All Plus & Core features",
              "Multi-Site Security Coordination",
              "Real-time Disaster Recovery Planning",
              "Physical-Digital Threat Correlation",
              "Automatic Incident Response Protocols",
              "AI-Powered Data Center Analytics",
              "Global Data Center Network",
              "Autonomous Data Center Protection"
            ]
          }
        ]
      }
    ]
  },
  {
    id: 4,
    name: "HEALTHCARE SECURITY SUITE",
    description: "Comprehensive Protection for Hospitals, Clinics, and Medical Facilities",
    subBundles: [
      {
        id: 401,
        name: "Hospital Security Package",
        tiers: [
          {
            id: 4001,
            name: "Core",
            price: "$749/month",
            features: [
              "Patient Room Monitoring",
              "Staff Authentication",
              "Visitor Management",
              "Equipment Tracking",
              "Real-time Hospital Analytics",
              "Mobile Security Integration",
              "24/7 Hospital Protection"
            ]
          },
          {
            id: 4002,
            name: "Plus",
            price: "$1,399/month",
            features: [
              "All Core features",
              "Fall Detection & Prevention",
              "Medication Administration Verification",
              "Wandering Patient Alerts",
              "Cross-Contamination Prevention",
              "Advanced Hospital Analytics",
              "Multi-Ward Coordination",
              "Predictive Safety Analytics"
            ]
          },
          {
            id: 4003,
            name: "Max",
            price: "$2,399/month",
            features: [
              "All Plus & Core features",
              "Hospital-Wide Emergency Coordination",
              "Patient Flow Optimization",
              "Staff Allocation Intelligence",
              "Integrated Clinical Alert System",
              "AI-Powered Hospital Analytics",
              "Multi-Hospital Network Security",
              "Autonomous Hospital Protection"
            ]
          }
        ]
      }
    ]
  }
];