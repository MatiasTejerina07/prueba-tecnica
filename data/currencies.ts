import { Currency } from "@/interfaces/Currency";

export const currenciesData: Currency[] = [
  {
    name: "Euro",
    fiat: "EUR",
    image: require("../assets/flags/flag_eur.png"),
    currencySymbol: "€",
    position: 'right',
  },
  {
    name: "Dólar Estadounidense",
    fiat: "USD",
    image: require("../assets/flags/flag_usd.png"),
    currencySymbol: "$",
    position: 'left',
  },
  {
    name: "Libra Esterlina",
    fiat: "GBP",
    image: require("../assets/flags/flag_eng.png"),
    currencySymbol: "£",
    position: 'right',
  },
];
