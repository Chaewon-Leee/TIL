데이터베이스의 목적

- 컴퓨터 언어를 통해 데이터 조작 및 관리

mysql 구조

- 표 (table) -> 데이터베이스 (표들을 그룹핑하는 것) = 스키마
- 스키마 : 연관된 데이터들을 그룹핑
  -> 이 모든 것들은 데이터베이스 서버 내부에 저장

SQL (Structured Query Language)

- Structured : 구조화되ㅣ어있다
- Query : 질의한다
- 데이터베이스를 제어하는 언어

1. 스키마의 사용

- CREATE DATABASE 데이터베이스명 : 데이터베이스 생성
- DROP DATABASE 데이터베이스명 : 데이터베이스 삭제
- SHOW DATABASES : 데이터베이스 보기
- USE 데이터베이스명 : 해당 데이터베이스명을 대상으로 실행

  2.테이블

- CREATE TABLE 테이블명(
  컬럼명 데이터타입() NULL유무,
  ...
  PRIMARY KEY(컬럼명)
  )
  : 테이블 생성
- create table in mysql cheat sheet : 용어 정리된 sheet 샘플들 참조

3. CRUD (CREATE READ UPDATE DELETE)

- INSERT INTO 테이블명 (컬럼명, ...) VALUES (데이터, ...)
- SELECT 컬럼명, ... FROM 테이블명
  - SELECT 컬럼명, ... FROM 테이블명 WHERE 컬럼명 = 데이터 : 컬럼명 중 데이터인 값을 가지는 데이터만 출력
  - SELECT 컬럼명, ... FROM 테이블명 ORDER BY 컬럼명 [DESC/ASC] : 컬럼명 [내림차순/오름차순]으로 정렬해서 출력
  - - LIMIT 추가해서 개수 지정
- UPDATE 테이블명 SET 컬럼명 = 데이터, ...
  - WHERE 조건 추가 가능
- DELETE FROM 테이블명 WHERE 조건절

관계형데이터베이스의 필요성

- 중복을 제거해야한다
- 테이블을 분리한다면 해당 테이블을 연결해야 함

1. 테이블 조합 (JOIN)

- SELECT 컬럼명, ... FROM 테이블명1 LEFT JOIN 테이블명2 ON 테이블명1.컬럼명1 = 테이블명2.컬럼명2
- - ALIAS : 이름 지정
