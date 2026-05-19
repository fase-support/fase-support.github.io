import { useState, useEffect, type ReactElement } from 'react'
import stfcLogo from './assets/stfcLogo.png'
import ICARUSLogo from './assets/ICARUSlogo.png'
import Footer from './Footer'
import Tile from './Tile'
import getAvailableDocs from './docLoader'
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
  const [category, setCategory] = useState("");
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
    console.log("handleTileClick with " + tileName)
    setCategory(tileName)

    // Find the matching docs with the Filter and then map to document objects to display
    const docs = docData.filter((doc) => doc.Category === tileName).map(
      (doc) => {
        // console.log("Going through data?")
        // console.log(doc)
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
        />
      )
    }
  )

  function handleDataLoaded(results: DocDataType[]) {
    console.log("Loaded doc data")
    // console.log(results)
    // console.log(results.data)
    setDocData(results)
  }

  // This is in a useEffect as only want to load it once on page load,
  // not on a re-render
  useEffect(() => {
    getAvailableDocs(handleDataLoaded)
  }, [])


  return (
    <>
      <section>
        <div className="hero">
          <img src={ ICARUSLogo } className="icarusLogo" alt="Icarus logo" />
          <img src={ stfcLogo } className="stfcLogo" alt="stfc logo" />
        </div>
        <div>
          <h1></h1>
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

    <section style={{ marginTop: "5em"}}>
        <Footer />
     </section>

    </>
  )
}

export default App
