import DarkModeToggle from './DarkModeToggle';

const ColorShowcase = () => {
  return (
    <div className="min-h-screen bg-surface p-8">
      <DarkModeToggle />
      
      <div className="max-w-4xl mx-auto space-y-8">
        <header className="text-center mb-12">
          <h1 className="text-4xl font-bold text-primary mb-4">
            Your Color System
          </h1>
          <p className="text-lg text-secondary">
            Background: #cfbea3 • Main: #334b69
          </p>
        </header>

        {/* CSS Variables Demo */}
        <section className="card-brand">
          <h2 className="text-2xl font-semibold mb-4 text-primary">
            CSS Variables Usage
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-primary text-surface p-4 rounded">
              <strong>Primary Color</strong>
              <br />var(--color-primary)
            </div>
            <div className="bg-secondary text-surface p-4 rounded">
              <strong>Secondary Color</strong>
              <br />var(--color-secondary)
            </div>
          </div>
        </section>

        {/* Tailwind Classes Demo */}
        <section className="card-brand">
          <h2 className="text-2xl font-semibold mb-4 text-primary">
            Tailwind CSS Classes
          </h2>
          <div className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="bg-background-light text-main-light p-4 rounded">
                <strong>Light Mode</strong>
                <br />bg-background-light text-main-light
              </div>
              <div className="bg-background-dark text-main-dark p-4 rounded">
                <strong>Dark Mode</strong>
                <br />bg-background-dark text-main-dark
              </div>
            </div>
          </div>
        </section>

        {/* Button Variants */}
        <section className="card-brand">
          <h2 className="text-2xl font-semibold mb-4 text-primary">
            Button Variants
          </h2>
          <div className="flex flex-wrap gap-4">
            <button className="btn-brand-primary">
              Primary Button
            </button>
            <button className="btn-brand-secondary">
              Secondary Button
            </button>
            <button className="btn-brand-outline">
              Outline Button
            </button>
          </div>
        </section>

        {/* Brand Colors */}
        <section className="card-brand">
          <h2 className="text-2xl font-semibold mb-4 text-primary">
            Brand Color Utilities
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="bg-brand-light p-4 rounded text-center">
              <div className="text-main-dark font-semibold">Light</div>
              <div className="text-sm text-main-dark">#cfbea3</div>
            </div>
            <div className="bg-brand-dark p-4 rounded text-center">
              <div className="text-brand-light font-semibold">Dark</div>
              <div className="text-sm text-brand-light">#334b69</div>
            </div>
            <div className="bg-brand-gradient p-4 rounded text-center">
              <div className="text-white font-semibold">Gradient</div>
              <div className="text-sm text-white">Light → Dark</div>
            </div>
            <div className="bg-brand-gradient-reverse p-4 rounded text-center">
              <div className="text-white font-semibold">Reverse</div>
              <div className="text-sm text-white">Dark → Light</div>
            </div>
          </div>
        </section>

        {/* Code Examples */}
        <section className="card-brand">
          <h2 className="text-2xl font-semibold mb-4 text-primary">
            Usage Examples
          </h2>
          <div className="space-y-4 text-sm">
            <div className="card-brand-secondary">
              <h3 className="font-semibold mb-2">CSS Variables:</h3>
              <code className="text-primary">
                background-color: var(--color-primary);<br />
                color: var(--color-surface);
              </code>
            </div>
            <div className="card-brand-secondary">
              <h3 className="font-semibold mb-2">Tailwind Classes:</h3>
              <code className="text-primary">
                className="bg-primary text-surface"<br />
                className="bg-background-light text-main-dark"
              </code>
            </div>
            <div className="card-brand-secondary">
              <h3 className="font-semibold mb-2">Custom Utilities:</h3>
              <code className="text-primary">
                className="btn-brand-primary"<br />
                className="card-brand bg-brand-gradient"
              </code>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default ColorShowcase;
