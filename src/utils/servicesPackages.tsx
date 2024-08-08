import React from "react";
import { TbPointFilled } from "react-icons/tb";

export interface Service {
  name: string;
  price: number | "Free";
  headerColor?: string;
  headerBgColor?: string;
  description?: React.ReactNode;
}

export const services: Service[] = [
  {
    name: "Bespoke CV",
    price: 60,
    headerColor: "#f798ff",
    headerBgColor: "rgba(247,152,255,.12)",
    description: (
      <div className="flex">
        <p>
          Our CV Specialist write a tailored CV to reflect your unique career
          path and goals. We build from the ground up, focusing on your
          experiences and industry requirements. By highlighting your
          transferable skills, we transform your CV into an effective tool that
          showcases your achievements and potential. Our sector-specific
          expertise ensures your CV appeals to recruiters and distinguishes you
          in the competitive job market.
        </p>
      </div>
    ),
  },
  {
    name: "Cover Letter",
    price: 25,
    headerColor: "#41c870",
    headerBgColor: "rgba(65,200,112,.15)",
    description: (
      <div className="flex">
        <p>
          Bespoke cover letter is tailored to a wide range of job applications.
          It showcases your relevant skills, experiences, and qualifications,
          and demonstrates your understanding of the company and the role you
          are applying for.
        </p>
      </div>
    ),
  },
  {
    name: "LinkedIn Optimisation",
    price: 25,
    headerBgColor: "rgba(65,200,112,.15)",
    headerColor: "#41c870",
    description: (
      <div className="flex">
        <p>
          Your LinkedIn account is optimised for the LinkedIn ATS, our LinkedIn
          Specialists include relevant keywords such as industry-specific terms
          and skills. This will increase your visibility and improve your
          chances of being considered for job opportunities.
        </p>
      </div>
    ),
  },
  {
    name: "ApplyMate",
    price: 30,
    headerBgColor: "rgba(65,200,112,.15)",
    headerColor: "#41c870",
    description: (
      <div className="flex">
        <p>
          ApplyMate offers a tailored job application service, streamlining your
          job search by identifying and submitting applications for suitable
          opportunities. Our expert team allows you to focus on career growth
          while we handle the application process, helping you secure your ideal
          job.
        </p>
      </div>
    ),
  },
  {
    name: "Interview Preparation",
    price: 50,
    headerBgColor: "rgba(235,167,67,.12)",
    headerColor: "#eba743",
    description: (
      <div className="flex">
        <p>
          2 x 30-minute Mock interview sessions with a professional career
          coach. Providing feedback and advice on your interview skills and
          performance, including Interview question preparation and personalised
          answers Tips.
        </p>
      </div>
    ),
  },
  {
    name: "CV Circulation",
    price: 50,
    headerBgColor: "rgba(74,208,190,.12)",
    headerColor: "#4ad0be",
    description: (
      <div className="flex flex-col gap-5">
        <div className="flex">
          <p>
            We have the largest recruitment network in the country,{" "}
            <strong>over 15,000 recruitment agency partners</strong>, across 50
            sectors.
          </p>
        </div>

        <div className="flex">
          <p>
            By circulating your CV, you can increase your chances of finding a
            suitable job that aligns with your skills, interests, and career
            goals. Effective CV circulation requires a well-written CV that
            highlights the candidate&apos;s strengths and presents them in a
            professional and appealing manner.
          </p>
        </div>
      </div>
    ),
  },
  {
    name: "Career Coaching",
    price: 300,
    headerBgColor: "rgba(198,74,208,.12)",
    headerColor: "#c64ad0",
    description: (
      <div className="flex flex-col gap-5">
        <div className="flex flex-col gap-2">
          <div>Session 1</div>
          <div>
            We will be determining a list of Target Roles based on your
            experiences, passions, and goals. After this session I will email
            across roles for which you are most suitable for.
          </div>
        </div>

        <div className="flex flex-col gap-2">
          <div>Bespoke CV</div>
          <div>
            Our personalised CV highlights your unique career and ambitions. We
            build a tailored CV that not only showcases your past achievements
            but also your future potential. Using our industry expertise, we
            ensure your CV stands out to recruiters and employers, providing you
            a competitive edge.
          </div>
        </div>

        <div className="flex flex-col gap-2">
          <div>Session 2</div>
          <div>
            Ensuring the CV is an accurate representation of your skills,
            experience, achievements, and qualifications, and to develop skills
            in optimising the CV for the target roles or any roles you would
            target in the future.
          </div>
        </div>

        <div className="flex flex-col gap-2">
          <div>Session 3</div>
          <div>
            During this session, we will go through hints and tips of applying
            for jobs effectively and developing techniques to maximise your
            Interview Conversion.
          </div>
        </div>

        <div className="flex flex-col gap-2">
          <div>ApplyMate</div>
          <div>
            ApplyMate is a tailored service that streamlines job hunts by
            identifying opportunities and managing applications, freeing
            professionals to focus on career growth.
          </div>
        </div>

        <div className="flex flex-col gap-2">
          <div>Interview Preparation</div>
          <div>
            2 x 30-minute Mock interview sessions with a professional career
            coach. Providing feedback and advice on your interview skills and
            performance, including Interview question preparation and
            personalised answers Tips.
          </div>
        </div>

        <div>
          Personal statements maybe could be changed, rather than have inputs
          for 60 and 90, maybe client could choose number of words, just a
          thought if its too much work, keep as is.
        </div>
      </div>
    ),
  },
  {
    name: "Personal Statement (Under 1,000 words)",
    price: 60,
    headerBgColor: "rgba(198,74,208,.12)",
    headerColor: "#c64ad0",
    description: (
      <div className="flex flex-col gap-5">
        <div className="flex">
          <p>
            Our team specialises in crafting compelling personal{" "}
            <strong>statements over 1,000 words</strong>, tailored to showcase
            your unique experiences, strengths, and goals. Trust us to vividly
            present your story, ensuring a lasting impression on admissions
            committees or prospective employers.
          </p>
        </div>
      </div>
    ),
  },
  {
    name: "Personal Statement (Over 1,000 words)",
    price: 90,
    headerBgColor: "rgba(198,74,208,.12)",
    headerColor: "#c64ad0",
    description: (
      <div className="flex flex-col gap-5">
        <div className="flex">
          <p>
            Our team specialises in crafting compelling personal{" "}
            <strong>statements over 1,000 words</strong>, tailored to showcase
            your unique experiences, strengths, and goals. Trust us to vividly
            present your story, ensuring a lasting impression on admissions
            committees or prospective employers.
          </p>
        </div>
      </div>
    ),
  },
  {
    name: "Bespoke Presentation",
    price: 60,
    headerBgColor: "rgba(90,141,204,.12)",
    headerColor: "#5a8dcc",
    description: (
      <div className="flex flex-col gap-5">
        <div>
          We offer comprehensive Bespoke Presentation Services, designed to
          create powerful and engaging presentations from content creation to
          design. Our expert team will collaborate with you to ensure a
          captivating and memorable presentation tailored to your specific goals
          and audience.
        </div>

        <div className="flex flex-col">
          <div className="mb-2">
            <strong>Our Bespoke Presentation Services include:</strong>
          </div>
          <div>
            <strong>Content Development:</strong> Our content specialists will
            work with you to create a compelling and well-structured message
            tailored to your audience and objectives.
          </div>
          <div>
            <strong>Customised Design Templates:</strong> Our designers will
            craft a unique, professional template that reflects your
            presentation theme.
          </div>
          <div>
            <strong>Engaging Layouts and Visual Elements:</strong> We&apos;ll
            expertly combine captivating visuals and layouts with your content
            for a clear and impactful presentation.
          </div>
          <div>
            <strong>Content Formatting and Optimisation:</strong> Our team will
            meticulously format and optimise your content for visual appeal and
            readability.
          </div>
          <div>
            <strong>Professionalism and Attention to Detail:</strong> We&apos;re
            committed to delivering polished, visually consistent presentations
            that impress your audience.
          </div>
          <div>
            <strong>Seamless Collaboration and Revisions:</strong> We&apos;ll
            work closely with you throughout the process, incorporating feedback
            and revisions to ensure the final presentation meets your
            expectations.
          </div>
        </div>
      </div>
    ),
  },
  {
    name: "Presentation Design",
    price: 35,
    headerBgColor: "rgba(198,74,208,.12)",
    headerColor: "#c64ad0",
    description: (
      <div className="flex flex-col gap-5">
        <p>
          Our Presentation Design Services focus on creating eye-catching,
          memorable designs that will make your presentations stand out and
          leave a lasting impression. Whether you&apos;re delivering a business
          pitch, presenting research findings, or sharing an educational lesson,
          our expert designers are here to help you elevate your presentation
          game.
        </p>

        <div>Content Formatting and Optimisation</div>

        <p>
          Once you provide your content, our team will ensure that it is
          formatted and optimised for the presentation format. We will work on
          font selection, text size, colour schemes, and other design elements
          to ensure that your content is visually appealing and easy to read.
        </p>

        <div>Seamless Collaboration and Revisions</div>

        <p>
          We understand the importance of collaboration in creating the perfect
          presentation. Our team will work closely with you throughout the
          design process, incorporating your feedback and making revisions as
          needed to ensure that the final design meets your expectations and
          requirements.
        </p>
      </div>
    ),
  },
  {
    name: "Pro Apply",
    price: 75,
    headerBgColor: "rgba(90,141,204,.12)",
    headerColor: "#5a8dcc",
    description: (
      <div className="flex flex-col gap-5">
        <p>
          With Pro Apply, you gain access to a team of experts dedicated to
          meticulously completing your application forms on your behalf. We
          ensure accuracy, professionalism, and a keen attention to detail,
          enhancing your chances of success. Our service includes:
        </p>

        <p>
          <strong>Expert Form Filling:</strong> Our skilled professionals handle
          every aspect of the application process, ensuring that each form is
          filled out accurately and effectively.
        </p>

        <p>
          <strong>Personal Statement Writing:</strong> We offer bespoke personal
          statement writing services with no length limitations, ensuring your
          story is told compellingly and comprehensively.
        </p>

        <p>
          <strong>Time-Saving Convenience:</strong> We take on the tedious task
          of form completion, allowing you to focus on what truly matters.
        </p>

        <p>
          <strong>Customised Approach:</strong> Each application is treated
          uniquely, tailored to meet specific requirements and criteria.
        </p>

        <p>
          <strong>Confidential and Secure:</strong> Your information is handled
          with the utmost confidentiality and security, guaranteeing peace of
          mind.
        </p>
      </div>
    ),
  },
  {
    name: "CV Re-Optimisation",
    price: 25,
    headerBgColor: "rgba(247,152,255,.12)",
    headerColor: "#f798ff",
    description: (
      <div className="flex flex-col gap-5">
        <div className="flex">
          <p>
            Our CV Re-Optimisation service is crafted to revitalise your
            existing CV and make it relevant for your targeted roles and
            industries. We delve into your current CV, identify strengths, and
            pinpoint areas for enhancement.
          </p>
        </div>

        <div className="flex">
          <p>
            Ultimately, our CV Re-Optimisation service is more than a refresh;
            it&apos;s about setting the stage for your next career move,
            equipping you with a CV that reflects your growth, ambitions, and
            value.
          </p>
        </div>
      </div>
    ),
  },
];

