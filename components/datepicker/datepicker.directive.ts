
import { Directive, ElementRef, ViewContainerRef, ComponentFactoryResolver } from "@angular/core";
import { SuiPopupDirective } from "../popup/popup.directive";
import { SuiPopupConfig } from "../popup/popup.service";
import { SuiPopupBaseDirective } from "../popup/popup-base.directive";
import { PopupConfig, PopupTrigger } from "../popup/popup-config";
import { PositioningPlacement } from "../util/positioning.service";
import { SuiComponentFactory } from "../util/component-factory.service";

@Directive({
    selector: "[suiDatepicker]"
})
export class SuiDatepickerDirective extends SuiPopupBaseDirective {
    constructor(element:ElementRef,
                componentFactory:SuiComponentFactory) {

        super(element, componentFactory, new PopupConfig({
            trigger: PopupTrigger.OutsideClick,
            placement: PositioningPlacement.BottomLeft
        }));
    }
}
