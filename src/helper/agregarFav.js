import URL from "./URL";
import fetchPost from "./fetchPost";

const agregarFav = async(idU, idAS)=>{
    const BASE_URL= URL.BASE_URL;
        
    const dataFav = new FormData();
    dataFav.append("idU", idU);
    dataFav.append("idAS", idAS);
    const url = `${BASE_URL}abdiel/favoritos/add_item`
    const options = {
      method:'POST',
      body: dataFav
    };
    const res = await fetchPost(url, options);
    console.log("agrega Fav", res);
    return res;
   // 
    
    
  }
  export default agregarFav;