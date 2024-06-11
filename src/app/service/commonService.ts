'use client';
// import { useState,useEffect, useCallback } from "react";

export class commonService{

    countryData = async () =>{
      debugger;
            const response = await fetch('./api/commonController', {
                method : 'POST',
                headers: {
                    'Content-Type': 'application/json',
                  },
                // body: JSON.stringify(params),
            });
            if(response.status === 200){
                const data = await response.json();
                return data;
            }else{
                return false;
            }
    } 
};