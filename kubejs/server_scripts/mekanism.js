ServerEvents.recipes((event) => {
  event.custom({
    type: "mekanism:enriching",
    input: {
      ingredient: {
        item: "ae2:flawed_budding_quartz",
      },
    },
    output: {
      count: 1,
      item: "ae2:flawless_budding_quartz",
    },
  });
});
