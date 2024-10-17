import { FormData } from "../types/index";

// Simulate API call
const simulatedApi = (
  data: FormData
): Promise<{ success: boolean; data?: FormData; message?: string }> => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      
      if (Math.random() < 0.5) {
        reject({ message: "Server error occurred. Please try again." });
      } else {
        resolve({ success: true, data });
      }
    }, 2000);
  });
};

export default simulatedApi;