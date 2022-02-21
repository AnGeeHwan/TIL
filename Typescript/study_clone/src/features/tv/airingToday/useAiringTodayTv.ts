import { useQuery } from "react-query";
import { AxiosResponse, AxiosError } from "axios";
import { ListResponse, TVDetail } from "../../../types/index";
import { airingTodayApi } from "../../../apis/tvApi";
const useAiringTodayTv = () => {
  return useQuery<AxiosResponse<ListResponse<TVDetail>>, AxiosError>(
    "airingTodayTv",
    airingTodayApi
  );
};

export default useAiringTodayTv;
