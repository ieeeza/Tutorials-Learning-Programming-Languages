import { Routes } from "@angular/router";
import { HomeComponent } from "./components/home/home.component";
import { LogedComponent } from "./components/loged/loged.component";

export const routes: Routes = [
    {
        path: "",
        component: HomeComponent,
    },
    {
        path: "loged",
        component: LogedComponent
    }
];
