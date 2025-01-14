/**
 * ### Question7: Write a function flattenCards(listID) that:
 * 1- Accepts a listID as a parameter.
 * 2- Flattens all the cards and sub-cards for the given listID into a single array.
 * 3- The final output should contain all cards and sub-cards, but with no nesting.
 * 4- Each sub-card should have a parentID that identifies the card from which the sub-card originates.
 *
 * @param {string} listID - The ID of the list to be sorted. Example: "61a82722-e8c7-46ff-8961-f5857be479aa".
 */

const Q7 = ({ lists }) => {
  // a recursive function to get cards and subCards
  const getFlattenCards = (cards, flattenArray, parent) => {
    if (!cards.length) {
      return []; //base condition
    }

    cards.forEach((card) => {
      const newCard = { ...card, parentID: parent }; //add parent id to the current card

      if (card.subCards) {
        const { subCards, ...obj } = newCard; //removes the subCards property
        flattenArray.push(obj);
        getFlattenCards(card.subCards, flattenArray, obj.id); //recalls the method to flatten the subCards
      } else {
        flattenArray.push(newCard);
      }
    });
  };
  const flattenCards = (listID) => {
    if (!listID) {
      throw new Error("list id");
    }

    let flattenArray = [];
    lists.forEach((list) => {
      if (list.id === listID) {
        getFlattenCards(list.cards, flattenArray, null);
      }
    });

    return flattenArray;
  };

  const result = flattenCards("61a82722-e8c7-46ff-8961-f5857be479aa");
  console.log(result);
};

module.exports = Q7;
