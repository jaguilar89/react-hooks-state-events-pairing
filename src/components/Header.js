import React from "react";

function Header({ viewCount, uploadDate }) {
    return (
        <header>
            <h1>React Today and Tomorrow and 90% Cleaner React With Hooks</h1>
            <p>{viewCount} Views | Uploaded {uploadDate}</p>
        </header>
    )
}

export default Header;