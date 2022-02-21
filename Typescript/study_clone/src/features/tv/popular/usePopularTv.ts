import { useQuery } from "react-query";
import { AxiosResponse, AxiosError } from "axios";
import { ListResponse, TVDetail } from "../../../types/index";
import { popularApi } from "../../../apis/tvApi";
const usePopularTv = () => {
  return useQuery<AxiosResponse<ListResponse<TVDetail>>, AxiosError>(
    "popularTv",
    popularApi
  );
};

export default usePopularTv;
