---
date: '2022-05-11'
title: 'API 문서 자동화'
categories: ['Web', 'documentation', 'API','TEST']
summary: '1. 신규 API 생성 (혹은 API 문서 신규 작성)
2. 테스팅 실시하며 `Spring-REST-Docs`로 해당 API 스펙 `.doc` 형식으로 문서화
3. `.doc` 형식을 `restdocs-api-spec` **을 이용해** `OpenAPI3` **형식으로 컨버팅 (**`json`**,** `yaml` **모두 지원)**
4. `Swagger-UI` 에 `OpenAPI3` 형식을 모아 빌드해서 API 문서를 완성'
thumbnail: './test23.png'
---

# API 문서 자동화

@이동주 

## 기술 스택

- `Spring-REST-Docs` : API 검증 테스트, adoc 문서 빌드
- `REST-Docs-API-Spec` : adoc 형식을 OpenAPI3 형식으로 컨버팅
- `OpenAPI3` : Swagger 문서를 빌드하는 API 표준 형식
- `Swagger-UI` : Swagger와는 달리 독립적으로 실행 가능 (npm, docker, unpkg 지원)

## Workflow

1. 신규 API 생성 (혹은 API 문서 신규 작성)
2. 테스팅 실시하며 `Spring-REST-Docs`로 해당 API 스펙 `.doc` 형식으로 문서화
3. `.doc` 형식을 `restdocs-api-spec` **을 이용해** `OpenAPI3` **형식으로 컨버팅 (**`json`**,** `yaml` **모두 지원)**
4. `Swagger-UI` 에 `OpenAPI3` 형식을 모아 빌드해서 API 문서를 완성
    1. 하나의 API문서만 운영하면 됨.

## 응용

1. Swagger로 작성된 HLM API 문서화를 Swagger-ui를 적용하려 할 때, 지적된 문제점
    1. OpenAPI3 형식의 문서를 따로 관리해야 한다.
    2. 해당 형식을 호스팅해줘야 한다.
2. 하지만, API 문서를 모두 모아 운영할 수 있다면, 편익이 더 크다.
    1. 비지니스 로직에서 Swagger Annotation 관련 코드조각이 모두 빠진다.
    2. 프로덕트 관련 조직과의 협업에 있어 API 문서를 url 하나로 운용할 수 있다.
3. GitHub Actions에 Testing 로직을 추가한 것처럼 dev에서 호스팅하고 있는 swagger 문서처럼 붙일 수 있으면 가장 좋음.

## 검토

1. 코틀린으로 작성?
    1. pros: best practice 많음
    2. cons: 팀 단위 학습비용 필요

## References

- [https://rlxuc0ppd.toastcdn.net/presentation/[NHN FORWARD 2020]MSA 환경에서 API 문서 관리하기.pdf](https://rlxuc0ppd.toastcdn.net/presentation/%5BNHN%20FORWARD%202020%5DMSA%20%ED%99%98%EA%B2%BD%EC%97%90%EC%84%9C%20API%20%EB%AC%B8%EC%84%9C%20%EA%B4%80%EB%A6%AC%ED%95%98%EA%B8%B0.pdf)
- [https://taetaetae.github.io/posts/a-combination-of-swagger-and-spring-restdocs/](https://taetaetae.github.io/posts/a-combination-of-swagger-and-spring-restdocs/)
- [https://tech.kakaoenterprise.com/127](https://tech.kakaoenterprise.com/127)
- [https://techblog.woowahan.com/2597/](https://techblog.woowahan.com/2597/)
- [https://techblog.woowahan.com/2678/](https://techblog.woowahan.com/2678/)