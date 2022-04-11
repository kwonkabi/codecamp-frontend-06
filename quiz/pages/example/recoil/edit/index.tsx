import { useEffect } from "react";
import WritePage from "../../../../src/components/units/example/write";
import { useRecoilState } from "recoil";
import { isEditState } from "../../../../src/commons/store";

export default function EditPage() {
  const [isEdit, setIsEdit] = useRecoilState(isEditState);

  useEffect(() => {
    setIsEdit(true);
  }, []);

  return <WritePage />;
}
