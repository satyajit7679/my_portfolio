// src/data/projectsData.js
import Whatapp_chat_analyser from "../assets/Whatapp_chat_analyser.png"
import Movie_Recommendation_System from "../assets/Movie_Recommendation_System.png"
// import todo from "../assets/todo.png"
// import social from "../assets/socialmedia.png"
// import texttospeech from "../assets/texttospeech.png"
// import password from "../assets/password manager.png"
// import currency from "../assets/currency converter.png"
// import decorease from "../assets/decorease.png"

const projectsData = [
  {
    id: 1,
    title: "WhatsApp Chat Analyzer",
    desc: "Smart WhatsApp Chat Analysis Tool.",
    tech: ["Python", "Numpy", "Pandas", "Streamlit"],
    image: Whatapp_chat_analyser,
    github: "https://github.com/satyajit7679/WP_chat_analysis",
    live: "https://fast-wpchatanalysis.streamlit.app/"
  },
  {
    id: 2,
    title: " Movie Recommendation System",
    desc: "Recomende 5 Movies Based on Your Choice.",
    tech: ["Python", "Numpy", "Pandas", "Streamlit"],
    image: Movie_Recommendation_System,
    github: "https://github.com/satyajit7679/movie_recomendation",
    live: "https://mymovierecomendation.streamlit.app/"
  }
];

export default projectsData;
