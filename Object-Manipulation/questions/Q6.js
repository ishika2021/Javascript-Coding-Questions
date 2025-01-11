/**
 * ### Question5: Write a function groupCardsByYear(listID) that:
 * 1- Accepts a listID as a parameter to identify the target list.
 * 2- Groups all cards in that list by their due year (extracted from the dueDate field).
 * 3- Returns an object where each key is a year, and the value is an array of cards due in that year.
 * 
 * @param {string} listID - The ID of the list to be sorted. Example: "61a82722-e8c7-46ff-8961-f5857be479aa".
 */

const Q6 = ({ lists }) => {
  const groupCardsByYear = (listID) => {
    if (!listID) {
      throw new Error("Invalid List ID!!");
    }
    const obj = {};
    lists.forEach((list) => {
      // use forEach when nothing is being return
      if (list.id === listID) {
        const cards = [...list.cards];

        cards.forEach((card) => {
          const year = new Date(card.date).getFullYear();
          // creates a new property if doesn't exist already else push into existing one.
          if (!obj.hasOwnProperty(year)) {
            //returns T if the obj has a specific property
            obj[year] = [card];
          } else {
            obj[year].push(card);
          }
        });
      }
    });
    return obj;
  };
  const result = groupCardsByYear("61a82722-e8c7-46ff-8961-f5857be479aa");
  console.log(result);
};

module.exports = Q6;
