export const useAuth = () => {
  const role = localStorage.getItem("role");

  return {
    role,
    isAdmin: role === "admin",
    isAnalyst: role === "analyst",
    isViewer: role === "viewer",
  };
};