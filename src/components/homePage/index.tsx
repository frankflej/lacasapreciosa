"use client";
import Landingpage from './homePage';
import Highlights from './highlightsPage';
import Overview from './overview'
import HotelInfo from './hotelInfoPage';

export default function Homepage() {
  return (
<div>
    <Landingpage/>
    <Overview/>
    <Highlights/>
    <HotelInfo/>
</div>
  );
}