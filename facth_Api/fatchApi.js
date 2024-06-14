
import{getData} from "../facth_Api";
import { CardComponent1 } from "../component/CardComponent1";
const Test_Url = "https://fakestoreapi.com/products"

export async  function  getData(endpoint){
    try{
        const data = await fetch (`${Test_Url}${endpoint}`);
        const res = await data.json();
        return res;

    }catch(error){
        console.log("Something  when wrong !!",error);
    }
}