export const BASE_PROTOCOL = "http";
export const BASE_HOST = `localhost:8000`;
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
            price: "$599/month",
            features: [
              "Intruder Detection",
              "Fence Jumping / Crawling Recognition",
              "Loitering & Vehicle Detection",
              "Night Vision & Thermal AI Support"
            ]
          },
          {
            id: 1002,
            name: "Plus",
            price: "$999/month",
            features: [
              "All Core features",
              "Weapon Detection",
              "Face Recognition (Blacklist)",
              "Vandalism Detection",
              "Gunshot & Fence Tampering Detection (Audio)",
              "Security Guard Presence Tracking"
            ]
          },
          {
            id: 1003,
            name: "Max",
            price: "$1,999/month",
            features: [
              "All Plus & Core features",
              "Multi-Sensor Fusion (Visual + IR + Audio)",
              "Predictive Intrusion Mapping",
              "Panic Phrase Detection",
              "Command Dashboard Integration",
              "Tarmac & Road Defect Detection"
            ]
          }
        ]
      },
      {
        id: 102,
        name: "SkySentinel Aerial Threat Defense Package",
        tiers: [
          {
            id: 1001,
            name: "Core",
            price: "$599/month",
            features: [
              "Intruder Detection",
              "Fence Jumping / Crawling Recognition",
              "Loitering & Vehicle Detection",
              "Night Vision & Thermal AI Support"
            ]
          },
          {
            id: 1002,
            name: "Plus",
            price: "$999/month",
            features: [
              "All Core features",
              "Weapon Detection",
              "Face Recognition (Blacklist)",
              "Vandalism Detection",
              "Gunshot & Fence Tampering Detection (Audio)",
              "Security Guard Presence Tracking"
            ]
          },
          {
            id: 1003,
            name: "Max",
            price: "$1,999/month",
            features: [
              "All Plus & Core features",
              "Multi-Sensor Fusion (Visual + IR + Audio)",
              "Predictive Intrusion Mapping",
              "Panic Phrase Detection",
              "Command Dashboard Integration",
              "Tarmac & Road Defect Detection"
            ]
          }
        ]
      },
      {
        id: 103,
        name: "MarineShield Maritime Security Package",
        tiers: [
          {
            id: 1001,
            name: "Core",
            price: "$599/month",
            features: [
              "Intruder Detection",
              "Fence Jumping / Crawling Recognition",
              "Loitering & Vehicle Detection",
              "Night Vision & Thermal AI Support"
            ]
          },
          {
            id: 1002,
            name: "Plus",
            price: "$999/month",
            features: [
              "All Core features",
              "Weapon Detection",
              "Face Recognition (Blacklist)",
              "Vandalism Detection",
              "Gunshot & Fence Tampering Detection (Audio)",
              "Security Guard Presence Tracking"
            ]
          },
          {
            id: 1003,
            name: "Max",
            price: "$1,999/month",
            features: [
              "All Plus & Core features",
              "Multi-Sensor Fusion (Visual + IR + Audio)",
              "Predictive Intrusion Mapping",
              "Panic Phrase Detection",
              "Command Dashboard Integration",
              "Tarmac & Road Defect Detection"
            ]
          }
        ]
      },
      {
        id: 104,
        name: "Rapid Response Tactical AI Kit",
        tiers: [
          {
            id: 1001,
            name: "Core",
            price: "$599/month",
            features: [
              "Intruder Detection",
              "Fence Jumping / Crawling Recognition",
              "Loitering & Vehicle Detection",
              "Night Vision & Thermal AI Support"
            ]
          },
          {
            id: 1002,
            name: "Plus",
            price: "$999/month",
            features: [
              "All Core features",
              "Weapon Detection",
              "Face Recognition (Blacklist)",
              "Vandalism Detection",
              "Gunshot & Fence Tampering Detection (Audio)",
              "Security Guard Presence Tracking"
            ]
          },
          {
            id: 1003,
            name: "Max",
            price: "$1,999/month",
            features: [
              "All Plus & Core features",
              "Multi-Sensor Fusion (Visual + IR + Audio)",
              "Predictive Intrusion Mapping",
              "Panic Phrase Detection",
              "Command Dashboard Integration",
              "Tarmac & Road Defect Detection"
            ]
          }
        ]
      },
      {
        id: 105,
        name: "CyberSentinel Digital Defense Package",
        tiers: [
          {
            id: 1013,
            name: "Core",
            price: "$499/month",
            features: [
              "Network Intrusion Detection",
              "Malware Signature Recognition",
              "Endpoint Device Monitoring"
            ]
          },
          {
            id: 1014,
            name: "Plus",
            price: "$899/month",
            features: [
              "All Core features",
              "AI-Based Threat Prediction",
              "Insider Threat Behavior Analytics",
              "Suspicious File Transfer Alerts"
            ]
          },
          {
            id: 1015,
            name: "Max",
            price: "$1,599/month",
            features: [
              "All Plus & Core features",
              "Real-Time Threat Response System",
              "Encrypted Command & Control Dashboard",
              "Dark Web Watch & Breach Alerts"
            ]
          }
        ]
      },
      {
        id: 106,
        name: "BiometricGuard Advanced Identity Package",
        tiers: [
          {
            id: 1016,
            name: "Core",
            price: "$549/month",
            features: [
              "Facial Recognition Database",
              "Pattern-of-Life Analysis",
              "Biometric Access Control",
              "Identity Verification Alerts"
            ]
          },
          {
            id: 1017,
            name: "Plus",
            price: "$949/month",
            features: [
              "All Core features",
              "Multi-Factor Biometric Authentication",
              "Behavioral Biometrics Monitoring",
              "Spoofing Attempt Detection",
              "Real-time Access Rights Management"
            ]
          },
          {
            id: 1018,
            name: "Max",
            price: "$1,799/month",
            features: [
              "All Plus & Core features",
              "Cross-Location Identity Tracking",
              "Distributed Identity Verification Network",
              "Deep Fake Detection & Prevention",
              "Emergency Identity Lockdown Protocol"
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
            price: "$449/month",
            features: [
              "Boundary Breach Detection",
              "Fence-line Monitoring",
              "Unauthorized Vehicle Alerts",
              "Entry Point Supervision"
            ]
          },
          {
            id: 2002,
            name: "Plus",
            price: "$849/month",
            features: [
              "All Core features",
              "Tailgating Detection",
              "License Plate Recognition",
              "Environmental Condition Monitoring",
              "Secure Area Classification"
            ]
          },
          {
            id: 2003,
            name: "Max",
            price: "$1,449/month",
            features: [
              "All Plus & Core features",
              "Autonomous Drone Integration",
              "Multi-Perimeter Defense Layers",
              "Weather-Adaptive Sensing",
              "Central Command Dashboard"
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
            price: "$399/month",
            features: [
              "Crowd Density Monitoring",
              "Suspicious Behavior Detection",
              "Abandoned Object Recognition",
              "Emergency Exit Monitoring"
            ]
          },
          {
            id: 2005,
            name: "Plus",
            price: "$749/month",
            features: [
              "All Core features",
              "Violence & Fight Detection",
              "Slip & Fall Detection",
              "Public Address Integration",
              "Directional Audio Alerts"
            ]
          },
          {
            id: 2006,
            name: "Max",
            price: "$1,349/month",
            features: [
              "All Plus & Core features",
              "Multi-Camera Tracking",
              "Behavioral Anomaly Prediction",
              "Emergency Services Integration",
              "Mass Notification System"
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
            price: "$499/month",
            features: [
              "Crowd Flow Management",
              "Queue Monitoring",
              "Capacity Limit Alerts",
              "VIP Zone Protection"
            ]
          },
          {
            id: 2008,
            name: "Plus",
            price: "$899/month",
            features: [
              "All Core features",
              "Ticket Validation Integration",
              "Prohibited Item Detection",
              "Staff Positioning Optimization",
              "Public Safety Messaging System"
            ]
          },
          {
            id: 2009,
            name: "Max",
            price: "$1,699/month",
            features: [
              "All Plus & Core features",
              "Multi-Venue Command Center",
              "Real-time Risk Assessment",
              "Emergency Evacuation Guidance",
              "Law Enforcement Data Sharing"
            ]
          }
        ]
      },
      {
        id: 204,
        name: "Facility & Campus Management Package",
        tiers: [
          {
            id: 2010,
            name: "Core",
            price: "$549/month",
            features: [
              "Building Occupancy Tracking",
              "Unauthorized Access Alerts",
              "HVAC Integration",
              "After-Hours Monitoring"
            ]
          },
          {
            id: 2011,
            name: "Plus",
            price: "$949/month",
            features: [
              "All Core features",
              "Fire & Smoke Detection",
              "Equipment Tampering Alerts",
              "Maintenance Request Generation",
              "Energy Efficiency Optimization"
            ]
          },
          {
            id: 2012,
            name: "Max",
            price: "$1,799/month",
            features: [
              "All Plus & Core features",
              "Multi-Building Management",
              "Laboratory Condition Monitoring",
              "Resource Allocation Optimization",
              "Emergency Response Coordination"
            ]
          }
        ]
      },
      {
        id: 205,
        name: "Parking & Traffic Intelligence Package",
        tiers: [
          {
            id: 2013,
            name: "Core",
            price: "$349/month",
            features: [
              "Space Availability Monitoring",
              "Illegal Parking Detection",
              "Traffic Flow Analysis",
              "Vehicle Counting & Classification"
            ]
          },
          {
            id: 2014,
            name: "Plus",
            price: "$649/month",
            features: [
              "All Core features",
              "License Plate Recognition",
              "Parking Violation Recording",
              "Average Wait Time Calculation",
              "Parking Guidance System"
            ]
          },
          {
            id: 2015,
            name: "Max",
            price: "$1,249/month",
            features: [
              "All Plus & Core features",
              "Multi-Lot Management System",
              "Predictive Traffic Pattern Analysis",
              "Dynamic Pricing Integration",
              "Digital Payment Integration"
            ]
          }
        ]
      },
      {
        id: 206,
        name: "Airspace & Drone Threat Detection",
        tiers: [
          {
            id: 2016,
            name: "Core",
            price: "$599/month",
            features: [
              "Unauthorized Drone Detection",
              "Flight Path Tracking",
              "No-Fly Zone Enforcement",
              "Basic Drone Classification"
            ]
          },
          {
            id: 2017,
            name: "Plus",
            price: "$999/month",
            features: [
              "All Core features",
              "Drone Make/Model Identification",
              "Pilot Location Triangulation",
              "Audio Signature Analysis",
              "RF Signal Detection"
            ]
          },
          {
            id: 2018,
            name: "Max",
            price: "$1,899/month",
            features: [
              "All Plus & Core features",
              "Counter-Drone Measures",
              "Multi-Sensor Fusion System",
              "Autonomous Drone Response",
              "Aerial Threat Priority Assessment"
            ]
          }
        ]
      },
      {
        id: 207,
        name: "Aerial Monitoring (Drone-Based AI)",
        tiers: [
          {
            id: 2019,
            name: "Core",
            price: "$649/month",
            features: [
              "Automated Flight Paths",
              "Real-Time Video Feed",
              "Terrain Mapping",
              "Point-of-Interest Monitoring"
            ]
          },
          {
            id: 2020,
            name: "Plus",
            price: "$1,049/month",
            features: [
              "All Core features",
              "Object Detection & Tracking",
              "Anomaly Detection",
              "Multi-Spectral Imaging",
              "Weather-Adaptive Flight"
            ]
          },
          {
            id: 2021,
            name: "Max",
            price: "$1,949/month",
            features: [
              "All Plus & Core features",
              "Drone Swarm Coordination",
              "AI-Driven Mission Planning",
              "Autonomous Incident Response",
              "Tactical Decision Support"
            ]
          }
        ]
      },
      {
        id: 208,
        name: "Rail & Metro Safety Package",
        tiers: [
          {
            id: 2022,
            name: "Core",
            price: "$399/month",
            features: [
              "Platform Intrusion Detection",
              "Unauthorized Entry Alerts",
              "Real-Time Person Tracking"
            ]
          },
          {
            id: 2023,
            name: "Plus",
            price: "$699/month",
            features: [
              "All Core features",
              "Aggression & Fight Detection",
              "Left Object Alerts",
              "Overcrowding Threshold Monitoring"
            ]
          },
          {
            id: 2024,
            name: "Max",
            price: "$1,299/month",
            features: [
              "All Plus & Core features",
              "Multi-Platform Incident Coordination",
              "Rail Operator Alert Integration",
              "AI-Powered Evacuation Guidance"
            ]
          }
        ]
      },
      {
        id: 209,
        name: "Urban Emergency Response System",
        tiers: [
          {
            id: 2025,
            name: "Core",
            price: "$549/month",
            features: [
              "Emergency Call Detection",
              "Incident Classification",
              "First Responder Coordination",
              "Real-time Situation Awareness"
            ]
          },
          {
            id: 2026,
            name: "Plus",
            price: "$949/month",
            features: [
              "All Core features",
              "Multi-Agency Response Coordination",
              "Disaster Scene Analysis",
              "Victim Location Tracking",
              "Resource Allocation Optimization"
            ]
          },
          {
            id: 2027,
            name: "Max",
            price: "$1,799/month",
            features: [
              "All Plus & Core features",
              "Predictive Emergency Modeling",
              "Automatic Evacuation Route Planning",
              "Critical Infrastructure Protection",
              "Public Emergency Alert Integration"
            ]
          }
        ]
      }
    ]
  },
  {
    id: 3,
    name: "CRITICAL INFRASTRUCTURE SUITE",
    description: "AI-Powered Monitoring for Power Grids, Data Centers, Airports, and Utilities",
    subBundles: [
      {
        id: 301,
        name: "Power Grid Protection Package",
        tiers: [
          {
            id: 3001,
            name: "Core",
            price: "$599/month",
            features: [
              "Substation Intrusion Detection",
              "Equipment Overheating Alerts",
              "Worker Presence Monitoring"
            ]
          },
          {
            id: 3002,
            name: "Plus",
            price: "$999/month",
            features: [
              "All Core features",
              "Voltage Fluctuation Pattern Detection",
              "Tool Tracking & Unauthorized Usage Alerts",
              "Fire & Smoke AI Monitoring"
            ]
          },
          {
            id: 3003,
            name: "Max",
            price: "$1,599/month",
            features: [
              "All Plus & Core features",
              "Predictive Failure Mapping",
              "Grid-Wide Command Dashboard",
              "Auto-Emergency Escalation to Response Teams"
            ]
          }
        ]
      },
      {
        id: 302,
        name: "Airport Security Intelligence Package",
        tiers: [
          {
            id: 3004,
            name: "Core",
            price: "$799/month",
            features: [
              "Runway Intrusion Detection",
              "Passenger Queue Monitoring",
              "Baggage Area Surveillance"
            ]
          },
          {
            id: 3005,
            name: "Plus",
            price: "$1,199/month",
            features: [
              "All Core features",
              "Face & ID Mismatch Detection",
              "Unattended Luggage Alerts",
              "Airport Tarmac Surveillance"
            ]
          },
          {
            id: 3006,
            name: "Max",
            price: "$2,099/month",
            features: [
              "All Plus & Core features",
              "Command Tower Integration",
              "Flight Crew Movement Monitoring",
              "AI Coordination with Local Authorities"
            ]
          }
        ]
      },
      {
        id: 303,
        name: "Data Center Security Package",
        tiers: [
          {
            id: 3007,
            name: "Core",
            price: "$699/month",
            features: [
              "Server Room Access Control",
              "Environmental Condition Monitoring",
              "Equipment Tampering Detection",
              "Power Consumption Analysis"
            ]
          },
          {
            id: 3008,
            name: "Plus",
            price: "$1,149/month",
            features: [
              "All Core features",
              "Server Rack-Level Security",
              "Biometric Authentication Integration",
              "Hardware Failure Prediction",
              "Cooling System Optimization"
            ]
          },
          {
            id: 3009,
            name: "Max",
            price: "$1,899/month",
            features: [
              "All Plus & Core features",
              "Multi-Site Security Coordination",
              "Real-time Disaster Recovery Planning",
              "Physical-Digital Threat Correlation",
              "Automatic Incident Response Protocols"
            ]
          }
        ]
      },
      {
        id: 304,
        name: "Water Utility Protection System",
        tiers: [
          {
            id: 3010,
            name: "Core",
            price: "$549/month",
            features: [
              "Treatment Plant Monitoring",
              "Water Quality Sensor Integration",
              "Facility Access Control",
              "Basic Contamination Detection"
            ]
          },
          {
            id: 3011,
            name: "Plus",
            price: "$899/month",
            features: [
              "All Core features",
              "Distribution Network Monitoring",
              "Chemical Level Analysis",
              "Infrastructure Integrity Checks",
              "Maintenance Scheduling Optimization"
            ]
          },
          {
            id: 3012,
            name: "Max",
            price: "$1,699/month",
            features: [
              "All Plus & Core features",
              "AI-Driven Supply Chain Security",
              "Advanced Contamination Analytics",
              "Flood & Drought Impact Prediction",
              "Emergency Response Coordination"
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
            price: "$649/month",
            features: [
              "Patient Room Monitoring",
              "Staff Authentication",
              "Visitor Management",
              "Equipment Tracking"
            ]
          },
          {
            id: 4002,
            name: "Plus",
            price: "$1,099/month",
            features: [
              "All Core features",
              "Fall Detection & Prevention",
              "Medication Administration Verification",
              "Wandering Patient Alerts",
              "Cross-Contamination Prevention"
            ]
          },
          {
            id: 4003,
            name: "Max",
            price: "$1,899/month",
            features: [
              "All Plus & Core features",
              "Hospital-Wide Emergency Coordination",
              "Patient Flow Optimization",
              "Staff Allocation Intelligence",
              "Integrated Clinical Alert System"
            ]
          }
        ]
      },
      {
        id: 402,
        name: "Pharmaceutical Security Package",
        tiers: [
          {
            id: 4004,
            name: "Core",
            price: "$599/month",
            features: [
              "Controlled Substance Monitoring",
              "Storage Temperature Tracking",
              "Dispensing Authentication",
              "Inventory Management"
            ]
          },
          {
            id: 4005,
            name: "Plus",
            price: "$999/month",
            features: [
              "All Core features",
              "Supply Chain Verification",
              "Counterfeit Detection",
              "Prescription Pattern Analysis",
              "Regulatory Compliance Automation"
            ]
          },
          {
            id: 4006,
            name: "Max",
            price: "$1,799/month",
            features: [
              "All Plus & Core features",
              "Multi-Facility Inventory Coordination",
              "Drug Interaction Alert System",
              "Automated Regulatory Reporting",
              "Clinical Trial Security Protocols"
            ]
          }
        ]
      },
      {
        id: 403,
        name: "Medical Device Security Suite",
        tiers: [
          {
            id: 4007,
            name: "Core",
            price: "$549/month",
            features: [
              "Device Tracking & Location",
              "Usage Authentication",
              "Maintenance Scheduling",
              "Calibration Verification"
            ]
          },
          {
            id: 4008,
            name: "Plus",
            price: "$949/month",
            features: [
              "All Core features",
              "Performance Anomaly Detection",
              "Tampering Prevention",
              "Cross-Contamination Monitoring",
              "Patient-Device Association"
            ]
          },
          {
            id: 4009,
            name: "Max",
            price: "$1,699/month",
            features: [
              "All Plus & Core features",
              "Predictive Maintenance Analytics",
              "Cybersecurity for Connected Devices",
              "Regulatory Compliance Documentation",
              "Clinical Outcome Correlation"
            ]
          }
        ]
      }
    ]
  }
];