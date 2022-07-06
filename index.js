/**
 * Author: Tony Gonzalez
 * Creation Date: July 5, 2022
 * This script is a code challenge for procom.
 * It sorts an array of objects and does a few validations around.  
 */

/**
 * Hey There! can you guys give direction here please :)
 * What format should i use to set the date in every item?
 * If There aren't active items in the array, should we set the date anyway?
 */
 const personsArray = require('./data'); 

 const activeRecords=personsArray.filter(itemPerson=> itemPerson.Status === 'Active')
 
 if(activeRecords.length === 0){
  console.warn('\n There arent active records >> \n');
 }

  //we iterate the array even if there are no active records and set current date
  //lets iterate the array
  personsArray.forEach(itemPerson=>{
    itemPerson.date=new Date().toISOString();
    if(itemPerson.Status === 'Active')
    {
      const { Name, date } = itemPerson;
      console.log({
        Name,
        date,
        ['Favorite Food'] : itemPerson['Favorite Food']
      })
  }
  });