import { GalleryVerticalEnd } from "lucide-react";
import { LoginForm } from "./LoginForm";

export default function LoginPage() {
  return (
    <div className="grid min-h-screen lg:grid-cols-2">
      <div className="flex flex-col gap-4 p-6 md:p-10">
        <div className="flex justify-center gap-2 md:justify-start">
          <a href="#" className="flex items-center gap-2 font-medium">
            <div className="bg-primary text-primary-foreground flex size-6 items-center justify-center rounded-md">
              <GalleryVerticalEnd className="size-4" />
            </div>
            Your Company
          </a>
        </div>
        <div className="flex flex-1 items-center justify-center">
          <div className="w-full max-w-xs">
            <LoginForm />
          </div>
        </div>
      </div>
      <div className="bg-muted relative hidden lg:block">
        <div className="absolute inset-0 bg-secondary/20 flex items-center justify-center">
          <div className="text-center p-8">
            <h2 className="text-3xl font-bold text-primary mb-4">Welcome Back</h2>
            <p className="text-lg text-muted-foreground">
              Sign in to access your account and continue where you left off.
            </p>
            <div className="mt-8 p-6 bg-primary/10 rounded-lg">
              <p className="text-sm text-muted-foreground">
                Using your brand colors:<br />
                Primary: #334b69 • Secondary: #cfbea3
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
