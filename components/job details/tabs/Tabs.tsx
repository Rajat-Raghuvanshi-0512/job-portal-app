import { View, Text, FlatList, TouchableOpacity } from 'react-native';
import React, { Dispatch, SetStateAction } from 'react';
import { SIZES } from '@/constants';

type TabsProps = {
  tabs: string[];
  activeTab: string;
  setActiveTab: Dispatch<SetStateAction<string>>;
};

type TabButtonProps = Omit<TabsProps, 'tabs'> & {
  name: string;
};

const TabButton = ({ activeTab, setActiveTab, name }: TabButtonProps) => {
  return (
    <TouchableOpacity
      className={`${
        activeTab == name
          ? 'bg-gray-800 text-white'
          : 'bg-gray-300 text-gray-900'
      } rounded-lg px-5 py-3`}
      onPress={() => setActiveTab(name)}
    >
      <Text className={`${activeTab == name ? 'text-white' : 'text-gray-900'}`}>
        {name}
      </Text>
    </TouchableOpacity>
  );
};

const Tabs = ({ tabs, activeTab, setActiveTab }: TabsProps) => {
  return (
    <View>
      <FlatList
        data={tabs}
        renderItem={({ item }) => (
          <TabButton
            name={item}
            activeTab={activeTab}
            setActiveTab={setActiveTab}
          />
        )}
        horizontal
        showsHorizontalScrollIndicator={false}
        keyExtractor={(item) => item}
        contentContainerStyle={{
          columnGap: SIZES.small,
          alignItems: 'center',
          justifyContent: 'center',
          flexGrow: 1,
        }}
      />
    </View>
  );
};

export default Tabs;
