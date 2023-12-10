import { View, Text, TouchableOpacity, Image, Linking } from 'react-native';
import React from 'react';
import { icons } from '@/constants';

const Footer = ({ url }: { url: string }) => {
  return (
    <View className="flex-row w-full px-5 my-2">
      <TouchableOpacity className="border flex-[0.4] py-4 mr-4 rounded-xl items-center justify-center">
        <Image
          source={icons.heartOutline}
          resizeMode="contain"
          className="w-7 h-7"
        />
      </TouchableOpacity>

      <TouchableOpacity
        onPress={() => Linking.openURL(url)}
        className="bg-orange-500 rounded-2xl items-center justify-center flex-[1.6]"
      >
        <Text className="text-white text-xl font-bold">Apply for job</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Footer;
