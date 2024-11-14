import React from 'react';
import './menu.css';
import { Link } from 'react-router-dom';

function Menu() {
  return (
    <div>
      <section className="gallery" id="gallery">
        <u>
          <h1 className="heading">
            
            <h3> N O N - V E G & V E G </h3>
          </h1>
        </u>
        <br/><br/>
        <div className="box-container">
          <div className="box">
            <figure>
            <img src="/images/biryani.webp" alt="Biryani" />
            <figcaption>Biryani</figcaption>
            </figure>
            <div className="content">
              <h3>Biryani</h3>
              <p>Biryani is a popular dish of spiced meat and rice with flavorful spices.</p>
              <Link to="/Biryani" style={{textDecoration:'none'}}><button className="btn">See more</button></Link>
            </div>
            <figcaption>Biryani</figcaption>
          </div>
          
          <div className="box">
                    <img src="/images/chicken-curry.webp" alt="ButterChicken" />
                    <div className="content">
                        <h3>Chicken items</h3>
                        <p>Chicken curry is a beloved dish known for its rich, aromatic sauce and tender, Its comforting flavors and That brings unique tastes to each bite.</p>
                        <Link to="/Chickencurry" style={{textDecoration: 'none'}}><button className="btn">See more</button></Link>
                    </div>
                </div>

                <div className="box">
                    <img src="/images/butter-roti.webp" alt="Roti" />
                    <div className="content">
                        <h3>Roti</h3>
                        <p>
                        Roti is a soft, unleavened flatbread made from whole wheat flour, widely enjoyed as a staple in South Asian cuisine.</p>
                        <Link to="/Roti" style={{textDecoration: 'none'}}><button className="btn">See more</button></Link>
                    </div>
                </div>
                <div className="box">
                    <img src="/images/mutton-curry.webp" alt="MuttonCurry" />
                    <div className="content">
                        <h3>Mutton Curry</h3>
                        <p>Mutton curry is a hearty dish with tender pieces of mutton in a rich,spiced gravy and a blend of fragrant spices served with rice or roti</p>
                        <Link to="/Muttoncurry" style={{textDecoration: 'none'}}><button className="btn">See more</button></Link>
                    </div>
                </div>

                <div className="box">
                    <img src="/images/fish-curry.webp" alt="FishCurry" />
                    <div className="content">
                        <h3>Fish Curry</h3>
                        <p>It's a flavorful dish made by simmering fish in a rich, and a blend of aromatic spices, offering a delicious and often tangy complement to rice</p>
                        <Link to="/Fishcurry" style={{textDecoration: 'none'}}><button className="btn">See more</button></Link>
                    </div>
                </div>

                <div className="box">
                    <img src="/images/starters.webp" alt="Starters" />
                    <div className="content">
                        <h3>Starters</h3>
                        <p>Non-vegetarian starters offer a delicious variety of flavors, textures, and spices, perfect for setting the stage for a meal</p>
                        <Link to="/Nonvegstarters" style={{textDecoration: 'none'}}><button className="btn">See more</button></Link>
                    </div>
                </div>
          
        </div>
        <br/><br/>

        <div className="box-container">
        <div className="box">
            <img src="/images/plain-rice.webp" alt="Rices" />
            <div className="content">
            <h3>Plain-Rice</h3>
            <p>Plain rice is a staple food in many cultures around the world. It's made by simply boiling or steaming rice grains</p>
            <Link to="/Rices" style={{textDecoration: 'none'}}><button className="btn">See more</button></Link>
            </div>
                </div>
          <div className="box">
            <img src="/images/panner.jpg" alt="Paneeritems" />
            <div className="content">
              <h3>Paneer Butter Masala</h3>
              <p>A rich and creamy curry made with paneer cooked in butter with aromatic spices.</p>
              <Link to="/Paneeritems" style={{textDecoration: 'none'}}><button className="btn">See more</button></Link>
            </div>
          </div>
        
          <div className="box">
            <img src="/images/fried-rice.webp" alt="FriedRice" />
              <div className="content">
              <h3>Fride Rice</h3>
              <p>It's a flavorful dish made by stir-frying cooked rice with vegetables, proteins, and seasonings, often enhanced with sauces or other spices</p>
              <Link to="/FriedRice" style={{textDecoration: 'none'}}> <button className="btn">See more</button></Link>
              </div>
          </div>

          <div className="box">
            <img src="/images/paneer-tikka.webp" alt="PannerTikka" />
              <div className="content">
                <h3>VEG-Starters</h3>
                 <p>starters offer a delicious variety of flavors, textures, and spices, perfect for setting the stage for a meal</p>
                 <Link to="/Veg-starters" style={{textDecoration: 'none'}}><button className="btn">See more</button></Link>
              </div>
          </div>

          <div className="box">
              <img src="/images/ragi-mudda.webp" alt="milletlump" />
              <div className="content">
               <h3>lump of Finger millet</h3>
              <p>Finger millet, also known as ragi, is a nutrient-rich grains, known for their high fiber content,and essential amino acids, making it a staple in many health-conscious diets.</p>
              <Link to="/Milletlump" style={{textDecoration: 'none'}}> <button className="btn">See more</button></Link>
              </div>
          </div>
          <div className="box">
           <img src="/images/curd-rice.webp" alt="curdrice" />
              <div className="content">
                <h3>Curd-rice</h3>
                <p>Curd rice, also known as yogurt rice, is a popular South Indian comfort meal made with soft cooked rice, mixed yogurt, and tempered with spices.</p>
                <Link to="/Curdrice" style={{textDecoration: 'none'}}><button className="btn">See more</button></Link>
              </div>
            </div>
        </div>
      </section>
    </div>
  );
}

export default Menu;
