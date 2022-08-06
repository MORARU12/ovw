import videoSource from "../assets/icons/vpreview.mp4";

const AppVideo = () => {
  return (
    <video controls={false} autoPlay loop>
      <source src={videoSource} type="video/mp4" />
    </video>
  );
};

export default AppVideo;
