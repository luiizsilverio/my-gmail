import { Image, ScrollView, View } from "react-native";
import { DrawerContentComponentProps } from "@react-navigation/drawer";

export function DrawerContent(props: DrawerContentComponentProps) {
  return (
    <View className="flex-1 bg-gray-600 overflow-hidden">
      <View className="mt-20 w-full border-b pb-6 border-gray-500">
        <Image 
          source={require("@/assets/logo.png")}
          className="w-28 ml-5"
          resizeMode="contain" 
        />
      </View>

      <ScrollView 
        showsVerticalScrollIndicator={false} 
        contentContainerStyle={{ paddingBottom: 42 }}
      >
        <View className="mt-2">
          {
            props.state.routes.map((route, index) => {
              const isFocused = props.state.index === index;
              const options = props.descriptors[route.key].options;

              if (options.title === undefined) {
                return 
              }
              
              return <View key={route.key}></View>
            })
          }
        </View>
      </ScrollView>
    </View>
  )
}