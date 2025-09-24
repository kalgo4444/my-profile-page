import { Heading, Link, Text } from "@radix-ui/themes";
import { DownloadIcon } from "lucide-react";
import { memo } from "react";
import { useTranslation } from "react-i18next";

const Hero = () => {
  const { t } = useTranslation();
  return (
    <section className="mt-5">
      <div className="container">
        <div className="min-h-[90vh] bg-neutral-50 rounded-2xl flex flex-col items-center justify-center text-center">
          <Heading size={"8"} mb={"1"}>
            Abdulaziz Abdugafurov
          </Heading>
          <Heading size={"6"} mb={"1"}>
            {t("hero.job")}
          </Heading>
          <Text className="max-w-5xl w-full">{t("hero.description")}</Text>
          <Link mt={"5"} href="/public/resume" download={"my.pdf"}>
            <div className="flex items-center gap-x-2">
              Resume <DownloadIcon />
            </div>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default memo(Hero);
