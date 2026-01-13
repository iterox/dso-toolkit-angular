import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FailingBuild } from './failing-build';

describe('FailingBuild', () => {
  let component: FailingBuild;
  let fixture: ComponentFixture<FailingBuild>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FailingBuild]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FailingBuild);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
