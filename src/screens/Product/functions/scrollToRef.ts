import {
  View,
  TextInput as RNTextInput,
  TouchableOpacity,
  findNodeHandle,
} from "react-native";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";

export type RefView = React.RefObject<View>;
export type RefScrollView = React.RefObject<KeyboardAwareScrollView>;
export type RefInputType = React.RefObject<RNTextInput>;
export type RefButtonType = React.RefObject<TouchableOpacity>;

export const scrollToRef = (
  scrollViewRef: RefScrollView,
  ref: RefInputType | RefView | RefButtonType,
  adjustment: number = 0,
  value: string,
  focusOnTextInput: boolean = false
) => {
  if (ref.current && scrollViewRef.current) {
    const nodeHandle = findNodeHandle(ref.current);
    if (nodeHandle) {
      // Assurez-vous que le node handle est défini
      (ref.current as any).measureLayout(
        findNodeHandle(scrollViewRef.current), // Utilisez le node handle ici
        (_: number, y: number) => {
          let offset = y - 20 + adjustment;
          scrollViewRef.current?.scrollToPosition(0, offset, false);
        },
        (error: any) => {
          // Gérer les erreurs
          console.error("Failed to measure layout:", error);
        }
      );
    } else {
      console.warn("Failed to find node handle for ref:", ref.current);
    }
  } else {
    console.warn("Ref is not defined");
  }
  // if ((value === "name" || "description" || "price") && focusOnTextInput) {
  //   ref.current?.focus();
  // }
};
