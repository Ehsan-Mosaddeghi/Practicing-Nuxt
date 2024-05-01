export const useMyTodoListStore = defineStore("submit", () => {
  const items = useState("items", () => [
    { id: 1, description: "Test", completed: false },
  ]);

  function addItem(description) {
    const newItem = {
      id: items.value.length + 1,
      description: description,
      completed: false,
    };
    items.value.push(newItem);
  }

  function checkCompletedItem(item) {
    const checkedItem = items.value.find((i) => i.id === item.id);
    checkedItem.completed = !checkedItem.completed;
  }

  function checkDeleteItem(item) {
    items.value = items.value.filter((i) => i.id !== item.id);
  }

  return { items, addItem, checkCompletedItem, checkDeleteItem };
});
