// Returns a randomly selected item from the array of items
export function choice(items) {
  const randomIndex = Math.floor(Math.random() * items.length);
  return items[randomIndex];
}

// Removes the first matching item from items, if it exists, and returns it. Otherwise, returns undefined.
export function remove(items, item) {
  const index = items.indexOf(item);
  if (index !== -1) {
    return items.splice(index, 1)[0];
  }
  return undefined;
}
