import { async, TestBed } from '@angular/core/testing';
import { DashboardManagerComponent } from './dashboard-manager.component';
describe('MmDashboardManagerComponent', function () {
    var component;
    var fixture;
    beforeEach(async(function () {
        TestBed.configureTestingModule({
            declarations: [DashboardManagerComponent]
        })
            .compileComponents();
    }));
    beforeEach(function () {
        fixture = TestBed.createComponent(DashboardManagerComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', function () {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=C:/_user/Code/dashboard/mm-dashboard-manager/src/dashboard-manager.component.spec.js.map