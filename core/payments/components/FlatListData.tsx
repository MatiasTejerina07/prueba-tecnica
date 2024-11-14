import { Image } from "expo-image";
import Icon from "@expo/vector-icons/MaterialIcons";
import { View, Text, StyleSheet, FlatList, Pressable } from "react-native";
import { Currency } from "@/interfaces/Currency";
import { currenciesData } from "@/data/currencies";
import { useRouter } from "expo-router";
import { Colors } from "@/constants/Colors";
import { useDispatch } from "react-redux";
import { selectCountry, updateFiatCurrency } from "@/store/reducers/payment";
import usePayment from "../hooks/usePayment";
import { CheckIcon } from "@/assets/icons/Icons";
import { Country } from "@/interfaces/Country";
import { useGlobalSearchParams } from "expo-router";
import { countriesData } from "@/data/countries";

export default function FlatListData() {
  const router = useRouter();
  const { currency, country } = usePayment();
  const dispatch = useDispatch();
  const { renderList } = useGlobalSearchParams();

  const handlePressSelectCurrency = (currency: Currency) => {
    dispatch(updateFiatCurrency(currency));
    router.replace({
      pathname: "/",
    });
  };

  const handlePressSelectCountry = (country: Country) => {
    dispatch(selectCountry(country));
    router.replace({
      pathname: "/application_payment",
    });
  };

  const currencyList = ({ item }: { item: Currency }) => (
    <Pressable
      onPress={() => handlePressSelectCurrency(item)}
      style={({ pressed }) => [
        {
          opacity: pressed ? 0.7 : 1,
          backgroundColor: pressed ? "#D1E3F2" : "#FFFFFF",
          borderRadius: pressed ? 6 : 0,
        },
        styles.item,
      ]}
    >
      <Image style={styles.imageFlag} source={item.image} />
      <View style={styles.textContainer}>
        <Text style={styles.nameFiat}>{item.name}</Text>
        <Text style={styles.fiat}>{item.fiat}</Text>
      </View>
      {currency.fiat === item.fiat ? (
        <CheckIcon />
      ) : (
        <Icon name="arrow-forward-ios" size={16} color={"#647184"} />
      )}
    </Pressable>
  );

  const countriesList = ({ item }: { item: Country }) => (
    <Pressable
      onPress={() => handlePressSelectCountry(item)}
      style={({ pressed }) => [
        {
          opacity: pressed ? 0.7 : 1,
          backgroundColor: pressed ? "#D1E3F2" : "#FFFFFF",
          borderRadius: pressed ? 6 : 0,
        },
        styles.item,
      ]}
    >
      <Image style={styles.imageFlag} source={item.flag} />
      <View style={styles.textContainer}>
        <Text style={styles.nameFiat}>{item.countryCode}</Text>
        <Text style={styles.fiat}>{item.name}</Text>
      </View>
      {country.name === item.name ? (
        <CheckIcon />
      ) : (
        <Icon name="arrow-forward-ios" size={16} color={"#647184"} />
      )}
    </Pressable>
  );

  return (
    <View>
      {renderList === "countries" ? (
        <FlatList
          data={countriesData}
          renderItem={countriesList}
          keyExtractor={(item) => item.name}
        />
      ) : (
        <FlatList
          data={currenciesData}
          renderItem={currencyList}
          keyExtractor={(item) => item.fiat}
        />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  item: {
    display: "flex",
    flexDirection: "row",
    width: 339,
    height: 52,
    alignItems: "center",
    paddingHorizontal: 8,
    justifyContent: "space-between",
    gap: 12,
  },
  name: {
    fontSize: 16,
    fontWeight: "bold",
  },
  textContainer: {
    flex: 1,
    flexDirection: "column",
    alignItems: "flex-start",
  },
  nameFiat: {
    fontFamily: "Mulish_700Bold",
    fontSize: 14,
    color: Colors.textPrimary,
  },
  fiat: {
    fontFamily: "Mulish_400Regular",
    fontSize: 12,
    color: Colors.textGray,
  },
  imageFlag: {
    width: 32,
    height: 32,
  },
});
