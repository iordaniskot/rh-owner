import { LoginForm } from "../components/LoginForm";

import DarkModeToggle from "../components/DarkModeToggle/DarkModeToggle";
export default function LoginPage() {
  return (
    <div className="grid min-h-svh lg:grid-cols-2">
      <DarkModeToggle />

      <div className="flex flex-col gap-4 p-6 md:p-10">
        <div className="flex justify-center gap-2 md:justify-start">
          <a href="#" className="flex items-center gap-2 font-medium">
            <img
              src="https://www.rhodesholidaysvillas.com/images/rh1.svg"
              alt="Rhodes Holidays Villas"
              className="h-11 w-auto"
            />
          </a>
        </div>
        <div className="flex flex-1 items-center justify-center">
          <div className="w-full max-w-xs">
            <LoginForm />
          </div>
        </div>
      </div>
      <div className="bg-muted relative hidden lg:block">
        {/* Light mode image */}
        <img
          src="https://cdn.loggia.gr/lodgeContent/f9145883c93f225f5c7dbcd248c1274b.webp"
          alt="Rhodes Holiday Villa"
          className="absolute inset-0 h-full w-full object-cover transition-opacity duration-500 ease-in-out block dark:hidden"
        />
        {/* Dark mode image */}
        <img
          src="https://cdn.loggia.gr/lodgeContent/4d60f81b479228b23e65732304d74d20.webp"
          alt="Rhodes Holiday Villa - Night View"
          className="absolute inset-0 h-full w-full object-cover transition-opacity duration-500 ease-in-out hidden dark:block"
        />
      </div>
    </div>
  );
}
