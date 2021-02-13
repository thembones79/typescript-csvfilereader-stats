// import { MatchReader } from "./MatchReader";
import { MatchReader } from "./MatchReader";
import { CsvFileReader } from "./CsvFileReader";
import { HtmlReport } from "./reportTargets/HtmlReport";
import { WinsAnalysis } from "./analyzers/WinsAnalysis";
import { Summary } from "./Summary";

//const csvFileReader = new CsvFileReader("original.csv");
//const matchReader = new MatchReader(csvFileReader);
const matchReader = MatchReader.fromCsv("original.csv");
matchReader.load();

// console.log(matchReader.matches);

// const summary = new Summary(new WinsAnalysis("Man United"), new HtmlReport());
const summary = Summary.winsAnalysisWithHtmlReport("Man United");

summary.buildAndPrintReport(matchReader.matches);
