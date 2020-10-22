import React, { Component } from "react"
import DataCards from "./Components/DataCards"
import NewsCard from "./Components/NewsCard"
import Girl1 from "./Images/girl1.jpg"
import Girl2 from "./Images/girl2.jpg"
import Girl3 from "./Images/girl3.jpg"
import insta from "./Images/insta.png"
import instaIcon from "./Images/instaIcon.png"
import youtube from "./Images/youtube.png"
import twitch from "./Images/twitch.png"
import twitter from "./Images/twitter.png"
import twitterIcon from "./Images/twitterIcon.png"

export default class App extends Component {
  render() {
    return (
      <div>
        {/* //!Navigation Bar */}
        <div className="navigationBar">
          {/* //@LOGO */}
          <div id="logoContainer" className="navChild">
            <div id="logo">K</div>
          </div>

          {/* //@ELEMENTS */}
          <div id="navEle" className="navChild">
            <div>Blog</div>
            <div>FAQ</div>
            <div>Creators</div>
            <div>Sign In</div>
          </div>
        </div>

        {/* //!Profile Images */}

        {/* //@Banner */}
        <div id="banner"></div>

        {/* //@Profile pic */}
        <div id="profileContainer">
          <div
            style={{
              backgroundImage: `url("${Girl1}")`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
            id="profilePic"
          ></div>
          <div id="profileName">Blond:ish</div>
          <div id="profileDes">Making music as a producer/DJ</div>
        </div>

        {/* //!Data */}

        <div id="profileData">
          {/* //@Price */}
          <div id="price" className="profileDataChild">
            <div>
              <div id="price_name">$blondish</div>
              <div id="price_value">$0.238</div>
              <div id="price_starting">
                <div style={{ color: "#696161" }}>Starting Price</div>
                <div style={{ fontWeight: "bold" }}>$.0.122</div>
                <div style={{ color: "#57C49A", fontWeight: "bold" }}>95%</div>
              </div>
            </div>
          </div>

          {/* //@Review order */}
          <div id="reviewOrderContainer" className="profileDataChild">
            {/* //# Upper Block */}

            <div id="reviewOrder">
              <div style={{ width: "100%" }}>
                <div>Buy $blondish</div>
              </div>
            </div>

            {/* //# Lower Block */}

            <div id="reviewOrderTwo">
              {/* //$ AMOUNT */}

              <div id="amount">
                <div id="amountText">Dollar Amount</div>
                <div id="amountInput">
                  <input type="text" id="amountInput_tab" placeholder="$0.00" />
                </div>
              </div>

              {/* //$ DIVIDER */}

              <div className="divider"></div>

              {/* //$TOTAL AMOUNT */}

              <div id="quantity">
                <div id="quantityText">Est. Quantity</div>
                <div id="quantityValue">0</div>
              </div>

              {/* //$Review Button */}

              <div className="buttonContainer">
                <div className="greenButton"> Review Order</div>
              </div>
            </div>
          </div>
        </div>

        {/* //!Support */}

        <div id="support">
          <div id="supportText">Support Blond:ish</div>
          <div id="supportButton" className="blackButton">
            {" "}
            Donate
          </div>
        </div>

        {/* //!Data Cards */}

        <div id="dataCardContainer">
          <div id="dataCardCenter">
            <DataCards
              desc="Per Month"
              title="Kreative Membership"
              points={[
                "Member-exclusive videos",
                "Early acess to new songs",
                "Acess to discord",
              ]}
              wideImage={Girl1}
            />
            <DataCards
              desc="Auction Starting Price"
              title="Signed Digital Collectible"
              points={[
                "Only 10 available of signed collectibles",
                "Sogned album cover with a note",
              ]}
              wideImage={Girl2}
            />
            <DataCards
              wideImage={Girl3}
              desc="Auction Starting Price"
              title="Fan Livestream"
              points={[
                "Join Blond:ish on livestream",
                "Help co-create music set",
              ]}
            />
          </div>
        </div>

        {/* //!About */}

        <div id="about">
          <div id="aboutText">About</div>
          <div id="aboutLogos">
            <div
              style={{
                backgroundImage: `url("${insta}")`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            ></div>
            <div
              style={{
                backgroundImage: `url("${twitter}")`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            ></div>
            <div
              style={{
                backgroundImage: `url("${twitch}")`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            ></div>
            <div
              style={{
                backgroundImage: `url("${youtube}")`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            ></div>
          </div>
          <div id="aboutBox">
            <div>
              {" "}
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Amet
              quam laboriosam, qui reiciendis quibusdam nisi, temporibus
              recusandae velit assumenda voluptas minima veritatis cumque, odio
              voluptates officia magnam ab error voluptate! Officiis cupiditate
              eligendi consequuntur dolorum modi. Et eos ratione numquam, magni
              quasi qui atque id adipisci maiores aut molestias asperiores
              aliquam quidem nobis ipsum rerum earum, illo corporis harum quod.
              Vero deleniti delectus voluptas obcaecati asperiores harum
              laboriosam consequuntur minus non nobis corrupti eaque
              exercitationem autem quos esse, possimus ab ducimus quas quasi
              dolore quisquam. At fugiat culpa unde aspernatur?
            </div>
            <div id="readMore">Read More</div>
          </div>
          <div id="aboutButtonContainer">
            <div id="aboutFollowButton" className="aboutButtons">
              Follow
            </div>
            <div id="aboutShareButton" className="aboutButtons">
              Share
            </div>
          </div>
        </div>

        {/* //!Service and Activity*/}

        <div id="serviceActivityContainer">
          <div id="serviceActivity">
            <div className="serviceActivityChild serAcHighlight">Service</div>
            <div className="serviceActivityChild">Activity</div>
          </div>
        </div>

        {/* //!News Collection */}

        <div id="newsContainer">
          <div id="news">
            <NewsCard
              title="Twitter Retweet"
              amount="2000"
              name="$blondish"
              infoText="Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates asperiores inventore suscipit temporibus ratione enim nostrum amet impedit nam. Perspiciatis eos eius inventore cum laudantium dicta at aut beatae magnam."
            />
            <NewsCard
              title="Meet & Greet"
              amount="20,000"
              name="$blondish"
              infoText="Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates asperiores inventore suscipit temporibus ratione enim nostrum amet impedit nam. Perspiciatis eos eius inventore cum laudantium dicta at aut beatae magnam."
            />
            <NewsCard
              title="Custom Song"
              amount="200,000"
              name="$blondish"
              infoText="Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates asperiores inventore suscipit temporibus ratione enim nostrum amet impedit nam. Perspiciatis eos eius inventore cum laudantium dicta at aut beatae magnam."
            />
          </div>
        </div>

        {/* //!Footer */}

        <div id="footerContainer">
          <div id="footer">
            <div id="footerText">2020 Kreative</div>

            <div id="footerIcons">
              <div
              
              style={{
                backgroundImage: `url("${instaIcon}")`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                height:"2rem",width:"2rem",cursor:"pointer"
              }}
              ></div>
              <div
              style={{
                backgroundImage: `url("${twitterIcon}")`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                height:"2rem",width:"2rem",cursor:"pointer"
              }}
              >
                
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
