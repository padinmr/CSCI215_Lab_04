



// -----------------------------------

// Global Variables Go Here







// -----------------------------------

// Convert Function Goes Here







// -----------------------------------

// Calculate Function Goes Here





// -----------------------------------

// Functions that are given

// Do not modify



function updateImage( index ) { 

    

    var url = 'url(' + I[index] + ')';

    document.getElementById('bill_img').style.backgroundImage=url;

    

}



function updateExchange( dollar, exchangeRate, currency, index ) {

    

    document.getElementsByName("exchange")[0].value = calculate( dollar, exchangeRate ).toPrecision(4) + ' ' + currency;

    

    updateImage( index );

    

}







