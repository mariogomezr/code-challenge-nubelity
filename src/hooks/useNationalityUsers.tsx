import { useEffect, useState } from "react";

const USER_API = "https://randomuser.me/api";

type UserInfoReturnT = {
  picture?: {
    medium?: string;
  };
  name?: {
    first?: string;
    last?: string;
  };
  login?: {
    password?: string;
  };
  phone?: string;
  location?: {
    street?: {
      number?: string;
      name?: string;
    };
  };
  dob?: {
    date?: string;
  };
  email?: string;
};

export const useNationalityUsers = (
  nationality?: string
): {
  data: UserInfoReturnT[];
  isLoading: boolean;
} => {
  const [data, setData] = useState<UserInfoReturnT[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      if(!nationality) return 

      setIsLoading(true);
      try {
        const res = await fetch(
          `${USER_API}/?` +
            new URLSearchParams({
              nat: nationality,
              results: "10",
            })
        );
        const data = await res.json();
        console.log(data);
        setData(data.results as UserInfoReturnT[]);
        setIsLoading(false);
      } catch (error) {
        throw new Error(error as string);
      }
    };
    fetchData();
  }, []);

  return { data, isLoading };
};
