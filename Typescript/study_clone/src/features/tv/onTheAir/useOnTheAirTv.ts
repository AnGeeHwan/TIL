import { useQuery } from "react-query";
import { AxiosResponse, AxiosError } from "axios";
import { ListResponse, TVDetail } from "../../../types/index";
import { onTheAirApi } from "../../../apis/tvApi";
const useOnTheAirTv = () => {
  return useQuery<AxiosResponse<ListResponse<TVDetail>>, AxiosError>(
    "onTheAirTv",
    onTheAirApi
  );
};

export default useOnTheAirTv;
