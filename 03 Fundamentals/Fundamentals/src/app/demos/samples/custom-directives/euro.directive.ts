import { Directive, ElementRef, HostListener } from "@angular/core";

@Directive({
  selector: "[toEuro]"
})
export class EuroDirective {
  private el: HTMLInputElement;

  constructor(private elementRef: ElementRef) {
    this.el = this.elementRef.nativeElement;
  }

  @HostListener("focus", ["$event.target.value"])
  onFocus(value) {
    this.el.value = value.replace("€ ", "");
  }

  @HostListener("blur", ["$event.target.value"])
  onBlur(value) {
    this.el.value = `€ ${value}`;
  }
}
