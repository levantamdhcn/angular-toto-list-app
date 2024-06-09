import { NgModule } from "@angular/core";
import { CardComponent } from "./card/card.component";

@NgModule({
    declarations: [CardComponent],
    bootstrap: [],
    exports: [CardComponent]
})
export class SharedModule {}