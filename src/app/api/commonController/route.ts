import { NextResponse } from "next/server";
import commonConnect from '../../connectionFile/helpers/connection';

export async function POST() {
  try {
    console.log("Kunal");
    const query = `SELECT id AS countryId, countryname AS countryName, countryisocode AS countryCode FROM countrymst;`
    const result = await commonConnect.queryAsync(query);
    const data = result;
    
    return NextResponse.json({ success:true, statuscode: 200, data: data });

  } catch (error) {
    console.error(error);  // Log the error for debugging purposes
    return NextResponse.json({ success: false, error: 'Database Error!' });
  }
}
