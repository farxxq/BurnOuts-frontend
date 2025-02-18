import { useNavigate } from "react-router-dom";

import Nav from "./Nav";

function Display() {

  const navigate = useNavigate();

  const displayCar = [
    {
      heading: "Car Dealing Experience.",
      subHeading: "Redefined!",
      description:
        "A trusted car dealership offering top-quality vehicles, exceptional customer service, and seamless buying experiences tailored to your needs",
      img: "/images/home-1.png",
    },
    {
      heading: "Car Dealing",
      subHeading: "Redefined!",
      description:
        "A trusted car dealership offering top-quality vehicles, exceptional customer service, and seamless buying experiences tailored to your needs",
      img: "/images/home-2.png",
    },
    {
      heading: "Cars",
      subHeading: "Redefined!",
      description:
        "A trusted car dealership offering top-quality vehicles, exceptional customer service, and seamless buying experiences tailored to your needs",
      img: "/images/home-3.png",
    },
  ];

  return (
    <>
      <Nav />
      <section className="home">
        <div className="home-content">
          <h1 className="font-bold">Car Dealing Experience.</h1>
          <h3 className="font-semibold">Redefined!</h3>
          <p>
            A trusted car dealership offering top-quality vehicles, exceptional
            customer service, and seamless buying experiences tailored to your
            needs
          </p>
          <button className="btn shadow-2xl" onClick={()=> navigate('/featured')}>Explore Cars.</button>
        </div>

        <div className="home-img">
          <div className="rhombus">
            <img src="/images/home-1.png" alt="bmw" className="car-img" />
          </div>
        </div>

        <div className="circle"></div>
      </section>
    </>
  );
}

export default Display;
