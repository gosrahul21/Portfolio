export default function CalendlySection() {
  const calendlyUrl = "https://calendly.com/your-calendly-username/30min";
  return (
    <section className="py-16 md:py-20 px-4 md:px-8">
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="text-3xl md:text-5xl font-bold mb-4 md:mb-6 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
          Book a Call
        </h2>
        <p className="text-lg md:text-xl text-gray-300 mb-6">
          Pick a time that works for you. I keep my calendar up to date.
        </p>
        <div className="w-full aspect-video rounded-xl overflow-hidden border border-white/10">
          <iframe
            src={calendlyUrl}
            className="w-full h-full"
            title="Book a call"
            frameBorder={0}
          />
        </div>
      </div>
    </section>
  );
}
