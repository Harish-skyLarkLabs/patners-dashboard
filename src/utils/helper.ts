
// Email validation
export const validateEmail = (email: string) => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!email) {
    return 'Email is required';
  }
  if (!emailRegex.test(email)) {
    return 'Please enter a valid email address';
  }
  return '';
};

// Password validation
export const validatePassword = (password: string) => {
  if (!password) {
    return 'Password is required';
  }
  if (password.length < 8) {
    return 'Password must be at least 8 characters long';
  }
  return '';
};

export const getCurrentDateTime = (dateTimeString = "") => {
  const date = dateTimeString === "" ? new Date() : new Date(dateTimeString);
  const day = String(date.getDate()).padStart(2, "0");
  const monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
  const month = monthNames[date.getMonth()];
  const hours = String(date.getHours()).padStart(2, "0");
  const minutes = String(date.getMinutes()).padStart(2, "0");
  const seconds = String(date.getSeconds()).padStart(2, "0");

  return `${day} ${month} ${hours}:${minutes}:${seconds}`;
};

const buildFormData = (formData: FormData, obj: any, parentKey = "") => {
  if (Array.isArray(obj)) {
    obj.forEach((element) => {
      buildFormData(formData, element, parentKey);
    });
  } else if (typeof obj === "object" && !(obj instanceof File)) {
    Object.keys(obj).forEach((key) => {
      buildFormData(formData, obj[key], parentKey ? `${parentKey}.${key}` : key);
    });
  } else {
    if (obj == null) {
      return;
    }

    const value = typeof obj === "number" || typeof obj === "boolean" ? obj.toString() : obj;
    formData.append(parentKey, value);
  }
};

export const objectToFormData = (obj: any) => {
  const formData = new FormData();
  buildFormData(formData, obj);
  return formData;
};

export const getTotalPackages = (product) => {
  if (!product.sub_bundles) return 0;
  return product.sub_bundles.reduce((total, subBundle) => 
    total + (subBundle.tires?.length || 0), 0
  );
};

export const getTierColor = (tierName, theme) => {
  const name = tierName.toLowerCase();
  if (name.includes('core')) return theme.palette.primary.main;
  if (name.includes('pro')) return theme.palette.secondary.main;
  if (name.includes('max')) return theme.palette.error.main;
  return theme.palette.grey[600];
};

// Get tier descriptions
export const getTierDescription = (tierName) => {
  const name = tierName.toLowerCase();
  if (name.includes('core')) return "Essential features to get started";
  if (name.includes('pro')) return "Advanced features for growing needs";
  if (name.includes('max')) return "Complete suite for enterprise requirements";
  return "Custom tier with specialized features";
};