export default function Contact() {
  return (
    <section className="py-24 px-10">
      <h2 className="text-3xl font-bold text-center mb-10">
        Contact Us
      </h2>

      <form className="max-w-xl mx-auto flex flex-col gap-4">
        <input
          className="border p-3 rounded"
          placeholder="Name"
        />

        <input
          className="border p-3 rounded"
          placeholder="Email"
        />

        <textarea
          className="border p-3 rounded"
          placeholder="Message"
        />

        <button className="bg-black text-white p-3 rounded">
          Send Message
        </button>
      </form>
    </section>
  );
}