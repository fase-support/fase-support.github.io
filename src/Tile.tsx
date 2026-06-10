interface TileProps {
    text: string
    imagePath: string
    isSelected: boolean
    handleClicked: (text: string) => void
}

export default function Tile({text, imagePath, isSelected, handleClicked}: TileProps) {

    console.log("Creating Tile: " + text)

    return (
        <div className={`tileClicker ${isSelected ? 'selected' : ''}`} 
            onClick={() => handleClicked(text)} /* Anonymous function use to pass the argument back to the callback */
            >    
            <div style={{ textDecoration: 'none', color: '#007bff', fontWeight: 'bold' }} >
                {text} 
            </div>

            <img 
                src={imagePath} 
                style={{ width: "200px" }}
            />
        </div>
    )
}