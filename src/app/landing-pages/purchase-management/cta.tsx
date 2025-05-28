export function CTASection() {
  return (
    <section className="py-20 bg-emerald-900 text-white text-center px-6">
      <h2 className="text-4xl font-bold mb-4">Ready to simplify your procurement?</h2>
      <p className="text-lg mb-8">Let’s streamline your purchasing workflow with our smart solutions.</p>
      <div className="space-x-4">
        <button className="px-8 py-4 bg-white text-emerald-900 rounded-lg font-semibold hover:bg-emerald-200 transition-all hover:scale-105">
          Get a Demo
        </button>
        <button className="px-8 py-4 border-2 border-white text-white rounded-lg hover:bg-white hover:text-emerald-900 transition-all hover:scale-105">
          Contact Us
        </button>
      </div>
    </section>
  );
}