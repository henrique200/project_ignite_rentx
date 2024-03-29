import { CarDTO } from "./../../dtos/CarDTO";
export declare global {
  namespace ReactNavigation {
    interface RootParamList {
      Home: undefined;
      CarDetails: { car: CarDTO };
      Scheduling: { car: CarDTO };
      SchedulingDetails: { car: any; dates: any };
      SchedulingComplete: undefined;
      MyCars: undefined;
      SignUpFirstStep: undefined;
      SignUpSecondStep: undefined;
    }
  }
}
