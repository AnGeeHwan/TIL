import { useQuery } from "react-query";
import { AxiosResponse, AxiosError } from "axios";
import { TVDetail } from "../../../types/index";
import { latestApi } from "../../../apis/tvApi";
const useLatestTv = () => {
  return useQuery<AxiosResponse<TVDetail>, AxiosError>("latestTv", latestApi);
};

export default useLatestTv;
