# Simple Factory 패턴

 - 객체를 반환하는 함수 ( 보통 함수형으로 사용 )
 - 주로 조건문에 따라 다른 객체를 반환함
    - 단일 책임 원칙 위반! ( if문 마다 실행문이 달라질 가능성이 높아서 위반 - 애매한 범위 )
    - 개방 폐쇄 원칙 위반!


# 팩토리 메서드(Factory Method)
 - 상위 클래스가 인터페이스 역할, 하위 클래스에서 구체적인 구현
 - 하위 클래스를 다양하게 만들어 OCP, SRP 충족
 - 상속을 통해서도 다른 객체를 생성할 수 있음
 - 상위 클래스와 팩토리는 인터페이스와 같은 역할을 하고, 하위 클래스에서 protected된 것들을 재정의 하여 사용
 - 기존 코드를 건드릴 경우 OCP 위반 가능성 높음
 - 인터페이스로 변경시에 인터페이스 안에서는 구현이 불가능
