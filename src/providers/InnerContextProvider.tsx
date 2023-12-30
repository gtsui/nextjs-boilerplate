import ViewProvider from "./ViewProvider";

const InnerContextProvider = ({ children }: { children: React.ReactNode }) => {
  // ==========================================================================
  // RENDER
  // ==========================================================================
  return <ViewProvider>{children}</ViewProvider>;
};

export default InnerContextProvider;
