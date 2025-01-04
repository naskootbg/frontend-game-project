import axiosUrl from "@/config/axiosApp";
import { logger } from "@/utils/logger";

export async function Register(){
    try{
const res = await axiosUrl.get('register');
return res.data;
    }
    catch (e){
logger.error(e);
return[];
    }
}