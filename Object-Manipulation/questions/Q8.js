/**
 * ### Question8: Your task is to write a function getListSummary that generates a summary object for a given list.
 * The summary should include:
 * 1- The total number of cards and subCards.
 * 2- The total number of levels in the hierarchy (e.g., if there are subCards inside subCards, count the depth of nesting).
 * 3- A flat array of all card titles, including subCards.
 *
 * ### Output: The output should look like
 * {
 *   totalCards: 5, // Includes all cards and subCards
 *   maxDepth: 3,   // Top-level card + subCards + subSubCards
 *   allTitles: ["Card 1", "SubCard 1", "SubSubCard 1", "SubCard 2", "Card 2"],
 * }
 */

const Q8 = ({ lists }) => {
  const getDetails = (cards, obj, currentDepth) => {
    cards.forEach((card) => {
      obj.totalCards = obj.totalCards + 1;
      const title = card.title || card.name;
      obj.allTitles.push(title);

      if (card.subCards) {
        obj.maxDepth = Math.max(obj.maxDepth, currentDepth);
        getDetails(card.subCards, obj, currentDepth + 1);
      }
      
    });
  };
  const getListSummary = (listID) => {
    if (!listID) {
      throw new Error("Invalid Arguments!!");
    }

    const summary = {
      totalCards: 0,
      maxDepth: 0,
      allTitles: [],
    };

    const list = lists.find(({ id }) => id === listID);
    if (list) {
      getDetails(list.cards, summary, 1);
    }
    
    return summary;
  };

  const result = getListSummary("61a82722-e8c7-46ff-8961-f5857be479aa");
  console.log(result);
};

module.exports = Q8;
