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

  return (a, b) => {
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
