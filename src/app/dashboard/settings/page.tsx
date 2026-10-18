export default function SettingsPage() {
  return (
    <section className="py-24">
      <div className="max-w-3xl mx-auto">
        <div className="space-y-6">
          <div className="w-16 h-16 rounded-full bg-indigo-100 dark:bg-indigo-900 flex items-center justify-center mb-6">
            <span className="text-4xl">⚙️</span>
          </div>
          <h2 className="text-2xl font-semibold text-gray-900 dark:text-gray-100">
            Settings
          </h2>
          <p className="text-gray-500 dark:text-gray-400">
            Configure your LeadForge workspace. Supabase, n8n, AI provider, and Gmail
            connections are managed through environment variables in your
            <code className="font-mono text-sm">.env</code> file.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
            <div className="border border-gray-200 dark:border-gray-800 rounded-xl p-6 bg-white dark:bg-gray-900">
              <h3 className="font-medium text-gray-900 dark:text-gray-100 mb-3">Supabase</h3>
              <p className="text-sm text-gray-500 dark:text-gray-400 mb-4">
                Database, auth, and storage powered by Supabase.
              </p>
              <div className="flex gap-2">
                <button className="flex-1 rounded-md border border-gray-300 bg-white px-3 py-2 text-sm text-gray-700 hover:bg-gray-50" disabled>Connect</button>
                <button className="rounded-md border border-gray-300 bg-white px-3 py-2 text-sm text-gray-700 hover:bg-gray-50" disabled>Test connection</button>
              </div>
            </div>
            <div className="border border-gray-200 dark:border-gray-800 rounded-xl p-6 bg-white dark:bg-gray-900">
              <h3 className="font-medium text-gray-900 dark:text-gray-100 mb-3">n8n</h3>
              <p className="text-sm text-gray-500 dark:text-gray-400 mb-4">
                Automation workflows powered by n8n.
              </p>
              <div className="flex gap-2">
                <button className="flex-1 rounded-md border border-gray-300 bg-white px-3 py-2 text-sm text-gray-700 hover:bg-gray-50" disabled>Connect</button>
                <button className="rounded-md border border-gray-300 bg-white px-3 py-2 text-sm text-gray-700 hover:bg-gray-50" disabled>Test connection</button>
              </div>
            </div>
            <div className="border border-gray-200 dark:border-gray-800 rounded-xl p-6 bg-white dark:bg-gray-900">
              <h3 className="font-medium text-gray-900 dark:text-gray-100 mb-3">AI provider</h3>
              <p className="text-sm text-gray-500 dark:text-gray-400 mb-4">
                Lead scoring and message generation via Vercel AI Gateway.
              </p>
              <div className="flex gap-2">
                <button className="flex-1 rounded-md border border-gray-300 bg-white px-3 py-2 text-sm text-gray-700 hover:bg-gray-50" disabled>Configure</button>
                <button className="rounded-md border border-gray-300 bg-white px-3 py-2 text-sm text-gray-700 hover:bg-gray-50" disabled>Test connection</button>
              </div>
            </div>
            <div className="border border-gray-200 dark:border-gray-800 rounded-xl p-6 bg-white dark:bg-gray-900">
              <h3 className="font-medium text-gray-900 dark:text-gray-100 mb-3">Gmail</h3>
              <p className="text-sm text-gray-500 dark:text-gray-400 mb-4">
                Two-way email sync for lead communications.
              </p>
              <div className="flex gap-2">
                <button className="flex-1 rounded-md border border-gray-300 bg-white px-3 py-2 text-sm text-gray-700 hover:bg-gray-50" disabled>Connect Gmail</button>
                <button className="rounded-md border border-gray-300 bg-white px-3 py-2 text-sm text-gray-700 hover:bg-gray-50" disabled>Test connection</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
