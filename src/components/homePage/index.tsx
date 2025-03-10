"use client";
import Landingpage from './homePage';
import Highlights from './highlightsPage';
import Overview from './overview'
import HotelInfo from './hotelInfoPage';
import Facilities from './facilities';
import LocationDirection from './LocationDirection';
import PalacesCarousel from './PalacesCarousel';

export default function Homepage() {
  return (
<div>
    <Landingpage/>
    <Overview/>
    <Highlights/>
    <HotelInfo/>
    <Facilities/>
    <LocationDirection/>
    <PalacesCarousel/>

</div>
  );
}