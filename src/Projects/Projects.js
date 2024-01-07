import React from "react";
import Gmeet from "../assets/googleExtenstion.png";
import Ella from "../assets/ella.png";
import ProjectCards from "./ProjectCards";
import SortingVisualizer from "../assets/sortingVisualizer.png";
import LightSaber from "../assets/lightSaber.png";
import MusicPlayer from "../assets/MusicPlayer.png";

function Projects() {
  let projects = [
    {
      title: "Google Meet Extension",
      description:
        "Automate the attendance taking and quick note taking during online Class.",
      src: Gmeet,
      github: "https://github.com/Nikblaze/Gmeet_extension",
    },
    {
      title: "The Health Chatbot",
      description:
        "Get details for nearby hospital covid beds status and a platform to get connected with NGOs/people who can help.",
      src: Ella,
      github: "https://github.com/Nikblaze/EC_interface",
    },
    {
      title: "Sorting Visualizer",
      description:
        "Visualize the most common sorting algorithms with variable speed and size of arrays.",
      src: SortingVisualizer,
      github: "https://nikblaze.github.io/Sorting_visualizer/",
    },
    {
      title: "Light Sabers",
      description:
        "Witness a customizable lightsaber gracefully ignite with your choice of hue.",
      src: LightSaber,
      github: "https://nikblaze.github.io/",
    },
    {
      title: "Music Player",
      description: "Music Player with all your favourite songs and artists.",
      src: MusicPlayer,
      github: "https://github.com/Nikblaze/music-player",
    },
  ];

  let projectCards = [];

  projects.forEach((element, i) => {
    projectCards.push(<ProjectCards key={i} element={element} />);
  });
  return (
    <div>
      <h1 className="experience-header">Projects</h1>
      <div className="project-container">{projectCards}</div>
    </div>
  );
}

export default Projects;
