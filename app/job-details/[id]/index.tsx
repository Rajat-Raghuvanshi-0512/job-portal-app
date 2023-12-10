import { Stack, router } from 'expo-router';
import { useCallback, useState } from 'react';
import {
  View,
  SafeAreaView,
  ScrollView,
  ActivityIndicator,
  RefreshControl,
} from 'react-native';

import {
  Company,
  JobAbout,
  JobFooter,
  JobTabs,
  ScreenHeaderBtn,
  Specifics,
} from '@/components';
import { COLORS, icons, SIZES } from '@/constants';
import { useFetch } from '@/utils/hooks/useFetch';
import { useLocalSearchParams } from 'expo-router';

const tabs = ['About', 'Qualifications', 'Responsibilities'];
const JobDetails = () => {
  const params = useLocalSearchParams();
  const [refreshing, setRefreshing] = useState(false);
  const [activeTab, setActiveTab] = useState(tabs[0]);
  const { data, loading, error, refetch } = useFetch('job-details', {
    job_id: params.id,
  });
  const onRefresh = useCallback(() => {
    setRefreshing(true);
    refetch();
    setRefreshing(false);
  }, []);
  const displayContent = () => {
    switch (activeTab) {
      case tabs[0]:
        return (
          <JobAbout info={data[0]?.job_description ?? 'No data provided'} />
        );
      case tabs[1]:
        return (
          <Specifics
            title={tabs[1]}
            points={data[0]?.job_highlights?.Qualifications ?? ['N/A']}
          />
        );
      case tabs[2]:
        return (
          <Specifics
            title={tabs[2]}
            points={data[0]?.job_highlights?.Responsibilities ?? ['N/A']}
          />
        );
    }
  };
  if (!data || error) return null;
  return (
    <SafeAreaView style={{ backgroundColor: COLORS.lightWhite, flex: 1 }}>
      <Stack.Screen
        options={{
          headerStyle: { backgroundColor: COLORS.lightWhite },
          headerShadowVisible: false,
          headerBackVisible: false,
          headerLeft: () => (
            <ScreenHeaderBtn
              iconUrl={icons.left}
              handlePress={() => router.back()}
            />
          ),
          headerRight: () => (
            <ScreenHeaderBtn
              iconUrl={icons.share}
              handlePress={() => router.back()}
            />
          ),
          headerTitle: 'Job details',
        }}
      />
      <>
        <ScrollView
          showsVerticalScrollIndicator={false}
          refreshControl={
            <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
          }
          style={{ flexGrow: 1 }}
        >
          {loading || refreshing ? (
            <ActivityIndicator size="large" color={COLORS.primary} />
          ) : (
            <View className="pb-20">
              <Company
                companyLogo={data[0]?.employer_logo! || 'N/A'}
                jobTitle={data[0]?.job_title! || 'N/A'}
                companyName={data[0]?.employer_name! || 'N/A'}
                location={data[0]?.job_country! || 'N/A'}
              />
              <JobTabs
                tabs={tabs}
                activeTab={activeTab}
                setActiveTab={setActiveTab}
              />
              {displayContent()}
            </View>
          )}
        </ScrollView>
        <JobFooter
          url={
            data[0]?.job_google_link ??
            'https://www.google.com/about/careers/applications/jobs/results'
          }
        />
      </>
    </SafeAreaView>
  );
};

export default JobDetails;
