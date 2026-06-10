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
import SchedulerTile from './assets/SchedulerTile.png';
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
    { name: 'Scheduler', tile: SchedulerTile },
    { name: 'Risk Assessments', tile: RiskAssessmentsTile },
    { name: 'Safety Tests', tile: SafetyTestsTile },
    { name: 'ISIS Consumables', tile: ISISCosumablesTile },
    { name: 'Data Catalogue', tile: DataCatalogueTile },
    { name: 'Ada', tile: AdaTile },
    { name: 'Experiment Reports', tile: ExperimentReportsTile },
  ];

  function handleTileClick(tileName: string){
    console.log("handleTileClick with: " + tileName)

    // 2. Setting this triggers a re-render, which will update the highlights automatically
    setCategory(tileName)

    // Find the matching docs with the Filter and then map to document objects to display
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

  // 3. Updated the mapping logic to pass down the 'isSelected' prop
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
        <div style={{display: "flex", flexWrap: "wrap", justifyContent: "center", alignItems: "center"}}>
          { tiles }
        </div>
      </section>

      <section>
        <div style={{ display: (documents.length != 0 ? 'block' : 'none')}}>
          <h1>{ category }</h1>
          { documents.length != 0 ? documents : null }
        </div>
      </section>

    <section style={{ marginTop: "25em"}}>
        <Footer />
     </section>
    </>
  )
}

export default App