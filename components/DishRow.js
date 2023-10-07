import { View, Text, TouchableOpacity, Image } from "react-native";
import React, { useCallback, useState } from "react";
import { urlFor } from "../sanity";
import { MinusCircleIcon, PlusCircleIcon } from "react-native-heroicons/solid";
import { useDispatch, useSelector } from "react-redux";
import {
  addToBasket,
  removeFromBasket,
  selectBasketItemsWithId,
} from "../redux/slices/basketSlice";

const DishRow = ({ id, name, description, price, image }) => {
  const formatedPrice = new Intl.NumberFormat("en-IN", {
    style: "currency",
    currency: "INR",
    minimumFractionDigits: 0,
  }).format(price);

  const dispatch = useDispatch();
  const [isPressed, setIsPressed] = useState(false);
  const items = useSelector(state => selectBasketItemsWithId(state, id));

  const addItemtoBasket = () => {
    const product = { id, name, description, price, image };
    dispatch(addToBasket(product));
  };

  const removeItemFromBasket = useCallback(() => {
    if (items.length === 0) return;
    dispatch(removeFromBasket(id));
  }, [items]);

  return (
    <>
      <TouchableOpacity
        onPress={() => {
          setIsPressed((prev) => !prev);
        }}
        className={`bg-white border p-4 border-gray-200 ${
          isPressed ? "border-b-0" : ""
        }`}
      >
        <View className=" flex-row">
          <View className="flex-1 pr-2">
            <Text className="text-lg mb-1">{name}</Text>
            <Text className="text-gray-400">{description}</Text>
            <Text className="text-gray-400 mt-2">{formatedPrice}</Text>
          </View>

          <View>
            <Image
              source={{ uri: urlFor(image).url() }}
              className="h-20 w-20 bg-gray-300 p-4"
              style={{
                borderWidth: 1,
                borderColor: "#F3F3F4",
              }}
            />
          </View>
        </View>
      </TouchableOpacity>
      {isPressed && (
        <View className="bg-white px-4">
          <View className="flex-row items-center space-x-2 pb-3">
            <TouchableOpacity onPress={removeItemFromBasket} disabled={items.length === 0}>
              <MinusCircleIcon
                color="#00CCBB"
                size={40}
                opacity={items.length === 0 ? "0.3" : "1"}
              />
            </TouchableOpacity>

            <Text>{items.length}</Text>

            <TouchableOpacity onPress={addItemtoBasket}>
              <PlusCircleIcon color="#00CCBB" size={40} />
            </TouchableOpacity>
          </View>
        </View>
      )}
    </>
  );
};

export default DishRow;
