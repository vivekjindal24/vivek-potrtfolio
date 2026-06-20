import { motion } from 'framer-motion';
import { FileText, ExternalLink } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const publications = [
  {
    title: 'A Hybrid GRU-DQN Framework for Real-Time Traffic Prediction and Adaptive Signal Control',
    authors: 'Mayank Bhardwaj et al.',
    journal: 'IEEE Xplore',
    year: 2026,
    type: 'publication',
    badge: 'IEEE',
    doi: null,
    abstract:
      'A hybrid GRU-DQN framework for traffic flow forecasting and adaptive signal control in smart cities, combining temporal prediction with reinforcement learning for responsive intersection management.',
    link: 'https://ieeexplore.ieee.org/document/11548004',
  },
  {
    title: 'Binary Classification of YouTube Trending Videos Using Engagement and Text Features',
    authors: 'Vivek Jindal, Yuvraj Singh Rajput, Mayank Prasoon Bhardwaj, Isha Chopra',
    journal: 'Under Review',
    year: 2026,
    type: 'publication',
    badge: 'Under Review',
    doi: null,
    abstract:
      'Analyzing YouTube trending videos using engagement metrics and text features; implemented classification models to predict trending status. Performed feature extraction, model training, evaluation, and interpretation with Python libraries.',
    link: null,
  },
  {
    title: 'Real-Time Tomato Leaf Disease Detection Using YOLOv10 for Precision Agriculture',
    authors: 'N. Bhatt, S. Kothari, G. Jain, A. Kalosiya, Vivek Jindal',
    journal: 'International Conference on Artificial Intelligence Systems (ICAIS 2026)',
    year: 2026,
    type: 'publication',
    badge: 'Conference',
    doi: null,
    abstract:
      'Accepted for presentation at ICAIS 2026. Proposes a YOLOv10-based real-time detection system for tomato leaf diseases, enabling precision agriculture through accurate and fast visual inference.',
    link: null,
  },
  {
    title: 'CS:GO Multi-Purpose Platform: ML-Driven Strategy and Tactical Analytics',
    authors: 'S. Patnaha, S. Rawat, S. Kapil Pachauri, S. Sisodiya, Vivek Jindal',
    journal:
      'Proceedings of the 2025 7th International Conference on Information Systems and Computer Networks (ISCON)',
    year: 2025,
    type: 'publication',
    badge: 'IEEE',
    doi: 'https://doi.org/10.1109/ISCON65210.2025.11341156',
    abstract:
      'ML-driven analytics platform for CS:GO providing strategy suggestions and tactical insights through data-driven modelling of in-game events.',
    link: 'https://doi.org/10.1109/ISCON65210.2025.11341156',
  },
  {
    title:
      'ResNet-152 for Early Skin Cancer Detection: A Deep Learning Approach to Medical Imaging',
    authors: 'Pankaj Piplode, Kailash Kumar Baraskar, Pinkey Rane, Vivek Jindal',
    journal: 'GRENZE International Journal of Engineering and Technology, vol. 11, no. 2',
    year: 2025,
    type: 'publication',
    badge: 'Journal',
    doi: null,
    abstract:
      'A deep learning approach using ResNet-152 architecture for early detection of skin cancer through medical imaging analysis, enabling timely intervention and improved patient outcomes.',
    link: 'https://thegrenze.com/index.php?display=page&view=journalabstract&absid=5759&id=8',
  },
  {
    title: 'Automating Cricket Scorecards with Deep Neural Network: A Next-Generation Approach',
    authors: 'Vivek Jindal, Latika Jindal, Kailash Chandra Bandhu, Ratnesh Litoriya',
    journal: 'Parul University International Conference on Engineering and Technology (PiCET 2025)',
    year: 2025,
    type: 'publication',
    badge: 'Scopus',
    doi: 'https://doi.org/10.1049/icp.2025.1671',
    abstract:
      'CNN-based system to automate cricket scorecard generation by interpreting umpire hand gestures from image data, achieving 98% accuracy and improving efficiency by 10% over the baseline.',
    link: 'https://doi.org/10.1049/icp.2025.1671',
  },
  {
    title: 'Automated Disease Detection in Banana Using Convolutional Neural Networks (CNNs)',
    authors:
      'Yash Kumavat, Priyanka Dhasal, Divya Kumawat, Yash Agrawal, Yash Mewada, Vivek Jindal',
    journal: 'Parul University International Conference on Engineering and Technology (PiCET 2025)',
    year: 2025,
    type: 'publication',
    badge: 'Scopus',
    doi: 'https://doi.org/10.1049/icp.2025.1669',
    abstract:
      'CNN-based image classification model identifying banana leaf diseases including Bacterial Wilt, Fusarium Wilt, and Black Sigatoka. Outperformed VGG-16, ResNet-50, and EfficientNet reaching 96.1% accuracy.',
    link: 'https://doi.org/10.1049/icp.2025.1669',
  },
];

const patents = [
  {
    number: 'Indian Patent No. 202421088334',
    title:
      'A Hybrid Blockchain Architecture Employing ML Models for Real-time Fraud Detection System',
    issued: 'December 6, 2024',
    abstract:
      'Integrates blockchain transparency with machine learning\'s predictive capability to detect financial and e-commerce frauds in real time, using federated ML models, smart contracts, and hybrid public-private blockchain networks to preserve privacy and ensure adaptive fraud prevention.',
  },
  {
    number: 'Indian Patent No. 202311037100',
    title:
      'System and Method for Fault Detection Using IoT and AI-powered Object Recognition in the Manufacturing Process by Industry 4.0',
    issued: 'June 30, 2023',
    abstract:
      'Employs IoT sensors and AI-based visual recognition to identify and classify industrial faults in real time, enhancing predictive maintenance and minimizing production downtime in smart manufacturing environments.',
  },
];

const Publications = () => {
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
            7 research publications across deep learning, computer vision, and ML analytics — plus 2
            granted Indian patents
          </p>
        </motion.div>

        {/* Publications */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <div className="mb-8 flex items-center gap-3">
            <FileText className="h-8 w-8 text-primary" />
            <h2 className="text-3xl font-bold">Research Publications</h2>
          </div>

          <div className="space-y-6">
            {publications.map((pub, index) => (
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
                      <span className="rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold text-primary">
                        {pub.badge}
                      </span>
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

        {/* Patents */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <div className="mb-8 flex items-center gap-3">
            <FileText className="h-8 w-8 text-primary" />
            <h2 className="text-3xl font-bold">Patents</h2>
          </div>

          <div className="space-y-6">
            {patents.map((patent, index) => (
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
                        <CardTitle className="mb-2">{patent.title}</CardTitle>
                        <CardDescription>
                          <div className="mb-1 text-sm font-medium">{patent.number}</div>
                          <div className="text-sm text-muted-foreground">
                            Issued: {patent.issued}
                          </div>
                        </CardDescription>
                      </div>
                      <span className="rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold text-primary">
                        Patent
                      </span>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground">{patent.abstract}</p>
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
