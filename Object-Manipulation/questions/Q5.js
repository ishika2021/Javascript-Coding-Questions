/**
 * ### Question5: Write a function called sortCardsInList that:
 * 1- Takes the listID and the sortBy attribute (date and availablePositions ) as parameters.
 * 2- Sorts the cards within the specified list by the given attribute in ascending order.
 * 3- If an invalid listID or sortBy attribute is provided, return an error message.
 * 4- Handle invalid or missing listID and sortBy inputs.
 */

/**
 * Using Array.sort() to sort the cards
 *
 * ### Description:
 * - Sorts the array in place.
 * - Sorting is done based on the comparison function provided.
 * - Has time complexity similar to heap and quick sort.
 *
 * ## Time and Space Complexity:
 * - Average TC: O(n log n)
 * - Average SC: O(log n)
 * 
 * @param {string} listID - The ID of the list to be sorted. Example: "61a82722-e8c7-46ff-8961-f5857be479aa".
 * @param {"date" | "availablePositions"} sortBy - The property to sort by. Allowed values: "date" or "availablePositions".
 */

const Q5 = ({ lists }) => {
  const sortCards = (listID, sortBy) => {
    if (!listID || !sortBy) {
      throw new Error("Invalid Arguments!!");
    }

    const updatedList = lists.map((list) => {
      if (list.id === listID) {
        const updatedCards = [...list.cards];
        
        if (sortBy === "date") {
          updatedCards.sort((a, b) => {
            return new Date(a.date) - new Date(b.date);
          });
        } else if (sortBy === "availablePositions") {
          updatedCards.sort((a, b) => a.availablePositions - b.availablePositions);
        }
        
        return{
            ...list,
            cards: updatedCards
        }
      }
      return list;
    });
    
    return updatedList;
  };
  
  const result = sortCards("61a82722-e8c7-46ff-8961-f5857be479aa","date")
  console.log(result)
};

module.exports = Q5;
