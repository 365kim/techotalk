const FRONT_END = '프론트엔드';
const BACK_END = '백엔드';
const NETWORK = '네트워크';
const OPERATING_SYSTEM = '운영체제';
const DATA_STRUCTURE_AND_ALGORITHM = '자료구조 & 알고리즘';
const DATABASE = '데이터베이스';
const DESIGN_PATTERN_AND_ARCHITECTURE = '디자인패턴 & 설계';
const TEST = '테스트';
const ETC = '기타';

export const SORTED_CATEGORIES = [
  FRONT_END,
  BACK_END,
  NETWORK,
  OPERATING_SYSTEM,
  DATA_STRUCTURE_AND_ALGORITHM,
  DATABASE,
  DESIGN_PATTERN_AND_ARCHITECTURE,
  TEST,
  ETC,
];

const frontEnd = [
  '실행 컨텍스트',
  '상태관리와 반응형 프로그래밍',
  'Flex Layout',
  'Form Validation',
  'CSR&amp;SSR',
  '불변성',
  'CSS 방법론',
  'Generator &amp; Iterator',
  '모듈 번들러와 빌드도구',
  '프론트엔드에서 Component란',
  '프론트엔드에서의 테스트 종류',
  '프론트엔드 성능 측정',
  '브라우저 렌더링',
  '프론트엔드의 비동기',
  '웹 접근성 &amp; 표준',
  '프론트엔드에서의 에러 핸들링',
  'SPA',
  'Callback',
  'Scope &amp; Closure',
  '이벤트루프',
  'Prototype',
  'This',
  'DOM&amp;BOM',
  'Virtual DOM',
  '프론트엔드에서의 에러핸들링',
  '웹 접근성',
  '리액트 렌더링 최적화',
  'Node.js',
  'React 18에서의 변경점',
  'React의 state',
  '제어 컴포넌트 vs 비제어 컴포넌트',
  'Hooks',
  '브라우저 렌더링',
  '비동기 처리 - Promise',
  '클로저',
  '디바운싱과 쓰로틀링',
  '브라우저의 Event Loop',
  'this',
  '데이터타입과 불변성',
  'var let const 비교',
];

const backEnd = [
  'Docker #실습편 3부',
  'Docker #실습편 2부',
  'Docker #실습편 1부',
  '지속적 배포',
  'Docker #이론편',
  'JVM Specification',
  'Spring vs Spring Boot',
  'Servlet vs Spring',
  'Stream',
  'JUnit5 사용법',
  '빌드와 배포',
  '상속보다는 Composition',
  'DTO vs VO',
  '제네릭',
  'JCF',
  'Spring Batch',
  'Event Sourcing',
  'Spring Security',
  'Spring IoC/DI',
  'Spring Webflux',
  'Java final과 불변 객체',
  '자바 직렬화',
  'GC',
  'Spring과 Spring Boot',
  'Servlet vs Spring',
  'JDBC, SQLMAPPER, ORM',
  '빌드와 배포',
  '상속보다는 Composition',
  'DTO vs VO',
  'Generics',
  'JCF',
  'Sticky session &amp; Session Clustering',
  'AOP - Advice Target Pointcut',
  'JDK Dynamic Proxy vs CGLIB Proxy',
  'JVM Stack &amp; Heap',
  'JVM의 Garbage Collector',
  'Servlet &amp; Spring',
  'JPA와 JDBC',
  'DTO vs VO',
  '@Transactional',
  'JDK Dynamic Proxy와 CGLIB',
  'JVM Memory Layout',
  'JDBC, SQL Mapper, ORM',
  'Gradle',
  '스프링 트랜잭션',
  'Spring Bean',
  'DI와 IoC',
  'Servlet &amp; Spring Web MVC',
  'Java 11',
  'stream vs for',
  '람다',
  '인터페이스',
];

