import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
//import App from './App.jsx'
import CountdownLightSwitch from './Componets/CountdownLightSwitch.jsx'




createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <App /> */}
  <Countdown>
   
  <body>
  <div class="container">
     <div class="header">
      <h1>Countdown & Light Switch</h1>
      <div class="toggle-container">
        <label class="toggle-switch">
          <input type="checkbox" id="themeToggle" />
          <span class="slider"></span>
        </label>
        <span>Light Mode</span>
      </div>
    </div>

    <div class="timer-section">
      <div class="progress-bar">
        <div class="progress" id="progress"></div>
      </div>
      <div class="timer" id="timerDisplay">30s</div>
      <div class="btn-group">
        <button id="startButton">Start Timer</button>
        <button id="resetButton" style="display: none;">Reset Timer</button>
      </div>
      <div class="message" id="messageArea"></div>
    </div>
  </div>  
</body>

 </Countdown> 
   
   
      
    
    
  </StrictMode>
)
