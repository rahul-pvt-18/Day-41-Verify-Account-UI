// Selecting all elements with the class 'code' and storing them in the 'codes' variable as a NodeList
const codes = document.querySelectorAll('.code');

// Setting focus on the first input field when the page loads
codes[0].focus();

// Adding a keydown event listener to each input field with the class 'code'
codes.forEach((code,index) => {
    code.addEventListener('keydown',(e) => {
        // Checking if the pressed key is a number (0 to 9)
        if(e.key >= 0 && e.key <= 9){
            // Clearing the current input field value
            codes[index].value = '';
            
            // Using a setTimeout to move focus to the next input field after a small delay (10ms)
            // This gives a smooth user experience when entering digits
            setTimeout(() => codes[index+1].focus(), 10);

        } else if( e.key === 'Backspace') {
            // Handling the Backspace key press
            // Using a setTimeout to move focus to the previous input field after a small delay (10ms)
            // This allows the user to easily navigate back when correcting digits
            setTimeout(() => codes[index-1].focus(), 10);
        }
    });
});
