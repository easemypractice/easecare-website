import React from "react";
import IphoneImg from "@/images/iPhoneImgApp.svg";
import call from "@/images/easeCareCall.svg";
import googlePlay from "@/images/googlePlay.svg";
import appleStore from "@/images/appstore.svg";
import Image from "next/image";
const DownloadApp = () => {
  return (
    <div className="container">
      <div className="flex downloadEaseCare relative">
        <div className="relative">
          <Image src={IphoneImg} width={205} height={305} />
          <Image
            src={call}
            width={205}
            height={305}
            className="easeCareBackGround"
          />
        </div>
        <div className="flex-col gap-20">
          <h3>Download the EaseCare-Clarity App</h3>
          <p>
            Effortless online Appointment, fully personalized
            <br /> sessions ensuring you receive top-notch care and
            <br /> convenience at every step.
          </p>
          <div className="flex downloadLink gap-20">
            <Image src={googlePlay} />
            <Image src={appleStore} />
          </div>
        </div>
        <div className="bgDownload"></div>
      </div>
    </div>
  );
};

export default DownloadApp;
