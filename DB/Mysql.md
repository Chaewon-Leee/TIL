# ✨ DB mysql ✨

## **스키마**

- 표 (table) -> 데이터베이스 (표들을 그룹핑하는 것) = 스키마
- 스키마 : 연관된 데이터들을 그룹핑 -> 이 모든 것들은 데이터베이스 서버 내부에 저장

## **mysql**

SQL (Structured Query Language)

- Structured : 구조화 되어있다
- Query : 질의한다

> > 데이터베이스를 제어하는 언어

## **스키마의 사용**

|              스키마              |                                     |
| :------------------------------: | :---------------------------------: |
| `CREATE DATABASE 데이터베이스명` |          데이터베이스 생성          |
|  `DROP DATABASE 데이터베이스명`  |          데이터베이스 삭제          |
|         `SHOW DATABASES`         |          데이터베이스 보기          |
|       `USE 데이터베이스명`       | 해당 데이터베이스명을 대상으로 실행 |

## **CRUD (CREATE READ UPDATE DELETE)**

```
CREATE TABLE [IF NOT EXISTS] 테이블명(
  컬럼명 데이터타입(사이즈),
  ...
  )
```

- `[IF NOT EXISTS]` : 테이블이 존재하지 않다면 추가
- 컬럼명 데이터타입 `[NOT NULL|NULL] [DEFAULT value] [AUTO_INCREMENT]`

  - datatype : char, varchar, blob, int, bigint, float, double ...

### **key constraints**

|                                            key constraints                                             |                                                                                     |
| :----------------------------------------------------------------------------------------------------: | :---------------------------------------------------------------------------------: |
|              `[CONSTRAINT [제약식명]] PRIMARY KEY [USING BTREE or    HASH] (컬럼명, ...)`              |                           null 값 존재 불가능한 유일한 키                           |
| `[CONSTRAINT [제약식명]] UNIQUE [INDEX       or  KEY] [INDEX이름] [USING BTREE or HASH] (컬럼명, ...)` | 유일해야하는 조건 <br> 사실상 primary key로 사용해도 되는 것 <br> null 값 존재 가능 |
|                               `[CONSTRAINT [제약식명]] CHECK (조건 ...)`                               |                         도메인 무결성을 확보하기 위한 코드                          |

### **Foregin key constraints**

- 데이터 무결성 중 참조무결성의 유지를 위해 DB 생성시 데이터 변경/삭제의 조건을 입력
- 아무것도 하지 않기, 같이 지우기 등의 Action
- 부모 테이블의 PK를 가져와 FK로 보유 = 자식 테이블
- 부모 테이블 생성 후, 자식 테이블 생성

  ````[CONSTRAINT [제약식명]]
  FOREIGN KEY KEY이름 (FK 컬럼명, ...)
  REFERNECES 부모테이블 이름 (PK 컬럼명, ...)
  Action : Cascading```
  ````

- 제약식명 : 일종의 제약식 ID 값!

- 데이터의 수정/삭제시 FK에 의해 관계된 테이블의 값들이 동시에 변경되는 것

  ```[ON DELETE {RESTRICT|CASCADE|SET NULL|NO ACTION} ]
    [ON UPDATE {RESTRICT|CASCADE|SET NULL|NO ACTION} ]
  ```

  |   조건    |                                                                                                                                                           |
  | :-------: | :-------------------------------------------------------------------------------------------------------------------------------------------------------- |
  |  Cascade  | Cascaded delete 동시에 삭제 <br>Cascaded update 동시에 업데이트 <br> Parent 테이블의 reference key가 삭제됐을 경우, child table의 관련 instance 모두 삭제 |
  | No Action | 아무일도 하지 않음                                                                                                                                        |
  | Restrict  | 아무일도 하지 않음                                                                                                                                        |
  | set null  | 관련된 행을 null로                                                                                                                                        |

- 주의
  - 자식 테이블의 외래키 컬럼은 인덱스로 지정하는 게 좋다
  - 첫 번째 컬럼으로 나열되어야 한다
  - 부모 테이블과 자식 테이블의 인덱스는 반드시 타입 호환이 되어야한다

## **SELECT**

- SELECT문으로 다른 테이블의 정보를 가져와 새로운 테이블을 생성할 수 있다

  ````CREATE TABLE 테이블명 [AS]
  SELECT \* FROM 이전 테이블```
  ````

- 조건

|                            조건                             |                                              |
| :---------------------------------------------------------: | :------------------------------------------: |
|   SELECT 컬럼명, ... FROM 테이블명 WHERE 컬럼명 = 데이터    | 컬럼명 중 데이터인 값을 가지는 데이터만 출력 |
| SELECT 컬럼명, ... FROM 테이블명 ORDER BY 컬럼명 [DESC/ASC] | 컬럼명 [내림차순/오름차순]으로 정렬해서 출력 |

## **INSERT**

- 만들어진 테이블에 데이터를 입력하는 구문
- 직접 입력, SELECT문으로 다른 테이블 정보 가져오기
- CSV 파일을 통한 입력 등 지원

1. 컬럼별로 데이터 입력
   `INSERT INTO 테이블명 (컬럼명, ...) VALUES (데이터, ...)`
2. 전체 컬럼에 데이터 입력
   `INSERT INTO 테이블명 VALUES (데이터, ...)`
3. INSERT with SELECT : 기존 테이블 정보를 다른 테이블에 입력
   ```INSERT INTO 테이블명 (컬럼명)
   SELECT 컬럼이름
   FROM 테이블명
   WHERE condition
   ```
4. CSV 파일로도 가져올 수 있다

## **UPDATE**

- WHERE 조건 추가 가능

`UPDATE 테이블명 SET 컬럼명 = 데이터, ...`

## **DELETE**

`DELETE FROM 테이블명 WHERE 조건절`

## **ALTER**

- 테이블의 구조를 변경하는 구문
- 컬럼 삭제, 추가, 이름/타입 변경, 제약 변경 등 지원
- 변경은 전체 DB에 영향을 줌 -> 가능한 최소화 필요

| ALTER TABLE 테이블명                                                          |        return        |
| :---------------------------------------------------------------------------- | :------------------: |
| `ADD 컬럼명 datatye`                                                          |       컬럼 add       |
| ` DROP COLUMN 컬럼명`                                                         |      컬럼 drop       |
| `MODIHY COLUMN 컬럼명 datatype`                                               | 컬럼 definition 변경 |
| `CHANGE COLUMN 기존명 새로운이름 컬럼 definition (datatype, null여부 등 ...)` |      이름 변경       |

- 제약조건 추가 및 변경

| ALTER TABLE 테이블명                                                                |  return   |
| :---------------------------------------------------------------------------------- | :-------: |
| `ADD FOREIGN KEY key 이름 (컬럼명) REFERNCES 부모테이블명 (컬럼명) cascade 조건...` | 컬럼 add  |
| `DROP FOREIGN KEY key 이름`                                                         | 컬럼 drop |
