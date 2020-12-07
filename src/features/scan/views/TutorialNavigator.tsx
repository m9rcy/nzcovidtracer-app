import { HeaderBackImage } from "@components/atoms/HeaderBackImage";
import { headerOptions } from "@navigation/options";
import { createStackNavigator } from "@react-navigation/stack";
import React from "react";
import { useTranslation } from "react-i18next";

import { disableAnimations } from "../../../config";
import { ScanScreen } from "../screens";
import { TutorialScreen } from "./TutorialScreen";

export type TutorialStackParamList = {
  [ScanScreen.Recorded]: undefined;
};

const Stack = createStackNavigator<TutorialStackParamList>();

export function TutorialNavigator() {
  const { t } = useTranslation();

  return (
    <Stack.Navigator
      screenOptions={{
        ...headerOptions,
        headerBackImage: HeaderBackImage,
        headerBackTitleVisible: false,
        animationEnabled: !disableAnimations,
      }}
    >
      <Stack.Screen
        name={ScanScreen.Recorded}
        options={{ title: t("screenTitles:tutorial") }}
        component={TutorialScreen}
      />
    </Stack.Navigator>
  );
}
