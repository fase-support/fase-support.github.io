import { useState, useEffect, type ReactElement } from 'react'
import stfcLogo from './assets/stfcLogo.png'
import ICARUSLogo from './assets/ICARUSlogo.png'
import Footer from './Footer.tsx'
import Tile from './Tile.tsx'
import getAvailableDocs from './docLoader.ts'
import Document from './Document'

import ISISProposalsTile from './assets/ISISProposalsTile.png';
import CLFProposalsTile from './assets/CLFProposalsTile.png';
import AdaTile from './assets/AdaTile.png';
import DataCatalogueTile from './assets/DataCatalogueTile.png';
import ExperimentReportsTile from './assets/ExperimentReportsTile.png';
import ISISCosumablesTile from './assets/ISISCosumablesTile.png';
import RiskAssessmentsTile from './assets/RiskAssessmentsTile.png';
import SafetyTestsTile from './assets/SafetyTestsTile.png';
import VisitsTile from './assets/VisitsTile.png';

interface DocDataType {
  ID: string
  Title: string
  Filename: string
  Description: string
  Category: string
}

function App() {
  const [docData, setDocData] = useState<DocDataType[]>([]);
  const [category, setCategory] = useState(""); // 1. This state already tracks the selected name!
  const [documents, setDocuments] = useState<ReactElement[]>([])

  const faseApps = [
    { name: 'ISIS Proposals', tile: ISISProposalsTile },
    { name: 'CLF Proposals', tile: CLFProposalsTile },
    { name: 'Visits', tile: VisitsTile },
    { name: 'Risk Assessments', tile: RiskAssessmentsTile },
    { name: 'Safety Tests', tile: SafetyTestsTile },
    { name: 'ISIS Consumables', tile: ISISCosumablesTile },
    { name: 'Data Catalogue', tile: DataCatalogueTile },
    { name: 'Ada', tile: AdaTile },
    { name: 'Experiment Reports', tile: ExperimentReportsTile },
  ];

  const noArticle = "No documentation yet";

  function handleTileClick(tileName: string){
    console.log("handleTileClick with: " + tileName)

    setCategory(tileName)

    const docs = docData.filter((doc) => doc.Category === tileName).map(
      (doc) => {
        console.log("Create training docs based on category " + tileName)
        console.log(doc)
        return (
          <Document
            key={doc.ID}
            docName={doc.Title}
            fileName={doc.Filename}
            description={doc.Description}
            category={doc.Category}
          />
        )
      }
    )
    
    setDocuments(docs)
  }

  const tiles = faseApps.map(
    (app) => {
      return (
        <Tile
          key={app.name}
          handleClicked={handleTileClick}
          text={app.name}
          imagePath={app.tile}
          isSelected={category === app.name} // Returns true if this tile matches the active state
        />
      )
    }
  )

  function handleDataLoaded(results: DocDataType[]) {
    console.log("handleDataLoaded with: ")
    console.log(results)
    setDocData(results)
  }

  useEffect(() => {
    console.log("Intial data load")
    getAvailableDocs(handleDataLoaded)
  }, [])

  return (
    <>
      <section>
        <div className="hero">
          <img src={ stfcLogo } className="stfcLogo" alt="stfc logo" />
          <img src={ ICARUSLogo } className="icarusLogo" alt="Icarus logo" />
        </div>
        <div>
          <h1></h1>
          <p className='news'>
            This site is currently under development.
          </p>
          <p>
            Please choose an app to view support documentation
          </p>
        </div>
      </section>

      <section >
        <div style={{display: "flex", flexWrap: "wrap", justifyContent: "center", alignItems: "center", gap: "20px"}}>
          { tiles }
        </div>
      </section>

      <section>
        {category && category.trim() !== "" && (
          <div style={{ marginTop: "50px" }}>
            <h1>{documents.length === 0 ? noArticle : category}</h1>
            {documents.length !== 0 ? documents : null}
          </div>
        )}
      </section>

    <section style={{ marginTop: "20em"}}>
        <Footer />
     </section>
    </>
  )
}

export default App