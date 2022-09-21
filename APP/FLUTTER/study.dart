class Person {
  String name;
  int age;
  String sex;

  Person({String name, int age, String sex}) {
    // 생성자: 인스턴스가 호출될 때 한번만 호출, {}가 붙을 경우, optional로 변한다
    this.name = name;
    this.age = age;
    this.sex = sex;
  }
} // dart가 기본 생성자를 만들어준다!

void main(List<String> args) {
  Person p1 = new Person(age: 10); // p1이라는 이름으로 새로운 Person 인스턴스를 만든다
  Person p3 = new Person(name: 'chae');
}
