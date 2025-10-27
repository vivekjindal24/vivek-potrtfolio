import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { GraduationCap, Award, Code, Brain } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const About = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const skills = [
    {
      category: 'AI/ML',
      items: ['TensorFlow', 'PyTorch', 'CNNs', 'Deep Learning', 'Computer Vision'],
    },
    { category: 'Cloud', items: ['AWS', 'Azure', 'Google Cloud', 'Docker', 'Kubernetes'] },
    { category: 'Programming', items: ['Python', 'Java', 'JavaScript', 'TypeScript', 'C++'] },
    { category: 'Frameworks', items: ['React', 'Node.js', 'FastAPI', 'Spring Boot', 'Django'] },
  ];

  return (
    <div className="min-h-screen pb-20 pt-24">
      <div className="container mx-auto px-4">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-16 text-center"
        >
          <h1 className="mb-4 text-5xl font-bold">
            About <span className="text-gradient">Me</span>
          </h1>
          <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
            Passionate researcher and engineer driving innovation in AI and cloud technologies
          </p>
        </motion.div>

        {/* Bio Section */}
        <div ref={ref} className="mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.2 }}
            className="glass dark:glass-dark rounded-2xl p-8 shadow-xl md:p-12"
          >
            <div className="grid gap-12 md:grid-cols-2">
              <div>
                <h2 className="mb-6 text-3xl font-bold">My Journey</h2>
                <div className="space-y-4 text-muted-foreground">
                  <p>
                    I'm a dedicated AI/ML researcher and M.Tech scholar in Computer Science &
                    Engineering, specializing in Cloud Computing from Medicaps University with a
                    CGPA of 8.71/10.
                  </p>
                  <p>
                    My research focuses on Convolutional Neural Networks (CNNs) and their
                    applications in automated systems. My thesis "Next-Gen Cricket Scorecard
                    Automation Using Deep Neural Networks" achieved 98% accuracy in gesture
                    recognition. I've published 3 conference papers in 2025 at prestigious IET and
                    international conferences.
                  </p>
                  <p>
                    As a Teaching Assistant at Medicaps University, I combine academic research with
                    practical implementation, working on cutting-edge projects in computer vision,
                    plant disease detection, and medical imaging.
                  </p>
                </div>
              </div>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="rounded-full bg-primary/10 p-3">
                    <GraduationCap className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold">Education</h3>
                    <p className="text-sm text-muted-foreground">
                      M.Tech in CSE (Cloud Computing)
                      <br />
                      Medicaps University - CGPA: 8.71/10
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="rounded-full bg-primary/10 p-3">
                    <Award className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold">Research</h3>
                    <p className="text-sm text-muted-foreground">
                      3 Conference Publications (2025)
                      <br />
                      IET & International Conferences
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="rounded-full bg-primary/10 p-3">
                    <Code className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold">Experience</h3>
                    <p className="text-sm text-muted-foreground">
                      Teaching Assistant
                      <br />
                      Medicaps University (2022 - Present)
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="rounded-full bg-primary/10 p-3">
                    <Brain className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold">Specialization</h3>
                    <p className="text-sm text-muted-foreground">
                      Deep Learning, Computer Vision
                      <br />
                      CNN, Image Classification
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="rounded-full bg-primary/10 p-3">
                    <Award className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold">Certification</h3>
                    <p className="text-sm text-muted-foreground">
                      <a
                        href="https://catalog-education.oracle.com/ords/certview/sharebadge?id=9E52AC7305972CDDDEB5A1FC373C5626DB7943E07B9027129FFDCCDE958C06FC"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-primary hover:underline"
                      >
                        Oracle APEX Cloud Developer Certified Professional (Verified)
                      </a>
                      <br />
                      Oracle
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Skills Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="mb-8 text-center text-3xl font-bold">
            Skills & <span className="text-gradient">Expertise</span>
          </h2>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {skills.map((skillGroup, index) => (
              <motion.div
                key={skillGroup.category}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="h-full transition-all hover:-translate-y-1 hover:shadow-xl">
                  <CardContent className="p-6">
                    <h3 className="mb-4 text-xl font-semibold text-primary">
                      {skillGroup.category}
                    </h3>
                    <ul className="space-y-2">
                      {skillGroup.items.map((skill) => (
                        <li key={skill} className="flex items-center text-sm text-muted-foreground">
                          <span className="mr-2 h-1.5 w-1.5 rounded-full bg-primary" />
                          {skill}
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default About;
