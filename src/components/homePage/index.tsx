"use client";
import Landingpage from './homePage';
import Highlights from './highlightsPage';
import Overview from './overview'

export default function Homepage() {
  return (
<div>
    <Landingpage/>
    <Overview/>
    <Highlights/>
</div>
  );
}