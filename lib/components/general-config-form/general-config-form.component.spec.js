import { async, TestBed } from '@angular/core/testing';
import { GeneralConfigFormComponent } from './general-config-form.component';
describe('GeneralConfigFormComponent', function () {
    var component;
    var fixture;
    beforeEach(async(function () {
        TestBed.configureTestingModule({
            declarations: [GeneralConfigFormComponent]
        })
            .compileComponents();
    }));
    beforeEach(function () {
        fixture = TestBed.createComponent(GeneralConfigFormComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', function () {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=C:/_user/Code/dashboard/mm-dashboard-manager/src/components/general-config-form/general-config-form.component.spec.js.map