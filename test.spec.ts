import { describe, it, expect } from 'vitest';
import { isSorted, reorganizeArray, hasDuplicates, reverseWords, averageEvens } from './test';


describe('isSorted', () => {
  it('devrait retourner true pour un tableau trié', () => {
    expect(isSorted([1, 2, 3])).toBe(true);
  });

  it('devrait retourner false pour un tableau non trié', () => {
    expect(isSorted([3, 2, 1])).toBe(false);
  });

  it('devrait retourner true pour un tableau vide', () => {
    expect(isSorted([])).toBe(true);
  });

  it('devrait retourner true pour un tableau avec un seul élément', () => {
    expect(isSorted([5])).toBe(true);
  });

  it('devrait retourner true pour un tableau avec des éléments égaux', () => {
    expect(isSorted([2, 2, 2])).toBe(true);
  });

  it('devrait retourner false si un seul élément est mal placé', () => {
    expect(isSorted([1, 3, 2, 4])).toBe(false);
  });
});

describe('reorganizeArray', () => {
  it('devrait réorganiser [3, 0, 2, 0, 1, 4] en [0, 0, 2, 4, 3, 1]', () => {
    expect(reorganizeArray([3, 0, 2, 0, 1, 4])).toEqual([0, 0, 2, 4, 3, 1]);
  });

  it('devrait réorganiser [5, 3, 0, 2, 8, 1, 0] en [0, 0, 2, 8, 5, 3, 1]', () => {
    expect(reorganizeArray([5, 3, 0, 2, 8, 1, 0])).toEqual([0, 0, 2, 8, 5, 3, 1]);
  });

  it('devrait retourner [0, 0, 0] pour un tableau de zéros', () => {
    expect(reorganizeArray([0, 0, 0])).toEqual([0, 0, 0]);
  });

  it('devrait gérer un tableau vide', () => {
    expect(reorganizeArray([])).toEqual([]);
  });

  it('devrait gérer un tableau avec seulement des pairs', () => {
    expect(reorganizeArray([4, 2, 6])).toEqual([2, 4, 6]);
  });

  it('devrait gérer un tableau avec seulement des impairs', () => {
    expect(reorganizeArray([5, 1, 3])).toEqual([5, 3, 1]);
  });
});

describe('hasDuplicates', () => {
  it('devrait retourner false pour un tableau sans doublons', () => {
    expect(hasDuplicates([1, 2, 3, 4])).toBe(false);
  });

  it('devrait retourner true pour un tableau avec doublons', () => {
    expect(hasDuplicates([1, 2, 2, 3])).toBe(true);
  });

  it('devrait retourner false pour un tableau vide', () => {
    expect(hasDuplicates([])).toBe(false);
  });

  it('devrait retourner false pour un tableau avec un seul élément', () => {
    expect(hasDuplicates([1])).toBe(false);
  });

  it('devrait retourner true pour un tableau avec tous les éléments identiques', () => {
    expect(hasDuplicates([5, 5, 5])).toBe(true);
  });
});

describe('reverseWords', () => {
  it('devrait inverser chaque mot de "Hello World"', () => {
    expect(reverseWords("Hello World")).toBe("olleH dlroW");
  });

  it('devrait inverser chaque mot de "TypeScript is fun"', () => {
    expect(reverseWords("TypeScript is fun")).toBe("tpircSepyT si nuf");
  });

  it('devrait gérer une chaîne vide', () => {
    expect(reverseWords("")).toBe("");
  });

  it('devrait gérer un seul mot', () => {
    expect(reverseWords("Bonjour")).toBe("ruojnoB");
  });

  it('devrait gérer un mot d\'une seule lettre', () => {
    expect(reverseWords("a b c")).toBe("a b c");
  });
});

describe('averageEvens', () => {
  it('devrait calculer la moyenne des pairs [1, 2, 3, 4] = 3', () => {
    expect(averageEvens([1, 2, 3, 4])).toBe(3);
  });

  it('devrait retourner 0 si aucun pair [1, 3, 5]', () => {
    expect(averageEvens([1, 3, 5])).toBe(0);
  });

  it('devrait calculer la moyenne [2, 4, 6, 8] = 5', () => {
    expect(averageEvens([2, 4, 6, 8])).toBe(5);
  });

  it('devrait retourner 0 pour un tableau vide', () => {
    expect(averageEvens([])).toBe(0);
  });

  it('devrait gérer un seul nombre pair', () => {
    expect(averageEvens([2])).toBe(2);
  });

  it('devrait ignorer les zéros comme pairs', () => {
    expect(averageEvens([0, 2, 4])).toBe(2);
  });
});
