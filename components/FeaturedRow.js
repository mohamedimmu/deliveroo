import { View, Text, ScrollView } from "react-native";
import React, { useEffect, useState } from "react";
import { ArrowRightIcon } from "react-native-heroicons/outline";
import RestaurantCard from "./RestaurantCard";
import sanityClient from "../sanity";

const FeaturedRow = ({ id, title, description }) => {
  const [restaurants, setRestaurants] = useState([]);

  useEffect(() => {
    const getFeaturedResturants = async () => {
      const restaurantsData = await sanityClient.fetch(
        `
        *[_type == "featured" && _id == $id ] {
          restaurants[] -> {
            ...,
            dishes[] ->,
            category -> {
              name
            }
          },
        }[0]
      `,
        { id }
      );

      setRestaurants(restaurantsData?.restaurants);
    };

    getFeaturedResturants();
  }, [id]);

  return (
    <View>
      <View className="flex-row mt-4 items-center justify-between mx-4">
        <Text className="font-bold text-lg">{title}</Text>
        <ArrowRightIcon color="#00CCBB" />
      </View>

      <Text className="text-xs text-gray-500 px-4">{description}</Text>

      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{
          paddingHorizontal: 15,
        }}
        className="pt-4"
      >
        {restaurants?.map((restaurant) => (
          <RestaurantCard
            key={restaurant._id}
            id={restaurant._id}
            imgUrl={restaurant.image}
            title={restaurant.title}
            rating={restaurant.rating}
            genre={restaurant.category.name}
            address={restaurant.address}
            shortDescription={restaurant.shortDescription}
            dishes={restaurant.dishes}
            lat={restaurant.lat}
            long={restaurant.lon}
          />
        ))}
      </ScrollView>
    </View>
  );
};

export default FeaturedRow;
