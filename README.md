# 소소 (소중한 소품샵)

## 📌 프로젝트 개요

**소소 (소중한 소품샵)**

---

## 🏗️ 기술 스택

- **프레임워크**: Next.js 15
- **스타일링**: Tailwind CSS
- **상태관리**: Zustand
- **데이터 요청**: TanStack Query
- **버전 관리**: Git & Git Flow

---

## 📜 코드 컨벤션

일관된 코드 스타일을 유지하고 가독성을 높이기 위해 다음 규칙을 따릅니다.

### ✅ 함수

- **단일 책임 원칙(SRP)** 을 준수하여 작성합니다.
- `const functionName = () => {}` 형태를 사용합니다.

### ✅ Hook

- 연관성이 있는 기능만 하나의 hook에서 묶어 관리합니다.

### ✅ 삼항 연산자

- 가독성을 높이기 위해 조건을 변수화하여 사용합니다.

### ✅ 네이밍 규칙

- **변수명**: `카멜케이스(camelCase)`
- **상수명**: `대문자 스네이크케이스(UPPER_SNAKE_CASE)`
- **함수명**: `handle + 이벤트 동작 + 명확한 이름` (예: `handleClickButton`)
- **파일명**:
  - **API 파일**: 동사 (예: `fetchData.ts`)
  - **TanStack Query 관련 파일**: `use + 동사 + Query(Mutation)` (예: `useFetchDataQuery.ts`)

---

## 🚀 Git 컨벤션

버전 관리는 **Git Flow** 전략을 따르며, 다음 컨벤션을 준수합니다.

### ✅ 커밋 메시지 형식

Feat: 작업내용

### ✅ Pull Request 규칙

- PR 제목은 **마지막 커밋 메시지**를 사용합니다.
- PR 설명에는 작업한 내용을 기술합니다.

---

## 🛠️ 설치 및 실행 방법

# 1. 레포지토리 클론

# 2. 프로젝트 디렉토리 이동

# 3. 패키지 설치

yarn install or npm install

# 4. 개발 서버 실행

yarn dev or npm run dev
