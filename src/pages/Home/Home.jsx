import Banner from "../../components/Banner";
import Fluid from "../../components/Fluid";
import HoneyTypes from "../../components/HoneyTypes";
import About from "../../components/About";
import Testimonial from "../../components/Testimonial";
import Blog from "../../components/Blog";

export default function Home() {
  return (
    <>
      <Banner />
      <Fluid />
      <HoneyTypes />
      <About />
      <Testimonial />
      <Blog />
    </>
  );
}
