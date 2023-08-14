import useData from "./useData";

const useWatches = () =>  {
    const { data: watches, setData: setWatches, isLoading } = useData("/watches");
return {watches, setWatches, isLoading}}

export default useWatches;