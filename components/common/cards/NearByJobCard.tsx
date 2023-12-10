import { View, Text, TouchableOpacity, Image } from 'react-native';
import React from 'react';

type PopularJobCardProps = {
  job: {
    employer_logo?: string;
    job_title?: string;
    job_employment_type?: string;
    job_id: string;
  };
  handleNavigate: () => void;
};

const NearByJobCard = ({ job, handleNavigate }: PopularJobCardProps) => {
  return (
    <TouchableOpacity
      className="bg-white rounded-lg flex-row max-w-full overflow-clip p-3 mb-5"
      onPress={handleNavigate}
    >
      <TouchableOpacity>
        <Image
          source={{ uri: job.employer_logo }}
          resizeMode="contain"
          width={60}
          height={60}
          className="rounded-lg bg-gray-200 mr-5"
        />
      </TouchableOpacity>
      <View className="w-[80%]">
        <Text className="font-semibold text-base" numberOfLines={1}>
          {job.job_title}
        </Text>
        <Text className="text-gray-600 py-1">{job.job_employment_type}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default NearByJobCard;
