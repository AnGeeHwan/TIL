import { useQuery } from "react-query";
import { AxiosResponse, AxiosError } from "axios";
import { ListResponse, TVDetail } from "../../../types/index";
import { topRatedApi } from "../../../apis/tvApi";
const useTopRateTv = () => {
  return useQuery<AxiosResponse<ListResponse<TVDetail>>, AxiosError>(
    "topRateTv",
    topRatedApi
  );
};

export default useTopRateTv;
