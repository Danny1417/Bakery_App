const React = require("react")
const Def = require("./default")
function error404 () {
      return (
        <Def>
            <main>
                <h1>404: PAGE NOT FOUND</h1>
                <p>Oops, sorry, we can't find this page!</p>
                
                  <img src="/images/erik-mclean-sxiSod0tyYQ-unsplash.jpg" alt="" />
                
                <div>
                Photo by <a href="https://unsplash.com/@introspectivedsgn?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Erik Mclean</a> on <a href="https://unsplash.com/s/photos/404?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>
  
  
                </div>
            </main>
        </Def>
      )
    }
    

module.exports = error404