import React from "react";

export const Testi = () => {
  const clients = [
    {
      name: "John Doe",
      job: "Software Engineer",
      question: "What is the AI Resume Builder?",
      answer:
        "The AI Resume Builder is a platform designed to help users create professional and personalized resumes effortlessly. Powered by AI, the tool analyzes user input and generates tailored resume content, ensuring a clean and modern layout that aligns with industry standards.",
    },
    {
      name: "Jane Smith",
      job: "Marketing Specialist",
      question: "How do I get started?",
      answer:
        "Getting started is easy! Simply sign up or log in to the platform, then follow the step-by-step process. Enter your personal details, work experience, skills, and education. The AI will help refine your information and provide suggestions to improve your resume.",
    },

    {
      name: "Michael Brown",
      job: "Graphic Designer",
      question: "Is the resume format customizable?",
      answer:
        "Absolutely! While the AI provides optimized suggestions and a professional layout, you can still customize sections, fonts, and styles according to your preferences.",
    },
    {
      name: "Sarah Wilson",
      job: "Project Manager",
      question: "What types of jobs is the resume builder optimized for?",
      answer:
        "The AI Resume Builder supports a wide range of industries, including technology, healthcare, finance, marketing, and more. The AI tailors the content based on the job role you’re applying for, ensuring that your resume highlights relevant skills and experience for your desired position.",
    },
    {
      name: "Chris Davis",
      job: "UX/UI Designer",
      question: "How does the AI optimize my resume?",
      answer:
        "The AI uses advanced algorithms to analyze your job history, skills, and achievements. It then suggests the best phrasing, structure, and formatting based on the latest industry trends and what recruiters are looking for. This ensures your resume is not only professional but also tailored to your target job market.",
    },
    {
      name: "David Taylor",
      job: "Accountant",
      question: "How do I download my resume once it's complete?",
      answer:
        "Once your resume is complete, you can download it in various formats such as PDF, Word, or text. Simply click the 'Download' button after you’ve reviewed and finalized your resume.",
    },
    {
      name: "Sophia Martinez",
      job: "Operations Manager",
      question: "Does the AI Resume Builder support multiple languages?",
      answer:
        "Yes, the AI Resume Builder supports several languages, allowing you to create resumes for job opportunities in different regions. Just choose the language during the resume creation process.",
    },
    {
      name: "Oliver Clark",
      job: "Digital Marketer",
      question:
        "Can I create multiple versions of my resume for different jobs?",
      answer:
        "Definitely! The AI Resume Builder allows you to create and store multiple resume versions. You can easily tailor each version to different job applications by adjusting the content and highlighting specific experiences or skills.",
    },
    {
      name: "Isabella Lewis",
      job: "Financial Analyst",
      question: "How much does it cost to use the AI Resume Builder?",
      answer:
        "The platform offers a free basic version where you can create and download a standard resume. For advanced features, customization options, and tailored advice, we offer premium plans that provide additional services.",
    },
    {
      name: "Liam Walker",
      job: "Customer Support Specialist",
      question: "How does the AI help with job-specific keywords?",
      answer:
        "The AI analyzes job descriptions and suggests relevant keywords based on the industry and role you're targeting. Including these keywords in your resume can help you pass through Applicant Tracking Systems (ATS) used by many employers.",
    },
    {
      name: "Ava King",
      job: "Sales Representative",
      question: "Can I add custom sections to my resume?",
      answer:
        "Yes! The AI Resume Builder allows you to add custom sections such as certifications, volunteer work, and projects. This gives you the flexibility to showcase all your relevant experience.",
    },
    {
      name: "Ethan Harris",
      job: "IT Consultant",
      question: "How does the AI Resume Builder handle gaps in employment?",
      answer:
        "The AI offers guidance on how to address gaps in employment by suggesting appropriate phrasing and highlighting skills or experiences gained during those periods, such as freelance work, education, or volunteer activities.",
    },
  ];

  return (
    <section className="bg-white dark:bg-gray-900">
      <div className="py-8 px-4 mx-auto max-w-screen-xl text-center lg:py-16 lg:px-6">
        <div className="mx-auto max-w-screen-sm">
          <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-primary dark:text-white">
            Our Clients
          </h2>
        </div>
        <div className="grid mb-8 lg:mb-12 lg:grid-cols-2">
          {clients.map((item, index) => (
            <figure
              key={index}
              className="flex flex-col justify-center items-center p-8 text-center bg-gray-50 border-b border-gray-200 md:p-12 lg:border-r dark:bg-gray-800 dark:border-gray-700"
            >
              <blockquote className="mx-auto mb-8 max-w-2xl text-gray-500 dark:text-gray-400">
                <h3 className="text-lg font-semibold text-primary dark:text-white">
                  {item.question}
                </h3>
                <p className="my-4">{item.answer}</p>
              </blockquote>
              <figcaption className="flex justify-center items-center space-x-3">
                <img
                  className="w-9 h-9 rounded-full"
                  src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/karen-nelson.png"
                  alt="profile picture"
                />
                <div className="space-y-0.5 font-medium dark:text-white text-left">
                  <div className="text-primary">{item.name}</div>
                  <div className="text-sm font-light text-gray-500 dark:text-gray-400">
                    {item.job}
                  </div>
                </div>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
};
