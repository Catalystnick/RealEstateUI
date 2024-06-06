import React from "react";
import "./singlePage.scss";
import Slider from "../../components/slider/slider";
import { singlePostData, userData } from "../../lib/dummydata";
import { RiMapPin2Line } from "react-icons/ri";
import Map from "../../components/map/map";
import {
  IoBookmarksOutline,
  IoChatboxOutline,
  IoResizeOutline,
  IoBedOutline,
  IoRestaurant,
} from "react-icons/io5";
import { HiMiniWrenchScrewdriver } from "react-icons/hi2";
import { MdOutlinePets } from "react-icons/md";
import { GiReceiveMoney } from "react-icons/gi";
import { FaRegBuilding } from "react-icons/fa";
import { FaBusSimple } from "react-icons/fa6";

import { GiShower } from "react-icons/gi";

function SinglePage() {
  return (
    <div className="singlePage">
      <div className="details">
        <div className="detailsWrapper">
          <Slider images={singlePostData.images} />
          <div className="info">
            <div className="top">
              <div className="post">
                <h1>{singlePostData.title}</h1>
                <div className="address">
                  <RiMapPin2Line size={24} />
                  <span>{singlePostData.address}</span>
                </div>
                <div className="price">$ {singlePostData.price}</div>
              </div>
              <div className="user">
                <img src={userData.img} alt="user image" />
                <span>{userData.name}</span>
              </div>
            </div>
            <div className="bottom">{singlePostData.description}</div>
          </div>
        </div>
      </div>

      <div className="features">
        <div className="featuresWrapper">
          <p className="title">General</p>
          <div className="listVertical">
            <div className="feature">
              <HiMiniWrenchScrewdriver size={24} />
              <div className="featureText">
                <span>Utilities</span>
                <p>Renter is responsible</p>
              </div>
            </div>
            <div className="feature">
              <MdOutlinePets size={24} />
              <div className="featureText">
                <span>Pet Policy</span>
                <p>Pets allowed</p>
              </div>
            </div>
            <div className="feature">
              <GiReceiveMoney size={24} strokeWidth={1} />
              <div className="featureText">
                <span>Property Fees</span>
                <p>Must have 3x the rent in total household income</p>
              </div>
            </div>
          </div>
          <p className="title">Sizes</p>
          <div className="sizeContainer">
            <div className="size">
              <IoResizeOutline size={24} strokeWidth={1} />
              <span>80 sqft</span>
            </div>
            <div className="size">
              <IoBedOutline size={24} strokeWidth={1} />
              <span>2 bedroom(s)</span>
            </div>
            <div className="size">
              <GiShower size={24} strokeWidth={1} />
              <span>1 bathroom(s)</span>
            </div>
          </div>

          <p className="title">Nearby Places</p>
          <div className="listHorizontal">
            <div className="feature">
              <FaRegBuilding size={24} strokeWidth={1} />
              <div className="featureText">
                <span>School</span>
                <p>250m away</p>
              </div>
            </div>
            <div className="feature">
              <FaBusSimple size={24} strokeWidth={1} />
              <div className="featureText">
                <span>Bus stop</span>
                <p>100m away</p>
              </div>
            </div>
            <div className="feature">
              <IoRestaurant size={24} strokeWidth={1} />
              <div className="featureText">
                <span>Restaurant</span>
                <p>200m away</p>
              </div>
            </div>
          </div>

          <p className="title">Location</p>
          <div className="mapContainer">
            <Map items={[singlePostData]} />
          </div>
          <div className="buttons">
            <button>
              <IoBookmarksOutline size={24} />
              Bookmark
            </button>
            <button>
              <IoChatboxOutline size={24} />
              Chat
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SinglePage;
