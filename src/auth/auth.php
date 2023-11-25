<?php
$spaceXApiUrl = 'https://api.spacexdata.com/v3/capsules';

// Fetch data from SpaceX API
$spaceXData = file_get_contents($spaceXApiUrl);

// Output data
echo $spaceXData;

?>