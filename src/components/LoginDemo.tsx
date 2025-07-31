import { LoginForm } from "./LoginForm";
import DarkModeToggle from "./DarkModeToggle";

export default function LoginDemo() {
  return (
    <div className="min-h-screen bg-background flex items-center justify-center p-4">
      <DarkModeToggle />
      
      <div className="w-full max-w-md">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-primary mb-2">Your Brand Login</h2>
          <p className="text-muted-foreground">
            Using colors: Primary (#334b69) • Secondary (#cfbea3)
          </p>
        </div>
        
        <div className="bg-card border border-border rounded-lg p-6 shadow-lg">
          <LoginForm />
        </div>
      </div>
    </div>
  );
}
