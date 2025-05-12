import React, { useState } from 'react';

export default function Projects() {
  const [playingIndexes, setPlayingIndexes] = useState([]);

  const projects = [
    {
      title: "Masih CodeAcademy (EdTech Platform)",
      description: "Full-stack EdTech platform with AWS  CI-CD pipeline, VPC architecture, ELB, Auto Scaling, and containerized deployment using Docker and AWS ECR. Achieved 40% reduction in deployment time.",
      video: {
        // url: "/assets/videos/Backendf.mp4",
        url: "https://player.cloudinary.com/embed/?cloud_name=dkgzwfw9g&public_id=Backendf_vnurpe&profile=cld[controls]=true&player[autoplay]=false",
        thumbnail: "/assets/images/bannerf1.png",
      },
      tags: [
        "AWS VPC","S3", "RDS", "ELB","ECR","EKS","Autoscaling","Docker","Kubernetes", 
        "CodePipeline","CodeBuild","CodeDeploy","CodeCommit", "CloudWatch","Twillio",
        "CloudFormation","React", "Django","Django REST Framework","Python3"
      ]
    },
    {
      title: "Amazon Clone (A2Z Store)",
      description: `Developed a scalable e-commerce platform, using React, Redux, Django, and DRF, with a CI/CD pipeline 
      automated for testing, building, and deploying to Heroku. Leveraged Heroku's cloud infrastructure 
      for high availability, implemented DevOps practices to streamline deployment workflows, and optimized UX/UI and API 
      performance, resulting in a 70% increase in simulated sales. Showcased expertise in Python full-stack development, 
      cloud deployment, and automation to deliver a production-ready application.`,
      video: {
        url: "https://player.cloudinary.com/embed/?cloud_name=dkgzwfw9g&public_id=amazon_o6krdm&player[controls]=true&player[autoplay]=false",
        thumbnail: "/assets/images/az.png",
      },
      tags: ["React", "Redux", "Django", "PostgreSQL","Django REST Framework","Cloud-Replit","Heroku","CodePipeline", "Git-GitHub"],
    },
    {
      title: "Portfolio Website",
      description: "Built a personal portfolio website with HTML, CSS, JS, and Bootstrap to demonstrate my technical abilities and showcase relevant work. Integrated GitHub Actions to automate CI/CD pipelines and released the website to GitHub Pages.",
      video: {
        // url: "/assets/videos/portfolio.mov",
        url: "https://player.cloudinary.com/embed/?cloud_name=dkgzwfw9g&public_id=portfolio_dnn05h&player[controls]=true&player[autoplay]=false",
        thumbnail: "/assets/images/portfolio.png",
      },
      tags: ["HTML", "CSS", "Bootstrap", "JavaScript", "GitHub Actions", "GitHub Page"],
    },
    {
      title: "Synamatic",
      description: "Simple movies streaming App like Netflix!In this web application you will find many informative movie reviews, you can compare different reviews on current, upcoming, recent, or vintage movies and even get a sneak-peek at the trailers. You can filter the movies by genre.",
      video: {
        // url: "/assets/videos/synamatic.mov",
        url: "https://player.cloudinary.com/embed/?cloud_name=dkgzwfw9g&public_id=synamatic_u1afos&profile=cld[controls]=true&player[autoplay]=false",
        thumbnail: "/assets/images/netflix.png",
      },
      tags: ["Replit", "Heroku", "Virtual-environment", "CodePipeline", "React","Redux", "Django"],
    },
    {
      title: "Masihmail (Email Platform)",
      description: "A simple email service project I developed and deployed an email service on AWS using Django. It stores user data securely in AWS RDS PostgreSQL and ensures efficient web serving with Gunicorn and Nginx on AWS EC2. Users can securely log in, reset passwords, and send emails. The project guarantees scalability and optimal performance with AWS infrastructure",
      video: {
        // url: "/assets/videos/mail.mov",
        url: "https://player.cloudinary.com/embed/?cloud_name=dkgzwfw9g&public_id=mail_a4gc0v&player[controls]=true&player[autoplay]=false",
        thumbnail: "/assets/images/mail.png",
      },
      tags: ["AWS EC2", "RDS", "S3","AWS infrastructure", "Gunicorn","Nginx", "Django", "HTML-CSS-JS"],
    },
    {
      title: "Twitter Clone",
      description: "I developed a feature-rich website using AWS EC2, S3, and PostgreSQL. The project enables anonymous expression of thoughts and showcases over 100 pictures. Users can share thoughts and memories without creating an account. The project involved implementing 5 CRUD methods and applying them effectively.",
      video: {
        // url: "/assets/videos/twitter.mov",
        url: "https://player.cloudinary.com/embed/?cloud_name=dkgzwfw9g&public_id=twitter_owtatn&player[controls]=true&player[autoplay]=false",
        thumbnail: "/assets/images/twitteraws.png",
      },
      tags: ["AWS VPC", "Private Subnet", "EC2", "PostgreSQL", "S3","Gunicorn","Nginx", "Django", "HTML5-CSS-JS"],
    },
  ];

  const handlePlay = (index) => {
    setPlayingIndexes(prev => [...prev, index]);
  };

  return (
    <section id="projects" className="py-20 bg-slate-900">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-white mb-12">Featured Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => {
            const isPlaying = playingIndexes.includes(index);
            const isCloudinary = project.video.url.includes('cloudinary.com');

            return (
              <div
                key={index}
                className="bg-slate-800 rounded-lg overflow-hidden hover:transform hover:scale-105 transition duration-300"
              >
                <div className="relative w-full h-48 bg-black">
                  {!isPlaying ? (
                    <div 
                      className="relative w-full h-full cursor-pointer" 
                      onClick={() => handlePlay(index)}
                    >
                      <img
                        src={project.video.thumbnail}
                        alt={`${project.title} thumbnail`}
                        className="absolute inset-0 w-full h-full object-cover"
                      />
                      <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-30 transition-opacity hover:bg-opacity-10">
                        <div className="w-16 h-16 rounded-full bg-white bg-opacity-80 flex items-center justify-center">
                          <svg className="w-8 h-8 text-black" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd" />
                          </svg>
                        </div>
                      </div>
                    </div>
                  ) : isCloudinary ? (
                    <iframe
                      src={project.video.url}
                      className="w-full h-full"
                      allow="autoplay; fullscreen; picture-in-picture"
                      allowFullScreen
                      frameBorder="0"
                    />
                  ) : (
                    <video
                      className="w-full h-full object-cover"
                      controls
                      autoPlay
                    >
                      <source src={project.video.url} type="video/mp4" />
                      Your browser does not support the video tag.
                    </video>
                  )}
                </div>

                <div className="p-6">
                  <h3 className="text-xl font-semibold text-white mb-2">{project.title}</h3>
                  <p className="text-gray-300 mb-4 whitespace-pre-line">{project.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag, tagIndex) => (
                      <span
                        key={tagIndex}
                        className="px-3 py-1 bg-blue-500 text-white text-sm rounded-full"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}