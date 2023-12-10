import { View, Text, Image } from 'react-native';
import React from 'react';
import { icons } from '@/constants';

type CompanyProps = {
  companyLogo: string;
  jobTitle: string;
  companyName: string;
  location: string;
};

const Company = ({
  companyLogo,
  jobTitle,
  companyName,
  location,
}: CompanyProps) => {
  return (
    <View className="py-5">
      <View className="items-center justify-center">
        <Image
          source={{ uri: companyLogo }}
          width={200}
          height={140}
          resizeMode="contain"
          className="bg-slate-200 rounded-xl p-4 mb-5"
        />
      </View>
      <View>
        <Text className="text-center font-bold">{jobTitle}</Text>
      </View>
      <View className="flex-row justify-center my-2">
        <Text className="text-center text-gray-500 font-semibold">
          {companyName} /
        </Text>
        <View className="flex-row">
          <Image
            source={icons.location}
            resizeMode="contain"
            width={10}
            height={10}
            className="w-5 h-4 object-contain"
            tintColor={'#444'}
          />
          <Text className="text-gray-500">{location}</Text>
        </View>
      </View>
    </View>
  );
};

export default Company;
