import { Blockquote, Text } from "@radix-ui/themes";
import { memo } from "react";
import { useTranslation } from "react-i18next";

const AboutDescription = () => {
  const { t } = useTranslation();
  return (
    <div className="mt-8 max-w-5xl w-full">
      <Text size={"4"} color="gray">
        <Blockquote>{t("about-me.description")}</Blockquote>
      </Text>
    </div>
  );
};

export default memo(AboutDescription);
