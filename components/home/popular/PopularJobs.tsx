import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  FlatList,
  ActivityIndicator,
} from 'react-native';
import { COLORS, SIZES } from '@/constants';
import PopularJobCard from '@/components/common/cards/PopularJobCard';
import { useFetch } from '@/utils/hooks/useFetch';

const PopularJobs = () => {
  const { data, loading, error, refetch } = useFetch('search', {
    query: 'React Developer',
    num_pages: 1,
  });
  return (
    <View>
      <View className="flex flex-row justify-between items-center mb-3">
        <Text className="text-2xl font-medium">Popular Jobs</Text>
        <TouchableOpacity>
          <Text className="text-gray-400 font-semibold">Show all</Text>
        </TouchableOpacity>
      </View>
      <View>
        {loading ? (
          <ActivityIndicator size="large" color={COLORS.primary} />
        ) : (
          <FlatList
            data={data}
            renderItem={({ item }) => <PopularJobCard item={item} />}
            keyExtractor={(item) => item.job_id}
            contentContainerStyle={{ columnGap: SIZES.medium }}
            horizontal
            showsHorizontalScrollIndicator={false}
          />
        )}
      </View>
    </View>
  );
};

export default PopularJobs;
