GitFlow

- main
- develop : 현재 원본의 사본 (branch 만들기)
- feature : 사본에 기능을 먼저 추가해서 오류가 없을 경우, develop
- release : main에 develop을 합치기 전 테스트
  - rebase 테스트가 마무리되면 develop & main에 합쳐준다
- hotfix : 버그 등과 같이 급한 상황에서는 main에서 branch를 바로 만들어서 main에 바로 합침

Trunk-based
main 브랜치 하나만 관리하고 그냥 수정할 곳이 있으면 branch 나눠서 그냥 바로 main에 붙임

- 그런데 자주 테스트 해봐야함
