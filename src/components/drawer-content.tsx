import { Image, ScrollView, Text, View } from "react-native";
import { DrawerContentComponentProps } from "@react-navigation/drawer";

import { DrawerButton } from "@/components/drawer-button";
import { CustomOptions } from "@/@types/navigation";

export function DrawerContent(props: DrawerContentComponentProps) {
  return (
    <View className="flex-1 bg-gray-700 overflow-hidden">
      <View className="mt-20 w-full border-b pb-6 border-gray-500">
        <Image 
          source={require("@/assets/logo.png")}
          className="w-28 ml-6 mt-10"
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
              const options = props.descriptors[route.key].options as CustomOptions;

              if (options.title === undefined) return;
              
              const onPress = () => {
                const event = props.navigation.emit({
                  type: "drawerItemPress",
                  canPreventDefault: true,
                  target: route.key
                })
                
                if (!isFocused && !event?.defaultPrevented) {
                  props.navigation.navigate(route.name, route.params);
                }
              }

              return (
                <View key={route.key} className="w-full">
                  {
                    options.sectionTitle && (
                      <Text className="text-gray-400 text-sm font-heading uppercase ml-4 mt-6">
                        {options.sectionTitle}
                      </Text>
                    )
                  }

                  <DrawerButton 
                    title={options.title}
                    isFocused={isFocused}
                    isDivider={options.isDivider}
                    iconName={options.iconName}
                    notifications={options.notifications}
                    onPress={onPress}
                  />
                </View>
              )
            })
          }
        </View>
      </ScrollView>
    </View>
  )
}