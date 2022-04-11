import React from "react";
import { transform, motion } from "framer-motion";
import ReactPlayer from "react-player";

export default (scale = 1, pageCount = 5) => {
  const range = Array.from(Array(pageCount)).map((_, i) => i);
  const pages = React.useMemo(
    () =>
      range.map((i) => (
        <motion.div
          key={i}
          style={{
            height: 320 * scale,
            width: 200 * scale,
            borderRadius: 16,
            border: "8px solid rgba(255, 255, 255, .15)",
            backgroundColor: transform(
              i,
              [0, pageCount - 1],
              ["#fe0689", "#7704ff"]
            ),
          }}
          children={<ReactPlayer height={512} width={256} controls url={'https://videodelivery.net/dd847980982c499f885d6d305172cc60/manifest/video.m3u8'} />}
        />
      )),
    [scale, range, pageCount]
  );
  return pages;
}
