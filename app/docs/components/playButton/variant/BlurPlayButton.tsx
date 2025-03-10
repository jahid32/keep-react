"use client";
import { Play } from "phosphor-react";
import { PlayButton } from "~/src";

const BlurPlayButton = () => {
  return (
    <div className="h-20 p-5 flex items-center justify-start">
      <PlayButton
        title="Play Video"
        type="blur"
        circle={true}
        size="2xl"
        icon={<Play size="24" />}
        className="bg-black/40 backdrop-blur-sm"
      />
    </div>
  );
};

const BlurPlayButtonCode = `
"use client";
import { PlayButton } from "keep-react";
import { Play } from "phosphor-react";

export const PlayButtonComponent = () => {
  return (
     <PlayButton
      title="Play Video"
      type="blur"
      circle={true}
      size="2xl"
      icon={<Play size="24" />}
      className="bg-black/40 backdrop-blur-sm"
    />
  );
}
`;

export { BlurPlayButton, BlurPlayButtonCode };
