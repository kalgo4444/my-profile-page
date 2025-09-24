import { Avatar, Heading, Text } from "@radix-ui/themes";
import { memo } from "react";
import { useTranslation } from 'react-i18next'

const AboutAvatar = () => {
  const { t } = useTranslation();

  return (
    <div className="flex items-center gap-x-3">
      <div className="shrink-0">
        <Avatar
          size="5"
          src="https://avatars.githubusercontent.com/u/193578571?v=4"
          fallback="A"
        />
      </div>

      <div className="grow">
        <Heading size={"4"} color="gray">
          Abdulaziz Abdugafurov
        </Heading>
        <Text size={"2"} color="gray">
          {t("about-me.title")}
        </Text>
      </div>
    </div>
  );
};

export default memo(AboutAvatar);
