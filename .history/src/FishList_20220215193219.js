const BlogList = ({ fish, title}) => {
  return (
    <div className="fish-list">
      <h2>{ title }</h2>
      {fish.map(fish => (
        <div className="fish-preview" key={fish.id} >
          <h2>{ fish.title }</h2>
          <p>Written by { fish.author }</p>
        </div>
      ))}
    </div>
  );
}
 
export default BlogList;