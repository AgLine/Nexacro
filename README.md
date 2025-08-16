# ⚡ 전기차 충전소 ERP
---
## 📌 프로젝트 개요
- **기간**: 2024.08 ~ 2024.10
- **사용 기술**: Spring Boot 2.7, Nexacro N
- **개발 환경**: Eclipse, Maven, Oracle Database 11g, TOBESOFT Nexacro Studio

---
## 🎯 프로젝트 목적
Spring Boot와 Nexacro를 연동하여 실제 ERP 시스템과 유사한 구조를 구현해보는 것을 목표로 하였습니다. 

권한 관리, 공통 코드 관리, 상태 변경 이력 관리 등 ERP 핵심 기능을 직접 설계·구현함으로써 실무에 가까운 개발 경험을 쌓고자 하였습니다.

---
## 👥 역할 분담
### 🙋‍♂️ 내 기여도
| 기능 영역 | 상세 기여 내용 |
|-----------|-----------------------------------------------------------------------------------------------------------------------------------|
| **권한 관리** | 사용자 권한을 시스템관리자, 관리자, 일반 사용자, AS 기사로 분류하고, 각 권한에 따라 접근 가능한 메뉴를 동적으로 제어 |
| **콤보박스 코드 관리** | 콤보박스 항목을 공통 코드 테이블로 분리하여 중앙 관리, 관리자 전용 등록·수정·삭제·사용여부 기능 구현 |
| **상태변경 이력 관리** | 사용자의 요청사항 변경 전/후 값, 변경자 ID, 변경일시를 History 테이블에 저장하는 기능 구현 |
|**Nexacro-Spring Boot**|Nexacro-Spring 연동에 어려움을 겪던 팀원들을 대신해 전체 연동 환경 구성 주도|
### 👥 팀 구성 및 역할 분담
- **본인**: 권한관리, 콤보박스 코드 관리, 상태변경 이력 관리, Nexacro-Spring Boot연동
- **팀원**: 전기차충전소 신청 CRUD
- **팀원**: AS신청 CRUD

---
## 🛠 주요 기능
### 1. 권한 관리
- 사용자 권한을 **시스템관리자 / 관리자 / AS 기사 / 일반 사용자**로 분류
- 각 권한에 따라 접근 가능한 메뉴를 **동적으로 제어**
- 로그인 시 사용자 권한을 **Oracle DB에서 조회 → 세션 저장 (nexacro.setEnvironmentVariable())**
- Nexacro 화면 로딩 시 권한 정보 기반으로 **메뉴 활성화/비활성화**

### 2. 콤보박스 코드 관리
- 콤보박스 항목을 **공통 코드 테이블**로 분리하여 일원화 관리
- **관리자만 접근 가능**한 등록·수정·삭제·사용여부 관리 기능 제공
- `combo` 컴포넌트에 **공통 코드 데이터 바인딩** → `transaction` 호출로 데이터셋에 로딩
- 화면 간 재사용성과 유지보수성 향상

### 3. 상태변경 이력 관리
- 사용자의 **모든 요청사항**에 대해 변경 전/후 값, 변경자 ID, 변경일시 등을 **History 테이블**에 저장
- **시스템관리자만 이력 확인 가능**
- 필터 조건 (기간, 사용자, 상태 등)으로 검색 가능

### 4. Nexacro-Spring Boot 연동
- NexacroRequestMappingHandlerAdapter, NexacroMethodArgumentResolver 등 Nexacro 전용 Bean 구성

---
## 📖 배운 점 & 느낀 점
- Nexacro와 Spring Boot 연동 과정에서 팀원들이 어려움을 겪었으나 직접 환경을 구성하고 문제를 해결하면서, 새로운 기술을 빠르게 학습하고 적용할 수 있는 자신감을 얻었습니다.
- 권한 관리 기능을 구현하면서 단순한 화면 제어가 아닌, 보안·운영 효율성 측면까지 고려해야 한다는 점을 배웠습니다. 이를 통해 시스템 개발 시 기능적 요구사항과 재사용성을 함께 고려하는 습관을 갖게 되었습니다.

---
## 📷 실행 화면
<img width="1153" height="594" alt="portfolio-details-6-1" src="https://github.com/user-attachments/assets/e1907025-213f-48f2-a172-883c167e5849" />
<img width="1920" height="927" alt="portfolio-details-6-2" src="https://github.com/user-attachments/assets/be8ad19c-6f83-4e04-8bfd-8627f83d1607" />
<img width="1920" height="925" alt="portfolio-details-6-3" src="https://github.com/user-attachments/assets/7f41bf2b-2c78-494d-8781-a61e0b22e722" />
<img width="1918" height="921" alt="portfolio-details-6-4" src="https://github.com/user-attachments/assets/13ef2f9c-3c4c-4ea8-8d97-0b8241494769" />


