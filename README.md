# 🎵 EZEN MUSIC 
> 이젠아카데미-[디지털컨버전스]풀스택 개발자 과정 수료 프로젝트
> 
> 개발 기간 : 23.11.07. ~ 23.12.22.
## 👩‍👩‍👦‍👦 구성원
> - 민병준(팀장)
> - 임승렬
> - 김건우
> - 이재호
<br>

## 📖 프로젝트 소개

음악 스트리밍 서비스를 구현한 포트폴리오 프로젝트 입니다.

저작권 등의 문제로 실제 음원이 재생되지 않습니다.

디자인은 음악 스트리밍 앱 FLO 의 디자인을 클론코딩 하였습니다.

<table>
  <tr>
    <th>메인 페이지</th>
    <th>인기 차트</th>
  </tr>
  <tr>
    <td>
      <img src="https://github.com/user-attachments/assets/3391924a-6eec-4e3e-9050-5ae19dedc317" width="100%" style="max-width:400px;"><br>
    </td>
    <td>
      <img src="https://github.com/user-attachments/assets/b3171a7e-1cef-4f1e-8b88-39ffae49bbf5" width="100%" style="max-width:400px;"><br>
    </td>
  </tr>
  <tr>
    <th>사용자별 캐릭터 마이페이지</th>
    <th>아티스트 취향 선택 페이지</th>
  </tr>
  <tr>
    <td>
      <img src="https://github.com/user-attachments/assets/47781950-6060-4435-a0c4-a26002013b05" width="100%" style="max-width:400px;"><br>
    </td>
    <td>
      <img src="https://github.com/user-attachments/assets/7ec5abf9-964e-4e01-944e-5d1dee857386" width="100%" style="max-width:400px;"><br>
    </td>
  </tr>
  <tr>
    <th>장르 취향 선택 페이지</th>
    <th>취향 선택 후 메인 페이지</th>
  </tr>
  <tr>
    <td>
      <img src="https://github.com/user-attachments/assets/ff34949f-1334-4338-9019-df849f4d3579" width="100%" style="max-width:400px;"><br>
    </td>
    <td>
      <img src="https://github.com/user-attachments/assets/42ea8aa8-7aed-4961-ad30-0dacbfb8e111" width="100%" style="max-width:400px;"><br>
    </td>
  </tr>
</table>

<br>

---
## ⚙️ 기술 스택  

<div>
<img src="https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=Node.js&logoColor=white"/>
<img src="https://img.shields.io/badge/Express-000000?style=for-the-badge&logo=Express&logoColor=white"/>
<img src="https://img.shields.io/badge/React-61DAFB?style=for-the-badge&logo=React&logoColor=black"/>
<img src="https://img.shields.io/badge/mysql8.0.33-4479A1?style=for-the-badge&logo=mysql&logoColor=white">
<img src="https://img.shields.io/badge/aws-FF9900?style=for-the-badge&logo=amazonaws&logoColor=white">
<img src="https://img.shields.io/badge/github-181717?style=for-the-badge&logo=github&logoColor=white">
<br><br>
<img src="https://img.shields.io/badge/html5-E34F26?style=for-the-badge&logo=html5&logoColor=white">
<img src="https://img.shields.io/badge/css-1572B6?style=for-the-badge&logo=css3&logoColor=white">
<img src="https://img.shields.io/badge/javascript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black">
<img src="https://img.shields.io/badge/jquery-0769AD?style=for-the-badge&logo=jquery&logoColor=white">
<img src="https://img.shields.io/badge/bootstrap5-7952B3?style=for-the-badge&logo=bootstrap&logoColor=white">
</div>

<br>

## 📌 주요 기능
- 로그인, 회원가입
- 계정마다 캐릭터 생성 및 선호하는 아티스트, 장르로 추천 음악 표시
- 재생 후 재생목록 추가, 하단 플레이어 추가
- 좋아요, 플레이리스트 저장
- 이용권 구매
- 아티스트/앨범/노래 등 검색 기능

## ⚙️ 배포 
  - <www.ezenmusic.com>
  - 테스트 계정 ID: root PW: root123!
  - 관리자 페이지
    - 3.38.16.62:8081
    - 관리자 계정 테스트 ID: ezenmusic PW: flodb64cc!!

## 📚 팀원 별 담당 파트

<table>
  <tr>
    <td width="50%" valign="top">

### 🙋‍♂️ 민병준 (팀장)
><b>FE</b>
  - 메인 화면 UI
  - 앨범, 좋아요, 테마 플레이리스트 UI
><b>BE</b>
  - 곡 정보, 앨범 정보, 음악 정보, 아티스트 정보 API
  - 검색 기능 구현
  - 플레이어 바 기능 구현
  - 보관함 페이지 API
  - 앨범, 플레이리스트, 아티스트 재생버튼 기능 구현  

</td>
    <td width="50%" valign="top">

### 🙋‍♂️ 임승렬
><b>FE</b>
  - 메인 배너 UI
  - 캐릭터 취향 설정 UI
  - Styled-Components 를 통해 페이지 별 레이아웃, 스타일 통일화 작업   
><b>BE</b>
  - [관리자용 페이지]
    - 관리자 페이지 로그인 기능 구현
    - 회원 정보 관리 기능 구현
  - [클라이언트 페이지]
    - 로그인, 회원가입, 아이디/비밀번호 찾기 등 회원 관련 모든 API 구현  
    - 계정 별 캐릭터 생성 기능 API
    - 이용권 구매, 만료 처리 기능 API
    - 아티스트 및 장르 선택 후 추천 음악 플레이리스트 제안 기능 구현  

</td>
  </tr>
  <tr>
    <td width="50%" valign="top">

### 🙋‍♂️ 김건우 
><b>FE</b>
  - 플레이리스트 UI
><b>BE</b>
  - 보관함(플레이리스트) API
><b>AWS</b>  
  - nginx 설정 및 배포
    
</td>
    <td width="50%" valign="top">

### 🙋‍♂️ 이재호
><b>FE</b>
  - 아티스트 페이지 UI
><b>BE</b>
  - 아티스트 페이지 API
    
</td>
  </tr>
</table>

