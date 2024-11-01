import React from "react";
import spotify from "../../assets/spotify.png";
import slack from "../../assets/slack.png";
import adobe from "../../assets/adobe.png";
import asana from "../../assets/asana.png";
import linear from "../../assets/linear.png";

const Mainpage = () => {
    return (
        <div className="w-full bg-gray-800 py-8">
        <div className="flex justify-around items-center max-w-[90%] mx-auto space-x-8">
          <img src={spotify} alt="Spotify" className="h-[40px]" />
          <img src={slack} alt="Slack" className="h-[40px]" />
          <img src={adobe} alt="Adobe" className="h-[40px]" />
          <img src={asana} alt="Asana" className="h-[40px]" />
          <img src={linear} alt="Linear" className="h-[40px]" />
        </div>
      </div>
    );
}

export default Mainpage;