import { Text, Image, View, TextInput, ScrollView } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import React, { useEffect, useLayoutEffect, useState } from "react";
import { useNavigation } from "@react-navigation/native";
import {
  UserIcon,
  ChevronDownIcon,
  MagnifyingGlassIcon,
  AdjustmentsHorizontalIcon,
} from "react-native-heroicons/outline";
import Categories from "../components/Categories";
import FeaturedRow from "../components/FeaturedRow";
import sanityClient from "../sanity";

const HomeScreen = () => {
  const navigation = useNavigation();
  const [featuredCategories, setFeaturedCategories] = useState([]);

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);

  useEffect(() => {
    const getFeaturedCategories = async () => {
      const data = await sanityClient.fetch(`
    *[_type == "featured"] {
      ...,
      restaurants[] -> {
        ...,
        dishes[] ->,
        category -> {
          name
        }
      },
    }
    `);
      setFeaturedCategories(data);
    };

    getFeaturedCategories();
  }, []);

  return (
    <SafeAreaView className="bg-white pt-5 flex-1">
      <View className="relative flex-1">
        {/* Header */}
        <View className="flex-row pb-3 items-center mx-4 space-x-2">
          <Image
            source={{
              uri: "https://links.papareact.com/wru",
            }}
            className="h-7 w-7 bg-gray-300 p-4 rounded-full"
          />

          <View className="flex-1">
            <Text className="font-bold text-gray-400 text-xs">
              Deliver Now!
            </Text>
            <Text className="font-bold text-xl">
              Current Location
              <ChevronDownIcon size={20} color="#00CCBB" />
            </Text>
          </View>

          <UserIcon size={35} color="#00CCBB" />
        </View>

        {/* Search */}
        <View className="flex-row items-center space-x-2 pb-2 mx-4">
          <View className="flex-row flex-1 space-x-2 bg-gray-200 p-3 items-center">
            <MagnifyingGlassIcon color="gray" size={20} />
            <TextInput
              placeholder="Restaurants and cuisines"
              keyboardType="default"
              className="h-5"
            />
          </View>

          <AdjustmentsHorizontalIcon color="#00CCBB" />
        </View>

        {/* Body */}
        <ScrollView
          className="bg-gray-100 h-full"
          contentContainerStyle={{
            paddingBottom: 144,
            flexGrow: 1,
          }}
        >
          {/* Categories */}
          <Categories />

          {/* Featured Rows */}
          {featuredCategories?.map((category) => (
            <FeaturedRow
              key={category._id}
              id={category._id}
              title={category.name}
              description={category.shortDescription}
            />
          ))}
        </ScrollView>
      </View>
    </SafeAreaView>
  );
};

export default HomeScreen;
