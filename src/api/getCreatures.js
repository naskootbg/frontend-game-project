import axiosUrl from "@/config/axiosApp";
import { logger } from "@/utils/logger";

export async function GetAllCreatures(){
    try{
const res = await axiosUrl.get('creature/all');
return res.data;
    }
    catch (e){
logger.error(e);
return[];
    }
}