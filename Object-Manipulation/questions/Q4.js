/**
 * Question4: Write a function to reorder a card within the same list.
 * For example, given the cardID and a new target position (index),
 * the card should be moved to that position in its current list.
 *
 * cardID: "81ed3421-1400-4620-9afa-f780f9ae188f",
 * targetPos: 1
 */

const Q4 = ({ lists }) => {
  const reorderCard = (cardID, targetPos) => {
    const updatedList = lists.map((list) => {
      const cardIdx = list.cards.findIndex(({ id }) => id === cardID);

      if (cardIdx > -1) {
        const card = list.cards[cardIdx];
        const updatedCards = [...list.cards]; //it's not a good practice to mutate original array

        updatedCards.splice(cardIdx, 1); //removes the card from it's original pos
        updatedCards.splice(targetPos, 0, card); //adds it to the target pos

        return {
          list,
          cards: updatedCards,
        };
      }

      return list;
    });

    return updatedList;
  };

  const result = reorderCard("81ed3421-1400-4620-9afa-f780f9ae188f", "1");
  console.dir(result, { depth: null });
};

module.exports = Q4;
