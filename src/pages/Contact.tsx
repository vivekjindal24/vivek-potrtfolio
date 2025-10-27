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
  });
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    try {
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

      setFormData({ name: '', email: '', subject: '', message: '' });
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
          className="mb-16 text-center"
        >
          <h1 className="mb-4 text-5xl font-bold">
            Get in <span className="text-gradient">Touch</span>
          </h1>
          <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
            Have a question or want to work together? Feel free to reach out!
          </p>
        </motion.div>

        <div className="mx-auto grid max-w-6xl gap-8 lg:grid-cols-3">
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className="space-y-6"
          >
            <Card>
              <CardHeader>
                <CardTitle>Contact Information</CardTitle>
                <CardDescription>Let's connect and discuss opportunities</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-start gap-4">
                  <div className="rounded-full bg-primary/10 p-3">
                    <Mail className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold">Email</h3>
                    <a
                      href="mailto:vivek.jindal.sbg@gmail.com"
                      className="text-sm text-muted-foreground transition-colors hover:text-primary"
                    >
                      vivek.jindal.sbg@gmail.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="rounded-full bg-primary/10 p-3">
                    <MapPin className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold">Location</h3>
                    <p className="text-sm text-muted-foreground">Indore, India</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Social Links</CardTitle>
                <CardDescription>Connect with me online</CardDescription>
              </CardHeader>
              <CardContent className="space-y-3">
                <a
                  href="https://github.com/vivekjindal"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 rounded-lg p-3 transition-colors hover:bg-secondary"
                >
                  <Github className="h-5 w-5 text-primary" />
                  <div>
                    <div className="font-medium">GitHub</div>
                    <div className="text-xs text-muted-foreground">@vivekjindal</div>
                  </div>
                </a>

                <a
                  href="https://www.linkedin.com/in/24vivek-jindal"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 rounded-lg p-3 transition-colors hover:bg-secondary"
                >
                  <Linkedin className="h-5 w-5 text-primary" />
                  <div>
                    <div className="font-medium">LinkedIn</div>
                    <div className="text-xs text-muted-foreground">/in/24vivek-jindal</div>
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
              <CardHeader>
                <CardTitle>Send a Message</CardTitle>
                <CardDescription>
                  Fill out the form below and I'll get back to you as soon as possible
                </CardDescription>
              </CardHeader>
              <CardContent>
                {!isContactEndpointConfigured() && !isEmailConfigured() && (
                  <div className="rounded-md border border-yellow-500/30 bg-yellow-500/10 p-3 text-sm text-yellow-800 dark:text-yellow-200">
                    Note: The contact form isn't configured yet. Please email me directly.
                  </div>
                )}
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid gap-6 sm:grid-cols-2">
                    <div className="space-y-2">
                      <label htmlFor="name" className="text-sm font-medium">
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

                    <div className="space-y-2">
                      <label htmlFor="email" className="text-sm font-medium">
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

                  <div className="space-y-2">
                    <label htmlFor="subject" className="text-sm font-medium">
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

                  <div className="space-y-2">
                    <label htmlFor="message" className="text-sm font-medium">
                      Message *
                    </label>
                    <Textarea
                      id="message"
                      name="message"
                      placeholder="Your message..."
                      required
                      rows={6}
                      value={formData.message}
                      onChange={handleChange}
                      disabled={isLoading}
                    />
                  </div>

                  <Button type="submit" size="lg" disabled={isLoading} className="w-full">
                    {isLoading ? (
                      'Sending...'
                    ) : (
                      <>
                        <Send className="mr-2 h-5 w-5" />
                        Send Message
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
