import FishList from "./FishList";

const Listings = () => {
  const [fish, setBlogs] = useState([
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
      <h1 className="banner1">Fish Listings</h1>
      <FishList fish={fish} title="Fish stuff" />
    </div>
  );
};

export default Listings;
