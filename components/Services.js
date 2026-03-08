export default function Services() {
  return (
    <section className="py-24 px-10">
      <h2 className="text-3xl font-bold mb-10 text-center">
        Our Services
      </h2>

      <div className="grid md:grid-cols-3 gap-8">
        <div className="p-6 border rounded">
          <h3 className="text-xl font-semibold mb-3">
            Web Development
          </h3>
          <p>Modern websites built with scalable technology.</p>
        </div>

        <div className="p-6 border rounded">
          <h3 className="text-xl font-semibold mb-3">
            Cloud Solutions
          </h3>
          <p>Secure cloud infrastructure and deployment.</p>
        </div>

        <div className="p-6 border rounded">
          <h3 className="text-xl font-semibold mb-3">
            Data Analytics
          </h3>
          <p>Insights and automation powered by data.</p>
        </div>
      </div>
    </section>
  );
}