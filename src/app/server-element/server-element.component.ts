import {
  AfterContentChecked,
  AfterContentInit,
  AfterViewChecked,
  AfterViewInit,
  Component,
  DoCheck,
  ElementRef,
  Input,
  OnChanges,
  OnDestroy,
  OnInit,
  SimpleChanges,
  ViewChild,
  ViewEncapsulation,
} from '@angular/core';

@Component({
  selector: 'app-server-element',
  templateUrl: './server-element.component.html',
  styleUrls: ['./server-element.component.css'],
  encapsulation: ViewEncapsulation.Emulated, // None -- to disable view encapsulation, ShadowDom -- similar to Emulated, Emulated -- the default
})
export class ServerElementComponent
  implements
    OnInit,
    OnChanges,
    DoCheck,
    AfterContentInit,
    AfterContentChecked,
    AfterViewInit,
    AfterViewChecked,
    OnDestroy
{
  @Input('srvElement') element: {
    type: string;
    name: string;
    content: string;
  };
  @Input() name: string;
  @ViewChild('header', { static: true }) header: ElementRef;

  constructor() {
    console.log('Constructor called!');
  }

  /**
   * Gets called on initialization of component
   *
   */

  ngOnInit(): void {
    console.log('ngOnInit called!');
    // console.log('Text content: ' + this.header.nativeElement.textContent);
  }

  /**
   * Gets called when ever input field is changed
   *
   * @param changes changed element from input field that has been changed
   */

  ngOnChanges(changes: SimpleChanges): void {
    console.log('ngOnChanges called!');
    console.log(changes);
  }

  /**
   * Gets called when ever Angular checks for changes
   *
   */

  ngDoCheck(): void {
    console.log('ngDoCheck called!');
  }

  /**
   * Get's called when content is projected into a component for the first time (init)
   * via <ng-content></ng-content>
   *
   */

  ngAfterContentInit(): void {
    console.log('ngAfterContentInit called!');
  }

  /**
   * Gets called after every change detection cycle
   *
   */

  ngAfterContentChecked(): void {
    console.log('ngAfterContentChecked called!');
  }

  /**
   * Get's called after the view has been initialized
   *
   */

  ngAfterViewChecked(): void {
    console.log('ngAfterViewChecked called!');
  }

  /**
   * Get's called after the content has been checked
   *
   */

  ngAfterViewInit(): void {
    console.log('ngAfterViewInit called!');
    console.log('Text content: ' + this.header.nativeElement.textContent);
  }

  /**
   * Get's called before the component has been destroyed
   *
   */

  ngOnDestroy(): void {
    console.log('ngOnDestroy called!');
  }
}
