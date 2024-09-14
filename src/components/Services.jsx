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
    image: "https://random.imagecdn.app/500/300",
    title: "Responsive design",
    description:
      "Creating websites that look great and function flawlessly on all devices, from smartphones to desktops.",
  },
  {
    image: "https://random.imagecdn.app/500/350",
    title: "UI UX ",
    description:
      "Designing and building intuitive and visually appealing user interfaces that enhance user experience.",
  },
  {
    image: "https://random.imagecdn.app/500/250",
    title: "JS Web Development ",
    description:
      "Developing interactive and dynamic web applications using JavaScript, including front-end frameworks like React, Vue, and Angular.",
  },
];
