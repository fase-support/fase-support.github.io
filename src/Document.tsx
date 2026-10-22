
interface DocumentProps {
    docName: string
    fileName: string
    description: string
    category: string
}

export default function Document({ docName, fileName, description }: DocumentProps) {

    console.log("Creating Document: " + docName)

    return (
        <div>
            <a 
                href={`/data/${fileName}`} 
                target="_blank"
                title={description}
                rel="noopener noreferrer" 
                style={{ textDecoration: "none", color: "#282675", fontWeight: "bolder" }}
            >
                📄 { docName }
            </a>
        </div>
    )
}