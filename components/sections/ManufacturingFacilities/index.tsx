import React from 'react';
import ManufacturingOverview from '../ManufacturingOverview';
import ManufacturingInfrastructure from '../ManufacturingInfrastructure';
import ManufacturingMachinery from '../ManufacturingMachinery';
import ManufacturingCapabilities from '../ManufacturingCapabilities';
import ManufacturingProcess from '../ManufacturingProcess';
import ManufacturingHygieneSafety from '../ManufacturingHygieneSafety';
import { ManufacturingFacilitiesData } from '@/components/types';

export default function ManufacturingFacilities({ data }: { data?: ManufacturingFacilitiesData }) {
  return (
    <>
      <ManufacturingOverview data={data?.overview} />
      <ManufacturingInfrastructure data={data?.infrastructure} />
      <ManufacturingMachinery data={data?.machinery} />
      <ManufacturingCapabilities data={data?.capabilities} />
      <ManufacturingProcess data={data?.process} />
      <ManufacturingHygieneSafety data={data?.hygiene_safety} />
    </>
  );
}

export {
  ManufacturingOverview,
  ManufacturingInfrastructure,
  ManufacturingMachinery,
  ManufacturingCapabilities,
  ManufacturingProcess,
  ManufacturingHygieneSafety
};
