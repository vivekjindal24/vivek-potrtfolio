import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Download, Mail, Github, Linkedin, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { TypeAnimation } from 'react-type-animation';

const Home = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: 'easeOut',
      },
    },
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative flex min-h-screen items-center justify-center overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0 -z-10">
          <div className="absolute inset-0 animate-gradient bg-gradient-to-br from-primary/20 via-purple-500/20 to-pink-500/20 bg-[length:400%_400%]" />
          <div className="bg-grid-pattern absolute inset-0 opacity-10" />
        </div>

        {/* Floating Elements */}
        <motion.div
          className="absolute left-20 top-20 h-72 w-72 rounded-full bg-primary/30 blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
        <motion.div
          className="absolute bottom-20 right-20 h-96 w-96 rounded-full bg-purple-500/30 blur-3xl"
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />

        <div className="container mx-auto px-4 pb-20 sm:pb-0" ref={ref}>
          <motion.div
            className="mx-auto max-w-4xl text-center"
            variants={containerVariants}
            initial="hidden"
            animate={inView ? 'visible' : 'hidden'}
          >
            <motion.div variants={itemVariants} className="mb-8">
              <div className="glow mx-auto mb-6 h-32 w-32 overflow-hidden rounded-full border-4 border-primary shadow-2xl">
                <img
                  src="/profile.jpg"
                  alt="Vivek Jindal"
                  className="h-full w-full object-cover"
                  loading="eager"
                />
              </div>
            </motion.div>

            <motion.h1
              variants={itemVariants}
              className="mb-4 text-3xl font-bold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl"
            >
              Hi, I'm <span className="text-gradient">Vivek Jindal</span>
            </motion.h1>

            <motion.p
              variants={itemVariants}
              className="mb-8 text-base text-muted-foreground sm:text-xl md:text-2xl"
              aria-live="polite"
            >
              <TypeAnimation
                sequence={['AI/ML Researcher • Computer Vision • Model Builder', 1200]}
                speed={50}
                cursor={true}
                repeat={0}
                wrapper="span"
              />
            </motion.p>

            <motion.p
              variants={itemVariants}
              className="mx-auto mb-10 max-w-2xl px-4 text-sm leading-relaxed text-muted-foreground sm:px-0 sm:text-base md:mb-12 md:text-lg"
            >
              I design and ship deep learning systems that turn noisy visuals into decisions. My
              recent work spans CNNs for gesture understanding, plant health, and medical
              imaging—with 3 peer-reviewed conference papers. I enjoy clean implementations,
              thoughtful UX, and results you can measure.
            </motion.p>

            <motion.div
              variants={itemVariants}
              className="flex flex-col items-center justify-center gap-3 px-4 sm:flex-row sm:gap-4 sm:px-0"
            >
              <Button size="lg" className="group w-full sm:w-auto" asChild>
                <a href="/resume.pdf" download>
                  <Download className="mr-2 h-4 w-4 transition-transform group-hover:scale-110 sm:h-5 sm:w-5" />
                  <span className="text-sm sm:text-base">Download Resume</span>
                </a>
              </Button>
              <Button size="lg" variant="outline" className="w-full sm:w-auto" asChild>
                <Link to="/contact">
                  <Mail className="mr-2 h-4 w-4 sm:h-5 sm:w-5" />
                  <span className="text-sm sm:text-base">Get in Touch</span>
                </Link>
              </Button>
            </motion.div>

            <motion.div
              variants={itemVariants}
              className="mt-8 flex items-center justify-center gap-4 sm:mt-12 sm:gap-6"
            >
              <a
                href="https://github.com/vivekjindal"
                target="_blank"
                rel="noopener noreferrer"
                className="group rounded-full bg-secondary p-2.5 transition-all hover:scale-110 hover:bg-primary sm:p-3"
                aria-label="GitHub Profile"
              >
                <Github className="h-5 w-5 transition-colors group-hover:text-primary-foreground sm:h-6 sm:w-6" />
              </a>
              <a
                href="https://www.linkedin.com/in/24vivek-jindal"
                target="_blank"
                rel="noopener noreferrer"
                className="group rounded-full bg-secondary p-2.5 transition-all hover:scale-110 hover:bg-primary sm:p-3"
                aria-label="LinkedIn Profile"
              >
                <Linkedin className="h-5 w-5 transition-colors group-hover:text-primary-foreground sm:h-6 sm:w-6" />
              </a>
              <a
                href="mailto:vivek.jindal.sbg@gmail.com"
                className="group rounded-full bg-secondary p-2.5 transition-all hover:scale-110 hover:bg-primary sm:p-3"
                aria-label="Email Contact"
              >
                <Mail className="h-5 w-5 transition-colors group-hover:text-primary-foreground sm:h-6 sm:w-6" />
              </a>
            </motion.div>
          </motion.div>

          {/* Scroll Indicator */}
          <motion.div
            className="pointer-events-none absolute bottom-4 left-1/2 z-0 -translate-x-1/2 sm:bottom-8"
            animate={{
              y: [0, 10, 0],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
          >
            <ArrowRight className="h-6 w-6 rotate-90 text-muted-foreground" />
          </motion.div>
        </div>
      </section>

      {/* Quick Stats */}
      <section className="py-12 sm:py-16 md:py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 sm:gap-8 md:grid-cols-3">
            {[
              { label: 'Conference Publications', value: '3' },
              { label: 'M.Tech CGPA', value: '8.71' },
              { label: 'Research Projects', value: '5+' },
            ].map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                className="glass dark:glass-dark rounded-lg p-6 text-center shadow-xl sm:p-8"
              >
                <div className="text-gradient mb-2 text-3xl font-bold sm:text-4xl">
                  {stat.value}
                </div>
                <div className="text-xs text-muted-foreground sm:text-sm">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
