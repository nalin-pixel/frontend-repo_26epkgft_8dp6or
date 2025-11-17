export default function OurSolution() {
  return (
    <section className="bg-white">
      <div className="mx-auto max-w-6xl px-6 py-16">
        <h2 className="text-3xl font-semibold text-slate-900">Our Solution</h2>
        <p className="mt-4 max-w-3xl text-slate-700">Purpose-built for precision, compliance, and control.</p>
        <p className="mt-6 text-slate-700">XFinLabs delivers a Private AI platform — purpose-built for regulated enterprises that demand precision, control, and compliance. Here's how we're different:</p>

        <div className="mt-8 grid gap-6 sm:grid-cols-2">
          <div className="rounded-lg border border-slate-200 p-6">
            <h3 className="font-semibold text-slate-900">Your Data. Fully Encrypted. Fully Controlled.</h3>
            <p className="mt-2 text-slate-700">Every piece of information is encrypted before it ever reaches an LLM. All analysis happens inside your secured environment — never transmitted externally, never outside your control.</p>
          </div>
          <div className="rounded-lg border border-slate-200 p-6">
            <h3 className="font-semibold text-slate-900">Accuracy, Engineered for Trust.</h3>
            <p className="mt-2 text-slate-700">Our proprietary Data Dictionary and Formula Engine teach the AI your business logic — not generic internet data. This eliminates hallucinations, enforces contextual accuracy, and ensures every result is verifiable and repeatable.</p>
          </div>
          <div className="rounded-lg border border-slate-200 p-6">
            <h3 className="font-semibold text-slate-900">Compliance, Built In.</h3>
            <p className="mt-2 text-slate-700">Operate with your own internal oversight, not a vendor's. XFinLabs enables full transparency, auditable workflows, and traceable activity logs — aligned with your governance and regulatory requirements.</p>
          </div>
          <div className="rounded-lg border border-slate-200 p-6">
            <h3 className="font-semibold text-slate-900">Model Freedom. Total Flexibility.</h3>
            <p className="mt-2 text-slate-700">You're never locked into one foundation model. Connect your Private AI to OpenAI, Anthropic, Google, or Meta — or deploy entirely within your environment. Build, train, and scale on your proprietary data and workflows.</p>
          </div>
        </div>

        <p className="mt-8 text-slate-700">Bottom line: XFinLabs gives enterprises the ability to own, train, and control their AI — fully secure, fully private, and universally compatible. Each element is designed for total data authority and repeatable, compliant intelligence at scale.</p>
      </div>
    </section>
  );
}
