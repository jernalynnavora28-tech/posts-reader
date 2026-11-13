import { Outlet } from "react-router";

export default function Layout() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <header>
        {/* Your navigation or header elements go here */}
      </header>
      <main>
        <Outlet />
      </main>
    </div>
  );
}

export const gutter = "grid gap-x-6 sm:grid-cols-[3.5rem_minmax(0,1fr)]";