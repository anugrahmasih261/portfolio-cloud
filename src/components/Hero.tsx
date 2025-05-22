import React from 'react';
import { Github, Linkedin, Mail } from 'lucide-react';

export default function Hero() {
  return (
    <section id="home" className="min-h-screen flex items-center pt-16 bg-gradient-to-b from-slate-900 to-slate-800">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="md:w-1/2 text-white">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Cloud Solutions
              <span className="text-blue-400"> Architect</span>
            </h1>
            <p className="text-xl mb-8 text-gray-300">
              {/* Specialized in AWS Cloud Architecture, DevOps, and Infrastructure as Code */}
              🛠️ Specialized in AWS Cloud Architecture | DevOps | Infrastructure as Code (IaC) ☁️
              <br />
              <span className="text-blue-400">  Python Full-Stack  Developer:</span>  Django | Flask | FastAPI + React
              <br />

              <span className="text-blue-400"> 🚀 Deployment Expert:</span> 
              <br />
              <span className="text-blue-400"> IAAS: </span> AWS EC2, Lightsail (Linux/Windows/MacOS)
              <br />
              <span className="text-blue-400"> PAAS:</span>  Replit • Heroku • Vercel
              <br />
              <span className="text-blue-400"> SAAS:</span> Serverless APIs (Lambda), AI/ML pipelines (SageMaker)

              <span className="text-blue-400"> 📦 Containers & Orchestration:</span> Docker, AWS ECS, Kubernetes

            </p>


            <div className="flex space-x-4">
              <a
                href="https://github.com/anugrahmasih261"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-gray-800 rounded-full hover:bg-[#2b3137] hover:text-white transition-all duration-300 transform hover:scale-110"
              >
                <Github className="h-6 w-6" />
              </a>
              <a
                href="https://www.linkedin.com/in/anugrah-masih-6994b4213/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-gray-800 rounded-full hover:bg-[#0077b5] hover:text-white transition-all duration-300 transform hover:scale-110"
              >
                <Linkedin className="h-6 w-6" />
              </a>
              <a
                href="mailto:anugrahofficial261@gmail.com"
                className="p-3 bg-gray-800 rounded-full hover:bg-[#ea4335] hover:text-white transition-all duration-300 transform hover:scale-110"
              >
                <Mail className="h-6 w-6" />
              </a>
            </div>
          </div>
          <div className="md:w-1/2 mt-8 md:mt-0">
            <img
              // src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=2072"
              // src = "/assets/images/cloudcer2.png"
              // src="/assets/images/vercelf.png"
              src="https://res.cloudinary.com/dkgzwfw9g/image/upload/v1747923678/vercelf_msdn7c.png"
              alt="Cloud Computing Concept"
              className="rounded-lg shadow-2xl hover:shadow-blue-500/50 transition-all duration-300"
            />
          </div>
        </div>
      </div>
    </section>
  );
}