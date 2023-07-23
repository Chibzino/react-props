import react from "react";

import { FaPhone, FaEnvelope } from "react-icons/fa";
import Cat1 from "../Images/cat1.jpeg";
import Cat2 from "../Images/cat2.jpeg";
import Cat3 from "../Images/cat3.jpeg";
import Cat4 from "../Images/cat4.jpeg";

export default function Contact(props) {
  console.log(props);
  return (
    <>
      <main className="w-[280px] shadow-md flex flex-col items-center justify-center pt-4 pb-4 bg-white">
        <section>
          <div className="w-[250px]">
            <img className="w-[100%] h-[180px]" src={props.img} />
          </div>

          <div>
            <h3 className="font-bold text-[30px]">{props.name}</h3>
            <p className="flex flex-row items-center text-[13px]">
              <FaPhone className="mr-3" /> {props.phone}
            </p>
            <p className="flex flex-row items-center text-[13px]">
              <FaEnvelope className="mr-3" /> {props.email}
            </p>
          </div>
        </section>
      </main>
    </>
  );
}
