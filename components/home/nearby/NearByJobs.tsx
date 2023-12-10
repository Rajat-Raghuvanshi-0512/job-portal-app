import React from 'react';
import { useRouter } from 'expo-router';
import {
  View,
  Text,
  TouchableOpacity,
  FlatList,
  ActivityIndicator,
} from 'react-native';
import { COLORS, SIZES } from '@/constants';
import { useFetch } from '@/utils/hooks/useFetch';
import NearByJobCard from '@/components/common/cards/NearByJobCard';

const NearByJobs = () => {
  const router = useRouter();
  const { data, loading, error, refetch } = useFetch('search', {
    query: 'Data Science Engineer',
    num_pages: 1,
  });
  return (
    <View>
      <View className="flex flex-row justify-between items-center mb-3">
        <Text className="text-2xl font-medium my-5">Nearby Jobs</Text>
        <TouchableOpacity>
          <Text className="text-gray-400 font-semibold">Show all</Text>
        </TouchableOpacity>
      </View>
      <View>
        {loading ? (
          <ActivityIndicator size="large" color={COLORS.primary} />
        ) : (
          data?.map((job: { job_id: string }) => (
            <NearByJobCard
              key={job.job_id}
              job={job}
              handleNavigate={() =>
                router.push(`/job-details/${job.job_id}` as `http${string}`)
              }
            />
          ))
        )}
      </View>
    </View>
  );
};

export default NearByJobs;
