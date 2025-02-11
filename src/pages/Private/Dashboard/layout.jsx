import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar"
import { AppSidebar } from "@/components/app-sidebar"
import { useContext } from "react";
import { AuthContext, AuthProvider } from "../../../backend/AuthContext.jsx"; 

export default function Layout({ children }) {
  const { logout } = useContext(AuthContext);
  return (
    <SidebarProvider>
      <AppSidebar />
      <main>
        <SidebarTrigger />
        {children}
      </main>
    </SidebarProvider>
  )
}
