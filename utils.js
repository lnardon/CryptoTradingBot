export const logOperation = (bought, sold) => {
  console.log(
    `OPERATION EXECUTED\n Bought at: ${bought}  Sold at: ${sold}  Profit Margin: ${
      sold / bought / 100
    }%`
  );
};
