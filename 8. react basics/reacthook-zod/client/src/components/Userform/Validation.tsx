import { z } from "zod";

export const schema = z.object({
    name: z.string().min(1, "Name is required"),
    surname: z.string().min(1, "Surname is required"),
    email: z.string().email("Invalid email address"),
    password: z.string().min(6, "Password must be at least 6 characters long"),
    city: z.string().optional(),
    state: z.string().optional(),
    type: z.string().min(1, "Type is required"),
    subType: z.string().optional(),
}).refine((data) => {
    if (data.type === "type2" || data.type === "type3" || data.type === "type4") {
      return data.city !== undefined && data.city.trim() !== "";
    }
    return true;
  }, {
    message: "City is required for the selected type",
    path: ["city"],
  }).refine((data) => {
    if (data.type === "type3") {
      return data.subType !== undefined && data.subType.trim() !== "";
    }
    return true;
  }, {
    message: "Subtype is required",
    path: ["subType"],
  }).refine((data) => {
    if (data.subType === "subtype1") {
      return data.state !== undefined && data.state.trim() !== "";
    }
    return true;
  }, {
    message: "State is required",
    path: ["state"],
  });
