import { Stack } from "expo-router";
import "./globals.css"
import _laytout from "./(tabs)/_layout";

export default function RootLayout() {
  return (<Stack>
      <Stack.Screen
      name="(tabs)"
      options={{ headerShown: false}} 
      />
      <Stack.Screen name="movies/[id]"
      options={{headerShown: false}}
      />
    </Stack>
    )
}

