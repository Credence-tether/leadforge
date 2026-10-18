export default function AutomationsPage() {
  return (
    <section className="py-24">
      <div className="max-w-3xl mx-auto text-center">
        <div className="w-16 h-16 rounded-full bg-emerald-100 dark:bg-emerald-900 flex items-center justify-center mx-auto mb-6">
          <span className="text-4xl">⚙️</span>
        </div>
        <h2 className="text-2xl font-semibold text-gray-900 dark:text-gray-100 mb-2">
          Automations
        </h2>
        <p className="text-gray-500 dark:text-gray-400 mb-8">
          Your automated follow-up workflows will appear here. Set up rules to nurture leads automatically.
        </p>
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <a
            href="/dashboard/automations/create"
            className={`inline-flex items-center gap-2 rounded-md bg-emerald-600 px-5 py-2.5 text-sm font-medium text-white transition-colors hover:bg-emerald-500`}
          >
            <span>Create Workflow</span>
            <svg
              className="h-4 w-4"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}