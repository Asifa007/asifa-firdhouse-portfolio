import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

export default function Contact() {
  const form = useRef<HTMLFormElement>(null);
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState("");
  const [error, setError] = useState("");

  const sendEmail = (e: React.FormEvent) => {
    e.preventDefault();

    if (!form.current) return;

    setLoading(true);
    setSuccess("");
    setError("");

    emailjs
      .sendForm(
        "service_wdtm858",
        "template_d9p4xb7",
        form.current,
        "2dYnu4s_Po5Iup9-T"
      )
      .then(
        () => {
          setSuccess("Message sent successfully! 🚀");
          setLoading(false);
          form.current?.reset();
        },
        () => {
          setError("Something went wrong. Please try again.");
          setLoading(false);
        }
      );
  };

  return (
    <section className="py-20 px-6 text-white">
      <div className="max-w-2xl mx-auto">

        <h2 className="text-3xl font-bold mb-6 text-center">
          Contact Me
        </h2>

        <form
          ref={form}
          onSubmit={sendEmail}
          className="space-y-6"
        >
          <input
            type="text"
            name="from_name"
            placeholder="Your Name"
            required
            className="w-full p-4 rounded-lg bg-transparent border border-gray-600 focus:outline-none focus:border-cyan-400"
          />

          <input
            type="email"
            name="from_email"
            placeholder="Your Email"
            required
            className="w-full p-4 rounded-lg bg-transparent border border-gray-600 focus:outline-none focus:border-cyan-400"
          />

          <textarea
            name="message"
            placeholder="Your Message"
            required
            rows={5}
            className="w-full p-4 rounded-lg bg-transparent border border-gray-600 focus:outline-none focus:border-cyan-400"
          ></textarea>

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-cyan-500 hover:bg-cyan-600 transition-all duration-300 py-4 rounded-lg font-semibold"
          >
            {loading ? "Sending..." : "Send Message"}
          </button>

          {success && (
            <p className="text-green-400 text-center">{success}</p>
          )}

          {error && (
            <p className="text-red-400 text-center">{error}</p>
          )}
        </form>
      </div>
    </section>
  );
}
