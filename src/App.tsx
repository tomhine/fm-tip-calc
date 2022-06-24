import type { Component } from "solid-js";

const App: Component = () => {
  return (
    <div class="mx-auto w-full max-w-5xl space-y-9 lg:space-y-22">
      <header class="flex items-center justify-center">
        <h1 class="text-lg uppercase tracking-[0.6em] text-secondary-heading">
          spli
          <br />
          tter
        </h1>
      </header>
      <main class="grid w-full rounded-[2rem] bg-white p-7 lg:grid-cols-2">
        <div class="p-4">
          <div class="flex flex-col gap-2">
            <label for="bill">Bill</label>
            <div class="flex items-center justify-between rounded-lg bg-secondary-inputbg px-4 py-1.5">
              <div></div>
              <input
                type="number"
                min={0.0}
                class="w-min appearance-none bg-transparent text-2xl outline-none placeholder:text-right"
                style="-moz-appearance: textfield"
                placeholder="0.00"
              />
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default App;
