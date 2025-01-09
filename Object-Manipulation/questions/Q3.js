/**
 * Question: Problem: Move a card from one list to another.
 * cardID: "498a65cd-1d1d-43d0-b3ba-0db1b30d788c",
 * targetListID: "814c95ec-478c-40f6-935a-7a12f7ce406f"
 */


async function Q3({ lists }) {
  const moveCard = (cardID, targetListID) => {
    let card = null; //stores the card obj
    let cardListIdx; //stores the index of parent list of card

    const updatedList = lists.map((list, idx) => {
      const cardIdx = list.cards.findIndex(({ id }) => id === cardID);
      if (cardIdx > -1) {
        //if card exists on the current list

        card = list.cards[cardIdx];
        cardListIdx = idx;

        const updatedCards = [
          //remove the card from current list
          ...list.cards.slice(0, cardIdx),
          ...list.cards.slice(cardIdx + 1), //filter can also be used here
        ];

        return {
          ...list,
          cards: updatedCards,
        };
      }

      //   if the current list is the targetList
      if (list.id === targetListID && card) {
        const updatedCards = [...list.cards, card];
        card = null; //to prevent re checking of lists

        return {
          ...list,
          cards: updatedCards,
        };
      }

      return list;
    });

    /** 
     * for cases when the targetList lies above the sourceList(parent of card), 
     * the loop only runs till one list before the parent list 
     * because had the card been after that, it would have been updated in the map only. 
    **/
    if (card) {
      for (let i = 0; i < cardListIdx; i++) {
        const list = updatedList[i];
        if (list.id === targetListID) {
          list.cards = [...list.cards, card];
        }
      }
    }
    return updatedList;
  };

  const result = moveCard(
    "498a65cd-1d1d-43d0-b3ba-0db1b30d788c",
    "814c95ec-478c-40f6-935a-7a12f7ce406f"
  );
  console.log(result);

  //uncomment to see expanded objects in the console.
  // console.dir(result, { depth: null, colors: true });
}

module.exports = Q3;
