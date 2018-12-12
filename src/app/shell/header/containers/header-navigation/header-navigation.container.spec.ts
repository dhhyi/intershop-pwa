import { ComponentFixture, TestBed, async } from '@angular/core/testing';
import { Store } from '@ngrx/store';
import { of } from 'rxjs';
import { anything, instance, mock, when } from 'ts-mockito';

import { MockComponent } from 'ish-core/utils/dev/mock.component';

import { HeaderNavigationContainerComponent } from './header-navigation.container';

describe('Header Navigation Container', () => {
  let component: HeaderNavigationContainerComponent;
  let fixture: ComponentFixture<HeaderNavigationContainerComponent>;
  let element: HTMLElement;
  let storeMock$: Store<{}>;

  beforeEach(async(() => {
    storeMock$ = mock(Store);
    when(storeMock$.pipe(anything())).thenReturn(of({}));

    TestBed.configureTestingModule({
      declarations: [
        HeaderNavigationContainerComponent,
        MockComponent({
          selector: 'ish-header-navigation',
          template: 'Header Navigation',
          inputs: ['categories', 'view'],
        }),
      ],
      providers: [{ provide: Store, useFactory: () => instance(storeMock$) }],
    })
      .compileComponents()
      .then(() => {
        fixture = TestBed.createComponent(HeaderNavigationContainerComponent);
        component = fixture.componentInstance;
        element = fixture.nativeElement;
      });
  }));

  it('should be created', () => {
    expect(component).toBeTruthy();
    expect(element).toBeTruthy();
    expect(() => fixture.detectChanges()).not.toThrow();
  });
});