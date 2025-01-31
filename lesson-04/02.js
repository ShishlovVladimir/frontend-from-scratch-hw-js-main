/*
Напишите функцию `findUniqueElements`, которая принимает массив и возвращает новый массив, содержащий только уникальные элементы из исходного массива.

**Входные данные:**

- **`array`**: Массив, который может содержать повторяющиеся элементы.

**Выходные данные:**

- Массив, содержащий только уникальные элементы из исходного массива.

**Пример использования:**
`findUniqueElements([1, 2, 3, 2, 1, 4])` вернёт `[1, 2, 3, 4]`.

Подсказка: можно использовать функцию `includesElement`, которую мы написали ранее. Переписывать её не нужно, она доступна по всему проекту за счёт hoisting.
*/

// function findUniqueElements(arr) {
//   return Array.from(new Set(arr));
// }

function includesElement(arr, element) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === element) {
      return true;
    }
  }
  return arr.includes(element);
}

function findUniqueElements(arr) {
  let result = [];
  for (let i = 0; i < arr.length; i++) {
    if (!includesElement(result, arr[i])) {
      result.push(arr[i]);
    }
  }
  return result;
}

console.log(findUniqueElements([1, 5, 7, 7, 8, 1, 2]));
