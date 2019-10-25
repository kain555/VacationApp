import { async, TestBed } from '@angular/core/testing';
import { NewEmployeeComponent } from './new-employee.component';
describe('NewEmployeeComponent', () => {
    let component;
    let fixture;
    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [NewEmployeeComponent]
        })
            .compileComponents();
    }));
    beforeEach(() => {
        fixture = TestBed.createComponent(NewEmployeeComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=new-employee.component.spec.js.map