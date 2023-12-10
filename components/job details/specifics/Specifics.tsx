import { View, Text } from 'react-native';
import React from 'react';

type SpecificsProps = {
  title: string;
  points: string[];
};

const Specifics = ({ title, points }: SpecificsProps) => {
  return (
    <View className="p-5">
      <Text className="my-2">{title}:</Text>
      <View>
        {points.map((point, idx) => (
          <View key={point + idx} className="my-2 flex-row">
            <View className="w-2 h-2 bg-gray-500 rounded-full mr-2 mt-1"></View>
            <Text className="text-gray-600">{point}</Text>
          </View>
        ))}
      </View>
    </View>
  );
};

export default Specifics;
