import Image from "next/image";

export default function OverviewPage() {
  return (
    <section className="py-24">
      <div className="max-w-3xl mx-auto text-center">
        <div className="w-16 h-16 rounded-full bg-indigo-100 dark:bg-indigo-900 flex items-center justify-center mx-auto mb-6">
          <span className="text-4xl font-medium text-indigo-600">📊</span>
        </div>
        <h2 className="text-2xl font-semibold text-gray-900 dark:text-gray-100 mb-2">
          No leads yet
        </h2>
        <p className="text-gray-500 dark:text-gray-400 mb-8">
          Connect your lead sources to start receiving real estate leads in LeadForge.
        </p>
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <a
            href="/dashboard/leads"
            className={`inline-flex items-center gap-2 rounded-md bg-indigo-600 px-5 py-2.5 text-sm font-medium text-white transition-colors hover:bg-indigo-500`}
          >
            <span>Add Leads</span>
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
          <a
            href="/dashboard/settings"
            className={`inline-flex items-center gap-2 rounded-md border border-gray-300 px-5 py-2.5 text-sm font-medium text-gray-700 dark:text-gray-300 transition-colors hover:bg-gray-100 dark:hover:bg-gray-900`}
          >
            <span>Configure Sources</span>
            <svg
              className="h-4 w-4"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path d="M12 5v17M5 12h14" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}