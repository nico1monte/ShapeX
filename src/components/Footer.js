function PageFooter() {
    const diamondSuit = "♦"
    return (
        <div className="Footer" style={{ backgroundColor: 'gray', position: 'absolute', top: '700px', textAlign: 'center', width: '1550px', height: '50px' }}>
            <footer>
                <p><a href="/credits">Site credits</a> {diamondSuit} <a href="/imgcredits">Image credits</a> {diamondSuit} <a href="https://github.com/nico1monte/ShapeX">GitHub</a></p>
            </footer>
        </div>
    )
}

export default PageFooter;