import React from 'react'
import './services.css'

export const Services = () => {
   // Fairly easy to understand code 😊
  return (
    <>  
      <div className="bgcolor">

    <div className="tv" id="toptv">
        <p className='servicestext'>
        <h1 id="topheading">Enjoy on Your TV.</h1>
        <br></br>
        <h3>Watch on smart TVs, PlayStation, Xbox, Chromecast, Apple TV, Blu-ray players and more.</h3>
        </p>
         <div className="parent">
        <div className="gridimage">
        <img className='servicesimage' src="./tv.png" alt="" srcset=""/>
        </div>
        <div>
            <video className="tvvid" src="./cobrakai.mp4" autoPlay loop muted playsInline/>
        </div>
        </div>
    </div>
    
    <hr id="hs" /> 
    <div className="tv">
         
         <div id="ho">
        <img className='servicesimage' id="mo"src="./mobile.jpg" alt="" srcset="" />
        <div id="d">
       <button className="netbtn"> 
         <div className="fl">
        <img className="st" src="./boxshot.png" alt="" srcset="" />
         <div className="bttext">Stranger Things </div>
         <div className="bttext2">Downloading...</div>
         </div>
       </button>
       </div>
        </div>
       
       
        <p className="servicestext">
        <h1>Download your shows to watch offline.</h1>
        <br></br>
        <h3>Save your favourites easily and always have something to watch.</h3>
        </p>
        
    </div>
      
    <hr id="hs" />
     <div className="tv">
     <p className="servicestext">
        <h1>Watch everywhere.</h1>
        <br></br>
        <h3>Stream unlimited movies and TV shows on your phone, tablet, laptop, and TV.</h3>
        </p>
         <div className="parent">
        <div className="gridimage">
          <div className="image2">
        <img className='genos'  src="./tv2.png" alt="" srcset=""/>
        <div>
            <video className="tvvid2" src="./genos.mp4" autoPlay loop muted playsInline/>
        </div>
        </div>
        </div>
        
        </div>
     </div>
     <hr id="hs" /> 

     <div className="tv">
         
         <div id="ho">
        <img className='servicesimage'id="mo"src="./child.png" alt="" srcset="" />
        </div>
       
       
        <p className="servicestext">
        <h1>Create profiles for children.</h1>
        <br></br>
        <h3>Send children on adventures with their favourite characters in a space made just for them—free with your membership.</h3>
        </p>
        
    </div>
    </div>
    <hr id="new" /> 
      <div className="bgcolor">
    <div className="contactparent">
        <h1 className="contacthead">Plans and Pricing</h1>
        <br />
        <h3 className="h3">
          Netflix offers a variety of plans to meet your entertainment needs. As
          a Netflix member, you are charged monthly on the date you signed up. A
          Netflix account is for people who live together in a single household.{" "}
        </h3>
      </div>

      <div className="table">
        <table>
          <tr id="firstrow">
            <th>
              <h4>Mobile</h4>
            </th>
            <th>
              <h4>Basic</h4>
            </th>
            <th>
              <h4>Standard</h4>
            </th>
            <th>
              <h4>Premium</h4>
            </th>
          </tr>
          <tr>
            <td>✓ Watch on 1 phone or tablet at a time</td>
            <td>✓ Watch on 1 supported device at a time</td>
            <td>✓ Watch on 2 supported devices at a time</td>
            <td>✓ Watch on 4 supported devices at a time</td>
          </tr>
          <tr>
            <td>✓ Unlimited movies, TV shows, and mobile games</td>
            <td>✓ Unlimited movies, TV shows, and mobile games</td>
            <td>✓ Unlimited movies, TV shows, and mobile games</td>
            <td>✓ Unlimited movies, TV shows, and mobile games</td>
          </tr>
          <tr>
            <td>✓ Ad-free TV shows and movies</td>
            <td>✓ Ad-free TV shows and movies</td>
            <td>✓ Ad-free TV shows and movies</td>
            <td>✓ Ad-free TV shows and movies</td>
          </tr>
          <tr>
            <td>✓ Download on 1 phone or tablet at a time</td>
            <td>✓ Download on 1 phone or tablet at a time</td>
            <td>✓ Download on 1 phone or tablet at a time</td>
            <td>✓ Download on 1 phone or tablet at a time</td>
          </tr>
          <tr>
            <td></td>
            <td>✓ Watch in HD</td>
            <td>✓ Watch in Full HD</td>
            <td>✓ Watch in Ultra HD</td>
          </tr>
        </table>
      </div>
      <div className="priceparent">
        <stripe-pricing-table pricing-table-id="prctbl_1MVrcjSAny3wNQKGfAINupIy"
publishable-key="pk_test_51MVeaBSAny3wNQKGrt4aM9rUqcKA1zvKHN2iZGxWv931POp3D2185pM0Yrsa1U9yWpEZngmFzkDcssfCIfaD7ZDZ00HACzXtCI">
</stripe-pricing-table>

      </div>
      </div>
    </>
  )
}
