import { Select } from "@radix-ui/themes";
import { memo } from "react";
import { useTranslation } from "react-i18next";

const SelectLanguage = () => {
  const { i18n } = useTranslation();
  return (
    <Select.Root
      size="2"
      value={i18n.language}
      onValueChange={i18n.changeLanguage}
    >
      <Select.Trigger radius="full" />
      <Select.Content>
        <Select.Item value="en">EN</Select.Item>
        <Select.Item value="uz">UZ</Select.Item>
      </Select.Content>
    </Select.Root>
  );
};

export default memo(SelectLanguage);
