import Button from '@mui/material/Button';
import { Home } from '@mui/icons-material';

function Credits() {
    return (
        <div className="credits">
            <h1>Image credits</h1>
            <br />
            <h2>Triangle</h2>
            <svg width="100" height="100" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
                <polygon points="50,10 100,90 0,90" fill="white" stroke="black" strokeWidth="2" />
            </svg>
            <p>The triangle image is made with Gemini.</p>
            <svg width="100" height="100" xmlns="http://www.w3.org/2000/svg">
                <circle r="45" cx="50" cy="50" fill="white" />
            </svg>
            <h2>Circle</h2>
            <p>The circle image is taken from W3Schools in a doc about circle component in the SVG.</p>
            <svg width="100" height="100" xmlns="http://www.w3.org/2000/svg">
                <rect width="100" height="100" x="10" y="10" rx="20" ry="20" fill="white" />
            </svg>
            <h2>Square</h2>
            <p>The square image is taken from W3Schools but edited for the width for 100 and the height for 100 (This is not a square...)</p>
            <h2>Parallelogram</h2>
            <svg width="100px" height="100px" viewBox="0 0 48 48" fill="white" xmlns="http://www.w3.org/2000/svg">
                <path d="M41.2796 8H15.4704C14.5956 8 13.8223 8.5685 13.5614 9.40345L4.81142 37.4035C4.40897 38.6913 5.3711 40 6.72038 40H32.5296C33.4044 40 34.1777 39.4315 34.4386 38.5965L43.1886 10.5965C43.591 9.30869 42.6289 8 41.2796 8Z" stroke="black" stroke-width="4" />
            </svg>
            <p>The parallelogram image is by IconPark but I found it in SVGViewer.</p>
            <Button variant="contained" href="/" startIcon={<Home/>}>Back to the mainpage</Button>
        </div>
    )
}

export default Credits;