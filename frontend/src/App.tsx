import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import { AuthProvider, useAuth } from "./context/AuthContext";
import Login from "./pages/auth/Login";
import Dashboard from "./pages/dashboard/Dashboard";
import Products from "./pages/products/Products";
import Services from "./pages/services/Services";
import Messages from "./pages/messages/Messages";
import Analytics from "./pages/analytics/Analytics";
import MainLayout from "./layouts/MainLayout";
import MaintenanceLayout from "./layouts/MaintenanceLayout";
import MaintenancePage from "./pages/maintenance/Maintenance";

// Check maintenance mode from environment variable
const isMaintenanceMode = import.meta.env.VITE_MAINTENANCE_MODE === "true";

const ProtectedRoute: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const { isAuthenticated } = useAuth();
  return isAuthenticated ? <>{children}</> : <Navigate to="/login" />;
};

function AppRoutes() {
  const { isAuthenticated } = useAuth();

  // If in maintenance mode, show only the maintenance page
  if (isMaintenanceMode) {
    return (
      <Routes>
        <Route
          path="*"
          element={
            <MaintenanceLayout>
              <MaintenancePage />
            </MaintenanceLayout>
          }
        />
      </Routes>
    );
  }

  // Normal app routes
  return (
    <Routes>
      <Route
        path="/login"
        element={isAuthenticated ? <Navigate to="/" /> : <Login />}
      />
      <Route
        path="/"
        element={
          <ProtectedRoute>
            <MainLayout />
          </ProtectedRoute>
        }
      >
        <Route index element={<Dashboard />} />
        <Route path="products" element={<Products />} />
        <Route path="services" element={<Services />} />
        <Route path="messages" element={<Messages />} />
        <Route path="analytics" element={<Analytics />} />
      </Route>
    </Routes>
  );
}

function App() {
  return (
    <AuthProvider>
      <AppRoutes />
    </AuthProvider>
  );
}

export default App;
