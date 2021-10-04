import React from 'react';
import "./DownloadButton.css";

// import Select from 'react-select'

/* const song = [
    { value: 'select', label: 'Select a format:' },
    { value: 'a', label: 'MP3 320 kbps 9.07 MB' },
    { value: 'b', label: 'MP3 256 kbps 7.26 MB' },
    { value: 'c', label: 'MP3 192 kbps 5.44 MB' },
    { value: 'd', label: 'MP3 128 kbps 3.63 MB' },
    { value: 'e', label: 'MP3 64 kbps 1.81 MB' }
]

const film = [
    { value: 'select', label: 'Select a format:' },
    { value: 'a', label: 'MP4 1080p 35.67 MB' },
    { value: 'b', label: 'MP4 1080p 29.37 MB' },
    { value: 'c', label: 'MP4 1080p 28.86 MB' },
    { value: 'd', label: 'MP4 720p 19.16 MB' },
    { value: 'e', label: 'MP4 720p 7.91 MB' },
    { value: 'f', label: 'MP4 480p 12.79 MB' },
    { value: 'g', label: 'MP4 480p 5.25 MB' },
    { value: 'h', label: 'MP4 360p 8.27 MB' }
] */


export function updateInputValue(e) {
    this.setState({
        inputValue: e.target.value,
        showError: false
    });
}
export function startDownload() {
    let id = this.state.inputValue;
    if (id === null) {
        console.log("true");
        this.setState({
            showError: true
        });
    } else {
        this.props.startDownload(id);
        console.log("false");
    }
}


export function DownloadButton({ id, type }) {
    return (

        <div className="Download">
            <h2>Download {type === "mp3" ? "music" : "video"} </h2>
            {/* <Select className="Dropdown" options={type === "mp3" ? song : film} placeholder="Select a format: "></Select> */}
            <iframe
                className="button-api-frame"
                src={`https://api.vevioz.com/@api/button/${type}/${id}`}
                width="80%"
                height="40%"
                allowtransparency="true"
                scrolling="yes"
                style={{ border: "1px solid black", fontSize: "30px" }}
            />
            <button className="link__button" onClick={startDownload}>
                Convert to {type}
            </button>
        </div >

    )
}

