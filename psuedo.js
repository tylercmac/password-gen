// User will click generate password
    //Click will prompt user to input different criteria for generation
//first propmpt will ask for character length
    // input needs to be at least 8, max 128 char
        // if character less than 8, prompt user to be more
        // if character more than 128, prompt user to be less
        // is user enters invalid value, return with prompt again
    // input takes user number, creates length variable to store number of that length
// then second prompt will ask for character type
    //prompts if user wants lowercase in password
        //if user accepts lower case, length varible will multiply by random lowercase letter generator
            // stored in unique variable.
            // adds one to division variable
        // if user cancels, moves to next prompt
    //prompts if user wants uppercase in password
        //if user accepts upper case, length varible will multiply by random upper case letter generator, and 
            // stored in unique variable
            // adds one to division variable
        // if user cancels, moves to next prompt
    //prompts if user wants numerals in password 
        //if user accepts numeric, length varible will multiply by random number generator
            //stored in unique variable.
            // adds one to division variable
        // if user cancels, moves to next prompt
    //prompts if user wants special char in password 
        //if user accepts numeric, length varible will multiply by random character generator
            //stored in unique variable.
            // adds one to division variable
        // if user cancels and did not accept any char type, prompt user to accept one type and return to initial type prompt
        // if user cancels and/or accepted at least one prompt, return div move on to calculate password
    // calculate password
        //create empty array for storing password
        // takes initial character length, divides by division variable, stores in new divider varible
        // all unique variables will be divided by divider variable with mathfloor to reach appropriate lengths
        // each unique variable will be split apart and moved into empty password array
        // once all varibables have been passed into empty password array
            // password array will randomize elements in array
            // function will join elements into a string
            //function will return value
    // password is displayed on page
        