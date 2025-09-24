import { Card, Link } from "@radix-ui/themes";
import { GithubIcon, LinkedinIcon, User } from "lucide-react";
import { memo } from "react";

const Contact = () => {
  return (
    <section className="mt-5" id="contact">
      <div className="container">
        <div className="h-[100vh] bg-neutral-50 rounded-2xl flex flex-col items-center justify-center">
          <div className="grid grid-cols-3 gap-10">
            <Link href="https://www.linkedin.com/in/abdulaziz-abdugafurov/">
              <Card size={"3"}>
                <LinkedinIcon />
              </Card>
            </Link>
            <Link href="https://github.com/kalgo4444">
              <Card size={"3"}>
                <GithubIcon />
              </Card>
            </Link>
            <Link href="https://t.me/abdulaziz5257">
              <Card size={"3"}>
                <User />
              </Card>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default memo(Contact);
