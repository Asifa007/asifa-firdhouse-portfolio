import { useState, FormEvent } from "react";
import AnimatedSection from "./AnimatedSection";
import { Button } from "./ui/button";
import { Mail, Download, Github, Linkedin, Send, CheckCircle } from "lucide-react";
import { toast } from "sonner";

const isValidEmail = (email: string) =>
  /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (
      !formData.name.trim() ||
      !formData.email.trim() ||
      !formData.message.trim()
    ) {
      toast.error("Please fill in all fields.");
      return;
    }
    if (!isValidEmail(formData.email)) {
      toast.error("Please enter a valid email address.");
      return;
    }
    setIsSubmitted(true);
    toast.success("Message sent! I'll get back to you soon.");
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({ name: "", email: "", message: "" });
    }, 3000);
  };

  return (
    <section id="contact" className="relative py-24 md:py-32">
      <div className="container mx-auto px-4 sm:px-6 max-w-4xl">
        {/* CTA */}
        <AnimatedSection className="text-center mb-16">
          <p className="text-sm text-primary font-display tracking-widest uppercase mb-3">
            Get In Touch
          </p>
          <h2 className="text-3xl md:text-5xl font-display font-bold text-foreground mb-6">
            Let's Work Together
          </h2>
          <p className="text-muted-foreground text-lg max-w-xl mx-auto mb-8">
            I'm always open to new opportunities and interesting projects. Let's
            create something amazing.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="glow" size="lg" asChild>
              <a href="mailto:contact@asifafirdhouse.dev">
                <Mail className="w-4 h-4" />
                Hire Me
              </a>
            </Button>
            <Button variant="heroOutline" size="lg" asChild>
              <a href="#" target="_blank" rel="noopener noreferrer">
                <Download className="w-4 h-4" />
                Download Resume
              </a>
            </Button>
          </div>
        </AnimatedSection>

        {/* Form */}
        <AnimatedSection delay={0.1}>
          <form
            onSubmit={handleSubmit}
            className="max-w-lg mx-auto space-y-5"
          >
            <input
              type="text"
              placeholder="Your Name"
              value={formData.name}
              onChange={(e) =>
                setFormData({ ...formData, name: e.target.value })
              }
              className="w-full px-4 py-3 rounded-lg bg-card border border-border/50 text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/25 transition-all duration-200"
              maxLength={100}
            />
            <input
              type="email"
              placeholder="Your Email"
              value={formData.email}
              onChange={(e) =>
                setFormData({ ...formData, email: e.target.value })
              }
              className="w-full px-4 py-3 rounded-lg bg-card border border-border/50 text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/25 transition-all duration-200"
              maxLength={255}
            />
            <textarea
              placeholder="Your Message"
              rows={5}
              value={formData.message}
              onChange={(e) =>
                setFormData({ ...formData, message: e.target.value })
              }
              className="w-full px-4 py-3 rounded-lg bg-card border border-border/50 text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/25 transition-all duration-200 resize-none"
              maxLength={1000}
            />
            <Button
              type="submit"
              variant="glow"
              size="lg"
              className="w-full"
              disabled={isSubmitted}
            >
              {isSubmitted ? (
                <>
                  <CheckCircle className="w-4 h-4" />
                  Sent!
                </>
              ) : (
                <>
                  <Send className="w-4 h-4" />
                  Send Message
                </>
              )}
            </Button>
          </form>
        </AnimatedSection>

        {/* Social Links */}
        <AnimatedSection delay={0.2} className="flex justify-center gap-6 mt-16">
          <a
            href="https://www.linkedin.com/in/asifafirdhouse"
            target="_blank"
            rel="noopener noreferrer"
            className="group p-3.5 rounded-xl bg-card border border-border/50 hover:border-primary/30 hover-glow transition-all duration-200"
            aria-label="LinkedIn"
          >
            <Linkedin className="w-5 h-5 text-muted-foreground group-hover:text-primary group-hover:scale-110 transition-all duration-200" />
          </a>
          <a
            href="https://github.com/Asifa007"
            target="_blank"
            rel="noopener noreferrer"
            className="group p-3.5 rounded-xl bg-card border border-border/50 hover:border-primary/30 hover-glow transition-all duration-200"
            aria-label="GitHub"
          >
            <Github className="w-5 h-5 text-muted-foreground group-hover:text-primary group-hover:scale-110 transition-all duration-200" />
          </a>
        </AnimatedSection>
      </div>
    </section>
  );
};

export default Contact;
