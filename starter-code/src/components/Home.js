import React from "react";
import { Link } from "react-router-dom";

function Home(props) {
  return (
    <div className ="main">
            <div>
          <img src="/images/beers.png" alt=""/>
          </div>
          <Link className="linkToBeers" to="/beers">Beers List</Link>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quo,
            placeat odio reprehenderit dolorum ipsa quae, provident rem
            consectetur, consequuntur sint tenetur recusandae aliquam! Earum quo
            vel ipsam itaque, culpa suscipit?
          </p>
            <div>
        <img src="/images/random-beer.png" alt=""/>
        </div>
          <Link className="linkToNewBeers" to="/new">New beer</Link>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quo,
            placeat odio reprehenderit dolorum ipsa quae, provident rem
            consectetur, consequuntur sint tenetur recusandae aliquam! Earum quo
            vel ipsam itaque, culpa suscipit?
          </p>
        <div>
         <img src="/images/new-beer.png" alt=""/>
         </div>
           <Link className="linkToRandomBeers" to="/random-beer">Random beer</Link>
           <p>
             Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quo,
             placeat odio reprehenderit dolorum ipsa quae, provident rem
             consectetur, consequuntur sint tenetur recusandae aliquam! Earum quo
             vel ipsam itaque, culpa suscipit?
           </p>
           </div>
        )
    }

    export default Home;