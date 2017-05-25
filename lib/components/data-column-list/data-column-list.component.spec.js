import { async, TestBed } from '@angular/core/testing';
import { DataColumnListComponent } from './data-column-list.component';
describe('MmColumnsComponent', function () {
    var component;
    var fixture;
    beforeEach(async(function () {
        TestBed.configureTestingModule({
            declarations: [DataColumnListComponent]
        })
            .compileComponents();
    }));
    beforeEach(function () {
        fixture = TestBed.createComponent(DataColumnListComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', function () {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=C:/_user/Code/dashboard/mm-dashboard-manager/src/components/data-column-list/data-column-list.component.spec.js.map