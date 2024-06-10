"use client"; // Ajoutez ceci en haut
import { NextResponse } from 'next/server';
import { commonService } from '../service/commonService';
const commonDataService = new commonService

import React from 'react';

const Footer: React.FC = () => {

  async function countryData(params:any) {
    try{
      const countryResultData = await commonDataService.countryData(params)
      return NextResponse.json({data:countryResultData})
    }catch(error){
      console.log(error)
    }
  }
  const data =  countryData('')
  return (
    <footer className="container-fluid text-center footer">
      <p>Vestige</p>
    </footer>
  );
};

export default Footer;
