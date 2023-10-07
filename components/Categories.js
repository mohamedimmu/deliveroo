import { ScrollView, Text, View } from "react-native";
import React, { useEffect, useState } from "react";
import CategoryCard from "./CategoryCard";
import sanityClient, { urlFor } from "../sanity";

const Categories = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    const getCategories = async () => {
      const categoriesData = await sanityClient.fetch(`
      *[_type == "category"]  {
        name,
          image
       }`)

       setCategories(categoriesData);
    }

    getCategories();
  }, []);

  return (
    <ScrollView
      contentContainerStyle={{ paddingHorizontal: 15, paddingTop: 10 }}
      horizontal
      showsHorizontalScrollIndicator={false}
    >
      {/* Category Card */}
      {
        categories?.map((category) => (
          <CategoryCard key={category.name} imgUrl={urlFor(category.image).url()} title={category.name} />
        ))
      }
    </ScrollView>
  );
};

export default Categories;
