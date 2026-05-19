interface TileProps {
    text: string
    imagePath: string
    handleClicked: (text: string) => void
}

export default function Tile({text, imagePath, handleClicked}: TileProps) {

    // console.log("Tile with " + props.text)

    return (
        <div onClick={() => handleClicked(text)} /* Anonymous function use to pass the argument back to the callback */>    
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