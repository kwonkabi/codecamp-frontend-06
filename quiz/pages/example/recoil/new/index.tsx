import WritePage from "../../../../src/components/units/example/write";
import { useRecoilState } from "recoil";
import { useEffect } from "react";
import { isEditState } from "../../../../src/commons/store";

export default function NewPage() {
  const [isEdit, setIsEdit] = useRecoilState(isEditState);

  useEffect(() => {
    setIsEdit(false);
  }, []);

  return <WritePage />;
}
