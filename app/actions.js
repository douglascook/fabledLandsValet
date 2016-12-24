export function push(route) {
  return {
    type: 'push',
    route,
  };
}

export function pop() {
  return {
    type: 'pop',
  };
}

export function addItem(item) {
  return {
    type: 'addItem',
    item,
  };
}

export function removeItem(key) {
  return {
    type: 'removeItem',
    key,
  };
}
