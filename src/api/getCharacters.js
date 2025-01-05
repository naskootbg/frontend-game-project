import axiosUrl from "@/config/axiosApp";
import { logger } from "@/utils/logger";

export async function GetAllCharacters(){
    try{
const res = await axiosUrl.get('characters/all');
return res.data;
    }
    catch (e){
logger.error(e);
return[];
    }
}

export async function GetCharacter(qid){
    try{
const res = await axiosUrl.get('characters/player?id='+qid);
return res.data;
    }
    catch (e){
logger.error(e); 
return[];
    }
}