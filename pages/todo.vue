<template>
  <section class="flex flex-col items-center justify-center gap-20 pt-32">
    <header class="flex flex-col items-center">
      <h1 class="text-xl sm:text-2xl md:text-3xl">A Todo List</h1>
      <h2 class="text-base sm:text-xl md:text-2xl">
        That you can schedule your day here!
      </h2>
    </header>

    <form
      @submit.prevent="showInput"
      class="flex justify-center items-center gap-6 w-full max-w-xl"
    >
      <UFormGroup class="md:w-60" :error="!validation">
        <UInput
          placeholder="Whatever you wanna do"
          icon="i-heroicons-pencil-solid"
          v-model.trim="todoInput"
        />
      </UFormGroup>
      <UButton
        class="text-black"
        type="submit"
        icon="i-heroicons-pencil-square"
        size="xs"
        square
      />
    </form>

    <div class="w-full max-w-xl mb-8">
      <ul class="flex flex-col gap-4">
        <TodoItems v-for="item in items" :key="item.id" :item="item" />
      </ul>
    </div>
  </section>
</template>

<script setup>
const todoInput = useState("todo", () => null);
const validation = useState("validation", () => true);

const { items } = storeToRefs(useMyTodoListStore());
const todoListStore = useMyTodoListStore();

function showInput() {
  if (todoInput.value === null) {
    validation.value = false;
  } else if (todoInput.value.length >= 1) {
    validation.value = true;
    todoListStore.addItem(todoInput.value);
    todoInput.value = null;
  }
}
</script>
