import { motion } from 'framer-motion';
import { Briefcase, GraduationCap, Calendar } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

const experiences = [
  {
    title: 'Associate Software Engineer',
    company: 'Accenture',
    location: 'Gurugram, India',
    period: 'March 2026 - Present',
    description:
      'Working as an Associate Software Engineer at Accenture, contributing to software development and delivery.',
    achievements: [
      'Oracle Fusion AI Agent Studio Certified Foundations Associate (Dec 2025)',
      'Oracle APEX Cloud Developer Certified Professional (Sep 2025)',
      'Completed Delivery Practice School training (Aug 2025)',
      'Applying AI/ML expertise and cloud skills in enterprise delivery projects',
    ],
  },
  {
    title: 'Teaching Assistant',
    company: 'Medicaps University',
    location: 'Indore, India',
    period: 'October 2022 - November 2025',
    description:
      'Supported the Computer Science & Engineering department throughout the M.Tech program.',
    achievements: [
      'Conducted lab sessions for B.Tech CSE students in Data Structures, Algorithms, and Database Systems',
      'Assisted in preparing and evaluating lab work and course material design',
      'Contributed to faculty research through documentation, literature review, and technical support',
      'Managed departmental social media handles, increasing engagement by 30% through targeted academic content',
      'Published 6 research papers at international conferences and journals (2025-2026)',
    ],
  },
];

const education = [
  {
    degree: 'Master of Technology - Computer Science & Engineering',
    specialization: 'Cloud Computing',
    institution: 'Medicaps University',
    location: 'Indore, India',
    period: 'August 2022 - June 2025',
    grade: 'CGPA: 8.71/10',
    certificationLink:
      'https://catalog-education.oracle.com/ords/certview/sharebadge?id=9E52AC7305972CDDDEB5A1FC373C5626DB7943E07B9027129FFDCCDE958C06FC',
    achievements: [
      'Thesis: "Next-Gen Cricket Scorecard Automation Using Deep Neural Networks"',
      'Published 3 conference papers in IET and international conferences',
      'Specialized in Cloud Computing, Deep Learning, and Computer Vision',
      'Developed novel CNN-based solutions for real-world applications',
      'Certification: Oracle APEX Cloud Developer Certified Professional (Oracle)',
      'Total Credits: 90',
    ],
  },
  {
    degree: 'Bachelor of Technology - Computer Science & Engineering',
    specialization: 'Core',
    institution: 'Sushila Devi Bansal College of Technology (Aff. RGPV)',
    location: 'Indore, India',
    period: 'August 2018 - June 2022',
    grade: 'CGPA: 6.93/10',
    achievements: [
      'Thesis: "Hotel Management System"',
      'Developed full-stack applications with database integration',
      'Strong foundation in programming and software development',
      'Total Credits: 180',
    ],
  },
];

const Experience = () => {
  return (
    <div className="min-h-screen pb-20 pt-24">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-16 text-center"
        >
          <h1 className="mb-4 text-3xl font-bold sm:text-4xl md:text-5xl">
            Experience & <span className="text-gradient">Education</span>
          </h1>
          <p className="mx-auto max-w-2xl text-sm text-muted-foreground sm:text-base md:text-lg">
            My professional journey and academic background
          </p>
        </motion.div>

        {/* Experience Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <div className="mb-8 flex items-center gap-3">
            <Briefcase className="h-8 w-8 text-primary" />
            <h2 className="text-3xl font-bold">Professional Experience</h2>
          </div>

          <div className="relative space-y-8">
            {/* Timeline Line */}
            <div className="absolute bottom-0 left-0 top-0 ml-6 hidden w-0.5 bg-border md:block" />

            {experiences.map((exp, index) => (
              <motion.div
                key={exp.company + exp.period}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                className="relative"
              >
                {/* Timeline Dot */}
                <div className="absolute left-0 hidden md:block">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary text-primary-foreground">
                    <Briefcase className="h-6 w-6" />
                  </div>
                </div>

                <div className="md:ml-20">
                  <Card className="transition-all hover:shadow-xl">
                    <CardHeader>
                      <div className="flex flex-col gap-2 md:flex-row md:items-start md:justify-between">
                        <div>
                          <CardTitle className="text-2xl">{exp.title}</CardTitle>
                          <CardDescription className="text-base">
                            <div className="font-semibold text-primary">{exp.company}</div>
                            <div className="mt-1 flex items-center gap-2 text-sm">
                              <Calendar className="h-4 w-4" />
                              {exp.period} • {exp.location}
                            </div>
                          </CardDescription>
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <p className="mb-4 text-muted-foreground">{exp.description}</p>
                      <ul className="space-y-2">
                        {exp.achievements.map((achievement) => (
                          <li
                            key={achievement}
                            className="flex items-start text-sm text-muted-foreground"
                          >
                            <span className="mr-2 mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-primary" />
                            {achievement}
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Education Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <div className="mb-8 flex items-center gap-3">
            <GraduationCap className="h-8 w-8 text-primary" />
            <h2 className="text-3xl font-bold">Education</h2>
          </div>

          <div className="relative space-y-8">
            {/* Timeline Line */}
            <div className="absolute bottom-0 left-0 top-0 ml-6 hidden w-0.5 bg-border md:block" />

            {education.map((edu, index) => (
              <motion.div
                key={edu.degree + edu.period}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                className="relative"
              >
                {/* Timeline Dot */}
                <div className="absolute left-0 hidden md:block">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary text-primary-foreground">
                    <GraduationCap className="h-6 w-6" />
                  </div>
                </div>

                <div className="md:ml-20">
                  <Card className="transition-all hover:shadow-xl">
                    <CardHeader>
                      <div className="flex flex-col gap-2 md:flex-row md:items-start md:justify-between">
                        <div>
                          <CardTitle className="text-2xl">{edu.degree}</CardTitle>
                          {edu.specialization && (
                            <div className="mt-1 text-sm font-semibold text-primary">
                              Specialization: {edu.specialization}
                            </div>
                          )}
                          <CardDescription className="mt-2 text-base">
                            <div className="font-semibold">{edu.institution}</div>
                            <div className="mt-1 flex items-center gap-2 text-sm">
                              <Calendar className="h-4 w-4" />
                              {edu.period} • {edu.location}
                            </div>
                            <div className="mt-1 text-sm font-medium text-primary">{edu.grade}</div>
                          </CardDescription>
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-2">
                        {edu.achievements.map((achievement) => (
                          <li
                            key={achievement}
                            className="flex items-start text-sm text-muted-foreground"
                          >
                            <span className="mr-2 mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-primary" />
                            {achievement}
                          </li>
                        ))}
                      </ul>
                      {edu.certificationLink && (
                        <a
                          href={edu.certificationLink}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="mt-4 inline-block text-sm font-medium text-primary hover:underline"
                        >
                          View Oracle Certification (Verified)
                        </a>
                      )}
                    </CardContent>
                  </Card>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Experience;
