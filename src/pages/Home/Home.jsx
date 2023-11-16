import Banner from "../../components/Home/Banner";
import Fluid from "../../components/Home/Fluid";
import HoneyTypes from "../../components/Home/HoneyTypes";
import About from "../../components/Home/About";
import Testimonial from "../../components/Home/Testimonial";
import Blog from "../../components/Home/Blog";

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
