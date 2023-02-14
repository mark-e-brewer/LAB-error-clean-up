import htmlStructure from '../components/htmlStructure';
import header from '../components/header';
import startSortingBtn from '../components/startSortingBtn';
import events from './sample_data/data';

const startApp = () => {
  htmlStructure(); // always load first
  header();
  startSortingBtn();
  events(); // always load last
};

export default startApp;
