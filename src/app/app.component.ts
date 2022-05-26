import { Component, OnDestroy, OnInit, ViewChild } from "@angular/core";
import axios from "axios";


@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
})
export class AppComponent implements OnInit, OnDestroy {

  title = "app";
  id = 0;
  person: any;
  showMenu: Boolean = true;



  @ViewChild('mobileSideBar') mobileSideBar;

  async getRandomUserName() {
    this.person = await this.callMethod(this.person);
    this.ngOnDestroy();
  }

  closeSideBar(){
      this.showMenu =!this.showMenu;
  }

  async ngOnInit() {
    this.person = await this.callMethod(this.person);
    console.log(this.person);
    this.id = window.setInterval(async () => {
      this.person = await this.callMethod(this.person);
    }, 10000);
  }

  ngOnDestroy() {
    if (this.id) {
      window.clearInterval(this.id);
      this.id = window.setInterval(async () => {
        this.person = await this.callMethod(this.person);
      }, 10000);
    }
  }

  async callMethod(person: Array<any>): Promise<any> {
    var api = "https://randomuser.me/api/";

    try {
      const response = await axios.get(api);
      person = response.data.results[0];
      return person;
    } catch (error) {
      console.error(error);
      return error;
    }
  }
}
