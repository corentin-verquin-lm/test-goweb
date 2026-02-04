/**
 * Vérifie si un tableau de nombres est trié par ordre croissant.
 * Doit retourner true si le tableau est vide ou a un seul élément.
 * @argument {number[]} numbers Le tableau de nombres à vérifier.
 * @return {boolean} true si le tableau est trié, false sinon.
 * @example isSorted([1, 2, 3]) // true
 * @example isSorted([3, 2, 1]) // false
 * @example isSorted([]) // true
 * @example isSorted([5]) // true
 */
function isSorted(numbers: number[]): boolean {
  return numbers.every((num, i, arr) => i === 0 || num >= arr[i - 1]);  
}

/**
 * Réorganise un tableau selon ces règles :
 * 1. Tous les 0 au début.
 * 2. Ensuite les nombres pairs par ordre croissant.
 * 3. Enfin les nombres impairs par ordre décroissant.
 * @argument {number[]} numbers Le tableau de nombres à réorganiser.
 * @return  {number[]} Le tableau réorganisé.
 * @example reorganizeArray([3, 0, 2, 0, 1, 4]) // [0, 0, 2, 4, 3, 1]
 * @example reorganizeArray([5, 3, 0, 2, 8, 1, 0]) // [0, 0, 2, 8, 5, 3, 1]
 * @example reorganizeArray([0, 0, 0]) // [0, 0, 0]
 */
function reorganizeArray(numbers: number[]): number[] {
  const zeros = numbers.filter((n) => n === 0);
  const evens = numbers.filter((n) => n !== 0 && n % 2 === 0).sort((a, b) => a - b);
  const odds = numbers.filter((n) => n % 2 !== 0).sort((a, b) => b - a);
  return [...zeros, ...evens, ...odds];
}

/**
 * Retourne true si au moins une valeur apparaît deux fois dans le tableau,
 * et false si tous les éléments sont distincts.
 * @argument {number[]} numbers Le tableau de nombres à vérifier.
 * @return {boolean} true si des doublons existent, false sinon.
 * @example hasDuplicates([1, 2, 3, 4]) // false
 * @example hasDuplicates([1, 2, 2, 3]) // true
 * @example hasDuplicates([]) // false
 */
function hasDuplicates(numbers: number[]): boolean {
  const seen = new Set<number>();
  for (const num of numbers) {
    if (seen.has(num)) {
      return true;
    }
    seen.add(num);
  }
  return false;
}

/**
 * Inverse chaque mot d'une phrase mais garde l'ordre des mots inchangé.
 * Exemple : "Hello World" -> "olleH dlroW"
 * @argument {string} sentence La phrase à traiter.
 * @return {string} La phrase avec chaque mot inversé.
 * @example reverseWords("Hello World") // "olleH dlroW"
 * @example reverseWords("TypeScript is fun") // "tpircSepyT si nuf"
 */
function reverseWords(sentence: string): string {
  return sentence
    .split(" ")
    .map((word) => word.split("").reverse().join(""))
    .join(" ");
}

/**
 * Calcule la moyenne des nombres pairs uniquement.
 * Retourne 0 si aucun nombre pair n'est présent.
 * @argument {number[]} numbers Le tableau de nombres à traiter.
 * @return {number} La moyenne des nombres pairs, ou 0 s'il n'y en a pas.
 * @example averageEvens([1, 2, 3, 4]) // 3
 * @example averageEvens([1, 3, 5]) // 0
 * @example averageEvens([2, 4, 6, 8]) // 5
 * @example averageEvens([]) // 0
 */
function averageEvens(numbers: number[]): number {
  const evens = numbers.filter((n) => n % 2 === 0);
  if (evens.length === 0) {
    return 0;
  }
  const sum = evens.reduce((acc, n) => acc + n, 0);
  return sum / evens.length;
}

export { isSorted, reorganizeArray, hasDuplicates, reverseWords, averageEvens };