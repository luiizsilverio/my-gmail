import { colors } from "@/styles/colors";
import { ReactNode } from "react";
import { View, TextInput, TextInputProps } from "react-native";

type Props = {
  children: ReactNode;
}

function Input({ children }: Props) {
  return (
    <View className="w-full h-14 bg-gray-800 rounded-lg p-4 flex-row items-center gap-4">
      {children}
    </View>
  )
}

function InputField({ ...rest }: TextInputProps) {
  return (
    <TextInput {...rest} 
      className="flex-1 font-normal text-base text-white" 
      placeholderTextColor={colors.gray[400]}
      cursorColor={colors.blue[600]}
    />
  )
}

Input.Field = InputField;

export default Input;

