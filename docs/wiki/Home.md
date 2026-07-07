# 부산대학교 부트캠프 훈련생 관리 웹앱 Wiki

이 Wiki는 부산대학교 부트캠프 훈련생 관리 웹앱을 이해하고 운영하기 위한 설명서입니다. 개발자가 아닌 교수자, 운영자, 행정 담당자도 읽을 수 있도록 화면의 목적과 사용 흐름을 중심으로 정리했습니다.

## 이 시스템이 하는 일

이 웹앱은 부트캠프에 참여하는 학생들의 교과형 교육과정, 몰입형 PBL 과정, 상담 기록, 성적증명서 기반 이수 현황을 한 곳에서 관리하기 위한 시스템입니다.

교수자와 운영자는 이 시스템을 통해 다음 내용을 확인할 수 있습니다.

- 전체 학생 중 몇 명을 관리하고 있는지
- 학생들의 평균 이수율이 어느 정도인지
- 상담이 우선적으로 필요한 학생이 누구인지
- 학생별로 어떤 트랙을 이수 중인지
- 학생이 이미 이수한 교과목과 앞으로 이수해야 할 교과목이 무엇인지
- 성적증명서에 나온 교과목이 부트캠프 트랙과 어떻게 연결되는지
- 다음 학기 또는 다음 과정으로 어떤 트랙이나 PBL을 추천할 수 있는지

## 현재 배포 및 저장 위치

- Vercel 배포 페이지: https://pnu-bootcamp-student-management.vercel.app
- GitHub 저장소: https://github.com/sam7614/pnu_bootcamp
- GitHub 업로드 PR: https://github.com/sam7614/pnu_bootcamp/pull/1

## Wiki 목차

1. [시스템 개요와 목적](01-시스템-개요와-목적)
2. [사용자와 주요 업무 흐름](02-사용자와-주요-업무-흐름)
3. [교육과정과 트랙 구조](03-교육과정과-트랙-구조)
4. [주요 화면 사용법](04-주요-화면-사용법)
5. [성적증명서 업로드와 매핑](05-성적증명서-업로드와-매핑)
6. [추천 로직과 상담 활용](06-추천-로직과-상담-활용)
7. [데이터 관리와 개인정보 주의사항](07-데이터-관리와-개인정보-주의사항)
8. [배포와 향후 개발 계획](08-배포와-향후-개발-계획)

## 개발 이슈 기록

지난 개발 과정은 GitHub Issues에 완료 기록으로 정리했습니다.

- [#2 부트캠프 학생관리 웹앱 기획 및 구조 설계](https://github.com/sam7614/pnu_bootcamp/issues/2)
- [#3 운영 대시보드 KPI와 연도·학기·과정 필터 구현](https://github.com/sam7614/pnu_bootcamp/issues/3)
- [#4 100명 학생 데이터와 학생관리·상담 화면 구축](https://github.com/sam7614/pnu_bootcamp/issues/4)
- [#5 중급·고급 과정 및 교과형·몰입형 PBL 구조 반영](https://github.com/sam7614/pnu_bootcamp/issues/5)
- [#6 트랙·교과목·PBL 클릭형 안내 팝업 구현](https://github.com/sam7614/pnu_bootcamp/issues/6)
- [#7 학생별 수강이력과 연도·학기별 이수 현황 구현](https://github.com/sam7614/pnu_bootcamp/issues/7)
- [#8 학생별 추천 트랙과 상담 근거 표시 구현](https://github.com/sam7614/pnu_bootcamp/issues/8)
- [#9 상담 음성파일 업로드와 상담이력 정리 흐름 구현](https://github.com/sam7614/pnu_bootcamp/issues/9)
- [#10 성적증명서 PDF 업로드와 교과목 매핑 확인 흐름 구현](https://github.com/sam7614/pnu_bootcamp/issues/10)
- [#11 검색창과 화면 겹침·컬럼 넘침 UX 개선](https://github.com/sam7614/pnu_bootcamp/issues/11)
- [#12 개발계획서 작성, 슬라이드 제작, Vercel 배포, GitHub 업로드](https://github.com/sam7614/pnu_bootcamp/issues/12)

향후 개선 과제는 열린 이슈로 남겨두었습니다.

- [#13 실제 DB·로그인·권한관리 기반 운영 시스템 전환](https://github.com/sam7614/pnu_bootcamp/issues/13)
- [#14 실제 AI 음성인식·성적표 OCR API 연동](https://github.com/sam7614/pnu_bootcamp/issues/14)

