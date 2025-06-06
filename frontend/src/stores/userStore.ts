import { create } from "zustand"; //For Global State Management
import axios from "../lib/axios";
import { toast } from "react-hot-toast"; //For Invoking Notification

type UserStore = {
  name: string;
  email?: string;
  password: string;
  confirmPassword?: string;
};
export const useUserStore = create((set) => ({
  user: null,
  token: null,
  checkingAuth: false,
  isAuthenticated: localStorage.getItem("checkingAuth") === "true",

  signup: async ({ name, email, password }: UserStore) => {
    set({ loading: true });

    try {
      const res = await axios.post("/auth/signup", { name, email, password });
      console.log("Response1", res);

      if (res.data.success) {
        set({ token: res.data, loading: false, checkingAuth: true });
        localStorage.setItem("checkingAuth", "true");
        set({ isAuthenticated: true });
        toast.success(res.data.message);
        return res;
      } else {
        set({ loading: false, checkingAuth: false, token: null });
        localStorage.setItem("checkingAuth", "false");
        set({ isAuthenticated: true });
        toast.error("Duplicate Email, Please Use Different Email");
        return;
      }
    } catch (error) {
      set({ loading: false, checkingAuth: false, token: null });
      toast.error("Duplicate Email, Please Use Different Email");
    }
  },
  signin: async ({ email, password }: UserStore) => {
    set({ loading: true });

    try {
      const res = await axios.post("/auth/login", { email, password });
      if (res.data.success) {
        set({ token: res.data.token, loading: false, checkingAuth: true });
        localStorage.setItem("checkingAuth", "true");
        set({ isAuthenticated: true });
        toast.success(res.data.message);
      } else {
        set({ loading: false, checkingAuth: false, token: null });
        localStorage.setItem("checkingAuth", "false");
        set({ isAuthenticated: false });
        toast.error(res.data.message);
      }
    } catch (error) {
      set({ loading: false });
      toast.error("Invalid Email or Password");
    }
  },

  logout: async () => {
    try {
      const res = await axios.post("/auth/logout");

      localStorage.removeItem("checkingAuth");
      set({ isAuthenticated: false });
      set({ token: null });
      toast.success("Logged out successfully");
    } catch (error) {
      toast.error("An error occurred during logout");
    }
  },
}));

// TODO: Implement the axios interceptors for refreshing access token

// Axios interceptor for token refresh
