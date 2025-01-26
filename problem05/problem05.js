/* problem05.js */
/**
 * [문제5]
 * - 데이터 타입 확인 및 특수 값 처리
 *
 * - typeof 연산자
 *   - 변수나 값의 타입을 문자열로 반환합니다.
 *   - 예: `typeof 42`는 `"number"`, `typeof "hello"`는 `"string"`을 반환합니다.
 *
 * - null과 undefined
 *   - `null`: 의도적으로 값이 없음을 나타냅니다.
 *   - `undefined`: 값이 할당되지 않은 변수를 나타냅니다.
 *
 * 아래 코드는 잘못된 타입 검사와 특수 값 처리가 포함되어 있으며,
 * 이를 수정하여 올바른 결과를 반환해야 합니다.
 */
function inspectValues() {
  let a; // undefined
  let b = null; // null
  let c = 42; // number
  let d = "hello"; // string

  return {
    typeofA: typeof b, // 🚨
    typeofB: typeof d, // 🚨
    typeofC: typeof a, // 🚨
    typeofD: "null", // 🚨
    checkNull: b === undefined, // 🚨
  };
}
module.exports = inspectValues;
