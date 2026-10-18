export default function LeadsPage() {
  return (
    <section className="py-24">
      <div className="max-w-3xl mx-auto text-center">
        <div className="w-16 h-16 rounded-full bg-amber-100 dark:bg-amber-900 flex items-center justify-center mx-auto mb-6">
          <span className="text-4xl">📋</span>
        </div>
        <h2 className="text-2xl font-semibold text-gray-900 dark:text-gray-100 mb-2">
          Your leads
        </h2>
        <p className="text-gray-500 dark:text-gray-400 mb-8">
          Leads will appear here once your lead sources are connected.
        </p>
      </div>
    </section>
  );
}