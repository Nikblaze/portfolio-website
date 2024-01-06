import React from "react";
import ExperienceSection from "./ExperienceSection";
import "./experience.css";

function Experience() {
  let experience = [
    {
      title: "SDE 1",
      company: "Anchanto",
      description:
        "As a Software Developer in Frontend team, I specialise in Angular, React, and TypeScript, contributing to warehouse management system. Being worked on complex and scalable projects for warehouse management system which reduced the time of inbound and dispatch operations by 30% for customers, I bring the expertise in understanding and developing sustainable and scalable system. In addition to project-centric responsibilities, I have played a pivotal role in enhancing operational efficiency by implementing (CI/CD) integrations on GitHub for the Frontend repository resulting in a discernible improvement in deployment timelines and overall efficiency. Furthermore, acquired proficiency in utilising Jira and the sprint model for project development, ensuring a streamlined and systematic approach to managing tasks and project workflows.",
      DateRange: "June 2022 - Current",
      location: "Pune, Maharastra",
    },
    {
      title: "SDE Intern",
      company: "Anchanto",
      description:
        "I have successfully completed over 100 hours of formal training in Angular and Anchanto Products. Subsequently, I applied this knowledge in a practical setting by spearheading the launch of a new voucher feature for the order management system product. This implementation yielded a 10% increase in voucher redemptions for all orders levaraging tech stack of Angular, Typescript, SCSS and REST APIs.",
      DateRange: "March 2022 - April 2022",
      location: "Pune, Maharastra",
    },
    {
      title: "Technology Consultant Intern",
      company: "PwC",
      description:
        "Developed a sophisticated system designed to automate and augment customer support processes by expeditiously retrieving previous call recordings, extracting pivotal highlights from past conversations, and conducting sentiment analysis on each call, all within a 15-second timeframe upon connection. This accomplishment involved the seamless integration of Twilio with Microsoft Dynamics CRM, facilitating sentiment analysis and keyword extraction from voice recordings. Leveraging the capabilities of Microsoft Azure AI models, the call recordings were processed to extract pertinent highlights and sentiments for each interaction. Additionally, a PowerApp was developed and connected to present all extracted data seamlessly linked to Microsoft Dynamics CRM. The implementation of this innovative solution resulted in a notable 30% reduction in manual efforts, a 15% increase in customer satisfaction, and heightened decision-making capabilities. This achievement was made possible through the strategic application of Azure Functions, Cognitive Services, REST APIs, PowerApps, and Blob Storage.",
      DateRange: "June 2021 - August 2021",
      location: "Kolkata, West Bengal",
    },
  ];
  let experienceCard = [];

  experience.forEach((ele, i) => {
    experienceCard.push(<ExperienceSection key={i} element={ele} />);
  });

  return (
    <div>
      <h1 className="about-header">Experience</h1>
      <div className="card-container">{experienceCard}</div>
    </div>
  );
}

export default Experience;
