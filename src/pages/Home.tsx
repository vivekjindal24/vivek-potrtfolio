import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Download, Mail, Github, Linkedin, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';

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

        <div className="container mx-auto px-4" ref={ref}>
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
              className="mb-4 text-5xl font-bold tracking-tight sm:text-6xl md:text-7xl"
            >
              Hi, I'm <span className="text-gradient">Vivek Jindal</span>
            </motion.h1>

            <motion.p
              variants={itemVariants}
              className="mb-8 text-xl text-muted-foreground sm:text-2xl"
            >
              AI/ML Researcher • Computer Vision • Model Builder
            </motion.p>

            <motion.p
              variants={itemVariants}
              className="mx-auto mb-12 max-w-2xl text-lg text-muted-foreground"
            >
              I design and ship deep learning systems that turn noisy visuals into decisions. My
              recent work spans CNNs for gesture understanding, plant health, and medical
              imaging—with 3 peer-reviewed conference papers. I enjoy clean implementations,
              thoughtful UX, and results you can measure.
            </motion.p>

            <motion.div
              variants={itemVariants}
              className="flex flex-wrap items-center justify-center gap-4"
            >
              <Button size="lg" className="group" asChild>
                <a href="/resume.pdf" download>
                  <Download className="mr-2 h-5 w-5 transition-transform group-hover:scale-110" />
                  Download Resume
                </a>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link to="/contact">
                  <Mail className="mr-2 h-5 w-5" />
                  Get in Touch
                </Link>
              </Button>
            </motion.div>

            <motion.div
              variants={itemVariants}
              className="mt-12 flex items-center justify-center gap-6"
            >
              <a
                href="https://github.com/vivekjindal"
                target="_blank"
                rel="noopener noreferrer"
                className="group rounded-full bg-secondary p-3 transition-all hover:scale-110 hover:bg-primary"
              >
                <Github className="h-6 w-6 transition-colors group-hover:text-primary-foreground" />
              </a>
              <a
                href="https://www.linkedin.com/in/24vivek-jindal"
                target="_blank"
                rel="noopener noreferrer"
                className="group rounded-full bg-secondary p-3 transition-all hover:scale-110 hover:bg-primary"
              >
                <Linkedin className="h-6 w-6 transition-colors group-hover:text-primary-foreground" />
              </a>
              <a
                href="mailto:vivek.jindal.sbg@gmail.com"
                className="group rounded-full bg-secondary p-3 transition-all hover:scale-110 hover:bg-primary"
              >
                <Mail className="h-6 w-6 transition-colors group-hover:text-primary-foreground" />
              </a>
            </motion.div>
          </motion.div>

          {/* Scroll Indicator */}
          <motion.div
            className="absolute bottom-8 left-1/2 -translate-x-1/2"
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
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
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
                className="glass dark:glass-dark rounded-lg p-8 text-center shadow-xl"
              >
                <div className="text-gradient mb-2 text-4xl font-bold">{stat.value}</div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
