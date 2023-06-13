function configureListeners() {
    let images = document.getElementsByTagName('img');
    // select img elements  


    for (let i = 0; i < images.length; i++) {
        document.getElementById(images[i].id).addEventListener('mouseover', addOpacity, false)
        document.getElementById(images[i].id).addEventListener('mouseout', removeOpacity, false)
        // iterate over images and add mouseover event listeners      
    }
}

function addOpacity(event) {
    // add appropriate CSS class
    if (this.classList.contains('dim')) {
        this.classList.add('dim')
    }
    getProductInfo(event.target.id);
}

function removeOpacity(event) {
    //remove appropriate CSS class
    if (this.classList.contains('dim')) {
        this.classList.remove('dim')
    }

    let element = document.getElementById('color-price');
    element.textContent = '';

    let color = document.getElementById('color-name');
    color.textContent = '';

    event.preventDefault();
}

function getProductInfo(paintColor) {
    let price;
    let colorName;

    switch (paintColor) {
        case 'pn1':
            colorName = 'Lime Green'
            price = '$14.99'
            updatePrice(colorName, price)
            // set variables for price and color name and invoke a function to update the price     
            break;
        case 'pn2':
            colorName = 'Medium Brown'
            price = '$11.14'
            updatePrice(colorName, price)
            // set variables for price and color name and invoke a function to update the price    
            break;
        case 'pn3':
            colorName = 'Royal Blue'
            price = '$22.99'
            updatePrice(colorName, price)
            // set variables for price and color name and invoke a function to update the price  
            break;
        case 'pn4':
            colorName = 'Solid Red'
            price = '$13.42'
            updatePrice(colorName, price)
            // set variables for price and color name and invoke a function to update the price  
            break;
        case 'pn5':
            colorName = 'Solid White'
            price = '$21.98'
            updatePrice(colorName, price)
            // set variables for price and color name and invoke a function to update the price       
            break;
        case 'pn6':
            colorName = 'Solid Black'
            price = '$4.99'
            updatePrice(colorName, price)
            // set variables for price and color name and invoke a function to update the price        
            break;
        case 'pn7':
            colorName = 'Solid Cyan'
            price = '$14.99'
            updatePrice(colorName, price)
            // set variables for price and color name and invoke a function to update the price 
            break;
        case 'pn8':
            colorName = 'Solid Purple'
            price = '$11.99'
            updatePrice(colorName, price)
            // set variables for price and color name and invoke a function to update the price   
            break;
        case 'pn9':
            colorName = 'Solid Yellow'
            price = '$14.99'
            updatePrice(colorName, price)
            // set variables for price and color name and invoke a function to update the price 
            break;
        default:
    }

    function updatePrice(colorName, price) {
        let colorPrice = document.getElementById('color-price');
        colorPrice.textContent = price;
        // select element with corresponding id
        // display price

        let color = document.getElementById('color-name');
        color.textContent = colorName;
        // select element with corresponding id
        //display color name
    }

}


// Color       Price per Gallon
// Lime Green      $14.99
// Medium Brown    $11.14
// Royal Blue      $22.99
// Solid Black     $4.99
// Solid Cyan      $8.22
// Solid Purple    $11.99
// Solid Red       $13.42
// Solid White     $21.98
// Solid Yellow    $14.99

// Open the paint.js file located in the assets folder of the starter code repository.
// Follow the instructions in the comments of the paint.js file to complete the activity.
// Use the acceptance criteria located at the bottom of this activity as a checklist for your deliverables.
