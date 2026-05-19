
interface DocumentProps {
    docName: string
    fileName: string
    description: string
    category: string
}

export default function Document({ docName }: DocumentProps) {

    console.log("Creating Document: " + docName)

    return (
        <div>
            <a 
                href={`/data/${docName}`} 
                target="_blank" 
                rel="noopener noreferrer" 
                style={{ textDecoration: "none", color: "#007bff", fontWeight: "bold" }}
            >
                📄 { docName }
            </a>
        </div>
    )
}