// "use client";

// import { LucideGithub, LucideLinkedin } from "lucide-react";

// const Footer = () => {
//   return (
//     <footer className="container container-custom">
//       <div className="rounded-4xl w-full border border-default/25 mb-10 md:mb-14 p-12 md:p-24">
//         <div className="w-full md:max-w-xl space-y-6">
//           <h2 className="text-default/90 font-medium text-2xl md:text-4xl">
//             Fandi <span className="text-primary">Az</span>
//           </h2>
//           <p className="text-default/60 text-base md:text-lg font-light">
//             Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit
//             sapiente inventore delectus quidem blanditiis. Sapiente?
//           </p>

//           {/* sosmed */}
//           <div className="flex items-center gap-3">
//             <div className="rounded-full size-14 border-[0.5px] border-default/25 flex items-center justify-center hover:bg-default/25 transition duration-300">
//               <LucideLinkedin className="size-5" />
//             </div>
//             <div className="rounded-full size-14 border-[0.5px] border-default/25 flex items-center justify-center hover:bg-default/25 transition duration-300">
//               <LucideGithub className="size-5" />
//             </div>
//           </div>
//         </div>

//         <hr className="" />

//         <div className="mt-6">
//           <span className="text-default/60">
//             @2026 Fandi. All Right Reserfed
//           </span>
//         </div>
//       </div>

//       {/* <div className="w-full min-w-0 line-clamp-1 bg-blue-50">
//         <span
//           className="block w-full text-[400px] font-bold text-center text-default/50"
//           style={{
//             letterSpacing: "0.10em",
//           }}
//         >
//           FANDI
//         </span>
//       </div> */}
//     </footer>
//   );
// };

// export default Footer;

"use client";

import { LucideGithub, LucideLinkedin, LucideMail } from "lucide-react";

const Footer = () => {
  return (
    <footer className="container container-custom">
      <div className="rounded-4xl w-full border border-default/25 mb-10 md:mb-14 px-6 py-6 md:px-16 md:py-16 lg:px-24 lg:py-24">
        <div className="w-full md:max-w-xl space-y-6">
          <h2 className="text-default/90 font-medium text-2xl md:text-4xl">
            Fandi <span className="text-primary">Az</span>
          </h2>
          <p className="text-default/60 text-base md:text-lg font-light">
            Frontend Web Developer focused on building scalable and
            high-performance web applications. Based in Indonesia.
          </p>

          {/* sosmed */}
          <div className="flex items-center gap-3">
            <a
              href="https://linkedin.com/in/fandi-aziz-pratama-9b1a0b255"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full size-14 border-[0.5px] border-default/25 flex items-center justify-center hover:bg-default/25 transition duration-300"
            >
              <LucideLinkedin className="size-5" />
            </a>
            <a
              href="mailto:andiazizp123@gmail.com"
              className="rounded-full size-14 border-[0.5px] border-default/25 flex items-center justify-center hover:bg-default/25 transition duration-300"
            >
              <LucideMail className="size-5" />
            </a>
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full size-14 border-[0.5px] border-default/25 flex items-center justify-center hover:bg-default/25 transition duration-300"
            >
              <LucideGithub className="size-5" />
            </a>
          </div>
        </div>

        <hr className="" />

        <div className="mt-6 text-center md:text-left">
          <span className="text-default/60">
            &copy;{new Date().getFullYear()} Fandi Aziz Pratama. All Rights
            Reserved.
          </span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
