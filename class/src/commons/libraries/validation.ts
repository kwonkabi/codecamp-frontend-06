export const checkFileValidation = (file?: File) => {
  // 파일 받기, 파일이 없을 수도 있으니 ? 붙이기.
  if (!file?.size) {
    alert("파일이 없습니다!");
    return false;
  }
  if (file.size > 5 * 1024 * 1024) {
    // 5MB보다 클 때
    alert("파일 용량이 너무 큽니다. (제한: 5MB!)");
    return false;
  }
  if (
    !file.type.includes("jpeg") &&
    !file.type.includes("png") &&
    !file.type.includes("jpg")
  ) {
    alert("jpg, jpeg 또는 png 파일만 가능합니다.");
    return false;
  }

  // 아무 문제가 없으면
  return true;
};
