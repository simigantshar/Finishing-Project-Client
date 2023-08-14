import useData from "./useData";

const useBands = () =>  {
    const { data: bands, setData: setBands, isLoading } = useData("/bands");
return {bands,setBands, isLoading}}

export default useBands;