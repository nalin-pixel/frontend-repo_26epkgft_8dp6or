export default function Results() {
  return (
    <section className="bg-slate-50">
      <div className="mx-auto max-w-6xl px-6 py-16">
        <h2 className="text-3xl font-semibold text-slate-900">Results & Proof</h2>
        <ul className="mt-6 grid gap-4 sm:grid-cols-3 text-slate-800">
          <li className="rounded-lg bg-white p-4 shadow-sm border border-slate-200">90% Reduction in Manual Review Time</li>
          <li className="rounded-lg bg-white p-4 shadow-sm border border-slate-200">100% Data Containment</li>
          <li className="rounded-lg bg-white p-4 shadow-sm border border-slate-200">Zero Hallucinations</li>
        </ul>
      </div>
    </section>
  );
}
