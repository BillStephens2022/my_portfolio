

function FeaturedProject({ featuredProject }) {
  return (
    <div className="featuredProject">
        <h2 className="featuredProject__header">{featuredProject.title}</h2>
        <img className="featuredProject__image" src={`${process.env.PUBLIC_URL}/images/${featuredProject.images[0]}`}></img>
        <p className="featuredProject__desc">{featuredProject.desc}</p>
    </div>
  )
}

export default FeaturedProject;