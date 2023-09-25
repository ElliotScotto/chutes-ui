import { View } from "react-native";
export type RefType = React.RefObject<View>;
export const scrollToRef = (
  scrollViewRef: any,
  ref: RefType,
  adjustment: number = 0
) => {
  if (ref.current && scrollViewRef.current) {
    (ref.current as any).measureLayout(
      scrollViewRef.current as any,
      (_: number, y: number) => {
        let offset = y - 20 + adjustment;
        scrollViewRef.current?.scrollTo({
          x: 0,
          y: offset,
          animated: false,
        });
      }
    );
  }
};
