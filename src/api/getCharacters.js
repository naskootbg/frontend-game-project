import axiosUrl from "@/config/axiosApp";
import { logger } from "@/utils/logger";

export async function GetAllCharacters(){
    try{
const res = await axiosUrl.get('character/enemy');
return res.data;
    }
    catch (e){
logger.error(e);
return[];
    }
}