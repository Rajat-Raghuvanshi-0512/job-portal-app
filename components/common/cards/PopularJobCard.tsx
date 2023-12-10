import { View, Text, TouchableOpacity, Image } from 'react-native';
import React from 'react';
import { useRouter } from 'expo-router';
import { DataType } from '@/utils/hooks/useFetch';

type PopularJobCardProps = {
  item: DataType;
};

const PopularJobCard = ({ item }: PopularJobCardProps) => {
  const router = useRouter();
  return (
    <TouchableOpacity
      className="bg-white rounded-lg w-[170px] p-3"
      onPress={() =>
        router.push(`/job-details/${item.job_id}` as `http${string}`)
      }
    >
      <TouchableOpacity>
        <Image
          source={{ uri: item.employer_logo }}
          resizeMode="contain"
          width={60}
          height={60}
          className="rounded-lg bg-gray-200"
        />
      </TouchableOpacity>
      <Text className="text-gray-600 mb-5 mt-2" numberOfLines={1}>
        {item.employer_name}
      </Text>
      <View>
        <Text className="font-semibold text-base" numberOfLines={2}>
          {item.job_title}
        </Text>
        <Text className="text-gray-600 py-1">{item.job_country}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default PopularJobCard;
