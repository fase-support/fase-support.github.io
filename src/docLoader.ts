import Papa from 'papaparse';

interface PapaResultsData {
  ID: string
  Title: string
  Filename: string
  Description: string
  Category: string
}


interface PapaResults {
  data: PapaResultsData[]
}

const csvFilePath = '/data/docIndex.csv'

export default function getAvailableDocs(handleResults: (res: PapaResultsData[]) => void) {

    Papa.parse(csvFilePath, {
      download: true,
      header: true,
      skipEmptyLines: true, 
      complete: (results: PapaResults) => handleResults(results.data),
      error: (error: string) => {
        console.error('Error parsing CSV:', error);
        throw new Error("Could not load data CSV so app won't work :(")
      }
    });

}
