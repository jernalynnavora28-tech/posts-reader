import { ModeToggle } from "@/components/mode-toggle";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col">
      <header className="border-b px-6 py-4 flex items-center justify-between">
        <h1 className="font-bold text-lg">Posts</h1>
        <ModeToggle />
      </header>
      <main className="flex-1 p-6">{children}</main>
    </div>
  );
};

export default Layout;