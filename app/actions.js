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
