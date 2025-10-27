import React from 'react';
import { motion } from 'framer-motion';
import { Code2, ExternalLink, Github } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const projects = [
  {
    title: 'Cricket Scorecard Automation',
    description:
      'Developed a machine learning model to automate cricket scorecard generation by interpreting umpire hand gestures from image data. Implemented a CNN-based solution achieving 98% accuracy, improving efficiency by 10% over the baseline.',
    image: '/projects/cricket.jpg',
    technologies: ['Python', 'TensorFlow', 'OpenCV', 'CNN', 'Deep Learning'],
    github: null,
    demo: null,
    category: 'Machine Learning',
  },
  {
    title: 'Automated Disease Detection in Banana',
    description:
      'Developed a CNN-based image classification model to identify banana leaf diseases. Outperformed VGG-16, ResNet-50, EfficientNet achieving 96.1% accuracy with exceptional precision and recall. Proposed a scalable framework for plant health monitoring.',
    image: '/projects/banana.jpg',
    technologies: ['Python', 'PyTorch', 'CNN', 'VGG-16', 'ResNet-50', 'Computer Vision'],
    github: null,
    demo: null,
    category: 'Computer Vision',
  },
  {
    title: 'Plant Recognition System',
    description:
      'Built a deep learning model to detect plant species in leaf images using CNNs. Designed for expansion to detect plant diseases. Optimized for high-accuracy classification in agricultural and botanical applications.',
    image: '/projects/plant.jpg',
    technologies: ['Python', 'TensorFlow', 'CNN', 'Image Classification'],
    github: null,
    demo: null,
    category: 'Computer Vision',
  },
  {
    title: 'Career Guidance System',
    description:
      'Designed a system to guide students in selecting suitable career paths. Integrated a recommendation engine that maps student preferences with relevant career options. Included offline counseling fallback support.',
    image: '/projects/career.jpg',
    technologies: ['Python', 'Machine Learning', 'Recommendation System', 'Flask'],
    github: null,
    demo: null,
    category: 'Machine Learning',
  },
  {
    title: 'Hotel Management System',
    description:
      'Full-fledged hotel management system for room booking, guest records, and payment processing. Integrated relational database for real-time access. Improved operational efficiency by 28% and increased customer satisfaction.',
    image: '/projects/hotel.jpg',
    technologies: ['Java', 'MySQL', 'JavaFX', 'Database Management'],
    github: null,
    demo: null,
    category: 'Full Stack',
  },
];

const Projects = () => {
  const categories = ['All', ...new Set(projects.map((p) => p.category))];
  const [selectedCategory, setSelectedCategory] = React.useState('All');

  const filteredProjects =
    selectedCategory === 'All'
      ? projects
      : projects.filter((p) => p.category === selectedCategory);

  return (
    <div className="min-h-screen pb-20 pt-24">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-16 text-center"
        >
          <h1 className="mb-4 text-5xl font-bold">
            Featured <span className="text-gradient">Projects</span>
          </h1>
          <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
            Innovative solutions in machine learning, computer vision, and software development
          </p>
        </motion.div>

        {/* Category Filter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="mb-12 flex flex-wrap justify-center gap-3"
        >
          {categories.map((category) => (
            <Button
              key={category}
              variant={selectedCategory === category ? 'default' : 'outline'}
              onClick={() => setSelectedCategory(category)}
              className="transition-all"
            >
              {category}
            </Button>
          ))}
        </motion.div>

        {/* Projects Grid */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <Card className="group h-full overflow-hidden transition-all hover:-translate-y-2 hover:shadow-2xl">
                <div className="relative h-48 overflow-hidden bg-gradient-to-br from-primary/20 to-purple-500/20">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <Code2 className="h-20 w-20 text-primary/30" />
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent" />
                </div>
                <CardHeader>
                  <div className="mb-2 flex items-start justify-between">
                    <CardTitle className="text-xl">{project.title}</CardTitle>
                    <span className="rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold text-primary">
                      {project.category}
                    </span>
                  </div>
                  <CardDescription>{project.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="mb-4 flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="rounded-md bg-secondary px-2 py-1 text-xs font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  <div className="flex gap-2">
                    {project.github && (
                      <Button size="sm" variant="outline" asChild>
                        <a href={project.github} target="_blank" rel="noopener noreferrer">
                          <Github className="mr-2 h-4 w-4" />
                          Code
                        </a>
                      </Button>
                    )}
                    {project.demo && (
                      <Button size="sm" asChild>
                        <a href={project.demo} target="_blank" rel="noopener noreferrer">
                          <ExternalLink className="mr-2 h-4 w-4" />
                          Demo
                        </a>
                      </Button>
                    )}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
