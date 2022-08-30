/*
 * Pwoered by: https://stackoverflow.com/questions/2450954/how-to-randomize-shuffle-a-javascript-array
 */

// 无线端使用有点问题
function shuffle(array) {
  var result = [], source = array.concat([]);

  while (source.length) {
    let index = Math.floor(Math.random() * source.length);
    result.push(source.splice(index, 1)[0]);
  }

  return result;
}

export default shuffle;