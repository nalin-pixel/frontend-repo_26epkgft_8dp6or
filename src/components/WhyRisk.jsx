export default function WhyRisk() {
  return (
    <section className="bg-slate-50">
      <div className="mx-auto max-w-6xl px-6 py-16">
        <h2 className="text-2xl md:text-3xl font-semibold text-slate-900">AI is redefining how organizations analyze and report information. But if you're relying on platforms you don't fully control, you're exposed to risk in four critical ways:</h2>
        <div className="mt-8 grid gap-6 sm:grid-cols-2">
          <div className="rounded-lg border border-slate-200 bg-white p-6 shadow-sm">
            <h3 className="font-semibold text-slate-900">Data Control Is an Illusion</h3>
            <p className="mt-2 text-slate-700">Once information leaves your environment, you lose visibility, governance, and certainty over where it's stored or how it's used.</p>
          </div>
          <div className="rounded-lg border border-slate-200 bg-white p-6 shadow-sm">
            <h3 className="font-semibold text-slate-900">Accuracy Isn't Guaranteed</h3>
            <p className="mt-2 text-slate-700">Public and shared models can hallucinate, misread context, and generate outputs that can't be verified or audited.</p>
          </div>
          <div className="rounded-lg border border-slate-200 bg-white p-6 shadow-sm">
            <h3 className="font-semibold text-slate-900">Compliance Can't Be Outsourced</h3>
            <p className="mt-2 text-slate-700">Meeting regulatory, retention, and approval requirements requires internal oversight – not blind trust in a third-party system.</p>
          </div>
          <div className="rounded-lg border border-slate-200 bg-white p-6 shadow-sm">
            <h3 className="font-semibold text-slate-900">AI Should Speak Your Language.</h3>
            <p className="mt-2 text-slate-700">Your systems must understand your formulas, logic, and frameworks to deliver reliable results.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
