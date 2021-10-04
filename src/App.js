import React, { useState, useEffect } from 'react';
import './App.css';
import { DownloadButton } from './DownloadButton';
import DownloadButtonDefault from './DownloadButtonDefault';
import DownloadButtonInvalid from './DownloadButtonInvalid';

function App() {
  const [videoUrl, setVideoUrl] = useState("");
  const [id, setId] = useState("");

  useEffect(() => {
    const id = videoUrl.replace("https://youtu.be/", "")
    setId(id);
  }, [videoUrl])

  return (
    <div className="App">
      <div className="Navbar">
        <h1>YouTube Converter</h1>
      </div>
      <div className="Linkbox">
        <form onSubmit={(e) => e.preventDefault()}>
          <input
            onChange={e => setVideoUrl(e.target.value)}
            value={videoUrl}
            type="text"
            placeholder="Paste YouTube URL here" />
        </form>
      </div>
      <div className="DownloadButton">

        {videoUrl === "" ? (<DownloadButtonDefault />
        ) : (
          <div>
            {videoUrl.startsWith("https://youtu.be/") ? (<div>
              <DownloadButton id={id} type="mp3" />
              <DownloadButton id={id} type="mp4" /></div>
            ) : (
              <DownloadButtonInvalid />
            )}
          </div>
        )}


      </div>

    </div>
  );
}
<footer>
  © Mathoolika Vasigaran
</footer>
export default App;
