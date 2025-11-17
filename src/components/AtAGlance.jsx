export default function AtAGlance() {
  return (
    <section className="bg-slate-50">
      <div className="mx-auto max-w-6xl px-6 py-16">
        <h2 className="text-3xl font-semibold text-slate-900">At a Glance</h2>
        <ul className="mt-6 grid gap-4 sm:grid-cols-2 md:grid-cols-4 text-slate-800">
          <li className="rounded-lg bg-white p-4 shadow-sm border border-slate-200">Private AI Environment</li>
          <li className="rounded-lg bg-white p-4 shadow-sm border border-slate-200">No Data Leaves Your System</li>
          <li className="rounded-lg bg-white p-4 shadow-sm border border-slate-200">Zero Hallucinations Architecture</li>
          <li className="rounded-lg bg-white p-4 shadow-sm border border-slate-200">Auditable, Compliant, Flexible</li>
        </ul>
      </div>
    </section>
  );
}
