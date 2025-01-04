import axiosUrl from "@/config/axiosApp";
import { logger } from "@/utils/logger";

export async function Login(){
    try{
const res = await axiosUrl.get('login');
return res.data;
    }
    catch (e){
logger.error(e);
return[];
    }
}