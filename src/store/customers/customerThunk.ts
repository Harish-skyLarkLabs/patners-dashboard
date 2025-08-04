import { createAsyncThunk } from "@reduxjs/toolkit";

// Mock customers data
const mockCustomers = [
  {
    id: 1,
    email: "john.doe@example.com",
    first_name: "John",
    last_name: "Doe",
    username: "john.doe",
    is_active: true,
    date_joined: "2024-01-15T10:30:00Z"
  },
  {
    id: 2,
    email: "jane.smith@example.com",
    first_name: "Jane",
    last_name: "Smith", 
    username: "jane.smith",
    is_active: true,
    date_joined: "2024-02-20T14:15:00Z"
  }
];

// Mock dashboard data
const mockDashboardData = {
  customer: {
    id: 1,
    email: "john.doe@example.com",
    first_name: "John",
    last_name: "Doe",
    username: "john.doe"
  },
  total_spent: 5497.50,
  subscriptions: [
    {
      id: 1,
      tier_name: "BorderShield Ground Security - Core",
      price: "$599/month",
      status: "active",
      start_date: "2024-01-15",
      features: [
        "Intruder Detection",
        "Fence Jumping / Crawling Recognition", 
        "Loitering & Vehicle Detection",
        "Night Vision & Thermal AI Support"
      ]
    },
    {
      id: 2,
      tier_name: "SkySentinel Aerial Threat Defense - Plus",
      price: "$999/month", 
      status: "active",
      start_date: "2024-02-01",
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
      id: 3,
      tier_name: "Public Space Safety Package - Core",
      price: "$399/month",
      status: "pending",
      start_date: "2024-03-01",
      features: [
        "Crowd Density Monitoring",
        "Suspicious Behavior Detection", 
        "Abandoned Object Recognition",
        "Emergency Exit Monitoring"
      ]
    }
  ],
  latest_bundles: [
    {
      id: 1,
      name: "DEFENSE SECURITY SUITE",
      description: "Multi-Domain Threat Detection & Response for Land, Air, and Sea",
      subscribed: true
    },
    {
      id: 2,
      name: "PUBLIC SAFETY SUITE", 
      description: "Urban & Civic-Scale AI Protection Across Events, Parks, Facilities, and Streets",
      subscribed: false
    },
    {
      id: 3,
      name: "CRITICAL INFRASTRUCTURE SUITE",
      description: "AI-Powered Monitoring for Power Grids, Data Centers, Airports, and Utilities",
      subscribed: false
    }
  ]
};

export const getCustomersList = createAsyncThunk(
  "customers/getCustomerList",
  async (data, thunkAPI) => {
    try {
      // Simulate API delay
      await new Promise(resolve => setTimeout(resolve, 300));
      
      return { data: mockCustomers };
    } catch (error) {
      return thunkAPI.rejectWithValue({ error: error });
    }
  }
);

export const getCustomerDashboard = createAsyncThunk(
  "customers/getCustomerDashboard",
  async (data, thunkAPI) => {
    try {
      // Simulate API delay
      await new Promise(resolve => setTimeout(resolve, 400));
      
      return { data: mockDashboardData };
    } catch (error) {
      return thunkAPI.rejectWithValue({ error: error });
    }
  }
);

export const createBulkSubscriptions = createAsyncThunk(
    "customers/createBulkSubscriptions",
    async (data:any, thunkAPI) => {
      try {
        // Simulate API delay
        await new Promise(resolve => setTimeout(resolve, 600));
        
        // Simulate successful subscription creation
        return { 
          data: { 
            message: "Subscriptions created successfully",
            subscription_count: Array.isArray(data) ? data.length : 1
          } 
        };
      } catch (error) {
        return thunkAPI.rejectWithValue({ error: error });
      }
    }
  );