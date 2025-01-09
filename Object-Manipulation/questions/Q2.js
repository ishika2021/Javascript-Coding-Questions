/**
 * Question2: Remove a card by it's ID
 * id: 24f4d714-90f1-463a-9179-4a646bb91048
 */

async function Q2({ lists }) {
  const removeCard = (cardID) => {
    const updatedList = lists.map((list) => {
        //some returns T as soon as it gets the first element that meets the condition
      const hasCard = list.cards.some(({ id }) => id === cardID); 
      if (hasCard) {
        const newCardList = list.cards.filter(({ id }) => id !== cardID);
        
        return {
          ...list,
          cards: newCardList,
        };
      }
      return list;
    });

    return updatedList;
  };

  const result = removeCard("24f4d714-90f1-463a-9179-4a646bb91048");
  console.dir(result, { depth: null, colors: true }); //shows expanded objects in the console.
}

module.exports = Q2;
