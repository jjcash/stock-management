import React from 'react'

// Select granite or marble type (RadioButton);Select whether it is a full sheet or a remnant;Spaces to enter length, width, thickness (NumField);Space to enter surface defects (TextField) => Include space to select by Radio Button whether or not there are surface defects, if so, enable the TextField. This will help with inventory filters;Generate a different code for each stone entry (Backend);Generate a QR code for each entry, showing all item information, showing location on the "map";Space to enter physical stock location (TextField?);

// Additional notes:
// The RadioButton for selecting granite or marble type should have options for all available types of granite and marble.
// The NumField for entering length, width, and thickness should be validated to ensure that the values are positive numbers.
// The TextField for entering surface defects should be disabled by default. If the user selects the "Yes" option for the RadioButton for surface defects, the TextField should be enabled.
// The backend should generate a unique code for each stone entry. This code should be used to identify the stone in the inventory system.
// The QR code should include all of the information about the stone, including the code, type of granite or marble, dimensions, surface defects, and physical stock location. The QR code should be displayed on the screen and printed out.
// The TextField for entering physical stock location is optional. If included, it should be validated to ensure that the value is a valid location in the inventory system.


function SlabEntry() {
  return (
    <div>
      <h1>Slab Entry Page</h1>
      <p>Registre uma nova chapa aqui.</p>
    </div>
  )
}

export default SlabEntry
