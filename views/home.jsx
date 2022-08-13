const React = require("react")
const Def = require("./default")
function home () {
      return (
        <Def>
            <main>
                <h1>HOME</h1>

                <div>
                  <img src="images\anton-6_ewhkIfFfo-unsplash (1).jpg" alt="strawberry and chocolate cake" />
                </div>
                <div>
                Photo by <a href="https://unsplash.com/@uniqueton?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Anton</a> on <a href="https://unsplash.com/?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>
  
                </div>
                <a href="./places">
                  <button className="btn-primary">Places</button>
                </a>
            </main>
        </Def>
      )
    }
    

module.exports = home

