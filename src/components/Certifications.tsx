// import React from 'react';
// import { Award } from 'lucide-react';

// export default function Certifications() {
//   const certifications = [
//     {
//       title: "AWS Certified Cloud Practitioner",
//       date: "2025",
//       description: "Successfully earned the AWS Certified Cloud Practitioner certification, demonstrating foundational knowledge of AWS services, cloud computing concepts, security, pricing, and architecture principles.",
//       link: "https://www.credly.com/badges/40d1a120-b752-4c24-a97a-d7bcc6ce6b5d/public_url"
//     },
//     {
//       title: "Basics of Data Science – Scaler",
//       date: "2024",
//       description: "Successfully completed the Basics of Data Science course with Scaler, enhancing proficiency in Python, Data Science, and SQL.",
//       link: "DS-Scaler"
//     },
//     {
//       title: "Python Development – ExpertHub",
//       date: "2019",
//       description: "Awarded best intern for outstanding performance and execution of Python development.",
//       contact: "S.No W/MLAI/6221"
//     }
//   ];

//   return (
//     <section id="certifications" className="py-20 bg-slate-800">
//       <div className="container mx-auto px-4">
//         <h2 className="text-3xl font-bold text-center text-white mb-12">Certifications</h2>
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
//           {certifications.map((cert, index) => (
//             <div key={index} className="bg-slate-700 p-6 rounded-lg hover:bg-slate-600 transition">
//               <div className="flex items-center mb-4">
//                 <Award className="h-8 w-8 text-blue-400 mr-2" />
//                 <h3 className="text-xl font-semibold text-white">{cert.title}</h3>
//               </div>
//               <p className="text-gray-300 mb-2">{cert.description}</p>
//               <div className="text-blue-400">
//                 {cert.link && <a href="#" className="hover:underline">{cert.link}</a>}
//                 {cert.contact && <p>Contact: {cert.contact}</p>}
//               </div>
//               <p className="text-sm text-gray-400 mt-2">{cert.date}</p>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }





import React from 'react';
import { Award } from 'lucide-react';

export default function Certifications() {
  const certifications = [
    {
      title: "AWS Certified Cloud Practitioner",
      date: "2025",
      description:
        "Successfully earned the AWS Certified Cloud Practitioner certification, demonstrating foundational knowledge of AWS services, cloud computing concepts, security, pricing, and architecture principles.",
      link: {
        name: "AWS Certified Cloud Practitioner",
        url: "https://www.credly.com/badges/40d1a120-b752-4c24-a97a-d7bcc6ce6b5d/public_url",
      },
    },
    {
      title: "Basics of Data Science – Scaler",
      date: "2024",
      description:
        "Successfully completed the Basics of Data Science course with Scaler, enhancing proficiency in Python, Data Science, and SQL.",
      link: {
        name: "DS-Scaler",
        url: "https://www.linkedin.com/feed/update/urn:li:activity:7191831666980478976/",
      },
    },
    {
      title: "Python Development – ExpertHub",
      date: "2019",
      description:
        "Awarded best intern for outstanding performance and execution of Python development.",
      contact: "S.No W/MLAI/6221",
    },
  ];

  return (
    <section id="certifications" className="py-20 bg-slate-800">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-white mb-12">
          Certifications
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {certifications.map((cert, index) => (
            <div
              key={index}
              className="bg-slate-700 p-6 rounded-lg hover:bg-slate-600 transition"
            >
              <div className="flex items-center mb-4">
                <Award className="h-8 w-8 text-blue-400 mr-2" />
                <h3 className="text-xl font-semibold text-white">{cert.title}</h3>
              </div>
              <p className="text-gray-300 mb-2">{cert.description}</p>
              <div className="text-blue-400">
                {cert.link && (
                  <a
                    href={cert.link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:underline"
                  >
                    {cert.link.name}
                  </a>
                )}
                {cert.contact && <p>Contact: {cert.contact}</p>}
              </div>
              <p className="text-sm text-gray-400 mt-2">{cert.date}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
