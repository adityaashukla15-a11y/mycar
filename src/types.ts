export interface ServiceFeature {
  id: string;
  title: string;
  description: string;
  iconName: 'touchless' | 'interior' | 'automatic' | 'waxing';
}

export interface ProcessStep {
  stepNumber: string;
  title: string;
  description: string;
  iconName: 'booking' | 'inspection' | 'washing' | 'completion';
}

export interface PricingPlan {
  id: string;
  name: string;
  price: string;
  duration: string;
  recommended?: boolean;
  features: {
    included: boolean;
    name: string;
  }[];
}

export interface BlogPost {
  id: string;
  title: string;
  category: string;
  date: string;
  author: string;
  readTime: string;
  image: string;
  summary: string;
}

export interface AppointmentFormData {
  fullName: string;
  email: string;
  phoneNumber: string;
  vehicleModel: string;
  serviceType: string;
  date: string;
  timeSlot: string;
  notes?: string;
}
