import { motion } from 'framer-motion';
import { FileText, ExternalLink } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const publications = [
  {
    title: 'Automating Cricket Scorecards with Deep Neural Network: A Next-Generation Approach',
    authors: 'Vivek Jindal, Latika Jindal, Kailash Chandra Bandhu, Ratnesh Litoriya',
    journal: 'Parul University International Conference on Engineering and Technology (PiCET 2025)',
    year: 2025,
    type: 'publication',
    scopus: true,
    doi: 'https://doi.org/10.1049/icp.2025.1671',
    abstract:
      'Developed a machine learning model to automate cricket scorecard generation by interpreting umpire hand gestures from image data. Implemented a CNN-based solution achieving 98% accuracy, improving efficiency by 10% over the baseline.',
    link: 'https://doi.org/10.1049/icp.2025.1671',
  },
  {
    title: 'Automated Disease Detection in Banana Using Convolutional Neural Networks (CNNs)',
    authors:
      'Yash Kumavat, Priyanka Dhasal, Divya Kumawat, Yash Agrawal, Yash Mewada, Vivek Jindal',
    journal: 'Parul University International Conference on Engineering and Technology (PiCET 2025)',
    year: 2025,
    type: 'publication',
    scopus: true,
    doi: 'https://doi.org/10.1049/icp.2025.1669',

    abstract:
      'Developed a CNN-based image classification model to identify banana leaf diseases including Bacterial Wilt, Fusarium Wilt, and Black Sigatoka. Outperformed VGG-16, ResNet-50, EfficientNet achieving 96.1% accuracy.',
    link: 'https://doi.org/10.1049/icp.2025.1669',
  },
  {
    title:
      'ResNet-152 for Early Skin Cancer Detection: A Deep Learning Approach to Medical Imaging',
    authors: 'Pankaj Piplode, Kailash Kumar Baraskar, Pinky Rane, Vivek Jindal',
    journal:
      'Hinweis Third International Conference on Advances in Information, Telecommunication and Computing',
    year: 2025,
    type: 'publication',
    scopus: true,
    doi: null,
    abstract:
      'A deep learning approach using ResNet-152 architecture for early detection of skin cancer through medical imaging analysis, enabling timely intervention and improved patient outcomes.',
    link: 'https://thegrenze.com/index.php?display=page&view=journalabstract&absid=5759&id=8',
  },
];

const Publications = () => {
  const scopusPublications = publications.filter((pub) => pub.type === 'publication');

  return (
    <div className="min-h-screen pb-20 pt-24">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-16 text-center"
        >
          <h1 className="mb-4 text-5xl font-bold">
            Publications & <span className="text-gradient">Research</span>
          </h1>
          <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
            Research contributions in deep learning, computer vision, and medical imaging
          </p>
        </motion.div>

        {/* Conference Publications */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <div className="mb-8 flex items-center gap-3">
            <FileText className="h-8 w-8 text-primary" />
            <h2 className="text-3xl font-bold">Conference Publications</h2>
          </div>

          <div className="space-y-6">
            {scopusPublications.map((pub, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="transition-all hover:shadow-xl">
                  <CardHeader>
                    <div className="mb-2 flex items-start justify-between gap-4">
                      <div className="flex-1">
                        <CardTitle className="mb-2">{pub.title}</CardTitle>
                        <CardDescription>
                          <div className="mb-1 text-sm font-medium">{pub.authors}</div>
                          <div className="text-sm text-muted-foreground">
                            {pub.journal} • {pub.year}
                          </div>
                          {pub.doi && (
                            <div className="mt-1 text-xs text-muted-foreground">{pub.doi}</div>
                          )}
                        </CardDescription>
                      </div>
                      {pub.scopus && (
                        <span className="rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold text-primary">
                          Conference
                        </span>
                      )}
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="mb-4 text-sm text-muted-foreground">{pub.abstract}</p>
                    {pub.link && (
                      <Button size="sm" variant="outline" asChild>
                        <a href={pub.link} target="_blank" rel="noopener noreferrer">
                          <ExternalLink className="mr-2 h-4 w-4" />
                          View Publication
                        </a>
                      </Button>
                    )}
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

export default Publications;
