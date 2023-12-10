import { View, Text, SafeAreaView } from 'react-native';
import React, { useState } from 'react';
import { Stack, useRouter } from 'expo-router';
import { COLORS, SIZES, icons, images } from '@/constants';
import { ScrollView } from 'react-native-gesture-handler';
import {
  Nearbyjobs,
  Popularjobs,
  ScreenHeaderBtn,
  Welcome,
} from '@/components';
import { StatusBar } from 'expo-status-bar';

const Hpme = () => {
  const router = useRouter();
  const [searchTerm, setSearchTerm] = useState('');
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.lightWhite }}>
      <StatusBar style={'dark'} />
      <Stack.Screen
        options={{
          headerStyle: { backgroundColor: COLORS.lightWhite },
          headerShadowVisible: false,
          headerTitle: 'Home',
          headerLeft: () => (
            <ScreenHeaderBtn iconUrl={icons.menu} handlePress={() => {}} />
          ),
          headerRight: () => (
            <ScreenHeaderBtn iconUrl={images.profile} handlePress={() => {}} />
          ),
        }}
      />
      <ScrollView showsVerticalScrollIndicator={false}>
        <View
          style={{
            flex: 1,
            padding: SIZES.medium,
          }}
        >
          <Welcome
            searchTerm={searchTerm}
            setSearchTerm={setSearchTerm}
            handleClick={() => {
              if (searchTerm) {
                router.push(`/search/${searchTerm}`); // `/search/${searchTerm}`
              }
            }}
          />
          <Popularjobs />
          <Nearbyjobs />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Hpme;
