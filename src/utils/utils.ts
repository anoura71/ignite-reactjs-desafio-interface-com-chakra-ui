export function compare(
  a: Object,
  b: Object,
  attribute: string,
  order?: 'asc' | 'desc'
) {
  let sortingOrder = order;
  if (!order) {
    sortingOrder = 'asc';
  }

  if (a[attribute] < b[attribute]) {
    if (sortingOrder === 'asc') {
      return -1;
    }
    return 1;
  }
  if (a[attribute] < b[attribute]) {
    if (sortingOrder === 'asc') {
      return 1;
    }
    return -1;
  }
  return 0;
}

export function dynamicSort(property: string) {
  let sortOrder = 1;
  let attribute = property;

  if (property[0] === '-') {
    sortOrder = -1;
    attribute = property.substr(1);
  }

  return (a: Object, b: Object) => {
    let result: number;

    if (a[attribute] < b[attribute]) {
      result = -1;
    } else if (a[attribute] > b[attribute]) {
      result = 1;
    } else {
      result = 0;
    }

    return result * sortOrder;
  };
}

function swap(array: Object[], leftIndex: number, rightIndex: number) {
  const items = array;

  const temp = items[leftIndex];

  items[leftIndex] = items[rightIndex];
  items[rightIndex] = temp;
}

function partition(
  array: Object[],
  property: string,
  left: number,
  right: number
): number {
  const items = array;

  const pivot = items[Math.floor((right + left) / 2)]; // middle element

  let i = left; // left pointer
  let j = right; // right pointer

  while (i <= j) {
    while (items[i][property] < pivot[property]) {
      i += 1;
    }
    while (items[j][property] > pivot[property]) {
      j -= 1;
    }
    if (i <= j) {
      swap(items, i, j); // swapping two elements
      i += 1;
      j -= 1;
    }
  }
  return i;
}

export function quickSort(
  array: Object[],
  property: string,
  arrayLeft?: number,
  arrayRight?: number
) {
  const items = array;
  const left = arrayLeft || 0;
  const right = arrayRight || array.length - 1;

  let index: number;

  if (items.length > 1) {
    index = partition(items, property, left, right); // index returned from partition
    if (left < index - 1) {
      // more elements on the left side of the pivot
      quickSort(items, property, left, index - 1);
    }
    if (index < right) {
      // more elements on the right side of the pivot
      quickSort(items, property, index, right);
    }
  }
  return items;
}
