interface State {
  name: string;
  age: number;
}

type PartialState = Partial<State>;

this.setState({ name: "kenji" }); // Error
this.setState({ name: "kenji", age: this.state.age }); // ok
