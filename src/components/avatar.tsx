import { Image, ImageProps } from "react-native";
import clsx from "clsx";

type Props = ImageProps & {
  size?: "small" | "medium"
}

export function Avatar({ size = "medium", ...rest }: Props) {
  return (
    <Image {...rest} 
      className={clsx('rounded-full', {
        "w-8 h-8": size === "small",
        "w-10 h-10": size === "medium"
      })}
    />
  )
}