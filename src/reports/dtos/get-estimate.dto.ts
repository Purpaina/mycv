import { Transform } from 'class-transformer';
import {
  IsInt,
  IsLatitude,
  IsLongitude,
  IsString,
  Max,
  Min,
} from 'class-validator';

export class GetEstimateDto {
  @IsString()
  make: string;

  @IsString()
  model: string;

  @Transform(({ value }) => parseInt(value))
  @IsInt()
  @Min(1930)
  @Max(2030)
  year: number;

  @Transform(({ value }) => parseFloat(value))
  @IsLongitude()
  lng: number;

  @Transform(({ value }) => parseFloat(value))
  @IsLatitude()
  lat: number;

  @Transform(({ value }) => parseInt(value))
  @IsInt()
  @Min(0)
  mileage: number;
}
