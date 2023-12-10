import React, { useEffect, useState } from 'react';
import {
  ActivityIndicator,
  FlatList,
  Image,
  TouchableOpacity,
  View,
} from 'react-native';
import { Stack, useRouter, useLocalSearchParams } from 'expo-router';
import { Text, SafeAreaView } from 'react-native';
import axios from 'axios';

import { ScreenHeaderBtn } from '@/components';
import { COLORS, icons, SIZES } from '@/constants';
import NearByJobCard from '@/components/common/cards/NearByJobCard';
import { RAPID_API_KEY } from '@env';

type JobCard = {
  job_id: string;
};

const JobSearch = () => {
  const params = useLocalSearchParams();
  const router = useRouter();

  const [searchResult, setSearchResult] = useState<JobCard[]>([]);
  const [searchLoader, setSearchLoader] = useState(false);
  const [searchError, setSearchError] = useState<any>(null);
  const [page, setPage] = useState(1);

  const handleSearch = async () => {
    setSearchLoader(true);
    setSearchResult([]);

    try {
      const options = {
        method: 'GET',
        url: `https://jsearch.p.rapidapi.com/search`,
        headers: {
          'X-RapidAPI-Key': RAPID_API_KEY,
          'X-RapidAPI-Host': 'jsearch.p.rapidapi.com',
        },
        params: {
          query: params.id,
          page: page.toString(),
        },
      };

      const response = await axios.request(options);
      setSearchResult(response.data.data);
    } catch (error) {
      setSearchError(error);
      console.log(error);
    } finally {
      setSearchLoader(false);
    }
  };

  const handlePagination = (direction: string) => {
    if (direction === 'left' && page > 1) {
      setPage(page - 1);
      handleSearch();
    } else if (direction === 'right') {
      setPage(page + 1);
      handleSearch();
    }
  };

  useEffect(() => {
    handleSearch();
  }, []);

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.lightWhite }}>
      <Stack.Screen
        options={{
          headerStyle: { backgroundColor: COLORS.lightWhite },
          headerShadowVisible: false,
          headerLeft: () => (
            <ScreenHeaderBtn
              iconUrl={icons.left}
              handlePress={() => router.back()}
            />
          ),
          headerTitle: '',
        }}
      />

      <FlatList
        data={searchResult}
        renderItem={({ item }) => (
          <NearByJobCard
            job={item}
            handleNavigate={() =>
              router.push(`/job-details/${item.job_id}` as `http${string}`)
            }
          />
        )}
        keyExtractor={(item) => item.job_id}
        contentContainerStyle={{ padding: SIZES.medium, rowGap: SIZES.medium }}
        ListHeaderComponent={() => (
          <>
            <View>
              <Text className="text-3xl font-bold">{params.id}</Text>
              <Text className="text-base mt-3">Job Opportunities</Text>
            </View>
            <View>
              {searchLoader ? (
                <ActivityIndicator size="large" color={COLORS.primary} />
              ) : (
                searchError && <Text>Oops something went wrong</Text>
              )}
            </View>
          </>
        )}
        ListFooterComponent={() => (
          <View className="flex-row items-center justify-center">
            <TouchableOpacity onPress={() => handlePagination('left')}>
              <Image
                source={icons.chevronLeft}
                resizeMode="contain"
                className="w-8"
              />
            </TouchableOpacity>
            <View className="mx-4 bg-orange-500 rounded px-4 py-3">
              <Text className=" text-white ">{page}</Text>
            </View>
            <TouchableOpacity onPress={() => handlePagination('right')}>
              <Image
                source={icons.chevronRight}
                resizeMode="contain"
                className="w-8"
              />
            </TouchableOpacity>
          </View>
        )}
      />
    </SafeAreaView>
  );
};

export default JobSearch;
