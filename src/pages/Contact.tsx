import { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, MapPin, Send, Github, Linkedin } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';
import emailjs from '@emailjs/browser';
import { env, isEmailConfigured, isContactEndpointConfigured } from '@/lib/env';

const Contact = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
    website: '', // honeypot
  });
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      // Honeypot: if filled, silently succeed to drop bots
      if (formData.website) {
        toast({
          title: 'Message sent!',
          description: "Thank you for reaching out. I'll get back to you soon!",
        });
        setFormData({ name: '', email: '', subject: '', message: '', website: '' });
        return;
      }
      // 1) Try Google Apps Script endpoint if configured (free forever)
      if (isContactEndpointConfigured()) {
        // Use text/plain and no-cors to avoid preflight and CORS issues with Apps Script
        await fetch(env.CONTACT_ENDPOINT_URL!, {
          method: 'POST',
          mode: 'no-cors',
          headers: { 'Content-Type': 'text/plain;charset=utf-8' },
          body: JSON.stringify({
            name: formData.name,
            email: formData.email,
            subject: formData.subject,
            message: formData.message,
          }),
        });
      }
      // 2) Else fallback to EmailJS if configured
      else if (isEmailConfigured()) {
        await emailjs.send(
          env.EMAILJS_SERVICE_ID!,
          env.EMAILJS_TEMPLATE_ID!,
          {
            from_name: formData.name,
            from_email: formData.email,
            subject: formData.subject,
            message: formData.message,
          },
          env.EMAILJS_PUBLIC_KEY!
        );
      } else {
        throw new Error('No contact transport configured');
      }

      toast({
        title: 'Message sent!',
        description: "Thank you for reaching out. I'll get back to you soon!",
      });

      setFormData({ name: '', email: '', subject: '', message: '', website: '' });
    } catch (error) {
      toast({
        title: 'Error',
        description:
          'Message not sent. Email service is not configured or failed to send. Please email me directly.',
        variant: 'destructive',
      });
    } finally {
      setIsLoading(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className="min-h-screen pb-20 pt-24">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-12 text-center sm:mb-16"
        >
          <h1 className="mb-4 text-3xl font-bold sm:text-4xl md:text-5xl">
            Get in <span className="text-gradient">Touch</span>
          </h1>
          <p className="mx-auto max-w-2xl px-4 text-sm text-muted-foreground sm:px-0 sm:text-base md:text-lg">
            Have a question or want to work together? Feel free to reach out!
          </p>
        </motion.div>

        <div className="mx-auto grid max-w-6xl gap-6 px-4 sm:gap-8 sm:px-0 lg:grid-cols-3">
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className="space-y-4 sm:space-y-6"
          >
            <Card>
              <CardHeader className="p-4 sm:p-6">
                <CardTitle className="text-lg sm:text-xl">Contact Information</CardTitle>
                <CardDescription className="text-xs sm:text-sm">
                  Let's connect and discuss opportunities
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-3 p-4 pt-0 sm:space-y-4 sm:p-6 sm:pt-0">
                <div className="flex items-start gap-3 sm:gap-4">
                  <div className="rounded-full bg-primary/10 p-2 sm:p-3">
                    <Mail className="h-4 w-4 text-primary sm:h-5 sm:w-5" />
                  </div>
                  <div>
                    <h3 className="text-sm font-semibold sm:text-base">Email</h3>
                    <a
                      href="mailto:vivek.jindal.sbg@gmail.com"
                      className="break-all text-xs text-muted-foreground transition-colors hover:text-primary sm:text-sm"
                    >
                      vivek.jindal.sbg@gmail.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3 sm:gap-4">
                  <div className="rounded-full bg-primary/10 p-2 sm:p-3">
                    <MapPin className="h-4 w-4 text-primary sm:h-5 sm:w-5" />
                  </div>
                  <div>
                    <h3 className="text-sm font-semibold sm:text-base">Location</h3>
                    <p className="text-xs text-muted-foreground sm:text-sm">Indore, India</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="p-4 sm:p-6">
                <CardTitle className="text-lg sm:text-xl">Social Links</CardTitle>
                <CardDescription className="text-xs sm:text-sm">
                  Connect with me online
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-2 p-4 pt-0 sm:space-y-3 sm:p-6 sm:pt-0">
                <a
                  href="https://github.com/vivekjindal"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 rounded-lg p-2 transition-colors hover:bg-secondary sm:gap-3 sm:p-3"
                >
                  <Github className="h-4 w-4 text-primary sm:h-5 sm:w-5" />
                  <div>
                    <div className="text-sm font-medium sm:text-base">GitHub</div>
                    <div className="text-[10px] text-muted-foreground sm:text-xs">@vivekjindal</div>
                  </div>
                </a>

                <a
                  href="https://www.linkedin.com/in/24vivek-jindal"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 rounded-lg p-2 transition-colors hover:bg-secondary sm:gap-3 sm:p-3"
                >
                  <Linkedin className="h-4 w-4 text-primary sm:h-5 sm:w-5" />
                  <div>
                    <div className="text-sm font-medium sm:text-base">LinkedIn</div>
                    <div className="text-[10px] text-muted-foreground sm:text-xs">
                      /in/24vivek-jindal
                    </div>
                  </div>
                </a>
              </CardContent>
            </Card>
          </motion.div>

          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4 }}
            className="lg:col-span-2"
          >
            <Card>
              <CardHeader className="p-4 sm:p-6">
                <CardTitle className="text-lg sm:text-xl">Send a Message</CardTitle>
                <CardDescription className="text-xs sm:text-sm">
                  Fill out the form below and I'll get back to you as soon as possible
                </CardDescription>
              </CardHeader>
              <CardContent className="p-4 pt-0 sm:p-6 sm:pt-0">
                {!isContactEndpointConfigured() && !isEmailConfigured() && (
                  <div className="mb-4 rounded-md border border-yellow-500/30 bg-yellow-500/10 p-2 text-xs text-yellow-800 dark:text-yellow-200 sm:mb-6 sm:p-3 sm:text-sm">
                    Note: The contact form isn't configured yet. Please email me directly.
                  </div>
                )}
                <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
                  {/* Honeypot field (leave empty) */}
                  <div className="hidden">
                    <label htmlFor="website">Website</label>
                    <input
                      id="website"
                      name="website"
                      type="text"
                      value={formData.website}
                      onChange={(e) => setFormData({ ...formData, website: e.target.value })}
                      autoComplete="off"
                      tabIndex={-1}
                    />
                  </div>
                  <div className="grid gap-4 sm:grid-cols-2 sm:gap-6">
                    <div className="space-y-1.5 sm:space-y-2">
                      <label htmlFor="name" className="text-xs font-medium sm:text-sm">
                        Name *
                      </label>
                      <Input
                        id="name"
                        name="name"
                        placeholder="Your name"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        disabled={isLoading}
                      />
                    </div>

                    <div className="space-y-1.5 sm:space-y-2">
                      <label htmlFor="email" className="text-xs font-medium sm:text-sm">
                        Email *
                      </label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        placeholder="your.email@example.com"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        disabled={isLoading}
                      />
                    </div>
                  </div>

                  <div className="space-y-1.5 sm:space-y-2">
                    <label htmlFor="subject" className="text-xs font-medium sm:text-sm">
                      Subject *
                    </label>
                    <Input
                      id="subject"
                      name="subject"
                      placeholder="What is this about?"
                      required
                      value={formData.subject}
                      onChange={handleChange}
                      disabled={isLoading}
                    />
                  </div>

                  <div className="space-y-1.5 sm:space-y-2">
                    <label htmlFor="message" className="text-xs font-medium sm:text-sm">
                      Message *
                    </label>
                    <Textarea
                      id="message"
                      name="message"
                      placeholder="Your message..."
                      required
                      rows={4}
                      className="sm:min-h-[120px]"
                      value={formData.message}
                      onChange={handleChange}
                      disabled={isLoading}
                    />
                  </div>

                  <Button type="submit" size="lg" disabled={isLoading} className="w-full">
                    {isLoading ? (
                      <span className="text-sm sm:text-base">Sending...</span>
                    ) : (
                      <>
                        <Send className="mr-2 h-4 w-4 sm:h-5 sm:w-5" />
                        <span className="text-sm sm:text-base">Send Message</span>
                      </>
                    )}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
