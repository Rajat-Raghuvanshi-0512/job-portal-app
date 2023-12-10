import { View, Text } from 'react-native';
import React from 'react';

const About = ({ info }: { info: string }) => {
  return (
    <View className="p-5">
      <Text className="my-2">About the job:</Text>
      <View>
        <Text className="text-gray-700 text-base">{info}</Text>
      </View>
    </View>
  );
};

export default About;
