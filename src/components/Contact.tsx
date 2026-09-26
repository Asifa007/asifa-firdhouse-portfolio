import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { Mail, Linkedin, Github, Send } from "lucide-react";
import AnimatedSection from "./AnimatedSection";

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
    <section id="contact" className="relative py-24 md:py-32">
      <div className="container mx-auto px-4 sm:px-6 max-w-5xl">

        {/* Heading */}
        <AnimatedSection>
          <p className="text-sm text-primary font-display tracking-widest uppercase mb-3">
            Contact
          </p>

          <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-4">
            Let's Connect
          </h2>

          <p className="text-muted-foreground text-lg max-w-2xl mb-12">
            Have a project, opportunity, or just want to connect?
            Feel free to reach out.
          </p>
        </AnimatedSection>

        <div className="grid md:grid-cols-2 gap-8">

          {/* Contact Information */}
          <AnimatedSection delay={0.1}>
            <div className="h-full p-6 md:p-8 rounded-xl bg-card border border-border/50 hover:border-primary/30 hover-glow">

              <h3 className="text-xl font-display font-semibold text-foreground mb-6">
                Get in Touch
              </h3>

              <div className="space-y-5">

                {/* Email */}
                <a
                  href="mailto:asifafirdhouse@gmail.com"
                  className="flex items-center gap-4 group"
                >
                  <div className="p-3 rounded-lg bg-primary/10 border border-primary/10">
                    <Mail className="w-5 h-5 text-primary" />
                  </div>

                  <div>
                    <p className="text-xs text-muted-foreground mb-1">
                      Email
                    </p>
                    <p className="text-sm text-foreground group-hover:text-primary transition-colors">
                      asifafirdhouse@gmail.com
                    </p>
                  </div>
                </a>

                {/* LinkedIn */}
                <a
                  href="https://www.linkedin.com/in/Asifa%20Firdhouse"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 group"
                >
                  <div className="p-3 rounded-lg bg-primary/10 border border-primary/10">
                    <Linkedin className="w-5 h-5 text-primary" />
                  </div>

                  <div>
                    <p className="text-xs text-muted-foreground mb-1">
                      LinkedIn
                    </p>
                    <p className="text-sm text-foreground group-hover:text-primary transition-colors">
                      linkedin.com/in/Asifa Firdhouse
                    </p>
                  </div>
                </a>

                {/* GitHub */}
                <a
                  href="https://github.com/Asifa007"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 group"
                >
                  <div className="p-3 rounded-lg bg-primary/10 border border-primary/10">
                    <Github className="w-5 h-5 text-primary" />
                  </div>

                  <div>
                    <p className="text-xs text-muted-foreground mb-1">
                      GitHub
                    </p>
                    <p className="text-sm text-foreground group-hover:text-primary transition-colors">
                      github.com/Asifa007
                    </p>
                  </div>
                </a>

              </div>
            </div>
          </AnimatedSection>

          {/* Contact Form */}
          <AnimatedSection delay={0.2}>
            <form
              ref={form}
              onSubmit={sendEmail}
              className="p-6 md:p-8 rounded-xl bg-card border border-border/50 hover:border-primary/30 hover-glow space-y-5"
            >

              <h3 className="text-xl font-display font-semibold text-foreground mb-2">
                Send a Message
              </h3>

              <input
                type="text"
                name="from_name"
                placeholder="Your Name"
                required
                className="w-full p-4 rounded-lg bg-background/50 border border-border/60 text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary transition-colors"
              />

              <input
                type="email"
                name="from_email"
                placeholder="Your Email"
                required
                className="w-full p-4 rounded-lg bg-background/50 border border-border/60 text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary transition-colors"
              />

              <textarea
                name="message"
                placeholder="Your Message"
                required
                rows={5}
                className="w-full p-4 rounded-lg bg-background/50 border border-border/60 text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary transition-colors resize-none"
              />

              <button
                type="submit"
                disabled={loading}
                className="w-full flex items-center justify-center gap-2 bg-primary text-primary-foreground hover:opacity-90 transition-all duration-300 py-3.5 rounded-lg font-semibold disabled:opacity-60"
              >
                <Send className="w-4 h-4" />
                {loading ? "Sending..." : "Send Message"}
              </button>

              {success && (
                <p className="text-green-400 text-sm text-center">
                  {success}
                </p>
              )}

              {error && (
                <p className="text-red-400 text-sm text-center">
                  {error}
                </p>
              )}

            </form>
          </AnimatedSection>

        </div>
      </div>
    </section>
  );
}
