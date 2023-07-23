import React from "react";
import Contact from "./contact/contact";
import Cat1 from "./Images/cat1.jpeg";
import Cat2 from "./Images/cat2.jpeg";
import Cat3 from "./Images/cat3.jpeg";
import Cat4 from "./Images/cat4.jpeg";

export default function App() {
  return (
    <div className="grid grid-cols-2 gap-8 px-[50px] pt-[50px] bg-gray-300 ">
      <Contact
        img={Cat1}
        name="Mr. Whisker"
        phone="+2348459087564"
        email="whisker@gmail.com"
      />

      <Contact
        img={Cat2}
        name=" Fluffykins"
        phone="+2348459087564"
        email="fluffykins@gmail.com"
      />

      <Contact
        img={Cat3}
        name="Felix"
        phone="+2348459087564"
        email="felix@gmail.com"
      />

      <Contact
        img={Cat4}
        name="Pumpkin"
        phone="+2348459087564"
        email="pumpkin@gmail.com"
      />
    </div>
  );
}
