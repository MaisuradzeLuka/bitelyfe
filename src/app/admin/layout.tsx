import { ThemeProvider } from "@/components/shared/theme-provider";
import Header from "@/features/adminHeader/ui/views/adminHeader-view";
import Sidebar from "@/features/adminSidebar/ui/views/adminSidebar-view";
import { SidebarProvider } from "@/components/ui/sidebar";
import "./globals.css";

export default function AdminLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <ThemeProvider
      attribute="class"
      defaultTheme="system"
      enableSystem
      disableTransitionOnChange
    >
      <main className="flex">
        <SidebarProvider>
          <Sidebar />

          <div className="flex flex-col w-full">
            <Header />

            <div className="flex-1 overflow-auto bg-[#ecf0fa] dark:bg-[#242B39] px-6 py-4 border-t border-gray-300 dark:border-gray-700 pt-8 pb-12">
              {children}
            </div>
          </div>
        </SidebarProvider>
      </main>
    </ThemeProvider>
  );
}
