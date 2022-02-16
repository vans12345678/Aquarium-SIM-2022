import FishList from "./FishList";
import { useState } from "react";

const Listings = () => {
  const [blogs, setBlogs] = useState([
    { title: "My new website", body: "lorem ipsum...", author: "mario", id: 1 },
    { title: "Welcome party!", body: "lorem ipsum...", author: "yoshi", id: 2 },
    {
      title: "Web dev top tips",
      body: "lorem ipsum...",
      author: "mario",
      id: 3,
    },
  ]);
  return (
    <div className="listings">
      <h2 className="banner1">Fish Listings</h2>
      <FishList blogs={blogs} title="Fish stuff" />
    </div>
  );
};

export default Listings;
