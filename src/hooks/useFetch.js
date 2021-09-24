import {useState, useEffect} from "react";

const useFetch = (url) => {
    const [data, setData] = useState(null) ;

    useEffect(()=> {
      const abortCont= new AbortController();

      fetch(url, {signal: abortCont.signal})
       .then( res => {
        //  if(!res.ok){
        //    throw Error("There has been an error fetching the data!");
        //  }
         return  res.json();
       })
       .then((datab)=> {
          setData(datab);
       })
       .catch((err)=> {
          alert(err);
       })

       return () => abortCont.abort() ;
    }, [url]) ;

    return {data} ;
}
 
export default useFetch;