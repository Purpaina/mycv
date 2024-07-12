import {
  IsInt,
  IsLatitude,
  IsLongitude,
  IsString,
  Max,
  Min,
} from 'class-validator';

export class CreateReportDto {
  @Min(0)
  price: number;

  @IsString()
  make: string;

  @IsString()
  model: string;

  @IsInt()
  @Min(1930)
  @Max(2030)
  year: number;

  @IsLongitude()
  lng: number;

  @IsLatitude()
  lat: number;

  @IsInt()
  @Min(0)
  mileage: number;
}
