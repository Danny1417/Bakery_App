 
const React = require("react")
const Def = require("../default")
function new_form(){
    return(
        <Def>
          <h2>Add a New Place</h2>
        <div>
        <form method="POST" action="/places">
  <div>
    <label htmlFor="name"> Name</label>
    <input id="name" name="name" required/>
  </div>
  <div>
    <label htmlFor="pic">Picture</label>
    <input type="url" id="pic" name="pic" />
  </div>
  <div>
    <label htmlFor="city">City</label>
    <input id="city" name="city" />
  </div>
  <div>
    <label htmlFor="state">State</label>
    <input id="state" name="state" />
  </div>
  <div>
    <label htmlFor="cuisines">Cuisines</label>
    <input id="cuisines" name="cuisines" />
  </div>
                    <input type="submit" value="Add Place" />
                    
</form>

        <div>
          <a href="/places">
            <button> Go Back To Places </button>
          </a>
                </div>
                
                </div>
        </Def>
    )
}


module.exports = new_form