const network = [
  '웹소켓&amp;스프링',
  'RESTful',
  'Nginx',
  'TCP/IP',
  '웹스토리지 &amp; 쿠키',
  'HTTPS',
  '인증과 인가',
  'HTTP1.1, HTTP2, 그리고 QUIC',
  'Forward Proxy vs Reverse Proxy vs Load Balancer',
  'OSI 7 Layer',
  '네트워크 보안',
  'CORS',
  'Web Server vs WAS',
  'Web 요청 &amp; 응답과정',
  'Web Socket',
  'ARP 프로토콜',
  'DNS',
  'CORS',
  'XSS',
  'Realtime Web',
  '네트워크 보안',
  '인증과 인가',
  'HTTP/1.1, HTTP/2, 그리고 QUIC',
  'OSI 7 Layer',
  'HTTP 2.0',
  'Latency &amp; Bandwidth',
  'TLS',
  'Forward Proxy vs Reverse Proxy',
  'Connection Pool &amp; Keep-Alive',
  '요청 응답 흐름 과정',
  'TCP UDP',
  'Web server  vs WAS',
  'Forward Proxy, Reverse Proxy, Load Balancer',
  '웹 요청과 응답',
  'CORS',
  'Web polling vs Web push',
  'Apache MPM vs NGINX vs Node.js',
  '쿠키 vs 세션 vs 토큰 vs 캐시',
  'REST API',
  '데이터 통신',
  'HTTP',
  'HTTP 메서드와 상태코드',
];

const operatingSystem = [
  'Deadlock',
  '가상 메모리',
  'Mutex vs Semaphore',
  'GC',
  'Blocking vs Non-Blocking, Sync vs Async',
  '리눅스 파일 시스템',
  '리눅스 메모리 관리',
  '교착상태',
  'Caching(캐싱)',
  'Cache',
  'Process vs Thread',
  '리눅스 파일 시스템',
  'Block vs Non-Block &amp; Sync vs Async',
  '리눅스 메모리 관리',
  'Process vs Thread',
  'Interrupt와 Context Switching',
  'Process &amp; Thread',
];

const dataStructureAndAlgorithm = [
  '트리 자료구조 #2',
  '트리 자료구조 #1',
  '선형 자료구조',
  '정렬 알고리즘',
  '최단 경로 &amp; 최소 신장 트리',
  '탐색 알고리즘',
  '#️⃣Hash Function',
  '시간복잡도',
];

const database = [
  'Replication',
  '데이터베이스 Lock',
  'MySQL 아키텍처',
  '트랜잭션',
  '인덱싱',
  'Redis',
  '데이터베이스 락',
  'Flyway',
  'ORM vs SQL Mapper vs JDBC',
  '트랜잭션 메커니즘',
  'Clustered vs Non-clustered Index',
  'Sharding, Clustering, Replication',
  'SQL 인젝션',
  'scale up vs scale out, SPOF',
  '트랜잭션',
  '인덱스',
];

const designPatternAndArchitecture = [
  '싱글턴과 정적클래스',
  '상태 패턴',
  'OOP',
  '전략패턴',
  'MVC 패턴',
  '도메인 주도 설계',
  'MVC 패턴',
  'OCP와 전략패턴',
  '전략 패턴',
  'MVC Pattern',
  'MVC',
  '함수형 프로그래밍',
  'Flux Architecture',
  'OOP vs FP',
  '상속과 조합',
  '싱글턴 패턴과 정적 클래스',
];

const test = [
  'TDD와 단위테스트',
  '테스트 코드 최적화 여행기',
  '테스트 격리',
  'Classic TDD VS Mockist TDD',
  '편하게 콘솔 테스트하기',
];

const etc = [
  '인텔리제이 디버깅',
  '정규 표현식',
  'UML',
  '애자일',
  '암호',
  '프레임워크 vs 라이브러리 vs API',
  '프레임워크 vs 라이브러리 vs API',
  'API vs Library vs Framework',
  'Logging(로깅) #2',
  'Logging(로깅) #1',
  '로깅',
  '우아한테크코스 도서관리시스템',
  '점심봇',
  'SUPP',
  'RegExp의 효율적 활용',
  'Parameter와 Argument',
  'Merge, Rebase, Cherry pick',
  'Git 브랜칭 전략',
];

export function getCategory(topic) {
  if (frontEnd.includes(topic)) {
    return FRONT_END;
  }
  if (backEnd.includes(topic)) {
    return BACK_END;
  }
  if (network.includes(topic)) {
    return NETWORK;
  }
  if (operatingSystem.includes(topic)) {
    return OPERATING_SYSTEM;
  }
  if (dataStructureAndAlgorithm.includes(topic)) {
    return DATA_STRUCTURE_AND_ALGORITHM;
  }
  if (database.includes(topic)) {
    return DATABASE;
  }
  if (designPatternAndArchitecture.includes(topic)) {
    return DESIGN_PATTERN_AND_ARCHITECTURE;
  }
  if (test.includes(topic)) {
    return TEST;
  }
  if (etc.includes(topic)) {
    return ETC;
  }

  console.error('아무 classification에 속하지 않는 없는 영상:', topic);
}
