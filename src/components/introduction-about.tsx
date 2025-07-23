import { motion } from "framer-motion";
import { PortfolioCard, PortfolioCardTitle, PortfolioCardDescription } from "./portfolio-card";
import backendImg from "@/assets/backend-illustration.jpg";
import frontendImg from "@/assets/frontend-illustration.jpg";
import deploymentImg from "@/assets/deployment-illustration.jpg";

const IntroductionAbout = () => {
  const introText = "Hi, I'm Ndayiringiye David, a passionate Full-Stack Developer with 1 year of experience building robust, scalable, and user-friendly applications. I specialize in both front-end and back-end development, leveraging the latest technologies to create seamless digital experiences.";

  const services = [
    {
      title: "Backend Engineering",
      description: "I specialize in building robust APIs using Node.js, Express, Java, Python, and MongoDB. My experience includes designing scalable backend architectures, implementing secure authentication, and integrating databases to deliver high-performance solutions.",
      image: backendImg,
      technologies: ["Node.js", "Express", "Java", "Python", "MongoDB"]
    },
    {
      title: "Frontend Engineering", 
      description: "Experience in HTML, CSS, Tailwind CSS, React.js, and PHP. I build responsive and interactive user interfaces, ensuring seamless user experiences across devices.",
      image: frontendImg,
      technologies: ["React.js", "HTML", "CSS", "Tailwind CSS", "PHP"]
    },
    {
      title: "UI Design & Deployment",
      description: "Experienced in building intuitive and visually appealing interfaces using Figma and modern design principles. I focus on creating user-centric designs that enhance usability and accessibility, ensuring a cohesive look and feel across applications.",
      image: deploymentImg,
      technologies: ["Figma", "UI/UX", "Cloud Deployment", "CI/CD"]
    }
  ];

  return (
    <div className="flex-1 p-8 space-y-8">
      {/* Introduction Section */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="bg-gradient-card border border-border/50 rounded-2xl p-8 shadow-card"
      >
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.6 }}
        >
          <h1 className="text-3xl md:text-4xl font-bold text-portfolio-text-primary mb-6 bg-gradient-primary bg-clip-text text-transparent">
            Welcome to My Portfolio
          </h1>
          <p className="text-lg text-portfolio-text-secondary leading-relaxed">
            {introText}
          </p>
        </motion.div>
      </motion.div>

      {/* Services Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {services.map((service, index) => (
          <PortfolioCard
            key={service.title}
            imgSrc={service.image}
            imgAlt={service.title}
            index={index}
            className="h-full"
          >
            <PortfolioCardTitle>{service.title}</PortfolioCardTitle>
            <PortfolioCardDescription className="mb-4">
              {service.description}
            </PortfolioCardDescription>
            
            {/* Technology Tags */}
            <div className="flex flex-wrap gap-2 mt-4">
              {service.technologies.map((tech) => (
                <motion.span
                  key={tech}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.6 + index * 0.1 }}
                  className="px-3 py-1 text-xs font-medium bg-primary/10 text-primary border border-primary/20 rounded-full hover:bg-primary/20 transition-all duration-300"
                >
                  {tech}
                </motion.span>
              ))}
            </div>
          </PortfolioCard>
        ))}
      </div>

      {/* Call to Action */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.8, duration: 0.6 }}
        className="text-center py-8"
      >
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="inline-flex items-center px-8 py-4 bg-gradient-primary text-portfolio-text-primary font-semibold rounded-full shadow-elegant hover:shadow-glow transition-all duration-300"
        >
          <span>Let's Work Together</span>
          <motion.div
            className="ml-2"
            animate={{ x: [0, 4, 0] }}
            transition={{ repeat: Infinity, duration: 1.5 }}
          >
            →
          </motion.div>
        </motion.button>
      </motion.div>
    </div>
  );
};

export default IntroductionAbout;