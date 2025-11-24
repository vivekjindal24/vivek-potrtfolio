import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { GraduationCap, Award, Code, Brain, FileText } from 'lucide-react';
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
          className="mb-12 text-center sm:mb-16"
        >
          <h1 className="mb-4 text-3xl font-bold sm:text-4xl md:text-5xl">
            About <span className="text-gradient">Me</span>
          </h1>
          <p className="mx-auto max-w-2xl px-4 text-sm text-muted-foreground sm:px-0 sm:text-base md:text-lg">
            Passionate researcher and engineer driving innovation in AI and cloud technologies
          </p>
        </motion.div>

        {/* Bio Section */}
        <div ref={ref} className="mb-16 px-4 sm:mb-20 sm:px-0">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.2 }}
            className="glass dark:glass-dark rounded-2xl p-6 shadow-xl sm:p-8 md:p-12"
          >
            <div className="grid gap-8 sm:gap-12 md:grid-cols-2">
              <div>
                <h2 className="mb-4 text-xl font-bold sm:mb-6 sm:text-2xl md:text-3xl">
                  My Journey
                </h2>
                <div className="space-y-3 text-sm leading-relaxed text-muted-foreground sm:space-y-4 sm:text-base">
                  <p>
                    I'm Vivek. I’m a computer science engineer who likes building intelligent
                    systems that make decisions from messy real world data. I focus on clear code,
                    solid results, and user experiences that feel simple.
                  </p>
                  <p>
                    I work with CNNs and modern deep learning tools. My thesis,{' '}
                    <em>“Next Gen Cricket Scorecard Automation Using Deep Neural Networks”</em>,
                    reached 98% accuracy on gesture recognition. I’ve published three conference
                    papers in 2025 across gesture understanding, plant disease detection, and
                    medical imaging.
                  </p>
                  <p>
                    I also taught as a Teaching Assistant at Medicaps University. I enjoy helping
                    teams move models from notebooks into reliable systems and watching ideas become
                    useful products.
                  </p>
                </div>
              </div>

              <div className="space-y-6">
                <div className="flex items-start gap-3 sm:gap-4">
                  <div className="rounded-full bg-primary/10 p-2 sm:p-3">
                    <GraduationCap className="h-5 w-5 text-primary sm:h-6 sm:w-6" />
                  </div>
                  <div>
                    <h3 className="text-sm font-semibold sm:text-base">Education</h3>
                    <p className="text-xs text-muted-foreground sm:text-sm">
                      M.Tech in CSE (Cloud Computing)
                      <br />
                      Medicaps University - CGPA: 8.71/10
                    </p>
                    <a
                      href="/Vivek Jindal MTech Thesis.pdf"
                      download
                      className="mt-2 inline-flex items-center gap-1.5 text-xs text-primary transition-colors hover:underline sm:text-sm"
                    >
                      <FileText className="h-3 w-3 sm:h-4 sm:w-4" />
                      Download Thesis
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3 sm:gap-4">
                  <div className="rounded-full bg-primary/10 p-2 sm:p-3">
                    <Award className="h-5 w-5 text-primary sm:h-6 sm:w-6" />
                  </div>
                  <div>
                    <h3 className="text-sm font-semibold sm:text-base">Research</h3>
                    <p className="text-xs text-muted-foreground sm:text-sm">
                      3 Conference Publications (2025)
                      <br />
                      IET & International Conferences
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3 sm:gap-4">
                  <div className="rounded-full bg-primary/10 p-2 sm:p-3">
                    <Code className="h-5 w-5 text-primary sm:h-6 sm:w-6" />
                  </div>
                  <div>
                    <h3 className="text-sm font-semibold sm:text-base">Experience</h3>
                    <p className="text-xs text-muted-foreground sm:text-sm">
                      Teaching Assistant
                      <br />
                      Medicaps University (2022 - Present)
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3 sm:gap-4">
                  <div className="rounded-full bg-primary/10 p-2 sm:p-3">
                    <Brain className="h-5 w-5 text-primary sm:h-6 sm:w-6" />
                  </div>
                  <div>
                    <h3 className="text-sm font-semibold sm:text-base">Specialization</h3>
                    <p className="text-xs text-muted-foreground sm:text-sm">
                      Deep Learning, Computer Vision
                      <br />
                      CNN, Image Classification
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3 sm:gap-4">
                  <div className="rounded-full bg-primary/10 p-2 sm:p-3">
                    <Award className="h-5 w-5 text-primary sm:h-6 sm:w-6" />
                  </div>
                  <div>
                    <h3 className="text-sm font-semibold sm:text-base">Certification</h3>
                    <p className="text-xs text-muted-foreground sm:text-sm">
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
          className="px-4 sm:px-0"
        >
          <h2 className="mb-6 text-center text-2xl font-bold sm:mb-8 sm:text-3xl">
            Skills & <span className="text-gradient">Expertise</span>
          </h2>
          <div className="grid gap-4 sm:grid-cols-2 sm:gap-6 lg:grid-cols-4">
            {skills.map((skillGroup, index) => (
              <motion.div
                key={skillGroup.category}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="h-full transition-all hover:-translate-y-1 hover:shadow-xl">
                  <CardContent className="p-4 sm:p-6">
                    <h3 className="mb-3 text-lg font-semibold text-primary sm:mb-4 sm:text-xl">
                      {skillGroup.category}
                    </h3>
                    <ul className="space-y-1.5 sm:space-y-2">
                      {skillGroup.items.map((skill) => (
                        <li
                          key={skill}
                          className="flex items-center text-xs text-muted-foreground sm:text-sm"
                        >
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
