import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Image,
  FlatList,
} from 'react-native';
import React, { Dispatch, SetStateAction, useState } from 'react';
import { useRouter } from 'expo-router';
import { SIZES, icons } from '@/constants';

const jobTypes = ['Full-time', 'Part-time', 'Internship'];

type WelcomeProps = {
  searchTerm: string;
  setSearchTerm: Dispatch<SetStateAction<string>>;
  handleClick: () => void;
};

const Welcome = ({ searchTerm, setSearchTerm, handleClick }: WelcomeProps) => {
  const [activeJobTypes, setActiveJobTypes] = useState<string>(jobTypes[0]);
  const router = useRouter();
  return (
    <View>
      <View>
        <Text className="text-2xl font-light">Hello Rajat</Text>
        <Text className="text-3xl font-semibold">Find your perfect job</Text>
      </View>
      <View className="flex flex-row w-full my-3">
        <View className="flex-[0.85] mr-2">
          <TextInput
            placeholder="What are you looking for?"
            placeholderTextColor={'rgba(107, 114, 128, 0.6)'}
            className="bg-zinc-200 px-4 pb-3 pt-2 rounded-xl shadow text-lg text-gray-500"
            value={searchTerm}
            onChangeText={(text) => setSearchTerm(text)}

            // value="test yyyybbgggg"
          ></TextInput>
        </View>
        <TouchableOpacity
          className="rounded-xl bg-orange-500 shadow-lg w-full h-inherit flex-[0.15] justify-center items-center"
          onPress={handleClick}
        >
          <Image
            source={icons.search}
            resizeMode="contain"
            className="w-7 h-7"
            tintColor="white"
          />
        </TouchableOpacity>
      </View>
      <View>
        <FlatList
          data={jobTypes}
          renderItem={({ item }) => (
            <TouchableOpacity
              className={`rounded-3xl border py-2 px-3 ${
                activeJobTypes === item ? 'bg-black' : ''
              }`}
              onPress={() => {
                setActiveJobTypes(item);
                router.push(`/search/${item}` as `http${string}`);
              }}
            >
              <Text
                className={`${activeJobTypes === item ? 'text-white' : ''}`}
              >
                {item}
              </Text>
            </TouchableOpacity>
          )}
          horizontal
          keyExtractor={(key) => key}
          className="my-5"
          ItemSeparatorComponent={() => <View style={{ width: 10 }} />}
        />
      </View>
    </View>
  );
};

export default Welcome;
