# SLAT 사용 설명서

### 목차

1. [빠른시작](#빠른-시작)
1. [SLAT 소개](#slat은)
1. [회원기능](#회원기능)
1. [학교도서관 관리자 기능](#학교도서관-관리자-기능)
1. [SLAT 기능 알아보기](#slat-기능-알아보기)
   1. [소장 여부 확인](#소장-여부-확인)
1. [유용한 정보](#유용한-정보)
1. [블로그](#블로그)
1. [문제해결](#문제해결)
1. [정보제공](#정보제공)
1. [SLAT 배포 채널](#slat-배포-채널)
1. [버전 히스토리](#slat-version-history)

## 빠른 시작

### 검색

SLAT에서는 도서를 <label id="searchInputLabel2" for="searchInput" class="font-blod text-indigo-500">검색</label> 할 수 있습니다. ALADIN 도서 검색 API와 국립중앙도서관 CIP API를 활용하여 국내에서 출판된 도서 대부분을 검색할 수 있습니다. [_[목차]_](#목차)

### 추천도서

[**추천도서**](/recommend)에서는 **국립중앙도서관 사서 추천 도서** 등 다양한 추천 도서 목록을 확인할 수 있습니다. 목록 조회, 도서 상세 정보 조회, 구입 도서 목록 작성, 신간 도서 신청 등의 기능을 제공합니다. [_[목차]_](#목차)

### 알라딘 추천 도서

[**검색**](/search) 페이지에서 아무것도 검색하지 않은 상태 또는 검색창에 아무것도 입력하지 않고 검색을 실시한 경우에서는 알라딘 추천 도서를 확인할 수 있습니다. [_[목차]_](#목차)

### 신간 도서 구입 신청

이용자는 신간도서 구입 신청을 할 수 있습니다. 학교도서관에 신간 도서 구입 신청을 하기 위해서는 [소셜 계정 로그인](#소셜-계정-로그인) 또는 [비회원 학교 설정](#비회원-학교-설정)을 통해 학교를 설정해야 합니다. 학교도서관 관리자는 [신간도서 탭](/bookrequest)에서 신청된 신간도서를 확인하고 구입 도서 목록에 추가할 수 있습니다. [_[목차]_](#목차)

## SLAT 설명서

### SLAT은?

학교도서관 수서 도구(SLAT: School Library Acquisition Tool)는 학교도서관의 수서 작업을 편리하게 할 수 있도록 지원하는 온라인 도구입니다. [_[목차]_](#목차)

## 회원기능

### 소셜 계정 로그인

> **알림!** SLAT은 소셜계정 로그인 시 **이용자의 개인정보를 일체 수집하지 않습니다.**

[소셜 계정 로그인](/api/auth/signin)은 카카오, 네이버, 깃허브 등의 소셜 계정을 이용하여 로그인할 수 있습니다. 학교도서관 관리자 기능(도서 구입 목록 작성, 신간 도서 신청 목록 조회 등)을 이용하기 위해서는 반드시 소셜 계정 로그인이 필요합니다. [_[목차]_](#목차)

### 비회원 학교 설정

[비회원 학교 설정](./init/guest)을 통해 학교도서관 이용자는 신간 도서 구입 신청, 학교도서관 도서 소장 여부 등의 기능을 이용할 수 있습니다. [_[목차]_](#목차)

### 관리자 계정 인증

학교도서관 관리자 기능을 이용하기 위해서는 관리자 인증코드를 입력해야 합니다. 관리자 인증코드는 [**인증코드 문의**(새창: 카카오톡 오픈채팅)](https://open.kakao.com/o/sXKbtVXf?)를 통해 알 수 있습니다. [_[목차]_](#목차)

### 관리자/일반 이용자 전환

[설정>**회원정보**](/init)에서 관리자-일반 이용자로 변경(클릭)>**일반이용자로 변경**을 눌려 일반이용자로 전환할 수 있습니다. [_[목차]_](#목차)

## 학교도서관 관리자 기능

학교도서관 관리자 기능을 이용하시려면 반드시 [**관리자 계정 인증**](#관리자-계정-인증)을 완료해야합니다. [_[목차]_](#목차)

### 북카트

### 북카트 보관

북카트에 담은 도서 목록을 북카트 보관 기능을 이용하여 보관하고 공유할 수 있습니다. [_[목차]_](#목차)

### 신간신청

신간도서 신청 목록을 조회할 수 있습니다. 신청된 신간도서의 소장여부 및 도서 정보를 확인하고 구입 도서 목록에 추가할 수 있습니다. [_[목차]_](#목차)

### 우리학교 비회원 로그인 바로가기 링크 복사

[설정>학교설정](/init/school)에 접속 후 **버튼을 눌려 우리학교 바로 로그인 링크 복사** 복사된 링크를 [배포예시(울산중앙중학교)](https://school.use.go.kr/usjm-m/M010301/view/3161941?)와 같이 학교 홈페이지 등에 배포하면 학교도서관 이용자가 손쉽게 SLAT을 이용할 수 있습니다. [_목차_](#목차)

## SLAT 기능 알아보기

### 소장 여부 확인

SLAT은 [독서로](https://read365.edunet.net/)을 조회하여 학교도서관에서 해당 도서를 소장하고 있는지 여부를 확인합니다. [**자세히 알아보기**](/blog/6625b59fe11dc4eb7ed6fdcb) [_[목차]_](#목차)

## 유용한 정보

학교도서관과 관련된 유용한 정보 모음입니다. [_[목차]_](#목차)

- [**학교도서관 인터넷 접속 제한 확장**](/blog/6624f43f2ecef05f4231b62b)
- **안녕 하와이, 알로하 할머니(2020)**: 덤지북스(신선여자고등학교 학생 및 교사)가 제작한 그림책입니다. [pdf 다운로드(새창)](https://drive.google.com/file/d/1SL0FCw4NH9Duqeft7s1hhVevSayj7p67/view?usp=sharing)

## 블로그

SLAT 공지사항, 소식 및 학교도서관과 관련된 유용한 정보를 게시합니다. [_[목차]_](#목차)

## 다크모드

화면 상단의 [**밝게**](#darkmode) 또는 [**어둡게**](#darkmode)를 클릭해서 다크모드/라이트모드를 설정할 수 있습니다. &nbsp;&nbsp; [_[목차]_](#목차)

## 문제해결

### 쿠키 삭제를 통한 SLAT 오류 해결

로그인 오류, 설정 오류 등은 대부분 쿠키 삭제를 통해서 해결할 수 있습니다. 브라우저 쿠키 삭제 방법은 다음과 같습니다.

1. slat 접속, slat 화면에서 ctrl + shift + i 입력 애플리케이션 선택(요소, 콘솔, 등과 함께 나타나지 않는다면 >> 버튼을 눌려서 "애플리케이션" 선택)
   ![img-readme-cookie-01](https://raw.githubusercontent.com/freebird920/slat-markdown/main/img/img-readme-cookie-01.png)
<br/>

1. 저장용량>쿠키를 클릭 https://www.slat.or.kr 우클릭> 삭제 -> 새로고침
   ![img-readme-cookie-02](https://github.com/freebird920/slat-markdown/blob/main/img/img-readme-cookie-02.png?raw=true)
<br/>


### 쿠키 삭제 후에도 오류가 발생하는 경우

[카카오톡 오픈 채팅으로 문의하기](https://open.kakao.com/o/sXKbtVXf?)를 클릭하여 학교명을 알려주시면 도와드리겠습니다. &nbsp;&nbsp;[_[목차]_](#목차)

## 정보제공

- [울산중앙중학교 **정다정 학생(2023)**](/slatpicture.svg)
- [국립중앙도서관 CIP API](https://www.nl.go.kr/NL/contents/N31101030400.do)
- [알라딘 인터넷 서점 도서 검색 API](https://www.aladin.co.kr/) &nbsp;&nbsp; [_[목차]_](#목차)

## SLAT 배포 채널

- 정식 채널: https://www.slat.or.kr
- 베타 채널: https://slat2.vercel.app &nbsp;&nbsp; [_[목차]_](#목차)

## SLAT Version History

- **2.3.3 (Current)**

- 2.3
  - 2.3.3. **소장 여부 조회 기능수정**, 도서 상세 정보 조회기능 추가, 추천도서 목록 UI 변경
  - 2.3.2. 저장된 북카트 설명에 Markdown 적용, 신간신청에 필터 추가
  - 2.3.1. 추천도서 기능, 시작 페이지를 README.md 문서로 대체, BLOG 기능 추가
  - 2.3.0. UI 변경
- 2.2
  - 2.2.2. 사용자 인증 기능 개선
  - 2.2.1. 소장 여부 조회 기능 추가
- 2.0
- 1.0 데모 애플리케이션 완성. &nbsp;&nbsp; [_[목차]_](#목차) &nbsp;&nbsp; [_[처음으로]_](#top)
