import './App.css';
import { Button, ButtonGroup, Tooltip } from '@mui/material';
import * as React from 'react';
import DownloadIcon from '@mui/icons-material/Download';
import FolderZipIcon from '@mui/icons-material/FolderZip';
import CategoryIcon from '@mui/icons-material/Category';
import PageFooter from './components/Footer';

function App() {
  // Colors
  const [selectedColor, setSelectedColor] = React.useState("")

  // Shapes

  const triangle = "▲"
  const circle = "●"
  const square = "■"
  const rotatedsquare = "▰"
  const [selectedShapeCode, setSelectedShapeCode] = React.useState(null)
  const [selectedShapeName, setSelectedShapeName] = React.useState("")

  // Logs with information

  console.log("--- color", selectedColor)
  console.log("--- shape_code", selectedShapeCode)
  console.log("--- shape", selectedShapeName)

  return (
    selectedShapeCode !== null ? (
      <div className="App">
        <h1>ShapeX</h1>
        <div className="colors">
          <h2>Select the color</h2>
          <ButtonGroup>
            <Tooltip title="Red">
              <Button sx={{ backgroundColor: 'red' }} onClick={() => { setSelectedColor("red") }}> </Button>
            </Tooltip>
            <Tooltip title="Orange">
              <Button sx={{ backgroundColor: 'orange' }} onClick={() => { setSelectedColor("orange") }}> </Button>
            </Tooltip>
            <Tooltip title="Yellow">
              <Button sx={{ backgroundColor: 'yellow' }} onClick={() => { setSelectedColor("yellow") }}> </Button>
            </Tooltip>
            <Tooltip title="Dark green">
              <Button sx={{ backgroundColor: 'green' }} onClick={() => { setSelectedColor("green") }}> </Button>
            </Tooltip>
            <Tooltip title="Lime">
              <Button sx={{ backgroundColor: 'lime' }} onClick={() => { setSelectedColor("lime") }}> </Button>
            </Tooltip>
            <Tooltip title="Light blue">
              <Button sx={{ backgroundColor: 'lightblue' }} onClick={() => { setSelectedColor("lightblue") }}> </Button>
            </Tooltip>
            <Tooltip title="Blue">
              <Button sx={{ backgroundColor: 'blue' }} onClick={() => { setSelectedColor("blue") }}> </Button>
            </Tooltip>
            <Tooltip title="Purple">
              <Button sx={{ backgroundColor: 'purple' }} onClick={() => { setSelectedColor("purple") }}> </Button>
            </Tooltip>
          </ButtonGroup>
        </div>
        <div className="shapes">
          <h2>Select the shape</h2>
          <ButtonGroup variant="contained" color="success">
            <Tooltip title="Triangle">
              <Button onClick={() => {
                setSelectedShapeCode(<svg width="100" height="100" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
                  <polygon points="50,10 100,90 0,90" fill={selectedColor} stroke="black" strokeWidth="2" />
                </svg>);
                setSelectedShapeName("triangle");
              }}>{triangle}</Button>
            </Tooltip>
            <Tooltip title="Circle">
              <Button onClick={() => {
                setSelectedShapeCode(<svg width="100" height="100" xmlns="http://www.w3.org/2000/svg">
                  <circle r="45" cx="50" cy="50" fill={selectedColor} />
                </svg>); setSelectedShapeName("circle")
              }}>{circle}</Button>
            </Tooltip>
            <Tooltip title="Square">
              <Button onClick={() => {
                setSelectedShapeCode(<svg width="100" height="100" xmlns="http://www.w3.org/2000/svg">
                  <rect width="100" height="100" x="10" y="10" rx="20" ry="20" fill={selectedColor} />
                </svg>); setSelectedShapeName("square")
              }}>{square}</Button>
            </Tooltip>
            <Tooltip title="Parallelogram">
              <Button onClick={() => {
                setSelectedShapeCode(<svg width="100px" height="100px" viewBox="0 0 48 48" fill={selectedColor} xmlns="http://www.w3.org/2000/svg">
                  <path d="M41.2796 8H15.4704C14.5956 8 13.8223 8.5685 13.5614 9.40345L4.81142 37.4035C4.40897 38.6913 5.3711 40 6.72038 40H32.5296C33.4044 40 34.1777 39.4315 34.4386 38.5965L43.1886 10.5965C43.591 9.30869 42.6289 8 41.2796 8Z" stroke="black" stroke-width="4" />
                </svg>); setSelectedShapeName("rotatedsquare")
              }}>{rotatedsquare}</Button>
            </Tooltip>
          </ButtonGroup>
        </div>
        <div className="result">
          <h2>Result</h2>
          <div className="result_object">{selectedShapeCode}</div>
          <br />
          <Button color="success" startIcon={<DownloadIcon />} onClick={() => { window.open(`/download_shapes/${selectedColor}/${selectedColor}${selectedShapeName}.zip`) }} variant="contained" endIcon={<FolderZipIcon />}>Download as SVG in a ZIP</Button>
          <Button color="success" startIcon={<CategoryIcon/>} endIcon={<FolderZipIcon/>} onClick={()=>{window.open("/download_shapes/ShapeWithColors.zip")}} variant="contained">Download all shapes with colors in a ZIP</Button>
          <PageFooter></PageFooter>
        </div>
      </div>
    ) : (
      <div className="AppWithoutShape">
        <h1>ShapeX</h1>
        <div className="colors">
          <h2>Select the color</h2>
          <ButtonGroup>
            <Tooltip title="Red">
              <Button sx={{ backgroundColor: 'red' }} onClick={() => { setSelectedColor("red") }}> </Button>
            </Tooltip>
            <Tooltip title="Orange">
              <Button sx={{ backgroundColor: 'orange' }} onClick={() => { setSelectedColor("orange") }}> </Button>
            </Tooltip>
            <Tooltip title="Yellow">
              <Button sx={{ backgroundColor: 'yellow' }} onClick={() => { setSelectedColor("yellow") }}> </Button>
            </Tooltip>
            <Tooltip title="Dark green">
              <Button sx={{ backgroundColor: 'green' }} onClick={() => { setSelectedColor("green") }}> </Button>
            </Tooltip>
            <Tooltip title="Lime">
              <Button sx={{ backgroundColor: 'lime' }} onClick={() => { setSelectedColor("lime") }}> </Button>
            </Tooltip>
            <Tooltip title="Light blue">
              <Button sx={{ backgroundColor: 'lightblue' }} onClick={() => { setSelectedColor("lightblue") }}> </Button>
            </Tooltip>
            <Tooltip title="Blue">
              <Button sx={{ backgroundColor: 'blue' }} onClick={() => { setSelectedColor("blue") }}> </Button>
            </Tooltip>
            <Tooltip title="Purple">
              <Button sx={{ backgroundColor: 'purple' }} onClick={() => { setSelectedColor("purple") }}> </Button>
            </Tooltip>
          </ButtonGroup>
        </div>
        <div className="shapes">
          <h2>Select the shape</h2>
          <ButtonGroup variant="contained" color="success">
            <Tooltip title="Triangle">
              <Button onClick={() => {
                setSelectedShapeCode(<svg width="100" height="100" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
                  <polygon points="50,10 100,90 0,90" fill={selectedColor} stroke="black" strokeWidth="2" />
                </svg>);
                setSelectedShapeName("triangle");
              }}>{triangle}</Button>
            </Tooltip>
            <Tooltip title="Circle">
              <Button onClick={() => {
                setSelectedShapeCode(<svg width="100" height="100" xmlns="http://www.w3.org/2000/svg">
                  <circle r="45" cx="50" cy="50" fill={selectedColor} />
                </svg>); setSelectedShapeName("circle")
              }}>{circle}</Button>
            </Tooltip>
            <Tooltip title="Square">
              <Button onClick={() => {
                setSelectedShapeCode(<svg width="100" height="100" xmlns="http://www.w3.org/2000/svg">
                  <rect width="100" height="100" x="10" y="10" rx="20" ry="20" fill={selectedColor} />
                </svg>); setSelectedShapeName("square")
              }}>{square}</Button>
            </Tooltip>
            <Tooltip title="Parallelogram">
              <Button onClick={() => {
                setSelectedShapeCode(<svg width="100px" height="100px" viewBox="0 0 48 48" fill={selectedColor} xmlns="http://www.w3.org/2000/svg">
                  <path d="M41.2796 8H15.4704C14.5956 8 13.8223 8.5685 13.5614 9.40345L4.81142 37.4035C4.40897 38.6913 5.3711 40 6.72038 40H32.5296C33.4044 40 34.1777 39.4315 34.4386 38.5965L43.1886 10.5965C43.591 9.30869 42.6289 8 41.2796 8Z" stroke="black" stroke-width="4" />
                </svg>); setSelectedShapeName("rotatedsquare")
              }}>{rotatedsquare}</Button>
            </Tooltip>
          </ButtonGroup>
        </div>
        <div className="result">
          <h2>Result</h2>
          <p>Select a shape first.</p>
          <PageFooter></PageFooter>
        </div>
      </div>
    )
  );
}

export default App;