export const cvPackage: Service[] = [
  {
    name: "Employement Guide",
    price: "Free",
  },
  {
    name: "Upload CV to Job Site",
    price: "Free",
  },
  {
    name: "ATS Optimisation",
    price: "Free",
  },
  {
    name: "Unlimited Revisions",
    price: "Free",
  },
];

export const basicPackage: Service[] = [
  {
    name: "Employement Guide",
    price: "Free",
  },
  {
    name: "Upload CV to Job Site",
    price: "Free",
  },
  {
    name: "ATS Optimisation",
    price: "Free",
  },
  {
    name: "Unlimited Revisions",
    price: "Free",
  },
];

export const standardPackage: Service[] = [
  {
    name: "Employement Guide",
    price: "Free",
  },
  {
    name: "Upload CV to Job Site",
    price: "Free",
  },
  {
    name: "ATS Optimisation",
    price: "Free",
  },
  {
    name: "Unlimited Revisions",
    price: "Free",
  },
];

export const professionalPackage: Service[] = [
  {
    name: "Employement Guide",
    price: "Free",
  },
  {
    name: "Upload CV to Job Site",
    price: "Free",
  },
  {
    name: "ATS Optimisation",
    price: "Free",
  },
  {
    name: "Unlimited Revisions",
    price: "Free",
  },
  {
    name: "CV Re-optimisation x 2",
    price: "Free",
  },
];
