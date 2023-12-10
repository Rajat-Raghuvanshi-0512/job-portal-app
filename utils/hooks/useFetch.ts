import { useEffect, useState } from 'react';
import { RAPID_API_KEY } from '@env';
import axios from 'axios';

export type DataType = {
  employer_name?: string;
  employer_logo?: string;
  job_publisher?: string;
  job_id: string;
  job_employment_type?: string;
  job_title?: string;
  job_apply_link?: string;
  job_description?: string;
  job_country?: string;

  job_google_link: string;
  job_highlights: {
    Qualifications?: string[];
    Responsibilities?: string[];
  };
  0?: {
    employer_name: string;
    employer_logo: string;
    job_publisher: string;
    job_id: string;
    job_employment_type?: string;
    job_title?: string;
    job_apply_link?: string;
    job_description?: string;

    job_google_link: string;
    job_highlights?: {
      Qualifications?: string[];
      Responsibilities?: string[];
    };
  };
};

export const useFetch = (endpoint: string, query: Object) => {
  const [data, setData] = useState<DataType[]>([]);
  const [loading, setloading] = useState<boolean>(false);
  const [error, setError] = useState<unknown>();

  const options = {
    method: 'GET',
    url: `https://jsearch.p.rapidapi.com/${endpoint}`,
    params: { ...query },
    headers: {
      'X-RapidAPI-Key': RAPID_API_KEY,
      'X-RapidAPI-Host': 'jsearch.p.rapidapi.com',
    },
  };

  const fetchData = async () => {
    try {
      setloading(true);
      const response = await axios.request(options);
      setData(response.data.data);
      setloading(false);
    } catch (error) {
      setError(error);
      setloading(false);
      console.error(error);
    }
  };
  useEffect(() => {
    fetchData();
  }, []);

  const refetch = () => {
    fetchData();
  };

  return { data, loading, error, refetch };
};
