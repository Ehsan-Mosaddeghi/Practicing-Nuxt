<template>
  <div
    class="border border-gray-800 dark:border-gray-200 rounded-md flex justify-around items-center py-3"
  >
    <UButton
      icon="i-heroicons-trash"
      color="red"
      size="2xs"
      @click="deleteItem"
    />
    <li class="w-44 max-w-full flex justify-center">{{ item.description }}</li>
    <UCheckbox
      color="blue"
      label="Done"
      :model-value="doneCheck"
      @click="completedCheck"
    />
  </div>
</template>

<script setup>
const props = defineProps(["item"]);

const doneCheck = useState("doneCheck", () => false);

const todoListStore = useMyTodoListStore();

function completedCheck() {
  todoListStore.checkCompletedItem(props.item);
}

function deleteItem() {
  todoListStore.checkDeleteItem(props.item);
}
</script>
