import { Anchor, Button, H1, H3, Paragraph, Separator, XStack, YStack } from "@my/ui";
import { useRouter } from "solito/router";
import { trpc } from "app/utils/trpc";

export function HomeScreen() {
  const { push } = useRouter();
  return (
    <YStack f={1} jc="center" ai="center" p="$4" space backgroundColor={"$background"}>
      <YStack space="$4" maw={600} px={"$3"}>
        <H1 ta="center">create-universal-app</H1>
        <Paragraph ta="left">
          This is a demo for create-universal-app. To read more about the philosophy behind it, visit{" "}
          <Anchor color="$color12" href="https://github.com/chen-rn/create-universal-app" target="_blank">
            https://github.com/chen-rn/create-universal-app
          </Anchor>
          (give it a ⭐️ if you like it!)
        </Paragraph>
        <Paragraph>
          This template uses Expo, Next, Solito, tRPC, Tamagui, Clerk, and Prisma. If you're a beginner and is a little
          overwhelmed, I've also made a
          <Anchor color="$color12" href="https://youtu.be/aTEv0-ZBbWk" target="_blank">
            video
          </Anchor>
          explanation on how this template works and how to get started!
        </Paragraph>
        <Separator />
      </YStack>

      <H3 ta="center">Some Demos</H3>
      <YStack p={"$2"}>
        <Paragraph>tRPC Query Demo</Paragraph>
      </YStack>

      <Button
        onPress={() => {
          push("/user/nate");
        }}
      >
        User Page(Routing)
      </Button>

      <Button
        onPress={() => {
          push("/signup");
        }}
      >
        Sign Up
      </Button>
      <Button
        onPress={() => {
          push("/signin");
        }}
      >
        Sign In
      </Button>
    </YStack>
  );
}
