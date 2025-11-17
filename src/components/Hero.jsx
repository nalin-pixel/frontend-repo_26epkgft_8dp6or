import Spline from '@splinetool/react-spline';

export default function Hero() {
  return (
    <section className="relative min-h-[80vh] w-full overflow-hidden bg-slate-950">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/41MGRk-UDPKO-l6W/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div className="relative z-10 mx-auto flex min-h-[80vh] max-w-7xl flex-col items-start justify-center px-6 py-24 text-white">
        <h1 className="text-3xl sm:text-5xl md:text-6xl font-semibold tracking-tight">
          Enterprise Generative AI Solutions
        </h1>
        <p className="mt-4 max-w-3xl text-base sm:text-lg md:text-xl text-slate-200">
          The Secure, Compliant, and Intelligent AI Engine for Regulated Enterprises.
        </p>
      </div>

      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-56 bg-gradient-to-t from-slate-950/90 to-transparent" />
    </section>
  );
}
