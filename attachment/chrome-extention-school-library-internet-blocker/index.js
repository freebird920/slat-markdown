// index.js

/**
 * WhiteList
 * @description 여기에 허용할 도메인을 추가하세요. 끝에는 ,를 붙여야합니다.
 * @example "https://example.com",
*/
const whiteList = [
  // 여기에 도메인을 아래와 같이 입력하세요. (단 //는 제외하고 입력하세요.)
  // "https://example.com", 
  "https://read365.edunet.net",
  "https://dls.edunet.net",
  "https://dls2.edunet.net",
  "https://slat2.vercel.app/",
  "https://www.slat.or.kr",
];

/**
 * @description 이 코드는 학교 도서관에서 사용하는 인터넷 차단기입니다.
 */
if (!whiteList.some((baseUrl) => window.location.href.startsWith(baseUrl))) {
  const html = document.querySelectorAll("html");
  html.forEach((a) => {
    a.innerHTML = "";
  });
  document.write(
    "<a href='https://read365.edunet.net'>0.1초 후에 독서로로 이동합니다.</a>"
  );
  setTimeout(() => {
    window.location.href = "https://read365.edunet.net";
  }, 100);
}
