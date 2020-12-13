import React, { FC, useEffect, useState } from "react";
import { ScrollView, StyleSheet, Text, View } from "react-native";
import { StackNavigationProp } from "react-navigation-stack/lib/typescript/src/vendor/types";
import { SearchBar } from "../components/SearchBar";
import { useBusinesses } from "../hooks/useBusinesses";
import { BusinessList } from "../components/BusinessList";


interface SearchScreenProps {
  navigation: StackNavigationProp;
}

export const SearchScreen: FC<SearchScreenProps> = (props) => {
  const [ query, setQuery ] = useState<string>("");
  const [ searchApi, businesses, networkState ] = useBusinesses();

  const onQueryChange = (newQuery: string) => setQuery(newQuery);
  const onSubmit = () => searchApi(query);

  return (
    <>
      <ScrollView>
        <SearchBar
          query={query}
          onQueryChange={onQueryChange}
          onSubmit={onSubmit} />
        {
          networkState?.error &&
          <Text style={styles.error}>{ `Oops, Something went wrong... ${networkState.message}` }</Text>
        }
        <BusinessList businesses={filterByPrice(businesses, "$")} title="Cost Effective" />
        <BusinessList businesses={filterByPrice(businesses, "$$")} title="Bit Pricier" />
        <BusinessList businesses={filterByPrice(businesses, "$$$$")} title="Big Spender" />
      </ScrollView>
    </>
  )
}

const filterByPrice = (source: any[], price: "$" | "$$" | "$$$" | "$$$$") => {
  return source.filter(data => data.price === price);
}

const styles = StyleSheet.create({
  error: {
    color: "#ff0000"
  }
});