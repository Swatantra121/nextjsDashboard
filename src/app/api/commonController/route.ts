import { NextResponse } from "next/server";
import commonConnect from '../../connectionFile/helpers/connection';

export async function POST() {
  try{

    const query =  `Select id as countryId, countryname as countryName, countryisocode as countryCode  from countrymst;`
    const result = commonConnect.request().query(query);
    const data = result.recordsets[0];
    return NextResponse.json({statuscode:200, data:result})


  }catch(error){
    return NextResponse.json({success: false, error: 'Database Error!'})
  }
  
}