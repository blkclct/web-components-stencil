import { Component, Prop, h, State, Event, EventEmitter } from "@stencil/core";
import { calc } from "../../utils/utils";

@Component({
  tag: "ks-calc",
  styleUrl: "ks-calc.css",
  shadow: true
})
export class CalcUlator {
  @Prop() input: string = "12+4";
  @State() _input: string = "12+4";
  @Event() changeResult: EventEmitter;

  componentWillLoad() {
    return (this._input = this.input);
  }

  private calcText() {
    return calc(this._input);
  }

  handleInputChange(event: Event) {
    this._input = event.target["value"];
    this.changeResult.emit(this.calcText());
  }

  render() {
    return (
      <div class="container">
        <input
          value={this._input}
          onChange={event => this.handleInputChange(event)}
        />
        <div>{this.calcText()}</div>
      </div>
    );
  }
}
