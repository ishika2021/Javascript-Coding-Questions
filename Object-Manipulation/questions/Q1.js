/**
 * Question1: Add a new card to the first list of lists array with following details,
 * 
 * {
 * id: new-card-id,
 * name: New card,
 * date: "Mon Jul 27 2015 05:07:50 GMT+0530 (India Standard Time)",
 * jobTitle: New Job Title,
 * desc: "New Description"
 * }
 */
async function Q1({lists}) {
const addCard =()=> {
    const obj = {
      id: "new-card-id",
      name: "New Card",
      date: "Wed Jan 10 2025 10:00:00 GMT+0530 (India Standard Time)",
      jobTitle: "New Job Title",
      desc: "New Description",
    };
    
    const updatedList = lists.map((list, idx) => {
      if (idx === 0) {
        
        return {
          ...list,
          cards: [...list.cards, obj],
        };
      }
      return list;
    });
      
    return updatedList;
  }
  
const result = addCard();
console.dir(result, { depth: null, colors: true }); //shows expanded objects in the console.
}

module.exports = Q1;
