import { useState } from "react";
import { motion } from "framer-motion";
import { 
  FcBusinessman,
  FcGraduationCap,
  FcServices,
  FcGlobe,
  FcClock
} from "react-icons/fc";
import { 
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
  useSidebar,
} from "@/components/ui/sidebar";
import profileImage from "@/assets/profile-illustration.jpg";

interface SidebarItem {
  id: string;
  label: string;
  icon: React.ElementType;
  isActive?: boolean;
}

const sidebarItems: SidebarItem[] = [
  { id: "about", label: "About Me", icon: FcBusinessman },
  { id: "education", label: "Education", icon: FcGraduationCap },
  { id: "services", label: "Services", icon: FcServices },
  { id: "location", label: "Location", icon: FcGlobe },
  { id: "timezone", label: "Time Zone", icon: FcClock },
];

export function PortfolioSidebar() {
  const { state } = useSidebar();
  const [activeItem, setActiveItem] = useState("about");
  const collapsed = state === "collapsed";

  return (
    <Sidebar className="border-r-0">
      <SidebarContent className="bg-gradient-surface border-r border-border/50">
        <div className="p-6">
          <motion.div 
            className="flex flex-col items-center mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="relative mb-4">
              <div className="w-24 h-24 rounded-full bg-gradient-primary p-1 shadow-glow">
                <img
                  src={profileImage}
                  alt="David Ndayiringiye"
                  className="w-full h-full rounded-full object-cover border-2 border-background"
                />
              </div>
              <div className="absolute -bottom-1 -right-1 w-6 h-6 bg-portfolio-accent rounded-full border-2 border-background flex items-center justify-center">
                <div className="w-2 h-2 bg-portfolio-accent-foreground rounded-full animate-pulse"></div>
              </div>
            </div>
            
            {!collapsed && (
              <motion.div 
                className="text-center"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3, duration: 0.5 }}
              >
                <h3 className="text-lg font-semibold text-portfolio-text-primary mb-1">
                  David Ndayiringiye
                </h3>
                <p className="text-sm text-portfolio-text-secondary">
                  Full-Stack Developer
                </p>
              </motion.div>
            )}
          </motion.div>

          <SidebarGroup>
            <SidebarGroupContent>
              <SidebarMenu className="space-y-2">
                {sidebarItems.map((item, index) => (
                  <SidebarMenuItem key={item.id}>
                    <SidebarMenuButton
                      className={`
                        relative group p-3 rounded-xl transition-all duration-300 ease-out
                        ${activeItem === item.id 
                          ? 'bg-primary/20 text-primary shadow-elegant border border-primary/30' 
                          : 'hover:bg-portfolio-surface-hover text-portfolio-text-secondary hover:text-portfolio-text-primary'
                        }
                      `}
                      onClick={() => setActiveItem(item.id)}
                    >
                      <motion.div
                        className="flex items-center space-x-3"
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.1, duration: 0.4 }}
                      >
                        <item.icon className="w-5 h-5 flex-shrink-0" />
                        {!collapsed && (
                          <span className="font-medium capitalize text-sm">
                            {item.label}
                          </span>
                        )}
                      </motion.div>
                      
                      {activeItem === item.id && (
                        <motion.div
                          className="absolute right-2 w-2 h-2 bg-primary rounded-full"
                          layoutId="activeIndicator"
                          transition={{ type: "spring", stiffness: 300, damping: 30 }}
                        />
                      )}
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                ))}
              </SidebarMenu>
            </SidebarGroupContent>
          </SidebarGroup>

          {!collapsed && (
            <motion.div 
              className="absolute bottom-6 left-6 right-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.5 }}
            >
              <div className="bg-portfolio-surface border border-border/50 rounded-lg p-3">
                <div className="flex items-center space-x-2 text-xs">
                  <div className="w-2 h-2 bg-portfolio-accent rounded-full animate-pulse"></div>
                  <span className="text-portfolio-text-secondary">Available for work</span>
                </div>
                <div className="mt-1 text-xs text-portfolio-text-muted">
                  GMT+2 • Rwanda
                </div>
              </div>
            </motion.div>
          )}
        </div>
      </SidebarContent>
    </Sidebar>
  );
}