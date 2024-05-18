import logo from "./logo.svg";
import "./App.css";
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Action from "./components/Action";
import Browser from "./components/Browser";
import Card from "./components/Card";
import Footer from "./components/Footer";
import Section from "./components/Section";

function App() {
  return (
    <>
      <Navbar />
      <Header />
      <Hero/>
      <Action/>
      <Section/>
      <Browser/>
      <div className="text-center text-white mt-32">
        <p className="text-3xl font-medium font-sora ">An All-Round Plugin With Powerful</p>
        <p className="text-3xl font-medium font-sora ">Features</p>
        <p className="text-gray-400 text-md font-normal font-outfit mt-4">Whether you're a seasoned web designer or just starting out, Motion Art for</p>
        <p className="text-gray-400 text-md font-normal font-outfit">Elementor seamlessly integrates with the Elementor platform, providing you</p>
        <p className="text-gray-400 text-md font-normal font-outfit">with a seamless and intuitive experience.</p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mx-5 my-10">
        <Card title="Light Weight" content="Motion Art for Elementor is designed to be lightweight." img={`https://res-console.cloudinary.com/dekobspwg/thumbnails/v1/image/upload/v1716035776/bXlfYXNzZXN0L0NvcHlfb2ZfbW90aW9uYXJ0ZWZmZWN0LWltZzlfdmI0dWtv/drilldown`}></Card>
        <Card title="100% Responsive" content="Create a consistent visual experience across all devices." img={`https://res-console.cloudinary.com/dekobspwg/thumbnails/v1/image/upload/v1716035778/bXlfYXNzZXN0L0NvcHlfb2ZfbW90aW9uYXJ0ZWZmZWN0LWltZzZfbTByY3Rm/drilldown`}></Card>
        <Card title="User Friendly Interface" content="Ensure a smooth experience for both applicants and administrators." img={`https://res-console.cloudinary.com/dekobspwg/thumbnails/v1/image/upload/v1716035778/bXlfYXNzZXN0L0NvcHlfb2ZfbW90aW9uYXJ0ZWZmZWN0LWltZzdfZHNmYWdy/drilldown`}></Card>

      </div>
      <Footer/>
    </>
  );
}

export default App;
