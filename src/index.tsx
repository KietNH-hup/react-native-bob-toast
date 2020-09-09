import { NativeModules } from 'react-native';

type BobToastType = {
  multiply(a: number, b: number): Promise<number>;
};

const { BobToast } = NativeModules;

export default BobToast as BobToastType;
