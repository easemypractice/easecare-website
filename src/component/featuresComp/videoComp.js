import React from "react";
import styles from "@/styles/Patient.module.css";
import { Heading } from "@radix-ui/themes";
import YouTube from "react-youtube";

const VideoComp = ({ data }) => {
  return (
    <>
      {data.length > 0 &&
        data?.map((item, index) => (
          <div className="container" key={index}>
            <div className="flex justify-center flex-col items-center">
              <Heading
                as="h2"
                className={`${styles.Heading} ${item?.maxWidth} ${item?.HeadingClass}`}
              >
                <span>{item.HeadingFirst}</span>{" "}
                <span className={styles.GradHead}>{item?.HeadingSec}</span>
              </Heading>
              <p className={`${styles.Para} ${item.paraClass}`}>{item?.para}</p>
              <YouTube
                videoId="0zN_Ku-Golo?si=3FAAcpUuZ56tjNSM"
                className="videoPlayerClass"
                iframeClassName="videoPlayerClass"
              />
            </div>
          </div>
        ))}
    </>
  );
};

export default VideoComp;

// class YouTubeVideo extends React.Component {
//   render() {
//     const opts = {
//       playerVars: {
//         autoplay: 1,
//       },
//     };

//     return (
//       <YouTube
//         videoId="0zN_Ku-Golo?si=3FAAcpUuZ56tjNSM"
//         opts={opts}
//         onReady={this._onReady}
//       />
//     );
//   }

//   _onReady(event) {
//     event.target.pauseVideo();
//   }
// }

function YouTubeVideo({ videoId, width, height }) {
  const onPlayerReady = (event) => {
    // access to player in all event handlers via event.target
    event.target.pauseVideo();
  };

  const opts = {
    height: "390",
    width: "640",
    playerVars: {
      // https://developers.google.com/youtube/player_parameters
      autoplay: 1,
    },
  };

  return <YouTube videoId={videoId} opts={opts} onReady={onPlayerReady} />;
}
