function Services() {
  return (
    <div className=" bg-[#000] text-white h-screen grid place-items-center">
      <div className="text-4xl">Services</div>
      <div className="flex justify-around items-center gap-10 mx-10">
        {cardData.map((data) => (
          <div className="w-1/4 text-justify bg-white text-black rounded-md shadow-md pb-5">
            <img src={data.image} alt="" />
            <div className="p-4 font-semibold">{data.title}</div>
            <div className="p-4 text-sm">{data.description}</div>
            <div className="text-center"> $150 </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Services;

const cardData = [
  {
    image: "https://www.fexle.com/blogs/wp-content/uploads/2020/05/ux-ui-indesign-1.png",
    title: "UI UX Design",
    description:
     "Designing and building intuitive and visually appealing user interfaces that enhance user experience.",
  },
  {
    image:"https://miro.medium.com/v2/resize:fit:2558/1*rAnAMmvA6FmPcCf8h16Lvg.jpeg",
    title: "Frontend Development ",
    description:
      "Developing interactive and dynamic web applications using latest frontend technologies, including front-end frameworks like React, Vue, and Angular.",
  },
  {
    image: "https://images.shiksha.com/mediadata/images/articles/1717655243php7KA6Hu.jpeg",
    title: "Backend Development",
    description:
    "Building robust and scalable server-side applications, ensuring secure data handling, and integrating APIs using modern backend technologies like Node.js, Laravel and more."
  },
 
];
