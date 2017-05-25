import { async, TestBed } from '@angular/core/testing';
import { ColorRangeComponent } from './color-range.component';
describe('ColorRangeComponent', function () {
    var component;
    var fixture;
    beforeEach(async(function () {
        TestBed.configureTestingModule({
            declarations: [ColorRangeComponent]
        })
            .compileComponents();
    }));
    beforeEach(function () {
        fixture = TestBed.createComponent(ColorRangeComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', function () {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=C:/_user/Code/dashboard/mm-dashboard-manager/src/components/color-range/color-range.component.spec.js.map