import { useState } from 'react'
import styles from './StudentDashboard.module.css'

// ==== Component Imports ==== //
import Instructions from './components/Instructions';
import LearningObjectives from './components/LearningObjectives';
import VideoTutorial from './components/VideoTutorial';

export default function StudentDashboard() {
  const [displayedContent, setDisplayedContent] = useState({component: <LearningObjectives />});


  function handleContentClick(e) {
    // console.log("Button Clicked")
    console.log(e.target.id);

    // if (e.target.id === "instructions") {
    //   //display instructions
    //   setDisplayedContent({component :<Instructions />})
    // } else if (e.target.id === "video-tutorial") {
    //   // display video-tutorial
    //   setDisplayedContent({component: <VideoTutorial />})
    // } else {
    //   // display learning objectives
    //   setDisplayedContent({component: <LearningObjectives />})
    // }

    // Switch method --------------------------
        switch(e.target.id) {
            case "instructions":
                setDisplayedContent({name: "instructions", component: <Instructions />});
                break;
            case "video-tutorial":
                setDisplayedContent({name: "video-tutorial", component: <VideoTutorial />});
                break;
            case "learning-objectives":
                setDisplayedContent({name: "learning-objectives", component: <LearningObjectives />});
                break;
            default:
                setDisplayedContent({name: "learning-objectives", component: <LearningObjectives />});
        }
  }

  return (
    <div>
    <h2>Student Dashboard</h2>

    <nav style={{backgroundColor: 'deepskyblue', borderRadius: '5px', margin: '20px'}}>
     {/* ==== Sidebar Buttons ==== */}
      <button onClick={handleContentClick} id="learning-objectives" 
        className={`${styles.btn} ${displayedContent.name === 'learning-objectives' ? styles.active : ""}`}>
        Learning Objective
        </button>

      <button onClick={handleContentClick} id="instructions"
        className={`${styles.btn} ${displayedContent.name === 'instructions' ? styles.active : ""}`}>
        Instructions
        </button>

      <button onClick={handleContentClick} id="video-tutorial"
        className={`${styles.btn} ${displayedContent.name === 'video-tutorial' ? styles.active : ""}`}>
        Video Tutorial
        </button>

    </nav>

    {/* ==== Conditionally render the component ==== */}
    <div style={{backgroundColor: "skyblue", color: "black", borderRadius: "10px", height: "10vh"}}>
    {displayedContent.component}
    </div>

    </div>
  )
}
