import { useState } from "react";
const Home = () => {
  //let name = 'mario';
  const [name, setName] = useState("mario");
  const [age, setAge] = useState(28);

  const handleClick = () => {
    setName("luigi");
    setAge(30);
  };

  return (
    <div className="container">
      <br />
      <br />
      <div className="home">
        <h1 className="orangeText">WELCOME TO AQUARIUM SIM 2022</h1>
        <p className="text-center">
          maybe add a video here showing off the application portion
        </p>
        {/* <button onClick={handleClick}>Click me</button> */}
      </div>
    </div>
  );
};

export default Home;
