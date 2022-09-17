const React = require("react")
const Def = require("../default")

function index (data) {
      let placesFormatted = data.places.map((place) => {
        return (
          <div className = "col-sm-6">
            
            <h2>{place.name}</h2>

            <p className="text-center">
{place.cuisines}
            </p>

            <img src={place.pic} alt={place.name}/>
<p className="text-center">
Located in {place.city}, {place.state}
</p>
</div>
)
 })
return (
<Def>
  <main>
    <h1>PLACES TO VISIT</h1>
<div className = "row">
{placesFormatted}
</div>
          </main>
          
<div className="newButton">    
<a href="/places/new"><button>Add New Place</button></a>
    </div>
  
<div className="backButton">
    
            <a href="/views/home">
<button>Go Back Home</button></a>

</div>


        </Def>
    )
}



module.exports = index

