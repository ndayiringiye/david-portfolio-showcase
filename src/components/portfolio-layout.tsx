import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { PortfolioSidebar } from "./portfolio-sidebar";
import { motion } from "framer-motion";
import { Menu } from "lucide-react";

interface PortfolioLayoutProps {
  children: React.ReactNode;
}

export function PortfolioLayout({ children }: PortfolioLayoutProps) {
  return (
    <SidebarProvider defaultOpen={true}>
      <div className="min-h-screen flex w-full bg-background">
        {/* Mobile Header */}
        <motion.header 
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="md:hidden fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-sm border-b border-border/50 px-4 py-3"
        >
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <SidebarTrigger className="p-2 hover:bg-portfolio-surface-hover rounded-lg transition-colors">
                <Menu className="w-5 h-5 text-portfolio-text-primary" />
              </SidebarTrigger>
              <h1 className="text-lg font-semibold text-portfolio-text-primary">
                David Ndayiringiye
              </h1>
            </div>
          </div>
        </motion.header>

        {/* Sidebar */}
        <PortfolioSidebar />

        {/* Main Content */}
        <main className="flex-1 overflow-auto pt-16 md:pt-0">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="min-h-full"
          >
            {children}
          </motion.div>
        </main>
      </div>
    </SidebarProvider>
  );
}