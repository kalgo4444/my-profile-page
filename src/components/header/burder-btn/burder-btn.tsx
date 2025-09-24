import { Button } from "@radix-ui/themes";
import { MenuIcon } from "lucide-react";
import { memo, type Dispatch, type SetStateAction } from "react";

interface IProps {
  setIsOpen: Dispatch<SetStateAction<boolean>>;
}

const BurderBtn = (props: IProps) => {
  const { setIsOpen } = props;
  return (
    <div
      onClick={() => setIsOpen(true)}
      className="block md:hidden cursor-pointer"
    >
      <Button color="gray" variant="surface" highContrast>
        <MenuIcon size={30} />
      </Button>
    </div>
  );
};

export default memo(BurderBtn);
