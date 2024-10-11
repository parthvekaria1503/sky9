import React from "react";
import Image from "next/image";

const page = () => {
  return (
    <div className="w-full p-10 bg-slate-900 text-cyan-200">
      <div className="flex flex-row justify-center ">
        <div className="w-6/12 p-10 text-center">
          At Our Quiz Website, we believe that learning should be fun and
          engaging. Our platform is dedicated to bringing you a wide variety of
          quizzes that challenge your knowledge, spark your curiosity, and help
          you discover new interests. Whether re a trivia master, a casual
          learner, or someone just looking to test your skills, we have
          something for everyone!
        </div>
        <div className="w-6/12 ">
          <Image
            className="block ms-auto me-auto"
            src="/about1.jpg" // Path to your image
            alt="Description of the image"
            width={300} // Specify the width
            height={300} // Specify the height
            quality={100} // Optional: Set quality (1-100)
          />
        </div>
      </div>
      <div className="flex flex-row justify-center ">
        <div className="w-6/12 ">
          <Image
            className="block ms-auto me-auto"
            src="/about1.jpg" // Path to your image
            alt="Description of the image"
            width={300} // Specify the width
            height={300} // Specify the height
            quality={100} // Optional: Set quality (1-100)
          />
        </div>
        <div className="w-6/12 p-10 text-center">
          At Our Quiz Website, we believe that learning should be fun and
          engaging. Our platform is dedicated to bringing you a wide variety of
          quizzes that challenge your knowledge, spark your curiosity, and help
          you discover new interests. Whether re a trivia master, a casual
          learner, or someone just looking to test your skills, we have
          something for everyone!
        </div>
      </div>
      <div className="flex flex-row justify-center ">
        <div className="w-6/12 p-10 text-center">
          At Our Quiz Website, we believe that learning should be fun and
          engaging. Our platform is dedicated to bringing you a wide variety of
          quizzes that challenge your knowledge, spark your curiosity, and help
          you discover new interests. Whether re a trivia master, a casual
          learner, or someone just looking to test your skills, we have
          something for everyone!
        </div>
        <div className="w-6/12 ">
          <Image
            className="block ms-auto me-auto"
            src="/about1.jpg" // Path to your image
            alt="Description of the image"
            width={300} // Specify the width
            height={300} // Specify the height
            quality={100} // Optional: Set quality (1-100)
          />
        </div>
      </div>
    </div>
  );
};

export default page;
